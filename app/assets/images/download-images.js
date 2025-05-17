import https from 'https';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = {
  portfolio: [
    {
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      filename: 'ecommerce.jpg',
    },
    {
      url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
      filename: 'social.jpg',
    },
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      filename: 'ppc.jpg',
    },
  ],
  testimonials: [
    {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      filename: 'sarah.jpg',
    },
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      filename: 'michael.jpg',
    },
    {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      filename: 'emily.jpg',
    },
  ],
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}`));
      }
    }).on('error', reject);
  });
};

const createDirectories = () => {
  const dirs = [
    path.join(__dirname, 'portfolio'),
    path.join(__dirname, 'testimonials'),
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {recursive: true});
    }
  });
};

const downloadAllImages = async () => {
  createDirectories();
  
  for (const [category, items] of Object.entries(images)) {
    for (const item of items) {
      const filepath = path.join(__dirname, category, item.filename);
      try {
        await downloadImage(item.url, filepath);
        console.log(`Downloaded ${item.filename}`);
      } catch (error) {
        console.error(`Error downloading ${item.filename}:`, error);
      }
    }
  }
};

downloadAllImages().catch(console.error); 