class Item {
    constructor(name, category, quantity, price) {
        this.name = name;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
    }

    getDetails() {
        return `${this.name} (${this.category}) - Quantity: ${this.quantity}, Price: $${this.price.toFixed(2)}`;
    }
}

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    updateItem(name, newQuantity = null, newPrice = null) {
        let item = this.items.find(item => item.name === name);
        if (item) {
            if (newQuantity !== null) item.quantity = newQuantity;
            if (newPrice !== null) item.price = newPrice;
            return true;
        }
        return false;
    }

    deleteItem(name) {
        let index = this.items.findIndex(item => item.name === name);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    getInventory() {
        return this.items;
    }
}

module.exports = { Item, Inventory };
