const express = require('express');
const User = require('../models/users.model');

const router = express.Router();

router.get('/', (req, res) => res.send('Status: good'));

router.post('/saveUserDetails', async (req, res) => {
  try {
    const {
      f_name,
      contact_type,
      email,
      phone,
      services,
      appointment_date,
      appointment_time,
      message,
    } = req.body;

    const newUser = await User.create({
      name: f_name,

      contactAs: contact_type,
      email,
      phoneNumber: phone,
      services,
      date: appointment_date,
      slot: appointment_time,
      message,
    });
    if (newUser) {
      return res.status(200).json({
        status: 200,
        message: 'user created successfully',
        data: newUser,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: 'Failed to save User Details',
      });
    }
  } catch (error) {
    return res.status(404).json({
      status: 400,
      message: 'Something went wrong, Please try again',
      error: error.message,
    });
  }
});

router.get('/getUserDetails', async (req, res) => {
  try {
    const user = await User.find();
    if (user) {
      return res.status(200).json({
        status: 200,
        message: 'users details fetched successfully',
        data: user,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: 'Failed to get Users Details',
      });
    }
  } catch (error) {
    return res.status(404).json({
      status: 400,
      message: 'Something went wrong, Please try again',
      error: error.message,
    });
  }
});

router.get('/getUserDetails/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      return res.status(200).json({
        status: 200,
        message: 'user details fetched successfully',
        data: user,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: 'Failed to get User Details',
      });
    }
  } catch (error) {
    return res.status(404).json({
      status: 400,
      message: 'Something went wrong, Please try again',
      error: error.message,
    });
  }
});

router.delete('/getUserDetails/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      return res.status(200).json({
        status: 200,
        message: 'user deleted successfully',
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: 'Failed to delete',
      });
    }
  } catch (error) {
    return res.status(404).json({
      status: 400,
      message: 'Something went wrong, Please try again',
      error: error.message,
    });
  }
});

module.exports = router;
