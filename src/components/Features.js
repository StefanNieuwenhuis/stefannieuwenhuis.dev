import React from 'react';
import tw from 'twin.macro';
import CustomContainer from './CustomContainer';
import { CustomH2 } from './CustomHeadings';

import WebDesignAndDevelopment from '../../pixeltrue-web-development-1.svg';

const CustomH4 = tw.h4`text-3xl text-gray-800 font-bold mb-3`;

const Features = () => (
  <section>
    <CustomContainer tw='p-10'>
      <CustomH2 tw='mb-8 text-gray-800'>What I do</CustomH2>
      <div tw='flex items-center flex-wrap mb-20'>
        <div tw='w-full md:w-1/2'>
          <CustomH4>Web Design and Development</CustomH4>
          <p tw='text-gray-600 mb-8'>
            I build websites that help you improve your brand and business
            needs. They are lightning fast, SEO ready, and mobile responsive on
            the fly.
          </p>
        </div>
        <div tw='w-full md:w-1/2'>
          <img src={WebDesignAndDevelopment} alt='Web Design and Development' />
        </div>
      </div>
    </CustomContainer>
  </section>
);

export default Features;
