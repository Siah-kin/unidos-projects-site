// Simple Instagram Feed - 100% Free
// Displays Instagram posts without any third-party service

const instagramConfig = {
    username: 'unidosprojects', // Change this to your Instagram username
    numberOfPosts: 6,
    openInNewTab: true
};

// Lightbox-style fallback using Instagram profile link
function createInstagramFeed() {
    const feedWrapper = document.querySelector('.instagram-feed-wrapper');
    if (!feedWrapper) return;

    // Create grid of sample posts (placeholder until user connects real account)
    const feedHTML = `
        <div class="instagram-grid">
            ${createPlaceholderPosts()}
        </div>
        <p class="instagram-note">
            To show your live Instagram posts:
            <a href="https://www.instagram.com/${instagramConfig.username}/" target="_blank">
                @${instagramConfig.username}
            </a>
        </p>
    `;

    feedWrapper.innerHTML = feedHTML;
}

function createPlaceholderPosts() {
    const posts = [];
    for (let i = 0; i < instagramConfig.numberOfPosts; i++) {
        posts.push(`
            <a href="https://www.instagram.com/${instagramConfig.username}/"
               target="_blank"
               rel="noopener noreferrer"
               class="instagram-post">
                <div class="instagram-placeholder-image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    <span>Visit Instagram</span>
                </div>
            </a>
        `);
    }
    return posts.join('');
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createInstagramFeed);
} else {
    createInstagramFeed();
}
