const modal = document.getElementById("modal");
const closeButton = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalBtn = document.getElementById("modal-btn");
const modalInner = document.getElementById("modal-inner");
const decline = document.getElementById("decline");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(()=>{
    console.log("Model Opened!");
    modal.style.display = 'inline';
},1500)

closeButton.addEventListener('click',()=>{
    modal.style.display = 'none';
});

consentForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = new FormData(consentForm);
    let name = formData.get('name');

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`

    setTimeout(()=>{
        document.getElementById("uploadText").innerText = "Making the sale...";
    },1500);

    setTimeout(()=> {
        modalInner.innerHTML = `
            <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>
        ` 

        closeButton.disabled = false;
    },3000);
});

decline.addEventListener('mouseover', ()=> {
    modalChoiceBtns.classList.toggle('reverse');
});