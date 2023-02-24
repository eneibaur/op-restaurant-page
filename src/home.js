import Photo from './img/pexels-andrea-piacquadio-3769999.jpg';

function homePage(){

    const pageContents = document.createElement(`div`);
    pageContents.classList.add('tab-menus');

    const paraOne = document.createElement(`h1`);
    paraOne.textContent = "Hello! I'm Jackie!"

    const ownerPhoto = new Image();
    ownerPhoto.src = Photo;
    ownerPhoto.classList.add('profile-photo');

    pageContents.appendChild(paraOne);
    pageContents.appendChild(ownerPhoto);

    return pageContents;
    
};

export default homePage;