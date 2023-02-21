// ==UserScript==
// @name         真·CSDN功能扩展
// @namespace    https://github.com/lixianbin1/Tampermonkey
// @version      0.2
// @description  可以复制CSDN中的代码
// @author       lixianbin1
// @match        *://*.csdn.net/*
// @run-at       document-start
// @supportURL   https://github.com/lixianbin1/Tampermonkey
// @updateURL    https://github.com/lixianbin1/Tampermonkey/raw/main/Script/CsdnCrx.user.js
// @downloadURL  https://github.com/lixianbin1/Tampermonkey/raw/main/Script/CsdnCrx.user.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    var style=`
      body #content_views pre{
        -webkit-touch-callout: text;
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
      body #content_views pre code{
        -webkit-touch-callout: text;
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
    `;
    var ele=document.createElement('style');
    ele.innerHTML=style;
    var Head = document.getElementsByTagName('head')[0]
    Head.appendChild(ele)
    [...document.querySelectorAll('*')].forEach(item=>{
      item.oncopy = function(e) {
        e.stopPropagation();
      }
    });
  })();