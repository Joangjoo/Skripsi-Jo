package main

import (
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
        log.Println("Warning: .env file not found")
    }

    if err := ConnectDB(); err != nil {
        log.Fatal(err)
    }

    r := gin.Default()
    r.Use(cors.Default())

    r.GET("/api/courses", GetCourses)
    r.GET("/api/courses/:id", GetCourseDetail)

    log.Println("🚀 Server running on :8080")
    r.Run(":8080") 
}
