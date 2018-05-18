const data = new Map()

module.exports = {
  get (id) {
    return data.get(id)
  },
  keys () {
    return Array.from(data.keys())
  },
  save (id, value) {
    data.set(id, value)
    return value
  }
}
