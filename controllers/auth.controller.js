const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login(req, res) {
  try {
    const fasyankes = await models.Fasyankes.findOne({
      where: {
        email: req.body.email
      }
    });

    if (!fasyankes) {
      return res.status(404).send({
        message: 'Fasyankes not found'
      });
    }

    const isMatch = await bcryptjs.compare(req.body.password, fasyankes.password);

    if (!isMatch) {
      return res.status(401).send({
        message: 'Invalid credentials'
      });
    }

    const token = jwt.sign({ id: fasyankes.id }, process.env.JWT_KEY);

    return res.status(200).send({
      message: 'Fasyankes logged in successfully',
      data: {
        token: token
      }
    });
  } catch (error) {
    res.status(500).send({
      message: 'Internal Server Error'
    });
  }
}

async function register(req, res) {
  try {
    const isFasyankesExist = await models.Fasyankes.findOne({
      where: {
        email: req.body.email
      }
    });

    if (isFasyankesExist) {
      return res.status(409).send({
        message: 'Fasyankes already exists'
      });
    }

    const hash = await bcryptjs.hash(req.body.password, 10);
    const fasyankes = {
      email: req.body.email,
      password: hash,
      nama_fasyankes: req.body.nama_fasyankes,
      lokasi: req.body.lokasi,
      provinsi: req.body.provinsi,
      kabupaten: req.body.kabupaten,
      kecamatan: req.body.kecamatan,
      kelurahan: req.body.kelurahan,
      no_telp: req.body.no_telp,
      alamat: req.body.alamat
    };

    const newFasyankes = await models.Fasyankes.create(fasyankes);

    const token = jwt.sign({ id: newFasyankes.id }, process.env.JWT_KEY);
    const dataIntegrasi = await models.DataIntegrasi.create({
      fasyankes_id: newFasyankes.id,
      api_key: token
    })

    res.status(201).send({
      message: 'Fasyankes created successfully',
      data: {
        id: newFasyankes.id,
        email: newFasyankes.email
      }
    });
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
}

module.exports = {
  login,
  register
}