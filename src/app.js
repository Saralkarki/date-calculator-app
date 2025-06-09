// Target dates
const targetDates = {
    valentines: new Date('2025-02-14T00:00:00'),
    march14: new Date('2025-03-14T00:00:00')
};

// Calculate time difference
function calculateTimeDifference(targetDate) {
    const now = new Date();
    const difference = targetDate - now;
    
    // Check if date has passed
    const hasPassed = difference < 0;
    const absDifference = Math.abs(difference);
    
    // Calculate time units
    const days = Math.floor(absDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((absDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((absDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((absDifference % (1000 * 60)) / 1000);
    
    return {
        days,
        hours,
        minutes,
        seconds,
        hasPassed,
        totalMilliseconds: difference
    };
}

// Update countdown display
function updateCountdown(targetDate, elementSuffix) {
    const timeDiff = calculateTimeDifference(targetDate);
    
    // Update time values
    document.getElementById(`days${elementSuffix}`).textContent = timeDiff.days;
    document.getElementById(`hours${elementSuffix}`).textContent = timeDiff.hours;
    document.getElementById(`minutes${elementSuffix}`).textContent = timeDiff.minutes;
    document.getElementById(`seconds${elementSuffix}`).textContent = timeDiff.seconds;
    
    // Update status
    const statusElement = document.getElementById(`status${elementSuffix}`);
    if (timeDiff.hasPassed) {
        statusElement.textContent = `This date has passed ${timeDiff.days} days ago`;
        statusElement.className = 'status passed';
    } else {
        statusElement.textContent = `${timeDiff.days} days remaining`;
        statusElement.className = 'status upcoming';
    }
}

// Update current time display
function updateCurrentTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    
    document.getElementById('currentTime').textContent = 
        `Current time: ${now.toLocaleDateString('en-US', options)}`;
}

// Main update function
function updateAll() {
    updateCurrentTime();
    updateCountdown(targetDates.valentines, '1');
    updateCountdown(targetDates.march14, '2');
}

// Initialize and start the app
function init() {
    // Update immediately
    updateAll();
    
    // Update every second
    setInterval(updateAll, 1000);
    
    console.log('Date Calculator App initialized!');
    console.log('Target dates:', targetDates);
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
