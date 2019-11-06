// simbols storage

let symbolsRus = [
    'ё', '<sup>!</sup>1', '<sup>@</sup>2', '<sup>№</sup>3','<sup>;</sup>4', '<sup>%</sup>5',
    '<sup>:</sup>6', '<sup>?</sup>7', '<sup>*</sup>8', '<sup>(</sup>9','<sup>)</sup>0', '<sup>_</sup>-',
    '<sup>+</sup>=', 'Backspace', 'Tab', '<sup>q</sup>й','<sup>w</sup>ц', '<sup>e</sup>у', '<sup>r</sup>к',
    '<sup>t</sup>е', '<sup>y</sup>н','<sup>u</sup>г', '<sup>i</sup>ш', '<sup>o</sup>щ', '<sup>p</sup>з',
    '<sup>{</sup>х', '<sup>}</sup>ъ','<sup>/</sup>\\', 'del', 'Caps Lock', '<sup>a</sup>ф', '<sup>s</sup>ы',
    '<sup>d</sup>в', '<sup>f</sup>а','<sup>g</sup>п', '<sup>h</sup>р', '<sup>j</sup>о', '<sup>k</sup>л',
    '<sup>d</sup>д', 'ж','э', 'Enter', 'Shift', '<sup>z</sup>я','<sup>x</sup>ч','<sup>c</sup>с',
    '<sup>d</sup>м', '<sup>z</sup>и','<sup>x</sup>т','<sup>c</sup>ь', 'б', 'ю', '<sup,c</sup>.',
    'Shift', 'Ctrl', 'Win','Alt','', 'Alt', 'Ctrl',
];

let symbolsEng = [
    '<sup>~</sup>`', '<sup>!</sup>1', '<sup>"@"</sup>2', '<sup>#</sup>3','<sup>$</sup>4', '<sup>%</sup>5',
    '<sup>^</sup>6', '<sup>&</sup>7', '<sup>*</sup>8', '<sup>(</sup>9','<sup>)</sup>0', '<sup>_</sup>-',
    '<sup>+</sup>=', 'Backspace', 'Tab', '<sup>q</sup>q','<sup>w</sup>w', '<sup>e</sup>e', '<sup>r</sup>r',
    '<sup>t</sup>t', '<sup>y</sup>y','<sup>u</sup>u', '<sup>i</sup>i', '<sup>o</sup>o', '<sup>p</sup>p',
    '<sup>{</sup>[', '<sup>}</sup>]','<sup>|</sup>\\', 'del', 'Caps Lock', '<sup>a</sup>a', '<sup>s</sup>s',
    '<sup>d</sup>d', '<sup>f</sup>f','<sup>g</sup>g', '<sup>h</sup>h', '<sup>j</sup>j', '<sup>k</sup>k',
    '<sup>d</sup>l', '<sup>:</sup>;','<sup>"</sup>\'', 'Enter', 'Shift', '<sup>z</sup>z','<sup>x</sup>x',
    '<sup>c</sup>с', '<sup>d</sup>м', '<sup>z</sup>и','<sup>x</sup>т','<sup>c</sup>ь', 'б', 'ю', 
    '<sup,c</sup>.', 'Shift', 'Ctrl', 'Win','Alt','', 'Alt', 'Ctrl',
];

// create page

function createButtons(start, finish, rowNumber, layout) {
    for (let i = start; i < finish; i++) {
        let button = document.createElement('div');
        button.className = 'button';
        rowNumber.append(button);
        button.innerHTML = layout[i];
    }
}

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

let title = document.createElement('h1');
title.className = 'title';
title.innerHTML = 'My first simple<br>virtual keyboard';
wrapper.append(title);

let screen = document.createElement('input');
screen.className = 'view-screen';
wrapper.append(screen);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard);

for (let i = 0; i < 6; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    keyboard.append(row);
}

const row1 = document.querySelector('.keyboard div:nth-child(1)');
const row2 = document.querySelector('.keyboard div:nth-child(2)');
const row3 = document.querySelector('.keyboard div:nth-child(3)');
const row4 = document.querySelector('.keyboard div:nth-child(4)');
const row5 = document.querySelector('.keyboard div:nth-child(5)');


createButtons(0, 14, row1, symbolsEng);
createButtons(14, 29, row2, symbolsEng);
createButtons(29, 42, row3, symbolsEng);
createButtons(42, 54, row4, symbolsEng);
createButtons(54, 60, row5, symbolsEng);


row1.querySelector('div:last-child').className = 'button controls-button';
row2.querySelector('div:first-child').className = 'button controls-button';
row2.querySelector('div:last-child').className = 'button controls-button';
row3.querySelector('div:first-child').className = 'button controls-button';
row3.querySelector('div:last-child').className = 'button controls-button';
row4.querySelector('div:first-child').className = 'button controls-button shift';
row4.querySelector('div:last-child').className = 'button controls-button shift';
row5.querySelectorAll('div').forEach(element => {element.className = 'button controls-button';});
row5.querySelector('div:nth-child(4)').className = 'button controls-button space';

document.addEventListener('keydown', event => {
    screen.append(`${event.key}`);
    console.log(event.key);
})