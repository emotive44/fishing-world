import { useEffect, useState } from 'react';

import { getAverageImgColor } from '@utils';


const useImageData = (imgsData: string[], classes: any) => {
  const [imgOrientationClasses, setImgOrientationClasses] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  // return image width, height and color, after image loaded
  const getImgData = (src: string) => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "";
  
    return new Promise<any[]>((resolve) => {
      img.onload = () => {
        const { r, g, b } = getAverageImgColor(img);
        resolve([img.width, img.height, `rgb(${r}, ${g}, ${b})`]);
      }
    });
  }
  
  // waited for image to be loaded and depends of width and height
  // return css module class (orientation)
  const imageOrientation = async (src: string, classes: any) => {
   const [width, height, color] = await getImgData(src);
   let type = '';
    if(width > height && width > 1560) {
      type = classes.panorama;
    } else if(width > height) { 
      type = classes.landscape; 
    } else if(height > width) {
      type = classes.portrait;
    } else if(height === width && width > 700) {
      type = classes['big-square'];
    } else if(height === width) {
      type = classes.square;
    }

    return { type, color }
  }
  
  useEffect(() => {
    // array with promises, which result is image class
    const data: Promise<any>[] = imgsData.map(async(img) => {
      return await imageOrientation(img, classes);
    });

    (async() => {
      for(let i = 0; i < data.length; i++) {
        const { type, color } = await data[i];
        setColors((prev) => [...prev, color])
        setImgOrientationClasses((prev) => [...prev, type]);
      }
    })();
  }, []); 

  return {
    imgOrientationClasses,
    colors,
  };
}

export default useImageData;
