// Simple Instagram Feed - 100% Free
// Displays Instagram posts without any third-party service

const instagramConfig = {
    username: 'unidosprojects', // Change this to your Instagram username
    openInNewTab: true
};

// Lightbox-style fallback using Instagram profile link
function createInstagramFeed() {
    const feedWrapper = document.querySelector('.instagram-feed-wrapper');
    if (!feedWrapper) return;

    const target = instagramConfig.openInNewTab ? '_blank' : '_self';
    const rel = instagramConfig.openInNewTab ? ' rel="noopener noreferrer"' : '';

    // Keep a lightweight CTA instead of fake thumbnail placeholders.
    const feedHTML = `
        <p class="instagram-note">
            Follow our updates on Instagram:
            <a href="https://www.instagram.com/${instagramConfig.username}/" target="${target}"${rel}>
                @${instagramConfig.username}
            </a>
        </p>
    `;

    feedWrapper.innerHTML = feedHTML;
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createInstagramFeed);
} else {
    createInstagramFeed();
}
