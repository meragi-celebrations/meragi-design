import classNames from 'classnames'
import React, { HTMLAttributes, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { Loader } from '../../'
import './Image.scss'

interface Props extends HTMLAttributes<HTMLImageElement> {
  alt: string
  src: string
  fallbackSrc: string
}

export const Image: React.FC<Props> = ({
  alt,
  src,
  fallbackSrc,
  className,
  ...rest
}) => {
  const [imageSrc, setImageSrc] = useState(src)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isZoomed, setIsZoomed] = useState(false)
  const imageClasses = classNames('image', className)

  const handleError = () => {
    setError(true)
    setLoading(false)
    setImageSrc(fallbackSrc)
  }

  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <div className="image-container">
      {loading && <Loader />}
      {isZoomed ? (
        <div className="zoom-container">
          <TransformWrapper limitToBounds={false}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <div className="zoom-buttons">
                  <button onClick={() => zoomIn()}>+</button>
                  <button onClick={() => zoomOut()}>-</button>
                  <button onClick={() => resetTransform()}>reset</button>
                  <button onClick={() => setIsZoomed(false)}>X</button>
                </div>
                <TransformComponent
                  wrapperStyle={{ width: '100%', height: '100%' }}>
                  <img
                    {...rest}
                    className="zoom-image"
                    src={imageSrc}
                    alt={alt}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      ) : (
        <img
          {...rest}
          className={imageClasses}
          src={imageSrc}
          alt={alt}
          onError={handleError}
          onLoad={handleLoad}
          onClick={() => setIsZoomed(true)}
        />
      )}
    </div>
  )
}
