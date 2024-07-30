const alphabetImages = {
    A: 'images/letters/A.png',
    B: 'images/letters/B.png',
    C: 'images/letters/C.png',
    D: 'images/letters/D.png',
    E: 'images/letters/E.png',
    F: 'images/letters/F.png',
    G: 'images/letters/G.png',
    H: 'images/letters/H.png',
    I: 'images/letters/I.png',
    J: 'images/letters/J.png',
    K: 'images/letters/K.png',
    L: 'images/letters/L.png',
    M: 'images/letters/M.png',
    N: 'images/letters/N.png',
    O: 'images/letters/O.png',
    P: 'images/letters/P.png',
    Q: 'images/letters/Q.png',
    R: 'images/letters/R.png',
    S: 'images/letters/S.png',
    T: 'images/letters/T.png',
    U: 'images/letters/U.png',
    V: 'images/letters/V.png',
    W: 'images/letters/W.png',
    X: 'images/letters/X.png',
    Y: 'images/letters/Y.png',
    Z: 'images/letters/Z.png',
};

function drawName() {
    const nameInput = document.getElementById('nameInput').value.toUpperCase();
    const bgSelect = document.getElementById('bgSelect').value;
    const canvas = document.getElementById('nameCanvas');
    const ctx = canvas.getContext('2d');

    // Adjust canvas size
    canvas.width = nameInput.length * 60; // 60px per character
    canvas.height = 80; // Height of character images

    // Set background color
    switch(bgSelect) {
        case 'white':
            ctx.fillStyle = '#FFFFFF';
            break;
        case 'blue':
            ctx.fillStyle = '#0000FF';
            break;
        case 'red':
            ctx.fillStyle = '#FF0000';
            break;
        default:
            ctx.fillStyle = 'transparent';
    }

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw letters
    for (let i = 0; i < nameInput.length; i++) {
        const char = nameInput[i];
        const img = new Image();
        img.src = alphabetImages[char] || 'images/letters/default.png'; // Default image if character not found
        img.onload = function() {
            ctx.drawImage(img, i * 60, 0, 60, 80); // Draw each image at a specific position
        }
    }
}

function downloadImage() {
    const canvas = document.getElementById('nameCanvas');
    const link = document.createElement('a');
    link.download = 'name_image.png';
    link.href = canvas.toDataURL();
    link.click();
}
