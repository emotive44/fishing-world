import React, { FC, useState } from 'react';
import classes from './Carousel.module.scss';
import { useImageData } from '@hooks';

interface CarouselProps {
  imgsData           : string[],  // array with img urls
  clickImgChange    ?: boolean,  // if you want to slide by click image
  withFooter        ?: boolean, // if want to show footer with small images navigation
}

const Carousel: FC<CarouselProps> = ({
  imgsData,
  withFooter,
  clickImgChange,
}) => {
  // get array with image orientation classes depend by imgData
  const { imgOrientationClasses, colors } = useImageData(imgsData, classes);
  const [imgIndx, setImgIndx] = useState(1);

  const getPreviousImg = () => {
    // check, because we want to show minimum 2 images
    if(imgIndx === 0) {
      return;
    }

    setImgIndx(prev => prev - 1);
  }

  const getNextImg = () => {
    // check, because we want to show minimum 2 images
    if(imgIndx === imgsData.length - 1) {
      return;
    }

    setImgIndx(prev => prev + 1);
  }

  // current images, which user see
  let imagesContent = imgsData.map((img, i) => {
    const imageClasses = [classes.img];
    imageClasses.push(imgOrientationClasses[i]);

    if(i === imgIndx) {
      imageClasses.push(classes.current);
    } else if(i === imgIndx - 1) {
      imageClasses.push(classes.previous);
    } else if(i === imgIndx + 1) {
      imageClasses.push(classes.next);
   }

    // change image by click on image
    const changeImage = () => {
      if(imageClasses.includes(classes.next)) {
        getNextImg();
      } else if(imageClasses.includes(classes.previous)) {
        getPreviousImg();
      }
    }

    const cursorStyles: any = {};
    if(imageClasses.includes(classes.current)) {
      cursorStyles.cursor = 'auto';
    } else {
      cursorStyles.cursor = 'pointer';
    }
    
    let styles = { background: colors[i] };
    if (clickImgChange) {
      styles = { ...styles, ...cursorStyles };
    }
    
    return (
      <div 
        key               = {i} 
        style             = {styles}
        className         = {imageClasses.join(' ')}
        onClick           = {clickImgChange ? changeImage : () => {}}
      >
        <img src={img} alt="" />
      </div>
    );
  });

  let footerContent: any = null;
  const imagesClasses = [classes.images];
  if(withFooter) {
    imagesClasses.push(classes['with-footer']);

    footerContent = imgsData.map((img, i) => {
      const styles = {
        backgroundImage: `url(${img})`,
        opacity: `${imgIndx === i ? '1' : '0.6'}` // to show current image
      }

      return (
        <div
          key             = {i}
          style           = {styles}
          className       = {classes['img-footer']}
          onClick         = {() => setImgIndx(i)}
        />
      );
    });
  }

  return (
    <article className={classes.carousel}>
      {!clickImgChange && (
        <div className={[classes.arrow, classes.left].join(' ')} onClick={getPreviousImg}>
          <i className="fas fa-arrow-left" />
        </div>
      )}
      <div className={classes.main}>
        <div className={imagesClasses.join(' ')}> {imagesContent} </div>
        {withFooter && (
          <div className={classes['footer-wrapper']} >
            <div className={classes.footer}> {footerContent} </div>
          </div>
        )}
      </div>
      {!clickImgChange && (
        <div className={[classes.arrow, classes.right].join(' ')} onClick={getNextImg}>
          <i className="fas fa-arrow-right" />
        </div>
      )}
    </article>
  );
}

export default Carousel;
