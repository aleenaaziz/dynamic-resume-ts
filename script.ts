// script.ts

// Select the form and resume container
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const gradYear = (document.getElementById('gradYear') as HTMLInputElement).value;
    
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const jobDuration = (document.getElementById('jobDuration') as HTMLInputElement).value;
    const jobResponsibilities = (document.getElementById('jobResponsibilities') as HTMLTextAreaElement).value;
    
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Create resume HTML dynamically
    const resumeHTML = `
        <header>
            <h1>${name}</h1>
            <p>${role}</p>
            <p>Email: ${email} | Phone: ${phone}</p>
        </header>
        
        <section>
            <h2>Education</h2>
            <p><strong>${degree}</strong> - ${university} (${gradYear})</p>
        </section>

        <section>
            <h2>Work Experience</h2>
            <p><strong>${jobTitle}</strong> at ${company} (${jobDuration})</p>
            <p><strong>Responsibilities:</strong></p>
            <ul>
                <li>${jobResponsibilities}</li>
            </ul>
        </section>

        <section>
            <h2>Skills</h2>
            <ul class="skills-list">
                ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
            </ul>
        </section>
    `;

    // Insert the generated resume into the page
    resumeContainer.innerHTML = resumeHTML;
});
