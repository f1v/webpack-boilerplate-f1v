// Testing Webpack bundle
console.log('Boilerplate Started'); // eslint-disable-line

// Testing ES6
setTimeout(() => console.log('Testing ES6'), 1000); // eslint-disable-line

class TestClass {
  classBoundFunction = () => {
    console.log('classBoundFunction called'); // eslint-disable-line
  }
}

const test = new TestClass();
test.classBoundFunction();
