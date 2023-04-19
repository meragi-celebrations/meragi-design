import classNames from 'classnames'
import React, { HTMLAttributes, useState } from 'react'
import { IoAdd, IoClose, IoRefresh, IoRemove } from 'react-icons/io5'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { Button, Loader } from '../../'
import './Image.scss'

interface Props extends HTMLAttributes<HTMLImageElement> {
  alt?: string
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
          <TransformWrapper limitToBounds={false} centerOnInit>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <div className="zoom-buttons">
                  <Button circular onClick={() => zoomIn()} icon={<IoAdd />} />

                  <Button
                    circular
                    onClick={() => zoomOut()}
                    icon={<IoRemove />}
                  />

                  <Button
                    circular
                    onClick={() => resetTransform()}
                    icon={<IoRefresh />}
                  />
                  <Button
                    circular
                    onClick={() => setIsZoomed(false)}
                    icon={<IoClose />}
                  />
                </div>
                <TransformComponent
                  wrapperStyle={{ width: '90%', height: '90%' }}>
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
