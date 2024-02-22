import { defineType } from 'sanity'
 

export default defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    {
      name: 'component',
      type: 'string',
      hidden: true,
      initialValue: 'Carousel',
    },
    {
      name: 'maxSlides',
      title: 'Max Number of Slides',
      type: 'number',
      validation: (Rule) => [Rule.required(), Rule.min(1), Rule.max(12)],
      initialValue: 1,
      description: `Max slides.`,
    },
    {
      name: 'animation',
      title: 'Slide transition animation',
      type: 'string',
      options: {
        list: [
          {
            title: 'Fade',
            value: 'fade',
          },
          {
            title: 'Slide',
            value: 'slide',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'fade',
    }, 
  ],
})
