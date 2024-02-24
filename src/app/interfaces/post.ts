import { SanityImageType } from "@/components/image.tsx/sanityImage";

interface Post{
    path: string;
    content: string;
    _updatedAt: string;
    priority: number;  
    changeFrequency: string;
    title: string;
    description:string
    imageSanity: SanityImageType
  }
  
  export default Post;
  