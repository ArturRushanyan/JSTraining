
import idGen from '../helpers/idGenerator';

class ItemRepository {
    constructor() {
        this.Items = [
            {id: 1, type: 'chocolate', title: 'kinder', price: '1.2'},
            {id: 2, type: 'vegetables', title: 'tomato', price: '1.5'}
        ];
    }

    getAll() {
        return new Promise( (resolve, reject) => {
            if(this.Items) {
                resolve(this.Items);
            };
            reject();
        });
    }

    getById(req,res) {
        return new Promise ((resolve, reject) => {
            const id = req.params.id;
            const itemId = this.Items.find((item) => {
                return item.id === Number(id);
            });
            if(itemId) {
                resolve(itemId);
            }
            //reject('undefined id');
            reject();
        });
    }

    save(req,res) {
        return new Promise((resolve, reject) => {
            const {type,title,price} = req.body;
            if({type,title,price}) {
                const id = idGen.id();
                console.log('save id: ' + id);
                const newItem = {id,type,title,price};
                this.Items.push(newItem);
                resolve(newItem);
            }
            reject('error');
            
        });
    }

    update( req, res) {
        const id = parseInt(req.params.id); 
        return new Promise ((resolve, reject) => {
            if(id <= 0 || id > this.Items.length) {
                reject();
            }
            this.Items[id - 1].type = req.body.type;
            this.Items[id - 1].title = req.body.title;
            this.Items[id - 1].price = req.body.price;
            resolve();
        });
    }

    remove(req,res) {
        return new Promise((resolve, reject) => {
            const reqId = req.params.id;
            const item = this.Items.filter( (item) => {
                return item.id == reqId;
            });
            if(item) {
                const index = this.Items.indexOf(item);
                this.Items.splice(index - 1,1);
                resolve('Item has been deleted');        
            }        
            reject('fail');
        });
    }
};

const itemRepository = new ItemRepository();

export default itemRepository;