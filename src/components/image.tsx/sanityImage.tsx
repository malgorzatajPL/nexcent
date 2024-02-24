
import Image from 'next/image';
import React from 'react';
import { urlForImage } from '../../../sanity/lib/image';

export interface SanityImageType {
    _type: 'image';
    alt: string;
    asset: {
      _type: 'reference';
      _ref: any; 
    };
  }
  

const SanityImage = ({image }:{ image: SanityImageType }) => {
  const imageUrl = urlForImage(image.asset._ref);

  if (!imageUrl) {
    return null;  
  }

 return <Image src={imageUrl} alt={image.alt} width={200} height={200} unoptimized={true} />;
};

export default SanityImage;