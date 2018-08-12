const genreName = Symbol(); 
artists = {
            Rock: [],
            Rap: [],
            HipHop: [],
            Jazz: []  
        };
history = {
            Rock: 'ROCK MUSIC, the main variety of popular music, originated around 1954; It is characterized by the use of electric musical instruments (for example, electric guitars) and emphasis on clearly expressed rhythm and loudness of sound.\n',
            Rap: 'Hip hop music, also called hip-hop or rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s.\n',
            Hip_hop: 'Hip hop music, also called hip-hop or rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s.\n',
            Jazz: "Jazz is a music genre that originated in the African-American communities of New Orleans, United States, in the late 19th and early 20th centuries, and developed from roots in blues and ragtime. Jazz is seen by many as " + "America's classical " + "music.\n"  
        };

class MusicGenre {
    
    constructor(name) {
        this[genreName] = name;
    }

    getGenreName() {
        return this[genreName];
    }

    addArtist(artistName) {
        if(artistName !== '' && artistName !== null && artistName !== undefined) {
            artists[this[genreName]].push(artistName);
        } else {
            console.log('Please input valid artist')
        }          
    }

    getArtistsList() {
        return artists[this[genreName]];
    }

    getHistory() {
        return history[this[genreName]];
    }

    toString() {
        console.log(this.getHistory()); 
        console.log('Popular artists: ' + this.getArtistsList());   
    }

    
};

class ValidInstruments {
    static IsValidInstrument(input) {
        let AllInstruments = ['guitar','piano'];
        for(let i = 0; i <= AllInstruments.length; i++) {
            if(input === AllInstruments[i] )
                return true;
        }
        return false;
    }
}; 

class Instrumental extends MusicGenre {

    constructor(input) {
        super(input);  
        this.Instrument = [];
    }

    addInstrument(input) {
        if(ValidInstruments.IsValidInstrument(input)) {
            this.Instrument.push(input);
        }
        else {
            console.log('Invalid instrument\n');
        }
    }

    toString() {
        console.log(this.Instrument);
    }
};

class FolkInstrumental extends Instrumental {
    constructor(input) {
        super(input)
        this.origin = 'A folk instrument is a musical instrument that developed among common people and usually does not have a known inventor.'
    }

    toString() {
        console.log(this.origin + '\n');
    }
};

let inputText = 'Rock';
/*let obj = new MusicGenre(inputText);
let obj1 = new MusicGenre(inputText);
let a = obj.getGenreName();
console.log('You chose the ' + a + ' genre\n');
obj.addArtist("Artist");
obj.toString();*/
let input1 = 'guitar';
/*let obj = new Instrumental(inputText);
obj.addInstrument(input1);
obj.toString();*/
let obj2 = new FolkInstrumental(inputText);
obj2.toString();









