// ==UserScript==
// @name         GitHub简单翻译
// @namespace    https://github.com/lixianbin1/Tampermonkey
// @version      0.1
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

    const translateTwo =()=>{
        let json = {
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
        }
        for(let key in json){
            var Old = document.querySelectorAll('li.ActionListItem span.ActionListItem-label')
            Old.forEach(e=>{
                if(e.innerText.indexOf(key) !== -1){
                    let newText = e.innerText.replace(key,json[key])
                    e.textContent = newText
                }
            })
        }
    }
    //循环定时，防止后面插入
    const time = setInterval(()=>{
        translateOne()
        translateTwo()
    },100)
  })();