import {createClient} from 'next-sanity'
 
export const client = createClient({
  projectId: 'ug2cwdy7',
  dataset: 'production',
  apiVersion: '2023-05-03',  
  useCdn: false,  
}) 