const legendsData = {
    virat: {
        name: "Virat Kohli", nickname: "The Run Machine", role: "Batsman", batting: "Right Handed", bowling: "Right Arm Medium", born: "5 November 1988", image: "images/virat.jpg",
        stats: [
            { title: "Test Matches", big: "113", l1: "8848", n1: "Runs", l2: "49.36", n2: "Avg" },
            { title: "ODI Matches", big: "292", l1: "13848", n1: "Runs", l2: "57.88", n2: "Avg" },
            { title: "T20I Matches", big: "115", l1: "4008", n1: "Runs", l2: "52.72", n2: "Avg" },
            { title: "100s / 50s", big: "76 / 64", l1: "27", n1: "MOTM", l2: "7", n2: "Series" }
        ],
        badges: [{ name: "ICC Player of Decade", yr: "2010s" }, { name: "Arjuna Award", yr: "2013" }, { name: "Padma Shri", yr: "2017" }, { name: "Sir Sobers Trophy", yr: "2017" }],
        bio: [
            "Virat Kohli stands as a monumental figure in modern sports history, rewriting records across all formats of international cricket. Born on November 5, 1988, in Delhi, Kohli's journey from a passionate young boy to one of the greatest batsmen the world has ever witnessed is an inspiring tale of grit, discipline, and unparalleled consistency.",
            "He first burst into the global limelight when he led the Indian Under-19 cricket team to a historic World Cup victory in Malaysia back in 2008. This achievement paved his way directly into the senior men's national setup. Known early on for his raw aggression and fiery attitude, Kohli quickly transformed that intense energy into an extraordinary run-scoring machine, masterfully perfecting the art of chasing high totals under immense pressure.",
            "As India's Test captain, Kohli completely revolutionized the team's approach and work ethic. He instilled a cut-throat, aggressive pace-bowling mentality and placed a paramount focus on elite fitness levels, taking the squad to the absolute pinnacle of the ICC Test Rankings for 42 consecutive months. Under his exceptional leadership, India registered its first-ever historic Test series triumph down under in Australia.",
            "Amassing tens of thousands of international runs, multiple ICC Player of the Year accolades, and surpassing historic batting milestones, Virat Kohli has firmly etched his name next to the legendary figures of the game. Beyond his phenomenal numbers, his profound impact on elevating the sports culture and fitness standards in India remains his most enduring legacy."
        ]
    },
    sachin: {
        name: "Sachin Tendulkar", nickname: "God of Cricket", role: "Batsman", batting: "Right Handed", bowling: "Right Arm Leg Break", born: "24 April 1973", image: "images/sachin tendulakar.jpg",
        stats: [
            { title: "Test Matches", big: "200", l1: "15921", n1: "Runs", l2: "53.78", n2: "Avg" },
            { title: "ODI Matches", big: "463", l1: "18426", n1: "Runs", l2: "44.83", n2: "Avg" },
            { title: "T20 Matches", big: "1", l1: "10", n1: "Runs", l2: "10.00", n2: "Avg" },
            { title: "100s / 50s", big: "100 / 164", l1: "62", n1: "MOTM", l2: "15", n2: "Series" }
        ],
        badges: [{ name: "Bharat Ratna", yr: "2014" }, { name: "Padma Vibhushan", yr: "2008" }, { name: "Wisden Player", yr: "1997" }, { name: "World Cup Win", yr: "2011" }],
        bio: ["Widely revered as the 'God of Cricket', Sachin Ramesh Tendulkar represents more than just sporting greatness; he remains an integral cultural icon who united an entire nation for over two decades. Born in Mumbai on April 24, 1973, Sachin made his international debut at the tender age of 16 against a fierce Pakistani bowling attack, signaling the arrival of a true prodigy.", "For twenty-four years, Tendulkar shouldered the monumental hopes and dreams of a billion citizens. His impeccable batting technique, masterful stroke-play, and pristine on-field conduct set the gold standard across the globe. He became the first player to score a double century in One Day Internationals and remains the sole batsman to register 100 international centuries.", "The crowning glory of his illustrious career arrived in 2011 when he lifted the prestigious ICC Cricket World Cup on his home soil in Mumbai. Retiring in 2013, Sachin left behind an unprecedented mountain of runs in both Test and ODI formats that may never be surpassed.", "Awarded the Bharat Ratna, India's highest civilian honor, Sachin's legacy transcends statistics. His humility despite his unparalleled achievements continues to inspire generations of aspiring youngsters worldwide."]
    },
    dhoni: {
        name: "MS Dhoni", nickname: "Captain Cool", role: "Wicket Keeper", batting: "Right Handed", bowling: "Right Arm Medium", born: "7 July 1981", image: "images/dhoni.webp",
        stats: [
            { title: "Test Matches", big: "90", l1: "4876", n1: "Runs", l2: "38.09", n2: "Avg" },
            { title: "ODI Matches", big: "350", l1: "10773", n1: "Runs", l2: "50.57", n2: "Avg" },
            { title: "T20I Matches", big: "98", l1: "1617", n1: "Runs", l2: "37.60", n2: "Avg" },
            { title: "Dismissals", big: "829", l1: "634", n1: "Catches", l2: "195", n2: "Stump" }
        ],
        badges: [{ name: "Rajiv Khel Ratna", yr: "2007" }, { name: "Padma Bhushan", yr: "2018" }, { name: "ICC ODI Player", yr: "2008" }, { name: "T20 WC Champion", yr: "2007" }],
        bio: ["Mahendra Singh Dhoni, fondly called 'Thala' and 'Captain Cool', is celebrated as one of the most astute minds and iconic finishers in cricket history. Hailing from Ranchi, his journey from a small-town railway ticket collector to world cricket's elite tier is a testament to calculated risk-taking and composure.", "Dhoni completely redefined Indian cricket leadership when he guided a young team to victory in the inaugural 2007 ICC World T20. He followed it up by leading India to the ICC 2011 World Cup title with a match-winning, iconic six, and capturing the 2013 ICC Champions Trophy—making him the only captain to win all major ICC silverware.", "As a wicketkeeper, his lightning-fast stumpings set a benchmark. As a lower-order batsman, his unparalleled ability to read match situations and calmly guide run chases to the finish line became stuff of legend.", "Dhoni's calm demeanor in high-pressure situations has made him an archetype of effective leadership, proving that structured, quiet confidence can conquer the loudest storms."]
    },
    rohit: {
        name: "Rohit Sharma", nickname: "The Hitman", role: "Batsman", batting: "Right Handed", bowling: "Right Arm Off Break", born: "30 April 1987", image: "images/rohit sharma.jpg",
        stats: [
            { title: "Test Matches", big: "59", l1: "4137", n1: "Runs", l2: "45.46", n2: "Avg" },
            { title: "ODI Matches", big: "265", l1: "10866", n1: "Runs", l2: "49.16", n2: "Avg" },
            { title: "T20I Matches", big: "159", l1: "4231", n1: "Runs", l2: "32.05", n2: "Avg" },
            { title: "ODI 200s", big: "3", l1: "264", n1: "High", l2: "31", n2: "100s" }
        ],
        badges: [{ name: "Arjuna Award", yr: "2015" }, { name: "Khel Ratna", yr: "2020" }, { name: "ICC ODI Player", yr: "2019" }, { name: "T20 WC Captain", yr: "2024" }],
        bio: ["Rohit Sharma, known universally as 'The Hitman', is renowned for his effortless elegance, flawless timing, and unique ability to score daddy hundreds. Rising from the suburbs of Mumbai, his evolution into one of the most destructive white-ball openers is iconic.", "He holds the extraordinary, seemingly impossible record of scoring three double-centuries in One Day Internationals, including the highest individual score of 264 runs against Sri Lanka. His spectacular pull shots and dominance against elite pace bowling make him a spectacular watch.", "As a captain, Rohit brought immense tactical brilliance to the forefront, guiding India to deep tournament runs and domestic franchises to numerous championship trophies with his calm, player-centric management style.", "His leadership and batting prowess continue to position him as a core cornerstone of India's golden generation of modern batsmen."]
    },
    dravid: {
        name: "Rahul Dravid", nickname: "The Wall", role: "Batsman", batting: "Right Handed", bowling: "Right Arm Off Break", born: "11 January 1973", image: "images/rahul dravid.jpg",
        stats: [
            { title: "Test Matches", big: "164", l1: "13288", n1: "Runs", l2: "52.31", n2: "Avg" },
            { title: "ODI Matches", big: "344", l1: "10889", n1: "Runs", l2: "39.16", n2: "Avg" },
            { title: "Test Balls", big: "31258", l1: "210", n1: "Catches", l2: "36", n2: "100s" },
            { title: "International", big: "509", l1: "24208", n1: "Total", l2: "48", n2: "100s" }
        ],
        badges: [{ name: "Padma Bhushan", yr: "2013" }, { name: "ICC Player of Year", yr: "2004" }, { name: "Padma Shri", yr: "2004" }, { name: "T20 WC Coach", yr: "2024" }],
        bio: ["Known as 'The Wall', Rahul Dravid personified technical perfection, immense concentration, and absolute selflessness. Born in Indore and raised in Bangalore, Dravid became the absolute anchor of India’s middle order during its toughest overseas assignments.", "Facing thousands of balls against the most lethal bowling attacks, Dravid's patience wore down oppositions. His historic partnerships away from home formed the foundation of India’s greatest overseas Test victories.", "Beyond his elite batting, he seamlessly took up wicketkeeping duties to balance team combinations and later served successfully as captain and head coach, guiding national youth teams to greatness.", "Dravid remains the absolute epitome of a team-first gentleman, commanding immense respect for his values, dignity, and commitment."]
    },
    ganguly: {
        name: "Sourav Ganguly", nickname: "Dada", role: "Batsman", batting: "Left Handed", bowling: "Right Arm Medium", born: "8 July 1972", image: "images/sourav ganguly.jpg",
        stats: [
            { title: "Test Matches", big: "113", l1: "7212", n1: "Runs", l2: "42.17", n2: "Avg" },
            { title: "ODI Matches", big: "311", l1: "11363", n1: "Runs", l2: "41.02", n2: "Avg" },
            { title: "ODI 100s", big: "22", l1: "183", n1: "High", l2: "100", n2: "Catches" },
            { title: "Wickets", big: "132", l1: "32", n1: "Test", l2: "100", n2: "ODI" }
        ],
        badges: [{ name: "Padma Shri", yr: "2004" }, { name: "Arjuna Award", yr: "1998" }, { name: "BCCI President", yr: "2019" }, { name: "NatWest Champion", yr: "2002" }],
        bio: ["Sourav Ganguly, affectionately known as 'Dada' and the 'God of the Off-Side', was the fierce catalyst who injected fearless aggression into the Indian cricket ecosystem during a turbulent era in the early 2000s.", "Taking over the captaincy during challenging times, Ganguly backed young, raw talent who went on to become future legends. He taught India how to look oppositions in the eye and win matches on foreign soil.", "His legendary batting partnership with Sachin Tendulkar remains one of the most prolific opening pairs in cricket history, featuring majestic step-out sixes against elite spin bowlers.", "Ganguly's transition into cricket administration further highlighted his visionary leadership, leaving an indelible stamp on Indian cricket's structural growth."]
    },
    yuvraj: {
        name: "Yuvraj Singh", nickname: "Yuvi", role: "All-rounder", batting: "Left Handed", bowling: "Slow Left Arm", born: "12 December 1981", image: "images/yuvaraj singh.jpg",
        stats: [
            { title: "Test Matches", big: "40", l1: "1900", n1: "Runs", l2: "33.92", n2: "Avg" },
            { title: "ODI Matches", big: "304", l1: "8701", n1: "Runs", l2: "36.55", n2: "Avg" },
            { title: "T20I Matches", big: "58", l1: "1177", n1: "Runs", l2: "28.02", n2: "Avg" },
            { title: "Sixes (In Over)", big: "6", l1: "111", n1: "Wickets", l2: "14", n2: "100s" }
        ],
        badges: [{ name: "World Cup MOTS", yr: "2011" }, { name: "Arjuna Award", yr: "2012" }, { name: "Padma Shri", yr: "2014" }, { name: "T20 WC Winner", yr: "2007" }],
        bio: ["Yuvraj Singh is the quintessential big-match winner and one of the most dynamic white-ball all-rounders the world has seen, famed for hitting six sixes in an over during the 2007 T20 World Cup.", "His defining moment arrived during the 2011 ICC World Cup, where he put up a monumental Player of the Tournament performance to bring the trophy back home, battling severe health issues completely out of view.", "His subsequent successful battle against cancer and triumphant return to the national team serves as one of the most emotional and inspiring survival stories in world sports.", "Yuvraj’s clean bat swing, exceptional fielding, and knack for picking up crucial wickets cement him as a modern legend."]
    },
    kapildev: {
        name: "Kapil Dev", nickname: "Haryana Hurricane", role: "All-rounder", batting: "Right Handed", bowling: "Right Arm Fast Medium", born: "6 January 1959", image: "images/kapildev.jpg",
        stats: [
            { title: "Test Matches", big: "131", l1: "5248", n1: "Runs", l2: "434", n2: "Wkts" },
            { title: "ODI Matches", big: "225", l1: "3783", n1: "Runs", l2: "253", n2: "Wkts" },
            { title: "Test 5w", big: "23", l1: "175", n1: "High", l2: "64", n2: "Catches" },
            { title: "All Round Double", big: "1st", l1: "5000+", n1: "Runs", l2: "400+", n2: "Wkts" }
        ],
        badges: [{ name: "Wisden India Player", yr: "2002" }, { name: "Padma Bhushan", yr: "1991" }, { name: "Padma Shri", yr: "1982" }, { name: "WC Captain", yr: "1983" }],
        bio: ["Kapil Dev, the 'Haryana Hurricane', completely revolutionized Indian sports history by leading an underdog Indian team to its first-ever World Cup triumph at Lord's in 1983.", "That singular victory changed the global landscape of cricket forever, transforming India into the powerhouse epicentre of the sport. Kapil was an exceptional fast bowler and an explosive lower-order batsman.", "He held the world record for the highest number of Test wickets at one point, showing immense endurance and athletic capabilities without ever missing a game due to injury.", "Kapil Dev’s charismatic aura and pioneering achievements laid the bedrock for all future generations of Indian cricketers."]
    },
    kumble: {
        name: "Anil Kumble", nickname: "Jumbo", role: "Bowler", batting: "Right Handed", bowling: "Right Arm Leg Break", born: "17 October 1970", image: "images/anil kumble.jpg",
        stats: [
            { title: "Test Matches", big: "132", l1: "619", n1: "Wkts", l2: "29.65", n2: "Avg" },
            { title: "ODI Matches", big: "271", l1: "337", n1: "Wkts", l2: "30.89", n2: "Avg" },
            { title: "Innings 10-Wkt", big: "1", l1: "35", n1: "Test 5w", l2: "110", n2: "Runs High" },
            { title: "Balls Bowled", big: "40850", l1: "61", n1: "Test Cat", l2: "1", n2: "Test 100" }
        ],
        badges: [{ name: "Padma Shri", yr: "2005" }, { name: "Arjuna Award", yr: "1995" }, { name: "ICC Hall of Fame", yr: "2015" }, { name: "Wisden Cricketer", yr: "1996" }],
        bio: ["Anil Kumble, nicknamed 'Jumbo', is India’s greatest match-winner with the ball, capturing an incredible 619 Test wickets through sheer grit and unwavering determination.", "Unlike traditional leg-spinners, Kumble relied on pace, bounce, and precise accuracy. His historic feat of capturing all 10 wickets in a single Test innings against Pakistan remains etched in golden letters.", "Showing legendary courage, he once bowled with a fractured jaw against the West Indies, proving his absolute dedication to the national flag over personal physical comfort.", "Kumble's analytical brain and fierce competitive spirit have earned him an undisputed spot among the greatest spin bowling icons."]
    },
    bumrah: {
        name: "Jasprit Bumrah", nickname: "Boom Boom", role: "Bowler", batting: "Right Handed", bowling: "Right Arm Fast", born: "6 December 1993", image: "images/jasprit.png",
        stats: [
            { title: "Test Matches", big: "36", l1: "159", n1: "Wkts", l2: "20.69", n2: "Avg" },
            { title: "ODI Matches", big: "89", l1: "149", n1: "Wkts", l2: "23.55", n2: "Avg" },
            { title: "T20I Matches", big: "70", l1: "89", n1: "Wkts", l2: "17.74", n2: "Avg" },
            { title: "Best Bowling", big: "6/19", l1: "10", n1: "Test 5w", l2: "4.79", n2: "T20 Econ" }
        ],
        badges: [{ name: "ICC T20 WC Player", yr: "2024" }, { name: "Polly Umrigar", yr: "2019" }, { name: "No. 1 ICC Bowler", yr: "2024" }, { name: "Arjuna Nominee", yr: "2020" }],
        bio: ["Jasprit Bumrah is a generational fast-bowling genius, possessing a highly unique hyper-extended release and a lethal combination of raw pace, deadly yorkers, and deceptive slower balls.", "Rising through the ranks, he quickly dismantled the long-standing belief that India couldn't produce hyper-elite, terrifying fast bowlers capable of dominating on any pitch worldwide.", "Bumrah has been India's absolute go-to weapon across all three formats, consistently delivering match-winning spells under extreme pressure and in tournament finals.", "As a modern mastermind of the craft, Bumrah continues to baffle world-class batsmen, writing a brilliant chapter in India's rich bowling legacy."]
    }
};

let currentPlayerData = null;

function openProfile(id) {
    currentPlayerData = legendsData[id];
    if (!currentPlayerData) return;

    renderModalContent();
    document.body.classList.add('modal-open');
}

function renderModalContent() {
    let bioHtml = currentPlayerData.bio.map(p => `<p>${p}</p>`).join('');
    let statsHtml = currentPlayerData.stats.map(s => `
        <div class="stat-box">
            <div class="lbl">${s.title}</div>
            <div class="num">${s.big}</div>
            <div class="stat-sub-flex">
                <span><b>${s.l1}</b> ${s.n1}</span>
                <span><b>${s.l2}</b> ${s.n2}</span>
            </div>
        </div>
    `).join('');

    let badgesHtml = currentPlayerData.badges.map(b => `
        <div class="badge-card">
            <div class="icon">🏆</div>
            <div class="title">${b.name}</div>
            <div class="year">${b.yr}</div>
        </div>
    `).join('');

    document.getElementById('modalDynamicContent').innerHTML = `
        <div class="modal-header-block">
            <img src="${currentPlayerData.image}" class="panel-avatar">
            <div class="panel-meta">
                <h2>${currentPlayerData.name}</h2>
                <div class="nickname">${currentPlayerData.nickname}</div>
                <div class="meta-table">
                    <div><span class="label">🏏 Role</span><span>${currentPlayerData.role}</span></div>
                    <div><span class="label">🪄 Batting</span><span>${currentPlayerData.batting}</span></div>
                    <div><span class="label">🥎 Bowling</span><span>${currentPlayerData.bowling}</span></div>
                    <div><span class="label">📅 Born</span><span>${currentPlayerData.born}</span></div>
                </div>
            </div>
        </div>
        <div class="panel-tabs">
            <span class="active" onclick="switchTab('BIOGRAPHY')">BIOGRAPHY</span>
            <span onclick="switchTab('STATS')">CAREER STATS</span>
            <span onclick="switchTab('ACHIEVEMENTS')">ACHIEVEMENTS</span>
        </div>
        <div class="panel-body" id="dynamic-tab-body">
            <div class="bio-text">${bioHtml}</div>
        </div>
    `;
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.panel-tabs span');
    tabs.forEach(tab => tab.classList.toggle('active', tab.innerText === tabName));

    const body = document.getElementById('dynamic-tab-body');
    if (tabName === 'BIOGRAPHY') {
        body.innerHTML = `<div class="bio-text">${currentPlayerData.bio.map(p => `<p>${p}</p>`).join('')}</div>`;
    } else if (tabName === 'STATS') {
        body.innerHTML = `<div class="stats-grid">${currentPlayerData.stats.map(s => `
            <div class="stat-box">
                <div class="lbl">${s.title}</div>
                <div class="num">${s.big}</div>
                <div class="stat-sub-flex">
                    <span><b>${s.l1}</b> ${s.n1}</span>
                    <span><b>${s.l2}</b> ${s.n2}</span>
                </div>
            </div>`).join('')}</div>`;
    } else if (tabName === 'ACHIEVEMENTS') {
        body.innerHTML = `<div class="achievements-row">${currentPlayerData.badges.map(b => `
            <div class="badge-card">
                <div class="icon">🏆</div>
                <div class="title">${b.name}</div>
                <div class="year">${b.yr}</div>
            </div>`).join('')}</div>`;
    }
}

function closeProfile() {
    document.body.classList.remove('modal-open');
}