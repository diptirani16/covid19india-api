const current = require('../data/current.json')
const fullform = require('../data/fullform.json')

export default function handler(req, res) {
    let code = Object.keys(current);
    let name = Object.values(fullform);
    let codeValues = Object.values(current);
    let counts = codeValues.map(i => {
        return i.total;
    })
    let population = codeValues.map(i => {
        return i.meta.population;
    })
    let regional = code.map(function (value, index){
        return {"code": value, "name": name[index], "counts": counts[index], "population": population[index]}
     });
    res.status(200).json(regional)
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