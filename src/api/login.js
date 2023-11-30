import request from "../utils/request";
 
 
/**
 * 获取首页列表
 */
function login(){
  return new Promise((resolve, reject) => {
    request("get",'/student/list').then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}
 
export {
   login
}

