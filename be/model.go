package main

type Course struct {
	ID          int     `json:"id"`
	Title       string  `json:"title"`
	Description string  `json:"description"`
	CategoryID  int     `json:"category_id"`
	Level       string  `json:"level"`
	Rating      float64 `json:"rating"`
	Thumbnail   string  `json:"thumbnail"`
}
