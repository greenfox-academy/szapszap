'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function steps(x: number, y: number) {
    ctx.fillRect(x - 2.5, y - 2.5, 25, 25);
    ctx.fillStyle = '#c653c6';
    ctx.fillRect(x, y, 20, 20);
    ctx.fillStyle = '#202060';
};

let a: number = 0;
let b: number = 0;

for (let i = 2; i < 19; i++) {
    a += 22;
    b += 22;
    steps(a, b);
};

