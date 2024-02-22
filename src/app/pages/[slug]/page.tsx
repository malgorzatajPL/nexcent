// Dynamic.tsx
import React from 'react';
import { GetStaticProps } from 'next';
import { client } from '@/CMS/sanityClient'; 
import Page from '../../interfaces/post';

interface DynamicProps {
  data: Page[];
}

const Dynamic: React.FC<DynamicProps> = ({ data }) => {
  return (
    <>
      <h1>Dynamic Page</h1>
      <ul>
        {data.map((page) => (
          <li key={page.path}>
            <p>{page.title}</p>
            
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps<DynamicProps> = async () => {
  const query = `
    *[_type == 'posts' && !(_id in path("drafts.**")) ] {
      path,
      content,
      _updatedAt,
      priority,
      changeFrequency,
      title,
      imageSanity
    }
  `;

  try {
    const data: Page[] = await client.fetch(query);

    return {
      props: {
        data,
      },
      revalidate: 1, // Optional: Enable Incremental Static Regeneration
    };
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);

    return {
      props: {
        data: [],
      },
      revalidate: 1,
    };
  }
};

export default Dynamic;
