import './style.css';

const homePage = (() => {
    let content = document.querySelector("#content");

    function createHeader() {
      const header = document.createElement('header');
      header.classList.add('header');

      const dinerName = document.createElement('h1');
      dinerName.classList.add('diner-name')
      dinerName.innerText = `Toshi's Pizza`;

      header.appendChild(dinerName);
      header.appendChild(navBar());
      
      return header;
    }

    function navBar() {
      const navDiv = document.createElement(`div`);
      navDiv.classList.add(`nav-div`);

      const home = document.createElement(`p`);
      home.classList.add(`nav-menu-button`);
      home.innerText = "Home"

      const menu = document.createElement(`p`);
      menu.classList.add(`nav-menu-button`);
      menu.innerText = "Menu"

      const about = document.createElement(`p`);
      about.classList.add(`nav-menu-button`);
      about.innerText = "About"

      navDiv.appendChild(home);
      navDiv.appendChild(menu);
      navDiv.appendChild(about);

      return navDiv;

    }

  //   function stuff() {
  //       const element = document.createElement('div');
  //       element.classList.add("content");
  //       return element;
  //     };

  //   function createDiv(text) {
  //       const div = document.createElement('div');
  //       div.innerText = `${text}`
  //       div.classList.add('hello');
  //       return div;
  //   };

  //   function header(text) {
  //     const div = document.createElement('div');
  //     div.classList.add('header');
  //     return div;
  // };

      content.append(createHeader());
}
)();