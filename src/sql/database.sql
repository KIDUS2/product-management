
CREATE DATABASE notestutorial;

CREATE TABLE note(
    note_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
CREATE TABLE Student(
    Student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone_number VARCHAR(255) UNIQUE

);