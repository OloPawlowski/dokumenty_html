const fs = require('fs');
const pdf = require('pdf-creator-node');
// const path = require('path');
const express = require('express');
const app = express();

const date = new Date();
const year = date.getFullYear();
let month = (date.getMonth() + 1).toString().padStart(2, '0') + '.';
let day = date.getDate().toString().padStart(2, '0') + '.';
let hour = date.getHours().toString() + ':';
let minutes = date.getMinutes().toString();
const dMY = day + month + year;
const time = hour + minutes;
let nr1 = Math.floor((Math.random() * 1000));
let nr2 = Math.floor((Math.random() * 10000));
let nr3 = Math.floor((Math.random() * 10000));

const skeleton = fs.readFileSync('./potwierdzenieZ.html', 'utf-8');

const options = {
  format: 'A4',
  orientation: 'portrait',
};
const doc = {
    html: skeleton,
    data: {
      date: dMY,
      time: time,
      nr1: nr1,
      nr2: nr2,
      nr3: nr3
    },
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
