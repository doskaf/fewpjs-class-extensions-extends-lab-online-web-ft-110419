class Polygon {
  constructor(array) {
    this.sides = array;
  }
  
  get countSides() {
    return this.sides.length
  }
  
  get perimeter() {
    return this.sides.reduce(function(p, e) {return p + e})
  }
}

class Triangle extends Polygon {
  get isValid() {
    if ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[0] + this.sides[2] > this.sides[1])) {
      return true
    } else {
      return false
    }
  }
}