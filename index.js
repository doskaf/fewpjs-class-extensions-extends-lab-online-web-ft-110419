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
    
  }
}