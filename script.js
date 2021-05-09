let musicObj = new Audio();

const music =[
    {
        // musicObj:new Audio(),
        musicSrc: musicObj.src="music/Cristina Perri - A Thousand Years",
        musicTitle:'A Thousand Years',
        musicArtist:'Cristina Perri',
        musicImg:'./CristinaPerriAThousandYears/Cristina Perri - A Thousand Years_spectrogram.png'
    },
    {
        // musicObj:new Audio(),
        musicSrc: musicObj.src="music/Becca-Driving-License-ft-Shatta-Wale Instrumental"
    },
    {
        // musicObj:new Audio(),
        musicSrc: musicObj.src="music/02BlankSpace_201506_vbr"
    },
];

let musicIndex = 0;

const title = document.getElementById('title');
const artist = document.getElementById('artist');
const picture = document.getElementById('picture');
function renderDetails(){
    title.innerText = music[musicIndex].musicTitle;
    artist.innerText = music[musicIndex].musicArtist;
    const img = music[musicIndex].musicImg;
    console.log(img);
    console.log(URL('img'));

    // picture.style.background= "url('img')";

}
renderDetails();