// ==UserScript==
// @name         GitHub简单翻译
// @namespace    https://github.com/lixianbin1/Tampermonkey
// @version      0.2
// @description  简单翻译下GitHub的页面
// @author       lixianbin1
// @match        *://*.github.com/*
// @supportURL   https://github.com/lixianbin1/Tampermonkey
// @updateURL    https://github.com/lixianbin1/Tampermonkey/raw/main/TranslationGH.user.js
// @downloadURL  https://github.com/lixianbin1/Tampermonkey/raw/main/TranslationGH.user.js
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    //特殊处理
    const translateOne =()=>{
        let json = {
            'Code':'代码',
            'Issues':'问题',
            'Pull requests':'拉取请求',
            'Discussions':'讨论',
            'Actions':'操作',
            'Projects':'计划',
            'Wiki':'维基',
            'Security':'安全',
            'Insights':'洞察',
            'Overview':'概述',
        }
        for(let key in json){
            var Old = document.querySelectorAll("span[data-content='"+ key +"']")
            Old.forEach(e=>{
                if(e.innerText.indexOf(key) !== -1){
                    e.textContent = json[key]
                }
            })
        }
    }
    //公用模板
    const translatePublic=(json,name)=>{
        for(let key in json){
            var Old = document.querySelectorAll(name)
            Old.forEach(e=>{
                if(e.innerText.indexOf(key) !== -1){
                    e.textContent = json[key]
                }
            })
        }
    }
    //翻译数据
    let jsonTwo={
        'Home':'主页',
        'Issues':'问题',
        'Pull requests':'拉取请求',
        'Discussions':'讨论',
        'Codespaces':'代码空间',
        'Explore':'探索',
        'Marketplace':'市场',
        'Show more':'显示更多',
        'New repository':'新建存储库',
        'Import repository':'导入存储库',
        'New codespace':'新建代码空间',
        'New gist':'新建gist',
        'New organization':'新建组织',
        'New project':'新建项目',
        'Set status':'设置状态',
        'Your profile':'你的个人资料',
        'Add account':'添加帐户',
        'Your repositories':'你的存储库',
        'Your projects':'你的项目',
        'Your organizations':'你的组织',
        'Your enterprises':'你的企业',
        'Your stars':'你的stars',
        'Your sponsors':'你的赞助商',
        'Your gists':'你的gists',
        'Upgrade':'提升',
        'Try Enterprise':'试用企业',
        'Copilot':'辅助AI',
        'Feature preview':'实验功能',
        'Settings':'设置',
        'GitHub Docs':'GitHub 文档',
        'GitHub Support':'GitHub 赞助',
        'Sign out':'注销',
        'Watch':'关注',
        'Public profile':'公共概述',
        'Account':'账户',
        'Appearance':'外观',
        'Accessibility':'访问授权',
        'Notifications':'通知',
        'Billing and plans':'账单和计划',
        'Plans and usage':'计划和用途',
        'Spending limits':'支付限额',
        'Payment information':'支付信息',
        'Emails':'邮件',
        'Password and authentication':'密码和身份验证',
        'Sessions':'会议',
        'SSH and GPG keys':'SSH 和 GPG keys',
        'Organizations':'组织',
        'Enterprises':'企业',
        'Moderation':'节制',
        'Blocked users':'锁定的用户',
        'Interaction limits':'交互限制',
        'Code review limits':'代码审查限制',
        'Repositories':'存储库',
        'Saved replies':'收藏的回复',
        'Code security and analysis':'代码安全性和分析',
        'Applications':'应用',
        'Scheduled reminders':'预定的提醒',
        'Security log':'安全日志',
        'Sponsorship log':'赞助记录',
        'Developer settings':'开发人员设置',
    }
    let jsonThree={
        'Latest changes':'最近更新',
        'Explore repositories':'探索存储库',
    }
    let jsonFour={
        "Overview":"概述",
        "Repositories": "存储库",
        "Projects": "项目",
        "Packages": "程序包",
        "Stars": "收藏"
    }
    //获取翻译文本
    const getText=(name)=>{
        var Old = document.querySelectorAll(name)
        let json={}
        Old.forEach(e=>{
            let key = e.textContent.trim()
            json[key]=""
        })
        return {json,Old}
    }
    //循环定时，防止后面插入
    const time = setInterval(()=>{
        translateOne()
        translatePublic(jsonTwo,'li.ActionListItem span.ActionListItem-label')
        translatePublic(jsonThree,'h2.text-bold')
        translatePublic(jsonFour,'nav.UnderlineNav span[data-view-component="true"]')
    },100)
  })();