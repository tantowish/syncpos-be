const models = require('../models');
const Validator = require('fastest-validator');

async function get(req, res){
    try {
        const dataIntegrasi = await models.DataIntegrasi.findOne({
            where: {
              fasyankes_id: req.user
            }
          });
        res.status(201).send({
        message: 'Success',
        data: dataIntegrasi
        });
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
}

async function store(req, res){
    try {
        const schema = {
            fasyankes_id: { type: 'string', optional: false },
            api_key: { type: 'string', optional: false }
        };

        const validator = new Validator();
        const validationResponse = await validator.validate(req.body, schema);

        if (validationResponse !== true) {
            return res.status(400).send({
                message: 'Validation failed',
                data: validationResponse
            })
        }

        const dataIntegrasi = await models.DataIntegrasi.create(req.body);

        res.status(201).send({
        message: 'Data Integrasi Created Successfully',
        data: dataIntegrasi
        });
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
}

module.exports = {
    get,
    store
  }