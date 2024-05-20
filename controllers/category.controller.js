const models = require('../models');
//Validator
const Validator = require('fastest-validator');

async function index(req, res) {
  try {
    const categories = await models.Category.findAll();
    res.status(200).send({
      message: 'Success',
      data: categories
    })
  } catch (err) {
    res.status(500).send({
      message: err.message
    })
  }
}

async function store(req, res) {
  try {
    const category = {
      name: req.body.name
    }
    const schema = {
      name: { type: 'string', optional: false, max: '100' }
    }
    const validator = new Validator();
    await validator.validate(category, schema);

    const newCategory = await models.Category.create(category);
    res.status(201).send({
      message: 'Category created successfully',
      data: newCategory
    })
  } catch (err) {
    res.status(500).send({
      message: err.message
    })
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const category = await models.Category.findByPk(id);
    if (!category) {
      return res.status(404).send({
        message: 'Category not found'
      })
    }
    res.status(200).send({
      message: 'Category found',
      data: category
    })
  } catch (err) {
    res.status(500).send({
      message: err.message
    })
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const category = await models.Category.findByPk(id);

    //Validate input
    const categoryData = {
      name: req.body.name
    }
    const schema = {
      name: { type: 'string', optional: false, max: '100' }
    }
    const validator = new Validator();
    await validator.validate(categoryData, schema);

    if (!category) {
      return res.status(404).send({
        message: 'Category not found'
      })
    }

    const updatedCategory = await category.update(categoryData);
    res.status(200).send({
      message: 'Category updated successfully',
      data: updatedCategory
    })
  } catch (err) {
    res.status(500).send({
      message: err.message
    })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id;
    const category = await models.Category.findByPk(id);
    if (!category) {
      return res.status(404).send({
        message: 'Category not found'
      })
    }
    await category.destroy();
    res.status(200).send({
      message: 'Category deleted successfully'
    })
  } catch (err) {
    res.status(500).send({
      message: err.message
    })
  }
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}