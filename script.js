document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.querySelector('.main-button');
    const secondSection = document.querySelector('.second-section');
    const acceptedSection = document.querySelector('.accepted');
  
    // Initial button click
    mainButton.addEventListener('click', () => {
      mainButton.style.transform = 'translateY(100vh)';
      mainButton.style.opacity = '0';
      
      setTimeout(() => {
        secondSection.classList.add('active');
      }, 800);
    });
  
    // Fixed No button handler
    document.querySelector('.no').addEventListener('click', function(e) {
        const container = document.querySelector('.button-container');
        const originalYes = document.querySelector('.yes');
        
        // Create 5 clones with random positions
        for (let i = 0; i < 5; i++) {
            const clone = originalYes.cloneNode(true);
            
            // Calculate position within container bounds
            const maxX = container.offsetWidth - clone.offsetWidth;
            const maxY = container.offsetHeight - clone.offsetHeight;
            
            clone.style.position = 'absolute';
            clone.style.left = `${Math.random() * maxX}px`;
            clone.style.top = `${Math.random() * maxY}px`;
            clone.style.transform = 'none';
            
            // Add clone to container
            container.appendChild(clone);
        }

        // Count all yes buttons (original + clones)
        const yesButtons = container.querySelectorAll('.yes');
        
        // Hide no button after 15 total yes buttons (3 clicks)
        if (yesButtons.length >= 15) {
            e.target.style.opacity = '0';
            e.target.style.pointerEvents = 'none';
            
            setTimeout(() => {
                e.target.style.display = 'none';
            }, 300);
        }
    });
  
    // Yes button handler
    document.querySelector('.second-section').addEventListener('click', (e) => {
      if (e.target.classList.contains('yes')) {
        secondSection.classList.remove('active');
        setTimeout(() => {
          acceptedSection.classList.add('active');
        }, 300);
      }
    });
});

// Update your yes button click handler to:
document.querySelector('.yes').addEventListener('click', () => {
  document.querySelector('.second-section').classList.remove('active');
  document.querySelector('.accepted').classList.add('active');
});