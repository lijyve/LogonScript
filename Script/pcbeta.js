// ==UserScript==
// @name              远景论坛
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.0
// @author            Virtual-Y-Monster
// @loginURL          https://www.pcbeta.com/member.php?mod=logging&action=login
// @expire            900000
// @domain            www.pcbeta.com
// @domain            i.pcbeta.com
// ==/UserScript==

exports.run = async function (param) {
    var { data } = await axios.get('https://i.pcbeta.com/home.php?mod=task&item=new');
    if (!/每日打卡/.test(data)) {
        return '今日已签';
    }
    else {
        var { data } = await axios.get('https://i.pcbeta.com/home.php?mod=task&do=apply&id=149');
        var { data } = await axios.get('https://i.pcbeta.com/home.php?mod=task&do=draw&id=149');
        var { data } = await axios.get('https://i.pcbeta.com/home.php?mod=task&item=new');
        if (!/每日打卡/.test(data)) {
            return '签到成功';
        }
    }
    throw '签到失败';
};

exports.check = async function (param) {
    var { data } = await axios.get('https://i.pcbeta.com/home.php?mod=task');
    return (/新任务/.test(data));
};