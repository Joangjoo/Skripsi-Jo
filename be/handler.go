package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func GetCourses(c *gin.Context) {
    rows, err := DB.Query(`
        SELECT id, title, description, category_id, level, rating, thumbnail
        FROM courses
    `)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    defer rows.Close()

    var courses []Course = []Course{} 

    for rows.Next() {
        var c_row Course
        err := rows.Scan(
            &c_row.ID,
            &c_row.Title,
            &c_row.Description,
            &c_row.CategoryID,
            &c_row.Level,
            &c_row.Rating,
            &c_row.Thumbnail,
        )
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
            return
        }
        courses = append(courses, c_row)
    }

    c.JSON(http.StatusOK, courses)
}
