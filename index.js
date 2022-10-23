/* ---------------------------------------------

            </> with 💛 by Vishwa Gaurav
    GitHub : https://github.com/VishwaGauravIn
              Website : https://itsvg.in

------------------------------------------------ */

module.exports = imgConverter = (
  Dataurl,
  width = 500,
  height = 500,
  format = "png",
  scale = 1
) =>
  new Promise((resolve, reject) => {
    let canvas;
    let ctx;
    let img;

    img = new Image();
    img.src = Dataurl;
    img.onload = () => {
      canvas = document.createElement("canvas");
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      ctx = canvas.getContext("2d");
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        width * scale,
        height * scale
      );

      img = new Image();
      img.src = canvas.toDataURL(`image/${format}`);
      img.onload = () => {
        canvas = document.createElement("canvas");
        canvas.width = width * scale;
        canvas.height = height * scale;
        ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL(`image/${format}`));
      };
    };
  });
