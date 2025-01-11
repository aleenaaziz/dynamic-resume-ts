// script.ts
// Select the form and resume container
var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resumeContainer');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var role = document.getElementById('role').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var gradYear = document.getElementById('gradYear').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var jobDuration = document.getElementById('jobDuration').value;
    var jobResponsibilities = document.getElementById('jobResponsibilities').value;
    var skills = document.getElementById('skills').value.split(',');
    // Create resume HTML dynamically
    var resumeHTML = "\n        <header>\n            <h1>".concat(name, "</h1>\n            <p>").concat(role, "</p>\n            <p>Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n        </header>\n        \n        <section>\n            <h2>Education</h2>\n            <p><strong>").concat(degree, "</strong> - ").concat(university, " (").concat(gradYear, ")</p>\n        </section>\n\n        <section>\n            <h2>Work Experience</h2>\n            <p><strong>").concat(jobTitle, "</strong> at ").concat(company, " (").concat(jobDuration, ")</p>\n            <p><strong>Responsibilities:</strong></p>\n            <ul>\n                <li>").concat(jobResponsibilities, "</li>\n            </ul>\n        </section>\n\n        <section>\n            <h2>Skills</h2>\n            <ul class=\"skills-list\">\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul>\n        </section>\n    ");
    // Insert the generated resume into the page
    resumeContainer.innerHTML = resumeHTML;
});
