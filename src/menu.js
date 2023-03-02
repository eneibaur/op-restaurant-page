import Photo from './img/pexels-andrea-piacquadio-3769999.jpg';

function menuPage(){
    const pageContents = document.createElement(`div`);
    pageContents.classList.add('tab-menus');
    pageContents.id = 'menu';

    function menuItem(imglink, itemname) {
        const slice = document.createElement('div');
        slice.classList.add('pizza-grid');
        
        const slicePhoto = new Image();
        slicePhoto.src = imglink;
        slicePhoto.classList.add('slice-graphic');

        const sliceName = document.createElement('p')
        sliceName.textContent = itemname;

        slice.appendChild(sliceName);
        slice.appendChild(slicePhoto);

        return slice;
    }

    const pepperoni = menuItem(Photo, 'Pepperoni');
    const cheese = menuItem(Photo, 'Cheese');
    const meat = menuItem(Photo, "Meat Lover's");
    const supreme = menuItem(Photo, "Supreme");

    pageContents.appendChild(pepperoni);
    pageContents.appendChild(cheese);
    pageContents.appendChild(meat);
    pageContents.appendChild(supreme);

    return pageContents;
    
};

export default menuPage;