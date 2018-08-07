class MusicGenres {
    constructor() {
        this.genreName;   
        this.artists = {Rock: ['Imagine Dragons', ' Twenty one pilots',' Linkin Park', ' Metallica'],
                       Rap: ['Kanye West', ' Tupac Shakur', ' Jay-Z', ' The Notorious B.I.G', ' Nicki Minaj', ' Bebe Rexha', ' Lil Wayne'],
                       Hip_hop: ['Kanye West', ' Tupac Shakur', ' Jay-Z', ' The Notorious B.I.G', ' Nicki Minaj', ' Bebe Rexha', ' Lil Wayne'],
                       Jazz: ['Charles Mingus', ' John Coltrane', ' Mary Lou Williams', ' Louis Armstrong', ' Ray Charles']  
                      };    
    }   

    getGenre(name) {
        return this.genreName = name;
    }

    addArtist(artistName) {
        if(artistName !== '' && artistName !== null && artistName !== undefined) {
            this.popularArtists.push(artistName);
        } else {
            console.log('Please input valid artist')
        }          
    }

    historyOfGenre(genreName) {
        let history = {Rock: 'ROCK MUSIC, the main variety of popular music, originated around 1954; It is characterized by the use of electric musical instruments (for example, electric guitars) and emphasis on clearly expressed rhythm and loudness of sound.\n',
                       Rap: 'Hip hop music, also called hip-hop or rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s.\n',
                       Hip_hop: 'Hip hop music, also called hip-hop or rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s.\n',
                       Jazz: "Jazz is a music genre that originated in the African-American communities of New Orleans, United States, in the late 19th and early 20th centuries, and developed from roots in blues and ragtime. Jazz is seen by many as " + "America's classical " + "music.\n"              
            }
        return history[genreName];
    }

    toString(genre2) {
        console.log('You chose the ' + genre2 + ' genre\n');
        console.log(this.historyOfGenre(genre2)); 
        console.log( 'Popular artists ' + genre2 + ' genre:\n' + this.artists[genre2]);
    }

    /*hasInfo(someString) {
        if (someString === this.genreName || string=== this._artists || someString in this.historyOfGenre(someString)) {
            return true 
        }
        return false
    }
    */
    

};

class InstrumentsOfGenre extends MusicGenres {
    constructor(input) {
        super(input);
        //let instruments = new Array(this.instrument(input));
        //console.log(instruments);
        
    }


    instrument(userInput) {
        var instrument = {  Rap: ['Sampler', 'Music sequencer', 'Drum machine', 'Sound Synthesizers', 'Drums', 'Bass guitar'],
                            Hip_hop: ['Sampler', 'Music sequencer', 'Drum machine', 'Sound Synthesizers', 'Drums', 'Bass guitar'],
                            Rock: ['Bass guitar', 'Bass amplifier', 'Electric guitar', 'Heavy metal drumming', 'Drum kit'],
                            Jazz: ['Trumpet', 'Saxophone', 'Piano', 'Trombone', 'Clarinet', 'Double bass', 'Drums']
        };
        return instrument[userInput];
    }

    addInstruments(input) {
        if(input !== '' && input !== null && input !== undefined) {
            this.instruments.push(input);
        } else {
            console.log('Invalid input for instruments');
        } 
    }
};

class FolkInstrumental extends InstrumentsOfGenre {
    constructor(inputGenre) {
        super(inputGenre);
        console.log('\nInstruments of this genre:\n');
        let instruments = new Array(this.instrument(inputGenre));
        console.log(instruments);
    }

    genreCountry(genre) {
        var country = { Rap: 'United States',
                    Hip_hop: 'United States',
                    Jazz: 'New Orleans, United States',
                    Rock: 'United States'
        }; 
        return country[genre];
    }
};


let inputText = 'Jazz';
let obj = new MusicGenres(inputText);
obj.toString(inputText);
let obj1 = new InstrumentsOfGenre(inputText);
let obj2 = new FolkInstrumental(inputText);
console.log('\nThis genre come from ' + obj2.genreCountry(inputText) + '\n');
/*if(obj.hasInfo('Hip_hop')) {
    console.log('true');
} else {
    console.log('false');
}*/

