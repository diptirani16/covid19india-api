const current = require('../data/current.json')
const fullform = require('../data/fullform.json');

export default function handler(req, res) {
    res.status(200).json(fullform);
  }