const StudentService = require('../Service/StudentService'); 
const StudentDTO = require('../Dto/StudentDTO');

exports.createStudent = async (req, res) => {
    try {
        const { first_name, last_name, phone_number } = req.body;

        const createdStudent = await StudentService.createStudent(first_name, last_name, phone_number);

        // Create a success response DTO
        const successResponse = new StudentDTO(
            createdStudent.id,
            createdStudent.first_name,
            createdStudent.last_name,
            createdStudent.phone_number
        );

        res.status(201).json(successResponse); // Use 201 for resource creation success
    } catch (err) {
        if (err.message === "Phone number is duplicated.") {
            // Handle duplication error
            res.status(400).json({ success: false, error: "Phone number is duplicated." });
        } else {
            console.error(err.message);

            // Create a general error response
            res.status(500).json({ success: false, error: "An error occurred while creating the student." });
        }
    }
}
