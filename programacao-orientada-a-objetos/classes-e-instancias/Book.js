class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  publish() {
    this.published = true;
  }
}

//objetos diferentes da mesma classe
const daisyJones = new Book("Daisy Jones & The Six");
const evelynHugo = new Book("The Seven Husbands of Evelyn Hugo");

daisyJones.publish();

console.log(daisyJones);
console.log(evelynHugo);

console.log(daisyJones instanceof Book);
