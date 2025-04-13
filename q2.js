function getEventObjectType(element) {
    const tagName = element.tagName.toLowerCase();
    const classList = element.classList;

    if (tagName === 'select') {
        return 'drop-down';
    } else if (tagName === 'img') {
        return 'image';
    } else if (tagName === 'button') {
        return 'button';
    } else if (tagName === 'a') {
        return 'link';
    } else if (tagName === 'p' || tagName === 'span' || tagName === 'div' || tagName === 'h1' || tagName === 'h2' || tagName === 'h3') {
        return 'text';
    } else if (classList.contains('cv-button')) {
        return 'button'; // For your Download CV button
    } else if (classList.contains('section-text') || classList.contains('header-content')) {
        return 'text';
    } else {
        return tagName; // Fallback to tag name for unknown elements
    }
}

// Function to format timestamp as YYYY-MM-DD HH:MM:SS
function getFormattedTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Function to capture click events and page views
function setupEventTracking() {
    // Capture page view on load
    window.addEventListener('load', () => {
        console.log(`${getFormattedTimestamp()}, view, page`);
    });

    // Capture click events on all elements
    document.addEventListener('click', (event) => {
        const target = event.target;
        const eventObjectType = getEventObjectType(target);
        console.log(`${getFormattedTimestamp()}, click, ${eventObjectType}`);
    });
}

// Initialize tracking when the DOM is loaded
document.addEventListener('DOMContentLoaded', setupEventTracking);