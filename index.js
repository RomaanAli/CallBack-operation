function performOperation(a, b, operationCallback) {
    return operationCallback(a, b);
  }
  
  function add(x, y) {
    return x + y;
  }
    
  const result = performOperation(5, 3, add);
  console.log('Addition result:', result); 

  module.exports = add;
