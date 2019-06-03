export default class Product {

  constructor({id, title, description, amount, price} = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.amount = amount;
    this.price = price;
  }
}