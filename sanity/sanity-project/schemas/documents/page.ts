import { defineType } from 'sanity'
import imageSanity from '../components/elements/image'
import components from '../components/components'

export default defineType({
  title: 'Posts',
  name: 'posts',
  type: 'document',
  fields: [
    {
      title: 'URL',
      name: 'path',
      type: 'string',
      validation: (Rule) => [Rule.required(), Rule.regex(/^\/.*/), Rule.lowercase()],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description:
        'Title of page',
    }, 
    imageSanity,
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: components.map((component) => ({type: component.name})),
    },
  ],
  preview: {
    select: {   
      title: 'title',
    },
    prepare(selection) {
      const { title} = selection
      return {
        title: title || 'No title set', 
      }
    },
  },
})
