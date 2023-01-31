$("#btnSend").click(function () {
    let valid = true; 
    if (($("#assignments").val() === '') || $("#gp").val() === '' || $("#quizzes").val() === '' || $("#midterms").val() === '' || $("#final").val() === '' || $("#intex").val() === '')
        alert('error please fill all fields!');

    else {
        if (isNaN(parseFloat($("#assignments").val()))) {
            alert('Assignments field is not a number');
            valid = false;
        }
        if (isNaN(parseFloat($("#gp").val()))) {
            alert('Group Projects field is not a number');
            valid = false;
        }
        if (isNaN(parseFloat($("#quizzes").val()))) {
            alert('Quizzes field is not a number');
            valid = false;
        }
        if (isNaN(parseFloat($("#midterms").val()))) {
            alert('Midterm Exams field is not a number');
            valid = false;
        }
        if (isNaN(parseFloat($("#final").val()))) {
            alert('Final Exam field is not a number');
            valid = false;
        }
        if (isNaN(parseFloat($("#intex").val()))) {
            alert('Intex field is not a number');
            valid = false;
        }

        if (valid) {
            var letterGrade = "";
            total = parseFloat($("#assignments").val()) + parseFloat($("#gp").val()) +
                parseFloat($("#quizzes").val()) + parseFloat($("#midterms").val()) +
                parseFloat($("#final").val()) + parseFloat($("#intex").val());
            if (total >= 94) {
                letterGrade = "A";
            }
            else if (total >= 90) {
                letterGrade = "A-";
            }
            else if (total >= 87) {
                letterGrade = "B+";
            }
            else if (total >= 84) {
                letterGrade = "B";
            }
            else if (total >= 80) {
                letterGrade = "B-";
            }
            else if (total >= 77) {
                letterGrade = "C+";
            }
            else if (total >= 74) {
                letterGrade = "C";
            }
            else if (total >= 70) {
                letterGrade = "C-";
            }
            else if (total >= 67) {
                letterGrade = "D+";
            }
            else if (total >= 64) {
                letterGrade = "D";
            }
            else if (total >= 60) {
                letterGrade = "D-";
            }
            else {
                letterGrade = "E";
            }

            $("#message").html("Your grade is: " + total + " and you got a(n) " + letterGrade);

        }
    }
    
})