function MyFunction() {
  // Get form field values
  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var gender = document.querySelector('input[name="gender"]:checked');
  var dob = document.getElementById("dob").value;
  var course = document.getElementById("course").value;
  var terms = document.getElementById("terms").checked;

  // Check if any field is empty
  if (
    fullName === "" ||
    email === "" ||
    password === "" ||
    phone === "" ||
    !gender ||
    dob === "" ||
    course === "" ||
    !terms
  ) {
    alert("Please complete all required fields before submitting.");
    return;
  }

  // Create formatted output for alert
  var output = "Registration Successfully!\n\n";
  output += "Full Name: " + fullName + "\n";
  output += "Email: " + email + "\n";
  output += "Password: " + "*".repeat(password.length) + "\n";
  output += "Phone Number: " + phone + "\n";
  output += "Gender: " + gender.value + "\n";
  output += "Date of Birth: " + dob + "\n";
  output += "Course: " + course;

  // Show alert box
  alert(output);

  // Reset the form
  document.getElementById("registrationForm").reset();
}
