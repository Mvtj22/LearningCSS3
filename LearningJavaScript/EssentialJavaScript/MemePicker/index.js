import { catsData } from "./data.js";

const emotionRadios = document.getElementById('emotion-radios');
const getImageBtn = document.getElementById('get-image-btn');
const gifCheckbox = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById('meme-modal-inner');
const memeModal = document.getElementById('meme-modal');
const closeBtn = document.getElementById('meme-modal-close-btn');

function highlightCheckOption(e) {
    const radios = document.getElementsByClassName('radio');

    for (let radio of radios) {
        radio.classList.remove('highlight');
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight');
}


function renderCat() {
    const catObj = getSingleCatObject();
    
    memeModalInner.innerHTML = `
    <img 
        class="cat-img" 
        src="./images/${catObj.image}"
        alt="${catObj.alt}"
    >`

    memeModal.style.display = "flex";

}


function getSingleCatObject() {
    const catsArray = getMatchingCatsArray();
    const randomNumber = Math.floor(Math.random() * catsArray.length);

    return catsArray[randomNumber];

}

function getMatchingCatsArray() {
    const selectedEmotion = document.querySelector('input[type=radio]:checked');
    const isGif = gifCheckbox.checked;

    if (selectedEmotion) {
       const matchingCatsArray = catsData.filter(function(cat) {
            if (isGif) {
                return ((cat.emotionTags.includes(selectedEmotion.value)) && (cat.isGif));
            } else {
                return cat.emotionTags.includes(selectedEmotion.value)
            }
        
       });

       return matchingCatsArray;
    }
}

function getEmotionsArray(cats){

    const emotionArray = [];

    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            if (!emotionArray.includes(emotion)){
                emotionArray.push(emotion);
            }
        }
    }
    return emotionArray;
}

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats);
    const emotionRadios = document.getElementById('emotion-radios');

    let htmlString = ``;

    for (let emotion of emotions) {
        htmlString += `
        <div class="radio">
            <label for="emotion">${emotion}</label>
            <input type="radio" id="${emotion}" value="${emotion}" name="emotions">
        </div>`;
    }

    emotionRadios.innerHTML = htmlString;
}

emotionRadios.addEventListener('change', highlightCheckOption);
closeBtn.addEventListener('click', function(){
    memeModal.style.display = "none";
});
getImageBtn.addEventListener('click',renderCat);

renderEmotionsRadios(catsData);