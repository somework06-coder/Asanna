const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'images/ASSETS/HEROIMage.jpg';
const outputPath = 'images/ASSETS/hero-optimized.webp';

sharp(inputPath)
    .resize(1920) // Resize to max width 1920px
    .webp({ quality: 80 }) // Compress to WebP with 80% quality
    .toFile(outputPath, (err, info) => {
        if (err) {
            console.error('Error processing image:', err);
        } else {
            console.log('Image optimization complete:', info);
        }
    });
