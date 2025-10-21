# Video Setup Guide

## ✅ What's Been Fixed

### 1. Video Playback
- **Before**: Videos showed "Video unavailable" with YouTube placeholders
- **After**: Using actual Bundesliga video embed URLs
- Each video now uses the Bundesliga video frame: `https://www.bundesliga.com/assets/videoframe-v2.html?vid=[VIDEO_ID]`
- Direct link to watch full video on Bundesliga.com added below each video

### 2. Player Images
- **Before**: Broken image links to bundesliga.com
- **After**: Using UI Avatars service with player initials and team colors
- All player images now display with team-colored backgrounds
- Format: `https://ui-avatars.com/api/?name=Player+Name&size=100&background=TEAMCOLOR&color=fff`

### 3. Team Logos
- **Before**: Some logos failed to load from Wikimedia
- **After**: Added fallback logos using team abbreviations with team colors
- Logos try Wikimedia first, then fallback to UI Avatars
- All teams now have visible logos

## 🎬 How Videos Work

### Embedded Videos
The app uses Bundesliga's official video embed URL format:
```
https://www.bundesliga.com/assets/videoframe-v2.html?vid=UWVF8hkS
```

### Video Data Structure
Each goal video includes:
- `videoId`: Unique Bundesliga video identifier
- `videoUrl`: Direct link to video page on Bundesliga.com
- `embedUrl`: Embeddable iframe URL
- `playerImage`: Player avatar with team colors
- Goal metadata (minute, opponent, matchday)

## 📊 Current Video Library

### Bayern München (3 videos)
- Harry Kane - Header vs Dortmund
- Jamal Musiala - Solo run vs Leipzig
- Serge Gnabry - Team move vs Hoffenheim

### VfB Stuttgart (3 videos)
- Serhou Guirassy - Clinical finish vs Bayern
- Deniz Undav - Long range strike vs Freiburg
- Enzo Millot - Counter attack vs Wolfsburg

### Borussia Dortmund (2 videos)
- Marco Reus - Free kick vs Wolfsburg
- Karim Adeyemi - Speed run vs Leipzig

### Bayer Leverkusen (2 videos)
- Florian Wirtz - Outside box shot vs Union Berlin
- Victor Boniface - Last minute winner vs Hoffenheim

### RB Leipzig (1 video)
- Xavi Simons - Stunning strike vs Frankfurt

### Eintracht Frankfurt (1 video)
- Omar Marmoush - Quick reaction vs Augsburg

## 🔧 How to Add More Videos

To add more goal videos, update the `sampleGoals` object in `app.js`:

```javascript
teamid: [
    {
        player: 'Player Name',
        playerImage: 'https://ui-avatars.com/api/?name=Player+Name&size=100&background=TEAMCOLOR&color=fff&bold=true',
        minute: 45,
        opponent: 'Opponent Team',
        matchday: 10,
        videoId: 'VIDEO_ID_HERE',
        videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=VIDEO_ID_HERE',
        embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=VIDEO_ID_HERE',
        description: 'Goal description'
    }
]
```

## 🎨 Team Colors Reference

- Bayern: `#DC0714` (red)
- Dortmund: `#FDE100` (yellow)
- Leipzig: `#DD0741` (red)
- Leverkusen: `#E32221` (red)
- Stuttgart: `#E32219` (red)
- Frankfurt: `#E1000F` (red)
- And more in the code...

## 🌐 Video Embedding Notes

### CORS Restrictions
- Bundesliga.com blocks direct API requests from browsers
- Videos must be embedded using their iframe player
- Full video functionality requires opening Bundesliga.com directly

### Iframe Embed
The embed iframe includes:
- Autoplay capability
- Fullscreen support
- Picture-in-picture mode
- Responsive sizing

### Fallback Option
If embedded video doesn't play:
1. Click the "Watch full video on Bundesliga.com" link
2. Opens video in new tab on official Bundesliga site
3. Full HD quality and all features available

## 🚀 Testing

1. Open `index.html` in your browser
2. Select a team (Bayern, Stuttgart, Dortmund, or Leverkusen)
3. Scroll to "Goal Videos" section
4. Videos should appear with:
   - Player avatar/image ✓
   - Team logo ✓
   - Embedded video player ✓
   - Link to full video ✓

## 📝 Known Limitations

1. **Limited Video Library**: Currently showing 12 sample videos
2. **Embed Restrictions**: Some videos may require opening on Bundesliga.com
3. **No Auto-fetch**: Videos are manually added (not fetched from API)

To get a full video library, you would need:
- Backend server to scrape Bundesliga.com
- Or access to official Bundesliga API
- Or manual addition of video IDs from Bundesliga website

## 💡 Tips

- Try selecting "Bayern" or "Stuttgart" - they have the most videos
- Player images use team colors for consistent branding
- All team logos have fallbacks that match team colors
- Videos can be fullscreened for better viewing


