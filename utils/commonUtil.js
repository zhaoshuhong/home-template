/**
 * Created by 19443 on 2019/4/2.
 */
export default{
    install(Vue, options) {
        Vue.prototype.isIos = (documentsType) => {
            var isIos = false;
            //获取客户端为IOS或ANDROID
            isIos = navigator.userAgent.match(/(iPhone|iPad|iOS)/i) != null;
            return isIos;
        },
        Vue.prototype.isAndroid = (documentsType) => {
            var isAndroid = false;
            //获取客户端为IOS或ANDROID
            isAndroid = navigator.userAgent.match(/(Android)/i) != null;
            return isAndroid;
        },

        Vue.prototype.splitUrl = (paramsObj, data) => {
            var url = paramsObj.importPage.url;
            url += "?" + paramsObj.importPage.paramsFixed;
            var params = paramsObj.importPage.params.split(",");
            params.forEach(v => {
              switch (v) {
                case "billId":
                  url += '&' + v + '=' + data.billId;
                  break;
                case "serialNum":
                  url += '&' + v + '=' + data.serialNum;
                  break;
                case "kindId":
                  url += '&' + v + '=' + data.kindId;
                  break;
                case "commBusId":
                  url += '&' + v + '=' + data.commBusId;
                  break;
                case "verifyType":
                  url += '&' + v + '=' + data.verifyType;
                  break;
                case "broadBillId":
                  if(!data.broadBillId){
                    data.broadBillId = ''
                  }
                  url += '&' + v + '=' + data.broadBillId;
                  break;
                case "sessId":
                  url += '&' + v + '=' + paramsObj.token;
                 break;
                case "opId":
                  url += '&' + v + '=' + data.opId;
                  break;
                case "orgId":
                  url += '&' + v + '=' + data.orgId;
                  break;
                case "cityCode":
                  url += '&' + v + '=' + data.cityCode;
                  break;
                case "isMulity":
                  url += '&' + v + '=' + data.isMulity;
                  break;
              }
            });
          // url+= '&serialNum=123456';
            return url;
          };
    }
}
