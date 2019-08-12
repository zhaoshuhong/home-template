/**
 * Created by 24596 on 2019/1/21.
 */
export default{
  install(Vue, options) {
    //调试debug
    // const url ='/api';
    // const url =baseUrl;
    let logger_lever = 1;
    Vue.prototype.logger_debug = function (des, msg) {

      if (logger_lever <= 1) {
        if (arguments.length == 1) {
          logger(['MCRM DEBUG'], des)
        } else if (arguments.length == 2) {
          logger(['MCRM DEBUG:' + des], msg)
        }
        else {
          logger(['MCRM ERROR:'], '参数错误')
        }
      }
    };
    Vue.prototype.logger_info = function (des, msg) {
      if (logger_lever <= 2) {
        if (arguments.length == 1) {
          logger(['MCRM INFO'], des)
        } else if (arguments.length == 2) {
          logger(['MCRM INFO:' + des], msg)
        }
        else {
          logger(['MCRM ERROR:'], '参数错误')
        }
      }

    };
    Vue.prototype.logger_error = function (des, msg) {
      if (logger_lever <= 3) {

        if (arguments.length == 1) {
          logger(['MCRM ERROR'], des)
        } else if (arguments.length == 2) {
          logger(['MCRM ERROR:' + des], msg)
        }
        else {
          logger(['MCRM ERROR:'], '参数错误')
        }
      }


    };

    var logger = function (flag, msg) {
      console.log(flag, msg)
    };
    //调试debug结束

    //input的聚焦事件
    Vue.directive('focus', {
      // 当绑定元素插入到 DOM 中。

      inserted: function (el) {
        // 聚焦元素
        el.focus()
      },
      //也可以用update,update就是当页面有操作的时候就触发，比如点击按钮，输入框输入都算。
      //有一个要注意的就是，就是你页面有几个input,比如一个input绑定了v-focus,一个没有绑定。你在没绑定v-focus的input输入时，绑定了v-focus的input就是自动获取焦点，这是个bug.
      //update: function (el) {
      //el.focus()
      //}
    });
  }
}
