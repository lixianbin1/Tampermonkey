// ==UserScript==
// @name         真·必应去除广告
// @namespace    https://github.com/lixianbin1/Tampermonkey
// @version      0.1
// @description  删除必应的各种广告
// @author       lixianbin1
// @match        *://*.bing.com/*
// @supportURL   https://github.com/lixianbin1/Tampermonkey
// @updateURL    https://github.com/lixianbin1/Tampermonkey/raw/main/ClearBing.user.js
// @downloadURL  https://github.com/lixianbin1/Tampermonkey/raw/main/ClearBing.user.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    // 添加隐藏样式，防止页面闪烁
    function hide(element) {
        if (element != undefined) {
            element.style.position = "fixed";
            element.style.top = "-2000px";
            element.style.position = "-2000px";
        }
    }
     function clear(){
        // 清除A类(插入广告)广告
        const Aadvert = document.querySelectorAll("li[data-codexads]")
        Aadvert.forEach(e=>{
            hide(e)
        })
    }
    //循环定时，防止后面插入
    const time = setInterval(()=>{
        clear()
    },100)
  })();