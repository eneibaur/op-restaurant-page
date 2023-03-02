function menuPage(){

    const pageContents = document.createElement(`div`);
    pageContents.classList.add('tab-menus');
    pageContents.id = 'menu'

    const paraOne = document.createElement(`h1`);
    paraOne.textContent = "Come visit us!"

    const paraTwo = document.createElement(`h1`);
    paraTwo.textContent = "Come visit us!"

    pageContents.appendChild(paraOne);
    pageContents.appendChild(paraTwo);

    return pageContents;
    
};

export default menuPage;