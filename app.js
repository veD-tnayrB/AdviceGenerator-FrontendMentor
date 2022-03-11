const adviceID = document.querySelector('.id');
const adviceMessage = document.querySelector('.message');
const getAdviceButton = document.querySelector('.advice-generator-button');

getAdviceButton.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            const {id, advice} = data.slip;
            
            adviceMessage.textContent = advice;
            adviceID.textContent = id;
        })


    getAdviceButton.disabled = true;
    getAdviceButton.style.cursor = 'not-allowed';

    setTimeout(() => {
        getAdviceButton.disabled = false;
        getAdviceButton.style.cursor = 'pointer';
    }, 2000);

})