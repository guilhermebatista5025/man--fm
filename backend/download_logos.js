const fs = require('fs');
const https = require('https');
const path = require('path');

const destDir = path.join(__dirname, '..', 'assets', 'bandeiras-cartão');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const logos = {
  'visa.png': 'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png',
  'mastercard.png': 'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png',
  'amex.png': 'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/amex.png',
  'elo.png': 'https://raw.githubusercontent.com/maassenbas/adyen-payment-icons/master/elo.png'
};

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded to ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function start() {
  for (const [filename, url] of Object.entries(logos)) {
    const destPath = path.join(destDir, filename);
    try {
      await downloadFile(url, destPath);
    } catch (e) {
      console.error(`Error downloading ${filename}:`, e.message);
    }
  }
}

start();
