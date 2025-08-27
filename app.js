
document.addEventListener('DOMContentLoaded', () => {
    const composeCommitBtn = document.getElementById('composeCommitBtn');
    if (composeCommitBtn) {
        composeCommitBtn.addEventListener('click', handleComposeCommit);
        console.log('AI Commit Composer button event listener attached.'); // Small additional change
    }

    // Placeholder for AI commit generation logic
    async function handleComposeCommit() {
        alert('Composing commit message with AI...');
        // In a real application, this would interact with a backend AI service.
        // For demo purposes, we can simulate a response.
        const simulatedCommitMessage = await simulateAIGeneration();
        console.log('Generated Commit Message:', simulatedCommitMessage);
        displayCommitMessage(simulatedCommitMessage);
    }

    function simulateAIGeneration() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("feat: Implement AI-powered commit message generation\n\nThis commit introduces a new feature that utilizes an AI model to generate concise and descriptive commit messages based on staged changes. This enhances developer productivity and ensures consistent commit history.");
            }, 2000); // Simulate network delay
        });
    }

    function displayCommitMessage(message) {
        const mainElement = document.querySelector('main');
        let outputDiv = document.getElementById('aiOutput');
        if (!outputDiv) {
            outputDiv = document.createElement('div');
            outputDiv.id = 'aiOutput';
            outputDiv.className = 'ai-output-card container';
            mainElement.appendChild(outputDiv);
        }
        outputDiv.innerHTML = `
            <h3>AI-Generated Commit Message:</h3>
            <pre>${message}</pre>
            <button class="btn btn-primary copy-btn">Copy to Clipboard</button>
        `;

        const copyBtn = outputDiv.querySelector('.copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(message).then(() => {
                    alert('Commit message copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            });
        }
    }

    // Contact form submission placeholder
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});