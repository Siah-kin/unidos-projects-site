// ========================================
// Diary Page - Timeline Filter Functionality
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineYears = document.querySelectorAll('.timeline-year');

    // Filter button click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            filterTimeline(filter);
        });
    });

    function filterTimeline(filter) {
        // Track which years have visible items
        const visibleYears = new Set();

        // Filter timeline items
        timelineItems.forEach(item => {
            const category = item.dataset.category;

            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                // Find the preceding year marker
                let prevSibling = item.previousElementSibling;
                while (prevSibling && !prevSibling.classList.contains('timeline-year')) {
                    prevSibling = prevSibling.previousElementSibling;
                }
                if (prevSibling) {
                    visibleYears.add(prevSibling);
                }
            } else {
                item.classList.add('hidden');
            }
        });

        // Show/hide year markers based on visible items
        timelineYears.forEach(year => {
            if (filter === 'all' || visibleYears.has(year)) {
                year.style.display = '';
            } else {
                year.style.display = 'none';
            }
        });
    }

    // Add subtle entrance animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);

    // Apply initial hidden state and observe
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
});
