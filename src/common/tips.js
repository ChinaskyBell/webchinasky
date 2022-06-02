import Vue from 'vue';
import notic from '../components/Tips'

const noticCont = Vue.extend(notic);

export default function notice(options) {
  // 实例化
  const noticEg = new noticCont({
    data:options
  });
  // 挂载
  noticEg.$mount();
  // 添加到body
  document.querySelector(".ui-content").appendChild(noticEg.$el);
  return noticEg;
}
