const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
//Validator
const Validator = require('fastest-validator');

async function login(req, res) {
  try {
    const fasyankes = await models.Fasyankes.findOne({
      where: {
        email: req.body.email
      }
    });

    if (!fasyankes) {
      return res.status(404).send({
        error: 'Fasyankes not found'
      });
    }

    const isMatch = await bcryptjs.compare(req.body.password, fasyankes.password);

    if (!isMatch) {
      return res.status(401).send({
        error: 'Invalid credentials'
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
      error: error.message
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
        error: 'Fasyankes already exists'
      });
    }

    const hash = await bcryptjs.hash(req.body.password, 10);
    const fasyankes = {
      email: req.body.email,
      password: hash,
      nama_fasyankes: req.body.nama_fasyankes,
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
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
}

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
  login,
  register,
  index,
  show,
  update,
  destroy
}