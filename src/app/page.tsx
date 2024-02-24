import { client } from "@/CMS/sanityClient"; 
import Post from "./interfaces/post";
import PostCard from "@/components/post/post";
 

async function getData() {
  const query = `
  *[_type == 'posts' && !(_id in path("drafts.**")) ] {
    path,
      content,
    _updatedAt,
    priority,
    changeFrequency,
      title,
      description,
imageSanity
  }
  `
  const data = await client.fetch(query);
  console.log(data)
return data
} 
export default async function Page({params} :
    {params: { 'dynamic-path'?: string[] }}) {
    const data: Post[] = await getData()
  return (
   <> 
       <div>
      {data.map((post:Post, index:any) => (
        <PostCard key={index} title={post.title} imageSanity={post.imageSanity} />
      ))}
    </div>
   </>
  );
}
