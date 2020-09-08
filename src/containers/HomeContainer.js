import React from 'react';
import tw from 'twin.macro';

import { Link } from 'gatsby';

import Hero from '../components/Hero';
import CustomContainer from '../components/CustomContainer';
import { CustomH2, CustomH3, CustomH4 } from '../components/CustomHeadings';

import WebDesignAndDevelopment from '../../pixeltrue-web-development-1.svg';
import Layout from '../components/Layout';

const CtaLink = tw(
  Link
)`bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider`;

const HomeContainer = () => (
  <Layout>
    <Hero>
      <CustomContainer>
        <CustomH2 tw='mb-2 text-white'>Stefan Nieuwenhuis</CustomH2>
        <CustomH3 tw='mb-8 text-gray-200'>
          I’m a freelance Front End Developer specializing in{' '}
          <strong>React</strong>, <strong>Angular</strong>,{' '}
          <strong>Web Components</strong> and in building a web interface with
          better user experiences. Do you need a website?
        </CustomH3>
        <CtaLink to='/services'>See my services</CtaLink>
      </CustomContainer>
    </Hero>
    <section>
      <CustomContainer tw='p-10'>
        <CustomH2 tw='mb-8 text-gray-800'>What I do</CustomH2>
        <div tw='flex items-center flex-wrap mb-20'>
          <div tw='w-full md:w-1/2'>
            <CustomH4>Web Design and Development</CustomH4>
            <p tw='text-gray-600 mb-8'>
              I build websites that help you improve your brand and business
              needs. They are lightning fast, SEO ready, and mobile responsive
              on the fly.
            </p>
          </div>
          <div tw='w-full md:w-1/2'>
            <img
              src={WebDesignAndDevelopment}
              alt='Web Design and Development'
            />
          </div>
        </div>
      </CustomContainer>
    </section>
    <section style={{ backgroundColor: '#667eea' }}>
      <CustomContainer tw='text-center py-20'>
        <CustomH2 tw='mb-6 text-center text-white'>Let's talk</CustomH2>
        <CustomH3 tw='my-4 mb-8 text-white'>
          I would be happy to help you. Just send me a message about what I can
          do for you.
        </CustomH3>
        <Link
          to='/contact'
          tw='bg-white font-bold rounded-full mt-8 py-4 px-8 shadow-lg uppercase tracking-wider'
        >
          Let's talk
        </Link>
      </CustomContainer>
    </section>
  </Layout>
);

export default HomeContainer;
