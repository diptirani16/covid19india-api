const current = require('../data/current.json')

export default function handler(req, res) {
    res.status(200).json(current);
  }