CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    reviewer VARCHAR(100) NOT NULL,
    rating NUMERIC(2, 1) NOT NULL CHECK (
        rating >= 1
        AND rating <= 5
    ),
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);