import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import {CustomH2} from './CustomHeadings';
import CustomContainer from './CustomContainer';
import NotFoundIllustration from '../../pixeltrue-error-1.svg';

const Page404 = () => <CustomContainer tw='py-20'>
    <div tw='flex items-center flex-wrap'>
            <div tw='w-full md:w-1/2'>
                <img src={NotFoundIllustration} alt="This page is not found"/>
                </div>
<div tw='w-full md:w-1/2 text-center'>
    <CustomH2 tw="mb-8">This page is not found</CustomH2>
    <Link to="/" style={{ backgroundColor: '#667eea' }} tw="text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">Back to the Home Page</Link>
</div>
</div>
</CustomContainer>;

export default Page404;
