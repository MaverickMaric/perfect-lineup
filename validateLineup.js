function validateLineup(lineup) {
  let salaries = []
  let teams = []
  let position = []

  for (let i = 0; i < lineup.length; i++) {
    salaries.push(lineup[i].salary)
    teams.push(lineup[i].teamId)
    position.push(lineup[i].position)
  }
  const teamSalary = salaries.reduce(function (result, item) {
    return result + item
  }, 0)

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

  const positionCounts = position.reduce(function (obj, pos) {
    if (!obj[pos]) {
      obj[pos] = 1
    } else {
      obj[pos]++
    }

    return obj
  }, {})


  console.log(teamCounts)
  console.log(positionCounts)
  console.log(teamCountCheck)

  if (teamSalary <= 45000 && teamCountCheck) {
    return true
  }

  return false
}

// map reduce filter
// reduce for test 1 add player salaries and then reduce to 45k req
// 2. map or filter?
// 3. forEach (similar to map? map: array > array of same size; fE: )
// 4.
module.exports = validateLineup