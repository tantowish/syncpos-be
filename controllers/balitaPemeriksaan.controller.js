const models = require('../models');
const Validator = require('fastest-validator');

async function index(req, res){
    try {
        const balitaPemeriksaan = await models.BalitaPemeriksaan.findAll({
            where: {
                fasyankes_id: req.user
            },
            include: [{
                model: models.Pasien
            }]
        });
        res.status(200).send({
            message: 'Success',
            data: balitaPemeriksaan
        });
    } catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
}

async function show(req, res) {
    try {
      const uuid = req.params.uuid;
      const balita = await models.BalitaPemeriksaan.findByPk(uuid, {
            include: [{
                model: models.Pasien
            }]
        });
      // Not found
      if (!balita) {
        return res.status(404).send({
          error: 'Checkup Lansia not found'
        })
      }
  
      res.status(200).send({
        message: 'Success',
        data: balita
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
        berat_badan: { type: 'number', optional: false },
        tinggi_badan: { type: 'number', optional: false },
        lingkar_kepala: { type: 'number', optional: false }
      }

      const pasien = await models.Pasien.findByPk(req.body.nik);
      if (!pasien) {
        return res.status(404).send({
          error: 'Pasien not found'
        })
      }

      const validator = new Validator();
      const validationResponse = await validator.validate(req.body, schema);
  
      if (validationResponse !== true) {
        return res.status(400).send({
          error: validationResponse
        })
      }

      const tanggal_lahir = new Date(pasien.tanggal_lahir);
      const today = new Date();
      const ageInMonths = (today.getFullYear() - tanggal_lahir.getFullYear()) * 12 +
      (today.getMonth() - tanggal_lahir.getMonth());
      
      data = {
        fasyankes_id: req.user,
        ...req.body,
        umur: ageInMonths
      }
  
      const balita = await models.BalitaPemeriksaan.create(data);
  
      res.status(201).send({
        message: 'Success',
        data: balita
      })
    } catch (err) {
      res.status(500).send({
        error: err.message
      })
    }
  }

  async function update(req, res) {
    try {
      const schema = {
        nik: { type: 'string', optional: true, min: '16', max: '16' },
        fasyankes_id: { type: 'uuid', optional: true, max: '36' },
        berat_badan: { type: 'number', optional: true },
        tinggi_badan: { type: 'number', optional: true },
        lingkar_kepala: { type: 'number', optional: true }
      }
  
      const uuid = req.params.uuid;
      const balita = await models.BalitaPemeriksaan.findByPk(uuid);
        // Not found
        if (!balita) {
            return res.status(404).send({
            error: 'Checkup Lansia not found'
            })
        }

      const validator = new Validator();
      const validationResponse = await validator.validate(req.body, schema);
  
      if (validationResponse !== true) {
        return res.status(400).send({
          error: validationResponse
        })
      }
  
      const updatedBalita = await balita.update(req.body);
  
      res.status(200).send({
        message: 'Success',
        data: updatedBalita
      })
    } catch (err) {
      res.status(500).send({
        error: err.message
      })
    }
  }

  async function destroy(req, res) {
    try {
    const uuid = req.params.uuid;
    const balita = await models.BalitaPemeriksaan.findByPk(uuid);
        // Not found
        if (!balita) {
            return res.status(404).send({
            error: 'Checkup Lansia not found'
            })
        }
  
      await balita.destroy();
      res.status(200).send({
        message: 'Success',
        data: balita
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
};