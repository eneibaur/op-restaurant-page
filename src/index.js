import './style.css';

const homePage = (() => {

    let content = document.querySelector("#content");

    function createHeader() {
      const header = document.createElement('div');
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

      const home = document.createElement(`button`);
      home.classList.add(`nav-menu-button`);
      home.innerText = "Home"

      const menu = document.createElement(`button`);
      menu.classList.add(`nav-menu-button`);
      menu.innerText = "Menu"

      const about = document.createElement(`button`);
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
      const imgCopyright = document.createElement('p');
      const copyrightLink = document.createElement('a')

      const currentDate = new Date().getFullYear()
      footerText.textContent = `Copyright ${currentDate} Erik Neibaur`;
      
      copyrightLink.href = `https://www.pexels.com/photo/shallow-focus-photography-of-several-pizzas-1566837/`;
      copyrightLink.innerText = `Narda Yescas from Pexels`;
      imgCopyright.textContent = `image courtesty of `;
      imgCopyright.append(copyrightLink);

      footer.appendChild(footerText);
      footer.appendChild(imgCopyright);

      return footer;
    }

      content.append(createHeader());
      // content.append(createBody());
      document.body.append(createFooter());
}
)();