'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function linePlay1(a: number, b: number, c: number, d: number) {
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
};

let a: number = 0;
let b: number = 0;
let c: number = canvas.width/2;
let d: number = 0;


for (let i = 1; i < canvas.width/24; i++) {
    a += canvas.width/24/2;
    d += canvas.width/35/2;
    linePlay1(a, b, c, d);
};

function linePlay2(e: number, f: number, g: number, h: number) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(e, f);
    ctx.lineTo(g, h);
    ctx.stroke();
};

let e: number = 0;
let f: number = 0;
let g: number = 0;
let h: number = canvas.height/2;

for (let i = 1; i < canvas.width/24; i++) {
    f += canvas.width/35/2;
    g += canvas.width/24/2;
    linePlay2(e, f, g, h);
}; 



