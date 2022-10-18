import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const ContactForm = () => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState(
    'Something Went Wrong ..'
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const save = async (data) => {
    try {
      // const url = `http://localhost:4000/api/saveUserDetails`;
      const url = `http://vardhanworld.com/api/saveUserDetails`;
      const res = await axios.post(url, data);
      console.log('res', res);
      if (res.status == 200) {
        reset();
        setModalIsOpen(true);
        setResponseMessage('Your form has been submitted.. ');
      }
    } catch (err) {
      console.log(err);
      setModalIsOpen(true);
      setResponseMessage('something went wrong .Please try again');
    }
  };

  return (
    <>
      <Modal
        isOpen={ModalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className='popup-send'
      >
        <div className='block-popup'>
          <h4>{responseMessage} </h4>
          <h4>Thank you.</h4>
        </div>
        <span
          onClick={() => setModalIsOpen(false)}
          className='close-btn'
        ></span>
      </Modal>
      <div className='frm-wrap'>
        <form onSubmit={handleSubmit(save)}>
          <span className='text-succes'></span>
          <div className='row'>
            <div className=' col-md-12'>
              <div className='form-group'>
                <label>Full Name</label>
                <input
                  type='text'
                  {...register('f_name', {
                    required: 'Required Input',
                  })}
                  className='form-control'
                  placeholder='Enter Your Full Name'
                />
                {errors?.f_name && (
                  <span className='text-danger'>{errors?.f_name?.message}</span>
                )}
                <span className='text-danger'></span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className=' col-md-6'></div>
            <div className=' col-md-6'></div>
          </div>

          <div className='form-group'>
            <label>Contacting as an</label>
            <div className='d-flex'>
              <label className='customradio d-flex'>
                Individual{' '}
                <input
                  type='radio'
                  name='contact_type'
                  {...register('contact_type')}
                  value='1'
                />
              </label>
              <label className='customradio d-flex'>
                Organization{' '}
                <input
                  type='radio'
                  {...register('contact_type')}
                  name='contact_type'
                  value='2'
                />
              </label>
            </div>
          </div>
          <div id='indivisul_div'>
            <div className='row'>
              <div className=' col-md-6'>
                <div className='form-group'>
                  <label>Email Address</label>
                  <input
                    type='email'
                    {...register('email', {
                      required: 'Required Input',
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Invalid Email',
                      },
                    })}
                    name='email'
                    className='form-control'
                    placeholder='Enter Your Email Address'
                  />
                  {errors?.email && (
                    <span className='text-danger'>
                      {errors?.email?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className=' col-md-6'>
                <div className='form-group'>
                  <label>Phone Number</label>
                  <input
                    type='tel'
                    {...register('phone', {
                      required: 'Required Input',
                      minLength: {
                        value: 10,
                        message: 'Invalid Phone Number',
                      },
                      maxLength: {
                        value: 10,
                        message: 'Invalid Phone Number',
                      },
                    })}
                    name='phone'
                    className='form-control'
                    placeholder='Enter Your Phone Number'
                  />
                  {errors?.phone && (
                    <span className='text-danger'>
                      {errors?.phone?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className='row'>
              <div className=' col-md-6'></div>
              <div className=' col-md-6'></div>
            </div>
            <div className='row'>
              <div className=' col-md-6'>
                <div className='form-group'>
                  <label>Services</label>
                  <select
                    className='form-control'
                    name='services'
                    {...register('services', {
                      required: 'Required Input',
                    })}
                  >
                    <option value={''}>Select Option</option>
                    <option value='Startup Consulting'>
                      Startup Consulting
                    </option>
                    <option value='Monetization Models'>
                      Monetization Models
                    </option>
                    <option value='GO TO MARKET STRATEGY'>
                      GO TO MARKET STRATEGY
                    </option>
                    <option value='INVESTOR PITCH MODELS'>
                      INVESTOR PITCH MODELS
                    </option>
                    <option value='SALES AND MARKETING CONSULTING'>
                      SALES AND MARKETING CONSULTING
                    </option>
                    <option value='BRANDING'>BRANDING</option>
                    <option value='IMAGE CONSULTING'>IMAGE CONSULTING</option>
                    <option value='PERSONAL COUNSELLING'>
                      PERSONAL COUNSELLING
                    </option>
                    <option value='CAREER COUNSELLING'>
                      CAREER COUNSELLING
                    </option>
                    <option value='DIGITAL MARKETING'>DIGITAL MARKETING</option>
                    <option value='TECHNOLOGY SERVICES'>
                      TECHNOLOGY SERVICES
                    </option>
                    <option value='UI/UX'>UI/UX</option>
                    <option value='BUSINESS CONSULTING'>
                      BUSINESS CONSULTING
                    </option>
                  </select>
                  {errors?.services && (
                    <span className='text-danger'>
                      {errors?.services?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className=' col-md-6'></div>
            </div>
          </div>

          <div className='row'>
            <div className=' col-md-6'>
              <div className='form-group'>
                <label>Date</label>

                <input
                  type='date'
                  className='form-control'
                  name='appointment_date'
                  id='appointment_date'
                  {...register('appointment_date', {
                    required: 'Required Input',
                  })}
                />

                <div className='input-group-addon'>
                  <i className='ion-android-calendar' aria-hidden='true'></i>
                </div>
                {errors?.appointment_date && (
                  <span className='text-danger'>
                    {errors?.appointment_date?.message}
                  </span>
                )}
              </div>
            </div>
            <div className=' col-md-6'>
              <div className='form-group'>
                <label>Select Time Slot</label>
                <div className='input-group time'>
                  <select
                    className='form-control'
                    name='appointment_time'
                    {...register('appointment_time', {
                      required: 'Required Input',
                    })}
                    id='availability_hours'
                  >
                    <option value=''>Select Availability</option>
                    <option value='10:00'>10:00 am</option>
                    <option value='10:30'>10:30 am</option>
                    <option value='11:00'>11:00 am</option>
                    <option value='11:30'>11:30 am</option>
                    <option value='12:00'>12:00 pm</option>
                    <option value='12:30'>12:30 pm</option>
                    <option value='13:00'>1:00 pm</option>
                    <option value='13:30'>1:30 pm</option>
                    <option value='14:00'>2:00 pm</option>
                    <option value='14:30'>2:30 pm</option>
                    <option value='15:00'>3:00 pm</option>
                    <option value='15:30'>3:30 pm</option>
                    <option value='16:00'>4:00 pm</option>
                    <option value='16:30'>4:30 pm</option>
                    <option value='17:00'>5:00 pm</option>
                    <option value='17:30'>5:30 pm</option>
                    <option value='18:00'>6:00 pm</option>
                    <option value='18:30'>6:30 pm</option>
                  </select>

                  <div className='input-group-addon'>
                    <i className='ion-ios-clock-outline' aria-hidden='true'></i>
                  </div>
                </div>
                {errors?.appointment_time && (
                  <span className='text-danger'>
                    {errors?.appointment_time?.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className='form-group'>
            <label>Message</label>
            <textarea
              {...register('message')}
              className='form-control'
              name='message'
              placeholder='Leave Your Message'
            ></textarea>
            <span className='text-danger'></span>
          </div>
          <div className='form-group text-left'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
