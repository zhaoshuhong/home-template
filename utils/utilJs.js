/**
 * Created by 24596 on 2019/5/14.
 */
//时间格式化
export function setCookie(name,value)
{
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

export function $timeMoment(value) {
  let timeNow = new Date(value);
  let years = timeNow.getFullYear();
  let months = timeNow.getMonth() + 1;
  let date = timeNow.getDate();
  return years + '-' + months + '-' + date;
}

export function $numMoment(value) {
  let val = parseInt(value);
  if (val < 10) {
    val = '0' + val;
  }
  return val;
}
// base64 压缩(转换)
export  function $baseCompress(base64String, w, quality) {
    let getMimeType = function (urlData) {
      let arr = urlData.split(',');
      let mime = arr[0].match(/:(.*?);/)[1];
      // return mime.replace("image/", "");
      return mime;
    };
    let newImage = new Image();
    let imgWidth, imgHeight;

    let promise = new Promise(resolve => newImage.onload = resolve);
    newImage.src = base64String;
    return promise.then(() => {
      imgWidth = newImage.width;
      imgHeight = newImage.height;
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      if (Math.max(imgWidth, imgHeight) > w) {
        if (imgWidth > imgHeight) {
          canvas.width = w;
          canvas.height = w * imgHeight / imgWidth;
        } else {
          canvas.height = w;
          canvas.width = w * imgWidth / imgHeight;
        }
      } else {
        canvas.width = imgWidth;
        canvas.height = imgHeight;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);
      let base64 = canvas.toDataURL(getMimeType(base64String), quality);
      // console.log('压缩后',base64);
      return base64;
    });
  }

//        图片生成二维码 并压缩
export function $imgSrcToBase64(img, w, quality) {
  let getMimeType = function (urlData) {
    let arr = urlData.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    // return mime.replace("image/", "");
    return mime;
  };
  let newImage = img;
  let imgWidth, imgHeight;
  imgWidth = newImage.width;
  imgHeight = newImage.height;
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  if (Math.max(imgWidth, imgHeight) > w) {
    if (imgWidth > imgHeight) {
      canvas.width = w;
      canvas.height = w * imgHeight / imgWidth;
    } else {
      canvas.height = w;
      canvas.width = w * imgWidth / imgHeight;
    }
  } else {
    canvas.width = imgWidth;
    canvas.height = imgHeight;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);
  let base64old = canvas.toDataURL();
  let base64 = canvas.toDataURL(getMimeType(base64old), quality);
  console.log('压缩后', base64);
  return base64;

//    var canvas = document.createElement("canvas");
//    canvas.width = img.width;
//    canvas.height = img.height;
//    var ctx = canvas.getContext("2d");
//    ctx.drawImage(img,0,0,img.width,img.height);

//    return canvas.toDataURL();
}

