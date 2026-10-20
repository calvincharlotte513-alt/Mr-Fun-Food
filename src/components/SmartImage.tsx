import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackSrc = '/assets/aistudio/IMG-20261020-WA0007_12c0c704.jpg',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Normalize path if necessary for different hosting environments
  const cleanSrc = hasError
    ? fallbackSrc
    : src?.startsWith('http') || src?.startsWith('/')
    ? src
    : `/${src}`;

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <img
        src={cleanSrc}
        alt={alt || 'Mr Fun GizzDODO Food Photography'}
        className={`${className} transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-80 filter blur-xs'
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
          }
        }}
        loading="lazy"
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};
