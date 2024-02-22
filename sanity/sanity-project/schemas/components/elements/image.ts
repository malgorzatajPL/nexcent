export default {
  name: 'imageSanity',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,  
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Describe the content of the image for accessibility.',
      validation: (Rule:any) => Rule.required(),
    }, 
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
};
