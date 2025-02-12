import React from 'react'
import Image from 'next/image'
import { type DefaultServerCellComponentProps } from 'payload'

const MyComponent = async ({ cellData, payload }: DefaultServerCellComponentProps) => {
    
  // thanks to Jarrod for the following simplification, payload
  // is already available in the props so no need to load config
  // and get payload again

  const media = await payload.findByID({
    collection: 'media',
    id: cellData,
  })
  console.log(media)

  return (
    <div
      style={{
        position: 'relative',
        width: '80px',
        height: '80px',
      }}
    >
      <Image
        src={media.url!}
        alt={media.alt}
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
export default MyComponent
