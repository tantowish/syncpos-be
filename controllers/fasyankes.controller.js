const models = require('../models');
//Validator
const Validator = require('fastest-validator');

async function index(req, res) {
  try {
    const fasyankes = await models.Fasyankes.findAll();
    res.status(200).send({
      message: 'Success',
      data: fasyankes
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const fasyankes = await models.Fasyankes.findByPk(id);
    if (!fasyankes) {
      return res.status(404).send({
        error: 'Fasyankes not found'
      })
    }

    res.status(200).send({
      message: 'Success',
      data: fasyankes
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
}

async function store(req, res) {
  try {
    const schema = {
      email: { type: 'email', label: 'Email Address', optional: false, max: '100' },
      password: { type: 'string', label: 'Password', optional: false, max: '100' },
      nama_fasyankes: { type: 'string', label: 'Fasyankes', optional: false, max: '100' },
      lokasi: { type: 'string', label: 'Lokasi', optional: false, max: '100' },
      provinsi: { type: 'string', label: 'Provinsi', optional: false, max: '100' },
      kabupaten: { type: 'string', label: 'Kabupaten', optional: false, max: '100' },
      kecamatan: { type: 'string', label: 'Kecamatan', optional: false, max: '100' },
      kelurahan: { type: 'string', label: 'Kelurahan', optional: false, max: '100' },
      no_telp: { type: 'string', label: 'Nomor Telepon', optional: false, max: '100' },
      alamat: { type: 'string', label: 'Alamat', optional: false, max: '100' }
    }

    const validator = new Validator();
    const validationResponse = await validator.validate(req.body, schema);

    if (validationResponse !== true) {
      return res.status(400).send({
        error: validationResponse
      })
    }

    const fasyankes = await models.Fasyankes.create(req.body);

    res.status(201).send({
      message: 'Fasyankes created successfully',
      data: fasyankes
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const fasyankes = await models.Fasyankes.findByPk(id);
    if (!fasyankes) {
      return res.status(404).send({
        error: 'Fasyankes not found'
      })
    }

    const schema = {
      email: { type: 'email', label: 'Email Address', optional: true, max: '100' },
      password: { type: 'string', label: 'Password', optional: true, max: '100' },
      nama_fasyankes: { type: 'string', label: 'Fasyankes', optional: true, max: '100' },
      lokasi: { type: 'string', label: 'Lokasi', optional: true, max: '100' },
      provinsi: { type: 'string', label: 'Provinsi', optional: true, max: '100' },
      kabupaten: { type: 'string', label: 'Kabupaten', optional: true, max: '100' },
      kecamatan: { type: 'string', label: 'Kecamatan', optional: true, max: '100' },
      kelurahan: { type: 'string', label: 'Kelurahan', optional: true, max: '100' },
      no_telp: { type: 'string', label: 'Nomor Telepon', optional: true, max: '100' },
      alamat: { type: 'string', label: 'Alamat', optional: true, max: '100' }
    }

    const validator = new Validator();
    const validationResponse = await validator.validate(req.body, schema);

    if (validationResponse !== true) {
      return res.status(400).send({
        error: validationResponse
      })
    }

    const updatedFasyankes = await fasyankes.update(req.body);

    res.status(200).send({
      message: 'Fasyankes updated successfully',
      data: updatedFasyankes
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id;
    const fasyankes = await models.Fasyankes.findByPk(id);
    if (!fasyankes) {
      return res.status(404).send({
        error: 'Fasyankes not found'
      })
    }
    await fasyankes.destroy();
    res.status(200).send({
      message: 'Fasyankes deleted successfully'
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
}