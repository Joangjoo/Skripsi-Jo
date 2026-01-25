package main

type Course struct {
	ID          int     `json:"id"`
	Title       string  `json:"title"`
	Description string  `json:"description"`
	CategoryID  int     `json:"category_id"`
	CategoryName string  `json:"category_name"`
	LevelID       int  `json:"level_id"`
	LevelName       string  `json:"level_name"`
	Rating      float64 `json:"rating"`
	Thumbnail   string  `json:"thumbnail"`
	Duration    string  `json:"duration"`
	Instructor  string  `json:"instructor"`
	LastUpdated string  `json:"last_updated"`
	Price       string `json:"price"`
	Learn       string  `json:"learn"`
	Module      string  `json:"module"`
	Subtitle 	string	`json:"subtitle"`
	Overview 	string	`json:"overview"`
}
