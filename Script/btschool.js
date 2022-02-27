// ==UserScript==
// @name              btschool
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.0
// @author            Virtual-Y-Monster
// @loginURL          https://pt.btschool.club/login.php
// @expire            900000
// @domain            pt.btschool.club
// ==/UserScript==

exports.run = async function (param) {
    var { data } = await axios.get('https://pt.btschool.club/login.php');
    if (!/你已经登录！/.test(data))
        throw '未登录';
    var { data } = await axios.get('https://pt.btschool.club/index.php?action=addbonus');
    if (/今天签到您获得[0-9]*点魔力值/.test(data))
        return /今天签到您获得[0-9]*点魔力值/.exec(data)[0];
    return '已签到';
};

exports.check = async function (param) {
    var { data } = await axios.get('https://pt.btschool.club/login.php');
    return (/你已经登录！/.test(data));
};
