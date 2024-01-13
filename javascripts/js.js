let elem = document.querySelector('div');
let h1Text = document.querySelector('h1');
let shadow = document.querySelector('article');
let generalInterval, closedInterval = null;

let dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomWords = ["Encryption", "Decryption", "Cipher", "Algorithm", "Key", "Public", "Private", "Hash", "Signature", "Symmetric", "Asymmetric", "Protocol", "RSA", "AES", "DES", "Blockchain", "Cryptanalysis", "Steganography", "DiffieHellman", "EllipticCurve"];
let colors = ["#a6e3a1", "#fab387", "#eba0ac", "#cba6f7", "#f9e2af", "#89b4fa"];
let cursors = ["alias", "all-scroll", "auto", "cell", "context-menu", "col-resize", "copy", "crosshair", "default", "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize", "ns-resize", "nw-resize", "nwse-resize", "no-drop", "none", "not-allowed", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "vertical-text", "w-resize", "wait", "zoom-in", "zoom-out"];

let oldDistance = {x: 0, y: 0};

const randomLetter = () => {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

const randomWord = () => {
    return randomWords[Math.floor(Math.random() * randomWords.length)];
}

const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

const randomCursor = () => {
    return cursors[Math.floor(Math.random() * cursors.length)];
}

const randomString = (cap = 3000) => {
    let result = '';
    for (let i = 0; i < cap; i++) {
        if (Math.random() < 0.02) {
            result += `<span style="color:${randomColor()}">${randomWord()}</span>`;
            continue;
        }
        result += randomLetter();
    }
    return result;
};

const randomTitleString = () => {
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += randomLetter();
    }
    return result;
}

elem.parentElement.addEventListener('mouseenter', () => {

    //clearInterval(generalInterval);
    
    clearInterval(closedInterval);

    closedInterval = setInterval(() => {
        let innerInterval = setInterval(() => {
            elem.innerHTML = randomString();
            document.body.style.cursor = randomCursor();
            h1Text.textContent = randomTitleString();
            console.log(h1Text.textContent);
            h1Text.style.color = randomColor();
        }, 50);
        setTimeout(() => {
            clearInterval(innerInterval);
            document.body.style.cursor = 'default';
            h1Text.textContent = `${Math.random() < 0.5 ? 'C' : '@'}R${Math.random() < 0.5 ? 'Y' : '¥'}PT${Math.random() < 0.5 ? 'O' : 'Ø'}`; // '@R¥PTØ'
        }, 700);
    }, Math.floor(Math.random() * 1000) + 2500);
    
    elem.parentElement.addEventListener('mousemove', (e) => {

        let distance = {x: e.clientX, y: e.clientY};
        if (Math.sqrt(Math.pow(distance.x - oldDistance.x, 2) + Math.pow(distance.y - oldDistance.y, 2)) < 50) {
            return;
        }
        oldDistance = distance;
        
        let left = e.offsetX;
        let top = e.offsetY;
        console.log(shadow.clientWidth / 2, shadow.clientHeight / 2)
        shadow.style.left = (left - shadow.clientWidth / 2) + 'px';
        shadow.style.top = (top - shadow.clientHeight / 2) + 'px';

        elem.innerHTML = randomString();
    });
});

elem.parentElement.addEventListener('mouseleave', () => {
    clearInterval(closedInterval);

    elem.parentElement.removeEventListener('mousemove', () => {});

    let innerInterval = setInterval(() => {
        elem.innerHTML = randomString();
        h1Text.textContent = randomTitleString();
        h1Text.style.color = randomColor();
    }, 20);
    setTimeout(() => {
        clearInterval(innerInterval);
        h1Text.textContent = 'CRYPTO';
        h1Text.style.color = "#cdd6f4";
    }, 500);

    /*generalInterval = setInterval(() => {
        let innerInterval = setInterval(() => {
            elem.innerHTML = randomString();
        }, 50);
        setTimeout(() => {
            clearInterval(innerInterval);
        }, 500);
    }, Math.floor(Math.random() * 1000) + 2500);*/
});


elem.parentElement.addEventListener('touchstart', (e) => {

    clearInterval(closedInterval);

    closedInterval = setInterval(() => {
        let innerInterval = setInterval(() => {
            elem.innerHTML = randomString();
            document.body.style.cursor = randomCursor();
            h1Text.textContent = randomTitleString();
            console.log(h1Text.textContent);
            h1Text.style.color = randomColor();
        }, 30);
        setTimeout(() => {
            clearInterval(innerInterval);
            document.body.style.cursor = 'default';
            h1Text.textContent = `${Math.random() < 0.5 ? 'C' : '@'}R${Math.random() < 0.5 ? 'Y' : '¥'}PT${Math.random() < 0.5 ? 'O' : 'Ø'}`; // '@R¥PTØ'
        }, 700);
    }, Math.floor(Math.random() * 1000) + 2500);
    
    elem.parentElement.addEventListener('touchmove', (e) => {

        let distance = {x: e.touches[0].clientX, y: e.touches[0].clientY};
        if (Math.sqrt(Math.pow(distance.x - oldDistance.x, 2) + Math.pow(distance.y - oldDistance.y, 2)) < 50) {
            return;
        }
        oldDistance = distance;
        
        let left = e.touches[0].clientX;
        let top = e.touches[0].clientY;
        console.log(shadow.clientWidth / 2, shadow.clientHeight / 2)
        shadow.style.left = (left - shadow.clientWidth / 2) + 'px';
        shadow.style.top = (top - shadow.clientHeight / 2) + 'px';

        elem.innerHTML = randomString();
    });
});

elem.parentElement.addEventListener('touchend', () => {
    clearInterval(closedInterval);

    elem.parentElement.removeEventListener('touchmove', () => {});

    let innerInterval = setInterval(() => {
        elem.innerHTML = randomString();
        h1Text.textContent = randomTitleString();
        h1Text.style.color = randomColor();
    }, 10);
    setTimeout(() => {
        clearInterval(innerInterval);
        h1Text.textContent = 'CRYPTO';
        h1Text.style.color = "#cdd6f4";
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    elem.innerHTML = setInterval(() => {
        // write animation
        elem.innerHTML += randomString(10);
    }, 7);

    /*generalInterval = setInterval(() => {
        let innerInterval = setInterval(() => {
            elem.innerHTML = randomString();
        }, 50);
        setTimeout(() => {
            clearInterval(innerInterval);
        }, 500);
    }, Math.floor(Math.random() * 1000) + 2500);*/
});

document.querySelector('section').addEventListener('touchstart', function(e) {
    e.preventDefault();
});