// ==UserScript==
// @name         真·百度去除广告
// @namespace    https://github.com/lixianbin1/Tampermonkey
// @version      0.3
// @description  删除百度的垃圾广告
// @author       lixianbin1
// @match        *://*.baidu.com/*
// @supportURL   https://github.com/lixianbin1/Tampermonkey
// @updateURL    https://github.com/lixianbin1/Tampermonkey/RemoveAd.js
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
        const Aadvert = document.querySelectorAll("a[data-click]")
        Aadvert.forEach(e=>{
            if(e.getAttribute('data-click')=='{"rsv_snapshot":"1"}'){
                hide($(e).parents('div.new-pmd')[0])
            }
        })
        //清除B类(右侧引流广告)广告
        const Badvert = document.querySelectorAll("div[posid]")
        Badvert.forEach(e=>{
            hide($(e)[0])
        })
        //清除C类(品牌广告)广告
        const Cadvert = $("span.tenon_pc_comp_brand_tip-text:contains('品牌广告')")
        Cadvert.map((e,a)=>{
            hide($(a).parents('div.new-pmd')[0])
        })
        
    }
    //循环定时，防止后面插入
    const time = setInterval(()=>{
        clear()
    },100)
})();