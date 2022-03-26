let target = document.querySelector('#dynamic');


function randomString() {
    let stringArr = ['Learn to HTML', 'Learn to CSS', 'Learn to JavaScript',
        'Learn to React'];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split('');
    
    return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
    target.textContent = '';
    dynamic(randomString())
}


//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent = target.textContent + randomArr.shift()
        setTimeout(function () {
            dynamic(randomArr)
        }, 80);
    } else {
        setTimeout(resetTyping, 1500);
    }
}
dynamic(randomString())

//커서 깜빡임 효과
function blick() {
    target.classList.toggle('active');
}
setInterval(blick, 500);





