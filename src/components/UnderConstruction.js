import React from 'react';
import { Link } from 'gatsby';
import tw from "twin.macro";
import UnderConstructionImage from '../../page-under-construction.gif';

import {CustomH2} from './CustomHeadings';
import CustomContainer from './CustomContainer';
import UnderConstructionIllustration from '../../pixeltrue-settings.svg';

const UnderConstruction = () => <CustomContainer tw='py-20'>
    <div tw='flex items-center flex-wrap'>
            <div tw='w-full md:w-1/2'>
                <img src={UnderConstructionIllustration} alt="This page is under construction" />
                </div>
<div tw='w-full md:w-1/2 text-center'>
    <CustomH2 tw="mb-8">This page is under construction</CustomH2>
    <Link to="/" style={{ backgroundColor: '#667eea' }} tw="text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">Back to the Home Page</Link>
</div>
</div>
</CustomContainer>;

export default UnderConstruction;