/*
 * @Author: liyaopeng wylee_yy@163.com
 * @Date: 2024-01-07 17:06:32
 * @LastEditors: liyaopeng wylee_yy@163.com
 * @LastEditTime: 2024-01-15 14:53:56
 * @FilePath: /management-system/src/config/piniaPersist.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


/**
 * @description pinia 持久化参数配置
 * @param {String} key 存储到持久化的 name
 * @param {Array} paths 需要持久化的 state name
 * @return persist
 * */
const piniaPersistConfig = (key, paths) => {
  const persist = {
    key,
    storage: localStorage,
    // storage: sessionStorage,
    paths
  };
  return persist;
};

export default piniaPersistConfig;
