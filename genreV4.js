class MusicGenre {
    constructor(name) {
        this.artists = [];
        this.history = {
            Rock: 'ROCK MUSIC, the main variety of popular music, originated around 1954; It is characterized by the use of electric musical instruments (for example, electric guitars) and emphasis on clearly expressed rhythm and loudness of sound.\n',
            Rap: 'Hip hop music, also called hip-hop or rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s.\n',
            Hip_hop: 'Hip hop music, also called hip-hop or rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s.\n',
            Jazz: "Jazz is a music genre that originated in the African-American communities of New Orleans, United States, in the late 19th and early 20th centuries, and developed from roots in blues and ragtime. Jazz is seen by many as " + "America's classical " + "music.\n",
            Instrumental: 'instrumental history\n',
            Folk: 'folk history\n'
        };

        Object.defineProperty(this, 'genreName', {
            value: name,
            writable: false
        });
    }

    getGenreName() {
        return this.genreName;
    }

    addArtist(artistName) {
        if(artistName !== '' && artistName !== null && artistName !== undefined) {
            this.artists.push(artistName);
        } else {
            console.log('Please input valid artist')
        }          
    }

    getArtistsList() {
        return this.artists;
    }

    getHistory() {
        return this.history[this.genreName];
    }

    toString() {
        console.log('Popular artists: ' + this.getArtistsList() + '\n');
        return this.getHistory();    
    }
};

class ValidInstruments {
    static IsValidInstrument(input) {
        const AllInstruments = ['guitar','piano'];
        for(let i = 0; i <= AllInstruments.length; i++) {
            if(input === AllInstruments[i] )
                return true;
        }
        return false;
    }
}; 

class Instrumental extends MusicGenre {

    constructor(input) {
        super(input || 'Instrumental');
        this.Instruments = []; // Instruments
    }

    addInstrument(input) {
        if(ValidInstruments.IsValidInstrument(input)) {
            this.Instruments.push(input);
        }
        else {
            console.log('Invalid instrument\n');
        }
    }

    addArtist(artist) {
         //super.artists = artist;
         super.addArtist(artist);
    }

    
    toString() {
        console.log(super.toString());
        return this.Instruments;  // just return this.Instrument and log it outside of class
    }
};

class FolkInstrumental extends Instrumental {
    constructor() {
        super('Folk');
        this.origin = 'A folk instrument is a musical instrument that developed among common people and usually does not have a known inventor.'
    }

    toString() {
        console.log(this.origin + '\n');
        return super.toString();
    }
};


let inputText = 'Rock';
let obj = new MusicGenre(inputText);
let a = obj.getGenreName();
console.log('You chose the ' + a + ' genre\n');
obj.addArtist('Linkin park');
console.log(obj.toString());

/////////////////////////////////////////////

let inputText2 = 'Instrumental';
let Instrument = 'guitar';
let obj1 = new Instrumental(inputText2);
obj1.addArtist('Yiruma');
obj1.addInstrument(Instrument);
console.log('\nadded instrument: ' + obj1.toString() + '\n');

//////////////////////////////////////////////

let inputText3 = 'Jason Shaw';
let obj2 = new FolkInstrumental();
obj2.addArtist(inputText3);
console.log(obj2.toString());







