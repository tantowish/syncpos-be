const models = require('../models');
//Validator
const Validator = require('fastest-validator');
const jwt = require('jsonwebtoken'); // Importing JWT library

async function index(req, res) {
  try {
    const posts = await models.Post.findAll({
      include: [
        {
          model: models.User
        },
        {
          model: models.Category
        }
      ]
    });
    res.status(200).send({
      message: 'Success',
      data: posts
    })
  } catch (err) {
    res.status(500).send({
      message: err.message
    })
  }
}

async function store(req, res) {
  const userId = req.user;

  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryId: req.body.categoryId,
    userId: userId
  }

  //Validate Input and Data
  const schema = {
    title: { type: 'string', optional: false, max: '100' },
    content: { type: 'string', optional: false, max: '5000' },
    imageUrl: { type: 'string', optional: false },
    categoryId: { type: 'number', optional: false },
    userId: { type: 'number', optional: false }
  };

  //Validating
  const validator = new Validator();
  const validationResponse = await validator.validate(post, schema);

  if (validationResponse !== true) {
    return res.status(400).send({
      message: 'Validation failed',
      data: validationResponse,
    })
  }
  //To create the data, and insert to database, like laravel
  models.Post.create(post).then(() => {
    res.status(201).send({
      message: 'Post created successfully',
      data: post,
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  });
}

async function show(req, res) {
  try {
    const id = req.params.id
    const post = await models.Post.findByPk(id);
    if (!post) {
      return res.status(404).send({
        message: 'Post not found'
      })
    }
    return res.status(200).send({
      message: 'Post found',
      data: post
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
    const post = await models.Post.findByPk(id);

    const postData = {
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.imageUrl,
      categoryId: req.body.categoryId,
      userId: 1
    };

    if (!post) {
      return res.status(404).send({
        message: "Post not found"
      });
    }

    //Validate Input and Data
    const schema = {
      title: { type: 'string', optional: false, max: '100' },
      content: { type: 'string', optional: false, max: '5000' },
      imageUrl: { type: 'string', optional: false },
      categoryId: { type: 'number', optional: false },
      userId: { type: 'number', optional: false }
    };

    //Validating
    const validator = new Validator();
    const validationResponse = await validator.validate(postData, schema);

    if (validationResponse !== true) {
      return res.status(400).send({
        message: 'Validation failed',
        data: validationResponse
      });
    }

    await post.update(postData);

    res.status(200).send({
      message: "Post updated successfully",
      data: post
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error"
    });
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id;
    const post = await models.Post.findByPk(id);
    if (!post) {
      return res.status(404).send({
        message: "Post not found"
      });
    }
    await post.destroy();
    res.status(200).send({
      message: "Post deleted successfully"
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error"
    });
  }
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}