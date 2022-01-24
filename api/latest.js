const current = require('../data/current.json')

export default function handler(req, res) {
    let totalConfirmed = 0, totalRecovered = 0, totalDeceased = 0, totalActive = 0;
    // let lastUpdated = "";
    for(let state in current) {
        totalConfirmed = totalConfirmed + current[state].total.confirmed
        totalRecovered = totalRecovered + current[state].total.recovered
        totalDeceased = totalDeceased + current[state].total.deceased
        totalActive = totalConfirmed - totalRecovered - totalDeceased
        // lastUpdated = current[state].meta.last_updated
    }
    res.status(200).json({
      totalConfirmed: totalConfirmed,
      totalRecovered: totalRecovered,
      totalDeceased: totalDeceased,
      totalActive: totalActive,
      // lastUpdated: lastUpdated,
    });
  }