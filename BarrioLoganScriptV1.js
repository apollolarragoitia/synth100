document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video');
    let hoverTimer;

    const sidebarTexts = {
        video1: "This interview discusses the working conditions found in NASSCO, a ship freight company found in Barrio Logan. This interview discusses the experience an employee has had with the pollution NASSCO has created and its impact on Barrio Logan and other neighborhoods.",
        video2: "Melody, a 4th year UCSD student takes time to talk with us in an abridged podcast style interview about their lived experience as a Barrio Logan resident.  Such issues include climate vulnerability in relation to wealth and health. She also discusses issues of political outreach and service. Her discussion provides an opportunity to see the long-term, day-to-day effects of climate change in a climate vulnerable neighborhood.",
        
        // Add more entries for each video
    };

    videos.forEach(video => {
        video.addEventListener('mouseover', function() {
            const key = video.getAttribute('data-sidebar-key'); // Use a key to identify the video
            const text = sidebarTexts[key]; // Get the text from the object
            hoverTimer = setTimeout(() => {
                const sidebar = document.getElementById('videoSidebar');
                document.getElementById('sidebarText').textContent = text;
                sidebar.classList.add('open');
                if (key === 'video3' || key === 'video6') {
                    sidebar.classList.add('left');
                } else {
                    sidebar.classList.remove('left');
                }
            }, 2000); // 2 seconds delay
        });

        video.addEventListener('mouseout', function() {
            clearTimeout(hoverTimer);
            const sidebar = document.getElementById('videoSidebar');
            sidebar.classList.remove('open');
            sidebar.classList.remove('left');
        });

        const videoTitle = video.querySelector('.video-title');
        videoTitle.addEventListener('click', function() {
            const key = video.getAttribute('data-sidebar-key'); // Use a key to identify the video
            const text = sidebarTexts[key]; // Get the text from the object
            const sidebar = document.getElementById('videoSidebar');
            document.getElementById('sidebarText').textContent = text;
            sidebar.classList.add('open');
            if (key === 'video3' || key === 'video6') {
                sidebar.classList.add('left');
            } else {
                sidebar.classList.remove('left');
            }
        });
    });
});