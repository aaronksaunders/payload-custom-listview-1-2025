// components/admin/MediaCollectionView.jsx
'use server'
import React from 'react'
import { Media } from '../payload-types'
import { Button, Gutter } from '@payloadcms/ui'
import Link from 'next/link'
import ClientPagination from './ClientPagination'

/**
 * This is a custom list view for the Media collection.
 * It is used to display the media items in a grid.
 * It also includes a pagination component.
 *
 * @param data - The data to display.
 * @returns A React component.
 *
 * @see https://github.com/payloadcms/payload/blob/main/packages/ui/src/views/List/index.tsx#L109
 */
const MediaCollectionView = async ({ data }: any) => {
  return (
    <Gutter>
      <h1>Media Collection</h1>

      <Link href="/admin/collections/media/new">
        <Button>New</Button>
      </Link>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 450px)',
          gap: '32px',
          padding: '16px',
        }}
      >
        {data?.docs?.map((item: Media) => (
          <Link href={`/admin/collections/media/${item.id}`} key={item.id}>
            <div
              style={{
                width: '450px',
                height: '450px',
                overflow: 'hidden',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            >
              <img
                src={item.url!}
                alt={item.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
            </div>
          </Link>
        ))}
      </div>

      <div>
        <ClientPagination />
      </div>
    </Gutter>
  )
}

export default MediaCollectionView
