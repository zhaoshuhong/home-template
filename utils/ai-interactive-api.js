var isIos = false;
//获取客户端为IOS或ANDROID
isIos = navigator.userAgent.match(/(iPhone|iPad|iOS)/i) != null;

export default{
    install(Vue, options) {
        Vue.prototype.sendPostMessage = (methodName, message) => {
            if (isIos) {
                window.webkit.messageHandlers[methodName].postMessage(message);
            } else{
                if(message) {
                    window.AIAppFunLoader[methodName](JSON.stringify(message));
                }else {
                    window.AIAppFunLoader[methodName]();
                }
            };
        }
    }
}