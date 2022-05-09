
let players = [];

async function getAllPlayers() {
    out("show all Players");
    players = await fetch(baseUrl + showUrl + 'players/').then(response => response.json());
    out(players);
}

function filterGoalKeepers() {
    let goalKeepers = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'goalkeeper') {
            goalKeepers.push(player);
        }
    });
    out(goalKeepers);
}

function filterSweepers() {
    let sweppers = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'sweeper') {
            sweppers.push(player);
        }
    });
    out(sweppers);
}

function filterDefenders() {
    let defenders = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'defender') {
            defenders.push(player);
        }
    });
    out(defenders);
}

function filterMidfielders() {
    let midfielders = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'midfielder') {
            midfielders.push(player);
        }
    });
    out(midfielders);
}

function filterAttackers() {
    let attackers = [];
    players.forEach ((player) => {
        if (player.role.toLowerCase() === 'attacker') {
            attackers.push(player);
        }
    });
    out(attackers);
}