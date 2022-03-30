import React from 'react'

export default function GalleryImage({ url, name, urlMin }) {
  return (
    <a className='lg__image' href={url}>
      <figure>
        <img loading='lazy' src={urlMin} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </a>
  )
}