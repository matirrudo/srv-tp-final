console.log("cargo noticias.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const noticiaCtrl = require('../controllers/noticia.controller');

// definiendo rutas
router.get('/', noticiaCtrl.getNoticias);
router.post('/', noticiaCtrl.createNoticia);
router.get('/:id', noticiaCtrl.getNoticia);
router.put('/:id', noticiaCtrl.editNoticia);
router.delete('/:id', noticiaCtrl.deleteNoticia);

//exportacion del modulo de rutas
module.exports = router;