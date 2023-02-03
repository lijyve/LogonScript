# LogonScript
有空的话，我会写一些用python模拟登录和自动签到的脚本放在这里，作者也是在学习和摸索当中

## 2023-2-3
添加了远景论坛的签到脚本，配合魂签使用。

## 2022-11-2
btschool的签到接口更新。

## 2022-7-5
添加了IT天空的签到脚本，修复了链滴的正则匹配。

## 2022-6-28
添加了ToLiveFreely论坛、链滴、村少博客的签到脚本，配合魂签使用。

## 2022-2-27
添加了btschool的签到脚本，配合魂签使用。

## 2021-12-5
hostloc自动刷积分的脚本，此代码在@623524718大佬的基础上稍作修改，取消了TG推送，换成Server酱推送。感谢过去所有的贡献者。  
脚本的使用需要配合Github Actions，使用方法[参考](https://github.com/623524718/HostlocAutoGetPoints)。

## 2021-11-23
添加吾爱破解论坛的签到脚本，配合魂签使用。吾爱破解论坛有了js加密和混淆，现在只能通过模拟打开窗口进行签到。  
添加了geekhub的签到脚本，配合魂签使用。

## 2021-11-4
添加了力扣中国的签到脚本，配合魂签使用。此脚本参考了[yi-Xu-0100的力扣中国签到](https://soulsign.inu1255.cn/script/yi-Xu-0100/%E5%8A%9B%E6%89%A3%E4%B8%AD%E5%9B%BD.js)，并修复了已失效的API，并修改了部分代码。

## 2021-10-5
添加了看雪论坛的签到脚本，配合魂签使用。此脚本参考了[ViCrack的看雪论坛签到](https://soulsign.inu1255.cn/script/ViCrack/%E7%9C%8B%E9%9B%AA%E8%AE%BA%E5%9D%9B.js#soulsign-install)，并修改了其中的bug。

## 2021-5-22
添加了MT管理器论坛的签到脚本，配合魂签使用。

## 2020-12-20
闪电的域名更换（~~重新配置了github的ssh，拿这个项目做个测试~~）。

## 2020-8-28
上传了[魂签脚本-闪电加速签到](https://soulsign.inu1255.cn/scripts/246)，其实魂签的脚本发布网站已有闪电加速的签到脚本了，为什么要重复造轮子呢，因为闪电加速的登录没法长时间保持，且已有的脚本有bug，所以我重新添加了登录的参数并修改了代码逻辑，保证每次签到前都能登录成功。

## 2020-8-25
最近发现一个强大的谷歌插件——[魂签](https://chrome.google.com/webstore/detail/%E9%AD%82%E7%AD%BE/llbielhggjekmfjikgkcaloghnibafdl)，只需要在浏览器保持账号登录，每天打开浏览器时就可以自动签到，这直接解决了无头浏览器模拟登录繁琐等令人头疼的问题，原本打算写的吾爱破解论坛签到脚本也在魂签的[脚本发布站点](https://soulsign.inu1255.cn/)找到了轮子，话不多说，先贡献两个[攻防世界的签到脚本](https://soulsign.inu1255.cn/scripts/243)和[洛谷打卡脚本](https://soulsign.inu1255.cn/scripts/244)，已经放到魂签脚本的官网了。
魂签官网已公开的脚本有一百多个，能涉及到常见的不少论坛了，脚本也很好写，只需要有JavaScript的一点基础就行，大部分代码依葫芦画瓢就能写出来。

## 2020-8-8
~~想起来自己还有这项目~~，把忘了上传的脚本传一下
1. **哔哩哔哩直播平台每日签到脚本**
白嫖的经验和辣条谁不要啊，这个脚本经过简单的修改再配合上腾讯的云函数就可以实现每日自动签到了，要记得更新失效的sessdata
2. **看雪论坛每日签到脚本**
看雪论坛邀请码要1000雪币了，想升级正式会员但又不想写帖子水经验的就靠这脚本了，这个脚本同样可以配合云函数食用

## 2020-4-19 第一次提交
很久以前写的一个用selenium实现模拟登录的脚本，主要的代码是用的崔大的《Python3网络爬虫开发实战》上的实例，[主体代码原出处](https://github.com/Germey/Python3WebSpider/blob/master/8.2-%E6%9E%81%E9%AA%8C%E6%BB%91%E5%8A%A8%E9%AA%8C%E8%AF%81%E7%A0%81%E8%AF%86%E5%88%AB.md)
崔大写的这本书是18年发布的，由于极验滑动验证码的升级，书中的代码已经失效了，所以我在他的基础上对代码做了一些改动，有以下几点：
1. 源代码获取验证码的原图失败问题：对于最新版的极验滑动验证码可以通过修改css样式获取到原图
2. 增加了系统显示的缩放比例，我用的Chrome的webdriver，在实践中发现电脑显示的缩放比例会影响验证码图片的截取
3. 对get_track函数中的参数mid和a做了修改，这块的参数我调了很久才找到一个不错的值，能让绝大多数的情况都能正确拼接并不会被识别成机器行为
4. 增加了签到函数，这个是对该脚本作用的网站写的

很惭愧，就做了一点微小的工作