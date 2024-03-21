
let header = document.getElementById('header');
let hadithText = document.getElementById('hadith-text');
let book = document.getElementById('book');
let button = document.querySelector('button');

let Books = ['bukhari', 'muslim', 'abudawud', 'ibnmajah', 'tirmidhi' ]


getHadith()
// Request Hadith Data from API
async function getHadith() {
    try {
        let picRandomBook = Books[Math.floor(Math.random() * Books.length)]
        console.log(picRandomBook);
        const response = await fetch(`https://random-hadith-generator.vercel.app/${picRandomBook}`);
        const hadith = await response.json();
        // Load Hadith Data from response
        header.innerHTML = hadith.data.header == "null" ? 'Unkown' : hadith.data.header;
        hadithText.innerHTML = hadith.data.hadith_english;
        book.innerHTML = hadith.data.book;
    } catch (error) {
        console.error('Error fetching hadith data:', error);
    }
}

// Get a random hadith when button is clicked
function loadHadithOnButtonClick() {
    getHadith();
}

// Get a random hadith when spacebar is pressed
function loadHadithOnSpacebarPress(e) {
    if (e.keyCode === 32) {
        getHadith();
    }
}

button.addEventListener('click', loadHadithOnButtonClick);
window.addEventListener('keyup', loadHadithOnSpacebarPress);
