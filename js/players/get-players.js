let players = [];

/**
 * get all players from DB and set players in  list
 * @returns {Promise<void>} list with players
 *  @author Jens & Jackie
 */
async function getAllPlayers() {
  out("show all Players");
  players = await fetch(baseUrl + showUrl + "players").then((response) =>
    response.json()
  );
  out(players);
  return players;
}

/**
 * filter all players to only return goalkeepers
 * @returns {Promise<*[]>} list with goalkeepers
 * @author Jens & Jackie
 */
async function filterGoalKeepers() {
  await getAllPlayers();
  let goalKeepers = [];
  players.forEach((player) => {
    if (player.role.toLowerCase() === "goalkeeper") {
      goalKeepers.push(player);
    }
  });
  out(goalKeepers);
  return goalKeepers;
}

/**
 * filter all players to only return sweepers
 * @returns {Promise<*[]>} list with sweepers
 */
async function filterSweepers() {
  await getAllPlayers();
  let sweppers = [];
  players.forEach((player) => {
    if (player.role.toLowerCase() === "sweeper") {
      sweppers.push(player);
    }
  });
  out(sweppers);
  return sweppers;
}

/**
 * filter all players to only return defenders
 * @returns {Promise<*[]>} list with defenders
 */
async function filterDefenders() {
  await getAllPlayers();
  let defenders = [];
  players.forEach((player) => {
    if (player.role.toLowerCase() === "defender") {
      defenders.push(player);
    }
  });
  out(defenders);
  return defenders;
}

/**
 * filter all players to only return midfielders
 * @returns {Promise<*[]>} list with midfielders
 */
async function filterMidfielders() {
  await getAllPlayers();
  let midfielders = [];
  players.forEach((player) => {
    if (player.role.toLowerCase() === "midfielder") {
      midfielders.push(player);
    }
  });
  out(midfielders);
  return midfielders;
}

/**
 * filter all players to only return attackers
 * @returns {Promise<*[]>} list with attackers
 */
async function filterAttackers() {
  await getAllPlayers();
  let attackers = [];
  players.forEach((player) => {
    if (player.role.toLowerCase() === "attacker") {
      attackers.push(player);
    }
  });
  out(attackers);
  return attackers;
}
