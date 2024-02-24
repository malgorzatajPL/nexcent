import React from 'react';
import SanityImage, { SanityImageType } from '../image.tsx/sanityImage';
 
interface PostProps {
  title: string;
  imageSanity: SanityImageType;
}
 
const PostCard: React.FC<PostProps> = ({ title, imageSanity }) => {
  console.log(imageSanity, 'image sanity')
  return (
    <div>
      <h1>{title}</h1>
      <SanityImage image={imageSanity}/>
    </div>
  );
};

export default PostCard;