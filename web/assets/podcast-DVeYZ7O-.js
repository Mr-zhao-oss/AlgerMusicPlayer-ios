import { bl as request } from "./index-BMNXZoHW.js";
const subscribeDj = (rid, t) => {
  return request.get("/dj/sub", { params: { rid, t } });
};
const getDjSublist = () => {
  return request.get("/dj/sublist");
};
const getDjDetail = (rid) => {
  return request.get("/dj/detail", { params: { rid } });
};
const getDjProgram = (rid, limit = 30, offset = 0, asc = false) => {
  return request.get("/dj/program", {
    params: { rid, limit, offset, asc }
  });
};
const getDjRecommend = () => {
  return request.get("/dj/recommend");
};
const getDjCategoryList = () => {
  return request.get("/dj/catelist");
};
const getDjTodayPerfered = () => {
  return request.get("/dj/today/perfered");
};
const getDjRadioHot = (cateId, limit = 30, offset = 0) => {
  return request.get("/dj/radio/hot", {
    params: { cateId, limit, offset }
  });
};
export {
  getDjCategoryList as a,
  getDjRecommend as b,
  getDjTodayPerfered as c,
  getDjSublist as d,
  getDjDetail as e,
  getDjProgram as f,
  getDjRadioHot as g,
  subscribeDj as s
};
