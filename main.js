let target = document.querySelector('#dynamic');
let stringArr = ['Learn to HTML', 'Learn to CSS', 'Learn to JavaScript',
    'Learn to React'];
let stringSelect = stringArr[Math.floor(Math.random() * stringArr.length)]
let stringSelectArr = stringSelect.split('');



function resetTyping() {
    target.textContent = '';
    dynamic(stringSelectArr);
}


function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function () {
            dynamic(randomArr)
        }, 80);
    } else {
        setTimeout(resetTyping, 3000)
    }
}

dynamic(stringSelectArr);


function blick() {
    target.classList.toggle('active');
}
setInterval(blick, 500);