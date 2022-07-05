// ==UserScript==
// @name              IT天空
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.0
// @author            Virtual-Y-Monster
// @loginURL          https://www.itsk.com/
// @expire            900000
// @domain            www.itsk.com
// ==/UserScript==

exports.run = async function (param) {
    var defaultHeaders = {
        'Origin': 'https://www.itsk.com',
        'Referer': 'https://www.itsk.com/dsu_paulsign-sign.html'
    }
    var { data } = await axios.get('https://www.itsk.com/');
    if (!/用户组: Lv/.test(data))
        throw "未登录";
    var { data } = await axios.get('https://www.itsk.com/dsu_paulsign-sign.html',
        { headers: { "Referer": "https://www.itsk.com/" } });
    var domParse = new DOMParser();
    var doc = domParse.parseFromString(data, 'text/html');
    var formhash = doc.getElementsByName('formhash')[0].getAttribute('value');
    // content-type: application/x-www-form-urlencoded
    var { data } = await axios.post('https://www.itsk.com/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1',
        'formhash=' + formhash + '&qdxq=1kx&qdmode=2&todaysay=&fastreply=0');
    if (/恭喜你签到成功!/.test(data))
        return '签到成功';
    if (/您今日已经签到，请明天再来！/.test(data))
        return '已签到';
};

exports.check = async function (param) {
    var { data } = await axios.get('https://www.itsk.com/');
    return /用户组: Lv/.test(data);
};

