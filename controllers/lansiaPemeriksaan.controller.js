const models = require('../models');
const Validator = require('fastest-validator');

async function index(req, res){
    try {
        console.log(req.user)
        const pasien = await models.LansiaPemeriksaan.findAll({
            where: {
                fasyankes_id: req.user
            },
            include: [{
                model: models.Pasien
            }]
        });
        res.status(200).send({
            message: 'Success',
            data: pasien
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
      const checkupLansia = await models.LansiaPemeriksaan.findByPk(uuid, {
            include: [{
                model: models.Pasien
            }]
        });
      // Not found
      if (!checkupLansia) {
        return res.status(404).send({
          error: 'Checkup Lansia not found'
        })
      }
  
      res.status(200).send({
        message: 'Success',
        data: checkupLansia
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
        tekanan_darah: { type: 'string', optional: false },
        denyut_nadi: { type: 'string', optional: false },
        assesment: { type: 'string', optional: false },
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

      const ageInYears = Math.floor(ageInMonths / 12);

      data = {
        fasyankes_id: req.user,
        ...req.body,
        umur: ageInYears
      }

      const lansia = await models.LansiaPemeriksaan.create(data);
  
      res.status(201).send({
        message: 'Success',
        data: lansia
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
        berat_badan: { type: 'number', optional: true },
        tinggi_badan: { type: 'number', optional: true },
        tekanan_darah: { type: 'string', optional: true },
        denyut_nadi: { type: 'string', optional: true },
        assesment: { type: 'string', optional: true },
      }
  
      const uuid = req.params.uuid;
      const checkupLansia = await models.LansiaPemeriksaan.findByPk(uuid);
        // Not found
        if (!checkupLansia) {
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
  
      const updatedLansia = await checkupLansia.update(req.body);
  
      res.status(200).send({
        message: 'Success',
        data: updatedLansia
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
    const checkupLansia = await models.LansiaPemeriksaan.findByPk(uuid);
        // Not found
        if (!checkupLansia) {
            return res.status(404).send({
            error: 'Checkup Lansia not found'
            })
        }
  
      await checkupLansia.destroy();
      res.status(200).send({
        message: 'Success',
        data: checkupLansia
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