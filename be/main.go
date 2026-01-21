package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env")
	}

	if err := ConnectDB(); err != nil {
		log.Fatal(err)
	}

	http.HandleFunc("/api/courses", GetCourses)

	log.Println("🚀 Server running on :8080")
	http.ListenAndServe(":8080", nil)
}
