
export default {
    name: 'button',
    title: 'Button',
    type: 'object',
    fields: [ 
      {
        name: 'link',
        title: 'Link',
        type: 'link',  
        validation: (Rule: any) => Rule.required(), 
      },
      {
        name: 'style',
        title: 'Button Style',
        type: 'string',
        options: {
          list: ['primary', 'secondary', 'tertiary'],
        },
      },
    ],
    preview: {
      select: {
        title: 'text',
        subtitle: 'link.url',
      },
    },
  };
  