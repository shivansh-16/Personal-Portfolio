// Simple Animation System (Lightweight AOS Alternative)
class SimpleAnimations {
    constructor() {
        this.animatedElements = [];
        this.init();
    }

    init() {
        // Find all elements with data-aos attributes
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach((element, index) => {
            const animationType = element.getAttribute('data-aos') || 'fade-up';
            const delay = parseInt(element.getAttribute('data-aos-delay')) || 0;
            const duration = parseInt(element.getAttribute('data-aos-duration')) || 800;
            
            this.animatedElements.push({
                element,
                animationType,
                delay,
                duration,
                animated: false
            });
            
            // Set initial state
            element.style.opacity = '0';
            element.style.transform = this.getInitialTransform(animationType);
            element.style.transition = `all ${duration}ms ease-out`;
        });

        this.setupIntersectionObserver();
    }

    getInitialTransform(type) {
        switch(type) {
            case 'fade-up': return 'translateY(30px)';
            case 'fade-down': return 'translateY(-30px)';
            case 'fade-left': return 'translateX(30px)';
            case 'fade-right': return 'translateX(-30px)';
            case 'zoom-in': return 'scale(0.8)';
            case 'zoom-out': return 'scale(1.2)';
            default: return 'translateY(30px)';
        }
    }

    getFinalTransform() {
        return 'translateY(0) translateX(0) scale(1)';
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationData = this.animatedElements.find(
                        item => item.element === entry.target
                    );
                    
                    if (animationData && !animationData.animated) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = this.getFinalTransform();
                            animationData.animated = true;
                        }, animationData.delay);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.animatedElements.forEach(item => {
            observer.observe(item.element);
        });
    }
}

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');

// Navigation functionality
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupActiveSection();
        this.setupNavbarBackground();
    }

    setupMobileMenu() {
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
            });

            // Close mobile menu when clicking on a link
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }

    setupSmoothScrolling() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                
                // Only process internal anchor links
                if (targetId && targetId.startsWith('#')) {
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Smooth scrolling for scroll indicator
        const scrollArrow = document.querySelector('.scroll-arrow');
        if (scrollArrow) {
            scrollArrow.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = document.querySelector('#about');
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    setupActiveSection() {
        const sections = document.querySelectorAll('section');
        
        const observerOptions = {
            root: null,
            rootMargin: '-80px 0px -50% 0px',
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    this.updateActiveNavLink(sectionId);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    updateActiveNavLink(sectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    setupNavbarBackground() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.backdropFilter = 'blur(25px)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
        });
    }
}

// Typing Animation for Hero Section
class TypingAnimation {
    constructor(element, texts, typeSpeed = 100, deleteSpeed = 50, delayBetween = 2000) {
        this.element = element;
        this.texts = texts;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.delayBetween = delayBetween;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        
        if (this.element) {
            this.init();
        }
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }

        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            typeSpeed = this.delayBetween;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Skill Progress Animation
class SkillProgressAnimation {
    constructor() {
        this.init();
    }

    init() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    if (width) {
                        progressBar.style.setProperty('--progress-width', width);
                        progressBar.style.width = width;
                        progressBar.classList.add('animate');
                    }
                    observer.unobserve(progressBar);
                }
            });
        }, {
            threshold: 0.5
        });

        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }
}

// Contact Form functionality
class ContactForm {
    constructor(form) {
        this.form = form;
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.setupRealTimeValidation();
    }

    setupRealTimeValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Clear previous errors
        this.clearError(field);

        // Validation rules
        switch (fieldName) {
            case 'name':
                if (!value) {
                    errorMessage = 'Name is required';
                    isValid = false;
                } else if (value.length < 2) {
                    errorMessage = 'Name must be at least 2 characters';
                    isValid = false;
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    errorMessage = 'Email is required';
                    isValid = false;
                } else if (!emailRegex.test(value)) {
                    errorMessage = 'Please enter a valid email address';
                    isValid = false;
                }
                break;

            case 'subject':
                if (!value) {
                    errorMessage = 'Subject is required';
                    isValid = false;
                } else if (value.length < 5) {
                    errorMessage = 'Subject must be at least 5 characters';
                    isValid = false;
                }
                break;

            case 'message':
                if (!value) {
                    errorMessage = 'Message is required';
                    isValid = false;
                } else if (value.length < 10) {
                    errorMessage = 'Message must be at least 10 characters';
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        }

        return isValid;
    }

    showError(field, message) {
        field.style.borderColor = '#EF4444';
        const errorElement = document.getElementById(`${field.name}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    clearError(field) {
        field.style.borderColor = '';
        const errorElement = document.getElementById(`${field.name}-error`);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input, textarea');
        let isFormValid = true;

        inputs.forEach(input => {
            const isFieldValid = this.validateField(input);
            if (!isFieldValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        const submitButton = this.form.querySelector('button[type="submit"]');
        const btnText = submitButton.querySelector('.btn-text');
        const btnLoader = submitButton.querySelector('.btn-loader');
        
        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';
        submitButton.disabled = true;

        try {
            // Simulate form submission (replace with actual submission logic)
            await this.simulateFormSubmission();
            
            // Show success message
            this.showSuccessMessage();
            this.form.reset();
            
        } catch (error) {
            // Show error message
            this.showErrorMessage('Failed to send message. Please try again.');
        } finally {
            // Reset button state
            btnText.style.display = 'flex';
            btnLoader.style.display = 'none';
            submitButton.disabled = false;
        }
    }

    async simulateFormSubmission() {
        // Get form data
        const formData = new FormData(this.form);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            to_name: 'Shivansh Pawar'
        };

        try {
            // Initialize EmailJS (you'll need to replace these with your actual credentials)
            // Get these from https://www.emailjs.com/ after creating a free account
            const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your public key
            const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID  
            const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID

            // Send email using EmailJS
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            
            if (response.status === 200) {
                return Promise.resolve();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            // Fallback: For now, simulate success for demo purposes
            // Remove this setTimeout and throw error once EmailJS is configured
            return new Promise((resolve) => {
                setTimeout(resolve, 1500);
            });
        }
    }

    showSuccessMessage() {
        this.showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
    }

    showErrorMessage(text) {
        this.showToast(text, 'error');
    }

    showToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease-out;
            max-width: 300px;
            font-weight: 500;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove toast
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 5000);
    }
}

// Background Code Animation
class CodeBackgroundAnimation {
    constructor() {
        this.init();
    }

    init() {
        const codeBg = document.getElementById('code-bg');
        if (codeBg) {
            this.createFloatingCode(codeBg);
        }
    }

    createFloatingCode(container) {
        const codeSnippets = [
            'const developer = "Shivansh";',
            'function createAwesome() {',
            'return innovation + passion;',
            'if (idea.isGreat()) {',
            'let skills = ["React", "Node"];',
            'async function build() {',
            'console.log("Building...");',
            'export default Portfolio;'
        ];

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < 15; i++) {
            const codeElement = document.createElement('div');
            codeElement.className = 'floating-code';
            codeElement.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            codeElement.style.cssText = `
                position: absolute;
                font-family: 'Fira Code', monospace;
                font-size: 0.75rem;
                color: rgba(59, 130, 246, 0.1);
                pointer-events: none;
                white-space: nowrap;
                animation: float ${15 + Math.random() * 10}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 5}s;
            `;
            fragment.appendChild(codeElement);
        }

        container.appendChild(fragment);
    }
}

// Accessibility enhancements
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.addSkipLink();
    }

    setupKeyboardNavigation() {
        // Enhanced keyboard navigation for mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                if (hamburger) hamburger.focus();
            }
        });
    }

    setupFocusManagement() {
        // Improve focus visibility
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid #3B82F6';
                element.style.outlineOffset = '2px';
            });

            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });
    }

    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#home';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #3B82F6;
            color: white;
            padding: 8px 12px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1002;
            transition: top 0.3s;
            font-weight: 500;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
}

// Performance optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeImages();
        this.preloadCriticalResources();
        this.setupIntersectionObserver();
    }

    optimizeImages() {
        // Add loading="lazy" to images if not already present
        const images = document.querySelectorAll('img:not([loading])');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    }

    preloadCriticalResources() {
        // Preload critical assets
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }

    setupIntersectionObserver() {
        // Lazy load non-critical content
        const lazyElements = document.querySelectorAll('.project-card, .skill-category');
        
        if ('IntersectionObserver' in window) {
            const lazyObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('loaded');
                        lazyObserver.unobserve(entry.target);
                    }
                });
            });

            lazyElements.forEach(element => {
                lazyObserver.observe(element);
            });
        }
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize custom animation system
    new SimpleAnimations();
    
    // Initialize navigation
    new Navigation();
    
    // Initialize typing animation
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        new TypingAnimation(typingElement, [
            'Web Developer',
            'Frontend Specialist',
            'UI/UX Enthusiast',
            'Problem Solver',
            'Creative Coder'
        ], 120, 80, 2500);
    }
    
    // Initialize skill progress animation
    new SkillProgressAnimation();
    
    // Initialize contact form
    new ContactForm(contactForm);
    
    // Initialize accessibility enhancements
    new AccessibilityEnhancer();
    
    // Initialize performance optimizations
    new PerformanceOptimizer();
    
    // Add smooth reveal animation for elements
    const revealElements = document.querySelectorAll('.project-card, .skill-category, .contact-item');
    revealElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        element.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 500);
    });
});

// Add floating code animation styles
const floatingCodeStyles = `
@keyframes float {
    0% {
        transform: translateY(100vh) translateX(0px) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 0.1;
    }
    90% {
        opacity: 0.1;
    }
    100% {
        transform: translateY(-100px) translateX(50px) rotate(360deg);
        opacity: 0;
    }
}
`;

// Inject floating code styles
const styleElement = document.createElement('style');
styleElement.textContent = floatingCodeStyles;
document.head.appendChild(styleElement);

// Smooth scrolling polyfill for older browsers
if (!CSS.supports('scroll-behavior', 'smooth')) {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                const duration = 1000;
                const start = window.pageYOffset;
                const distance = offsetTop - start;
                const startTime = performance.now();

                function animateScroll(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
                    
                    window.scrollTo(0, start + distance * easeProgress);
                    
                    if (progress < 1) {
                        requestAnimationFrame(animateScroll);
                    }
                }
                
                requestAnimationFrame(animateScroll);
            }
        });
    });
}