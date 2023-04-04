class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(200, 50000);

const someHouse = new House(100, 20000);

console.log(land);
console.log(someHouse);
console.log(someHouse.getPricePerSquareMeter);

class Apartment extends Property {
  constructor(number, area, price) {
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const apt = new Apartment("301", 100, 100000);
console.log(apt);
console.log(apt.getFloor());
