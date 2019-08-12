/**
 * Created by 24596 on 2018/11/5.
 */
/* eslint-disable */
// import promise from 'es6-promise'
// promise.polyfill();
import {mcrmPost} from "@/utils/http";
export default{
  install(Vue, options) {
// session 验证
    Vue.prototype.login = (pramasObj, flag, opIdMutl, sessionId) => {
      var request =pramasObj;
      return mcrmPost("setSessionId", request);
    }

    //    客户信息部分  ---- WLAN
    /**
     * getMarketList 获取营销案列表
     *
     * opId:操作员编号
     */
    Vue.prototype.getMarketList = (pramasObj, flag, opId, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opId + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:getMarketList>' +
        '<appPublicReq>' +
        '<opId>' + pramasObj.opId + '</opId>' +
        '</appPublicReq>' +
        '</ser:getMarketList>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/formDataWebService", request);
    }

    /**
     * createQrCode 创建二维码接口
     *
     * qrTitle:标题
     * opId:操作员编号
     * orgId:组织编号
     * kindIds:档次Id
     */
    Vue.prototype.createQrCode = (pramasObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:createQrCode>' +
        '<appPublicReq>' +
        '<opId>' + pramasObj.opId + '</opId>' +
        '<orgId>' + pramasObj.orgId + '</orgId>' +
        '<qrTitle>' + pramasObj.qrTitle + '</qrTitle>' +
        '<marketId>' + pramasObj.marketId + '</marketId>' +
        '<busiData>' + pramasObj.busiData + '</busiData>' +
        '<selfDeal>' + pramasObj.selfDeal + '</selfDeal>' +
        '</appPublicReq>' +
        '</ser:createQrCode>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/formDataWebService", request);
    }

    /**
     * getCreateQrCodeHistory 获取二维码历史信息
     *
     * currentPage:页码
     * pageSize:每页条数
     * opId:操作员编号
     * orgId:组织编号
     */
    Vue.prototype.getCreateQrCodeHistory = (pramasObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:getCreateQrCodeHistory>' +
        '<appPublicReq>' +
        '<currentPage>' + pramasObj.currentPage + '</currentPage>' +
        '<opId>' + pramasObj.opId + '</opId>' +
        '<orgId>' + pramasObj.orgId + '</orgId>' +
        '<pageSize>' + pramasObj.pageSize + '</pageSize>' +
        '</appPublicReq>' +
        '</ser:getCreateQrCodeHistory>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/formDataWebService", request);
    }

    /**
     * getCreateQrCodeById 根据二维码id查询详情接口
     *
     * id:二维码id
     */
    Vue.prototype.getCreateQrCodeById = (pramasObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:getCreateQrCodeById>' +
        '<appPublicReq>' +
        '<id>' + pramasObj.id + '</id>' +
        '</appPublicReq>' +
        '</ser:getCreateQrCodeById>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/formDataWebService", request);
    }


    /**
     * getMarketDetailsById 根据营销案id opid查询详情接口
     *
     * id:营销案id
     */
    Vue.prototype.getMarketDetailsById = (pramasObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:getMarketDetailsById>' +
        '<appPublicReq>' +
        '<opId>' + pramasObj.opId + '</opId>' +
        '<marketId>' + pramasObj.marketId + '</marketId>' +
        '</appPublicReq>' +
        '</ser:getMarketDetailsById>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/formDataWebService", request);
    }


    /**
     * submitMarket 宝码提交(直受理)
     *
     * id:营销案id
     */
    Vue.prototype.submitMarket = (pramasObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:submitMarket>' +
        '<appPublicReq>' +
        '<opId>' + pramasObj.opId + '</opId>' +
        '<id>' + pramasObj.id + '</id>' +
        '</appPublicReq>' +
        '</ser:submitMarket>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/formDataWebService", request);
    }

    /**
     * 通过type查询不同消息列表数据
     * @param currentPage
     * @param pageSize
     * @param infoType 1.myInfoTeamNotice: 我的消息（团队公告）2.myInfoCreateTask:我的消息（任务公告）3.myInfoCustomRemind:我的消息（客户消息提醒）4.myTeamNewColleague:我的消息（即时消息）5.myInfoWorkApproval:我的消息（工作审批）6.myInfoStall:我的消息（摆摊消息）7.myInfoPopularSpirint:我的消息（人气精灵
     * @param isQueryUnRead 1：查询未读  0：查询全部
     * @param opId
     * @param flag
     * @param opIdMutl
     * @param sessionId
     * @returns
     */
    Vue.prototype.getInfoListByType = (paramsObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:getInfoListByType>' +
        '<appPublicReq>' +
        '<currentPage>' + paramsObj.currentPage + '</currentPage>' +
        '<infoType>' + paramsObj.infoType + '</infoType>' +
        '<isQueryUnRead>' + paramsObj.isQueryUnRead + '</isQueryUnRead>' +
        '<opId>' + paramsObj.opId + '</opId>' +
        '<pageSize>' + paramsObj.pageSize + '</pageSize>' +
        '</appPublicReq>' +
        '</ser:getInfoListByType>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/btMyInfo", request);
    }

    /**
     * getInfoById 根据消息id查询任务详情接口
     *
     * id:二维码id
     */
    Vue.prototype.getInfoById = (pramasObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:getInfoById>' +
        '<appPublicReq>' +
        '<id>' + pramasObj.id + '</id>' +
        '<opId>' + pramasObj.opId + '</opId>' +
        '</appPublicReq>' +
        '</ser:getInfoById>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/formDataWebService", request);
    }

    /**
     * updateStatusById 回退接口
     *
     * id:二维码id
     * updateStatus:状态
     * opCode:回退类型
     * opDesc:回退描述
     */
    Vue.prototype.updateStatusById = (pramasObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:updateStatusById>' +
        '<appPublicReq>' +
        '<id>' + pramasObj.id + '</id>' +
        '<opId>' + pramasObj.opId + '</opId>' +
        '<orgId>' + pramasObj.orgId + '</orgId>' +
        '<opCode>' + pramasObj.opCode + '</opCode>' +
        '<opDesc>' + pramasObj.opDesc + '</opDesc>' +
        '<updateStatus>' + pramasObj.updateStatus + '</updateStatus>' +
        '</appPublicReq>' +
        '</ser:updateStatusById>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/formDataWebService", request);
    }

    /**
     * importPageConditionsWithToken 新web3.0接口
     * @param id 任务id
     * @param pageCode web3.0页面唯一标识，地市专区web3.0时，传地市编号
     * @param pageType web3.0类型  如果传空值就是普通web3.0，如果传cityZone就是地市专区web3.0
     * @param opId 操作员ID
     * @returns
     */
    Vue.prototype.importPageConditionsWithToken = (paramsObj, flag, opIdMutl, sessionId) => {

      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:importPageConditionsWithToken>' +
        '<req>' +
        '<opId>' + paramsObj.opId + '</opId>' +
        '<pageCode>' + paramsObj.pageCode + '</pageCode>' +
        '<pageType>' + paramsObj.pageType + '</pageType>' +
        '</req>' +
        '</ser:importPageConditionsWithToken>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/importPageIn", request);
    }

    /**
     * updateExpireTime 更新宝码 过期时间  续期
     * @param id 任务id
     * @param opId 操作员ID
     * @returns
     */
    Vue.prototype.updateExpireTime = (paramsObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:updateExpireTime>' +
        '<appPublicReq>' +
        '<opId>' + paramsObj.opId + '</opId>' +
        '<id>' + paramsObj.id + '</id>' +
        '</appPublicReq>' +
        '</ser:updateExpireTime>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/formDataWebService", request);
    }

    /**
     * getSwitchValueByKey 宝码<更多>搜索的开关
     * @param id 任务id
     * @param opId 操作员ID
     * @returns
     */
    Vue.prototype.getSwitchValueByKey = (paramsObj, flag, opIdMutl, sessionId) => {
      var request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.rs.sc.ibm.com/">' +
        '<soapenv:Header><ser:singleSignOnReq><flag>' + flag + '</flag><opId>' + opIdMutl + '</opId><sessionId>' + sessionId + '</sessionId></ser:singleSignOnReq></soapenv:Header>' +
        '<soapenv:Body>' +
        '<ser:getSwitchValueByKey>' +
        '<appPublicReq>' +
        '<opId>' + paramsObj.opId + '</opId>' +
        '<orgId>' + paramsObj.orgId + '</orgId>' +
        '<switchKey>'+paramsObj.switchKey+'</switchKey>'+
        '<switchType>'+paramsObj.switchType+'</switchType>'+
        '</appPublicReq>' +
        '</ser:getSwitchValueByKey>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope>';
      return mcrmPost("sup-rs/importPageIn", request);
    }




  }
}




