import React, { useState } from 'react';
import axios from 'axios';
import tw from 'twin.macro';
import CustomContainer from './CustomContainer';
import { CustomH2, CustomH3 } from './CustomHeadings';
import { Link } from 'gatsby';
import ContactFormIllustration from '../../pixeltrue-support-1.svg';
import FormSuccessIllustration from '../../pixeltrue-sleeping-1.svg';
import FormSubmittingIllustration from '../../pixeltrue-time-management-1.svg';

const FormSuccess = () => (
  <>
    <div tw='w-full md:w-1/2'>
      <img src={FormSuccessIllustration} />
    </div>
    <div tw='w-full md:w-1/2 order-first md:order-1 text-center'>
      <CustomH2 tw='mb-6'>Thank you</CustomH2>
      <CustomH3 tw='my-4 mb-8'>
        Your message is sent successfully. We'll be in touch!
      </CustomH3>
      <Link
        to='/'
        style={{ backgroundColor: '#667eea' }}
        tw='text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider'
      >
        Back to the Home Page
      </Link>
    </div>
  </>
);

const FormSubmitting = () => (
  <>
    <div tw='w-full md:w-1/2'>
      <img src={FormSubmittingIllustration} />
    </div>
    <div tw='w-full md:w-1/2 order-first md:order-1 text-center'>
      <CustomH2 tw='mb-6'>Sending your message to HQ</CustomH2>
    </div>
  </>
);

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({ ...serverState, status: { ok, msg } });

    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });

    axios({
      method: 'post',
      url: 'https://getform.io/f/708a506e-8995-4032-a0a3-563dc403f1a0',
      data: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then(() => handleServerResponse(true, 'Thanks!', form))
      .catch((err) =>
        handleServerResponse(false, err.response.data.error, form)
      );
  };

  return (
    <CustomContainer tw='p-10'>
      <div tw='flex items-center flex-wrap'>
        {serverState.submitting && <FormSubmitting />}
        {serverState.status && <FormSuccess />}
        {serverState.status === null && (
          <>
            <div tw='w-full md:w-1/2'>
              <img src={ContactFormIllustration} />
            </div>
            <div tw='w-full md:w-1/2 order-first md:order-1'>
              <CustomH2>Just say hi!</CustomH2>
              <form onSubmit={handleOnSubmit}>
                <div tw='mb-4'>
                  <label tw='block mb-2' htmlFor='name'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    tw='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='What is your name?'
                  />
                </div>
                <div tw='mb-4'>
                  <label tw='block mb-2' htmlFor='email'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    tw='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='What is your email address'
                  />
                </div>
                <div tw='mb-4'>
                  <label tw='block mb-2' htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='6'
                    tw='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='How can I help you?'
                  ></textarea>
                </div>
                <div>
                  <button
                    type='submit'
                    style={{ backgroundColor: '#667eea' }}
                    tw='text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider'
                    disabled={serverState.submitting}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </CustomContainer>
  );
};

export default ContactForm;
