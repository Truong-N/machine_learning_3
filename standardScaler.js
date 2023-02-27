const standardScaler_fit_transform = (ttrain, ttest, col) => {
  const train = [];
  for (let r = 0; r < ttrain.length; r++) {
    const row = [];
    for (let c = 0; c < ttrain[0].length; c++) {
      row.push(ttrain[r][c]);
    }
    train.push(row);
  }
  const test = [];
  for (let r = 0; r < ttest.length; r++) {
    const row = [];
    for (let c = 0; c < ttest[0].length; c++) {
      row.push(ttest[r][c]);
    }
    test.push(row);
  }
  let arr_train = train.map((item) => Number(item[col]));
  let arr_test = test.map((item) => Number(item[col]));

  //   const mean = arr_train.reduce((sum, num) => sum + num, 0) / arr_train.length;
  const cmean = mean(arr_train);
  //   const variance =
  //     arr_train
  //       .map((item) => Math.pow(item - cmean, 2))
  //       .reduce((sum, num) => sum + num, 0) / arr_train.length;
  const cvariance = variance(arr_train, cmean);
  const deviation = Math.sqrt(cvariance);
  arr_train = arr_train.map((item) => (item - cmean) / deviation);
  arr_test = arr_test.map((item) => (item - cmean) / deviation);
  console.log('variance: ', cvariance);
  console.log('deviation: ', deviation);
  console.log('mean: ', cmean);
  for (let i = 0; i < train.length; i++) {
    train[i][col] = arr_train[i];
  }
  for (let i = 0; i < test.length; i++) {
    test[i][col] = arr_test[i];
  }
  return [train, test];
};

const standardScaler = (X_train, y_train, X_test, y_test) => {
  linear_regression_predict(X_train, y_train, X_test, y_test);
  console.log(
    'standardScaler.fit_transform:------------------------------------------------'
  );
  const [X_train1, X_test1] = standardScaler_fit_transform(X_train, X_test, 0);

  const [y_train1, y_test1] = standardScaler_fit_transform(y_train, y_test, 0);
  console.log(X_train[0] === X_train1[0]);
  console.log('X_train1:');
  console.log(X_train1);
  console.log('y_train1:');
  console.log(y_train1);
  console.log('X_test1:');
  console.log(X_test1);
  console.log('y_test1:');
  console.log(y_test1);
};
