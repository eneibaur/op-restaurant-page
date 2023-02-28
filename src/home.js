import Photo from './img/pexels-andrea-piacquadio-3769999.jpg';

function homePage(){

    const pageContents = document.createElement(`div`);
    pageContents.classList.add('tab-menus');

    const paraOne = document.createElement(`h1`);
    paraOne.textContent = "Hello! I'm Jackie!"

    const ownerPhoto = new Image();
    ownerPhoto.src = Photo;
    ownerPhoto.classList.add('profile-photo');

    const paraTwo = document.createElement('h2');
    paraTwo.textContent = "I've been making pizzas for my family since I was little - and for Seattle since I was a teenager!"

    pageContents.appendChild(paraOne);
    pageContents.appendChild(ownerPhoto);
    pageContents.appendChild(paraTwo);

    return pageContents;
    
};

export default homePage;