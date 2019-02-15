var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'yildirim',
  password: 'emincan',
  port: 5432,
})

var datas;
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'yildirim',
  password: 'emincan',
  port: 5432,
})
client.connect();
client.query('LISTEN "persons"');
client.on('notification', function (data) {
  console.log(data.payload);
});

router.get('/', function (req, res, next) {
  client.query('SELECT * FROM persons ORDER BY kitapid;', (err, res) => {
    datas = res.rows;
  });
  setTimeout(function () { res.render('index', { title: datas }) }, 1000);
});

router.get('/kitaplar/sil', function (req, res, next) {
  client.query('SELECT * FROM persons ORDER BY kitapid', (err, res) => {
    datas = res.rows;
  });
  setTimeout(function () { res.render('sil', { title: datas }) }, 1000);
});

router.get('/kitaplar/ekle', function (req, res, next) {
  client.query('SELECT * FROM persons ORDER BY kitapid', (err, res) => {
    datas = res.rows;
  });
  setTimeout(function () { res.render('ekle', { title: datas }) }, 1000);
});

router.get('/kitaplar/guncelle', function (req, res, next) {
  client.query('SELECT * FROM persons ORDER BY kitapid', (err, res) => {
    datas = res.rows;
  });
  setTimeout(function () { res.render('guncelle', { title: datas }) }, 1000);
});


router.post('/ekle', function (req, res, next) {
  if (req.body.title === "" || req.body.yazar === "") {
    res.status(405).redirect('/kitaplar/ekle');
  }
  else {
    if (req.body.tarih === "" || req.body.alan === "") {
      req.body.tarih = null;
      req.body.alan = null;
    }
    var item = {
      title: req.body.title,
      yazar: req.body.yazar,
      alan: req.body.alan,
      tarih: req.body.tarih
    };
    client.query("INSERT INTO persons(kitapid, yazaradi, kitapadi, kitabıalan, kitabtarih) values($1, $2, $3, $4, $5)", [datas.length + 1, item.yazar, item.title, item.alan, item.tarih], (err, res) => {
      console.log(res);
    });
    res.redirect('/kitaplar/ekle');
  }
});

router.delete('/sil', function (req, res, next) {
  var silID = req.query.id;
  client.query('DELETE FROM persons WHERE kitapid=($1)', [silID], (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});

router.put('/guncelle', function (req, res, next) {
  if (req.query.tarih === "''") {
      req.query.tarih = null;
  }
  if (req.query.alan === ""){
      req.query.alan = null;
  }
  var updateData = {
      id: req.query.id,
      alan: req.query.alan,
      tarih: req.query.tarih
  };

  client.query('UPDATE persons SET kitabıalan=($1), kitabtarih=($2) WHERE kitapid=($3)', [updateData.alan, updateData.tarih, updateData.id], (err, res) => {
    if (err) console.log(err);
    console.log(res);
  });
});

module.exports = router;
