class IdGenretator {
    constructor() {   

    }
    
    id() {
        return Date.now();
    }
    
};
//const id = new IdGenretator(); 

export default new IdGenretator();