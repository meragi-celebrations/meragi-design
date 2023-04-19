import React, { useState } from "react";
import "./Image.scss";
import { Loader } from "./../Loader";

export interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  fallback?: string;
  preview?: boolean | string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
  loading?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  fallback,
  preview,
  onClick,
  className,
  style,
  wrapperClassName,
  wrapperStyle,
  loading = true,
}) => {
  const [loadingState, setLoadingState] = useState(loading);
  const [error, setError] = useState(false);

  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const handlePreviewOpen = () => {
    setIsPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
  };

  const handleImgLoad = () => {
    setLoadingState(false);
  };

  const handleImgError = () => {
    setLoadingState(false);
    setError(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const imageWrapperClass = wrapperClassName ? `image-wrapper ${wrapperClassName}` : "image-wrapper";

  const imageClass = className ? `image ${className}` : "image";

  const imageStyle = style ? style : {};

  const imageWrapperStyle = wrapperStyle ? wrapperStyle : {};

  const renderPlaceholder = () => {
    if (fallback) {
      return (
        <div className="placeholder">
          <img src={fallback} alt="Failed to load" />
        </div>
      );
    } else {
      return (
        <div className="placeholder">
          <span>Failed to load image</span>
        </div>
      );
    }
  };

  return (
    <div className={imageWrapperClass} style={imageWrapperStyle} onClick={handleClick}>
      {loadingState && <Loader />}
      {error && fallback && typeof fallback !== 'string' && <div className="placeholder">{fallback}</div>}
      {!error &&
        <img src={src} alt={alt} onLoad={handleImgLoad} onError={handleImgError} width={width} height={height} className={imageClass} style={imageStyle} />
      }
      {preview && (
       <>
       <div className="preview" onClick={handlePreviewOpen}>
         <img src={src} alt={alt} />
       </div>
       {isPreviewOpen && (
         <div className="preview-modal" onClick={handlePreviewClose}>
           <img src={src} alt={alt} />
         </div>
       )}
     </>
      )}
    </div>
  );
};

export default Image;
