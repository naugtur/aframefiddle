const data = new Map()

module.exports = {
  get (id) {
    return data[id]
  },
  save (id, value) {
    data[id] = value
  }
}
