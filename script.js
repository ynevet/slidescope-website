// SlideScope Website - Interactive Features

// Smooth scroll behavior for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll behavior to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for # alone
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Account for fixed navbar height
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 10) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all feature cards, format cards, and download cards
    const animatedElements = document.querySelectorAll('.feature-card, .format-card, .download-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Video placeholder click handler (for future video integration)
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.style.cursor = 'pointer';
        videoPlaceholder.addEventListener('click', function() {
            console.log('Video placeholder clicked - ready for video integration');
            // Future: This is where you'd trigger video playback
        });
    }
    
    // Platform detection for download buttons (optional enhancement)
    const userAgent = navigator.userAgent.toLowerCase();
    const isMac = userAgent.includes('mac');
    const isWindows = userAgent.includes('win');
    
    // Optionally highlight the user's platform
    if (isMac || isWindows) {
        const downloadCards = document.querySelectorAll('.download-card');
        downloadCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if ((isMac && title.includes('macos')) || (isWindows && title.includes('windows'))) {
                card.style.borderColor = 'var(--primary-blue)';
                card.style.border = '2px solid var(--primary-blue)';
            }
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            formStatus.className = 'form-status';
            formStatus.style.display = 'none';
            
            try {
                // Submit to Formspree
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success - Hide the form and show thank you message
                    const userEmail = formData.get('email');
                    const userName = formData.get('name');
                    
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = `
                        <strong>✓ Thank You for Your Download Request!</strong><br><br>
                        Hi <strong>${userName}</strong>, we've received your request!<br><br>
                        We'll send the SlideScope download link to <strong>${userEmail}</strong> within the next few minutes.<br><br>
                        Please check your inbox (and spam folder) for an email from us.<br><br>
                        <small>If you don't receive the email within 10 minutes, please contact us at support@slidescope.science</small>
                    `;
                    
                    // Hide the form after successful submission
                    contactForm.style.display = 'none';
                    
                    // Scroll to show the success message
                    formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    // Error from server
                    const data = await response.json();
                    throw new Error(data.error || 'Something went wrong');
                }
            } catch (error) {
                // Network or other error
                formStatus.className = 'form-status error';
                formStatus.innerHTML = `
                    <strong>✗ Error</strong><br>
                    Oops! There was a problem submitting your request. Please try again or contact us directly at <strong>support@slidescope.science</strong>
                `;
                console.error('Form submission error:', error);
                
                // Scroll to show the error message
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
    
    // Console welcome message
    console.log('%cSlideScope Website', 'color: #2563eb; font-size: 24px; font-weight: bold;');
    console.log('%cOpen source microscopy image viewer', 'color: #06b6d4; font-size: 14px;');
});

// Performance: Lazy load images when they come into viewport
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
