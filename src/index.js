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

    // function createBody() {
    //   // calls other modules to load in pertinent information
    // }

    function createFooter() {
      const footer = document.createElement(`footer`);
      footer.classList.add(`footer`);

      const footerText = document.createElement(`p`);
      const currentDate = new Date().getFullYear()
      footerText.textContent = `Copyright ${currentDate} Erik Neibaur`;

      footer.appendChild(footerText);

      return footer;
    }

      content.append(createHeader());
      // content.append(createBody());
      document.body.append(createFooter());
}
)();