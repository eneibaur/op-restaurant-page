function test() {
    const element = document.createElement('div');
      element.innerText = "Woo!";
      return element;
  }
  
  document.body.appendChild(test());