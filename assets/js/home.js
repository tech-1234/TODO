console.log("working fine");

//Events are handled on toggle button in order to hide and show the input section

const toggleButton = document.querySelector('.toggleButton')
const plusIcon = document.querySelector('.fa-plus');
const inputSection = document.querySelector('#inputSection');
const inputSectionHeight = inputSection.getBoundingClientRect().height;

//When the toggle button is clicked, the following event is fired

toggleButton.addEventListener('click', () => {
    console.log('clicked');
    if (plusIcon.classList.contains('rotate-135deg')) {
        plusIcon.classList.remove('rotate-135deg');
    }
    else
        plusIcon.classList.add('rotate-135deg');

    // Animation classes are added and removed from the input section to hide and unhide it
    if (inputSection.classList.contains('animate-enter')) {
        inputSection.classList.remove('animate-enter');
        inputSection.classList.add('animate-exit');

    }
    else {
        inputSection.classList.remove('animate-exit');
        inputSection.classList.add('animate-enter');

    }

});

