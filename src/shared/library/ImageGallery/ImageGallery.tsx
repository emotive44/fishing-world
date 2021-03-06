import React, { FC } from 'react';
import classes from './ImageGallery.module.scss';
import { useImageData } from '@hooks';


type TSize = 'small' | 'normal' | 'big';

interface ImageGalleryProps {
  imgsData         : string[],
  className       ?: string,
  size            ?: TSize,
}

const ImageGallery:FC<ImageGalleryProps> = ({ imgsData, className, size }) => {
  // get array with image orientation classes depend by imgData
  const { imgOrientationClasses } = useImageData(imgsData, classes);

  let rems = 15;
  if(size === 'big') {
    rems = 20;
  } else if(size === 'small') {
    rems = 10;
  }

  const renderImgs = () => {
    return imgsData.map((img, i) => {
      return (
        <img  
          alt       = ""
          key       = {i}
          src       = {img}
          className = {imgOrientationClasses[i]}
        />
      );
    })
  }

  return (
    <div 
      className={[classes.gallery, className].join(' ')}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${rems}rem, 1fr))`, gridAutoRows: `${rems}rem` }}
    >
      {renderImgs()}
    </div>
  );
}

export default ImageGallery;