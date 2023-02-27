const pandas_iloc = (dataset) => {
  let X = dataset.map((item) => {
    const row = [];
    for (let i = 0; i < item.length - 1; i++) {
      row.push(item[i]);
    }
    return row;
  });
  let y = dataset.map((item) => [item[item.length - 1]]);
  console.log('pandas_iloc:');
  console.log('X: ');
  console.log(X);
  console.log('y: ');
  console.log(y);
  simpleImputer(X, y);
};
