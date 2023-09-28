import { catsData } from "./data.js";

const emotionRadios = document.getElementById('emotion-radios')

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

function highlightCheckOption(e) {
    const radios = document.getElementsByClassName('radio');

    for (let radio of radios) {
        radio.classList.remove('highlight');
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

emotionRadios.addEventListener('change', highlightCheckOption);

renderEmotionsRadios(catsData);