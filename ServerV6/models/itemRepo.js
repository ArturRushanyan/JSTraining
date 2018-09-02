
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
            if(!this.Items) {
                reject();    
            }
            resolve(this.Items);
        });
    }

    getById(req,res) {
        return new Promise ((resolve, reject) => {
            const id = req.params.id;
            const itemId = this.Items.find((item) => {
                return item.id === Number(id);
            });
            if(!itemId) {
                reject();
            }
            resolve(itemId);
            
        });
    }

    save(req,res) {
        return new Promise((resolve, reject) => {         
            const type = req.body.type;
            const title = req.body.title;
            const price = req.body.price;
            if(!type || !title || !price) {
                reject();    
            } 
            const id = idGen.id();
            console.log('save id: ' + id);
            const newItem = {
                            id: id, 
                            type: req.body.type,
                            title: req.body.title,  
                            price: req.body.price 
                        };
            this.Items.push(newItem);
            console.log('newITem: ' + newItem);
            resolve(newItem);        
            
        });
    }

    update( req, res) {
        return new Promise ((resolve, reject) => {
            const id = parseInt(req.params.id);
            let bool = false;
            let i = 0;
            for(i; i < this.Items.length; i++) {
                if(this.Items[i].id === id) {
                    bool = true;
                    break; 
                }
            }
            if(!bool) {
                reject();
            }
            this.Items[i] = {
                id: id, 
                type: req.body.type, 
                title: req.body.title, 
                price: req.body.price
            };
            resolve();
        });   
    }

    remove(req,res) {
        return new Promise((resolve, reject) => {
            const id = parseInt(req.params.id);
            var t = false;
            let i;
            for(i = 0; i < this.Items.length; i++) {
                if(this.Items[i].id === id) {
                    t = true;
                    break;
                }
            }

            if(!t) {
                reject();
            } 
            this.Items.splice(i, 1);
            resolve();
                       
        });
    }
};

const itemRepository = new ItemRepository();

export default itemRepository;