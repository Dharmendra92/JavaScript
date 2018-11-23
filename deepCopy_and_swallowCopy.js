class Counter {
  constructor() {
    this.count = 5

    this.add = function() {
      this.count++
    }
  }

  copy() {
    const copy = new Counter()

    Object.keys(this).forEach(key => {
      const value = this[key]

      switch(typeof value) {
        case 'function':
          break
        case 'object':
          copy[key] = JSON.stringify(JSON.parse(value))
          break
        default:
          copy[key] = value
          break
      }
    })
    
    return copy
  }
}