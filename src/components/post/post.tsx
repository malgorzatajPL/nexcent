import React from 'react';
import SanityImage, { SanityImageType } from '../image.tsx/sanityImage';
 
interface PostProps {
  title: string;
  image: SanityImageType;
}
 
const PostCard: React.FC<PostProps> = ({ title, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <SanityImage image={image}/>
    </div>
  );
};

export default PostCard;