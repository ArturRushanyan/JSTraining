
import idGen from '../helpers/idGenerator';

class ItemRepository {
    constructor() {
        this.Items = [
            {id: 1, type: 'chocolate', title: 'kinder', price: '1.2'},
            {id: 2, type: 'vegetables', title: 'tomato', price: '1.5'}
        ];
    }

    getAll() {
        return (this.Items);
    }

    getById(req,res) {
        const id1 = req.params.id;
        const itemId = this.Items.find((todo) => {
            return todo.id === Number(id1);
        });
        if(itemId) {
            return itemId;
        } else {
            return 'undefind id';
        }  
    }

    save(req,res) {
        const {type,title,price} = req.body;
        const id = idGen.id();
        console.log('save id: ' + id);
        const newItem = {id,type,title,price}; 
        this.Items.push(newItem);
        return ('New item added');
        res.sendStatus(200);
    }

    update( id1, req, res) {    //
        const id = parseInt(id1);
        const updateItme = req.body;
        if(this.Items[id] != null ) {
            this.Items[id] = updateItme;
        }  
        res.sendStatus(200); 
    }

    remove(req,res) {
        const reqId = req.params.id;
        const item = this.Items.filter( (item) => {
            return item.id == reqId;
        });

        const index = this.Items.indexOf(item);
        this.Items.splice(index,1);
        res.send('Item has been deleted');
    }
};

const itemRepository = new ItemRepository();

export default itemRepository;