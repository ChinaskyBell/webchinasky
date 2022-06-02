import * as request from './request'

let api = 'https://api-test41.chinaskynet.net/api/'
// 注册
export const subscriptionService = (params) => request.post(api + `subscription-email`, params)

export const casesService = (params) => request.get(api + `cases/${params.caseId}`, params)

