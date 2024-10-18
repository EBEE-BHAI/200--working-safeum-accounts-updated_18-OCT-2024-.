document.addEventListener('DOMContentLoaded', () => {
    function adjustLayout() {
        const width = window.innerWidth;
        
        // Example: You can modify the styling based on window width here if needed
        if (width < 768) {
            document.body.style.fontSize = '16px';
        } else {
            document.body.style.fontSize = '18px';
        }
    }

    // Call on load
    adjustLayout();

    // Adjust on window resize
    window.addEventListener('resize', adjustLayout);
});

