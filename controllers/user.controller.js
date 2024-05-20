const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function register(req, res) {
  try {
    const isUserExist = await models.User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (isUserExist) {
      return res.status(409).send({
        message: 'User already exists'
      });
    }

    const hash = await bcryptjs.hash(req.body.password, 10);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hash
    };

    const newUser = await models.User.create(user);

    res.status(201).send({
      message: 'User created successfully',
      data: {
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
}

async function login(req, res) {
  try {
    const user = await models.User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (!user) {
      return res.status(404).send({
        message: 'User not found'
      });

    } else {
      const isMatch = await bcryptjs.compare(req.body.password, user.password);
      if (isMatch) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_KEY);
        return res.status(200).send({
          message: 'User logged in successfully',
          data: {
            token: token
          }
        });
      } else {
        return res.status(401).send({
          message: 'Invalid credentials'
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
}

module.exports = {
  register,
  login
}