
class UserRepository {
    constructor() {
        this.Users = [
            {id: 1, type: 'User', name: 'Jon',},
            {id: 2, type: 'Admin', name: 'Stiven',}
        ];
    }

    getAll() {
        return new Promise( (resolve, reject) => {
            if(!this.Users) {
                reject();    
            }
            resolve(this.Users);
        });
    }

    getById(req,res) {
        return new Promise ((resolve, reject) => {
            const id = req.params.id;
            const userId = this.Users.find((user) => {
                return user.id === Number(id);
            });
            if(!userId) {
                reject();
            }
            resolve(userId);
            
        });
    }

    
    update( req, res) {
        return new Promise ((resolve, reject) => {
            const id = parseInt(req.params.id);
            let bool = false;
            let i = 0;
            for(i; i < this.Users.length; i++) {
                if(this.Users[i].id === id) {
                    bool = true;
                    break; 
                }
            }
            if(!bool) {
                reject();
            }
            this.Users[i] = {
                id: id, 
                type: req.body.type, 
                name: req.body.name, 
            };
            resolve();
        });   
    }

};

const userRepository = new UserRepository();

export default userRepository;