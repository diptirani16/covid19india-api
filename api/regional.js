const current = require('../data/current.json')

export default function handler(req, res) {
    let regional = [];
    for(let state in current) {
        regional = [...regional, `${state}: ${current[state].total}`]
        console.log(regional);
    }
    res.status(200).json({      
        regional: regional
    });
  }

  /**
   * 
   * [{
   *    name: 'Maharashtra',
   *    code: 'MH',
   *    counts: {
   *        confirmed: 123,
   *        recovered: 64,
   *        ...
   *    }
   * }]
   * 
   */

  /**
   * 
   * {
   *    'MH': 'Maharashtra',
   *    'JH': 'jharkhand',
   *    ...
   * }
   * 
   */