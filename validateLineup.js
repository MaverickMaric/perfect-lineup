function validateLineup(lineup) {
  let salaries = []
  let teams = []
  let games = []
  let positions = []

  for (let i = 0; i < lineup.length; i++) {
    salaries.push(lineup[i].salary)
    teams.push(lineup[i].teamId)
    games.push(lineup[i].gameId)
    positions.push(lineup[i].position)
  }
  const teamSalary = salaries.reduce(function (result, item) {
    return result + item
  }, 0)

  const teamSalaryCheck = teamSalary <= 45000 ? true : false

  const teamCounts = teams.reduce(function (obj, team) {
    if (!obj[team]) {
      obj[team] = 1
    } else {
      obj[team]++
    }

    return obj
  }, {})

  let teamCountCheck = true

  for (let team in teamCounts) {
    if (teamCounts[team] > 2) {
      teamCountCheck = false
    }
  }

  const gameCounts = games.reduce(function (obj, game) {
    if (!obj[game]) {
      obj[game] = 1
    } else {
      obj[game]++
    }

    return obj
  }, {})

  let gameCountCheck = true

  for (let game in gameCounts) {
    if (gameCounts[game] > 3) {
      gameCountCheck = false
    }
  }

  const positionCounts = positions.reduce(function (obj, pos) {
    if (!obj[pos]) {
      obj[pos] = 1
    } else {
      obj[pos]++
    }

    return obj
  }, {})

  let positionCountCheck = positionCounts['OF'] === 3 && Object.keys(positionCounts).length === 7

  for (let pos in positionCounts) {
    if (positionCounts[pos] !== 1 && pos !== 'OF') {
      positionCountCheck = false
    }
  }


  if (teamSalaryCheck && teamCountCheck && gameCountCheck && positionCountCheck) {
    return true
  }

  return false
}
module.exports = validateLineup
