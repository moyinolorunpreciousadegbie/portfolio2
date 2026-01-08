/**
 * Modern Resume - Interactive JavaScript
 * Premium animations and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initTabs();
    initSkillBars();
    initScrollAnimations();
    initParallaxEffects();
});

/**
 * Theme Toggle (Dark/Light Mode)
 */
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const icon = toggle?.querySelector('.theme-toggle-icon');
    const text = toggle?.querySelector('.theme-toggle-text');

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        updateToggleUI(icon, text, true);
    }

    toggle?.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateToggleUI(icon, text, isDark);

        // Add a subtle animation to the page
        document.body.style.transition = 'background 0.5s ease, color 0.5s ease';
    });
}

function updateToggleUI(icon, text, isDark) {
    if (icon) {
        icon.textContent = isDark ? '☀️' : '🌙';
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            icon.style.transform = 'rotate(0deg)';
        }, 300);
    }
    if (text) {
        text.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
}

/**
 * Tab Navigation
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.section;

            // Remove active state from all buttons and sections
            tabButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active state to clicked button and target section
            button.classList.add('active');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');

                // Animate skill bars if skills section is shown
                if (targetId === 'skills') {
                    setTimeout(animateSkillBars, 100);
                }

                // Smooth scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Add ripple effect to button
            createRipple(button);
        });
    });
}

/**
 * Ripple Effect for Buttons
 */
function createRipple(element) {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.marginLeft = -size / 2 + 'px';
    ripple.style.marginTop = -size / 2 + 'px';

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/**
 * Animated Skill Bars
 */
function initSkillBars() {
    // Initially set skill bars to 0
    const skillFills = document.querySelectorAll('.skill-fill');
    skillFills.forEach(fill => {
        fill.style.width = '0%';
    });

    // Animate on initial load if skills section is visible
    const skillsSection = document.getElementById('skills');
    if (skillsSection?.classList.contains('active')) {
        setTimeout(animateSkillBars, 500);
    }
}

function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');

    skillFills.forEach((fill, index) => {
        const targetWidth = fill.dataset.width || '0%';

        // Stagger the animations
        setTimeout(() => {
            fill.style.width = targetWidth;
        }, index * 100);
    });
}

/**
 * Scroll-triggered Animations
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // If it's the skills section, animate the bars
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Observe all cards and timeline items
    document.querySelectorAll('.card, .timeline-item, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add animation class styles
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(animationStyles);

/**
 * Subtle Parallax Effects
 */
function initParallaxEffects() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Handle window resize
 */
window.addEventListener('resize', debounce(() => {
    // Recalculate any position-dependent animations
}, 250));

/**
 * Keyboard Navigation
 */
document.addEventListener('keydown', (e) => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const activeIndex = Array.from(tabButtons).findIndex(btn => btn.classList.contains('active'));

    if (e.key === 'ArrowRight' && activeIndex < tabButtons.length - 1) {
        tabButtons[activeIndex + 1].click();
    } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
        tabButtons[activeIndex - 1].click();
    }
});

/**
 * Preloader (optional)
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Animate elements after page load
    setTimeout(() => {
        document.querySelectorAll('.card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 200);
});

console.log('✨ Modern Resume loaded successfully!');
