// ==UserScript==
// @name              链滴
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.0
// @author            Virtual-Y-Monster
// @loginURL          https://ld246.com/login
// @expire            900000
// @domain            ld246.com
// ==/UserScript==

exports.run = async function (param) {
    var { data } = await axios.get('https://ld246.com/');
    var domParse = new DOMParser();
    var doc = domParse.parseFromString(data, 'text/html');
    var user = String(doc.getElementsByClassName("user-nav")[0]);
    if (/登录/.test(user))
        throw "未登录";
    var csrfToken = /csrfToken: '.*'/.exec(data)[0].slice(12, -1);
    var { data } = await axios.get('https://ld246.com/activity/daily-checkin?token=' + csrfToken,
        { headers: { "Referer": "https://ld246.com/activity/checkin" } });
    var reward = /[0-9]+/.exec(/今日签到获得.*积分/.exec(data)[0])[0];
    return "今日签到获得" + reward + "积分";
};

exports.check = async function (param) {
    var { data } = await axios.get('https://ld246.com/');
    var domParse = new DOMParser();
    var doc = domParse.parseFromString(data, 'text/html');
    var user = String(doc.getElementsByClassName("user-nav")[0]);
    return !/登录/.test(user);
};

