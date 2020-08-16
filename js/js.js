let $welcomWrap = document.querySelector('.welcom-wrap');
let $startWrap = document.querySelector('.start-wrap');
let $endWrap = document.querySelector('.end-wrap');
let $startButton = document.querySelector('.start-button');
let $grassItem = document.querySelectorAll('.grass-item')
let $restart = document.querySelector('.restart');

let $gamerName = document.querySelector('#name');
let $getTime = document.querySelector('.set-time');
let $startGamerName = document.querySelector('#gamer-name');
let $gameTime = document.querySelector('#game-time')
let $result = document.querySelector('.result')

$startButton.addEventListener('click', startGame);
$restart.addEventListener('click', function(){
    $welcomWrap.classList.remove('hide');
    $endWrap.classList.add('hide');
})


function startGame(){

    if (!$gamerName.value.trim()) return $gamerName.value = '';

    $welcomWrap.classList.add('hide');
    $startWrap.classList.remove('hide');
    $startGamerName.textContent = $gamerName.value;
    $gameTime.textContent = $getTime.value;

    createDracon();
    let interval = setInterval(function(){
        let time = parseFloat($gameTime.textContent)
        if(time <= 0 ){
            clearInterval(interval);
        }else{
            $gameTime.textContent = (time - 0.1).toFixed(1);
        }
        
    }, 200);
    
};

function createDracon(){
    
    let dracon = document.createElement('div');
    let draconCount = 0;
    let count = 0;
    dracon.style.backgroundImage = 'url(images/Dracon-icon.png)';
    dracon.style.height = dracon.style.width = '60px';
    dracon.style.position = 'absolute';
    dracon.style.top = '-15px';
    dracon.style.left = '20px';
    dracon.style.cursor = 'pointer';
    dracon.style.zIndex = '100';
    dracon.addEventListener('click', function(){
        draconCount++;
        $grassItem[count].innerHTML = '';
    })

    let interval = setInterval(function(){
        let time = randomCount(0, 5);
        let secund = parseFloat($gameTime.textContent);
 
        if(secund <= 0){
            clearInterval(interval);
            console.log('finished ', secund);
            console.log('Finished result count  ' + draconCount);
            $startWrap.classList.add('hide');
            $endWrap.classList.remove('hide');
            $result.textContent = draconCount;
            $grassItem[count].innerHTML = '';
        } else{
            
            if(time != count){
                $grassItem[time].insertAdjacentElement('afterbegin', dracon);
            } else {
                return
            }
        };
        count = time;
    }, 800) 
};

function randomCount(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};