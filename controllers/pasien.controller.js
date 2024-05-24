const models = require('../models');
//Validator
const Validator = require('fastest-validator');

async function index(req, res) {
  try {
    const pasien = await models.Pasien.findAll();
    res.status(200).send({
      message: 'Success',
      data: pasien
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
}

async function show(req, res) {
  try {
    const nik = req.params.nik;
    const pasien = await models.Pasien.findByPk(nik);
    // Not found
    if (!pasien) {
      return res.status(404).send({
        error: 'Pasien not found'
      })
    }

    res.status(200).send({
      message: 'Success',
      data: pasien
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
      nik: { type: 'string', optional: false, min: '16', max: '16' },
      nama: { type: 'string', optional: false, max: '100' },
      alamat: { type: 'string', optional: false, max: '100' },
      tanggal_lahir: { type: 'date', optional: false },
      status: { type: 'enum', optional: false, values: ['balita', 'lansia'] },
      jenis_kelamin: { type: 'enum', optional: false, values: ['l', 'p'] },
    }

    const validator = new Validator();
    const validationResponse = await validator.validate(req.body, schema);

    if (validationResponse !== true) {
      return res.status(400).send({
        error: validationResponse
      })
    }

    const pasien = await models.Pasien.create(req.body);

    res.status(201).send({
      message: 'Success',
      data: pasien
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
}

async function update(req, res) {
  try {
    const nik = req.params.nik;
    const pasien = await models.Pasien.findByPk(nik);
    // Not found
    if (!pasien) {
      return res.status(404).send({
        error: 'Pasien not found'
      })
    }
    const schema = {
      nik: { type: 'string', optional: false, min: '16', max: '16' },
      nama: { type: 'string', optional: false, max: '100' },
      alamat: { type: 'string', optional: false, max: '100' },
      tanggal_lahir: { type: 'date', optional: false },
      status: { type: 'enum', optional: false, values: ['balita', 'lansia'] },
      jenis_kelamin: { type: 'enum', optional: false, values: ['l', 'p'] },
    }

    const validator = new Validator();
    const validationResponse = await validator.validate(req.body, schema);

    if (validationResponse !== true) {
      return res.status(400).send({
        error: validationResponse
      })
    }

    const updatedPasien = await pasien.update(req.body);

    res.status(200).send({
      message: 'Success',
      data: updatedPasien
    })
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
}

async function destroy(req, res) {
  try {
    const nik = req.params.nik;
    const pasien = await models.Pasien.findByPk(nik);
    // Not found
    if (!pasien) {
      return res.status(404).send({
        error: 'Pasien not found'
      })
    }

    await pasien.destroy();
    res.status(200).send({
      message: 'Success',
      data: pasien
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