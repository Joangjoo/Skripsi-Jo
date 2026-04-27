package main

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GET /api/courses/:id/reviews
func GetReviews(c *gin.Context) {
	courseIDParam := c.Param("id")
	courseID, err := strconv.Atoi(courseIDParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid course ID"})
		return
	}

	rows, err := DB.Query(`
		SELECT id, course_id, reviewer, rating, comment, created_at
		FROM reviews
		WHERE course_id = $1
		ORDER BY created_at DESC
	`, courseID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var reviews []Review = []Review{}

	for rows.Next() {
		var r Review
		if err := rows.Scan(&r.ID, &r.CourseID, &r.Reviewer, &r.Rating, &r.Comment, &r.CreatedAt); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		reviews = append(reviews, r)
	}

	c.JSON(http.StatusOK, reviews)
}

// POST /api/courses/:id/reviews
func CreateReview(c *gin.Context) {
	courseIDParam := c.Param("id")
	courseID, err := strconv.Atoi(courseIDParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid course ID"})
		return
	}

	var input CreateReviewInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var review Review
	err = DB.QueryRow(`
		INSERT INTO reviews (course_id, reviewer, rating, comment)
		VALUES ($1, $2, $3, $4)
		RETURNING id, course_id, reviewer, rating, comment, created_at
	`, courseID, input.Reviewer, input.Rating, input.Comment).Scan(
		&review.ID,
		&review.CourseID,
		&review.Reviewer,
		&review.Rating,
		&review.Comment,
		&review.CreatedAt,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, review)
}

// PUT /api/reviews/:id
func UpdateReview(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid review ID"})
		return
	}

	var input UpdateReviewInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var review Review
	err = DB.QueryRow(`
		UPDATE reviews
		SET reviewer = $1, rating = $2, comment = $3
		WHERE id = $4
		RETURNING id, course_id, reviewer, rating, comment, created_at
	`, input.Reviewer, input.Rating, input.Comment, id).Scan(
		&review.ID,
		&review.CourseID,
		&review.Reviewer,
		&review.Rating,
		&review.Comment,
		&review.CreatedAt,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, review)
}

// DELETE /api/reviews/:id
func DeleteReview(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid review ID"})
		return
	}

	result, err := DB.Exec(`DELETE FROM reviews WHERE id = $1`, id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	rowsAffected, _ := result.RowsAffected()
	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Review not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Review berhasil dihapus"})
}
