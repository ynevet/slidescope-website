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
