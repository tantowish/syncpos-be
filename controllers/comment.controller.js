const models = require('../models');
const Validator = require('fastest-validator');

async function index(req, res) {
  try {
    const comments = await models.Comment.findAll();
    res.status(200).send({
      message: 'Success',
      data: comments
    })
  } catch (err) {
    res.status(500).send({
      message: err.message
    })
  }
}

async function store(req, res) {
  try {
    //Validate Input and Data
    const schema = {
      content: { type: 'string', optional: false, max: '5000' },
      postId: { type: 'number', optional: false },
      userId: { type: 'number', optional: false }
    };

    const validator = new Validator();
    const validationResponse = await validator.validate(req.body, schema);

    if (validationResponse !== true) {
      return res.status(400).send({
        message: 'Validation failed',
        data: validationResponse
      })
    }

    const comment = await models.Comment.create(req.body);

    res.status(201).send({
      message: 'Comment created successfully',
      data: comment
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
    const comment = await models.Comment.findByPk(id);
    if (!comment) {
      return res.status(404).send({
        message: 'Comment not found'
      })
    }

    //Validate Input and Data
    const schema = {
      content: { type: 'string', optional: false, max: '5000' },
      postId: { type: 'number', optional: false },
      userId: { type: 'number', optional: false }
    };

    const validator = new Validator();
    await validator.validate(req.body, schema);

    const updatedComment = await comment.update(req.body);
    return res.status(200).send({
      message: 'Comment updated successfully',
      data: updatedComment
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
    const comment = await models.Comment.findByPk(id);
    if (!comment) {
      return res.status(404).send({
        message: 'Comment not found'
      })
    }
    return res.status(200).send({
      message: 'Comment found',
      data: comment
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
    const comment = await models.Comment.findByPk(id);
    if (!comment) {
      return res.status(404).send({
        message: 'Comment not found'
      })
    }
    await comment.destroy();
    return res.status(200).send({
      message: 'Comment deleted successfully'
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