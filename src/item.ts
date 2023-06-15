class Item {
    private name: string;
    private price: number;
    private quantity: number;
  
    constructor(name: string, price: number, quantity: number) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getPrice(): number {
      return this.price;
    }
  
    public getQuantity(): number {
      return this.quantity;
    }
  
    public setQuantity(quantity: number): void {
      this.quantity = quantity;
    }
  }
  
  export default Item;
  