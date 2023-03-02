function menuPage(){

    const pageContents = document.createElement(`div`);
    pageContents.classList.add('tab-menus');
    pageContents.id = 'menu'

    const paraOne = document.createElement(`h1`);
    paraOne.textContent = "Come visit us!"
    
    pageContents.appendChild(paraOne);

    return pageContents;
    
};

export default menuPage;