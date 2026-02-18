const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'images/ASSETS/LOGO ASANNA PNG.png';
const outputPath = 'favicon.png'; // Using PNG for broader support and transparency

sharp(inputPath)
    .trim() // Removes transparent whitespace from the edges
    .resize(64, 64, { // Resize to 64x64 for high DPI displays
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toFile(outputPath, (err, info) => {
        if (err) {
            console.error('Error generating favicon:', err);
        } else {
            console.log('Favicon generation complete:', info);
        }
    });
