// ==UserScript==
// @name         真·游侠去除广告
// @namespace    https://github.com/lixianbin1/Tampermonkey
// @version      0.1
// @description  删除游侠的各种广告
// @author       lixianbin1
// @match        *://*.ali213.net/*
// @supportURL   https://github.com/lixianbin1/Tampermonkey
// @updateURL    https://github.com/lixianbin1/Tampermonkey/raw/main/Clearali213.user.js
// @downloadURL  https://github.com/lixianbin1/Tampermonkey/raw/main/Clearali213.user.js
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
        // 清除A类(竞价广告)广告
        // const Aadvert = document.querySelectorAll("a[data-click]")
        // Aadvert.forEach(e=>{
        //     if(e.getAttribute('data-click')=='{"rsv_snapshot":"1"}'){
        //         hide($(e).parents('div.new-pmd')[0])
        //     }
        // })
    }
    //循环定时，防止后面插入
    const time = setInterval(()=>{
        clear()
    },100)
})();