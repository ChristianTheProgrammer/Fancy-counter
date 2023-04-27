const counterEl = document.querySelector('.counter')
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value'); 
const counterTitleEl = document.querySelector('.counter__title');

resetButtonEl.addEventListener('click', () =>{
    //set counter to 0
    counterValueEl.textContent = 0;
    // reset backgorund color
    counterEl.classList.remove('counter--limit');

    //reset counter title
    counterTitleEl.textContent = 'Fancy Counter';

    increaseButtonEl.disabled = false
    decreaseButtonEl.disabled = false

    //unfocus (blur) reset button
    resetButtonEl.blur()
});

decreaseButtonEl.addEventListener('click', () =>{ 
    //get current value of the coutner
    const currentValue = counterValueEl.textContent;
    // convert value to number type 
    const currentValueAsNumber = +currentValue;
    //decrement by 1
    let newValue = currentValueAsNumber - 1;

    //check if new value is less than 0
    if (newValue < 0){
        // if it is 0 set it to 0
        newValue = 0;
    }

    //update counter value with new value
    counterValueEl.textContent = newValue;
    
    //unfocus (blur) reset button
    decreaseButtonEl.blur();
});

function increamentCounter(){ 
        // get current vaulue of couinter
        const currentValue = counterValueEl.textContent;
    
        //convert value to number type
        const currentValueAsNumber = +currentValue
        // increament by 1
        let newValue = currentValueAsNumber + 1;
        //set counter element with new value

        //Check if new value is greater than 5
        if (newValue > 5) {
        //if it is, force it to be 5 instead
            newValue = 5;
           //give visuall indicator that kunut gas been reached
           counterEl.classList.add('counter--limit');
           //update counter title
           counterTitleEl.style.width = "416px"
           counterTitleEl.innerHTML = 'You have reached the limit! <b> Buy Pro now!</b>';
           
           //disable increase and decrease buttons
           increaseButtonEl.disabled = true
           decreaseButtonEl.disabled = true
        }
        counterValueEl.textContent = newValue; 
          //unfocus (blur) reset button
        increaseButtonEl.blur();

};

increaseButtonEl.addEventListener('click', increamentCounter);
document.addEventListener('keydown', increamentCounter);