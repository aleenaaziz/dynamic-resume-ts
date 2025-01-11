var _a;
// Handle the form submission
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    generateResume();
});
var generateResume = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    // Capture input data
    var name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
    var email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value;
    var phone = (_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value;
    var role = (_d = document.getElementById("role")) === null || _d === void 0 ? void 0 : _d.value;
    var degree = (_e = document.getElementById("degree")) === null || _e === void 0 ? void 0 : _e.value;
    var university = (_f = document.getElementById("university")) === null || _f === void 0 ? void 0 : _f.value;
    var gradYear = (_g = document.getElementById("gradYear")) === null || _g === void 0 ? void 0 : _g.value;
    var jobTitle = (_h = document.getElementById("jobTitle")) === null || _h === void 0 ? void 0 : _h.value;
    var company = (_j = document.getElementById("company")) === null || _j === void 0 ? void 0 : _j.value;
    var jobDuration = (_k = document.getElementById("jobDuration")) === null || _k === void 0 ? void 0 : _k.value;
    var jobResponsibilities = (_l = document.getElementById("jobResponsibilities")) === null || _l === void 0 ? void 0 : _l.value;
    var skills = (_m = document.getElementById("skills")) === null || _m === void 0 ? void 0 : _m.value;
    // Generate the resume HTML
    var resumeHtml = "\n        <div class=\"resume-section\">\n            <h2>".concat(name, "</h2>\n            <p>").concat(role, "</p>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Email: ").concat(email, "</h3>\n            <h3>Phone: ").concat(phone, "</h3>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Education:</h3>\n            <p>").concat(degree, " from ").concat(university, " (Graduated: ").concat(gradYear, ")</p>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Work Experience:</h3>\n            <p>").concat(jobTitle, " at ").concat(company, " (").concat(jobDuration, ")</p>\n            <p>").concat(jobResponsibilities, "</p>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Skills:</h3>\n            <p>").concat(skills, "</p>\n        </div>\n    ");
    // Display the generated resume
    var generatedResume = document.getElementById("generatedResume");
    if (generatedResume) {
        generatedResume.innerHTML = resumeHtml;
    }
    // Show the "resumeContainer" and "shareLinkContainer"
    document.getElementById("resumeContainer").style.display = "block";
    document.getElementById("shareLinkContainer").style.display = "block";
    // Generate the unique URL (based on the name)
    var username = name.split(" ").join("").toLowerCase();
    var resumeLink = "".concat(window.location.origin, "/").concat(username, "/resume");
    var shareLink = document.getElementById("shareLink");
    if (shareLink) {
        shareLink.setAttribute("href", resumeLink);
        shareLink.innerText = resumeLink;
    }
    // Add PDF download functionality
    var downloadButton = document.getElementById("downloadButton");
    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            downloadPDF(resumeHtml);
        });
    }
};
// Function to download resume as PDF
var downloadPDF = function (resumeHtml) {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    // Use jsPDF to generate PDF from the HTML content
    doc.html(resumeHtml, {
        callback: function (doc) {
            doc.save("resume.pdf");
        },
        x: 10,
        y: 10
    });
};
