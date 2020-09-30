export default (imgUrl) => {
  return new Promise((resolve) => {
    // 一定要设置为let，不然图片不显示
    const image = new Image();
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    // 解决跨域问题
    image.setAttribute("crossOrigin", "anonymous");
    image.src = imgUrl;
    // image.onload为异步加载
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);
      var quality = 0.8;
      // 这里的dataurl就是base64类型
      // 使用toDataUrl将图片转换成jpeg的格式,不要把图片压缩成png，因为压缩成png后base64的字符串可能比不转换前的长！
      const dataurl = canvas.toDataURL("image/jpeg", quality);
      resolve(dataurl);
    };
  });
};
