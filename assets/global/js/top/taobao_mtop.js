! function(a, b, c) {
    function d(a) {
        function b(a, b) {
            return a << b | a >>> 32 - b
        }

        function c(a, b) {
            var c, d, e, f, g;
            return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
        }

        function d(a, b, c) {
            return a & b | ~a & c
        }

        function e(a, b, c) {
            return a & c | b & ~c
        }

        function f(a, b, c) {
            return a ^ b ^ c
        }

        function g(a, b, c) {
            return b ^ (a | ~c)
        }

        function h(a, e, f, g, h, i, j) {
            return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
        }

        function i(a, d, f, g, h, i, j) {
            return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
        }

        function j(a, d, e, g, h, i, j) {
            return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
        }

        function k(a, d, e, f, h, i, j) {
            return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
        }

        function l(a) {
            for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
            return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
        }

        function m(a) {
            var b, c, d = "",
                e = "";
            for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
            return d
        }

        function n(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
            }
            return b
        }
        var o, p, q, r, s, t, u, v, w, x = [],
            y = 7,
            z = 12,
            A = 17,
            B = 22,
            C = 5,
            D = 9,
            E = 14,
            F = 20,
            G = 4,
            H = 11,
            I = 16,
            J = 23,
            K = 6,
            L = 10,
            M = 15,
            N = 21;
        for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
        var O = m(t) + m(u) + m(v) + m(w);
        return O.toLowerCase()
    }

    function e(a) {
        var b = A.getElementsByTagName("head")[0] || A.getElementsByTagName("body")[0] || A.firstElementChild || A;
        b.appendChild(a)
    }

    function f(a) {
        var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(A.cookie);
        return b ? b[1] : c
    }

    function g(a) {
        var b = new Date;
        b.setTime(b.getTime() - 864e5);
        var c = "/";
        A.cookie = a + "=;path=" + c + ";domain=." + N.mainDomain + ";expires=" + b.toGMTString(), A.cookie = a + "=;path=" + c + ";domain=." + N.subDomain + "." + N.mainDomain + ";expires=" + b.toGMTString()
    }

    function h() {
        var a = A.getElementById("J_app_key");
        return a ? a.value : "waptest" === N.subDomain ? "4272" : "12574478"
    }

    function i(b) {
        function c(a) {
            a = a ? a.split("_")[0] : "", b(a)
        }
        N.useAlipayJSBridge === !0 && !S && T && a.AlipayJSBridge && a.AlipayJSBridge.call ? a.AlipayJSBridge.call("getMtopToken", function(a) {
            a && a.token ? c(a.token) : c(f(P))
        }, function() {
            c(f(P))
        }) : c(f(P))
    }

    function j() {
        g(P), g(Q)
    }

    function k(a, b, c) {
        i(function(e) {
            var f = d(e + "&" + b + "&" + h() + "&" + a);
            c(f)
        })
    }

    function l(a, b) {
        function c(b) {
            for (var c = 0; c < b.length;) {
                var d = b[c];
                d.match(/^[^=]+$/) ? a[d] ? b[c++] += "=" + encodeURIComponent(a[d]) : b.splice(c, 1) : c++
            }
        }
        var d = t(a.api),
            e = "http://" + (d ? d + "." : "") + (N.prefix ? N.prefix + "." : "") + (N.subDomain ? N.subDomain + "." : "") + N.mainDomain + "/h5/" + a.api.toLowerCase() + "/" + a.v.toLowerCase() + "/",
            f = (new Date).getTime(),
            g = ["v", "api", "ttid", "sprefer", "appKey=" + h(), "t=" + f],
            i = ["data", "ua"];
        a.isRequestJsonpByGet ? (g.push("callback=jsonpCallback"), g.push("type=jsonp")) : (a.isRequestJsonByGet || a.isRequestJsonByPost) && g.push("type=originaljson"), k(a.data, f, function(a) {
            g.push("sign=" + a), c(g), c(i), b({
                path: e,
                querystring: g.join("&"),
                postdata: i.join("&")
            })
        })
    }

    function m(a, b, d) {
        function f(a) {
            if (i && clearTimeout(i), j.parentNode && j.parentNode.removeChild(j), "TIMEOUT" === a) window[h] = function() {
                window[h] = c;
                try {
                    delete window[h]
                } catch (a) {}
            };
            else {
                window[h] = c;
                try {
                    delete window[h]
                } catch (b) {}
            }
        }
        var g = d.timeout || 2e4,
            h = "mtopjsonp" + U++,
            i = setTimeout(function() {
                f("TIMEOUT"), b({
                    ret: ["TIMEOUT"]
                })
            }, g),
            j = A.createElement("script");
        j.src = (a.path + "?" + a.querystring + "&" + a.postdata).replace("callback=jsonpCallback", "callback=" + h), j.sync = !0, j.onerror = function() {
            f("ABORT"), b({
                ret: ["ABORT"]
            })
        }, window[h] = function() {
            f(), b.apply(this, arguments)
        }, e(j)
    }

    function n(b, c, d) {
        function e(a) {
            h && clearTimeout(h), "TIMEOUT" === a && f.abort()
        }
        var f = new a.XMLHttpRequest,
            g = d.timeout || 2e4,
            h = setTimeout(function() {
                e("TIMEOUT"), c({
                    ret: ["TIMEOUT"]
                })
            }, g);
        f.onreadystatechange = function() {
            if (4 == f.readyState) {
                var a, b, d, g = f.status;
                if (g >= 200 && 300 > g || 304 == g) {
                    a = f.responseText, b = f.getAllResponseHeaders() || "";
                    try {
                        a = V.test(a) ? null : JSON.parse(a)
                    } catch (h) {
                        d = h
                    }
                    d ? c({
                        ret: ["PARSERERROR"],
                        error: d,
                        responseHeaders: b
                    }) : (a.responseHeaders = b, c(a))
                } else c({
                    ret: ["ABORT"]
                });
                e()
            }
        };
        var i, j = b.path + "?" + b.querystring;
        if (d.isRequestJsonByGet ? j += "&" + b.postdata : d.isRequestJsonByPost && (i = b.postdata), f.open(d.type.toUpperCase(), j, !0), f.withCredentials = !0, f.setRequestHeader("Accept", "application/json"), f.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d.headers)
            for (var k in d.headers) f.setRequestHeader(k, d.headers[k]);
        f.send(i)
    }

    function o(a, b, c) {
        c.isRequestJsonByPost || c.isRequestJsonByGet ? n(a, b, c) : c.isRequestJsonpByGet && m(a, b, c)
    }

    function p(a, c) {
        var d = JSON.parse(c.data || "{}"),
            e = c.api,
            f = c.v,
            g = parseInt("post" === c.type ? 1 : 0),
            h = parseInt(c.ecode || 0),
            i = parseInt(c.isSec || 0),
            j = parseInt(c.timer || 3e3),
            k = parseInt(c.timeout);
        b.windvane.call("MtopWVPlugin", "send", {
            api: e,
            v: f,
            post: g,
            ecode: h,
            isSec: i,
            param: d,
            timer: j
        }, a, a, k)
    }

    function q(a, b) {
        W.push([a, b]), r()
    }

    function r() {
        if (W.length && !X) {
            X = !0;
            var a = W.shift(),
                b = a[0],
                c = a[1];
            l(c, function(a) {
                o(a, b, c)
            })
        }
    }

    function s(a, c, d, e) {
        function f(b) {
            var f = b && b.ret || [];
            f instanceof Array && (f = f.join(","));
            var i = arguments.callee;
            f.indexOf("SUCCESS") > -1 ? (b.retType = O.SUCCESS, c && c(b, b.retType), e && e.resolve(b, b.retType), X && a.H5Request && (X = !1, r())) : f.indexOf("TOKEN_EMPTY") > -1 || f.indexOf("TOKEN_EXOIRED") > -1 ? a.H5Request && ++g < h ? l(a, function(b) {
                o(b, i, a)
            }) : (h > 0 && j(), b.retType = O.TOKEN_EXPIRED, d && d(b, b.retType), e && e.reject(b, b.retType), X && a.H5Request && (X = !1, r())) : f.indexOf("SESSION_EXPIRED") > -1 || f.indexOf("SID_INVALID") > -1 || f.indexOf("AUTH_REJECT") > -1 || f.indexOf("NEED_LOGIN") > -1 ? (b.retType = O.SESSION_EXPIRED, d && d(b, b.retType), e && e.reject(b, b.retType), X && a.H5Request && (X = !1, r())) : a.WindVaneRequest && (!f || f.indexOf("HY_FAILED") > -1 || f.indexOf("HY_NO_HANDLER") > -1 || f.indexOf("HY_CLOSED") > -1 || f.indexOf("HY_EXCEPTION") > -1 || f.indexOf("HY_NO_PERMISSION") > -1) ? (N.H5Request = !0, a.H5Request = !0, a.WindVaneRequest = !1, l(a, function(b) {
                o(b, i, a)
            })) : (b.retType = O.ERROR, d && d(b, b.retType), e && e.reject(b, b.retType), X && a.H5Request && (X = !1, r()))
        }
        var g = 0,
            h = null != a.maxRetryTimes ? a.maxRetryTimes : 5;
        return b.mtop.middleware ? function(c) {
            var d = b.mtop.middleware.pipe(a, c);
            d.on("reset", function() {
                var a = this;
                l(a.request, function(b) {
                    o(b, function(b) {
                        a.response = b, a.next()
                    }, a.request)
                })
            }), d.on("end", function() {
                f(this.response)
            }), d.next()
        } : f
    }

    function t(a) {
        var b = !1;
        if (Y) {
            var c = f("_m_user_unitinfo_"),
                d = Y.getItem("unitinfo");
            return c && c.split("|")[0].indexOf("center") < 0 && d && d.indexOf(a.toLowerCase()) >= 0 && (b = c.split("|")[1]), b
        }
    }

    function u() {
        function b() {
            h || (h = !0, j.onload = j.onerror = null, j.parentNode && j.parentNode.removeChild(j))
        }
        if (Y) {
            var c = f("_m_unitapi_v_"),
                d = Y.getItem("unitinfo");
            if (c) {
                var g = d ? JSON.parse(d) : {};
                if (!d || c !== g.version) {
                    var h = !1,
                        i = "//h5." + N.subDomain + ".taobao.com/js/mtop/unit/" + c + "/unitApi.js",
                        j = document.createElement("script");
                    j.src = i, j.onerror = function() {
                        b()
                    }, a.jsonp_unitapi || (a.jsonp_unitapi = function(a) {
                        b(), Y.setItem("unitinfo", JSON.stringify(a))
                    }), e(j)
                }
            }
        }
    }

    function v(a, c, d) {

        if (a.v = a.v || "*", a.data = a.data || "{}", a.timeout = a.timeout || 2e4, a.type = (a.type || "get").toLowerCase(), a.dataType = a.dataType || "jsonp", "get" === a.type && "jsonp" === a.dataType ? a.isRequestJsonpByGet = !0 : "get" === a.type && "json" === a.dataType ? a.isRequestJsonByGet = !0 : "post" === a.type && (a.dataType = "json", a.isRequestJsonByPost = !0), "object" == typeof a.data && (a.data = JSON.stringify(a.data)), N.H5Request === !1 && a.WindVaneRequest === !0) {
            if (!(b.windvane && parseFloat(D) >= 5.4)) throw new Error("客户端需接入WindVane SDK以及MtopPlugin SDK；页面需引入lib.windvane库");
            a.WindVaneRequest = !0
        } else N.H5Request === !0 || a.H5Request === !0 ? a.H5Request = !0 : null == a.WindVaneRequest && (N.H5Request === !1 && b.windvane && parseFloat(D) >= 5.4 ? a.WindVaneRequest = !0 : a.H5Request = !0);
        if (a.H5Request = !!a.H5Request, a.WindVaneRequest = !!a.WindVaneRequest, a.LoginRequest && a.WindVaneRequest && (a.LoginRequest = !1), N.LoginRequest === !0 || a.LoginRequest === !0) {
            if (!b.login) throw new Error("页面需引入lib.login库");
            if (!b.mtop.middleware) throw new Error("页面需引入lib.mtop库中的middleware.js");
            a.WindVaneRequest
        }
        if (N.AntiCreep === !0 || a.AntiCreep === !0) {
            if (!b.mtop.middleware) throw new Error("页面需引入lib.mtop库中的middleware.js");
            a.AntiCreep = !0
        }
        if (N.AntiFlood === !0 || a.AntiFlood === !0) {
            if (!b.mtop.middleware) throw new Error("页面需引入lib.mtop库中的middleware.js");
            a.AntiFlood = !0
        }

        var e, f = b.promise;
        f && f.defer && (e = f.defer());
        var g = s(a, c, d || c, e);

        return a.WindVaneRequest ? p(g, a) : a.H5Request && q(g, a), Y && u(), e && e.promise
    }

    function w(a, b, c) {
        return a.H5Request = !0, v(a, b, c)
    }

    function x(a, c, d) {
        return a.LoginRequest = !0, b.mtop.request(a, c, d)
    }

    function y(a, c, d) {
        return a.AntiCreep = !0, b.mtop.request(a, c, d)
    }

    function z(a, c, d) {
        return a.AntiFlood = !0, b.mtop.request(a, c, d)
    }
    var A = a.document,
        B = a.navigator.userAgent,
        C = a.location.hostname,
        D = B.match(/WindVane[\/\s]([\d\.\_]+)/);
    D && (D = D[1]);
    var E, F, G = B.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
    G && (E = G[1], F = G[2]);
    var H = ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "etao.com", "alibaba.com", "alibaba-inc.com", "alipay.com", "aliyun.com", "tdd.la"],
        I = new RegExp("([^.]*?)\\.?((?:" + H.join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
        J = C.match(I) || [],
        K = function() {
            var a = J[2] || "taobao.com";
            return a
        }(),
        L = function() {
            var a = K,
                b = J[1] || "m";
            return "taobao.net" !== a || "x" !== b && "waptest" !== b && "daily" !== b ? "taobao.net" === a && "demo" === b ? b = "demo" : "tmall.com" === a && "www" === b ? b = "m" : "tdd.la" === a && "m" === b && (b = "") : b = "waptest", b
        }(),
        M = "etao.com" === K ? "apie" : "api";
    b.mtop = b.mtop || {};
    var N = {
        prefix: M,
        mainDomain: K,
        subDomain: L,
        useAlipayJSBridge: !1,
        H5Request: !("TB" === E || "TM" === E),
        LoginRequest: !1,
        AntiCreep: !1,
        AntiFlood: !1
    };
    b.mtop.config = N;
    var O = {
        ERROR: -1,
        SUCCESS: 0,
        TOKEN_EXPIRED: 1,
        SESSION_EXPIRED: 2
    };
    b.mtop.RESPONSE_TYPE = O;
    var P = "_m_h5_tk",
        Q = "_m_h5_tk_enc",
        R = B.match(/AliApp\(AP\/([\d\.]+)\)/),
        S = !!location.protocol.match(/^https?\:$/),
        T = R && parseFloat(R[1]) >= 8.2,
        U = 1,
        V = /^\s*$/,
        W = [],
        X = !1,
        Y = a.localStorage;
    if (Y) try {
        Y.setItem("@private", "false")
    } catch (Z) {
        Y = !1
    }
    b.mtop.request = v, b.mtop.H5Request = w, b.mtop.loginRequest = x, b.mtop.antiCreepRequest = y, b.mtop.antiFloodRequest = z
}(window, window.lib || (window.lib = {}));
