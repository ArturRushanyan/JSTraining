const Item = require('../app');

class ItemRepository {
    constructor() {
        this.Items = new Map([
            [1, new Item(1, 'chocolate', 'kinder', '1.2')],
            [2, new Item(2, 'vegetables', 'tomato', '1.5')],
            [3, new Item(3, 'fruits', 'apple', '0.8')]
        ]);
    }

    getById(id) {
        return this.items.get(id);
    }

    getAll() {
        return Array.from(this.items.values());
    }

    remove() {
        const keys = Array.from(this.items.keys());
        this.items.delete(keys[keys.length - 1]);
    }

    save(item) {
        if (this.getById(Item.id) !== undefined) {
            this.Items[Item.id] = item;
            return "Updated Item with id=" + Item.id;
        }
        else {
            this.items.set(Item.id, item);
            return "Added Item with id=" + Item.id;
        }
    }
}

const itemRepository = new ItemRepository();

module.exports = itemRepository;
