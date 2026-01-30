// ===================================
// User Interaction Handlers
// ===================================

// Add smooth scrolling behavior
document.addEventListener('DOMContentLoaded', () => {
    // Prevent default scroll behavior
    document.body.style.overflow = 'hidden';
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    // Allow Enter key to trigger buttons
    if (e.key === 'Enter') {
        const activeSection = document.querySelector('.section.active');
        const nextBtn = activeSection?.querySelector('.next-btn');
        const startBtn = activeSection?.querySelector('#startBtn');

        if (nextBtn && !nextBtn.classList.contains('hidden')) {
            nextBtn.click();
        } else if (startBtn && !startBtn.classList.contains('hidden')) {
            startBtn.click();
        }
    }
});

// Add hover effects for buttons
function addButtonHoverEffects() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', () => {
            if (!button.id.includes('no')) {
                button.style.transform = 'scale(1)';
            }
        });
    });
}

// Initialize hover effects
document.addEventListener('DOMContentLoaded', () => {
    addButtonHoverEffects();
});

// Add click feedback
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        e.target.style.position = 'relative';
        e.target.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Prevent accidental page refresh
window.addEventListener('beforeunload', (e) => {
    const activeSection = document.querySelector('.section.active');
    if (activeSection && activeSection.id !== 'landing') {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Handle visibility change (when user switches tabs)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('User switched tabs - pausing animations');
    } else {
        console.log('User returned - resuming');
    }
});

// Export functions
window.addButtonHoverEffects = addButtonHoverEffects;
