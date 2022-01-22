const current = require('../data/current.json')

export default function handler(req, res) {
  current.AP

    res.status(200).json(current.AP.total);
  }