function validateLineup(lineup) {
  let salaries = []

  for (let i = 0; i < lineup.length; i++) {
    salaries.push(lineup[i].salary)
  }
  const teamSalary = salaries.reduce(function (result, item) {
    return result + item
  }, 0)

  if (teamSalary <= 45000) {
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