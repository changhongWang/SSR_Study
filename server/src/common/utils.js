// 解析cookie 传入cookie字符串 输出key&value对象
export const parseCookie = (cookieStr) => {
  const cookieArr = cookieStr.split("; ");
  const parsedObj = {};
  cookieArr.forEach((item) => {
    const key = item.split("=")[0];
    const val = item.split("=")[1];
    key && (parsedObj[key] = val);
  });
  return parsedObj;
};
