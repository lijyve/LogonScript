// ==UserScript==
// @name              力扣中国
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.2
// @author            Virtual-Y-Monster
// @loginURL          https://leetcode.cn/
// @expire            900000
// @domain            leetcode.cn
// ==/UserScript==

exports.run = async function (param) {
    var defaultHeaders = { "Origin": "https://leetcode.cn/", "Referer": "https://leetcode.cn/points/" };
    var { data } = await axios.post('https://leetcode.cn/graphql/',
        {
            "operationName": "checkin",
            "variables": {},
            "query": "mutation checkin {\n  checkin {\n    checkedIn\n    ok\n    error\n    __typename\n  }\n}\n"
        }, { headers: defaultHeaders });
    data = data.data;
    if (data.checkin === null)
        throw '未登录';
    else if (!data.checkin.checkedIn && data.checkin.ok)
        return '重复签到';
    else if (data.checkin.checkedIn && data.checkin.ok)
        return '签到成功';
    else
        throw '签到失败';
};

exports.check = async function (param) {
    var { data } = await axios.get('https://leetcode.cn/points/api/total/');
    if ('detail' in data)
        return !/身份认证信息未提供。/.test(data.detail);
    return true;
};