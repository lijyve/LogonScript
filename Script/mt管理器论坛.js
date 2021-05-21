// ==UserScript==
// @name              MT管理器论坛
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.0
// @author            Virtual-Y-Monster
// @loginURL          https://bbs.binmt.cc/
// @expire            900000
// @domain            bbs.binmt.cc
// ==/UserScript==

exports.run = async function (param) {
    var {
        data
    } = await axios.get('https://bbs.binmt.cc/');
    var domParse = new DOMParser();
    var doc = domParse.parseFromString(data, 'text/html');
    var formhash = doc.getElementsByName('formhash')[0].getAttribute('value');
    signUrl = 'https://bbs.binmt.cc/k_misign-sign.html?operation=qiandao&format=button&formhash=' + formhash + '&inajax=1&ajaxtarget=midaben_sign';
    var {
        data
    } = await axios.get(signUrl);
    if (/今日已签/.test(data)) {
        return '今日已签';
    } else {
        var reward = /获得随机奖励.*金币/.exec(data)[0];
        return reward;
    }
};

exports.check = async function (param) {
    var {
        data
    } = await axios.get('https://bbs.binmt.cc/home.php?mod=spacecp&ac=profile&op=base');
    if (/用户名/.test(data)) {
        return true;
    } else {
        return false;
    }
};