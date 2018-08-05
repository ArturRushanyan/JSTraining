class musicGenres {
    constructor(inputText) {
        const genreName = inputText;   
        
    }   

    popularArtists(genre1) {
        switch(genre1) {
            case'Rock':
                return new Array('Imagine Dragons', ' Twenty one pilots',' Linkin Park', ' Metallica');
                break;
            case 'Rap':
            case 'Hip-hop':
                return new Array('Kanye West', ' Tupac Shakur', ' Jay-Z', ' The Notorious B.I.G', ' Nicki Minaj', ' Bebe Rexha', ' Lil Wayne');
                break;    
            case 'Jazz':
                return new Array('Charles Mingus', ' John Coltrane', ' Mary Lou Williams', ' Louis Armstrong', ' Ray Charles');
            }
    }
     
    addArtist(artistName) {
        if(artistName !== '' && artistName !== null && artistName !== undefined) {
            this.popularArtists.push(artistName);
        } else {
            console.log('Please input valid artist')
        }          
    }

    historyOfGenre(genreName) {
        switch(genreName) {
        case 'Rock':
            return 'ROCK MUSIC, the main variety of popular music, originated around 1954; It is characterized by the use of electric musical instruments (for example, electric guitars) and emphasis on clearly expressed rhythm and loudness of sound.\n';
            break;
        case 'Rap':
        case 'Hip-hop':
            return 'Hip hop music, also called hip-hop or rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s.\n';    
            break;    
        case 'Jazz':
            return "Jazz is a music genre that originated in the African-American communities of New Orleans, United States, in the late 19th and early 20th centuries, and developed from roots in blues and ragtime. Jazz is seen by many as " + "America's classical " + "music.\n";
            break;    
        }
    }

    toString(genrе2) {
        console.log('You chose the ' + genrе2 + ' genre\n');
        console.log(this.historyOfGenre(genrе2)); 
        console.log( 'Popular artists ' + genrе2 + ' genre: \n' + this.popularArtists(genrе2));
    }

    hasInfo(name) {
        
    }

};

class instrumentsOfGenre extends musicGenres {
    constructor(genre) {
        super(genre);
        var name = genre;   
        var h = new Array(this.instrumentsGenre(name));
        console.log('\nIn this genre the following instruments are used:\n');
        console.log(h);      
    }

    instrumentsGenre(genre3) {
       switch(genre3) {
        case 'Rock':
            return this.instruments = new Array('Bass guitar', ' Bass amplifier', ' Electric guitar', ' Heavy metal drumming', ' Drum kit\n'); 
            break;
        case 'Hip-hop':
        case 'Rap':
            return this.instruments = new Array('Sampler',' Music sequencer',' Drum machine',' Sound Synthesizers',' Drums',' Bass guitar\n');
            break;
        case 'Jazz':
            return this.instruments = new Array('Trumpet', ' Saxophone', ' Piano',' Trombone',' Clarinet',' Double bass',' Drums\n');
            break;
        }
    }       

    addInstruments(instrument) {
        
    }
          

};

    var inputText = 'Rap';
    var obj = new musicGenres(inputText);
    obj.toString(inputText);
    var obj1 = new instrumentsOfGenre(inputText);

/*process.stdin.on('data', function(inputData) {
    var inputText = String(inputData).trim();
    console.log('\n')
    var inputText = 'Rap';
    var obj = new musicGenres(inputText);
    obj.toString(inputText);
    var obj1 = new instrumentsOfGenre(inputText); 

});*/