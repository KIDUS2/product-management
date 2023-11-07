const pool = require('../Config/db'); // Import your database connection pool

class StudentService {
    async createStudent(firstName, lastName, phoneNumber) {
        try {
            const existingStudent = await pool.query("SELECT * FROM Student WHERE phone_number = $1", [phoneNumber]);

            if (existingStudent.rows.length > 0) {
                throw new Error("Phone number is duplicated.");
            }
            const newStudent = await pool.query("INSERT INTO Student (first_name, last_name, phone_number) VALUES ($1, $2, $3) RETURNING *", [firstName, lastName, phoneNumber]);
            return newStudent.rows[0];
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new StudentService();
