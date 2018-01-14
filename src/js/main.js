// Testing Webpack bundle
console.log('Boilerplate Started');

// Testing ES6
setTimeout(() => console.log('Testing ES6'), 1000);

class TestClass {
  classBoundFunction = () => {
    console.log('classBoundFunction called');
  }
}

const test = new TestClass();
test.classBoundFunction();
