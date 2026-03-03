// optimized-script.js

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Intersection Observer for Lazy Loading
const lazyLoadImages = document.querySelectorAll('img.lazy-load');
const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy-load');
            observer.unobserve(img);
        }
    });
});

lazyLoadImages.forEach(img => {
    imgObserver.observe(img);
});

// Event Delegation Example
document.addEventListener('click', (event) => {
    if (event.target.matches('.delegate-class')) {
        // Handle the event
    }
});

// Performance Monitoring
window.performance.mark('start');
// Your code here
window.performance.mark('end');
window.performance.measure('My Code Duration', 'start', 'end');

// Memory Leak Prevention
const handler = (event) => {
    // handle event
};

window.addEventListener('resize', handler);

// Clean up when not needed anymore
window.removeEventListener('resize', handler);