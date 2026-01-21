-- CREATE TABLE categories (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- INSERT INTO categories (name) VALUES
-- ('Web Development'),
-- ('Mobile Development'),
-- ('Data Science'),
-- ('UI/UX');


-- CREATE TABLE levels (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL
-- );

-- INSERT INTO levels (name) VALUES
-- ('Beginner'),
-- ('Intermediate'),
-- ('Advanced');


-- CREATE TABLE courses (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     category_id INT NOT NULL,
--     level VARCHAR(50),
--     rating NUMERIC(2,1) DEFAULT 0.0,
--     thumbnail TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

--     CONSTRAINT fk_category
--         FOREIGN KEY (category_id)
--         REFERENCES categories(id)
--         ON DELETE CASCADE
-- );


INSERT INTO courses 
(title, description, category_id, level, rating, thumbnail)
VALUES
(
  'Belajar React dari Nol',
  'Kursus React untuk pemula hingga mahir',
  1,
  'Beginner',
  4.5,
  'react.png'
),
(
  'Vue.js Lanjutan',
  'Pendalaman Vue Composition API',
  1,
  'Intermediate',
  4.7,
  'vue.png'
),
(
  'Golang Backend Dasar',
  'Membangun REST API dengan Golang',
  1,
  'Beginner',
  4.6,
  'golang.png'
);

