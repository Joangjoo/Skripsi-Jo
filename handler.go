package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
    "strconv"
)

func GetCourses(c *gin.Context) {
    rows, err := DB.Query(`
        SELECT c.id, c.title, c.description, c.category_id, c.level_id, l.name AS level_name, c.rating, c.thumbnail, cat.name AS category_name
        FROM courses c
        JOIN Levels l ON c.level_id = l.id
        JOIN categories cat ON c.category_id = cat.id
        ORDER BY c.id ASC
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
            &c_row.LevelID,
            &c_row.LevelName,
            &c_row.Rating,
            &c_row.Thumbnail,
            &c_row.CategoryName,
        )
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
            return
        }
        courses = append(courses, c_row)
    }

    c.JSON(http.StatusOK, courses)
}

func GetCourseDetail(c *gin.Context) {
    idParam := c.Param("id")
    
    id, err := strconv.Atoi(idParam)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
        return
    }

    var course Course
    err = DB.QueryRow(`
        SELECT c.id AS course_id, c.title, c.description, c.category_id, cat.name AS category_name, c.level_id, l.name AS level_name, c.rating, c.thumbnail, c.duration, c.instructor, c.last_updated, c.price, c.learn, c.module, c.subtitle, c.overview
        FROM courses c
        JOIN categories cat ON c.category_id = cat.id
        JOIN levels l ON c.level_id = l.id
        WHERE c.id = $1
    `,
    id).Scan(
        &course.ID,
        &course.Title,
        &course.Description,
        &course.CategoryID,
        &course.CategoryName,
        &course.LevelID,
        &course.LevelName,
        &course.Rating,
        &course.Thumbnail,
        &course.Duration,
        &course.Instructor,
        &course.LastUpdated,
        &course.Price,
        &course.Learn,
        &course.Module,
        &course.Subtitle,
        &course.Overview,
    )
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, course)
}

func getCurriculum(c *gin.Context) {
    rows, err := DB.Query(`
        SELECT id, title, description, created_at
        FROM curriculums
    `)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    defer rows.Close()

    var curriculums []Curriculum = []Curriculum{}

    for rows.Next() {
        var curriculum Curriculum
        err := rows.Scan(
        &curriculum.ID,
        &curriculum.Title,
        &curriculum.Description,
        &curriculum.CreatedAt,
    )
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    curriculums = append(curriculums, curriculum)
}

    c.JSON(http.StatusOK, curriculums)
}
