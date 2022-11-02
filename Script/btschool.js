// ==UserScript==
// @name              btschool
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.1
// @author            Virtual-Y-Monster
// @loginURL          https://pt.btschool.club/login.php
// @expire            900000
// @domain            pt.btschool.club
// ==/UserScript==

exports.run = async function (param) {
    var { data } = await axios.get('https://pt.btschool.club/attendance.php');
    if (/签到成功/.test(data)) return '签到成功';
    throw '访问失败';
};

exports.check = async function (param) {
    var { data } = await axios.get('https://hdtime.org/index.php');
    return /欢迎回来/.test(data);
};
