const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.post('/registro', async (req, res) => {
  try {
    const user = await new UserModel(req.body).save();
    res.render('registro', {message: "Bienvenido " + user.usuario + " se ha registrado con exito."});
  } catch (error) {
    console.log(error);
    res.status(500).render('registro', {message: 'Ha habido un problema al registrar el usuario.'});
  }
});
router.post('/login', async (req, res) => {
  try {
    const user = await UserModel.findOne({
      $or: [
        { usuario: req.body.usuario }, { email: req.body.email }
      ]
    });
    console.log('body', req.body);
    console.log('user', user);
    if (!user) return res.status(400).render('login', {message: 'Usuario o contraseña incorrectos'});
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).render('login', {message: 'Usuario o contraseña incorrectos'});
    res.status(200).render('login', {message: 'Se ha logeado correctamente'});
  } catch (error) {
    console.log(error);
    res.status(500).render('login', {message: 'Ha habido un problema con el sevidor'});
  }
});

module.exports = router;
