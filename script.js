// console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--border-btn-color'))

let modeChange = document.getElementById("modeChange");

let imageDiv = document.getElementById("picture");
let image = document.getElementById("light");
let newImgElement = document.createElement('img');
newImgElement.id = "light";
newImgElement.src = "./icons/darkimg.svg";
newImgElement.alt = "Dark Mode";

let toggler = 0;

modeChange.addEventListener('click', () => {
    if (toggler == 0) {
        document.documentElement.style.setProperty('--background-btn-color', 'rgb(174, 174, 174)')
        document.documentElement.style.setProperty('--border-btn-color', 'black')
        document.documentElement.style.setProperty('--font-btn-color', 'white')
        document.documentElement.style.setProperty('--background-btn-color-active', 'white')
        document.documentElement.style.setProperty('--border-btn-color-active', 'rgb(122, 122, 122)')
        document.documentElement.style.setProperty('--font-btn-color-active', 'black')
        document.documentElement.style.setProperty('--background-btn-wrapper', 'rgb(122, 122, 122)')
        // document.documentElement.style.setProperty()
        // modeChange.textContent = "Dark Mode";
        // image.innerHTML = `<img id="light" src="./icons/darkimg.svg" alt="dark Mode"></img>`
        imageDiv.removeChild(image);
        imageDiv.append(newImgElement);
        toggler = 1;
    }
    else if (toggler == 1) {
        document.documentElement.style.setProperty('--border-btn-color', 'black')
        document.documentElement.style.setProperty('--background-btn-color', 'none')
        document.documentElement.style.setProperty('--font-btn-color', 'black')
        document.documentElement.style.setProperty('--background-btn-color-active', 'black')
        document.documentElement.style.setProperty('--border-btn-color-active', 'white')
        document.documentElement.style.setProperty('--font-btn-color-active', 'white')
        document.documentElement.style.setProperty('--background-btn-wrapper', 'white')
        modeChange.textContent = "Light Mode";
        imageDiv.removeChild(newImgElement);
        imageDiv.append(image);
        toggler = 0;
    }
});