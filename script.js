window.addEventListener('message', function(event) {
    const data = event.data;
    
    if (data.transactionType === 'playMusic') {
        // Initialize YouTube API and play music
        // Note: You'll need to implement YouTube API integration here
        // or use another audio solution
        
        document.getElementById('current-track').textContent = 
            "Now Playing: " + data.musicTitle;
    }
    
    if (data.transactionType === 'hideLoadingScreen') {
        document.body.style.display = 'none';
    }
});

// Populate links
const links = [
    {text: "Discord", url: "https://discord.gg/YOUR_DISCORD"},
    {text: "Website", url: "https://your-website.com"},
    {text: "Rules", url: "https://your-website.com/rules"}
];

const linksContainer = document.querySelector('.links');
links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.text;
    a.target = "_blank";
    linksContainer.appendChild(a);
});

// Simulate random loading progress
function updateLoadingProgress() {
    const progress = document.querySelector('.progress');
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width += Math.random() * 3;
            if (width > 100) width = 100;
            progress.style.width = width + '%';
        }
    }, 100);
}

updateLoadingProgress();