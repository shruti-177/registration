$(document).ready(function() {
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        var formData = $(this).serialize(); // Get form data

        // Simple validation
        if ($('#name').val() === '' || $('#email').val() === '' || $('#phone').val() === '' || $('#dob').val() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Submit form data via AJAX to PHP backend
        $.ajax({
            url: 'https://your-heroku-app.herokuapp.com/process.php', // Replace with your Heroku app's URL
            method: 'POST',
            data: formData,
            success: function(response) {
                $('#confirmationMessage').html(response); // Display the response
                $('#registrationForm')[0].reset(); // Reset form
            },
            error: function() {
                $('#confirmationMessage').html('Error: Could not submit form.');
            }
        });
    });
});
