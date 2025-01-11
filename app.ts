import { jsPDF } from "jspdf";  // Ensure jsPDF is correctly imported

// Handle the form submission
document.getElementById("resumeForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    generateResume();
});

const generateResume = (): void => {
    // Capture input data
    const name = (<HTMLInputElement>document.getElementById("name"))?.value;
    const email = (<HTMLInputElement>document.getElementById("email"))?.value;
    const phone = (<HTMLInputElement>document.getElementById("phone"))?.value;
    const role = (<HTMLInputElement>document.getElementById("role"))?.value;
    const degree = (<HTMLInputElement>document.getElementById("degree"))?.value;
    const university = (<HTMLInputElement>document.getElementById("university"))?.value;
    const gradYear = (<HTMLInputElement>document.getElementById("gradYear"))?.value;
    const jobTitle = (<HTMLInputElement>document.getElementById("jobTitle"))?.value;
    const company = (<HTMLInputElement>document.getElementById("company"))?.value;
    const jobDuration = (<HTMLInputElement>document.getElementById("jobDuration"))?.value;
    const jobResponsibilities = (<HTMLInputElement>document.getElementById("jobResponsibilities"))?.value;
    const skills = (<HTMLInputElement>document.getElementById("skills"))?.value;

    // Generate the resume HTML
    const resumeHtml = `
        <div class="resume-section">
            <h2>${name}</h2>
            <p>${role}</p>
        </div>
        <div class="resume-section">
            <h3>Email: ${email}</h3>
            <h3>Phone: ${phone}</h3>
        </div>
        <div class="resume-section">
            <h3>Education:</h3>
            <p>${degree} from ${university} (Graduated: ${gradYear})</p>
        </div>
        <div class="resume-section">
            <h3>Work Experience:</h3>
            <p>${jobTitle} at ${company} (${jobDuration})</p>
            <p>${jobResponsibilities}</p>
        </div>
        <div class="resume-section">
            <h3>Skills:</h3>
            <p>${skills}</p>
        </div>
    `;

    // Display the generated resume
    const generatedResume = document.getElementById("generatedResume");
    if (generatedResume) {
        generatedResume.innerHTML = resumeHtml;
    }

    // Show the "resumeContainer" and "shareLinkContainer"
    document.getElementById("resumeContainer")!.style.display = "block";
    document.getElementById("shareLinkContainer")!.style.display = "block";

    // Generate the unique URL (based on the name)
    const username = name.split(" ").join("").toLowerCase();
    const resumeLink = `${window.location.origin}/${username}/resume`;
    const shareLink = document.getElementById("shareLink") as HTMLAnchorElement;
    if (shareLink) {
        shareLink.setAttribute("href", resumeLink);
        shareLink.innerText = resumeLink;
    }

    // Add PDF download functionality
    const downloadButton = document.getElementById("downloadButton");
    if (downloadButton) {
        downloadButton.addEventListener("click", () => {
            downloadPDF(resumeHtml);
        });
    }
};

// Function to download resume as PDF
const downloadPDF = (resumeHtml: string): void => {
    const doc = new jsPDF();

    // Use jsPDF to generate PDF from the HTML content
    doc.html(resumeHtml, {
        callback: function (doc) {
            doc.save("resume.pdf");
        },
        x: 10,
        y: 10
    });
};
