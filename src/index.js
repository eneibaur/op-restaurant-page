function test() {
    const element = document.createElement('div');
      element.innerText = "test";
      return element;
  }
  
  document.body.appendChild(test());