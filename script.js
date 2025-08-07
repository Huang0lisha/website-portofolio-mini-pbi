document.addEventListener('DOMContentLoaded', () => {
    
    const glowElement = document.getElementById('cursor-glow');
    if (glowElement) {
        document.addEventListener('mousemove', (e) => {
            glowElement.style.left = e.clientX + 'px';
            glowElement.style.top = e.clientY + 'px';
        });
    }

});
