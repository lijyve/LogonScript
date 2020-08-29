// ==UserScript==
// @name              闪电加速签到
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.1
// @author            Virtual-Y-Monster
// @loginURL          https://freemycloud.pw/auth/login
// @updateURL         https://soulsign.inu1255.cn/script/Virtual-Y-Monster/闪电加速签到
// @expire            900000
// @domain            freemycloud.pw
// @param            email 邮箱
// @param            passwd 密码
// ==/UserScript==

exports.run = async function (param) {
    var {
        data
    } = await axios.post('https://freemycloud.pw/auth/login', {
        'email': param.email,
        'passwd': param.passwd,
        'remember_me': 'on'
    });
    if (data.ret == 0) {
        throw data.msg;
    }
    var {
        data
    } = await axios.post('https://freemycloud.pw/user/checkin')
    return data.msg;
};

exports.check = async function (param) {
    var {
        data
    } = await axios.post('https://freemycloud.pw/auth/login', {
        'email': param.email,
        'passwd': param.passwd,
        'remember_me': 'on'
    });
    var {
        data
    } = await axios.get('https://freemycloud.pw/user');
    if (/用户中心 — 闪电/.test(data)) {
        return true;
    } else {
        return false;
    }
};