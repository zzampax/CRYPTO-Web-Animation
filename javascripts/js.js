let elem = document.querySelector('div');
let svgText = document.querySelector('svg text');
let shadow = document.querySelector('article');
let generalInterval, closedInterval = null;

let dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomWords = ["Encryption", "Decryption", "Cipher", "Algorithm", "Key", "Public", "Private", "Hash", "Signature", "Symmetric", "Asymmetric", "Protocol", "RSA", "AES", "DES", "Blockchain", "Cryptanalysis", "Steganography", "DiffieHellman", "EllipticCurve"];
let colors = ["#a6e3a1", "#fab387", "#eba0ac", "#cba6f7", "#f9e2af", "#89b4fa"];

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
    
    closedInterval = setInterval(() => {
        let innerInterval = setInterval(() => {
            elem.innerHTML = randomString();
            svgText.textContent = randomTitleString();
            svgText.setAttribute('fill', randomColor());
        }, 20);
        setTimeout(() => {
            clearInterval(innerInterval);
            svgText.textContent = `${Math.random() < 0.5 ? 'C' : '@'}R${Math.random() < 0.5 ? 'Y' : '¥'}PT${Math.random() < 0.5 ? 'O' : 'Ø'}`; // '@R¥PTØ'
        }, 500);
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
        svgText.textContent = randomString(6);
        svgText.setAttribute('fill', randomColor());
    }, 20);
    setTimeout(() => {
        clearInterval(innerInterval);
        svgText.textContent = 'CRYPTO';
        svgText.setAttribute('fill', '#cdd6f4');
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

