import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'avatar',
      type: 'relationship',
      relationTo: 'media',
      hooks: {
        beforeValidate: [
          async ({ data, req }) => {
            console.log('before validate - data', data)
            if (data?.avatar) {
              return data
            }
          },
        ],
      },
      admin: {
        components: {
          Cell: 'src/collections/CustomImageCell',
        },
      },
    },
  ],
}
