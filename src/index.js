import './style.css';

const homePage = (() => {
    let content = document.querySelector("#content");

    function stuff() {
        const element = document.createElement('div');
        element.classList.add("content");
        return element;
      };
    function createDiv(text) {
        const div = document.createElement('div');
        div.innerText = `${text}`
        div.classList.add('hello');
        return div;
    };
      content.append(createDiv('Hello world!'));
      content.append(createDiv('And another!'));
}
)();