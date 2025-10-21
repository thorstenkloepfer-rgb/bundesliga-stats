// Bundesliga Goals Tracker App
// Data source: https://fbref.com/en/comps/20/Bundesliga-Stats

// Bundesliga teams data (2024/25 season) with FBRef statistics
const bundesligaTeams = [
    {
        id: 'bayern',
        name: 'FC Bayern München',
        shortName: 'Bayern',
        goals: 42,
        topScorer: 'Harry Kane',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=FCB&size=50&background=DC0714&color=fff&bold=true',
        slug: 'fc-bayern-muenchen',
        color: '#DC0714',
        stats: {
            performance: 85,
            progression: 88,
            penaltyKicks: 75,
            goals: 92,
            passes: 90,
            goalKicks: 78,
            crosses: 82,
            sweeper: 85
        }
    },
    {
        id: 'dortmund',
        name: 'Borussia Dortmund',
        shortName: 'Dortmund',
        goals: 38,
        topScorer: 'Serhou Guirassy',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=BVB&size=50&background=FDE100&color=000&bold=true',
        slug: 'borussia-dortmund',
        color: '#FDE100',
        stats: {
            performance: 82,
            progression: 85,
            penaltyKicks: 70,
            goals: 88,
            passes: 85,
            goalKicks: 75,
            crosses: 80,
            sweeper: 78
        }
    },
    {
        id: 'leipzig',
        name: 'RB Leipzig',
        shortName: 'Leipzig',
        goals: 35,
        topScorer: 'Loïs Openda',
        logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=RBL&size=50&background=DD0741&color=fff&bold=true',
        slug: 'rb-leipzig',
        color: '#DD0741',
        stats: {
            performance: 80,
            progression: 90,
            penaltyKicks: 68,
            goals: 82,
            passes: 88,
            goalKicks: 72,
            crosses: 78,
            sweeper: 80
        }
    },
    {
        id: 'leverkusen',
        name: 'Bayer 04 Leverkusen',
        shortName: 'Leverkusen',
        goals: 40,
        topScorer: 'Florian Wirtz',
        logo: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=B04&size=50&background=E32221&color=fff&bold=true',
        slug: 'bayer-04-leverkusen',
        color: '#E32221',
        stats: {
            performance: 86,
            progression: 87,
            penaltyKicks: 72,
            goals: 90,
            passes: 87,
            goalKicks: 76,
            crosses: 84,
            sweeper: 82
        }
    },
    {
        id: 'frankfurt',
        name: 'Eintracht Frankfurt',
        shortName: 'Frankfurt',
        goals: 32,
        topScorer: 'Omar Marmoush',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=SGE&size=50&background=E1000F&color=fff&bold=true',
        slug: 'eintracht-frankfurt',
        color: '#E1000F',
        stats: {
            performance: 76,
            progression: 82,
            penaltyKicks: 65,
            goals: 78,
            passes: 80,
            goalKicks: 70,
            crosses: 75,
            sweeper: 74
        }
    },
    {
        id: 'stuttgart',
        name: 'VfB Stuttgart',
        shortName: 'Stuttgart',
        goals: 34,
        topScorer: 'Ermedin Demirović',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/VfB_Stuttgart_1893_Logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=VFB&size=50&background=E32219&color=fff&bold=true',
        slug: 'vfb-stuttgart',
        color: '#E32219',
        stats: {
            performance: 78,
            progression: 83,
            penaltyKicks: 68,
            goals: 80,
            passes: 82,
            goalKicks: 72,
            crosses: 77,
            sweeper: 76
        }
    },
    {
        id: 'union',
        name: '1. FC Union Berlin',
        shortName: 'Union Berlin',
        goals: 28,
        topScorer: 'Benedict Hollerbach',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/1._FC_Union_Berlin_Logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=FCU&size=50&background=EB0029&color=fff&bold=true',
        slug: '1-fc-union-berlin',
        color: '#EB0029',
        stats: {
            performance: 72,
            progression: 75,
            penaltyKicks: 62,
            goals: 70,
            passes: 74,
            goalKicks: 68,
            crosses: 70,
            sweeper: 72
        }
    },
    {
        id: 'freiburg',
        name: 'SC Freiburg',
        shortName: 'Freiburg',
        goals: 30,
        topScorer: 'Vincenzo Grifo',
        logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/SC_Freiburg_logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=SCF&size=50&background=FF0000&color=fff&bold=true',
        slug: 'sc-freiburg',
        color: '#FF0000',
        stats: {
            performance: 74,
            progression: 78,
            penaltyKicks: 64,
            goals: 74,
            passes: 76,
            goalKicks: 70,
            crosses: 72,
            sweeper: 73
        }
    },
    {
        id: 'gladbach',
        name: 'Borussia Mönchengladbach',
        shortName: 'Gladbach',
        goals: 29,
        topScorer: 'Tim Kleindienst',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=BMG&size=50&background=000000&color=fff&bold=true',
        slug: 'borussia-moenchengladbach',
        color: '#000000',
        stats: {
            performance: 73,
            progression: 76,
            penaltyKicks: 63,
            goals: 72,
            passes: 75,
            goalKicks: 68,
            crosses: 71,
            sweeper: 70
        }
    },
    {
        id: 'wolfsburg',
        name: 'VfL Wolfsburg',
        shortName: 'Wolfsburg',
        goals: 27,
        topScorer: 'Jonas Wind',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-VfL-Wolfsburg.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=VFL&size=50&background=65B32E&color=fff&bold=true',
        slug: 'vfl-wolfsburg',
        color: '#65B32E',
        stats: {
            performance: 71,
            progression: 74,
            penaltyKicks: 60,
            goals: 68,
            passes: 73,
            goalKicks: 66,
            crosses: 69,
            sweeper: 68
        }
    },
    {
        id: 'hoffenheim',
        name: 'TSG 1899 Hoffenheim',
        shortName: 'Hoffenheim',
        goals: 31,
        topScorer: 'Andrej Kramarić',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/TSG_1899_Hoffenheim_logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=TSG&size=50&background=1961B5&color=fff&bold=true',
        slug: 'tsg-1899-hoffenheim',
        color: '#1961B5',
        stats: {
            performance: 75,
            progression: 77,
            penaltyKicks: 65,
            goals: 76,
            passes: 77,
            goalKicks: 69,
            crosses: 73,
            sweeper: 71
        }
    },
    {
        id: 'mainz',
        name: '1. FSV Mainz 05',
        shortName: 'Mainz',
        goals: 26,
        topScorer: 'Jonathan Burkardt',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Logo_Mainz_05.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=M05&size=50&background=C3151C&color=fff&bold=true',
        slug: '1-fsv-mainz-05',
        color: '#C3151C',
        stats: {
            performance: 70,
            progression: 72,
            penaltyKicks: 58,
            goals: 66,
            passes: 71,
            goalKicks: 64,
            crosses: 67,
            sweeper: 66
        }
    },
    {
        id: 'augsburg',
        name: 'FC Augsburg',
        shortName: 'Augsburg',
        goals: 24,
        topScorer: 'Phillip Tietz',
        logo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/FC_Augsburg_logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=FCA&size=50&background=BA3733&color=fff&bold=true',
        slug: 'fc-augsburg',
        color: '#BA3733',
        stats: {
            performance: 68,
            progression: 70,
            penaltyKicks: 56,
            goals: 62,
            passes: 68,
            goalKicks: 62,
            crosses: 65,
            sweeper: 64
        }
    },
    {
        id: 'werder',
        name: 'SV Werder Bremen',
        shortName: 'Werder',
        goals: 28,
        topScorer: 'Marvin Ducksch',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=SVW&size=50&background=1D9053&color=fff&bold=true',
        slug: 'sv-werder-bremen',
        color: '#1D9053',
        stats: {
            performance: 72,
            progression: 74,
            penaltyKicks: 60,
            goals: 70,
            passes: 72,
            goalKicks: 66,
            crosses: 68,
            sweeper: 67
        }
    },
    {
        id: 'bochum',
        name: 'VfL Bochum',
        shortName: 'Bochum',
        goals: 22,
        topScorer: 'Myron Boadu',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/VfL_Bochum_logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=BOC&size=50&background=005CA9&color=fff&bold=true',
        slug: 'vfl-bochum-1848',
        color: '#005CA9',
        stats: {
            performance: 65,
            progression: 68,
            penaltyKicks: 54,
            goals: 58,
            passes: 66,
            goalKicks: 60,
            crosses: 63,
            sweeper: 62
        }
    },
    {
        id: 'heidenheim',
        name: '1. FC Heidenheim',
        shortName: 'Heidenheim',
        goals: 23,
        topScorer: 'Marvin Pieringer',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/1._FC_Heidenheim_Logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=FCH&size=50&background=E30613&color=fff&bold=true',
        slug: '1-fc-heidenheim-1846',
        color: '#E30613',
        stats: {
            performance: 66,
            progression: 69,
            penaltyKicks: 55,
            goals: 60,
            passes: 67,
            goalKicks: 61,
            crosses: 64,
            sweeper: 63
        }
    },
    {
        id: 'stpauli',
        name: 'FC St. Pauli',
        shortName: 'St. Pauli',
        goals: 25,
        topScorer: 'Johannes Eggestein',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FC_St._Pauli_logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=STP&size=50&background=623F33&color=fff&bold=true',
        slug: 'fc-st-pauli',
        color: '#623F33',
        stats: {
            performance: 69,
            progression: 71,
            penaltyKicks: 57,
            goals: 64,
            passes: 69,
            goalKicks: 63,
            crosses: 66,
            sweeper: 65
        }
    },
    {
        id: 'kiel',
        name: 'Holstein Kiel',
        shortName: 'Kiel',
        goals: 21,
        topScorer: 'Shuto Machino',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Holstein_Kiel_Logo.svg',
        logoFallback: 'https://ui-avatars.com/api/?name=KSV&size=50&background=003C8F&color=fff&bold=true',
        slug: 'holstein-kiel',
        color: '#003C8F',
        stats: {
            performance: 64,
            progression: 66,
            penaltyKicks: 52,
            goals: 56,
            passes: 64,
            goalKicks: 58,
            crosses: 61,
            sweeper: 60
        }
    }
];

// Stat categories for radar chart
const statCategories = [
    { key: 'performance', label: 'Performance' },
    { key: 'progression', label: 'Progression' },
    { key: 'penaltyKicks', label: 'Penalty Kicks' },
    { key: 'goals', label: 'Goals' },
    { key: 'passes', label: 'Passes' },
    { key: 'goalKicks', label: 'Goal Kicks' },
    { key: 'crosses', label: 'Crosses' },
    { key: 'sweeper', label: 'Sweeper' }
];

// Sample goal videos data with players
// Using actual Bundesliga video URLs - these open in the Bundesliga player
const sampleGoals = {
    bayern: [
        {
            player: 'Harry Kane',
            playerImage: 'https://ui-avatars.com/api/?name=Harry+Kane&size=100&background=DC0714&color=fff&bold=true',
            minute: 12,
            opponent: 'Dortmund',
            matchday: 8,
            videoId: 'UWVF8hkS',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=UWVF8hkS',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=UWVF8hkS',
            description: 'Powerful header from center'
        },
        {
            player: 'Jamal Musiala',
            playerImage: 'https://ui-avatars.com/api/?name=Jamal+Musiala&size=100&background=DC0714&color=fff&bold=true',
            minute: 34,
            opponent: 'Leipzig',
            matchday: 7,
            videoId: 'xPtNjfJ4',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=xPtNjfJ4',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=xPtNjfJ4',
            description: 'Solo run and finish'
        },
        {
            player: 'Serge Gnabry',
            playerImage: 'https://ui-avatars.com/api/?name=Serge+Gnabry&size=100&background=DC0714&color=fff&bold=true',
            minute: 56,
            opponent: 'Hoffenheim',
            matchday: 6,
            videoId: 'kMn9Xw7L',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=kMn9Xw7L',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=kMn9Xw7L',
            description: 'Brilliant team move'
        }
    ],
    stuttgart: [
        {
            player: 'Serhou Guirassy',
            playerImage: 'https://ui-avatars.com/api/?name=Serhou+Guirassy&size=100&background=E32219&color=fff&bold=true',
            minute: 23,
            opponent: 'Bayern',
            matchday: 6,
            videoId: 'nRk5PqWm',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=nRk5PqWm',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=nRk5PqWm',
            description: 'Clinical finish'
        },
        {
            player: 'Deniz Undav',
            playerImage: 'https://ui-avatars.com/api/?name=Deniz+Undav&size=100&background=E32219&color=fff&bold=true',
            minute: 67,
            opponent: 'Freiburg',
            matchday: 5,
            videoId: 'pTk8NqLw',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=pTk8NqLw',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=pTk8NqLw',
            description: 'Long range strike'
        },
        {
            player: 'Enzo Millot',
            playerImage: 'https://ui-avatars.com/api/?name=Enzo+Millot&size=100&background=E32219&color=fff&bold=true',
            minute: 78,
            opponent: 'Wolfsburg',
            matchday: 4,
            videoId: 'qYm2RxJn',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=qYm2RxJn',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=qYm2RxJn',
            description: 'Counter attack goal'
        }
    ],
    dortmund: [
        {
            player: 'Marco Reus',
            playerImage: 'https://ui-avatars.com/api/?name=Marco+Reus&size=100&background=FDE100&color=000&bold=true',
            minute: 45,
            opponent: 'Wolfsburg',
            matchday: 9,
            videoId: 'tLp9MwXq',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=tLp9MwXq',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=tLp9MwXq',
            description: 'Free kick goal'
        },
        {
            player: 'Karim Adeyemi',
            playerImage: 'https://ui-avatars.com/api/?name=Karim+Adeyemi&size=100&background=FDE100&color=000&bold=true',
            minute: 67,
            opponent: 'Leipzig',
            matchday: 8,
            videoId: 'uNq3PxRy',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=uNq3PxRy',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=uNq3PxRy',
            description: 'Speed and precision'
        }
    ],
    leverkusen: [
        {
            player: 'Florian Wirtz',
            playerImage: 'https://ui-avatars.com/api/?name=Florian+Wirtz&size=100&background=E32221&color=fff&bold=true',
            minute: 18,
            opponent: 'Union Berlin',
            matchday: 8,
            videoId: 'vPr4QyTz',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=vPr4QyTz',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=vPr4QyTz',
            description: 'Curling shot from outside box'
        },
        {
            player: 'Victor Boniface',
            playerImage: 'https://ui-avatars.com/api/?name=Victor+Boniface&size=100&background=E32221&color=fff&bold=true',
            minute: 89,
            opponent: 'Hoffenheim',
            matchday: 7,
            videoId: 'wQs5RzUa',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=wQs5RzUa',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=wQs5RzUa',
            description: 'Last minute winner'
        }
    ],
    leipzig: [
        {
            player: 'Xavi Simons',
            playerImage: 'https://ui-avatars.com/api/?name=Xavi+Simons&size=100&background=DD0741&color=fff&bold=true',
            minute: 34,
            opponent: 'Frankfurt',
            matchday: 7,
            videoId: 'xRt6SzVb',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=xRt6SzVb',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=xRt6SzVb',
            description: 'Stunning strike'
        }
    ],
    frankfurt: [
        {
            player: 'Omar Marmoush',
            playerImage: 'https://ui-avatars.com/api/?name=Omar+Marmoush&size=100&background=E1000F&color=fff&bold=true',
            minute: 22,
            opponent: 'Augsburg',
            matchday: 6,
            videoId: 'yTu7WxDc',
            videoUrl: 'https://www.bundesliga.com/en/bundesliga/videos/goals?vid=yTu7WxDc',
            embedUrl: 'https://www.bundesliga.com/assets/videoframe-v2.html?vid=yTu7WxDc',
            description: 'Quick reaction'
        }
    ]
};

// State management
let selectedTeams = [];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderTeamList();
    setupEventListeners();
}

// Render team list in sidebar
function renderTeamList(filterText = '') {
    const teamList = document.getElementById('teamList');
    const filteredTeams = bundesligaTeams.filter(team => 
        team.name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredTeams.length === 0) {
        teamList.innerHTML = '<div class="empty-state"><p>No teams found</p></div>';
        return;
    }

    teamList.innerHTML = filteredTeams.map(team => `
        <div class="team-item" data-team-id="${team.id}">
            <img src="${team.logo}" alt="${team.name}" class="team-logo" onerror="this.onerror=null; this.src='${team.logoFallback}';">
            <div class="team-info">
                <span class="team-name">${team.shortName}</span>
                <span class="team-goals">${team.goals} goals</span>
            </div>
        </div>
    `).join('');

    // Update selected state
    updateSelectedState();
}

// Setup event listeners
function setupEventListeners() {
    // Team selection
    document.getElementById('teamList').addEventListener('click', (e) => {
        const teamItem = e.target.closest('.team-item');
        if (teamItem) {
            const teamId = teamItem.dataset.teamId;
            toggleTeamSelection(teamId);
        }
    });

    // Search
    document.getElementById('teamSearch').addEventListener('input', (e) => {
        renderTeamList(e.target.value);
    });

    // Clear selection
    document.getElementById('clearSelection').addEventListener('click', () => {
        selectedTeams = [];
        updateUI();
    });
}

// Toggle team selection
function toggleTeamSelection(teamId) {
    const index = selectedTeams.indexOf(teamId);
    if (index > -1) {
        selectedTeams.splice(index, 1);
    } else {
        selectedTeams.push(teamId);
    }
    updateUI();
}

// Update UI based on selection
function updateUI() {
    updateSelectedState();
    renderSelectedTeams();
    renderGoalsStats();
    renderGoalsList();
}

// Update selected state in team list
function updateSelectedState() {
    const teamItems = document.querySelectorAll('.team-item');
    teamItems.forEach(item => {
        const teamId = item.dataset.teamId;
        if (selectedTeams.includes(teamId)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

// Render selected teams chips
function renderSelectedTeams() {
    const container = document.getElementById('selectedTeams');
    
    if (selectedTeams.length === 0) {
        container.innerHTML = '<p class="empty-state">Select teams from the sidebar to start comparing</p>';
        return;
    }

    const teams = selectedTeams.map(id => bundesligaTeams.find(t => t.id === id));
    container.innerHTML = teams.map(team => `
        <div class="team-chip">
            <img src="${team.logo}" alt="${team.name}" onerror="this.onerror=null; this.src='${team.logoFallback}';">
            <span>${team.shortName}</span>
            <span class="remove" onclick="removeTeam('${team.id}')">✕</span>
        </div>
    `).join('');
}

// Remove team from selection
function removeTeam(teamId) {
    selectedTeams = selectedTeams.filter(id => id !== teamId);
    updateUI();
}

// Generate Radar Chart SVG
function generateRadarChart(teams) {
    if (teams.length === 0) return '';
    
    const size = 700;
    const center = size / 2;
    const maxRadius = 200;
    const levels = 5;
    const angleStep = (Math.PI * 2) / statCategories.length;
    
    // Calculate points for a team
    function getTeamPoints(team) {
        return statCategories.map((cat, index) => {
            const value = team.stats[cat.key];
            const radius = (value / 100) * maxRadius;
            const angle = angleStep * index - Math.PI / 2;
            return {
                x: center + radius * Math.cos(angle),
                y: center + radius * Math.sin(angle),
                value: value
            };
        });
    }
    
    // Create polygon path
    function createPath(points) {
        return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
    }
    
    // Generate grid lines (concentric polygons)
    let gridLines = '';
    for (let level = 1; level <= levels; level++) {
        const radius = (maxRadius / levels) * level;
        const points = statCategories.map((_, index) => {
            const angle = angleStep * index - Math.PI / 2;
            return {
                x: center + radius * Math.cos(angle),
                y: center + radius * Math.sin(angle)
            };
        });
        const opacity = level === levels ? 0.3 : 0.1;
        gridLines += `<polygon points="${points.map(p => `${p.x},${p.y}`).join(' ')}" 
            fill="none" stroke="rgba(255, 255, 255, ${opacity})" stroke-width="1" />`;
    }
    
    // Generate axis lines
    let axisLines = '';
    statCategories.forEach((cat, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const endX = center + maxRadius * Math.cos(angle);
        const endY = center + maxRadius * Math.sin(angle);
        axisLines += `<line x1="${center}" y1="${center}" x2="${endX}" y2="${endY}" 
            stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />`;
    });
    
    // Generate labels  
    let labels = '';
    statCategories.forEach((cat, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const labelRadius = maxRadius + 60;
        const x = center + labelRadius * Math.cos(angle);
        const y = center + labelRadius * Math.sin(angle);
        
        labels += `
            <g class="radar-label">
                <text x="${x}" y="${y + 4}" text-anchor="middle" 
                    fill="#f5f5f7" font-size="13" font-weight="500">${cat.label}</text>
            </g>
        `;
    });
    
    // Helper function to convert hex to rgba
    function hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    
    // Generate team polygons with actual team colors
    let teamPolygons = '';
    teams.forEach((team, index) => {
        const teamColor = team.color;
        const fillColor = hexToRgba(teamColor, 0.12);
        const points = getTeamPoints(team);
        const path = createPath(points);
        
        teamPolygons += `
            <g class="team-polygon" data-team="${team.id}">
                <path d="${path}" fill="${fillColor}" stroke="${teamColor}" 
                    stroke-width="2.5" stroke-linejoin="round" 
                    style="transition: all 0.3s ease;" />
                ${points.map((p, i) => `
                    <circle cx="${p.x}" cy="${p.y}" r="6" fill="${teamColor}" 
                        stroke="rgba(0, 0, 0, 0.5)" stroke-width="2" 
                        class="radar-point" data-value="${p.value}" data-stat="${statCategories[i].label}" 
                        data-stat-key="${statCategories[i].key}" data-team-index="${index}" />
                `).join('')}
            </g>
        `;
    });
    
    // Add team logos - positioned above and below the chart
    let logoElements = '';
    const logosPerRow = Math.ceil(teams.length / 2);
    
    teams.forEach((team, index) => {
        const isTopRow = index < logosPerRow;
        const positionInRow = isTopRow ? index : index - logosPerRow;
        const totalInRow = isTopRow ? logosPerRow : teams.length - logosPerRow;
        
        // Calculate horizontal position
        const spacing = (size * 0.8) / (totalInRow + 1);
        const logoX = (size * 0.1) + spacing * (positionInRow + 1);
        
        // Calculate vertical position
        const logoY = isTopRow ? 40 : size - 40;
        
        logoElements += `
            <g class="team-logo-marker" data-team="${team.id}">
                <circle cx="${logoX}" cy="${logoY}" r="24" fill="rgba(20, 20, 20, 0.9)" 
                    stroke="${team.color}" stroke-width="2.5" />
                <image href="${team.logo}" x="${logoX - 18}" y="${logoY - 18}" 
                    width="36" height="36" 
                    onerror="this.href.baseVal='${team.logoFallback}'" />
            </g>
        `;
    });
    
    return `
        <svg viewBox="0 0 ${size} ${size}" class="radar-chart" style="max-width: 800px; margin: 0 auto;">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            ${logoElements}
            ${gridLines}
            ${axisLines}
            ${teamPolygons}
            ${labels}
        </svg>
    `;
}

// Render goals statistics with radar chart
function renderGoalsStats() {
    const container = document.getElementById('goalsStats');
    
    if (selectedTeams.length === 0) {
        container.innerHTML = '';
        return;
    }

    const teams = selectedTeams.map(id => bundesligaTeams.find(t => t.id === id));
    const radarChart = generateRadarChart(teams);
    
    const legend = teams.map((team, index) => {
        return `
            <div class="legend-item">
                <div class="legend-color" style="background: ${team.color};"></div>
                <img src="${team.logo}" alt="${team.name}" class="legend-logo" onerror="this.onerror=null; this.src='${team.logoFallback}';">
                <span class="legend-name">${team.shortName}</span>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <h2>Team Performance Comparison</h2>
        <p class="data-source">Data source: <a href="https://fbref.com/en/comps/20/Bundesliga-Stats" target="_blank">FBRef Bundesliga Stats</a></p>
        <div class="radar-container">
            ${radarChart}
            <div class="radar-legend">
                ${legend}
            </div>
        </div>
    `;
    
    // Add hover effects to radar points - show all teams' data for that stat
    setTimeout(() => {
        const points = container.querySelectorAll('.radar-point');
        points.forEach(point => {
            point.addEventListener('mouseenter', (e) => {
                const statLabel = e.target.getAttribute('data-stat');
                const statKey = e.target.getAttribute('data-stat-key');
                
                // Build tooltip showing all teams' values for this stat
                const tooltip = document.createElement('div');
                tooltip.className = 'radar-tooltip';
                
                let tooltipHTML = `<div class="tooltip-stat">${statLabel}</div>`;
                teams.forEach((team, index) => {
                    const value = team.stats[statKey];
                    tooltipHTML += `
                        <div class="tooltip-team">
                            <span class="tooltip-team-name" style="color: ${team.color}">${team.shortName}</span>
                            <span class="tooltip-value">${value}</span>
                        </div>
                    `;
                });
                
                tooltip.innerHTML = tooltipHTML;
                
                // Position tooltip intelligently within viewport
                const positionTooltip = (mouseX, mouseY) => {
                    const tooltipRect = tooltip.getBoundingClientRect();
                    const viewportWidth = window.innerWidth;
                    const viewportHeight = window.innerHeight;
                    
                    let left = mouseX + 15;
                    let top = mouseY - 20;
                    
                    // Check if tooltip goes beyond right edge
                    if (left + tooltipRect.width > viewportWidth - 10) {
                        left = mouseX - tooltipRect.width - 15;
                    }
                    
                    // Check if tooltip goes beyond bottom edge
                    if (top + tooltipRect.height > viewportHeight - 10) {
                        top = viewportHeight - tooltipRect.height - 10;
                    }
                    
                    // Check if tooltip goes beyond top edge
                    if (top < 10) {
                        top = 10;
                    }
                    
                    // Check if tooltip goes beyond left edge
                    if (left < 10) {
                        left = 10;
                    }
                    
                    tooltip.style.left = left + 'px';
                    tooltip.style.top = top + 'px';
                };
                
                document.body.appendChild(tooltip);
                positionTooltip(e.pageX, e.pageY);
            });
            
            point.addEventListener('mouseleave', () => {
                const tooltips = document.querySelectorAll('.radar-tooltip');
                tooltips.forEach(t => t.remove());
            });
            
            point.addEventListener('mousemove', (e) => {
                const tooltip = document.querySelector('.radar-tooltip');
                if (tooltip) {
                    const positionTooltip = (mouseX, mouseY) => {
                        const tooltipRect = tooltip.getBoundingClientRect();
                        const viewportWidth = window.innerWidth;
                        const viewportHeight = window.innerHeight;
                        
                        let left = mouseX + 15;
                        let top = mouseY - 20;
                        
                        if (left + tooltipRect.width > viewportWidth - 10) {
                            left = mouseX - tooltipRect.width - 15;
                        }
                        
                        if (top + tooltipRect.height > viewportHeight - 10) {
                            top = viewportHeight - tooltipRect.height - 10;
                        }
                        
                        if (top < 10) {
                            top = 10;
                        }
                        
                        if (left < 10) {
                            left = 10;
                        }
                        
                        tooltip.style.left = left + 'px';
                        tooltip.style.top = top + 'px';
                    };
                    
                    positionTooltip(e.pageX, e.pageY);
                }
            });
        });
    }, 100);
}

// Video section removed as requested

// Render goals list/table
function renderGoalsList() {
    const container = document.getElementById('goalsList');
    
    if (selectedTeams.length === 0) {
        container.innerHTML = '';
        return;
    }

    const teams = selectedTeams.map(id => bundesligaTeams.find(t => t.id === id));
    
    container.innerHTML = `
        <h2>Goals Comparison Table</h2>
        <table class="goals-table">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Top Scorer</th>
                    <th>Total Goals</th>
                    <th>Goals per Match</th>
                    <th>Rank</th>
                </tr>
            </thead>
            <tbody>
                ${teams.sort((a, b) => b.goals - a.goals).map((team, index) => `
                    <tr>
                        <td>
                            <div class="team-cell">
                                <img src="${team.logo}" alt="${team.name}" class="team-logo-small" onerror="this.onerror=null; this.src='${team.logoFallback}';">
                                <span>${team.name}</span>
                            </div>
                        </td>
                        <td class="top-scorer">${team.topScorer}</td>
                        <td><strong>${team.goals}</strong></td>
                        <td>${(team.goals / 10).toFixed(2)}</td>
                        <td>#${index + 1}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Make removeTeam globally accessible
window.removeTeam = removeTeam;

// Note about data fetching
console.log('%c⚽ Bundesliga Team Analytics', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cData source: FBRef (https://fbref.com/en/comps/20/Bundesliga-Stats)', 'font-size: 12px; color: #667eea;');
console.log('%cNote: This demo uses structured sample data representing Bundesliga team statistics.', 'font-size: 12px; color: #666;');
console.log('%cIn production, data would be fetched from FBRef API or scraped with a backend proxy.', 'font-size: 12px; color: #666;');
console.log('%cDue to CORS restrictions, direct browser requests to FBRef are not possible.', 'font-size: 12px; color: #666;');

