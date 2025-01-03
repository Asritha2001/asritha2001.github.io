function showModal(title, description) {
    // Get modal elements
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    // Set the title and description
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Show the modal
    modal.style.display = 'block';
}

function closeModal() {
    // Hide the modal
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Close modal if clicked outside of it
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Copy button functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const textToCopy = button.dataset.value;
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Visual feedback
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                button.classList.add('copied');
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('copied');
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
});
