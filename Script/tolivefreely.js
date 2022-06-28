// ==UserScript==
// @name              ToLiveFreely
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.0
// @author            Virtual-Y-Monster
// @loginURL          https://to-live-freely.com/login
// @expire            900000
// @domain            to-live-freely.com
// ==/UserScript==

exports.run = async function (param) {
    var { data } = await axios.get('https://to-live-freely.com/login', { maxRedirects: 0 });
    if (/登录/.test(data))
        throw '未登录';
    var { data } = await axios.get('https://to-live-freely.com/');
    var domParse = new DOMParser();
    var doc = domParse.parseFromString(data, 'text/html');
    var token = doc.getElementsByName('csrf-token')[0].getAttribute('content');
    // content-type: application/x-www-form-urlencoded
    var { data } = await axios.post('https://to-live-freely.com/checkin', '_token=' + token + '&button=')
    if (/签到成功/.test(data))
        return '签到成功';
    else if (/今日已经签到/.test(data))
        return '已签到';
    else
        throw '签到失败';
};

exports.check = async function (param) {
    var { data } = await axios.get('https://to-live-freely.com/login', { maxRedirects: 0 });
    return !/登录/.test(data);
};
