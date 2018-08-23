class Item {
    constructor(id, type, title, price) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.price = price;
    }
};


class ItemRepository {
    constructor() {
        this.Items = [
            {id: 1, type: 'chocolate', title: 'kinder', price: '1.2'},
            {id: 2, type: 'vegetables', title: 'tomato', price: '1.5'}
        ];
    }

    getById(id1) {
        const itemId = this.Items.find( (itemId) => {
            return itemId.id === parseInt(id1);
        });

        return (itemId);
    }

    getAll() {
        return (this.Items);
    }

    remove(reqId) {
        
        const item = Items.filter( (item) => {
            return item.id == reqId;
        });

        const index = Items.indexOf(item);

        Items.splice(index,1);
        return 'Item has been deleted';
    }

    save(item) {
        Items.push(item);
        return ('New item added');
    }
};


const itemRepository = new ItemRepository();

module.exports = itemRepository;
