// ===================================
// Animation Controllers
// ===================================

// Animate Introduction Section
function animateIntroduction(section) {
    const title = section.querySelector('.intro-title');
    const text = section.querySelector('.intro-text');
    const btn = section.querySelector('.next-btn');

    // Reset animations
    title.style.opacity = '0';
    text.style.opacity = '0';
    btn.style.opacity = '0';

    // Trigger animations with delays
    setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        text.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        btn.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
    }, 900);
}

// Animate Reasons Section
function animateReasons(section) {
    const title = section.querySelector('.section-title');
    const cards = section.querySelectorAll('.reason-card');
    const btn = section.querySelector('.next-btn');

    // Animate title
    title.style.opacity = '0';
    setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease';
        title.style.opacity = '1';
    }, 100);

    // Animate cards with stagger
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });

    // Animate button last
    btn.style.opacity = '0';
    setTimeout(() => {
        btn.style.transition = 'opacity 0.8s ease';
        btn.style.opacity = '1';
    }, 300 + (cards.length * 100) + 200);
}

// Animate Question Section
function animateQuestion(section) {
    const title = section.querySelector('.question-title');
    const questionBox = section.querySelector('.question-box');
    const buttons = section.querySelectorAll('.response-btn');

    // Reset animations
    title.style.opacity = '0';
    questionBox.style.opacity = '0';
    questionBox.style.transform = 'scale(0.8)';

    // Animate title
    setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease';
        title.style.opacity = '1';
    }, 100);

    // Animate question box with scale
    setTimeout(() => {
        questionBox.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        questionBox.style.opacity = '1';
        questionBox.style.transform = 'scale(1)';
    }, 500);

    // Animate buttons
    buttons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';

        setTimeout(() => {
            btn.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
}

// Animate Celebration Section
function animateCelebration(section) {
    const title = section.querySelector('.celebration-title');
    const text = section.querySelector('.celebration-text');

    // Reset animations
    title.style.opacity = '0';
    title.style.transform = 'scale(0.5)';
    text.style.opacity = '0';

    // Animate title with bounce
    setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        title.style.opacity = '1';
        title.style.transform = 'scale(1)';
    }, 100);

    // Animate text
    setTimeout(() => {
        text.style.transition = 'opacity 1s ease';
        text.style.opacity = '1';
    }, 800);
}

// Create Confetti Effect
function createConfetti() {
    const container = document.querySelector('#celebration .confetti-container');
    if (!container) return;

    const colors = ['#FF6B9D', '#FFC2D1', '#FF8E9E', '#C5A3FF', '#A8E6CF'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

        container.appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Create Floating Hearts
function createFloatingHearts() {
    const container = document.querySelector('#celebration .hearts-container');
    if (!container) return;

    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝'];
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

        container.appendChild(heart);
    }
}

// Export functions
window.animateIntroduction = animateIntroduction;
window.animateReasons = animateReasons;
window.animateQuestion = animateQuestion;
window.animateCelebration = animateCelebration;
window.createConfetti = createConfetti;
window.createFloatingHearts = createFloatingHearts;
