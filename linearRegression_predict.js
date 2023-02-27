const linear_regression_predict = (X_train, y_train, X_test, y_test) => {
  console.log('linear_regression_predict: ===================================');
  // console.log('X_train:');
  // console.log(X_train);
  // console.log('y_train:');
  // console.log(y_train);
  console.log('X_test:');
  console.log(X_test);
  console.log('y_test:');
  console.log(y_test);
  const f_X = (num) => {
    return num * xScale * canvas_scale + xShift; // canvas_scale_X * canvas_scale + shift_X;
  };
  const f_Y = (num) => {
    return -num * yScale * canvas_scale + yShift;
  };
  const canvas_width = 1200;
  const canvas_height = 600;
  const canvas_scale = 0.9;
  const canvas_scale_X = 50;
  const canvas_scale_Y = 0.002;
  const shift_X = -100;
  const shift_Y = -50;
  // x = [5, 7, 8, 7, 2, 17, 2, 9, 4, 11, 12, 9, 6];
  // y = [99, 86, 87, 88, 111, 86, 103, 87, 94, 78, 77, 85, 86];
  const x = X_train.map((i) => Number(i[0]));
  const y = y_train.map((i) => Number(i[0]));
  // console.log('x: ', x);
  // console.log('y: ', y);
  const { a, b, r } = linear_regression(x, y);
  // console.log('r: ', r);
  const y_predict = [];
  for (let i = 0; i < X_test.length; i++) {
    y_predict.push(Number(X_test[i][0]) * b + a);
  }
  console.log('y_predict: ');
  console.log(y_predict);

  const xMax = Math.max(...x);
  const xMin = Math.min(...x);
  const xRange = xMax - xMin;
  const xScale = canvas_width / xRange;
  const xShift = -(xScale * xMin) + 50;
  const yMax = Math.max(...y);
  const yMin = Math.min(...y);
  const yRange = yMax - yMin;
  const yScale = canvas_height / yRange;
  const yShift = yScale * yMin + canvas_height - 50;

  const xMaxIndex = x.findIndex((i) => i === xMax);
  const xMinIndex = x.findIndex((i) => i === xMin);
  // console.log('xMin: ', xMin);
  // console.log('xMinIndex: ', xMinIndex);
  // console.log('y: ', y);
  let mid_X = mean(x);
  let mid_Y = mean(y);
  // console.log('mid_X: ', mid_X);
  // console.log('mid_Y: ', mid_Y);

  const lineY1 = a + b * x[xMinIndex];
  const lineY2 = a + b * x[xMaxIndex];
  var c = document.getElementById('myCanvas');
  var ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(f_X(x[xMinIndex]), f_Y(lineY1));
  ctx.lineTo(f_X(x[xMaxIndex]), f_Y(lineY2));
  ctx.stroke();
  for (let i = 0; i < x.length; i++) {
    ctx.beginPath();
    ctx.arc(f_X(x[i]), f_Y(y[i]), 2, 0, 2 * Math.PI);
    ctx.stroke();
  }
};
