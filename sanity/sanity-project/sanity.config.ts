import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',
  useCdn: true,
  projectId: 'ug2cwdy7',
  dataset: 'production',
  token: 'skYt3qI9qorB1ONiFnYmXrgNqSPOokKFVLUgqi8WbQfYKAIwhDJtff7SabriLNohRatvygk6AappXMPgWS6cKJwcY1naInArKLtJhI2wDQ9kqbgjrib5OLcMB79asjDDBNbB49QfSu2oSpFugQbWDOP2JftLftFahuEhyYLVahlX1ouPKVUV',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
