document.addEventListener('DOMContentLoaded', function() {
    // Create dial lines
    const diallines = document.querySelector('.diallines');
    for (let i = 1; i <= 60; i++) {
        diallines.innerHTML += "<div></div>";
    }
    
    // Position dial lines
    const lines = document.querySelectorAll('.diallines div');
    lines.forEach((line, index) => {
        line.style.transform = `rotate(${6 * index}deg)`;
        
        // Make hour markers thicker
        if (index % 5 === 0) {
            line.style.height = '15px';
            line.style.width = '3px';
            line.style.marginLeft = '-1.5px';
            line.style.background = '#333';
        }
    });
    
    // Get clock hands
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    
    // Get date and day elements
    const dateElement = document.querySelector('.date');
    const dayElement = document.querySelector('.day');
    
    // Days of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Months of the year
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    function updateClock() {
        const now = new Date();
        
        // Get hours, minutes, and seconds
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        // Calculate rotation angles
        const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
        const minuteDegrees = minutes * 6 + seconds * 0.1;
        const secondDegrees = seconds * 6;
        
        // Apply rotations
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        
        // Update date and day
        const day = days[now.getDay()];
        const date = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();
        
        dateElement.textContent = `${month} ${date}, ${year}`;
        dayElement.textContent = day;
    }
    
    // Initial update
    updateClock();
    
    // Update every second
    setInterval(updateClock, 1000);
});