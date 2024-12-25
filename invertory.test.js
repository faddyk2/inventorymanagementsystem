const { Item, Inventory } = require('./Inventory');

describe('Inventory Management', () => {
    let inventory;

    beforeEach(() => {
        inventory = new Inventory();
    });

    test('should add an item to the inventory', () => {
        const item = new Item('Laptop', 'Electronics', 10, 999.99);
        inventory.addItem(item);
        expect(inventory.getInventory()).toHaveLength(1);
        expect(inventory.getInventory()[0].getDetails()).toBe('Laptop (Electronics) - Quantity: 10, Price: $999.99');
    });

    test('should update an item quantity', () => {
        const item = new Item('Laptop', 'Electronics', 10, 999.99);
        inventory.addItem(item);
        inventory.updateItem('Laptop', 12);
        expect(inventory.getInventory()[0].quantity).toBe(12);
    });

    test('should update an item price', () => {
        const item = new Item('Laptop', 'Electronics', 10, 999.99);
        inventory.addItem(item);
        inventory.updateItem('Laptop', null, 899.99);
        expect(inventory.getInventory()[0].price).toBe(899.99);
    });

    test('should not update a non-existent item', () => {
        const item = new Item('Laptop', 'Electronics', 10, 999.99);
        inventory.addItem(item);
        const result = inventory.updateItem('Tablet', 5, 299.99);
        expect(result).toBe(false);
    });

    test('should delete an item from the inventory', () => {
        const item = new Item('Laptop', 'Electronics', 10, 999.99);
        inventory.addItem(item);
        inventory.deleteItem('Laptop');
        expect(inventory.getInventory()).toHaveLength(0);
    });

    test('should not delete a non-existent item', () => {
        const item = new Item('Laptop', 'Electronics', 10, 999.99);
        inventory.addItem(item);
        const result = inventory.deleteItem('Tablet');
        expect(result).toBe(false);
    });
});
