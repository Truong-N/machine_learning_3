const f_X = (num) => {
  return canvas_width / 2 + num * canvas_scale_X * canvas_scale + shift_X;
};
const f_Y = (num) => {
  return (
    canvas_height -
    shift_Y -
    (canvas_height / 2 + num * canvas_scale_Y * canvas_scale)
  );
};
const canvas_width = 1200;
const canvas_height = 600;
const canvas_scale = 2;
const canvas_scale_X = 5;
const canvas_scale_Y = 2;
const shift_X = -100;
const shift_Y = -250;
x = [5, 7, 8, 7, 2, 17, 2, 9, 4, 11, 12, 9, 6];
y = [99, 86, 87, 88, 111, 86, 103, 87, 94, 78, 77, 85, 86];
const { a, b, r } = linear_regression(x, y);
console.log('r: ', r);
const maxX = Math.max(...x);
const minX = Math.min(...x);
const maxXIndex = x.findIndex((i) => i === maxX);
const minXIndex = x.findIndex((i) => i === minX);
console.log('minX: ', minX);
console.log('minXIndex: ', minXIndex);
console.log('y: ', y);
let mid_X = mean(x);
let mid_Y = mean(y);
console.log('mid_X: ', mid_X);
console.log('mid_Y: ', mid_Y);

const lineY1 = a + b * x[minXIndex];
const lineY2 = a + b * x[maxXIndex];
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.moveTo(f_X(x[minXIndex]), f_Y(lineY1));
ctx.lineTo(f_X(x[maxXIndex]), f_Y(lineY2));
ctx.stroke();
for (let i = 0; i < x.length; i++) {
  ctx.beginPath();
  ctx.arc(f_X(x[i]), f_Y(y[i]), 2, 0, 2 * Math.PI);
  ctx.stroke();
}
