// ==UserScript==
// @name              洛谷打卡
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.0
// @author            Virtual-Y-Monster
// @loginURL          https://www.luogu.com.cn/auth/login
// @expire            900000
// @domain            www.luogu.com.cn
// ==/UserScript==

exports.run = async function (param) {
    var {
        data
    } = await axios.get('https://www.luogu.com.cn/index/ajax_punch');
    if (data.code == 200) {
        return '打卡成功';
    } else if (data.code == 201 && /已经打过卡/.test(data.message)) {
        return '今日已打卡';
    } else {
        throw '未登录';
    }
};

exports.check = async function (param) {
    var {
        data
    } = await axios.get('https://www.luogu.com.cn/index/ajax_punch');
    if (data.code == 201 && /请登录/.test(data.message)) {
        return false;
    } else {
        return true;
    }
};