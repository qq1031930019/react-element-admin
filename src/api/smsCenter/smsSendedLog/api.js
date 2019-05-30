import apiAddress from './apiAddress'
import http from '../../http'

/**
 * 获取短信发送日志列表
 * @param pageIndex
 * @param pageSize
 * @param phone                     手机号
 * @param appName                   应用名称
 * @returns {Promise<any | never>}
 */
const getSMSSendLogList = (pageIndex, pageSize, phone, appName) => {
    const params = {
        pageIndex: pageIndex,
        pageSize: pageSize,
        phone: phone,
        appName: appName
    }
    return http.post(apiAddress.MSG_LOGS_REQ, params, 'json')
}

const api = {
    getSMSSendLogList: getSMSSendLogList,
}

export default api