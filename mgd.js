// ==UserScript==
// @name         蘑菇视频助手
// @namespace    local.mogu.tools
// @version      2.20.6
// @description  解锁蘑菇限制，包括暗网分区，小编精选分区，去除广告 tg@DOULEWSS
// @match        *://wap3.mgios1.cc/*
// @match        *://*.mgios1.cc/*
// @match        *://mgios1.cc/*
// @include      /^https?:\/\/([^\/]+\.)?mgsp[0-9a-z]*\.today\//
// @updateURL    https://cdn.jsdelivr.net/gh/mexbin/bzm@main/mgd.js
// @downloadURL  https://cdn.jsdelivr.net/gh/mexbin/bzm@main/mgd.js
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @connect      www.wigwy.xyz
// @connect      wig.wigwy.xyz
// @connect      wig.xiaoman.top
// @connect      wig.luatool.cn
// @connect      wig.ggpro.cn
// @connect      www.wigyyds.com
// @connect      wigyyds.com
// @connect      api.m.taobao.com
// @connect      tptm.hd.mi.com
// ==/UserScript==
(function () {
  'use strict';
  var W = unsafeWindow;
  W.__moguBoot = 1;
  W.__moguStep = 'start';

  /* ==================== WIG 网络验证门禁 ==================== */
  var WIG_CFG = {
    appid: '29516',
    appkey: '5ZP9G08sRvVlt4Y',
    localVer: '2.20.6',
    hosts: ['www.wigwy.xyz','wig.wigwy.xyz','wig.xiaoman.top','wig.luatool.cn','wig.ggpro.cn','www.wigyyds.com','wigyyds.com']
  };

  // ---- 纯 JS MD5 ----
  function md5(str) {
    function rl(n, c) { return (n << c) | (n >>> (32 - c)); }
    function cmn(q, a, b, x, s, t) { a = (a + q + x + t) | 0; return (rl(a, s) + b) | 0; }
    function ff(a, b, c, d, x, s, t) { return cmn((b & c) | (~b & d), a, b, x, s, t); }
    function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & ~d), a, b, x, s, t); }
    function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
    function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | ~d), a, b, x, s, t); }
    function sb(x) {
      var l = x.length, y = l * 8, w = [0x7fffffff], i;
      for (i = 0; i < y; i += 8) w[i >> 5] |= (x.charCodeAt(i / 8) & 255) << (i % 32);
      w[y >> 5] |= 0x80 << (y % 32);
      w[(((y + 64) >>> 9) << 4) + 14] = y;
      return w;
    }
    function rb(num) {
      var s = '', i;
      for (i = 0; i < 4; i++) s += String.fromCharCode((num >> (i * 8)) & 255);
      return s;
    }
    function rn(num) {
      var hex = '', i, v;
      for (i = 0; i < 4; i++) { v = (num >> (i * 8)) & 255; hex += ('0' + v.toString(16)).slice(-2); }
      return hex;
    }
    var x = sb(unescape(encodeURIComponent(str)));
    var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var oa = a, ob = b, oc = c, od = d;
      a = ff(a,b,c,d,x[i],7,-680876936); d = ff(d,a,b,c,x[i+1],12,-389564586);
      c = ff(c,d,a,b,x[i+2],17,606105819); b = ff(b,c,d,a,x[i+3],22,-1044525330);
      a = ff(a,b,c,d,x[i+4],7,-176418897); d = ff(d,a,b,c,x[i+5],12,1200080426);
      c = ff(c,d,a,b,x[i+6],17,-1473231341); b = ff(b,c,d,a,x[i+7],22,-45705983);
      a = ff(a,b,c,d,x[i+8],7,1770035416); d = ff(d,a,b,c,x[i+9],12,-1958414417);
      c = ff(c,d,a,b,x[i+10],17,-42063); b = ff(b,c,d,a,x[i+11],22,-1990404162);
      a = ff(a,b,c,d,x[i+12],7,1804603682); d = ff(d,a,b,c,x[i+13],12,-40341101);
      c = ff(c,d,a,b,x[i+14],17,-1502002290); b = ff(b,c,d,a,x[i+15],22,1236535329);
      a = gg(a,b,c,d,x[i+1],5,-165796510); d = gg(d,a,b,c,x[i+6],9,-1069501632);
      c = gg(c,d,a,b,x[i+11],14,643717713); b = gg(b,c,d,a,x[i],20,-373897302);
      a = gg(a,b,c,d,x[i+5],5,-701558691); d = gg(d,a,b,c,x[i+10],9,38016083);
      c = gg(c,d,a,b,x[i+15],14,-660478335); b = gg(b,c,d,a,x[i+4],20,-405537848);
      a = gg(a,b,c,d,x[i+9],5,568446438); d = gg(d,a,b,c,x[i+14],9,-1019803690);
      c = gg(c,d,a,b,x[i+3],14,-187363961); b = gg(b,c,d,a,x[i+8],20,1163531501);
      a = gg(a,b,c,d,x[i+13],5,-1444681467); d = gg(d,a,b,c,x[i+2],9,-51403784);
      c = gg(c,d,a,b,x[i+7],14,1735328473); b = gg(b,c,d,a,x[i+12],20,-1926607734);
      a = hh(a,b,c,d,x[i+5],4,-378558); d = hh(d,a,b,c,x[i+8],11,-2022574463);
      c = hh(c,d,a,b,x[i+11],16,1839030562); b = hh(b,c,d,a,x[i+14],23,-35309556);
      a = hh(a,b,c,d,x[i+1],4,-1530992060); d = hh(d,a,b,c,x[i+4],11,1272893353);
      c = hh(c,d,a,b,x[i+7],16,-155497632); b = hh(b,c,d,a,x[i+10],23,-1094730640);
      a = hh(a,b,c,d,x[i+13],4,681279174); d = hh(d,a,b,c,x[i],11,-358537222);
      c = hh(c,d,a,b,x[i+3],16,-722521979); b = hh(b,c,d,a,x[i+6],23,76029189);
      a = hh(a,b,c,d,x[i+9],4,-640364487); d = hh(d,a,b,c,x[i+12],11,-421815835);
      c = hh(c,d,a,b,x[i+15],16,530742520); b = hh(b,c,d,a,x[i+2],23,-995338651);
      a = ii(a,b,c,d,x[i],6,-198630844); d = ii(d,a,b,c,x[i+7],10,1126891415);
      c = ii(c,d,a,b,x[i+14],15,-1416354905); b = ii(b,c,d,a,x[i+5],21,-57434055);
      a = ii(a,b,c,d,x[i+12],6,1700485571); d = ii(d,a,b,c,x[i+3],10,-1894986606);
      c = ii(c,d,a,b,x[i+10],15,-1051523); b = ii(b,c,d,a,x[i+1],21,-2054922799);
      a = ii(a,b,c,d,x[i+8],6,1873313359); d = ii(d,a,b,c,x[i+15],10,-30611744);
      c = ii(c,d,a,b,x[i+6],15,-1560198380); b = ii(b,c,d,a,x[i+13],21,1309151649);
      a = ii(a,b,c,d,x[i+4],6,-145523070); d = ii(d,a,b,c,x[i+11],10,-1120210379);
      c = ii(c,d,a,b,x[i+2],15,718787259); b = ii(b,c,d,a,x[i+9],21,-343485551);
      a = (a+oa)|0; b=(b+ob)|0; c=(c+oc)|0; d=(d+od)|0;
    }
    return (rn(a)+rn(b)+rn(c)+rn(d)).toLowerCase();
  }

  // ---- RC4 ----
  function rc4(key, data, decrypt) {
    if (decrypt) data = hexToStr(data);
    var c = '', k = [], box = [], kl = key.length, dl = data.length, i, j, a;
    for (i = 0; i < 256; i++) { k[i] = key.charCodeAt(i % kl); box[i] = i; }
    j = 0;
    for (i = 0; i < 256; i++) {
      j = (j + box[i] + k[i]) % 256;
      var t = box[i]; box[i] = box[j]; box[j] = t;
    }
    i = 0; j = 0;
    for (a = 0; a < dl; a++) {
      i = (i + 1) % 256; j = (j + box[i]) % 256;
      var tmp = box[i]; box[i] = box[j]; box[j] = tmp;
      var kk = box[(box[i] + box[j]) % 256];
      c += String.fromCharCode(data.charCodeAt(a) ^ kk);
    }
    return c;
  }
  function hexToStr(hex) {
    hex = hex.trim();
    if (hex.substr(0,2).toLowerCase() === '0x') hex = hex.substr(2);
    var r = '', i;
    for (i = 0; i < hex.length; i += 2) r += String.fromCharCode(parseInt(hex.substr(i,2), 16));
    return r;
  }

  // ---- Base64 decode ----
  var _b64k = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  function b64decode(input) {
    var out = '', c1, c2, c3, e1, e2, e3, e4, i = 0;
    input = input.replace(/[^A-Za-z0-9+/=]/g, '');
    while (i < input.length) {
      e1 = _b64k.indexOf(input.charAt(i++)); e2 = _b64k.indexOf(input.charAt(i++));
      e3 = _b64k.indexOf(input.charAt(i++)); e4 = _b64k.indexOf(input.charAt(i++));
      c1 = (e1 << 2) | (e2 >> 4); c2 = ((e2 & 15) << 4) | (e3 >> 2); c3 = ((e3 & 3) << 6) | e4;
      out += String.fromCharCode(c1);
      if (e3 != 64) out += String.fromCharCode(c2);
      if (e4 != 64) out += String.fromCharCode(c3);
    }
    // UTF-8 解码
    try {
      var bytes = new Uint8Array(out.length);
      for (var j = 0; j < out.length; j++) bytes[j] = out.charCodeAt(j);
      return new TextDecoder('utf-8').decode(bytes);
    } catch (e) { return out; }
  }

  // ---- GM_xmlhttpRequest 封装 ----
  function gmReq(method, url, body) {
    return new Promise(function(resolve, reject) {
      var opts = {
        method: method, url: url, timeout: 10000,
        onload: function(res) { resolve(res.responseText); },
        onerror: function() { reject(new Error('network')); },
        ontimeout: function() { reject(new Error('timeout')); }
      };
      if (body) { opts.data = body; opts.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }; }
      GM_xmlhttpRequest(opts);
    });
  }

  // ---- 多 host 轮询请求 ----
  function wigRequest(method, path, body) {
    var idx = 0;
    function attempt() {
      if (idx >= WIG_CFG.hosts.length) return Promise.reject(new Error('all hosts failed'));
      var host = WIG_CFG.hosts[idx % WIG_CFG.hosts.length];
      idx++;
      return gmReq(method, 'http://' + host + path, body).catch(function() {
        return new Promise(function(res, rej) { setTimeout(function() { attempt().then(res, rej); }, 800); });
      });
    }
    return attempt();
  }

  // ---- 时间校准 ----
  var _timeOffset = 0;
  function calibrateTime() {
    GM_xmlhttpRequest({
      method: 'GET', url: 'http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp',
      timeout: 5000,
      onload: function(res) { try { var d = JSON.parse(res.responseText); _timeOffset = Math.floor(d.data.t/1000) - Math.floor(Date.now()/1000); } catch(e){} },
      onerror: function(){}, ontimeout: function(){}
    });
  }
  function wigTs() { return Math.floor(Date.now()/1000) + _timeOffset - 3; }

  // ---- 设备 ID ----
  function getDevId() {
    var s = GM_getValue('wig_devid', '');
    if (s) return s;
    var raw = navigator.userAgent + '|' + screen.width + 'x' + screen.height + '|' + new Date().getTimezoneOffset();
    var h = 0, i;
    for (i = 0; i < raw.length; i++) h = ((h << 5) - h + raw.charCodeAt(i)) | 0;
    s = 'browser_' + Math.abs(h).toString(36) + '_' + Date.now().toString(36);
    GM_setValue('wig_devid', s);
    return s;
  }

  // ---- 版本比较 ----
  function cmpVer(loc, rem) {
    var a = String(loc).split('.').map(function(x){return parseInt(x)||0;});
    var b = String(rem).split('.').map(function(x){return parseInt(x)||0;});
    var n = Math.max(a.length, b.length);
    for (var i = 0; i < n; i++) {
      var x = a[i]||0, y = b[i]||0;
      if (y > x) return true; if (y < x) return false;
    }
    return false;
  }

  // ---- 登录 / 心跳 ----
  function wigLogin(card) {
    var ts = wigTs(), dev = getDevId();
    var path = '/api/loginAuto/' + ts + '/' + WIG_CFG.appid + '/' + encodeURIComponent(card);
    return wigRequest('POST', path, 'imei=' + encodeURIComponent(dev)).then(function(raw) {
      try {
        var dec = rc4(WIG_CFG.appkey, raw, true);
        var jsonStr = b64decode(dec);
        return JSON.parse(jsonStr);
      } catch(e) { return { code: -1, msg: '响应解析失败' }; }
    });
  }
  function wigHeartbeat(token) {
    var path = '/api/card/heartbeat/' + WIG_CFG.appid;
    var body = 'token=' + encodeURIComponent(token) + '&timestamp=' + wigTs() + '&isAutoJs=1';
    return wigRequest('POST', path, body).then(function(raw) {
      try { return JSON.parse(raw); } catch(e) { return { code: -1, msg: '心跳异常' }; }
    });
  }

  // ---- 门禁 UI ----
  var _heartTimer = null, _authOk = false, _curToken = '', _curCard = '';

  function gateStatus(msg, color) {
    var el = document.getElementById('__wig_status');
    if (el) { el.textContent = msg; el.style.color = color || '#B565D9'; }
  }
  function buildGate() {
    var old = document.getElementById('__wig_gate');
    if (old && old.parentNode) old.parentNode.removeChild(old);
    var mask = document.createElement('div');
    mask.id = '__wig_gate';
    mask.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647;background:linear-gradient(180deg,#FFD6E8,#E8D5F5,#FFF8F0);display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,sans-serif;';
    mask.innerHTML =
      '<div style="width:88%;max-width:360px;background:#FDF5FB;border-radius:26px;padding:28px 22px;box-shadow:0 8px 32px rgba(255,79,154,0.25);max-height:90vh;overflow-y:auto;">' +
        '<div style="text-align:center;margin-bottom:14px;">' +
          '<div style="font-size:22px;font-weight:bold;color:#FF4F9A;text-shadow:0 2px 10px rgba(255,255,255,0.9);">✿ 蘑菇视频助手 ♡</div>' +
          '<div style="font-size:12px;color:#9B7EA8;margin-top:6px;">～ 输入卡密开始使用 ～</div>' +
        '</div>' +
        '<div id="__wig_status" style="text-align:center;font-size:14px;color:#B565D9;margin:8px 0;min-height:20px;"></div>' +
        '<input id="__wig_card" type="text" placeholder="在这里输入卡密哦" style="width:100%;box-sizing:border-box;padding:14px 18px;border-radius:26px;border:none;background:#FFFFFF;font-size:15px;color:#4A3A4A;-webkit-text-fill-color:#4A3A4A;outline:none;margin-bottom:12px;"/>' +
        '<div id="__wig_ann" style="font-size:12px;color:#7A6885;margin:0 4px 12px;line-height:1.5;word-break:break-all;"></div>' +
        '<button id="__wig_login" style="width:100%;padding:14px;border:none;border-radius:27px;background:linear-gradient(135deg,#FF7EB9,#FF4F9A);color:#FFFFFF;font-size:16px;font-weight:bold;cursor:pointer;margin-bottom:10px;">✨ 激 活 上 线 ✨</button>' +
        '<a href="http://www.wigwy.xyz/unbundling/card/' + WIG_CFG.appid + '" target="_blank" style="display:block;text-align:center;font-size:13px;color:#8E5CC9;text-decoration:none;padding:8px;">🎐 解绑卡密</a>' +
        '<div style="text-align:center;font-size:11px;color:#B59BB5;margin-top:12px;">🌸 Copyright©2026 蘑菇视频助手 🌸</div>' +
      '</div>';
    (document.documentElement || document.body).appendChild(mask);
    setTimeout(function() {
      var btn = document.getElementById('__wig_login');
      var input = document.getElementById('__wig_card');
      if (!btn || !input) return;
      var saved = GM_getValue('wig_card', '');
      if (saved) input.value = saved;
      function doLogin() {
        var cv = input.value.trim();
        if (!cv) { gateStatus('请输入卡密哦～', '#FF4F9A'); return; }
        gateStatus('🌸 正在验证...', '#B565D9');
        wigLogin(cv).then(function(ret) {
          if (String(ret.code) === '20000') {
            GM_setValue('wig_card', cv);
            gateStatus('💖 激活成功~ 到期：' + (ret.expires || ''), '#10B981');
            setTimeout(function(){ onAuthSuccess(ret.token, cv, ret.expires); }, 600);
          } else {
            gateStatus('😢 ' + (ret.msg || '登录失败'), '#FF4F9A');
          }
        }).catch(function() { gateStatus('❌ 网络错误，请重试', '#FF4F9A'); });
      }
      btn.addEventListener('click', doLogin);
      input.addEventListener('keydown', function(e){ if (e.key === 'Enter') doLogin(); });
    }, 50);
    // 公告（fire-and-forget）
    wigRequest('GET', '/api/announcement/' + wigTs() + '/' + WIG_CFG.appid).then(function(txt) {
      var el = document.getElementById('__wig_ann');
      if (el && txt) el.textContent = txt;
    }).catch(function(){});
  }

  function onAuthSuccess(token, card) {
    _authOk = true; _curToken = token; _curCard = card;
    var mask = document.getElementById('__wig_gate');
    if (mask && mask.parentNode) mask.parentNode.removeChild(mask);
    if (_heartTimer) clearInterval(_heartTimer);
    _heartTimer = setInterval(function() {
      wigHeartbeat(_curToken).then(function(ret) {
        if (String(ret.code) !== '10000') {
          wigLogin(_curCard).then(function(r2) {
            if (String(r2.code) === '20000') { _curToken = r2.token; }
            else { _authOk = false; buildGate(); }
          }).catch(function(){ _authOk = false; buildGate(); });
        }
      }).catch(function(){});
    }, 60000);
    // 版本检查（fire-and-forget）
    wigRequest('GET', '/api/versionApp/' + wigTs() + '/' + WIG_CFG.appid).then(function(raw) {
      try {
        var vc = JSON.parse(raw);
        var nv = vc.app_version;
        if (nv && cmpVer(WIG_CFG.localVer, nv)) {
          var note = vc.update_announcement || '请更新到最新版本';
          var url = vc.update_url || 'https://www.wigwy.xyz/';
          var um = document.createElement('div');
          um.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483646;background:rgba(42,26,46,0.8);display:flex;align-items:center;justify-content:center;';
          um.innerHTML = '<div style="width:280px;background:#fff;border-radius:24px;padding:24px;text-align:center;">' +
            '<div style="font-size:36px;">🎀</div>' +
            '<div style="font-size:18px;font-weight:bold;color:#FF4F9A;margin:6px 0;">发现新版本</div>' +
            '<div style="font-size:12px;color:#9B7EA8;margin:4px 0;">当前 v' + WIG_CFG.localVer + ' → 最新 v' + nv + '</div>' +
            '<div style="font-size:13px;color:#5A4A5A;margin:14px 0;line-height:1.5;">' + note + '</div>' +
            '<a href="' + url + '" target="_blank" style="display:block;padding:12px;border-radius:23px;background:linear-gradient(135deg,#FF7EB9,#FF4F9A);color:#fff;text-decoration:none;font-weight:bold;">✨ 立即更新</a>' +
          '</div>';
          document.documentElement.appendChild(um);
        }
      } catch(e){}
    }).catch(function(){});
  }

  function tryAutoLogin() {
    var saved = GM_getValue('wig_card', '');
    if (!saved) return;
    gateStatus('🌸 自动登录中...', '#B565D9');
    wigLogin(saved).then(function(ret) {
      if (String(ret.code) === '20000') {
        gateStatus('💖 自动登录成功', '#10B981');
        setTimeout(function(){ onAuthSuccess(ret.token, saved, ret.expires); }, 400);
      } else {
        gateStatus('卡密已失效，请重新输入', '#FF4F9A');
      }
    }).catch(function(){ gateStatus('网络异常，请检查网络', '#FF4F9A'); });
  }

  buildGate();
  calibrateTime();
  tryAutoLogin();
  /* ==================== WIG 门禁结束 ==================== */

    // 已去除 Base64 加密，以下为明文字符串
  var MSG = "不知名公益色色 by：小宾制作";
  var LINK = "https://t.me/DOULEWSS";
  var POPUP = "<p style=\"font-size:15px\">不知名公益色色 by：小宾制作</p><p style=\"font-size:15px\"><a href=\"https://t.me/DOULEWSS\">https://t.me/DOULEWSS</a></p>";
  var DIALOG = "<p style=\"font-size:14px\">不知名公益色色 by：小宾制作</p><p style=\"font-size:14px\"><a href=\"https://t.me/DOULEWSS\">https://t.me/DOULEWSS</a></p>";
  var SQ = "<div style=\"color:white;font-size:16px\"><p>不知名公益色色 by：小宾制作</p><p><a href=\"https://t.me/DOULEWSS\">https://t.me/DOULEWSS</a></p></div>";
  var SAVE = "<p style=\"font-size:15px\">不知名公益色色 by：小宾制作</p><p style=\"font-size:15px\"><a href=\"https://t.me/DOULEWSS\">https://t.me/DOULEWSS</a></p>";
  var QUESTION = "[{\"question\":\"不知名公益色色 by：小宾制作\",\"answer\":\"不知名公益色色 by：小宾制作\"}]";
  var UPDATE = "{\"apksize\":\"15M\",\"force\":0,\"text\":\"不知名公益色色 by：小宾制作\",\"url\":\"https://t.me/DOULEWSS\",\"version\":\"2.2.0\"}";
  var QQ = "{\"qq\":\"\",\"qqqun\":\"\"}";

  var BLANK_IMG = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

  var TG_QR = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHN0eWxlPSJ3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0gMTIgMTIgTCAxOSAxMiBMIDE5IDE5IEwgMTIgMTkgTCAxMiAxMiBBIDAgMCAwIDAgMSAxMiAxMiBNIDE5IDEyIEwgMjYgMTIgTCAyNiAxOSBMIDE5IDE5IEwgMTkgMTIgTSAyNiAxMiBMIDMzIDEyIEwgMzMgMTkgTCAyNiAxOSBMIDI2IDEyIE0gMzMgMTIgTCA0MCAxMiBMIDQwIDE5IEwgMzMgMTkgTCAzMyAxMiBNIDQwIDEyIEwgNDcgMTIgTCA0NyAxOSBMIDQwIDE5IEwgNDAgMTIgTSA0NyAxMiBMIDU0IDEyIEwgNTQgMTkgTCA0NyAxOSBMIDQ3IDEyIE0gNTQgMTIgTCA2MSAxMiBBIDAgMCAwIDAgMSA2MSAxMiBMIDYxIDE5IEwgNTQgMTkgTCA1NCAxMiBNIDY4IDEyIEwgNzUgMTIgQSAwIDAgMCAwIDEgNzUgMTIgTCA3NSAxOSBMIDY4IDE5IEwgNjggMTIgQSAwIDAgMCAwIDEgNjggMTIgTSA4MiAxMiBMIDg5IDEyIEwgODkgMTkgTCA4MiAxOSBBIDAgMCAwIDAgMSA4MiAxOSBMIDgyIDEyIEEgMCAwIDAgMCAxIDgyIDEyIE0gODkgMTIgTCA5NiAxMiBMIDk2IDE5IEwgODkgMTkgTCA4OSAxMiBNIDk2IDEyIEwgMTAzIDEyIEwgMTAzIDE5IEwgOTYgMTkgTCA5NiAxMiBNIDEwMyAxMiBMIDExMCAxMiBMIDExMCAxOSBMIDEwMyAxOSBMIDEwMyAxMiBNIDExMCAxMiBMIDExNyAxMiBMIDExNyAxOSBMIDExMCAxOSBMIDExMCAxMiBNIDExNyAxMiBMIDEyNCAxMiBBIDAgMCAwIDAgMSAxMjQgMTIgTCAxMjQgMTkgQSAwIDAgMCAwIDEgMTI0IDE5IEwgMTE3IDE5IEwgMTE3IDEyIE0gMTM4IDEyIEwgMTQ1IDEyIEwgMTQ1IDE5IEwgMTM4IDE5IEwgMTM4IDEyIEEgMCAwIDAgMCAxIDEzOCAxMiBNIDE0NSAxMiBMIDE1MiAxMiBMIDE1MiAxOSBMIDE0NSAxOSBMIDE0NSAxMiBNIDE1MiAxMiBMIDE1OSAxMiBMIDE1OSAxOSBMIDE1MiAxOSBMIDE1MiAxMiBNIDE1OSAxMiBMIDE2NiAxMiBMIDE2NiAxOSBMIDE1OSAxOSBMIDE1OSAxMiBNIDE2NiAxMiBMIDE3MyAxMiBMIDE3MyAxOSBMIDE2NiAxOSBMIDE2NiAxMiBNIDE3MyAxMiBMIDE4MCAxMiBMIDE4MCAxOSBMIDE3MyAxOSBMIDE3MyAxMiBNIDE4MCAxMiBMIDE4NyAxMiBBIDAgMCAwIDAgMSAxODcgMTIgTCAxODcgMTkgTCAxODAgMTkgTCAxODAgMTIgTSAxMiAxOSBMIDE5IDE5IEwgMTkgMjYgTCAxMiAyNiBMIDEyIDE5IE0gMTkgMTkgTCAxOSAxOSBMIDE5IDE5IEEgMCAwIDAgMCAxIDE5IDE5IE0gNTQgMTkgTCA1NCAxOSBMIDU0IDE5IEEgMCAwIDAgMCAxIDU0IDE5IE0gNTQgMTkgTCA2MSAxOSBMIDYxIDI2IEwgNTQgMjYgTCA1NCAxOSBNIDY4IDE5IEwgNzUgMTkgTCA3NSAyNiBMIDY4IDI2IEwgNjggMTkgTSA4OSAxOSBMIDg5IDE5IEwgODkgMTkgQSAwIDAgMCAwIDEgODkgMTkgTSA4OSAyNiBMIDg5IDI2IEwgODkgMjYgQSAwIDAgMCAwIDEgODkgMjYgTSA4OSAxOSBMIDk2IDE5IEwgOTYgMjYgTCA4OSAyNiBMIDg5IDE5IE0gOTYgMTkgTCAxMDMgMTkgTCAxMDMgMjYgTCA5NiAyNiBMIDk2IDE5IE0gMTAzIDE5IEwgMTEwIDE5IEwgMTEwIDI2IEwgMTAzIDI2IEwgMTAzIDE5IE0gMTEwIDE5IEwgMTEwIDE5IEwgMTEwIDE5IEEgMCAwIDAgMCAxIDExMCAxOSBNIDExMCAyNiBMIDExMCAyNiBMIDExMCAyNiBBIDAgMCAwIDAgMSAxMTAgMjYgTSAxMzggMTkgTCAxNDUgMTkgTCAxNDUgMjYgTCAxMzggMjYgTCAxMzggMTkgTSAxNDUgMTkgTCAxNDUgMTkgTCAxNDUgMTkgQSAwIDAgMCAwIDEgMTQ1IDE5IE0gMTgwIDE5IEwgMTgwIDE5IEwgMTgwIDE5IEEgMCAwIDAgMCAxIDE4MCAxOSBNIDE4MCAxOSBMIDE4NyAxOSBMIDE4NyAyNiBMIDE4MCAyNiBMIDE4MCAxOSBNIDEyIDI2IEwgMTkgMjYgTCAxOSAzMyBMIDEyIDMzIEwgMTIgMjYgTSAyNiAyNiBMIDMzIDI2IEwgMzMgMzMgTCAyNiAzMyBMIDI2IDI2IEEgMCAwIDAgMCAxIDI2IDI2IE0gMzMgMjYgTCA0MCAyNiBMIDQwIDMzIEwgMzMgMzMgTCAzMyAyNiBNIDQwIDI2IEwgNDcgMjYgQSAwIDAgMCAwIDEgNDcgMjYgTCA0NyAzMyBMIDQwIDMzIEwgNDAgMjYgTSA1NCAyNiBMIDYxIDI2IEwgNjEgMzMgTCA1NCAzMyBMIDU0IDI2IE0gNjggMjYgTCA3NSAyNiBMIDc1IDMzIEEgMCAwIDAgMCAxIDc1IDMzIEwgNjggMzMgQSAwIDAgMCAwIDEgNjggMzMgTCA2OCAyNiBNIDgyIDI2IEwgODkgMjYgTCA4OSAzMyBMIDgyIDMzIEEgMCAwIDAgMCAxIDgyIDMzIEwgODIgMjYgQSAwIDAgMCAwIDEgODIgMjYgTSA4OSAyNiBMIDk2IDI2IEwgOTYgMzMgTCA4OSAzMyBMIDg5IDI2IE0gOTYgMjYgTCAxMDMgMjYgTCAxMDMgMzMgTCA5NiAzMyBMIDk2IDI2IE0gMTAzIDI2IEwgMTEwIDI2IEwgMTEwIDMzIEwgMTAzIDMzIEwgMTAzIDI2IE0gMTEwIDI2IEwgMTE3IDI2IEwgMTE3IDMzIEwgMTEwIDMzIEwgMTEwIDI2IE0gMTE3IDI2IEwgMTI0IDI2IEEgMCAwIDAgMCAxIDEyNCAyNiBMIDEyNCAzMyBMIDExNyAzMyBMIDExNyAyNiBNIDEyNCAzMyBMIDEyNCAzMyBMIDEyNCAzMyBBIDAgMCAwIDAgMSAxMjQgMzMgTSAxMzggMjYgTCAxNDUgMjYgTCAxNDUgMzMgTCAxMzggMzMgTCAxMzggMjYgTSAxNTIgMjYgTCAxNTkgMjYgTCAxNTkgMzMgTCAxNTIgMzMgTCAxNTIgMjYgQSAwIDAgMCAwIDEgMTUyIDI2IE0gMTU5IDI2IEwgMTY2IDI2IEwgMTY2IDMzIEwgMTU5IDMzIEwgMTU5IDI2IE0gMTY2IDI2IEwgMTczIDI2IEEgMCAwIDAgMCAxIDE3MyAyNiBMIDE3MyAzMyBMIDE2NiAzMyBMIDE2NiAyNiBNIDE4MCAyNiBMIDE4NyAyNiBMIDE4NyAzMyBMIDE4MCAzMyBMIDE4MCAyNiBNIDEyIDMzIEwgMTkgMzMgTCAxOSA0MCBMIDEyIDQwIEwgMTIgMzMgTSAyNiAzMyBMIDMzIDMzIEwgMzMgNDAgTCAyNiA0MCBMIDI2IDMzIE0gMzMgMzMgTCA0MCAzMyBMIDQwIDQwIEwgMzMgNDAgTCAzMyAzMyBNIDQwIDMzIEwgNDcgMzMgTCA0NyA0MCBMIDQwIDQwIEwgNDAgMzMgTSA1NCAzMyBMIDYxIDMzIEwgNjEgNDAgTCA1NCA0MCBMIDU0IDMzIE0gODkgMzMgTCA4OSAzMyBMIDg5IDMzIEEgMCAwIDAgMCAxIDg5IDMzIE0gODkgMzMgTCA5NiAzMyBMIDk2IDQwIEwgODkgNDAgTCA4OSAzMyBNIDk2IDMzIEwgMTAzIDMzIEwgMTAzIDQwIEEgMCAwIDAgMCAxIDEwMyA0MCBMIDk2IDQwIEwgOTYgMzMgTSAxMDMgMzMgTCAxMDMgMzMgTCAxMDMgMzMgQSAwIDAgMCAwIDEgMTAzIDMzIE0gMTE3IDMzIEwgMTE3IDMzIEwgMTE3IDMzIEEgMCAwIDAgMCAxIDExNyAzMyBNIDExNyAzMyBMIDEyNCAzMyBMIDEyNCA0MCBMIDExNyA0MCBMIDExNyAzMyBNIDEyNCAzMyBMIDEzMSAzMyBBIDAgMCAwIDAgMSAxMzEgMzMgTCAxMzEgNDAgTCAxMjQgNDAgTCAxMjQgMzMgTSAxMzggMzMgTCAxNDUgMzMgTCAxNDUgNDAgTCAxMzggNDAgTCAxMzggMzMgTSAxNTIgMzMgTCAxNTkgMzMgTCAxNTkgNDAgTCAxNTIgNDAgTCAxNTIgMzMgTSAxNTkgMzMgTCAxNjYgMzMgTCAxNjYgNDAgTCAxNTkgNDAgTCAxNTkgMzMgTSAxNjYgMzMgTCAxNzMgMzMgTCAxNzMgNDAgTCAxNjYgNDAgTCAxNjYgMzMgTSAxODAgMzMgTCAxODcgMzMgTCAxODcgNDAgTCAxODAgNDAgTCAxODAgMzMgTSAxMiA0MCBMIDE5IDQwIEwgMTkgNDcgTCAxMiA0NyBMIDEyIDQwIE0gMjYgNDAgTCAzMyA0MCBMIDMzIDQ3IEwgMjYgNDcgQSAwIDAgMCAwIDEgMjYgNDcgTCAyNiA0MCBNIDMzIDQwIEwgNDAgNDAgTCA0MCA0NyBMIDMzIDQ3IEwgMzMgNDAgTSA0MCA0MCBMIDQ3IDQwIEwgNDcgNDcgQSAwIDAgMCAwIDEgNDcgNDcgTCA0MCA0NyBMIDQwIDQwIE0gNTQgNDAgTCA2MSA0MCBMIDYxIDQ3IEwgNTQgNDcgTCA1NCA0MCBNIDY4IDQwIEwgNzUgNDAgQSAwIDAgMCAwIDEgNzUgNDAgTCA3NSA0NyBBIDAgMCAwIDAgMSA3NSA0NyBMIDY4IDQ3IEEgMCAwIDAgMCAxIDY4IDQ3IEwgNjggNDAgQSAwIDAgMCAwIDEgNjggNDAgTSA4OSA0MCBMIDk2IDQwIEwgOTYgNDcgTCA4OSA0NyBMIDg5IDQwIE0gOTYgNDAgTCA5NiA0MCBMIDk2IDQwIEEgMCAwIDAgMCAxIDk2IDQwIE0gMTE3IDQwIEwgMTI0IDQwIEwgMTI0IDQ3IEwgMTE3IDQ3IEEgMCAwIDAgMCAxIDExNyA0NyBMIDExNyA0MCBNIDEyNCA0MCBMIDEzMSA0MCBMIDEzMSA0NyBBIDAgMCAwIDAgMSAxMzEgNDcgTCAxMjQgNDcgTCAxMjQgNDAgTSAxMzggNDAgTCAxNDUgNDAgTCAxNDUgNDcgTCAxMzggNDcgTCAxMzggNDAgTSAxNTIgNDAgTCAxNTkgNDAgTCAxNTkgNDcgTCAxNTIgNDcgQSAwIDAgMCAwIDEgMTUyIDQ3IEwgMTUyIDQwIE0gMTU5IDQwIEwgMTY2IDQwIEwgMTY2IDQ3IEwgMTU5IDQ3IEwgMTU5IDQwIE0gMTY2IDQwIEwgMTczIDQwIEwgMTczIDQ3IEEgMCAwIDAgMCAxIDE3MyA0NyBMIDE2NiA0NyBMIDE2NiA0MCBNIDE4MCA0MCBMIDE4NyA0MCBMIDE4NyA0NyBMIDE4MCA0NyBMIDE4MCA0MCBNIDEyIDQ3IEwgMTkgNDcgTCAxOSA1NCBMIDEyIDU0IEwgMTIgNDcgTSAxOSA1NCBMIDE5IDU0IEwgMTkgNTQgQSAwIDAgMCAwIDEgMTkgNTQgTSA1NCA1NCBMIDU0IDU0IEwgNTQgNTQgQSAwIDAgMCAwIDEgNTQgNTQgTSA1NCA0NyBMIDYxIDQ3IEwgNjEgNTQgTCA1NCA1NCBMIDU0IDQ3IE0gODkgNDcgTCA5NiA0NyBMIDk2IDU0IEEgMCAwIDAgMCAxIDk2IDU0IEwgODkgNTQgQSAwIDAgMCAwIDEgODkgNTQgTCA4OSA0NyBNIDEwMyA0NyBMIDExMCA0NyBMIDExMCA1NCBMIDEwMyA1NCBBIDAgMCAwIDAgMSAxMDMgNTQgTCAxMDMgNDcgQSAwIDAgMCAwIDEgMTAzIDQ3IE0gMTEwIDQ3IEwgMTE3IDQ3IEEgMCAwIDAgMCAxIDExNyA0NyBMIDExNyA1NCBMIDExMCA1NCBMIDExMCA0NyBNIDEzOCA0NyBMIDE0NSA0NyBMIDE0NSA1NCBMIDEzOCA1NCBMIDEzOCA0NyBNIDE0NSA1NCBMIDE0NSA1NCBMIDE0NSA1NCBBIDAgMCAwIDAgMSAxNDUgNTQgTSAxODAgNTQgTCAxODAgNTQgTCAxODAgNTQgQSAwIDAgMCAwIDEgMTgwIDU0IE0gMTgwIDQ3IEwgMTg3IDQ3IEwgMTg3IDU0IEwgMTgwIDU0IEwgMTgwIDQ3IE0gMTIgNTQgTCAxOSA1NCBMIDE5IDYxIEwgMTIgNjEgQSAwIDAgMCAwIDEgMTIgNjEgTCAxMiA1NCBNIDE5IDU0IEwgMjYgNTQgTCAyNiA2MSBMIDE5IDYxIEwgMTkgNTQgTSAyNiA1NCBMIDMzIDU0IEwgMzMgNjEgTCAyNiA2MSBMIDI2IDU0IE0gMzMgNTQgTCA0MCA1NCBMIDQwIDYxIEwgMzMgNjEgTCAzMyA1NCBNIDQwIDU0IEwgNDcgNTQgTCA0NyA2MSBMIDQwIDYxIEwgNDAgNTQgTSA0NyA1NCBMIDU0IDU0IEwgNTQgNjEgTCA0NyA2MSBMIDQ3IDU0IE0gNTQgNTQgTCA2MSA1NCBMIDYxIDYxIEEgMCAwIDAgMCAxIDYxIDYxIEwgNTQgNjEgTCA1NCA1NCBNIDY4IDU0IEwgNzUgNTQgQSAwIDAgMCAwIDEgNzUgNTQgTCA3NSA2MSBBIDAgMCAwIDAgMSA3NSA2MSBMIDY4IDYxIEEgMCAwIDAgMCAxIDY4IDYxIEwgNjggNTQgQSAwIDAgMCAwIDEgNjggNTQgTSA4MiA2MSBMIDgyIDYxIEwgODIgNjEgQSAwIDAgMCAwIDEgODIgNjEgTSA4MiA1NCBMIDg5IDU0IEEgMCAwIDAgMCAxIDg5IDU0IEwgODkgNjEgTCA4MiA2MSBMIDgyIDU0IEEgMCAwIDAgMCAxIDgyIDU0IE0gOTYgNTQgTCAxMDMgNTQgQSAwIDAgMCAwIDEgMTAzIDU0IEwgMTAzIDYxIEwgOTYgNjEgTCA5NiA1NCBBIDAgMCAwIDAgMSA5NiA1NCBNIDExMCA1NCBMIDExMCA1NCBMIDExMCA1NCBBIDAgMCAwIDAgMSAxMTAgNTQgTSAxMDMgNjEgTCAxMDMgNjEgTCAxMDMgNjEgQSAwIDAgMCAwIDEgMTAzIDYxIE0gMTEwIDU0IEwgMTE3IDU0IEwgMTE3IDYxIEEgMCAwIDAgMCAxIDExNyA2MSBMIDExMCA2MSBBIDAgMCAwIDAgMSAxMTAgNjEgTCAxMTAgNTQgTSAxMjQgNTQgTCAxMzEgNTQgQSAwIDAgMCAwIDEgMTMxIDU0IEwgMTMxIDYxIEwgMTI0IDYxIEwgMTI0IDU0IEEgMCAwIDAgMCAxIDEyNCA1NCBNIDEzOCA1NCBMIDE0NSA1NCBMIDE0NSA2MSBMIDEzOCA2MSBBIDAgMCAwIDAgMSAxMzggNjEgTCAxMzggNTQgTSAxNDUgNTQgTCAxNTIgNTQgTCAxNTIgNjEgTCAxNDUgNjEgTCAxNDUgNTQgTSAxNTIgNTQgTCAxNTkgNTQgTCAxNTkgNjEgTCAxNTIgNjEgTCAxNTIgNTQgTSAxNTkgNTQgTCAxNjYgNTQgTCAxNjYgNjEgTCAxNTkgNjEgTCAxNTkgNTQgTSAxNjYgNTQgTCAxNzMgNTQgTCAxNzMgNjEgTCAxNjYgNjEgTCAxNjYgNTQgTSAxNzMgNTQgTCAxODAgNTQgTCAxODAgNjEgTCAxNzMgNjEgTCAxNzMgNTQgTSAxODAgNTQgTCAxODcgNTQgTCAxODcgNjEgQSAwIDAgMCAwIDEgMTg3IDYxIEwgMTgwIDYxIEwgMTgwIDU0IE0gNzUgNjEgTCA4MiA2MSBMIDgyIDY4IEwgNzUgNjggQSAwIDAgMCAwIDEgNzUgNjggTCA3NSA2MSBBIDAgMCAwIDAgMSA3NSA2MSBNIDgyIDYxIEwgODkgNjEgTCA4OSA2OCBBIDAgMCAwIDAgMSA4OSA2OCBMIDgyIDY4IEwgODIgNjEgTSA5NiA2OCBMIDk2IDY4IEwgOTYgNjggQSAwIDAgMCAwIDEgOTYgNjggTSA5NiA2MSBMIDEwMyA2MSBMIDEwMyA2OCBMIDk2IDY4IEwgOTYgNjEgTSAxMDMgNjEgTCAxMTAgNjEgQSAwIDAgMCAwIDEgMTEwIDYxIEwgMTEwIDY4IEwgMTAzIDY4IEwgMTAzIDYxIE0gMTEwIDY4IEwgMTEwIDY4IEwgMTEwIDY4IEEgMCAwIDAgMCAxIDExMCA2OCBNIDEyNCA2MSBMIDEzMSA2MSBMIDEzMSA2OCBBIDAgMCAwIDAgMSAxMzEgNjggTCAxMjQgNjggQSAwIDAgMCAwIDEgMTI0IDY4IEwgMTI0IDYxIE0gMTIgNjggTCAxOSA2OCBBIDAgMCAwIDAgMSAxOSA2OCBMIDE5IDc1IEwgMTIgNzUgTCAxMiA2OCBBIDAgMCAwIDAgMSAxMiA2OCBNIDMzIDc1IEwgMzMgNzUgTCAzMyA3NSBBIDAgMCAwIDAgMSAzMyA3NSBNIDMzIDY4IEwgNDAgNjggTCA0MCA3NSBMIDMzIDc1IEwgMzMgNjggQSAwIDAgMCAwIDEgMzMgNjggTSA0MCA2OCBMIDQ3IDY4IEwgNDcgNzUgTCA0MCA3NSBMIDQwIDY4IE0gNDcgNjggTCA1NCA2OCBMIDU0IDc1IEwgNDcgNzUgTCA0NyA2OCBNIDU0IDY4IEwgNjEgNjggTCA2MSA3NSBMIDU0IDc1IEwgNTQgNjggTSA2MSA2OCBMIDY4IDY4IEwgNjggNzUgTCA2MSA3NSBMIDYxIDY4IE0gNjggNjggTCA3NSA2OCBBIDAgMCAwIDAgMSA3NSA2OCBMIDc1IDc1IEwgNjggNzUgTCA2OCA2OCBNIDg5IDY4IEwgOTYgNjggTCA5NiA3NSBMIDg5IDc1IEEgMCAwIDAgMCAxIDg5IDc1IEwgODkgNjggQSAwIDAgMCAwIDEgODkgNjggTSA5NiA2OCBMIDEwMyA2OCBMIDEwMyA3NSBMIDk2IDc1IEwgOTYgNjggTSAxMDMgNjggTCAxMTAgNjggTCAxMTAgNzUgTCAxMDMgNzUgTCAxMDMgNjggTSAxMTAgNjggTCAxMTcgNjggTCAxMTcgNzUgTCAxMTAgNzUgTCAxMTAgNjggTSAxMTcgNjggTCAxMjQgNjggQSAwIDAgMCAwIDEgMTI0IDY4IEwgMTI0IDc1IEEgMCAwIDAgMCAxIDEyNCA3NSBMIDExNyA3NSBMIDExNyA2OCBNIDEzMSA2OCBMIDEzOCA2OCBBIDAgMCAwIDAgMSAxMzggNjggTCAxMzggNzUgQSAwIDAgMCAwIDEgMTM4IDc1IEwgMTMxIDc1IEEgMCAwIDAgMCAxIDEzMSA3NSBMIDEzMSA2OCBBIDAgMCAwIDAgMSAxMzEgNjggTSAxNTIgNjggTCAxNTkgNjggQSAwIDAgMCAwIDEgMTU5IDY4IEwgMTU5IDc1IEwgMTUyIDc1IEwgMTUyIDY4IEEgMCAwIDAgMCAxIDE1MiA2OCBNIDE2NiA3NSBMIDE2NiA3NSBMIDE2NiA3NSBBIDAgMCAwIDAgMSAxNjYgNzUgTSAxNTkgNzUgTCAxNTkgNzUgTCAxNTkgNzUgQSAwIDAgMCAwIDEgMTU5IDc1IE0gMTY2IDY4IEwgMTczIDY4IEwgMTczIDc1IEwgMTY2IDc1IEwgMTY2IDY4IEEgMCAwIDAgMCAxIDE2NiA2OCBNIDE3MyA2OCBMIDE4MCA2OCBMIDE4MCA3NSBMIDE3MyA3NSBMIDE3MyA2OCBNIDE4MCA2OCBMIDE4NyA2OCBBIDAgMCAwIDAgMSAxODcgNjggTCAxODcgNzUgQSAwIDAgMCAwIDEgMTg3IDc1IEwgMTgwIDc1IEwgMTgwIDY4IE0gMTIgNzUgTCAxOSA3NSBMIDE5IDgyIEEgMCAwIDAgMCAxIDE5IDgyIEwgMTIgODIgQSAwIDAgMCAwIDEgMTIgODIgTCAxMiA3NSBNIDI2IDc1IEwgMzMgNzUgTCAzMyA4MiBMIDI2IDgyIEEgMCAwIDAgMCAxIDI2IDgyIEwgMjYgNzUgQSAwIDAgMCAwIDEgMjYgNzUgTSAzMyA3NSBMIDQwIDc1IEwgNDAgODIgTCAzMyA4MiBMIDMzIDc1IE0gNDAgNzUgTCA0MCA3NSBMIDQwIDc1IEEgMCAwIDAgMCAxIDQwIDc1IE0gNDcgNzUgTCA0NyA3NSBMIDQ3IDc1IEEgMCAwIDAgMCAxIDQ3IDc1IE0gNDcgNzUgTCA1NCA3NSBMIDU0IDgyIEwgNDcgODIgTCA0NyA3NSBNIDU0IDc1IEwgNTQgNzUgTCA1NCA3NSBBIDAgMCAwIDAgMSA1NCA3NSBNIDYxIDc1IEwgNjEgNzUgTCA2MSA3NSBBIDAgMCAwIDAgMSA2MSA3NSBNIDYxIDgyIEwgNjEgODIgTCA2MSA4MiBBIDAgMCAwIDAgMSA2MSA4MiBNIDU0IDgyIEwgNTQgODIgTCA1NCA4MiBBIDAgMCAwIDAgMSA1NCA4MiBNIDYxIDc1IEwgNjggNzUgTCA2OCA4MiBMIDYxIDgyIEwgNjEgNzUgTSA2OCA3NSBMIDc1IDc1IEwgNzUgODIgTCA2OCA4MiBMIDY4IDc1IE0gODIgNzUgTCA4OSA3NSBBIDAgMCAwIDAgMSA4OSA3NSBMIDg5IDgyIEwgODIgODIgTCA4MiA3NSBBIDAgMCAwIDAgMSA4MiA3NSBNIDk2IDc1IEwgOTYgNzUgTCA5NiA3NSBBIDAgMCAwIDAgMSA5NiA3NSBNIDg5IDgyIEwgODkgODIgTCA4OSA4MiBBIDAgMCAwIDAgMSA4OSA4MiBNIDk2IDc1IEwgMTAzIDc1IEwgMTAzIDgyIEEgMCAwIDAgMCAxIDEwMyA4MiBMIDk2IDgyIEEgMCAwIDAgMCAxIDk2IDgyIEwgOTYgNzUgTSAxMDMgNzUgTCAxMDMgNzUgTCAxMDMgNzUgQSAwIDAgMCAwIDEgMTAzIDc1IE0gMTUyIDc1IEwgMTU5IDc1IEwgMTU5IDgyIEwgMTUyIDgyIEwgMTUyIDc1IE0gMTU5IDc1IEwgMTY2IDc1IEwgMTY2IDgyIEwgMTU5IDgyIEwgMTU5IDc1IE0gMTY2IDc1IEwgMTczIDc1IEwgMTczIDgyIEwgMTY2IDgyIEwgMTY2IDc1IE0gMTczIDc1IEwgMTgwIDc1IEwgMTgwIDgyIEEgMCAwIDAgMCAxIDE4MCA4MiBMIDE3MyA4MiBMIDE3MyA3NSBNIDE4MCA3NSBMIDE4MCA3NSBMIDE4MCA3NSBBIDAgMCAwIDAgMSAxODAgNzUgTSAzMyA4MiBMIDMzIDgyIEwgMzMgODIgQSAwIDAgMCAwIDEgMzMgODIgTSAzMyA4OSBMIDMzIDg5IEwgMzMgODkgQSAwIDAgMCAwIDEgMzMgODkgTSAzMyA4MiBMIDQwIDgyIEwgNDAgODkgTCAzMyA4OSBMIDMzIDgyIE0gNDcgODkgTCA0NyA4OSBMIDQ3IDg5IEEgMCAwIDAgMCAxIDQ3IDg5IE0gNDAgODkgTCA0MCA4OSBMIDQwIDg5IEEgMCAwIDAgMCAxIDQwIDg5IE0gNDcgODIgTCA1NCA4MiBMIDU0IDg5IEwgNDcgODkgTCA0NyA4MiBNIDU0IDgyIEwgNjEgODIgTCA2MSA4OSBMIDU0IDg5IEwgNTQgODIgTSA2MSA4MiBMIDY4IDgyIEwgNjggODkgTCA2MSA4OSBMIDYxIDgyIE0gNjggODIgTCA3NSA4MiBMIDc1IDg5IEwgNjggODkgTCA2OCA4MiBNIDgyIDgyIEwgODkgODIgTCA4OSA4OSBMIDgyIDg5IEwgODIgODIgTSA4OSA4MiBMIDk2IDgyIEEgMCAwIDAgMCAxIDk2IDgyIEwgOTYgODkgTCA4OSA4OSBMIDg5IDgyIE0gMTAzIDgyIEwgMTEwIDgyIEwgMTEwIDg5IEwgMTAzIDg5IEEgMCAwIDAgMCAxIDEwMyA4OSBMIDEwMyA4MiBBIDAgMCAwIDAgMSAxMDMgODIgTSAxMTAgODIgTCAxMTcgODIgTCAxMTcgODkgTCAxMTAgODkgTCAxMTAgODIgTSAxMTcgODIgTCAxMjQgODIgTCAxMjQgODkgTCAxMTcgODkgTCAxMTcgODIgTSAxMjQgODIgTCAxMzEgODIgQSAwIDAgMCAwIDEgMTMxIDgyIEwgMTMxIDg5IEEgMCAwIDAgMCAxIDEzMSA4OSBMIDEyNCA4OSBMIDEyNCA4MiBNIDE1MiA4MiBMIDE1OSA4MiBMIDE1OSA4OSBMIDE1MiA4OSBBIDAgMCAwIDAgMSAxNTIgODkgTCAxNTIgODIgTSAxNTkgODIgTCAxNjYgODIgTCAxNjYgODkgTCAxNTkgODkgTCAxNTkgODIgTSAxNjYgODIgTCAxNjYgODIgTCAxNjYgODIgQSAwIDAgMCAwIDEgMTY2IDgyIE0gMTY2IDg5IEwgMTY2IDg5IEwgMTY2IDg5IEEgMCAwIDAgMCAxIDE2NiA4OSBNIDE4MCA4OSBMIDE4MCA4OSBMIDE4MCA4OSBBIDAgMCAwIDAgMSAxODAgODkgTSAxODAgODIgTCAxODcgODIgQSAwIDAgMCAwIDEgMTg3IDgyIEwgMTg3IDg5IEwgMTgwIDg5IEwgMTgwIDgyIEEgMCAwIDAgMCAxIDE4MCA4MiBNIDE5IDk2IEwgMTkgOTYgTCAxOSA5NiBBIDAgMCAwIDAgMSAxOSA5NiBNIDE5IDg5IEwgMjYgODkgTCAyNiA5NiBMIDE5IDk2IEwgMTkgODkgQSAwIDAgMCAwIDEgMTkgODkgTSAyNiA4OSBMIDMzIDg5IEwgMzMgOTYgTCAyNiA5NiBMIDI2IDg5IE0gMzMgODkgTCA0MCA4OSBMIDQwIDk2IEwgMzMgOTYgTCAzMyA4OSBNIDQwIDg5IEwgNDcgODkgTCA0NyA5NiBMIDQwIDk2IEwgNDAgODkgTSA0NyA4OSBMIDU0IDg5IEwgNTQgOTYgTCA0NyA5NiBMIDQ3IDg5IE0gNTQgODkgTCA1NCA4OSBMIDU0IDg5IEEgMCAwIDAgMCAxIDU0IDg5IE0gNTQgOTYgTCA1NCA5NiBMIDU0IDk2IEEgMCAwIDAgMCAxIDU0IDk2IE0gNjggODkgTCA2OCA4OSBMIDY4IDg5IEEgMCAwIDAgMCAxIDY4IDg5IE0gNjggODkgTCA3NSA4OSBMIDc1IDk2IEEgMCAwIDAgMCAxIDc1IDk2IEwgNjggOTYgQSAwIDAgMCAwIDEgNjggOTYgTCA2OCA4OSBNIDgyIDg5IEwgODkgODkgTCA4OSA5NiBMIDgyIDk2IEEgMCAwIDAgMCAxIDgyIDk2IEwgODIgODkgTSA4OSA4OSBMIDk2IDg5IEwgOTYgOTYgTCA4OSA5NiBMIDg5IDg5IE0gOTYgOTYgTCA5NiA5NiBMIDk2IDk2IEEgMCAwIDAgMCAxIDk2IDk2IE0gMTEwIDg5IEwgMTEwIDg5IEwgMTEwIDg5IEEgMCAwIDAgMCAxIDExMCA4OSBNIDExMCA4OSBMIDExNyA4OSBMIDExNyA5NiBMIDExMCA5NiBBIDAgMCAwIDAgMSAxMTAgOTYgTCAxMTAgODkgTSAxMTcgODkgTCAxMjQgODkgTCAxMjQgOTYgQSAwIDAgMCAwIDEgMTI0IDk2IEwgMTE3IDk2IEwgMTE3IDg5IE0gMTI0IDg5IEwgMTI0IDg5IEwgMTI0IDg5IEEgMCAwIDAgMCAxIDEyNCA4OSBNIDEzMSA4OSBMIDEzOCA4OSBBIDAgMCAwIDAgMSAxMzggODkgTCAxMzggOTYgQSAwIDAgMCAwIDEgMTM4IDk2IEwgMTMxIDk2IEEgMCAwIDAgMCAxIDEzMSA5NiBMIDEzMSA4OSBBIDAgMCAwIDAgMSAxMzEgODkgTSAxNDUgODkgTCAxNTIgODkgQSAwIDAgMCAwIDEgMTUyIDg5IEwgMTUyIDk2IEEgMCAwIDAgMCAxIDE1MiA5NiBMIDE0NSA5NiBBIDAgMCAwIDAgMSAxNDUgOTYgTCAxNDUgODkgQSAwIDAgMCAwIDEgMTQ1IDg5IE0gMTU5IDg5IEwgMTU5IDg5IEwgMTU5IDg5IEEgMCAwIDAgMCAxIDE1OSA4OSBNIDE1OSA4OSBMIDE2NiA4OSBMIDE2NiA5NiBMIDE1OSA5NiBBIDAgMCAwIDAgMSAxNTkgOTYgTCAxNTkgODkgTSAxNjYgODkgTCAxNzMgODkgTCAxNzMgOTYgTCAxNjYgOTYgTCAxNjYgODkgTSAxNzMgODkgTCAxODAgODkgTCAxODAgOTYgTCAxNzMgOTYgTCAxNzMgODkgTSAxODAgODkgTCAxODcgODkgTCAxODcgOTYgTCAxODAgOTYgTCAxODAgODkgTSAxMiA5NiBMIDE5IDk2IEwgMTkgMTAzIEwgMTIgMTAzIEwgMTIgOTYgQSAwIDAgMCAwIDEgMTIgOTYgTSAxOSA5NiBMIDI2IDk2IEwgMjYgMTAzIEwgMTkgMTAzIEwgMTkgOTYgTSAyNiA5NiBMIDI2IDk2IEwgMjYgOTYgQSAwIDAgMCAwIDEgMjYgOTYgTSAzMyA5NiBMIDMzIDk2IEwgMzMgOTYgQSAwIDAgMCAwIDEgMzMgOTYgTSAyNiAxMDMgTCAyNiAxMDMgTCAyNiAxMDMgQSAwIDAgMCAwIDEgMjYgMTAzIE0gMzMgOTYgTCA0MCA5NiBMIDQwIDEwMyBBIDAgMCAwIDAgMSA0MCAxMDMgTCAzMyAxMDMgQSAwIDAgMCAwIDEgMzMgMTAzIEwgMzMgOTYgTSA0MCA5NiBMIDQwIDk2IEwgNDAgOTYgQSAwIDAgMCAwIDEgNDAgOTYgTSA0NyA5NiBMIDQ3IDk2IEwgNDcgOTYgQSAwIDAgMCAwIDEgNDcgOTYgTSA0NyA5NiBMIDU0IDk2IEwgNTQgMTAzIEwgNDcgMTAzIEwgNDcgOTYgTSA1NCA5NiBMIDYxIDk2IEwgNjEgMTAzIEwgNTQgMTAzIEwgNTQgOTYgTSA2MSA5NiBMIDY4IDk2IEEgMCAwIDAgMCAxIDY4IDk2IEwgNjggMTAzIEEgMCAwIDAgMCAxIDY4IDEwMyBMIDYxIDEwMyBMIDYxIDk2IE0gODkgOTYgTCA4OSA5NiBMIDg5IDk2IEEgMCAwIDAgMCAxIDg5IDk2IE0gODkgOTYgTCA5NiA5NiBMIDk2IDEwMyBMIDg5IDEwMyBBIDAgMCAwIDAgMSA4OSAxMDMgTCA4OSA5NiBNIDk2IDk2IEwgMTAzIDk2IEwgMTAzIDEwMyBMIDk2IDEwMyBMIDk2IDk2IE0gMTAzIDk2IEwgMTEwIDk2IEEgMCAwIDAgMCAxIDExMCA5NiBMIDExMCAxMDMgTCAxMDMgMTAzIEwgMTAzIDk2IE0gMTI0IDk2IEwgMTMxIDk2IEEgMCAwIDAgMCAxIDEzMSA5NiBMIDEzMSAxMDMgTCAxMjQgMTAzIEwgMTI0IDk2IEEgMCAwIDAgMCAxIDEyNCA5NiBNIDEzOCA5NiBMIDE0NSA5NiBBIDAgMCAwIDAgMSAxNDUgOTYgTCAxNDUgMTAzIEEgMCAwIDAgMCAxIDE0NSAxMDMgTCAxMzggMTAzIEEgMCAwIDAgMCAxIDEzOCAxMDMgTCAxMzggOTYgQSAwIDAgMCAwIDEgMTM4IDk2IE0gMTgwIDk2IEwgMTgwIDk2IEwgMTgwIDk2IEEgMCAwIDAgMCAxIDE4MCA5NiBNIDE4MCA5NiBMIDE4NyA5NiBMIDE4NyAxMDMgQSAwIDAgMCAwIDEgMTg3IDEwMyBMIDE4MCAxMDMgQSAwIDAgMCAwIDEgMTgwIDEwMyBMIDE4MCA5NiBNIDEyIDEwMyBMIDE5IDEwMyBMIDE5IDExMCBMIDEyIDExMCBMIDEyIDEwMyBNIDE5IDEwMyBMIDI2IDEwMyBMIDI2IDExMCBMIDE5IDExMCBMIDE5IDEwMyBNIDI2IDEwMyBMIDMzIDEwMyBBIDAgMCAwIDAgMSAzMyAxMDMgTCAzMyAxMTAgQSAwIDAgMCAwIDEgMzMgMTEwIEwgMjYgMTEwIEwgMjYgMTAzIE0gNDcgMTAzIEwgNTQgMTAzIEwgNTQgMTEwIEEgMCAwIDAgMCAxIDU0IDExMCBMIDQ3IDExMCBBIDAgMCAwIDAgMSA0NyAxMTAgTCA0NyAxMDMgTSA1NCAxMDMgTCA1NCAxMDMgTCA1NCAxMDMgQSAwIDAgMCAwIDEgNTQgMTAzIE0gNjggMTAzIEwgNzUgMTAzIEEgMCAwIDAgMCAxIDc1IDEwMyBMIDc1IDExMCBBIDAgMCAwIDAgMSA3NSAxMTAgTCA2OCAxMTAgQSAwIDAgMCAwIDEgNjggMTEwIEwgNjggMTAzIEEgMCAwIDAgMCAxIDY4IDEwMyBNIDEwMyAxMDMgTCAxMDMgMTAzIEwgMTAzIDEwMyBBIDAgMCAwIDAgMSAxMDMgMTAzIE0gMTAzIDEwMyBMIDExMCAxMDMgTCAxMTAgMTEwIEEgMCAwIDAgMCAxIDExMCAxMTAgTCAxMDMgMTEwIEEgMCAwIDAgMCAxIDEwMyAxMTAgTCAxMDMgMTAzIE0gMTI0IDExMCBMIDEyNCAxMTAgTCAxMjQgMTEwIEEgMCAwIDAgMCAxIDEyNCAxMTAgTSAxMjQgMTAzIEwgMTMxIDEwMyBMIDEzMSAxMTAgTCAxMjQgMTEwIEwgMTI0IDEwMyBNIDEzMSAxMTAgTCAxMzEgMTEwIEwgMTMxIDExMCBBIDAgMCAwIDAgMSAxMzEgMTEwIE0gMTUyIDEwMyBMIDE1OSAxMDMgQSAwIDAgMCAwIDEgMTU5IDEwMyBMIDE1OSAxMTAgTCAxNTIgMTEwIEwgMTUyIDEwMyBBIDAgMCAwIDAgMSAxNTIgMTAzIE0gMTU5IDExMCBMIDE1OSAxMTAgTCAxNTkgMTEwIEEgMCAwIDAgMCAxIDE1OSAxMTAgTSAxNzMgMTEwIEwgMTczIDExMCBMIDE3MyAxMTAgQSAwIDAgMCAwIDEgMTczIDExMCBNIDE3MyAxMDMgTCAxODAgMTAzIEEgMCAwIDAgMCAxIDE4MCAxMDMgTCAxODAgMTEwIEwgMTczIDExMCBMIDE3MyAxMDMgQSAwIDAgMCAwIDEgMTczIDEwMyBNIDE4MCAxMTAgTCAxODAgMTEwIEwgMTgwIDExMCBBIDAgMCAwIDAgMSAxODAgMTEwIE0gMTIgMTEwIEwgMTkgMTEwIEwgMTkgMTE3IEwgMTIgMTE3IEwgMTIgMTEwIE0gMTkgMTEwIEwgMjYgMTEwIEwgMjYgMTE3IEEgMCAwIDAgMCAxIDI2IDExNyBMIDE5IDExNyBMIDE5IDExMCBNIDI2IDExMCBMIDI2IDExMCBMIDI2IDExMCBBIDAgMCAwIDAgMSAyNiAxMTAgTSA0MCAxMTcgTCA0MCAxMTcgTCA0MCAxMTcgQSAwIDAgMCAwIDEgNDAgMTE3IE0gNDAgMTEwIEwgNDcgMTEwIEEgMCAwIDAgMCAxIDQ3IDExMCBMIDQ3IDExNyBMIDQwIDExNyBMIDQwIDExMCBBIDAgMCAwIDAgMSA0MCAxMTAgTSA1NCAxMTAgTCA2MSAxMTAgQSAwIDAgMCAwIDEgNjEgMTEwIEwgNjEgMTE3IEEgMCAwIDAgMCAxIDYxIDExNyBMIDU0IDExNyBBIDAgMCAwIDAgMSA1NCAxMTcgTCA1NCAxMTAgQSAwIDAgMCAwIDEgNTQgMTEwIE0gNzUgMTEwIEwgODIgMTEwIEEgMCAwIDAgMCAxIDgyIDExMCBMIDgyIDExNyBBIDAgMCAwIDAgMSA4MiAxMTcgTCA3NSAxMTcgQSAwIDAgMCAwIDEgNzUgMTE3IEwgNzUgMTEwIEEgMCAwIDAgMCAxIDc1IDExMCBNIDg5IDExNyBMIDg5IDExNyBMIDg5IDExNyBBIDAgMCAwIDAgMSA4OSAxMTcgTSA4OSAxMTAgTCA5NiAxMTAgTCA5NiAxMTcgTCA4OSAxMTcgTCA4OSAxMTAgQSAwIDAgMCAwIDEgODkgMTEwIE0gOTYgMTEwIEwgMTAzIDExMCBBIDAgMCAwIDAgMSAxMDMgMTEwIEwgMTAzIDExNyBBIDAgMCAwIDAgMSAxMDMgMTE3IEwgOTYgMTE3IEwgOTYgMTEwIE0gMTE3IDExMCBMIDEyNCAxMTAgTCAxMjQgMTE3IEwgMTE3IDExNyBBIDAgMCAwIDAgMSAxMTcgMTE3IEwgMTE3IDExMCBBIDAgMCAwIDAgMSAxMTcgMTEwIE0gMTI0IDExMCBMIDEzMSAxMTAgTCAxMzEgMTE3IEwgMTI0IDExNyBMIDEyNCAxMTAgTSAxMzEgMTEwIEwgMTM4IDExMCBBIDAgMCAwIDAgMSAxMzggMTEwIEwgMTM4IDExNyBMIDEzMSAxMTcgTCAxMzEgMTEwIE0gMTM4IDExNyBMIDEzOCAxMTcgTCAxMzggMTE3IEEgMCAwIDAgMCAxIDEzOCAxMTcgTSAxNTIgMTEwIEwgMTU5IDExMCBMIDE1OSAxMTcgTCAxNTIgMTE3IEEgMCAwIDAgMCAxIDE1MiAxMTcgTCAxNTIgMTEwIE0gMTU5IDExMCBMIDE2NiAxMTAgTCAxNjYgMTE3IEwgMTU5IDExNyBMIDE1OSAxMTAgTSAxNjYgMTEwIEwgMTczIDExMCBMIDE3MyAxMTcgTCAxNjYgMTE3IEwgMTY2IDExMCBNIDE3MyAxMTAgTCAxODAgMTEwIEwgMTgwIDExNyBMIDE3MyAxMTcgTCAxNzMgMTEwIE0gMTgwIDExMCBMIDE4NyAxMTAgQSAwIDAgMCAwIDEgMTg3IDExMCBMIDE4NyAxMTcgTCAxODAgMTE3IEwgMTgwIDExMCBNIDEyIDExNyBMIDE5IDExNyBMIDE5IDEyNCBMIDEyIDEyNCBMIDEyIDExNyBNIDE5IDExNyBMIDE5IDExNyBMIDE5IDExNyBBIDAgMCAwIDAgMSAxOSAxMTcgTSAzMyAxMTcgTCA0MCAxMTcgTCA0MCAxMjQgTCAzMyAxMjQgTCAzMyAxMTcgQSAwIDAgMCAwIDEgMzMgMTE3IE0gNDAgMTE3IEwgNDcgMTE3IEwgNDcgMTI0IEEgMCAwIDAgMCAxIDQ3IDEyNCBMIDQwIDEyNCBMIDQwIDExNyBNIDYxIDEyNCBMIDYxIDEyNCBMIDYxIDEyNCBBIDAgMCAwIDAgMSA2MSAxMjQgTSA2MSAxMTcgTCA2OCAxMTcgTCA2OCAxMjQgTCA2MSAxMjQgTCA2MSAxMTcgQSAwIDAgMCAwIDEgNjEgMTE3IE0gNjggMTE3IEwgNzUgMTE3IEEgMCAwIDAgMCAxIDc1IDExNyBMIDc1IDEyNCBBIDAgMCAwIDAgMSA3NSAxMjQgTCA2OCAxMjQgTCA2OCAxMTcgTSA4MiAxMjQgTCA4MiAxMjQgTCA4MiAxMjQgQSAwIDAgMCAwIDEgODIgMTI0IE0gODIgMTE3IEwgODkgMTE3IEwgODkgMTI0IEwgODIgMTI0IEwgODIgMTE3IEEgMCAwIDAgMCAxIDgyIDExNyBNIDg5IDExNyBMIDk2IDExNyBMIDk2IDEyNCBBIDAgMCAwIDAgMSA5NiAxMjQgTCA4OSAxMjQgTCA4OSAxMTcgTSA5NiAxMTcgTCA5NiAxMTcgTCA5NiAxMTcgQSAwIDAgMCAwIDEgOTYgMTE3IE0gMTMxIDExNyBMIDEzMSAxMTcgTCAxMzEgMTE3IEEgMCAwIDAgMCAxIDEzMSAxMTcgTSAxMzEgMTI0IEwgMTMxIDEyNCBMIDEzMSAxMjQgQSAwIDAgMCAwIDEgMTMxIDEyNCBNIDEzMSAxMTcgTCAxMzggMTE3IEwgMTM4IDEyNCBMIDEzMSAxMjQgTCAxMzEgMTE3IE0gMTM4IDExNyBMIDE0NSAxMTcgTCAxNDUgMTI0IEwgMTM4IDEyNCBMIDEzOCAxMTcgTSAxNDUgMTE3IEwgMTUyIDExNyBBIDAgMCAwIDAgMSAxNTIgMTE3IEwgMTUyIDEyNCBMIDE0NSAxMjQgTCAxNDUgMTE3IE0gMTU5IDExNyBMIDE1OSAxMTcgTCAxNTkgMTE3IEEgMCAwIDAgMCAxIDE1OSAxMTcgTSAxNTIgMTI0IEwgMTUyIDEyNCBMIDE1MiAxMjQgQSAwIDAgMCAwIDEgMTUyIDEyNCBNIDE1OSAxMTcgTCAxNjYgMTE3IEwgMTY2IDEyNCBMIDE1OSAxMjQgQSAwIDAgMCAwIDEgMTU5IDEyNCBMIDE1OSAxMTcgTSAxNjYgMTE3IEwgMTczIDExNyBMIDE3MyAxMjQgTCAxNjYgMTI0IEwgMTY2IDExNyBNIDE3MyAxMTcgTCAxNzMgMTE3IEwgMTczIDExNyBBIDAgMCAwIDAgMSAxNzMgMTE3IE0gMTgwIDExNyBMIDE4MCAxMTcgTCAxODAgMTE3IEEgMCAwIDAgMCAxIDE4MCAxMTcgTSAxNzMgMTI0IEwgMTczIDEyNCBMIDE3MyAxMjQgQSAwIDAgMCAwIDEgMTczIDEyNCBNIDE4MCAxMTcgTCAxODcgMTE3IEwgMTg3IDEyNCBBIDAgMCAwIDAgMSAxODcgMTI0IEwgMTgwIDEyNCBBIDAgMCAwIDAgMSAxODAgMTI0IEwgMTgwIDExNyBNIDEyIDEyNCBMIDE5IDEyNCBMIDE5IDEzMSBBIDAgMCAwIDAgMSAxOSAxMzEgTCAxMiAxMzEgQSAwIDAgMCAwIDEgMTIgMTMxIEwgMTIgMTI0IE0gMzMgMTI0IEwgNDAgMTI0IEwgNDAgMTMxIEEgMCAwIDAgMCAxIDQwIDEzMSBMIDMzIDEzMSBBIDAgMCAwIDAgMSAzMyAxMzEgTCAzMyAxMjQgTSA0MCAxMjQgTCA0MCAxMjQgTCA0MCAxMjQgQSAwIDAgMCAwIDEgNDAgMTI0IE0gNTQgMTI0IEwgNjEgMTI0IEwgNjEgMTMxIEwgNTQgMTMxIEEgMCAwIDAgMCAxIDU0IDEzMSBMIDU0IDEyNCBBIDAgMCAwIDAgMSA1NCAxMjQgTSA2MSAxMjQgTCA2OCAxMjQgTCA2OCAxMzEgQSAwIDAgMCAwIDEgNjggMTMxIEwgNjEgMTMxIEwgNjEgMTI0IE0gNjggMTI0IEwgNjggMTI0IEwgNjggMTI0IEEgMCAwIDAgMCAxIDY4IDEyNCBNIDc1IDEyNCBMIDgyIDEyNCBMIDgyIDEzMSBMIDc1IDEzMSBBIDAgMCAwIDAgMSA3NSAxMzEgTCA3NSAxMjQgQSAwIDAgMCAwIDEgNzUgMTI0IE0gODIgMTI0IEwgODkgMTI0IEwgODkgMTMxIEwgODIgMTMxIEwgODIgMTI0IE0gODkgMTI0IEwgODkgMTI0IEwgODkgMTI0IEEgMCAwIDAgMCAxIDg5IDEyNCBNIDg5IDEzMSBMIDg5IDEzMSBMIDg5IDEzMSBBIDAgMCAwIDAgMSA4OSAxMzEgTSAxMTAgMTI0IEwgMTE3IDEyNCBMIDExNyAxMzEgTCAxMTAgMTMxIEEgMCAwIDAgMCAxIDExMCAxMzEgTCAxMTAgMTI0IEEgMCAwIDAgMCAxIDExMCAxMjQgTSAxMTcgMTI0IEwgMTI0IDEyNCBMIDEyNCAxMzEgTCAxMTcgMTMxIEwgMTE3IDEyNCBNIDEyNCAxMjQgTCAxMzEgMTI0IEwgMTMxIDEzMSBMIDEyNCAxMzEgTCAxMjQgMTI0IE0gMTMxIDEyNCBMIDEzOCAxMjQgTCAxMzggMTMxIEwgMTMxIDEzMSBMIDEzMSAxMjQgTSAxMzggMTI0IEwgMTQ1IDEyNCBMIDE0NSAxMzEgTCAxMzggMTMxIEwgMTM4IDEyNCBNIDE0NSAxMjQgTCAxNTIgMTI0IEwgMTUyIDEzMSBMIDE0NSAxMzEgTCAxNDUgMTI0IE0gMTUyIDEyNCBMIDE1OSAxMjQgQSAwIDAgMCAwIDEgMTU5IDEyNCBMIDE1OSAxMzEgTCAxNTIgMTMxIEwgMTUyIDEyNCBNIDE2NiAxMjQgTCAxNjYgMTI0IEwgMTY2IDEyNCBBIDAgMCAwIDAgMSAxNjYgMTI0IE0gMTY2IDEyNCBMIDE3MyAxMjQgTCAxNzMgMTMxIEwgMTY2IDEzMSBMIDE2NiAxMjQgTSAxNzMgMTI0IEwgMTgwIDEyNCBBIDAgMCAwIDAgMSAxODAgMTI0IEwgMTgwIDEzMSBMIDE3MyAxMzEgTCAxNzMgMTI0IE0gNjggMTMxIEwgNzUgMTMxIEEgMCAwIDAgMCAxIDc1IDEzMSBMIDc1IDEzOCBMIDY4IDEzOCBMIDY4IDEzMSBBIDAgMCAwIDAgMSA2OCAxMzEgTSA4MiAxMzEgTCA4MiAxMzEgTCA4MiAxMzEgQSAwIDAgMCAwIDEgODIgMTMxIE0gNzUgMTM4IEwgNzUgMTM4IEwgNzUgMTM4IEEgMCAwIDAgMCAxIDc1IDEzOCBNIDgyIDEzMSBMIDg5IDEzMSBMIDg5IDEzOCBMIDgyIDEzOCBBIDAgMCAwIDAgMSA4MiAxMzggTCA4MiAxMzEgTSA4OSAxMzEgTCA5NiAxMzEgTCA5NiAxMzggTCA4OSAxMzggTCA4OSAxMzEgTSA5NiAxMzEgTCAxMDMgMTMxIEwgMTAzIDEzOCBMIDk2IDEzOCBMIDk2IDEzMSBNIDEwMyAxMzEgTCAxMTAgMTMxIEEgMCAwIDAgMCAxIDExMCAxMzEgTCAxMTAgMTM4IEEgMCAwIDAgMCAxIDExMCAxMzggTCAxMDMgMTM4IEwgMTAzIDEzMSBNIDEyNCAxMzEgTCAxMjQgMTMxIEwgMTI0IDEzMSBBIDAgMCAwIDAgMSAxMjQgMTMxIE0gMTI0IDEzOCBMIDEyNCAxMzggTCAxMjQgMTM4IEEgMCAwIDAgMCAxIDEyNCAxMzggTSAxMjQgMTMxIEwgMTMxIDEzMSBMIDEzMSAxMzggTCAxMjQgMTM4IEwgMTI0IDEzMSBNIDEzMSAxMzEgTCAxMzEgMTMxIEwgMTMxIDEzMSBBIDAgMCAwIDAgMSAxMzEgMTMxIE0gMTUyIDEzMSBMIDE1MiAxMzEgTCAxNTIgMTMxIEEgMCAwIDAgMCAxIDE1MiAxMzEgTSAxNTIgMTMxIEwgMTU5IDEzMSBMIDE1OSAxMzggTCAxNTIgMTM4IEwgMTUyIDEzMSBNIDE2NiAxMzEgTCAxNzMgMTMxIEwgMTczIDEzOCBMIDE2NiAxMzggQSAwIDAgMCAwIDEgMTY2IDEzOCBMIDE2NiAxMzEgTSAxNzMgMTMxIEwgMTgwIDEzMSBMIDE4MCAxMzggQSAwIDAgMCAwIDEgMTgwIDEzOCBMIDE3MyAxMzggTCAxNzMgMTMxIE0gMTIgMTM4IEwgMTkgMTM4IEwgMTkgMTQ1IEwgMTIgMTQ1IEwgMTIgMTM4IEEgMCAwIDAgMCAxIDEyIDEzOCBNIDE5IDEzOCBMIDI2IDEzOCBMIDI2IDE0NSBMIDE5IDE0NSBMIDE5IDEzOCBNIDI2IDEzOCBMIDMzIDEzOCBMIDMzIDE0NSBMIDI2IDE0NSBMIDI2IDEzOCBNIDMzIDEzOCBMIDQwIDEzOCBMIDQwIDE0NSBMIDMzIDE0NSBMIDMzIDEzOCBNIDQwIDEzOCBMIDQ3IDEzOCBMIDQ3IDE0NSBMIDQwIDE0NSBMIDQwIDEzOCBNIDQ3IDEzOCBMIDU0IDEzOCBMIDU0IDE0NSBMIDQ3IDE0NSBMIDQ3IDEzOCBNIDU0IDEzOCBMIDYxIDEzOCBBIDAgMCAwIDAgMSA2MSAxMzggTCA2MSAxNDUgTCA1NCAxNDUgTCA1NCAxMzggTSA2OCAxMzggTCA3NSAxMzggTCA3NSAxNDUgTCA2OCAxNDUgTCA2OCAxMzggTSA3NSAxMzggTCA4MiAxMzggQSAwIDAgMCAwIDEgODIgMTM4IEwgODIgMTQ1IEwgNzUgMTQ1IEwgNzUgMTM4IE0gODkgMTM4IEwgODkgMTM4IEwgODkgMTM4IEEgMCAwIDAgMCAxIDg5IDEzOCBNIDg5IDEzOCBMIDk2IDEzOCBMIDk2IDE0NSBBIDAgMCAwIDAgMSA5NiAxNDUgTCA4OSAxNDUgQSAwIDAgMCAwIDEgODkgMTQ1IEwgODkgMTM4IE0gOTYgMTM4IEwgOTYgMTM4IEwgOTYgMTM4IEEgMCAwIDAgMCAxIDk2IDEzOCBNIDExNyAxNDUgTCAxMTcgMTQ1IEwgMTE3IDE0NSBBIDAgMCAwIDAgMSAxMTcgMTQ1IE0gMTE3IDEzOCBMIDEyNCAxMzggTCAxMjQgMTQ1IEwgMTE3IDE0NSBMIDExNyAxMzggQSAwIDAgMCAwIDEgMTE3IDEzOCBNIDEyNCAxMzggTCAxMzEgMTM4IEwgMTMxIDE0NSBMIDEyNCAxNDUgTCAxMjQgMTM4IE0gMTM4IDEzOCBMIDE0NSAxMzggQSAwIDAgMCAwIDEgMTQ1IDEzOCBMIDE0NSAxNDUgQSAwIDAgMCAwIDEgMTQ1IDE0NSBMIDEzOCAxNDUgQSAwIDAgMCAwIDEgMTM4IDE0NSBMIDEzOCAxMzggQSAwIDAgMCAwIDEgMTM4IDEzOCBNIDE1MiAxMzggTCAxNTkgMTM4IEwgMTU5IDE0NSBMIDE1MiAxNDUgTCAxNTIgMTM4IE0gMTgwIDE0NSBMIDE4MCAxNDUgTCAxODAgMTQ1IEEgMCAwIDAgMCAxIDE4MCAxNDUgTSAxODAgMTM4IEwgMTg3IDEzOCBBIDAgMCAwIDAgMSAxODcgMTM4IEwgMTg3IDE0NSBMIDE4MCAxNDUgTCAxODAgMTM4IEEgMCAwIDAgMCAxIDE4MCAxMzggTSAxMiAxNDUgTCAxOSAxNDUgTCAxOSAxNTIgTCAxMiAxNTIgTCAxMiAxNDUgTSAxOSAxNDUgTCAxOSAxNDUgTCAxOSAxNDUgQSAwIDAgMCAwIDEgMTkgMTQ1IE0gNTQgMTQ1IEwgNTQgMTQ1IEwgNTQgMTQ1IEEgMCAwIDAgMCAxIDU0IDE0NSBNIDU0IDE0NSBMIDYxIDE0NSBMIDYxIDE1MiBMIDU0IDE1MiBMIDU0IDE0NSBNIDY4IDE0NSBMIDc1IDE0NSBMIDc1IDE1MiBMIDY4IDE1MiBMIDY4IDE0NSBNIDc1IDE0NSBMIDgyIDE0NSBMIDgyIDE1MiBMIDc1IDE1MiBMIDc1IDE0NSBNIDgyIDE1MiBMIDgyIDE1MiBMIDgyIDE1MiBBIDAgMCAwIDAgMSA4MiAxNTIgTSA5NiAxNDUgTCAxMDMgMTQ1IEEgMCAwIDAgMCAxIDEwMyAxNDUgTCAxMDMgMTUyIEwgOTYgMTUyIEwgOTYgMTQ1IEEgMCAwIDAgMCAxIDk2IDE0NSBNIDExMCAxNTIgTCAxMTAgMTUyIEwgMTEwIDE1MiBBIDAgMCAwIDAgMSAxMTAgMTUyIE0gMTAzIDE1MiBMIDEwMyAxNTIgTCAxMDMgMTUyIEEgMCAwIDAgMCAxIDEwMyAxNTIgTSAxMTAgMTQ1IEwgMTE3IDE0NSBMIDExNyAxNTIgTCAxMTAgMTUyIEwgMTEwIDE0NSBBIDAgMCAwIDAgMSAxMTAgMTQ1IE0gMTE3IDE0NSBMIDEyNCAxNDUgTCAxMjQgMTUyIEwgMTE3IDE1MiBMIDExNyAxNDUgTSAxMjQgMTQ1IEwgMTMxIDE0NSBMIDEzMSAxNTIgTCAxMjQgMTUyIEwgMTI0IDE0NSBNIDEzMSAxNTIgTCAxMzEgMTUyIEwgMTMxIDE1MiBBIDAgMCAwIDAgMSAxMzEgMTUyIE0gMTUyIDE1MiBMIDE1MiAxNTIgTCAxNTIgMTUyIEEgMCAwIDAgMCAxIDE1MiAxNTIgTSAxNTIgMTQ1IEwgMTU5IDE0NSBMIDE1OSAxNTIgTCAxNTIgMTUyIEwgMTUyIDE0NSBNIDE3MyAxNDUgTCAxODAgMTQ1IEwgMTgwIDE1MiBMIDE3MyAxNTIgTCAxNzMgMTQ1IEEgMCAwIDAgMCAxIDE3MyAxNDUgTSAxODAgMTQ1IEwgMTg3IDE0NSBMIDE4NyAxNTIgTCAxODAgMTUyIEwgMTgwIDE0NSBNIDEyIDE1MiBMIDE5IDE1MiBMIDE5IDE1OSBMIDEyIDE1OSBMIDEyIDE1MiBNIDI2IDE1MiBMIDMzIDE1MiBMIDMzIDE1OSBMIDI2IDE1OSBMIDI2IDE1MiBBIDAgMCAwIDAgMSAyNiAxNTIgTSAzMyAxNTIgTCA0MCAxNTIgTCA0MCAxNTkgTCAzMyAxNTkgTCAzMyAxNTIgTSA0MCAxNTIgTCA0NyAxNTIgQSAwIDAgMCAwIDEgNDcgMTUyIEwgNDcgMTU5IEwgNDAgMTU5IEwgNDAgMTUyIE0gNTQgMTUyIEwgNjEgMTUyIEwgNjEgMTU5IEwgNTQgMTU5IEwgNTQgMTUyIE0gNjggMTUyIEwgNzUgMTUyIEwgNzUgMTU5IEwgNjggMTU5IEwgNjggMTUyIE0gNzUgMTUyIEwgODIgMTUyIEwgODIgMTU5IEwgNzUgMTU5IEwgNzUgMTUyIE0gODIgMTUyIEwgODkgMTUyIEEgMCAwIDAgMCAxIDg5IDE1MiBMIDg5IDE1OSBBIDAgMCAwIDAgMSA4OSAxNTkgTCA4MiAxNTkgTCA4MiAxNTIgTSA5NiAxNTIgTCAxMDMgMTUyIEwgMTAzIDE1OSBMIDk2IDE1OSBBIDAgMCAwIDAgMSA5NiAxNTkgTCA5NiAxNTIgTSAxMDMgMTUyIEwgMTEwIDE1MiBMIDExMCAxNTkgTCAxMDMgMTU5IEwgMTAzIDE1MiBNIDExMCAxNTIgTCAxMTcgMTUyIEwgMTE3IDE1OSBMIDExMCAxNTkgTCAxMTAgMTUyIE0gMTE3IDE1MiBMIDEyNCAxNTIgTCAxMjQgMTU5IEwgMTE3IDE1OSBMIDExNyAxNTIgTSAxMjQgMTUyIEwgMTMxIDE1MiBMIDEzMSAxNTkgTCAxMjQgMTU5IEwgMTI0IDE1MiBNIDEzMSAxNTIgTCAxMzggMTUyIEwgMTM4IDE1OSBMIDEzMSAxNTkgTCAxMzEgMTUyIE0gMTM4IDE1MiBMIDE0NSAxNTIgTCAxNDUgMTU5IEwgMTM4IDE1OSBMIDEzOCAxNTIgTSAxNDUgMTUyIEwgMTUyIDE1MiBMIDE1MiAxNTkgTCAxNDUgMTU5IEwgMTQ1IDE1MiBNIDE1MiAxNTIgTCAxNTkgMTUyIEwgMTU5IDE1OSBBIDAgMCAwIDAgMSAxNTkgMTU5IEwgMTUyIDE1OSBMIDE1MiAxNTIgTSAxNzMgMTUyIEwgMTgwIDE1MiBMIDE4MCAxNTkgTCAxNzMgMTU5IEwgMTczIDE1MiBNIDE4MCAxNTIgTCAxODcgMTUyIEwgMTg3IDE1OSBMIDE4MCAxNTkgTCAxODAgMTUyIE0gMTIgMTU5IEwgMTkgMTU5IEwgMTkgMTY2IEwgMTIgMTY2IEwgMTIgMTU5IE0gMjYgMTU5IEwgMzMgMTU5IEwgMzMgMTY2IEwgMjYgMTY2IEwgMjYgMTU5IE0gMzMgMTU5IEwgNDAgMTU5IEwgNDAgMTY2IEwgMzMgMTY2IEwgMzMgMTU5IE0gNDAgMTU5IEwgNDcgMTU5IEwgNDcgMTY2IEwgNDAgMTY2IEwgNDAgMTU5IE0gNTQgMTU5IEwgNjEgMTU5IEwgNjEgMTY2IEwgNTQgMTY2IEwgNTQgMTU5IE0gNjggMTU5IEwgNzUgMTU5IEwgNzUgMTY2IEEgMCAwIDAgMCAxIDc1IDE2NiBMIDY4IDE2NiBBIDAgMCAwIDAgMSA2OCAxNjYgTCA2OCAxNTkgTSA3NSAxNTkgTCA3NSAxNTkgTCA3NSAxNTkgQSAwIDAgMCAwIDEgNzUgMTU5IE0gMTEwIDE1OSBMIDExMCAxNTkgTCAxMTAgMTU5IEEgMCAwIDAgMCAxIDExMCAxNTkgTSAxMTAgMTU5IEwgMTE3IDE1OSBMIDExNyAxNjYgTCAxMTAgMTY2IEwgMTEwIDE1OSBNIDExNyAxNTkgTCAxMjQgMTU5IEwgMTI0IDE2NiBBIDAgMCAwIDAgMSAxMjQgMTY2IEwgMTE3IDE2NiBMIDExNyAxNTkgTSAxMjQgMTU5IEwgMTI0IDE1OSBMIDEyNCAxNTkgQSAwIDAgMCAwIDEgMTI0IDE1OSBNIDEzMSAxNTkgTCAxMzEgMTU5IEwgMTMxIDE1OSBBIDAgMCAwIDAgMSAxMzEgMTU5IE0gMTMxIDE2NiBMIDEzMSAxNjYgTCAxMzEgMTY2IEEgMCAwIDAgMCAxIDEzMSAxNjYgTSAxMzEgMTU5IEwgMTM4IDE1OSBMIDEzOCAxNjYgTCAxMzEgMTY2IEwgMTMxIDE1OSBNIDEzOCAxNTkgTCAxNDUgMTU5IEwgMTQ1IDE2NiBBIDAgMCAwIDAgMSAxNDUgMTY2IEwgMTM4IDE2NiBMIDEzOCAxNTkgTSAxNDUgMTU5IEwgMTQ1IDE1OSBMIDE0NSAxNTkgQSAwIDAgMCAwIDEgMTQ1IDE1OSBNIDE3MyAxNjYgTCAxNzMgMTY2IEwgMTczIDE2NiBBIDAgMCAwIDAgMSAxNzMgMTY2IE0gMTczIDE1OSBMIDE4MCAxNTkgTCAxODAgMTY2IEwgMTczIDE2NiBMIDE3MyAxNTkgTSAxODAgMTU5IEwgMTg3IDE1OSBMIDE4NyAxNjYgTCAxODAgMTY2IEwgMTgwIDE1OSBNIDEyIDE2NiBMIDE5IDE2NiBMIDE5IDE3MyBMIDEyIDE3MyBMIDEyIDE2NiBNIDI2IDE2NiBMIDMzIDE2NiBMIDMzIDE3MyBMIDI2IDE3MyBBIDAgMCAwIDAgMSAyNiAxNzMgTCAyNiAxNjYgTSAzMyAxNjYgTCA0MCAxNjYgTCA0MCAxNzMgTCAzMyAxNzMgTCAzMyAxNjYgTSA0MCAxNjYgTCA0NyAxNjYgTCA0NyAxNzMgQSAwIDAgMCAwIDEgNDcgMTczIEwgNDAgMTczIEwgNDAgMTY2IE0gNTQgMTY2IEwgNjEgMTY2IEwgNjEgMTczIEwgNTQgMTczIEwgNTQgMTY2IE0gOTYgMTY2IEwgMTAzIDE2NiBBIDAgMCAwIDAgMSAxMDMgMTY2IEwgMTAzIDE3MyBBIDAgMCAwIDAgMSAxMDMgMTczIEwgOTYgMTczIEEgMCAwIDAgMCAxIDk2IDE3MyBMIDk2IDE2NiBBIDAgMCAwIDAgMSA5NiAxNjYgTSAxMTAgMTY2IEwgMTE3IDE2NiBMIDExNyAxNzMgTCAxMTAgMTczIEwgMTEwIDE2NiBNIDExNyAxNjYgTCAxMTcgMTY2IEwgMTE3IDE2NiBBIDAgMCAwIDAgMSAxMTcgMTY2IE0gMTI0IDE2NiBMIDEzMSAxNjYgTCAxMzEgMTczIEwgMTI0IDE3MyBBIDAgMCAwIDAgMSAxMjQgMTczIEwgMTI0IDE2NiBBIDAgMCAwIDAgMSAxMjQgMTY2IE0gMTMxIDE2NiBMIDEzOCAxNjYgTCAxMzggMTczIEEgMCAwIDAgMCAxIDEzOCAxNzMgTCAxMzEgMTczIEwgMTMxIDE2NiBNIDEzOCAxNjYgTCAxMzggMTY2IEwgMTM4IDE2NiBBIDAgMCAwIDAgMSAxMzggMTY2IE0gMTUyIDE3MyBMIDE1MiAxNzMgTCAxNTIgMTczIEEgMCAwIDAgMCAxIDE1MiAxNzMgTSAxNTIgMTY2IEwgMTU5IDE2NiBMIDE1OSAxNzMgTCAxNTIgMTczIEwgMTUyIDE2NiBBIDAgMCAwIDAgMSAxNTIgMTY2IE0gMTU5IDE2NiBMIDE2NiAxNjYgTCAxNjYgMTczIEwgMTU5IDE3MyBMIDE1OSAxNjYgTSAxNjYgMTY2IEwgMTczIDE2NiBMIDE3MyAxNzMgTCAxNjYgMTczIEwgMTY2IDE2NiBNIDE3MyAxNjYgTCAxODAgMTY2IEwgMTgwIDE3MyBMIDE3MyAxNzMgTCAxNzMgMTY2IE0gMTgwIDE2NiBMIDE4NyAxNjYgTCAxODcgMTczIEwgMTgwIDE3MyBMIDE4MCAxNjYgTSAxMiAxNzMgTCAxOSAxNzMgTCAxOSAxODAgTCAxMiAxODAgTCAxMiAxNzMgTSAxOSAxODAgTCAxOSAxODAgTCAxOSAxODAgQSAwIDAgMCAwIDEgMTkgMTgwIE0gNTQgMTgwIEwgNTQgMTgwIEwgNTQgMTgwIEEgMCAwIDAgMCAxIDU0IDE4MCBNIDU0IDE3MyBMIDYxIDE3MyBMIDYxIDE4MCBMIDU0IDE4MCBMIDU0IDE3MyBNIDc1IDE4MCBMIDc1IDE4MCBMIDc1IDE4MCBBIDAgMCAwIDAgMSA3NSAxODAgTSA3NSAxNzMgTCA4MiAxNzMgTCA4MiAxODAgTCA3NSAxODAgTCA3NSAxNzMgQSAwIDAgMCAwIDEgNzUgMTczIE0gODIgMTczIEwgODkgMTczIEEgMCAwIDAgMCAxIDg5IDE3MyBMIDg5IDE4MCBMIDgyIDE4MCBMIDgyIDE3MyBNIDExMCAxODAgTCAxMTAgMTgwIEwgMTEwIDE4MCBBIDAgMCAwIDAgMSAxMTAgMTgwIE0gMTEwIDE3MyBMIDExNyAxNzMgTCAxMTcgMTgwIEwgMTEwIDE4MCBMIDExMCAxNzMgTSAxMTcgMTgwIEwgMTE3IDE4MCBMIDExNyAxODAgQSAwIDAgMCAwIDEgMTE3IDE4MCBNIDEzOCAxNzMgTCAxNDUgMTczIEwgMTQ1IDE4MCBMIDEzOCAxODAgTCAxMzggMTczIEEgMCAwIDAgMCAxIDEzOCAxNzMgTSAxNDUgMTczIEwgMTUyIDE3MyBMIDE1MiAxODAgTCAxNDUgMTgwIEwgMTQ1IDE3MyBNIDE1MiAxNzMgTCAxNTkgMTczIEwgMTU5IDE4MCBBIDAgMCAwIDAgMSAxNTkgMTgwIEwgMTUyIDE4MCBMIDE1MiAxNzMgTSAxNTkgMTczIEwgMTU5IDE3MyBMIDE1OSAxNzMgQSAwIDAgMCAwIDEgMTU5IDE3MyBNIDE2NiAxNzMgTCAxNjYgMTczIEwgMTY2IDE3MyBBIDAgMCAwIDAgMSAxNjYgMTczIE0gMTY2IDE3MyBMIDE3MyAxNzMgTCAxNzMgMTgwIEwgMTY2IDE4MCBBIDAgMCAwIDAgMSAxNjYgMTgwIEwgMTY2IDE3MyBNIDE3MyAxNzMgTCAxODAgMTczIEwgMTgwIDE4MCBMIDE3MyAxODAgTCAxNzMgMTczIE0gMTgwIDE3MyBMIDE4NyAxNzMgTCAxODcgMTgwIEwgMTgwIDE4MCBMIDE4MCAxNzMgTSAxMiAxODAgTCAxOSAxODAgTCAxOSAxODcgTCAxMiAxODcgQSAwIDAgMCAwIDEgMTIgMTg3IEwgMTIgMTgwIE0gMTkgMTgwIEwgMjYgMTgwIEwgMjYgMTg3IEwgMTkgMTg3IEwgMTkgMTgwIE0gMjYgMTgwIEwgMzMgMTgwIEwgMzMgMTg3IEwgMjYgMTg3IEwgMjYgMTgwIE0gMzMgMTgwIEwgNDAgMTgwIEwgNDAgMTg3IEwgMzMgMTg3IEwgMzMgMTgwIE0gNDAgMTgwIEwgNDcgMTgwIEwgNDcgMTg3IEwgNDAgMTg3IEwgNDAgMTgwIE0gNDcgMTgwIEwgNTQgMTgwIEwgNTQgMTg3IEwgNDcgMTg3IEwgNDcgMTgwIE0gNTQgMTgwIEwgNjEgMTgwIEwgNjEgMTg3IEEgMCAwIDAgMCAxIDYxIDE4NyBMIDU0IDE4NyBMIDU0IDE4MCBNIDY4IDE4MCBMIDc1IDE4MCBMIDc1IDE4NyBMIDY4IDE4NyBBIDAgMCAwIDAgMSA2OCAxODcgTCA2OCAxODAgQSAwIDAgMCAwIDEgNjggMTgwIE0gNzUgMTgwIEwgODIgMTgwIEwgODIgMTg3IEwgNzUgMTg3IEwgNzUgMTgwIE0gODIgMTgwIEwgODkgMTgwIEwgODkgMTg3IEEgMCAwIDAgMCAxIDg5IDE4NyBMIDgyIDE4NyBMIDgyIDE4MCBNIDEwMyAxODAgTCAxMTAgMTgwIEwgMTEwIDE4NyBMIDEwMyAxODcgQSAwIDAgMCAwIDEgMTAzIDE4NyBMIDEwMyAxODAgQSAwIDAgMCAwIDEgMTAzIDE4MCBNIDExMCAxODAgTCAxMTcgMTgwIEwgMTE3IDE4NyBMIDExMCAxODcgTCAxMTAgMTgwIE0gMTE3IDE4MCBMIDEyNCAxODAgTCAxMjQgMTg3IEwgMTE3IDE4NyBMIDExNyAxODAgTSAxMjQgMTgwIEwgMTMxIDE4MCBBIDAgMCAwIDAgMSAxMzEgMTgwIEwgMTMxIDE4NyBBIDAgMCAwIDAgMSAxMzEgMTg3IEwgMTI0IDE4NyBMIDEyNCAxODAgTSAxMzggMTgwIEwgMTQ1IDE4MCBMIDE0NSAxODcgQSAwIDAgMCAwIDEgMTQ1IDE4NyBMIDEzOCAxODcgQSAwIDAgMCAwIDEgMTM4IDE4NyBMIDEzOCAxODAgTSAxNDUgMTgwIEwgMTQ1IDE4MCBMIDE0NSAxODAgQSAwIDAgMCAwIDEgMTQ1IDE4MCBNIDE1OSAxODAgTCAxNjYgMTgwIEEgMCAwIDAgMCAxIDE2NiAxODAgTCAxNjYgMTg3IEEgMCAwIDAgMCAxIDE2NiAxODcgTCAxNTkgMTg3IEEgMCAwIDAgMCAxIDE1OSAxODcgTCAxNTkgMTgwIEEgMCAwIDAgMCAxIDE1OSAxODAgTSAxODAgMTgwIEwgMTgwIDE4MCBMIDE4MCAxODAgQSAwIDAgMCAwIDEgMTgwIDE4MCBNIDE4MCAxODAgTCAxODcgMTgwIEwgMTg3IDE4NyBBIDAgMCAwIDAgMSAxODcgMTg3IEwgMTgwIDE4NyBBIDAgMCAwIDAgMSAxODAgMTg3IEwgMTgwIDE4MCAiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4=';

  var nativeSetInterval = W.setInterval;
  W.setInterval = function (fn, delay) {
    try {
      if (delay === 1000 && typeof fn === 'function') {
        var src = String(fn);
        if (src.length < 240 && src.indexOf('clearInterval') !== -1 && src.indexOf('--') !== -1) {
          delay = 60;
        }
      }
    } catch (e) {}
    return nativeSetInterval.call(W, fn, delay);
  };

  function isObj(v) {
    return v !== null && typeof v === 'object';
  }

  function clearSlots(data) {
    Object.keys(data).forEach(function (k) {
      if (Array.isArray(data[k])) data[k] = null;
    });
  }

  function patchPayload(root) {
    if (!isObj(root)) return root;
    var d = root.data;
    if (!isObj(d)) return root;

    if (isObj(d) && ('is_vip' in d || 'vip_expire_at' in d) && ('id' in d || 'name' in d)) {
      d.is_vip = 1;
      d.vip_expire_at = 4102416000;
      return root;
    }

    if ('banner' in d && 'homegrid' in d) {
      clearSlots(d);
      return root;
    }

    if ('start_ad' in d && 'app_name' in d) {
      d.start_ad = [{ value: BLANK_IMG, action: '', weight: 1, name: '', comment: '' }];
      d.start_ad_show_time = 0.5;
      d.telegram_url = 'DOULEWSS';
      d.telegram_sw_url = 'DOULEWSS';
      d.customer_service_url = LINK;
      d.official_url = LINK;
      d.landing_promotion_url = LINK;
      d.qq_share_group = '';
      d.email = '';
      if ('qq_group_url' in d) d.qq_group_url = QQ;
      d.my_page_popup_text = POPUP;
      return root;
    }

    if ('androiddown' in d && 'commentrule' in d && 'dialognotice' in d) {
      ['androiddown', 'choujiang', 'downurl', 'hongbao', 'ios_alt_app_url', 'iosdown', 'offical_web_url', 'shareurl'].forEach(function (k) {
        if (k in d) d[k] = LINK;
      });
      d.commentrule = MSG;
      d.dialognotice = DIALOG;
      d.notice = MSG;
      d.photowmaker = MSG;
      d.question = QUESTION;
      d.sqnotice = SQ;
      d.email = '';
      d.qqsharequn = '';
      if ('qqinfo' in d) d.qqinfo = QQ;
      if ('saveaddress' in d) d.saveaddress = SAVE;
      d.updateandroid = UPDATE;
      return root;
    }

    if (typeof d.share_url === 'string') {
      d.share_url = LINK;
      return root;
    }

    if (Array.isArray(d.list) && d.list.length && isObj(d.list[0]) && 'desc2' in d.list[0] && 'hotw' in d.list[0]) {
      d.list = [];
      return root;
    }

    if (Array.isArray(d.qt) && Array.isArray(d.yx) && Array.isArray(d.zb)) {
      d.qt = [];
      d.yx = [];
      d.zb = [];
      return root;
    }

    if (Array.isArray(d.list) && d.list.length && isObj(d.list[0]) && 'jump_url' in d.list[0] && 'timeRanges' in d.list[0]) {
      d.list = [];
      return root;
    }

    return root;
  }

  var CSS = [
    '.adimg{display:none!important}',
    '.addiv{display:none!important}',
    '.adpauseimg{display:none!important}',
    '.watermark-adlayout-box{display:none!important}',
    '.van-tabbar-item:nth-child(5){display:none!important}',
    '.van-swipe.swiper-container:not(:has(.van-swipe-item)){display:none!important}',
    '.swiper-container:not(:has(.swiper-slide)){display:none!important}'
  ].join('');

  function addStyle() {
    if (!document.documentElement) {
      setTimeout(addStyle, 0);
      return;
    }
    try {
      var style = document.createElement('style');
      style.setAttribute('data-mogu-patch', '');
      style.textContent = CSS;
      document.documentElement.appendChild(style);
    } catch (e) {}
  }

  function nudgeVideo() {
    var v = document.querySelector('#videoContent video');
    if (v && v.paused && v.readyState >= 2) {
      try { v.play(); } catch (e) {}
    }
  }

  function patchMineAnnouncement() {
    var imgs = document.querySelectorAll('.wode .qrdiv img.qrcodeimg');
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i];
      if (im.getAttribute('data-mogu-qr') === '1') continue;
      im.setAttribute('data-mogu-qr', '1');
      im.src = TG_QR;
      im.style.width = '100%';
      im.style.height = '100%';
      im.style.display = 'block';
    }
  }

  var configJumped = false;
  function patchConfigPage() {
    if (configJumped) return;
    var hash = location.hash || '';
    if (hash.indexOf('/confightml') === -1) return;
    if (hash.indexOf('customer_service_url') === -1) return;
    configJumped = true;
    location.href = LINK;
  }

  addStyle();
  setInterval(patchMineAnnouncement, 400);
  setInterval(patchConfigPage, 400);
  document.addEventListener('DOMContentLoaded', function () {
    patchMineAnnouncement();
    addStyle();
    setInterval(nudgeVideo, 250);
  }, { once: true });

  var FAKE_OK = 'KQWaPujzAMaAxQnpidhZeh5SD2mD7/4dsdjUbl7EKHOpSANcJSdnk2ZcnUIBsNln';

  (function () {
    var open = W.XMLHttpRequest.prototype.open;
    var send = W.XMLHttpRequest.prototype.send;
    W.XMLHttpRequest.prototype.open = function (method, url) {
      this.__moguUrl = String(url || '');
      return open.apply(this, arguments);
    };
    W.XMLHttpRequest.prototype.send = function () {
      var self = this;
      if (self.__moguUrl && self.__moguUrl.indexOf('/user/watch/history/sync') !== -1) {
        try {
          Object.defineProperty(self, 'responseText', { configurable: true, get: function () {
            return self.readyState === 4 ? FAKE_OK : '';
          } });
          Object.defineProperty(self, 'response', { configurable: true, get: function () {
            return self.readyState === 4 ? FAKE_OK : '';
          } });
          Object.defineProperty(self, 'status', { configurable: true, get: function () { return 200; } });
        } catch (e) {}
      }
      return send.apply(this, arguments);
    };
  })();

  var FAKE = {
    '/user/vip/watch': 'KQWaPujzAMaAxQnpidhZet9y0rYVRExeS2BPG/In3TYp3EccsX7PcrCwO1nymSVR',
    '/user/verify': 'KQWaPujzAMaAxQnpidhZeutYaaieWqD9qh/U5S1vijRXOxe2dC4imFptJAsoHjsZzjmvhkE58jXKAK7E/8kTBCOpor9IoFzr0BX8ReezuOU=',
    '/vod/vip/unlock': 'KQWaPujzAMaAxQnpidhZehJbepmGcQUUK05BUla9uwqB6ud1idTJeklEQGQSl4ki'
  };

  (function () {
    var open = W.XMLHttpRequest.prototype.open;
    var send = W.XMLHttpRequest.prototype.send;
    W.XMLHttpRequest.prototype.open = function (method, url) {
      this.__moguUrl = String(url || '');
      return open.apply(this, arguments);
    };
    W.XMLHttpRequest.prototype.send = function () {
      var self = this;
      for (var key in FAKE) {
        if (self.__moguUrl && self.__moguUrl.indexOf(key) !== -1) {
          try {
            var body = FAKE[key];
            Object.defineProperty(self, 'responseText', { configurable: true, get: function () {
              return self.readyState === 4 ? body : '';
            } });
            Object.defineProperty(self, 'response', { configurable: true, get: function () {
              return self.readyState === 4 ? body : '';
            } });
            Object.defineProperty(self, 'status', { configurable: true, get: function () { return 200; } });
          } catch (e) {}
          break;
        }
      }
      return send.apply(this, arguments);
    };
  })();

  W.__moguStep = 'hls';
  var HLS_CDN = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js';
  var hlsLoading = false;
  var hlsInst = null;
  var currentUrl = '';

  function loadHls(cb) {
    if (W.Hls) { cb(); return; }
    if (hlsLoading) return;
    hlsLoading = true;
    var sc = document.createElement('script');
    sc.src = HLS_CDN;
    sc.onload = function () { hlsLoading = false; cb(); };
    sc.onerror = function () { hlsLoading = false; };
    (document.head || document.documentElement).appendChild(sc);
  }

  function mountOverlay(url) {
    if (!url || url === currentUrl) return;
    var srcVideo = document.querySelector('video');
    if (!srcVideo) return;
    var box = srcVideo.parentElement;
    if (!box) return;
    currentUrl = url;
    loadHls(function () {
      if (!W.Hls || !W.Hls.isSupported()) return;
      var old = document.getElementById('__moguPlayer');
      if (old && old.parentNode) old.parentNode.removeChild(old);
      if (hlsInst) { try { hlsInst.destroy(); } catch (e) {} }
      var r = box.getBoundingClientRect();
      var wrap = document.createElement('div');
      wrap.id = '__moguPlayer';
      wrap.style.cssText = 'position:fixed;z-index:99999;background:#000;left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px;';
      document.body.appendChild(wrap);
      var v = document.createElement('video');
      v.controls = true;
      v.muted = true;
      v.setAttribute('playsinline', '');
      v.setAttribute('data-mogu-player', '1');
      v.style.cssText = 'width:100%;height:100%;background:#000;object-fit:contain';
      wrap.appendChild(v);
      var h = new W.Hls({ enableWorker: true, lowLatencyMode: false });
      hlsInst = h;
      h.on(W.Hls.Events.MANIFEST_PARSED, function () {
        v.play().then(function () { v.muted = false; }).catch(function () {});
      });
      h.on(W.Hls.Events.ERROR, function (_e, d) {
        if (d && d.fatal && d.type === 'networkError') { try { h.startLoad(); } catch (e) {} }
      });
      h.loadSource(url);
      h.attachMedia(v);
    });
  }

  function watchPlayer() {
    var v = document.querySelector('video');
    if (!v) return;
    var src = v.currentSrc || v.getAttribute('src') || v.src || '';
    if (src.indexOf('.m3u8') === -1) return;
    if (v.getAttribute('data-mogu-player')) return;
    mountOverlay(src);
  }
  setInterval(watchPlayer, 500);

  function autoSkip() {
    var sp = document.querySelector('.spantime');
    if (sp) { try { sp.click(); } catch (e) {} }
  }
  setInterval(autoSkip, 300);

  var VIDEO_ROUTES = ['/video/', '/vipvideo', '/shequvideo'];

  function isVideoRoute() {
    var hash = location.hash || '';
    for (var i = 0; i < VIDEO_ROUTES.length; i++) {
      if (hash.indexOf(VIDEO_ROUTES[i]) !== -1) return true;
    }
    if (document.querySelector('#videoid1234, [id^="shequvideo"], #videoContent')) return true;
    return false;
  }

  function teardown() {
    var nodes = document.querySelectorAll('[data-mogu-player]');
    for (var i = 0; i < nodes.length; i++) {
      try { nodes[i].pause(); } catch (e) {}
      try { nodes[i].removeAttribute('src'); } catch (e) {}
      try { nodes[i].load(); } catch (e) {}
    }
    var wraps = document.querySelectorAll('#__moguPlayer');
    for (var j = 0; j < wraps.length; j++) {
      if (wraps[j].parentNode) wraps[j].parentNode.removeChild(wraps[j]);
    }
    try { if (hlsInst) { hlsInst.destroy(); hlsInst = null; } } catch (e) {}
    currentUrl = '';
  }

  function cleanupPlayer() {
    if (isVideoRoute()) return;
    teardown();
  }

  W.addEventListener('hashchange', cleanupPlayer);
  W.addEventListener('popstate', cleanupPlayer);
  setInterval(cleanupPlayer, 400);

  document.addEventListener('click', function (ev) {
    var t = ev.target;
    if (!t || !t.closest) return;
    var btn = t.closest('.content_statu_text1, .content_statu_text');
    if (!btn) return;
    var node = btn;
    for (var i = 0; i < 6 && node; i++) {
      var cover = node.querySelector ? node.querySelector('.content_div') : null;
      if (cover) {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
        cover.click();
        return;
      }
      node = node.parentElement;
    }
  }, true);

  function findPinia() {
    var app = document.querySelector('#app');
    if (!app || !app.__vue_app__) return null;
    var provides = app.__vue_app__._context.provides;
    var syms = Object.getOwnPropertySymbols(provides);
    for (var i = 0; i < syms.length; i++) {
      var v = provides[syms[i]];
      if (v && v._s && v.state) return v;
    }
    return null;
  }

  function findUserStore() {
    var pinia = findPinia();
    return pinia ? pinia._s.get('userinfo') : null;
  }

  var vipPatched = false;
  var vipPrev = null;

  function patchVip() {
    var u = findUserStore();
    if (!u) return false;
    var info = u.userinfo;
    if (info && Number(info.is_vip) === 1) return true;
    if (!vipPatched) {
      vipPatched = true;
      vipPrev = info ? { obj: info, isVip: info.is_vip } : null;
    }
    if (info) {
      try { info.is_vip = 1; } catch (e) {}
    } else {
      u.userinfo = { id: 0, name: '', avatar: '', is_vip: 1, integral: 0, vip_expire_at: 4102416000 };
    }
    return true;
  }

  function restoreVip() {
    if (!vipPatched) return;
    var u = findUserStore();
    if (u) {
      if (vipPrev) {
        try { vipPrev.obj.is_vip = vipPrev.isVip; } catch (e) {}
      } else {
        u.userinfo = null;
      }
    }
    vipPatched = false;
    vipPrev = null;
  }

  document.addEventListener('click', function (ev) {
    var t = ev.target;
    if (!t || !t.closest) return;
    if (!t.closest('.home-top-nav')) return;
    if (!t.closest('.nav-item-click')) return;
    patchVip();
  }, true);

  setInterval(function () {
    if ((location.hash || '').indexOf('/anwang') !== -1) patchVip();
    else restoreVip();
  }, 400);

  var MINE_AVATAR = 'data:image/jpeg;base64,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';
  var MINE_NAME = '不知名公益色色@DOULEWSS';
  var MINE_VIP = 'SVIP 10';
  var MINE_INTEGRAL = '999999';
  var mineDone = false;

  function setMineText() {
    if (mineDone) return;
    var w = document.querySelector('.wode');
    if (!w) return;
    var av = w.querySelector('.headimage');
    if (av) av.src = MINE_AVATAR;
    var nm = w.querySelector('.name');
    if (nm) nm.textContent = MINE_NAME;
    var nums = w.querySelectorAll('.vip-stats-block .number');
    for (var i = 0; i < nums.length; i++) nums[i].textContent = 'MAX';
    var jf = w.querySelector('.jifen-card-value');
    if (jf) jf.textContent = MINE_INTEGRAL;
    var vp = w.querySelector('.vip-card-value');
    if (vp) vp.textContent = MINE_VIP;
    mineDone = true;
  }

  (function watchMine() {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      setMineText();
      if (mineDone || tries > 60) clearInterval(timer);
    }, 500);
  })();

  var nativeParse = W.JSON.parse;
  W.JSON.parse = function (text, reviver) {
    var value;
    try {
      value = nativeParse.call(this, text, reviver);
    } catch (e) {
      throw e;
    }
    try {
      return patchPayload(value);
    } catch (e) {
      return value;
    }
  };

})();
