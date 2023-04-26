import classNames from 'classnames'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { IoAdd, IoClose, IoRefresh, IoRemove } from 'react-icons/io5'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { Button } from '../Button'
import { Loader } from '../Loader'
import './Image.scss'

interface Props extends HTMLAttributes<HTMLImageElement> {
  /**
   * The alternative text to display if the image fails to load or cannot be displayed.
   * This text is important for accessibility purposes and should provide a description of the image content.
   */
  alt?: string
  /**
   * The URL of the image to display.
   */
  src: string
  /**
   * An optional fallback URL to use if the primary image fails to load.
   * This can be useful for handling network errors or slow connections.
   */
  fallbackSrc?: string
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
    setImageSrc(fallbackSrc ?? '')
  }

  const handleLoad = () => {
    setLoading(false)
  }

  useEffect(() => {
    setImageSrc(src)
  }, [src])

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
