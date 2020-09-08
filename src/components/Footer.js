import React from 'react';
import tw from 'twin.macro';
import CustomContainer from './CustomContainer';

const Footer = () => (
  <footer>
    <CustomContainer tw='pt-10 pb-6'>
      <div tw='w-full text-center'>
        <h5 tw='mb-6'>
          © 2020 Stefan Nieuwenhuis IT Consulting
        </h5>
      </div>
    </CustomContainer>
  </footer>
);

export default Footer;
