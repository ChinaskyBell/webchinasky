import * as request from './request'

let api = 'https://api.chinaskynet.net/api/'
// 注册
export const subscriptionService = (params) => request.post(api + `subscription-email`, params)
// 案例列表
export const casesService = (params) => request.get(api + `cases/${params.caseId}`, params)
// 联络我们
export const contentService = (params) => request.post(api + `contact-us`, params)
// 随机案例
export const randomCasesService = (params) => request.get(api + `random-cases/4`, params)
// 网络维护编辑器
export const itArticleService = (params) => request.get(api + `editor/${params.Id}`, params)
