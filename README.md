# Date Calculator App 📅

A beautiful, real-time JavaScript application that calculates and displays the elapsed time from today to two specific target dates:
- **February 14th, 2025** (Valentine's Day) 💝
- **March 14th, 2025** 🌸

## 🌐 Live Demo
**Try it live**: [https://saralkarki.github.io/date-calculator-app/](https://saralkarki.github.io/date-calculator-app/)

## 📦 Repository
**GitHub**: [https://github.com/Saralkarki/date-calculator-app](https://github.com/Saralkarki/date-calculator-app)

## Features

✨ **Real-time Updates**: Automatically updates every second  
📊 **Detailed Breakdown**: Shows days, hours, minutes, and seconds  
🎨 **Beautiful UI**: Modern glassmorphism design with gradient background  
📱 **Responsive**: Works on desktop and mobile devices  
⏰ **Dynamic Status**: Shows whether dates are upcoming or have passed  
🕒 **Current Time Display**: Shows current date and time with timezone

## How to Run

### Option 1: Simple File Opening
```bash
open index.html
```

### Option 2: Local Server (Recommended)
```bash
# Using Python (if you have Python installed)
python3 -m http.server 8080

# Or using Node.js http-server
npm install
npm run serve-node
```

Then open your browser and go to `http://localhost:8080`

## File Structure

```
date-calculator-app/
├── index.html          # Main HTML file with UI
├── src/
│   └── app.js         # JavaScript logic for calculations
├── package.json       # Project configuration
└── README.md         # This file
```

## How It Works

1. **Target Dates**: The app tracks two specific dates (Feb 14, 2025 and Mar 14, 2025)
2. **Real-time Calculation**: Every second, it calculates the difference between current time and target dates
3. **Time Breakdown**: Converts the time difference into days, hours, minutes, and seconds
4. **Status Detection**: Automatically detects if dates have passed and adjusts the display accordingly
5. **Live Updates**: The countdown updates in real-time without page refresh

## Browser Compatibility

Works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Technical Details

- **Pure JavaScript**: No external dependencies required
- **Vanilla CSS**: Custom styling with modern CSS features
- **Date API**: Uses JavaScript's built-in Date object for calculations
- **Responsive Design**: CSS Grid and Flexbox for layout

## Customization

To add more dates or modify existing ones, edit the `targetDates` object in `src/app.js`:

```javascript
const targetDates = {
    valentines: new Date('2025-02-14T00:00:00'),
    march14: new Date('2025-03-14T00:00:00'),
    // Add more dates here
};
```
