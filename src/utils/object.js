/******************************************
 * 将 Object 对象转换为 FormData 对象
 * @param {Object} obj Object 对象
 * @returns 
 ******************************************/
export function object2FormData(obj) {
  let fd = new FormData();

  Object.keys(obj).forEach(key => {
    fd.append(key, obj[key]);
  });

  return fd;
}



/************************************************************************
 * 改变目标函数 targetObj
 * 该函数类似于 Object.assign(), 不会为 targetObj 新增 key 值
 * @param {Object} targetObj 目标 Object ，key 值依据
 * @param {Object} originObj 数据源对象
 * @param {Array} addKeyArray 需要为 targetObj 设置 originObj 中已有的新key值
 *************************************************************************/
export function copyObjectByKey(targetObj, originObj, addKeyArray = []) {

  Object.keys(targetObj).forEach(key => {
    targetObj[key] = originObj[key] || null;
  })

  addKeyArray.forEach(key => {
    targetObj[key] = originObj[key] || null;
  })
}