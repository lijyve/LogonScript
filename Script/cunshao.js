// ==UserScript==
// @name              村少博客
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.0
// @author            Virtual-Y-Monster
// @loginURL          https://www.cunshao.com/user-sign
// @expire            900000
// @domain            www.cunshao.com
// ==/UserScript==

exports.run = async function (param) {
    var { data } = await axios.get('https://www.cunshao.com/');
    if (/HI！请登录/.test(data))
        throw "未登录";
    // content-type: application/x-www-form-urlencoded
    var { data } = await axios.post('https://www.cunshao.com/wp-admin/admin-ajax.php', 'action=user_checkin');
    return data['msg'];
};

exports.check = async function (param) {
    var { data } = await axios.get('https://www.cunshao.com/');
    return !/HI！请登录/.test(data);
};

