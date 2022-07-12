const fs = require('fs');
const pdf = require('pdf-creator-node');
// const path = require('path');
const express = require('express');
const app = express();

const skeleton = fs.readFileSync('./potwierdzenieO.html', 'utf-8');
const options = {
  format: 'A4',
  orientation: 'portrait',
  margin: '0mm'
 // border: '10mm',
//   header: {
//     height: '45mm',
//     contents: '<div style="text-align: center;">Author: Ta Lala</div>',
//   },
//   footer: {
//     height: '28mm',
//     contents: {
//       first: 'Cover page',
//       2: 'Second page', // Any page number is working. 1-based index
//     //   default:
//     //     '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
//       last: 'Last Page',
//     },
//   },
};

const doc = {
    html: skeleton,
    path: "./pdfs/newPdf.pdf",
}

pdf
  .create(doc, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(8080, () => {
  console.log('Aplikacja działa na porcie 8080');
});
