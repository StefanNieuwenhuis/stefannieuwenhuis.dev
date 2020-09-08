import React from 'react';
import tw from 'twin.macro';

const Hero = ({ children }) => (
  <div
    tw='py-20'
    style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
  >
    {children}
  </div>
);

export default Hero;
