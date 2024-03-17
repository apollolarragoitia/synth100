document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video');
    let hoverTimer;

    videos.forEach(video => {
        video.addEventListener('mouseover', function() {
            const sidebarText = video.getAttribute('data-sidebar-text');
            hoverTimer = setTimeout(() => {
                document.getElementById('sidebarText').textContent = sidebarText;
                document.getElementById('videoSidebar').classList.add('open');
            }, 2000); // 2 seconds delay
        });

        video.addEventListener('mouseout', function() {
            clearTimeout(hoverTimer);
            document.getElementById('videoSidebar').classList.remove('open');
        });
    });
});