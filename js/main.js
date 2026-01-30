// ===================================
// Main Application Logic
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Valentine\'s Day Proposal Website Loaded! 💕');

    // Initialize the application
    initApp();
});

// Initialize the application
function initApp() {
    // Start the loading animation
    startLoadingAnimation();

    // Set up navigation
    setupNavigation();

    // Set up button interactions
    setupButtons();
}

// Loading Animation
function startLoadingAnimation() {
    const progressFill = document.querySelector('.progress-fill');
    const loadingPercentage = document.querySelector('.loading-percentage');
    const startBtn = document.getElementById('startBtn');
    const loadingContainer = document.querySelector('.loading-container');

    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressFill.style.width = progress + '%';
        loadingPercentage.textContent = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);

            // Hide loading elements and show start button
            setTimeout(() => {
                loadingContainer.style.opacity = '0';
                setTimeout(() => {
                    loadingContainer.style.display = 'none';
                    startBtn.classList.remove('hidden');
                }, 300);
            }, 500);
        }
    }, 30); // Adjust speed here (lower = faster)
}

// Setup Navigation Between Sections
function setupNavigation() {
    const startBtn = document.getElementById('startBtn');
    const nextBtns = document.querySelectorAll('.next-btn');

    // Start button - go to introduction
    startBtn.addEventListener('click', () => {
        navigateToSection('introduction');
    });

    // Next buttons
    nextBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (index === 0) {
                // From introduction to reasons
                navigateToSection('reasons');
            } else if (index === 1) {
                // From reasons to question
                navigateToSection('question');
            }
        });
    });
}

// Navigate to a specific section
function navigateToSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');

    // Trigger animations for the new section
    triggerSectionAnimations(sectionId);
}

// Trigger animations when entering a section
function triggerSectionAnimations(sectionId) {
    const section = document.getElementById(sectionId);

    switch (sectionId) {
        case 'introduction':
            animateIntroduction(section);
            break;
        case 'reasons':
            animateReasons(section);
            break;
        case 'question':
            resetNoButtonPosition(); // Reset No button to original position
            animateQuestion(section);
            break;
        case 'celebration':
            animateCelebration(section);
            break;
    }
}

// Setup Button Interactions
function setupButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Yes button - go to celebration
    yesBtn.addEventListener('click', () => {
        navigateToSection('celebration');
        createConfetti();
        createFloatingHearts();
    });

    // No button - prevent clicking (it should only move away, not be clickable)
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    // No button - implement evasive behavior
    setupNoBtnEvasion(noBtn);
}

// Reset No button position to original state
function resetNoButtonPosition() {
    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
        noBtn.style.position = 'relative';
        noBtn.style.left = '';
        noBtn.style.top = '';
        noBtn.style.transform = '';
        noBtn.style.width = ''; // Reset width
        noBtn.style.height = ''; // Reset height
    }
}

// Setup No Button Evasion (moves away from cursor)
function setupNoBtnEvasion(noBtn) {
    const container = document.querySelector('#question .container');

    // Track mouse movement
    container.addEventListener('mousemove', (e) => {
        const btnRect = noBtn.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate distance between mouse and button center
        const distance = Math.sqrt(
            Math.pow(mouseX - btnCenterX, 2) +
            Math.pow(mouseY - btnCenterY, 2)
        );

        // If mouse is too close (within 100px), move the button
        if (distance < 100) {
            moveButtonAway(noBtn, mouseX, mouseY);
        }
    });

    // Also handle touch events for mobile
    container.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const btnRect = noBtn.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        const touchX = touch.clientX;
        const touchY = touch.clientY;

        const distance = Math.sqrt(
            Math.pow(touchX - btnCenterX, 2) +
            Math.pow(touchY - btnCenterY, 2)
        );

        if (distance < 100) {
            moveButtonAway(noBtn, touchX, touchY);
        }
    });
}

// Move button away from cursor
function moveButtonAway(button, mouseX, mouseY) {
    // Use viewport dimensions for full screen movement
    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    // Store original button dimensions
    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;

    // Calculate safe boundaries (with padding from edges)
    const padding = 20;
    const maxX = viewport.width - btnWidth - padding;
    const maxY = viewport.height - btnHeight - padding;

    // Generate random position, but away from cursor
    let newX, newY;
    let attempts = 0;

    do {
        newX = Math.random() * (maxX - padding) + padding;
        newY = Math.random() * (maxY - padding) + padding;
        attempts++;

        // Calculate distance from cursor to new position
        const distanceFromMouse = Math.sqrt(
            Math.pow(mouseX - newX, 2) +
            Math.pow(mouseY - newY, 2)
        );

        // Accept position if it's far enough from cursor
        if (distanceFromMouse > 150 || attempts > 10) {
            break;
        }
    } while (attempts < 10);

    // Apply the new position with fixed positioning (viewport-based)
    button.style.position = 'fixed';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    button.style.width = btnWidth + 'px'; // Lock width to prevent size change
    button.style.height = btnHeight + 'px'; // Lock height to prevent size change
    button.style.transition = 'all 0.3s ease';
}

// Export functions for use in other modules
window.navigateToSection = navigateToSection;
window.resetNoButtonPosition = resetNoButtonPosition;
