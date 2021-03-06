let players = [];

/**
 * get all players from DB and set players in  list
 * @returns {Promise<void>} list with players
 *  @author Jens & Jackie
 */
async function getAllPlayers() {
  players = await fetch(baseUrl + showUrl + "players").then((response) =>
    response.json()
  );
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
  return goalKeepers;
}

/**
 * filter all players to only return sweepers
 * @returns {Promise<*[]>} list with sweepers
 * @author Jackie
 */
async function filterSweepers() {
  await getAllPlayers();
  let sweppers = [];
  players.forEach((player) => {
    if (player.role.toLowerCase() === "sweeper") {
      sweppers.push(player);
    }
  });
  return sweppers;
}

/**
 * filter all players to only return defenders
 * @returns {Promise<*[]>} list with defenders
 * @author Jackie
 */
async function filterDefenders() {
  await getAllPlayers();
  let defenders = [];
  players.forEach((player) => {
    if (player.role.toLowerCase() === "defender") {
      defenders.push(player);
    }
  });
  return defenders;
}

/**
 * filter all players to only return midfielders
 * @returns {Promise<*[]>} list with midfielders
 * @author Jackie
 */
async function filterMidfielders() {
  await getAllPlayers();
  let midfielders = [];
  players.forEach((player) => {
    if (player.role.toLowerCase() === "midfielder") {
      midfielders.push(player);
    }
  });
  return midfielders;
}

/**
 * filter all players to only return attackers
 * @returns {Promise<*[]>} list with attackers
 * @author Jackie
 */
async function filterAttackers() {
  await getAllPlayers();
  let attackers = [];
  players.forEach((player) => {
    if (player.role.toLowerCase() === "attacker") {
      attackers.push(player);
    }
  });
  return attackers;
}

/**
 * Get player by id
 * @param {int} id
 * @returns {Promise<*>}
 * @author Jens & Jackie
 */
async function getPlayerById(id) {
  await getAllPlayers();
  let playerResult;
  players.forEach((player) => {
    if (player.playerId === id) {
      playerResult = player;
    }
  });
  return playerResult;
}
