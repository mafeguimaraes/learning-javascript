class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(porcentage) {
    return this.price * ((100 - porcentage) / 100);
  }
}

const books = new Product("Books", "Books of various genres", 50);

console.log(books);

books.addToStock(13);
console.log(books);

const priceWithDiscount = books.calculateDiscount(50);

console.log(priceWithDiscount);
