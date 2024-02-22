
import Image from 'next/image';
import React from 'react';

export interface SanityImageType {
    _type: 'image';
    alt: string;
    asset: {
      _type: 'reference';
      _ref: string; 
    };
  }
  

const SanityImage = ({image }:{ image: SanityImageType }) => {
  return <Image src={image.asset._ref} alt={image.alt} />;
};

export default SanityImage;