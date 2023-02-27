const labelEncoder = (X, y, isSkip) => {
  if (!isSkip) {
    y = y.map((item) => (item === 'Yes' ? 1 : 0));
    console.log('LabelEncoder:');
    console.log('y:');
    console.log(y);
  } else {
    console.log('LabelEncoder: skip');
  }
  train_test_split(X, y);
};
