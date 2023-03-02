function aboutPage(){

    const pageContents = document.createElement(`div`);
    pageContents.classList.add('tab-menus');

    const paraOne = document.createElement(`h1`);
    paraOne.textContent = "Come visit us!"

    const googMap = document.createElement('div');
    googMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.2893592796236!2d-122.35147144823549!3d47.62050627908356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1677624754027!5m2!1sen!2sus" class="map" width="450" height="337" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    const paraTwo = document.createElement('h2');
    paraTwo.textContent = "Or call us at:"
    const paraThree = document.createElement('h3');
    paraThree.textContent = "1-800-EAT-PIZZA"

    pageContents.appendChild(paraOne);
    pageContents.appendChild(googMap);
    pageContents.appendChild(paraTwo);
    pageContents.appendChild(paraThree);

    return pageContents;
    
};

export default aboutPage;