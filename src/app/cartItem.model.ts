export class CartItem {
  constructor(
    private id: Date,
    private name: string,
    private price: number,
    private amount
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}
