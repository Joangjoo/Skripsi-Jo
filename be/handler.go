package main

import (
	"encoding/json"
	"net/http"
)

func GetCourses(w http.ResponseWriter, r *http.Request) {
	rows, err := DB.Query(`
		SELECT id, title, description, category_id, level, rating, thumbnail
		FROM courses
	`)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var courses []Course

	for rows.Next() {
		var c Course
		err := rows.Scan(
			&c.ID,
			&c.Title,
			&c.Description,
			&c.CategoryID,
			&c.Level,
			&c.Rating,
			&c.Thumbnail,
		)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		courses = append(courses, c)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(courses)
}
