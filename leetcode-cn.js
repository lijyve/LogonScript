// ==UserScript==
// @name              力扣中国
// @namespace         https://soulsign.inu1255.cn?account=Virtual-Y-Monster
// @version           1.0.0
// @author            Virtual-Y-Monster
// @loginURL          https://leetcode-cn.com/
// @expire            900000
// @domain            leetcode-cn.com
// ==/UserScript==

exports.run = async function (param) {
    var { data } = await axios.post('https://leetcode-cn.com/graphql/noj-go',
        {
            "operationName": "userStatusGlobal",
            "variables": {},
            "query": "query userStatusGlobal {\n  userStatus {\n    isSignedIn\n    isAdmin\n    isStaff\n    isSuperuser\n    isTranslator\n    isVerified\n    isPhoneVerified\n    isWechatVerified\n    checkedInToday\n    username\n    realName\n    userSlug\n    groups\n    avatar\n    optedIn\n    requestRegion\n    region\n    socketToken\n    activeSessionId\n    permissions\n    completedFeatureGuides\n    useTranslation\n    accountStatus {\n      isFrozen\n      inactiveAfter\n      __typename\n    }\n    __typename\n  }\n}\n"
        });
    if (!data.data.userStatus.isSignedIn)
        throw "没有登录";
    if (data.data.userStatus.checkedInToday)
        return "重复签到";
    var { data } = await axios.get('https://leetcode-cn.com/points/api/total/');
    var originPoints = data.points;
    var { data } = await axios.post('https://leetcode-cn.com/graphql/',
        {
            "operationName": "checkin",
            "variables": {},
            "query": "mutation checkin {\n  checkin {\n    checkedIn\n    ok\n    error\n    __typename\n  }\n}\n"
        },
        {
            headers: { "Origin": "https://leetcode-cn.com/", "Referer": "https://leetcode-cn.com/points/" }
        });
    if (!data.data.checkin.checkedIn)
        throw data.data.checkin.error;
    var { data } = await axios.get('https://leetcode-cn.com/points/api/total/');
    var getPoints = data.points - originPoints;
    return "今日获得 " + getPoints + " 积分";
};

exports.check = async function (param) {
    var { data } = await axios.post('https://leetcode-cn.com/graphql/noj-go',
        {
            "operationName": "userStatusGlobal",
            "variables": {},
            "query": "query userStatusGlobal {\n  userStatus {\n    isSignedIn\n    isAdmin\n    isStaff\n    isSuperuser\n    isTranslator\n    isVerified\n    isPhoneVerified\n    isWechatVerified\n    checkedInToday\n    username\n    realName\n    userSlug\n    groups\n    avatar\n    optedIn\n    requestRegion\n    region\n    socketToken\n    activeSessionId\n    permissions\n    completedFeatureGuides\n    useTranslation\n    accountStatus {\n      isFrozen\n      inactiveAfter\n      __typename\n    }\n    __typename\n  }\n}\n"
        });
    return data.data.userStatus.isSignedIn;
};