import React from 'react';
import tw from 'twin.macro';
import CustomContainer from './CustomContainer';
import { Link } from 'gatsby';
import { CustomH2, CustomH3 } from './CustomHeadings';

const CallToAction = () => (
  <section style={{ backgroundColor: '#667eea' }}>
    <CustomContainer tw='text-center py-20'>
      <CustomH2 tw='mb-6 text-center text-white'>Let's talk</CustomH2>
      <CustomH3 tw='my-4 mb-8 text-white'>
        I would be happy to help you. Just send me a message about what I can do
        for you.
      </CustomH3>
      <Link
        to='/contact'
        tw='bg-white font-bold rounded-full mt-8 py-4 px-8 shadow-lg uppercase tracking-wider'
      >
        Let's talk
      </Link>
    </CustomContainer>
  </section>
);

export default CallToAction;
