let players;

async function getAllPlayers() {
    out("show all Players");
    players = await fetch(baseUrl + showUrl + 'players/').then(response => response.json());
    out(players);
}

async function filterGoalKeepers() {
    await getAllPlayers();
    let goalKeepers = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'goalkeeper') {
            goalKeepers.push(player);
        }
    });
    out(goalKeepers);
    return goalKeepers;
}

async function filterSweepers() {
    await getAllPlayers();
    let sweppers = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'sweeper') {
            sweppers.push(player);
        }
    });
    out(sweppers);
    return sweppers;
}

async function filterDefenders() {
    await getAllPlayers();
    let defenders = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'defender') {
            defenders.push(player);
        }
    });
    out(defenders);
    return defenders;
}

async function filterMidfielders() {
    await getAllPlayers();
    let midfielders = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'midfielder') {
            midfielders.push(player);
        }
    });
    out(midfielders);
    return midfielders;
}

async function filterAttackers() {
    await getAllPlayers();
    let attackers = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'attacker') {
            attackers.push(player);
        }
    });
    out(attackers);
    return attackers;
}