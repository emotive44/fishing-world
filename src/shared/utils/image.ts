export const getAverageImgColor = (imgEl: any) => {
  let i = -4;
  let count = 0;
  let data, width, height;
  const blockSize = 5; // only visit every 5 pixels
  const rgb = { r:0, g:0, b:0 };
  const defaultRGB = { r:0, g:0, b:0 }; // for non-supporting envs
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch(e) {
    return defaultRGB;
  }

  const length = data.data.length;
  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  rgb.r = Math.floor(rgb.r / count);
  rgb.g = Math.floor(rgb.g / count);
  rgb.b = Math.floor(rgb.b / count);

  return rgb;
}
