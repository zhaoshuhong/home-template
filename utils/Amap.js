/**
 * Created by 24596 on 2018/11/22.
 */
function MapLoader() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'http://webapi.amap.com/maps?v=1.4.0&key=1a9a83c7b28da3284ff5c11f59b9d238&plugin=AMap.CitySearch&callback=initAMap';
      script.onerror = reject
      document.head.appendChild(script);
    }
    window.initAMap = () => {
      resolve(window.AMap);
    }
  })
}
/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即谷歌、高德 转 百度
 * @param lng
 * @param lat
 * @returns {*[]}
 */
function GDtoBD(lng, lat) {
  var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
  var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
  var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
  var bd_lng = z * Math.cos(theta) + 0.0065;
  var bd_lat = z * Math.sin(theta) + 0.006;
  return [bd_lng, bd_lat];
}

//仅获取定位信息
function getLocation() {
  return new Promise((resolve, reject) => {
    let map, geolocation;
    map = new AMap.Map('', {
      resizeEnable: true
    });
    map.plugin('AMap.Geolocation', function () {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: false,        //显示定位按钮，默认：true
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
      AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });

    function onComplete(data) {
      var lat = data.position.getLat();
      var lng = data.position.getLng();
      var address = data.formattedAddress;
      var infoObj = {
        lng: lng,
        lat: lat,
        address: address
      };
      // ZJMCCMobile.utils.setParam("sendWorkCircleInfo", JSON.stringify(infoObj));
      // self.setSelectInfo();
      resolve(data)

    }

    function onError(data) {
      reject(data)
    }
  })


}
export{
  MapLoader,
  GDtoBD,
  getLocation
}

