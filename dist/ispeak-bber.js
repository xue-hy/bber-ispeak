/*! For license information please see ispeak-bber.min.js.LICENSE.txt */
var e, t;
e = self, t = function() {
    return function() {
        var e = {
                9215: function(e) {
                    "use strict";
                    e.exports = JSON.parse('{"name":"@cloudbase/js-sdk","version":"1.7.1","description":"cloudbase javascript sdk","main":"dist/index.cjs.js","module":"dist/index.esm.js","miniprogram":"miniprogram_dist","typings":"./index.d.ts","scripts":{"lint":"eslint --fix \\"./src/**/*.ts\\" \\"./database/**/*.ts\\"","build":"rm -rf dist/ && gulp build","build:cdn":"gulp cdn","build:miniapp":"gulp miniapp","build:e2e":"rm -rf dist/ && NODE_ENV=e2e gulp e2e"},"publishConfig":{"access":"public"},"repository":{"type":"git","url":"https://github.com/TencentCloudBase/cloudbase-js-sdk"},"keywords":["tcb","cloudbase","Cloudbase","serverless","Serverless","javascript","JavaScript"],"files":["miniprogram_dist","**/dist/","/index.d.ts","**/package.json"],"components":["app","auth","database","functions","storage"],"author":"","license":"ISC","dependencies":{"@cloudbase/analytics":"^1.1.1-alpha.0","@cloudbase/app":"^1.4.1","@cloudbase/auth":"^1.6.1","@cloudbase/database":"0.9.18-next","@cloudbase/functions":"^1.3.4","@cloudbase/realtime":"^1.1.4-alpha.0","@cloudbase/storage":"^1.3.4","@cloudbase/types":"^1.1.3-alpha.0","@cloudbase/utilities":"^1.3.4"},"devDependencies":{"@babel/core":"^7.9.0","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/plugin-transform-runtime":"^7.9.0","@babel/preset-env":"^7.9.5","@babel/preset-typescript":"^7.9.0","@typescript-eslint/eslint-plugin":"^3.8.0","@typescript-eslint/parser":"^3.8.0","awesome-typescript-loader":"^5.2.1","babel-loader":"^8.1.0","eslint":"^7.6.0","eslint-config-alloy":"^3.7.4","gulp":"^4.0.2","gulp-clean":"^0.4.0","gulp-rename":"^2.0.0","gulp-sourcemaps":"^2.6.5","gulp-typescript":"^6.0.0-alpha.1","json-loader":"^0.5.7","merge-stream":"^2.0.0","package-json-cleanup-loader":"^1.0.3","typescript":"^3.8.3","webpack":"4.41.3","webpack-cli":"^3.3.11","webpack-node-externals":"^1.7.2","webpack-stream":"^5.2.1","webpack-visualizer-plugin":"^0.1.11"},"browserslist":["last 2 version","> 1%","not dead","chrome 53"],"gitHead":"ab207863756e06d702ad17554e67a3c6242ce4b6"}')
                },
                7402: function(e) {
                    "use strict";

                    function t(e, t, n, r, o, i, s) {
                        try {
                            var a = e[i](s),
                                u = a.value
                        } catch (c) { return void n(c) }
                        a.done ? t(u) : Promise.resolve(u).then(r, o)
                    }
                    e.exports = function(e) {
                        return function() {
                            var n = this,
                                r = arguments;
                            return new Promise((function(o, i) {
                                var s = e.apply(n, r);

                                function a(e) { t(s, o, i, a, u, "next", e) }

                                function u(e) { t(s, o, i, a, u, "throw", e) }
                                a(undefined)
                            }))
                        }
                    }, e.exports["default"] = e.exports, e.exports.__esModule = !0
                },
                6247: function(e) {
                    "use strict";
                    e.exports = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }, e.exports["default"] = e.exports, e.exports.__esModule = !0
                },
                3483: function(e) {
                    "use strict";
                    e.exports = function(e) { return e && e.__esModule ? e : { "default": e } }, e.exports["default"] = e.exports, e.exports.__esModule = !0
                },
                2370: function(e, t, n) {
                    "use strict";
                    var r = n(3988)["default"];

                    function o() { if ("function" != typeof WeakMap) return null; var e = new WeakMap; return o = function() { return e }, e }
                    e.exports = function(e) {
                        if (e && e.__esModule) return e;
                        if (null === e || "object" !== r(e) && "function" != typeof e) return { "default": e };
                        var t = o();
                        if (t && t.has(e)) return t.get(e);
                        var n = {},
                            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var s in e)
                            if (Object.prototype.hasOwnProperty.call(e, s)) {
                                var a = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                                a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = e[s]
                            }
                        return n["default"] = e, t && t.set(e, n), n
                    }, e.exports["default"] = e.exports, e.exports.__esModule = !0
                },
                3988: function(e) {
                    "use strict";

                    function t(n) { return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = t = function(e) { return typeof e }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = t = function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, e.exports["default"] = e.exports, e.exports.__esModule = !0), t(n) }
                    e.exports = t, e.exports["default"] = e.exports, e.exports.__esModule = !0
                },
                6304: function(e, t, n) {
                    "use strict";
                    e.exports = n(3355)
                },
                1588: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var r = n(3125);
                    Object.keys(r).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return r[e] } })) }));
                    var o = n(9206);
                    Object.keys(o).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return o[e] } })) }))
                },
                3125: function(e, t) {
                    "use strict";
                    var n;
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.AbstractStorage = t.AbstractSDKRequest = t.StorageType = void 0, t.StorageType = n,
                        function(e) { e.local = "local", e.none = "none", e.session = "session" }(n || (t.StorageType = n = {}));
                    var r = function() {};
                    t.AbstractSDKRequest = r;
                    var o = function() {};
                    t.AbstractStorage = o
                },
                9206: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.formatUrl = function(e, t, n) {
                        void 0 === n && (n = {});
                        var r = /\?/.test(t),
                            o = "";
                        for (var i in n) "" === o ? !r && (t += "?") : o += "&", o += i + "=" + encodeURIComponent(n[i]);
                        return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t
                    }
                },
                5086: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.setSdkVersion = function(e) { s = e }, t.getSdkVersion = function() { return s }, t.setSdkName = function(e) { a = e, o(e) }, t.getSdkName = function() { return a }, t.setEndPoint = l, t.setRegionLevelEndpoint = function(e, t, n) { l(t ? "//" + e + "." + t + ".tcb-api.tencentcloudapi.com/web" : "//" + e + ".ap-shanghai.tcb-api.tencentcloudapi.com/web", n) }, t.getEndPoint = function() { return { BASE_URL: f, PROTOCOL: c } }, t.LOGINTYPE = t.DATA_VERSION = void 0;
                    var r = n(1895),
                        o = r.constants.setSdkName,
                        i = r.constants.setProtocol,
                        s = "",
                        a = "@cloudbase/js-sdk";
                    t.DATA_VERSION = "2020-01-10";
                    var u, c = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:",
                        f = "//tcb-api.tencentcloudapi.com/web";

                    function l(e, t) { f = e, t && (c = t, i(t)) }
                    t.LOGINTYPE = u,
                        function(e) { e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.CUSTOM = "CUSTOM", e.NULL = "NULL" }(u || (t.LOGINTYPE = u = {}))
                },
                2701: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.EVENTS = void 0, t.EVENTS = { LOGIN_STATE_CHANGED: "loginStateChanged", LOGIN_STATE_EXPIRED: "loginStateExpire", LOGIN_TYPE_CHANGED: "loginTypeChanged", ANONYMOUS_CONVERTED: "anonymousConverted", ACCESS_TOKEN_REFRESHD: "refreshAccessToken" }
                },
                9304: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = t.cloudbase = void 0;
                    var o = r(n(3988)),
                        i = n(1895),
                        s = r(n(4934)),
                        a = n(9487),
                        u = n(1510),
                        c = n(1888),
                        f = n(3704),
                        l = n(5086),
                        p = function() {
                            return (p = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        d = function(e, t, n, r) {
                            var i, s = arguments.length,
                                a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else
                                for (var u = e.length - 1; u >= 0; u--)(i = e[u]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
                            return s > 3 && a && Object.defineProperty(t, n, a), a
                        },
                        h = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        y = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        g = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        _ = i.adapters.useAdapters,
                        v = i.adapters.useDefaultAdapter,
                        m = i.adapters.RUNTIME,
                        b = i.constants.ERRORS,
                        O = i.constants.COMMUNITY_SITE_URL,
                        A = i.utils.printWarn,
                        w = i.helpers.catchErrorsDecorator,
                        S = { timeout: 15e3, persistence: "local" },
                        E = 6e5,
                        N = {},
                        T = new(function() {
                            function e(e) { this._config = e || this._config, this.authInstance = null }
                            return Object.defineProperty(e.prototype, "config", { get: function() { return this._config }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "platform", { get: function() { return u.Platform }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "cache", { get: function() { return (0, c.getCacheByEnvId)(this._config.env) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "localCache", { get: function() { return (0, c.getLocalCache)(this._config.env) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "request", { get: function() { return (0, f.getRequestByEnvId)(this._config.env) }, enumerable: !1, configurable: !0 }), e.prototype.init = function(t) {
                                if (!t.env) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "env must not be specified" }));
                                if (u.Platform.adapter || this._useDefaultAdapter(), this.requestClient = new u.Platform.adapter.reqClass({ timeout: t.timeout || 5e3, timeoutMsg: "[" + (0, l.getSdkName)() + "][REQUEST TIMEOUT] request had been abort since didn't finished within" + t.timeout / 1e3 + "s" }), u.Platform.runtime !== m.WEB) { if (!t.appSecret) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "invalid appSecret" })); var n = u.Platform.adapter.getAppSign ? u.Platform.adapter.getAppSign() : ""; if (t.appSign && n && t.appSign !== n) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "invalid appSign" })); if (n && (t.appSign = n), !t.appSign) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "invalid appSign" })) }
                                this._config = p(p({}, S), t), this._config.timeout = this._formatTimeout(this._config.timeout);
                                var r = this._config,
                                    o = r.env,
                                    i = r.persistence,
                                    s = r.debug,
                                    a = r.timeout,
                                    d = r.appSecret,
                                    h = r.appSign;
                                (0, c.initCache)({ env: o, persistence: i, debug: s, platformInfo: this.platform }), (0, f.initRequest)({ env: o, region: t.region || "", timeout: a, appSecret: d, appSign: h }), t.region && (0, l.setRegionLevelEndpoint)(o, t.region || "");
                                var y = new e(this._config);
                                return y.requestClient = this.requestClient, y
                            }, e.prototype.updateConfig = function(e) {
                                var t = e.persistence,
                                    n = e.debug;
                                this._config.persistence = t, this._config.debug = n, (0, c.initCache)({ env: this._config.env, persistence: t, debug: n, platformInfo: this.platform })
                            }, e.prototype.registerExtension = function(e) { N[e.name] = e }, e.prototype.invokeExtension = function(e, t) {
                                return y(this, void 0, void 0, (function() {
                                    var n;
                                    return g(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                if (!(n = N[e])) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "extension:" + e + " must be registered before invoke" }));
                                                return [4, n.invoke(t, this)];
                                            case 1:
                                                return [2, r.sent()]
                                        }
                                    }))
                                }))
                            }, e.prototype.useAdapters = function(e) {
                                var t = _(e) || {},
                                    n = t.adapter,
                                    r = t.runtime;
                                n && (u.Platform.adapter = n), r && (u.Platform.runtime = r)
                            }, e.prototype.registerHook = function(t) {
                                (0, a.registerHook)(e, t)
                            }, e.prototype.registerComponent = function(t) {
                                (0, a.registerComponent)(e, t)
                            }, e.prototype.registerVersion = function(e) {
                                (0, l.setSdkVersion)(e)
                            }, e.prototype.registerSdkName = function(e) {
                                (0, l.setSdkName)(e)
                            }, e.prototype.registerEndPoint = function(e, t) {
                                (0, l.setEndPoint)(e, t)
                            }, e.prototype._useDefaultAdapter = function() {
                                var e = v(),
                                    t = e.adapter,
                                    n = e.runtime;
                                u.Platform.adapter = t, u.Platform.runtime = n
                            }, e.prototype._formatTimeout = function(e) {
                                switch (!0) {
                                    case e > E:
                                        return A(b.INVALID_PARAMS, "timeout is greater than maximum value[10min]"), E;
                                    case e < 100:
                                        return A(b.INVALID_PARAMS, "timeout is less than maximum value[100ms]"), 100;
                                    default:
                                        return e
                                }
                            }, d([w({ mode: "sync", title: "Cloudbase 初始化失败", messages: ["请确认以下各项：", "  1 - 调用 cloudbase.init() 的语法或参数是否正确", "  2 - 如果是非浏览器环境，是否配置了安全应用来源（https://docs.cloudbase.net/api-reference/webv2/adapter.html#jie-ru-liu-cheng）", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + O] }), h("design:type", Function), h("design:paramtypes", [Object]), h("design:returntype", e)], e.prototype, "init", null), d([w({ title: "调用扩展能力失败", messages: ["请确认以下各项：", "  1 - 调用 invokeExtension() 的语法或参数是否正确", "  2 - 被调用的扩展能力是否已经安装并通过 registerExtension() 注册", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + O] }), h("design:type", Function), h("design:paramtypes", [String, Object]), h("design:returntype", Promise)], e.prototype, "invokeExtension", null), e
                        }());
                    t.cloudbase = T, T.useAdapters(s["default"]);
                    var I = T;
                    t["default"] = I
                },
                1510: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Platform = void 0, t.Platform = {}
                },
                1888: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.initCache = function(e) {
                        var t = e.env,
                            n = e.persistence,
                            r = e.platformInfo,
                            u = { accessTokenKey: "access_token_" + t, accessTokenExpireKey: "access_token_expire_" + t, refreshTokenKey: "refresh_token_" + t, anonymousUuidKey: "anonymous_uuid_" + t, loginTypeKey: "login_type_" + t, userInfoKey: "user_info_" + t };
                        s[t] ? s[t].updatePersistence(n) : s[t] = new i(o(o({}, e), { keys: u, platformInfo: r, alwaysLocalKeys: ["anonymousUuidKey"] })), a[t] = a[t] || new i(o(o({}, e), { keys: u, platformInfo: r, persistence: "local" }))
                    }, t.getCacheByEnvId = function(e) { return s[e] }, t.getLocalCache = function(e) { return a[e] };
                    var r = n(1895),
                        o = function() {
                            return (o = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        i = r.cache.CloudbaseCache,
                        s = {},
                        a = {}
                },
                9487: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.registerComponent = function(e, t) {
                        var n = t.name,
                            r = t.namespace,
                            u = t.entity,
                            c = t.injectEvents,
                            f = t.IIFE,
                            l = void 0 !== f && f;
                        if (s[n] || r && e[r]) throw new Error(JSON.stringify({ code: i.INVALID_OPERATION, msg: "Duplicate component " + n }));
                        if (l) {
                            if (!u || "function" != typeof u) throw new Error(JSON.stringify({ code: i.INVALID_PARAMS, msg: "IIFE component's entity must be a function" }));
                            u.call(e)
                        }
                        if (s[n] = t, r ? e.prototype[r] = u : a(e.prototype, u), c) {
                            var p = c.bus,
                                d = c.events;
                            if (!p || !d || 0 === d.length) return;
                            var h = e.prototype.fire || function() {};
                            e.prototype.events || (e.prototype.events = {}), (e.prototype.events || {})[n] ? e.prototype.events[n].events = o(e.prototype.events[n].events, d) : e.prototype.events[n] = { bus: p, events: d }, e.prototype.fire = function(e, t) {
                                for (var n in h(e, t), this.events) {
                                    var r = this.events[n],
                                        o = r.bus;
                                    if (r.events.includes(e)) { o.fire(e, t); break }
                                }
                            }
                        }
                    }, t.registerHook = function(e, t) {
                        var n = t.entity,
                            r = t.target;
                        if (!e.prototype.hasOwnProperty(r)) throw new Error(JSON.stringify({ code: i.INVALID_OPERATION, msg: "target:" + r + " is not exist" }));
                        var s = e.prototype[r];
                        if ("function" != typeof s) throw new Error(JSON.stringify({ code: i.INVALID_OPERATION, msg: "target:" + r + " is not a function which is the only type supports hook" }));
                        e.prototype[r] = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return n.call.apply(n, o([this], e)), s.call.apply(s, o([this], e)) }
                    };
                    var r = n(1895),
                        o = function() {
                            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                            var r = Array(e),
                                o = 0;
                            for (t = 0; t < n; t++)
                                for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                            return r
                        },
                        i = r.constants.ERRORS,
                        s = {};

                    function a(e, t) {
                        if (!(t instanceof Object)) return t;
                        switch (t.constructor) {
                            case Date:
                                return new Date(t.getTime());
                            case Object:
                                e === undefined && (e = {});
                                break;
                            case Array:
                                e = [];
                                break;
                            default:
                                return t
                        }
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = a(e[n], t[n]));
                        return e
                    }
                },
                3704: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.initRequest = function(e) { A[e.env] = new O(c(c({}, e), { "throw": !0 })) }, t.getRequestByEnvId = function(e) { return A[e] }, t.CloudbaseRequest = void 0;
                    var r = n(5086),
                        o = n(1895),
                        i = n(9304),
                        s = n(1888),
                        a = n(2701),
                        u = n(1510),
                        c = function() {
                            return (c = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        f = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        l = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        p = o.constants.ERRORS,
                        d = o.utils.genSeqId,
                        h = o.utils.isFormData,
                        y = o.utils.formatUrl,
                        g = o.utils.createSign,
                        _ = o.adapters.RUNTIME,
                        v = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"];

                    function m(e, t, n) {
                        var r = e[t];
                        e[t] = function(t) {
                            var o = {},
                                i = {};
                            n.forEach((function(n) {
                                var r = n.call(e, t),
                                    s = r.data,
                                    a = r.headers;
                                Object.assign(o, s), Object.assign(i, a)
                            }));
                            var s = t.data;
                            return s && function() {
                                if (h(s))
                                    for (var e in o) s.append(e, o[e]);
                                else t.data = c(c({}, s), o)
                            }(), t.headers = c(c({}, t.headers || {}), i), r.call(e, t)
                        }
                    }

                    function b() { var e = d(); return { data: { seqId: e }, headers: { "X-SDK-Version": "@cloudbase/js-sdk/" + (0, r.getSdkVersion)(), "x-seqid": e } } }
                    var O = function() {
                        function e(e) { this._throwWhenRequestFail = !1, this.config = e, this._reqClass = new u.Platform.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "[@cloudbase/js-sdk] 请求在" + this.config.timeout / 1e3 + "s内未完成，已中断", restrictedMethods: ["post"] }), this._throwWhenRequestFail = e["throw"] || !1, this._cache = (0, s.getCacheByEnvId)(this.config.env), this._localCache = (0, s.getLocalCache)(this.config.env), m(this._reqClass, "post", [b]), m(this._reqClass, "upload", [b]), m(this._reqClass, "download", [b]) }
                        return e.prototype.post = function(e) {
                            return f(this, void 0, void 0, (function() {
                                return l(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this._reqClass.post(e)];
                                        case 1:
                                            return [2, t.sent()]
                                    }
                                }))
                            }))
                        }, e.prototype.upload = function(e) {
                            return f(this, void 0, void 0, (function() {
                                return l(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this._reqClass.upload(e)];
                                        case 1:
                                            return [2, t.sent()]
                                    }
                                }))
                            }))
                        }, e.prototype.download = function(e) {
                            return f(this, void 0, void 0, (function() {
                                return l(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this._reqClass.download(e)];
                                        case 1:
                                            return [2, t.sent()]
                                    }
                                }))
                            }))
                        }, e.prototype.refreshAccessToken = function() {
                            return f(this, void 0, void 0, (function() {
                                var e, t, n;
                                return l(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this._refreshAccessTokenPromise];
                                        case 2:
                                            return e = r.sent(), [3, 4];
                                        case 3:
                                            return n = r.sent(), t = n, [3, 4];
                                        case 4:
                                            if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t) throw t;
                                            return [2, e]
                                    }
                                }))
                            }))
                        }, e.prototype.getAccessToken = function() {
                            return f(this, void 0, void 0, (function() {
                                var e, t, n, r, o, i, s, a, u;
                                return l(this, (function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return e = this._cache.keys, t = e.accessTokenKey, n = e.accessTokenExpireKey, r = e.refreshTokenKey, [4, this._cache.getStoreAsync(r)];
                                        case 1:
                                            if (!c.sent()) throw new Error(JSON.stringify({ code: p.OPERATION_FAIL, msg: "refresh token is not exist, your local data might be messed up, please retry after clear localStorage or sessionStorage" }));
                                            return [4, this._cache.getStoreAsync(t)];
                                        case 2:
                                            return o = c.sent(), s = Number, [4, this._cache.getStoreAsync(n)];
                                        case 3:
                                            return i = s.apply(void 0, [c.sent()]), a = !0, (u = this._shouldRefreshAccessTokenHook) ? [4, this._shouldRefreshAccessTokenHook(o, i)] : [3, 5];
                                        case 4:
                                            u = !c.sent(), c.label = 5;
                                        case 5:
                                            return u && (a = !1), o && i && !(i < Date.now()) || !a ? [3, 7] : [4, this.refreshAccessToken()];
                                        case 6:
                                            return [2, c.sent()];
                                        case 7:
                                            return [2, { accessToken: o, accessTokenExpire: i }]
                                    }
                                }))
                            }))
                        }, e.prototype.request = function(e, t, n) {
                            return f(this, void 0, void 0, (function() {
                                var o, i, s, a, f, p, d, h, m, b, O, A, w, S, E, N, T, I, B, P, L, D, R, M, C, x;
                                return l(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return o = "x-tcb-trace_" + this.config.env, i = "application/x-www-form-urlencoded", s = c({ action: e, dataVersion: r.DATA_VERSION, env: this.config.env }, t), -1 !== v.indexOf(e) ? [3, 3] : (a = this._cache.keys.refreshTokenKey, [4, this._cache.getStoreAsync(a)]);
                                        case 1:
                                            return l.sent() ? (f = s, [4, this.getAccessToken()]) : [3, 3];
                                        case 2:
                                            f.access_token = l.sent().accessToken, l.label = 3;
                                        case 3:
                                            if ("storage.uploadFile" === e) {
                                                for (d in p = new FormData) p.hasOwnProperty(d) && p[d] !== undefined && p.append(d, s[d]);
                                                i = "multipart/form-data"
                                            } else
                                                for (d in i = "application/json;charset=UTF-8", p = {}, s) s[d] !== undefined && (p[d] = s[d]);
                                            return h = { headers: { "content-type": i } }, (null == n ? void 0 : n.onUploadProgress) && (h.onUploadProgress = n.onUploadProgress), this.config.region && (h.headers["X-TCB-Region"] = this.config.region), (m = this._localCache.getStore(o)) && (h.headers["X-TCB-Trace"] = m), u.Platform.runtime !== _.WEB && (b = this.config, O = b.appSign, A = b.appSecret, w = Date.now(), S = A.appAccessKey, E = A.appAccessKeyId, N = g({ data: {}, timestamp: w, appAccessKeyId: E, appSign: O }, S), h.headers["X-TCB-App-Source"] = "timestamp=" + w + ";appAccessKeyId=" + E + ";appSign=" + O + ";sign=" + N), T = t.parse, I = t.inQuery, B = t.search, P = { env: this.config.env }, T && (P.parse = !0), I && (P = c(c({}, I), P)), L = (0, r.getEndPoint)(), D = L.BASE_URL, R = L.PROTOCOL, M = y(R, D, P), B && (M += B), [4, this.post(c({ url: M, data: p }, h))];
                                        case 4:
                                            if (C = l.sent(), (x = C.header && C.header["x-tcb-trace"]) && this._localCache.setStore(o, x), 200 !== Number(C.status) && 200 !== Number(C.statusCode) || !C.data) throw new Error("network request error");
                                            return [2, C]
                                    }
                                }))
                            }))
                        }, e.prototype.send = function(e, t) {
                            return void 0 === t && (t = {}), f(this, void 0, void 0, (function() {
                                var n;
                                return l(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];
                                        case 1:
                                            return "ACCESS_TOKEN_EXPIRED" !== (n = r.sent()).data.code || -1 !== v.indexOf(e) ? [3, 4] : [4, this.refreshAccessToken()];
                                        case 2:
                                            return r.sent(), [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];
                                        case 3:
                                            n = r.sent(), r.label = 4;
                                        case 4:
                                            if (n.data.code && this._throwWhenRequestFail) throw new Error(JSON.stringify({ code: p.OPERATION_FAIL, msg: "[" + n.data.code + "] " + n.data.message }));
                                            return [2, n.data]
                                    }
                                }))
                            }))
                        }, e.prototype._refreshAccessToken = function(e) {
                            return void 0 === e && (e = 1), f(this, void 0, void 0, (function() {
                                var t, n, o, s, u, c, f, d, h, y, g, _, v;
                                return l(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return t = this._cache.keys, n = t.accessTokenKey, o = t.accessTokenExpireKey, s = t.refreshTokenKey, u = t.loginTypeKey, c = t.anonymousUuidKey, [4, this._cache.removeStoreAsync(n)];
                                        case 1:
                                            return l.sent(), [4, this._cache.removeStoreAsync(o)];
                                        case 2:
                                            return l.sent(), [4, this._cache.getStoreAsync(s)];
                                        case 3:
                                            if (!(f = l.sent())) throw new Error(JSON.stringify({ code: p.INVALID_OPERATION, msg: "not login" }));
                                            return d = { refresh_token: f }, [4, this.request("auth.fetchAccessTokenWithRefreshToken", d)];
                                        case 4:
                                            return (h = l.sent()).data.code ? "SIGN_PARAM_INVALID" !== (y = h.data.code) && "REFRESH_TOKEN_EXPIRED" !== y && "INVALID_REFRESH_TOKEN" !== y ? [3, 11] : [4, this._cache.getStoreAsync(u)] : [3, 12];
                                        case 5:
                                            return l.sent() === r.LOGINTYPE.ANONYMOUS && "INVALID_REFRESH_TOKEN" === y ? [4, this._cache.getStoreAsync(c)] : [3, 9];
                                        case 6:
                                            return g = l.sent(), [4, this._cache.getStoreAsync(s)];
                                        case 7:
                                            return _ = l.sent(), [4, this.send("auth.signInAnonymously", { anonymous_uuid: g, refresh_token: _ })];
                                        case 8:
                                            if (v = l.sent(), this._setRefreshToken(v.refresh_token), e >= 1) return [2, this._refreshAccessToken(--e)];
                                            throw new Error(JSON.stringify({ code: p.OPERATION_FAIL, message: "重试获取 refresh token 失败" }));
                                        case 9:
                                            return i.cloudbase.fire(a.EVENTS.LOGIN_STATE_EXPIRED), [4, this._cache.removeStoreAsync(s)];
                                        case 10:
                                            l.sent(), l.label = 11;
                                        case 11:
                                            throw new Error(JSON.stringify({ code: p.NETWORK_ERROR, msg: "refresh access_token failed：" + h.data.code }));
                                        case 12:
                                            return h.data.access_token ? (i.cloudbase.fire(a.EVENTS.ACCESS_TOKEN_REFRESHD), [4, this._cache.setStoreAsync(n, h.data.access_token)]) : [3, 15];
                                        case 13:
                                            return l.sent(), [4, this._cache.setStoreAsync(o, h.data.access_token_expire + Date.now())];
                                        case 14:
                                            return l.sent(), [2, { accessToken: h.data.access_token, accessTokenExpire: h.data.access_token_expire }];
                                        case 15:
                                            return h.data.refresh_token ? [4, this._cache.removeStoreAsync(s)] : [3, 19];
                                        case 16:
                                            return l.sent(), [4, this._cache.setStoreAsync(s, h.data.refresh_token)];
                                        case 17:
                                            return l.sent(), [4, this._refreshAccessToken()];
                                        case 18:
                                            l.sent(), l.label = 19;
                                        case 19:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.prototype._setRefreshToken = function(e) {
                            return f(this, void 0, void 0, (function() {
                                var t, n, r, o;
                                return l(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.refreshTokenKey, [4, this._cache.removeStoreAsync(n)];
                                        case 1:
                                            return i.sent(), [4, this._cache.removeStoreAsync(r)];
                                        case 2:
                                            return i.sent(), [4, this._cache.setStoreAsync(o, e)];
                                        case 3:
                                            return i.sent(), [2]
                                    }
                                }))
                            }))
                        }, e
                    }();
                    t.CloudbaseRequest = O;
                    var A = {}
                },
                627: function(e, t) {
                    "use strict";
                    var n;
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.LOGINTYPE = void 0, t.LOGINTYPE = n,
                        function(e) { e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL", e.PHONE = "PHONE" }(n || (t.LOGINTYPE = n = {}))
                },
                2198: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.registerAuth = function(e) { try { e.registerComponent(D) } catch (t) { console.warn(t) } }, t.registerProvider = function(e, t) { P.prototype[e] = function(n) { var r = "_" + e; return this[r] || (this[r] = new t(h(h({}, n), this._config))), this[r] } }, Object.defineProperty(t, "AuthProvider", { enumerable: !0, get: function() { return f.AuthProvider } }), t.eventBus = t.EVENTS = t.Auth = t.LoginState = void 0;
                    var o = r(n(3988)),
                        i = n(1895),
                        s = n(9368),
                        a = n(1424),
                        u = n(8432),
                        c = n(627),
                        f = n(2251),
                        l = n(2360),
                        p = n(5518),
                        d = n(4718),
                        h = function() {
                            return (h = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        y = function(e, t, n, r) {
                            var i, s = arguments.length,
                                a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else
                                for (var u = e.length - 1; u >= 0; u--)(i = e[u]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
                            return s > 3 && a && Object.defineProperty(t, n, a), a
                        },
                        g = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        _ = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        v = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        m = i.events.CloudbaseEventEmitter,
                        b = i.adapters.RUNTIME,
                        O = i.utils.printWarn,
                        A = i.utils.throwError,
                        w = i.utils.transformPhone,
                        S = i.constants.ERRORS,
                        E = i.constants.COMMUNITY_SITE_URL,
                        N = i.helpers.catchErrorsDecorator,
                        T = new m;
                    t.eventBus = T;
                    var I = function() {
                            function e(e) {
                                var t = e.cache,
                                    n = e.request;
                                this._cache = t, this._request = n, this._setUserInfo()
                            }
                            return e.prototype.checkLocalInfo = function() { return _(this, void 0, void 0, (function() { return v(this, (function(e) { return this.uid = this._getLocalUserInfo("uid"), this.loginType = this._getLocalUserInfo("loginType"), this.openid = this._getLocalUserInfo("wxOpenId"), this.wxOpenId = this._getLocalUserInfo("wxOpenId"), this.wxPublicId = this._getLocalUserInfo("wxPublicId"), this.unionId = this._getLocalUserInfo("wxUnionId"), this.qqMiniOpenId = this._getLocalUserInfo("qqMiniOpenId"), this.customUserId = this._getLocalUserInfo("customUserId"), this.nickName = this._getLocalUserInfo("nickName"), this.gender = this._getLocalUserInfo("gender"), this.avatarUrl = this._getLocalUserInfo("avatarUrl"), this.email = this._getLocalUserInfo("email"), this.hasPassword = Boolean(this._getLocalUserInfo("hasPassword")), this.phone = this._getLocalUserInfo("phone"), this.username = this._getLocalUserInfo("username"), this.location = { country: this._getLocalUserInfo("country"), province: this._getLocalUserInfo("province"), city: this._getLocalUserInfo("city") }, [2] })) })) }, e.prototype.checkLocalInfoAsync = function() {
                                return _(this, void 0, void 0, (function() {
                                    var e, t, n, r, o, i, s, a, u, c, f, l, p, d, h, y, g, _;
                                    return v(this, (function(v) {
                                        switch (v.label) {
                                            case 0:
                                                return e = this, [4, this._getLocalUserInfoAsync("uid")];
                                            case 1:
                                                return e.uid = v.sent(), t = this, [4, this._getLocalUserInfoAsync("loginType")];
                                            case 2:
                                                return t.loginType = v.sent(), n = this, [4, this._getLocalUserInfoAsync("wxOpenId")];
                                            case 3:
                                                return n.openid = v.sent(), r = this, [4, this._getLocalUserInfoAsync("wxOpenId")];
                                            case 4:
                                                return r.wxOpenId = v.sent(), o = this, [4, this._getLocalUserInfoAsync("wxPublicId")];
                                            case 5:
                                                return o.wxPublicId = v.sent(), i = this, [4, this._getLocalUserInfoAsync("wxUnionId")];
                                            case 6:
                                                return i.unionId = v.sent(), s = this, [4, this._getLocalUserInfoAsync("qqMiniOpenId")];
                                            case 7:
                                                return s.qqMiniOpenId = v.sent(), a = this, [4, this._getLocalUserInfoAsync("customUserId")];
                                            case 8:
                                                return a.customUserId = v.sent(), u = this, [4, this._getLocalUserInfoAsync("nickName")];
                                            case 9:
                                                return u.nickName = v.sent(), c = this, [4, this._getLocalUserInfoAsync("gender")];
                                            case 10:
                                                return c.gender = v.sent(), f = this, [4, this._getLocalUserInfoAsync("avatarUrl")];
                                            case 11:
                                                return f.avatarUrl = v.sent(), l = this, [4, this._getLocalUserInfoAsync("email")];
                                            case 12:
                                                return l.email = v.sent(), p = this, d = Boolean, [4, this._getLocalUserInfoAsync("hasPassword")];
                                            case 13:
                                                return p.hasPassword = d.apply(void 0, [v.sent()]), h = this, [4, this._getLocalUserInfoAsync("phone")];
                                            case 14:
                                                return h.phone = v.sent(), y = this, [4, this._getLocalUserInfoAsync("username")];
                                            case 15:
                                                return y.username = v.sent(), g = this, _ = {}, [4, this._getLocalUserInfoAsync("country")];
                                            case 16:
                                                return _.country = v.sent(), [4, this._getLocalUserInfoAsync("province")];
                                            case 17:
                                                return _.province = v.sent(), [4, this._getLocalUserInfoAsync("city")];
                                            case 18:
                                                return g.location = (_.city = v.sent(), _), [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.linkWithTicket = function(e) { if ("string" != typeof e) throw new Error("ticket must be string"); return this._request.send("auth.linkWithTicket", { ticket: e }) }, e.prototype.linkWithRedirect = function(e) { e.signInWithRedirect() }, e.prototype.getLinkedUidList = function() {
                                return _(this, void 0, void 0, (function() {
                                    var e, t, n, r, o, i;
                                    return v(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return [4, this._request.send("auth.getLinkedUidList", {})];
                                            case 1:
                                                for (e = s.sent().data, t = !1, n = e.users, r = 0, o = n; r < o.length; r++)
                                                    if ((i = o[r]).wxOpenId && i.wxPublicId) { t = !0; break }
                                                return [2, { users: n, hasPrimaryUid: t }]
                                        }
                                    }))
                                }))
                            }, e.prototype.setPrimaryUid = function(e) { return this._request.send("auth.setPrimaryUid", { uid: e }) }, e.prototype.unlink = function(e) { return this._request.send("auth.unlink", { platform: e }) }, e.prototype.update = function(e) {
                                return _(this, void 0, void 0, (function() {
                                    var t, n, r, o, i, s, a;
                                    return v(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return t = e.nickName, n = e.gender, r = e.avatarUrl, o = e.province, i = e.country, s = e.city, [4, this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: r, province: o, country: i, city: s })];
                                            case 1:
                                                return a = u.sent().data, this._setLocalUserInfo(a), [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.updatePassword = function(e, t) { return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e }) }, e.prototype.updateEmail = function(e, t) { return this._request.send("auth.updateEmail", { newEmail: e, password: t }) }, e.prototype.updateUsername = function(e) { return "string" != typeof e && A(S.INVALID_PARAMS, "username must be a string"), this._request.send("auth.updateUsername", { username: e }) }, e.prototype.refresh = function() {
                                return _(this, void 0, void 0, (function() {
                                    var e;
                                    return v(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, this._request.send("auth.getUserInfo", {})];
                                            case 1:
                                                return e = t.sent().data, this._setLocalUserInfo(e), [2, e]
                                        }
                                    }))
                                }))
                            }, e.prototype.linkWithPhoneNumber = function(e, t) { return _(this, void 0, void 0, (function() { return v(this, (function(n) { return [2, this._request.send("auth.linkOrUpdatePhoneNumber", { phoneNumber: w(e), phoneCode: t })] })) })) }, e.prototype.updatePhoneNumber = function(e, t) { return _(this, void 0, void 0, (function() { return v(this, (function(n) { return [2, this._request.send("auth.linkOrUpdatePhoneNumber", { phoneNumber: w(e), phoneCode: t })] })) })) }, e.prototype._getLocalUserInfo = function(e) { var t = this._cache.keys.userInfoKey; return this._cache.getStore(t)[e] }, e.prototype._getLocalUserInfoAsync = function(e) {
                                return _(this, void 0, void 0, (function() {
                                    var t;
                                    return v(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return t = this._cache.keys.userInfoKey, [4, this._cache.getStoreAsync(t)];
                                            case 1:
                                                return [2, n.sent()[e]]
                                        }
                                    }))
                                }))
                            }, e.prototype._setUserInfo = function() {
                                var e = this,
                                    t = this._cache.keys.userInfoKey,
                                    n = this._cache.getStore(t);
                                ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl", "phone", "username"].forEach((function(t) { e[t] = n[t] })), this.location = { country: n.country, province: n.province, city: n.city }
                            }, e.prototype._setLocalUserInfo = function(e) {
                                var t = this._cache.keys.userInfoKey;
                                this._cache.setStore(t, e), this._setUserInfo()
                            }, y([N({ title: "绑定自定义登录失败", messages: ["请确认以下各项：", "  1 - 调用 User.linkWithTicket() 的语法或参数是否正确", "  2 - 此账户是否已经绑定自定义登录", "  3 - ticket 参数是否归属当前环境", "  4 - 创建 ticket 的自定义登录私钥是否过期", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", Promise)], e.prototype, "linkWithTicket", null), y([N({ title: "绑定第三方登录方式失败", messages: ["请确认以下各项：", "  1 - 调用 User.linkWithRedirect() 的语法或参数是否正确", "  2 - 此账户是否已经绑定此第三方", "  3 - 此第三方是否已经授权", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [Object]), g("design:returntype", void 0)], e.prototype, "linkWithRedirect", null), y([N({ title: "获取账户列表失败", messages: ["请确认以下各项：", "  1 - 调用 User.getLinkedUidList() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "getLinkedUidList", null), y([N({ title: "设置微信主账号失败", messages: ["请确认以下各项：", "  1 - 调用 User.setPrimaryUid() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", void 0)], e.prototype, "setPrimaryUid", null), y([N({ title: "接触绑定失败", messages: ["请确认以下各项：", "  1 - 调用 User.unlink() 的语法或参数是否正确", "  2 - 当前账户是否已经与此登录方式解绑", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", void 0)], e.prototype, "unlink", null), y([N({ title: "更新用户信息失败", messages: ["请确认以下各项：", "  1 - 调用 User.update() 的语法或参数是否正确", "  2 - 用户信息中是否包含非法值", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [Object]), g("design:returntype", Promise)], e.prototype, "update", null), y([N({ title: "更新密码失败", messages: ["请确认以下各项：", "  1 - 调用 User.updatePassword() 的语法或参数是否正确", "  3 - 新密码中是否包含非法字符", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String, String]), g("design:returntype", void 0)], e.prototype, "updatePassword", null), y([N({ title: "更新邮箱地址失败", messages: ["请确认以下各项：", "  1 - 调用 User.updateEmail() 的语法或参数是否正确", "  2 - 当前环境是否开通了邮箱密码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String, String]), g("design:returntype", void 0)], e.prototype, "updateEmail", null), y([N({ title: "更新用户名失败", messages: ["请确认以下各项：", "  1 - 调用 User.updateUsername() 的语法或参数是否正确", "  2 - 当前环境是否开通了用户名密码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", void 0)], e.prototype, "updateUsername", null), y([N({ title: "刷新本地用户信息失败", messages: ["请确认以下各项：", "  1 - 调用 User.refresh() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "refresh", null), y([N({ title: "绑定手机号失败", messages: ["请确认以下各项：", "  1 - 调用 auth().linkWithPhoneNumber() 的语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String, String]), g("design:returntype", Promise)], e.prototype, "linkWithPhoneNumber", null), y([N({ title: "更新手机号失败", messages: ["请确认以下各项：", "  1 - 调用语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String, String]), g("design:returntype", Promise)], e.prototype, "updatePhoneNumber", null), e
                        }(),
                        B = function() {
                            function e(e) {
                                var t = e.envId,
                                    n = e.cache,
                                    r = e.request;
                                t || A(S.INVALID_PARAMS, "envId is not defined"), this._cache = n, this.user = new I({ cache: n, request: r })
                            }
                            return e.prototype.checkLocalState = function() { return _(this, void 0, void 0, (function() { var e, t, n, r, o, i, s; return v(this, (function(a) { return e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, r = e.accessTokenExpireKey, o = this._cache.getStore(t), i = this._cache.getStore(n), s = this._cache.getStore(r), this.credential = { refreshToken: o, accessToken: i, accessTokenExpire: s }, this._loginType = this._cache.getStore(this._cache.keys.loginTypeKey), this.user.checkLocalInfo(), [2] })) })) }, e.prototype.checkLocalStateAsync = function() {
                                return _(this, void 0, void 0, (function() {
                                    var e, t, n, r, o, i, s, a;
                                    return v(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, r = e.accessTokenExpireKey, [4, this._cache.getStoreAsync(t)];
                                            case 1:
                                                return o = u.sent(), [4, this._cache.getStoreAsync(n)];
                                            case 2:
                                                return i = u.sent(), [4, this._cache.getStoreAsync(r)];
                                            case 3:
                                                return s = u.sent(), this.credential = { refreshToken: o, accessToken: i, accessTokenExpire: s }, a = this, [4, this._cache.getStoreAsync(this._cache.keys.loginTypeKey)];
                                            case 4:
                                                return a._loginType = u.sent(), [4, this.user.checkLocalInfoAsync()];
                                            case 5:
                                                return u.sent(), [2]
                                        }
                                    }))
                                }))
                            }, Object.defineProperty(e.prototype, "isAnonymousAuth", { get: function() { return this.loginType === c.LOGINTYPE.ANONYMOUS }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isCustomAuth", { get: function() { return this.loginType === c.LOGINTYPE.CUSTOM }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isWeixinAuth", { get: function() { return this.loginType === c.LOGINTYPE.WECHAT || this.loginType === c.LOGINTYPE.WECHAT_OPEN || this.loginType === c.LOGINTYPE.WECHAT_PUBLIC }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isUsernameAuth", { get: function() { return this.loginType === c.LOGINTYPE.USERNAME }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "loginType", { get: function() { return this._loginType }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isPhoneAuth", { get: function() { return this.loginType === c.LOGINTYPE.PHONE }, enumerable: !1, configurable: !0 }), e
                        }();
                    t.LoginState = B;
                    var P = function() {
                        function e(e) { this._config = e, this._cache = e.cache, this._request = e.request, this._runtime = e.runtime || b.WEB, T.on(L.LOGIN_TYPE_CHANGED, this._onLoginTypeChanged.bind(this)) }
                        return Object.defineProperty(e.prototype, "currentUser", {
                            get: function() {
                                if ("async" !== this._cache.mode) { var e = this.hasLoginState(); return e && e.user || null }
                                O(S.INVALID_OPERATION, "current platform's storage is asynchronous, please use getCurrenUser insteed")
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "loginType", { get: function() { return this._cache.getStore(this._cache.keys.loginTypeKey) }, enumerable: !1, configurable: !0 }), e.prototype.getCurrenUser = function() {
                            return _(this, void 0, void 0, (function() {
                                var e;
                                return v(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.getLoginState()];
                                        case 1:
                                            return (e = t.sent()) ? [4, e.user.checkLocalInfoAsync()] : [3, 3];
                                        case 2:
                                            return t.sent(), [2, e.user || null];
                                        case 3:
                                            return [2, null]
                                    }
                                }))
                            }))
                        }, e.prototype.getLoginType = function() {
                            return _(this, void 0, void 0, (function() {
                                return v(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this._cache.getStoreAsync(this._cache.keys.loginTypeKey)];
                                        case 1:
                                            return [2, e.sent()]
                                    }
                                }))
                            }))
                        }, e.prototype.getAccessToken = function() {
                            return _(this, void 0, void 0, (function() {
                                var e;
                                return v(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = {}, [4, this._request.getAccessToken()];
                                        case 1:
                                            return [2, (e.accessToken = t.sent().accessToken, e.env = this._config.env, e)]
                                    }
                                }))
                            }))
                        }, e.prototype.weixinAuthProvider = function(e) {
                            var t = e.appid,
                                n = e.scope,
                                r = e.state;
                            return this._weixinAuthProvider || (this._weixinAuthProvider = new s.WeixinAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request, runtime: this._runtime }), t, n, r)), this._weixinAuthProvider
                        }, e.prototype.anonymousAuthProvider = function() { return this._anonymousAuthProvider || (this._anonymousAuthProvider = new a.AnonymousAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._anonymousAuthProvider }, e.prototype.customAuthProvider = function() { return this._customAuthProvider || (this._customAuthProvider = new u.CustomAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._customAuthProvider }, e.prototype.emailAuthProvider = function() { return this._emailAuthProvider || (this._emailAuthProvider = new l.EmailAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._emailAuthProvider }, e.prototype.usernameAuthProvider = function() { return this._usernameAuthProvider || (this._usernameAuthProvider = new p.UsernameAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._usernameAuthProvider }, e.prototype.phoneAuthProvider = function() { return this._phoneAuthProvider || (this._phoneAuthProvider = new d.PhoneAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._phoneAuthProvider }, e.prototype.signInWithUsernameAndPassword = function(e, t) { return _(this, void 0, void 0, (function() { return v(this, (function(n) { return [2, this.usernameAuthProvider().signIn(e, t)] })) })) }, e.prototype.isUsernameRegistered = function(e) {
                            return _(this, void 0, void 0, (function() {
                                var t;
                                return v(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return "string" != typeof e && A(S.INVALID_PARAMS, "username must be a string"), [4, this._request.send("auth.isUsernameRegistered", { username: e })];
                                        case 1:
                                            return [2, null == (t = n.sent().data) ? void 0 : t.isRegistered]
                                    }
                                }))
                            }))
                        }, e.prototype.signInWithEmailAndPassword = function(e, t) { return _(this, void 0, void 0, (function() { return v(this, (function(n) { return [2, this.emailAuthProvider().signIn(e, t)] })) })) }, e.prototype.signUpWithEmailAndPassword = function(e, t) { return _(this, void 0, void 0, (function() { return v(this, (function(n) { return [2, this.emailAuthProvider().signUp(e, t)] })) })) }, e.prototype.sendPasswordResetEmail = function(e) { return _(this, void 0, void 0, (function() { return v(this, (function(t) { return [2, this.emailAuthProvider().resetPassword(e)] })) })) }, e.prototype.signOut = function() {
                            return _(this, void 0, void 0, (function() {
                                var e, t, n, r, o, i, s;
                                return v(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, r = e.accessTokenExpireKey, o = "auth.logout", [4, this._cache.getStoreAsync(t)];
                                        case 1:
                                            return (i = a.sent()) ? [4, this._request.send(o, { refresh_token: i })] : [2];
                                        case 2:
                                            return s = a.sent(), this._cache.removeStoreAsync(t), this._cache.removeStoreAsync(n), this._cache.removeStoreAsync(r), T.fire(L.LOGIN_STATE_CHANGED), T.fire(L.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: c.LOGINTYPE.NULL, persistence: this._config.persistence }), [2, s]
                                    }
                                }))
                            }))
                        }, e.prototype.onLoginStateChanged = function(e) {
                            return _(this, void 0, void 0, (function() {
                                var t, n = this;
                                return v(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return T.on(L.LOGIN_STATE_CHANGED, (function() {
                                                return _(n, void 0, void 0, (function() {
                                                    var t;
                                                    return v(this, (function(n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                return [4, this.getLoginState()];
                                                            case 1:
                                                                return t = n.sent(), e.call(this, t), [2]
                                                        }
                                                    }))
                                                }))
                                            })), [4, this.getLoginState()];
                                        case 1:
                                            return t = r.sent(), e.call(this, t), [2]
                                    }
                                }))
                            }))
                        }, e.prototype.onLoginStateExpired = function(e) { T.on(L.LOGIN_STATE_EXPIRED, e.bind(this)) }, e.prototype.onAccessTokenRefreshed = function(e) { T.on(L.ACCESS_TOKEN_REFRESHD, e.bind(this)) }, e.prototype.onAnonymousConverted = function(e) { T.on(L.ANONYMOUS_CONVERTED, e.bind(this)) }, e.prototype.onLoginTypeChanged = function(e) {
                            var t = this;
                            T.on(L.LOGIN_TYPE_CHANGED, (function() {
                                return _(t, void 0, void 0, (function() {
                                    var t;
                                    return v(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, this.getLoginState()];
                                            case 1:
                                                return t = n.sent(), e.call(this, t), [2]
                                        }
                                    }))
                                }))
                            }))
                        }, e.prototype.hasLoginState = function() {
                            if ("async" !== this._cache.mode) { var e = this._cache.keys.refreshTokenKey; if (this._cache.getStore(e)) { var t = new B({ envId: this._config.env, cache: this._cache, request: this._request }); return t.checkLocalState(), t } return null }
                            O(S.INVALID_OPERATION, "current platform's storage is asynchronous, please use getLoginState insteed")
                        }, e.prototype.getLoginState = function() {
                            return _(this, void 0, void 0, (function() {
                                var e, t;
                                return v(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e = this._cache.keys.refreshTokenKey, [4, this._cache.getStoreAsync(e)];
                                        case 1:
                                            return n.sent() ? [4, (t = new B({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()] : [3, 3];
                                        case 2:
                                            return n.sent(), [2, t];
                                        case 3:
                                            return [2, null]
                                    }
                                }))
                            }))
                        }, e.prototype.shouldRefreshAccessToken = function(e) { this._request._shouldRefreshAccessTokenHook = e.bind(this) }, e.prototype.getUserInfo = function() {
                            return _(this, void 0, void 0, (function() {
                                var e;
                                return v(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this._request.send("auth.getUserInfo", {})];
                                        case 1:
                                            return (e = t.sent()).code ? [2, e] : [2, h(h({}, e.data), { requestId: e.seqId })]
                                    }
                                }))
                            }))
                        }, e.prototype.getAuthHeader = function() {
                            var e = this._cache.keys,
                                t = e.refreshTokenKey,
                                n = e.accessTokenKey,
                                r = this._cache.getStore(t);
                            return { "x-cloudbase-credentials": this._cache.getStore(n) + "/@@/" + r }
                        }, e.prototype.getAuthHeaderAsync = function() {
                            return _(this, void 0, void 0, (function() {
                                var e, t, n, r;
                                return v(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, this._request.refreshAccessToken()];
                                        case 1:
                                            return o.sent(), e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, [4, this._cache.getStoreAsync(t)];
                                        case 2:
                                            return r = o.sent(), [4, this._cache.getStoreAsync(n)];
                                        case 3:
                                            return [2, { "x-cloudbase-credentials": o.sent() + "/@@/" + r }]
                                    }
                                }))
                            }))
                        }, e.prototype.sendPhoneCode = function(e) {
                            return _(this, void 0, void 0, (function() {
                                return v(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this._request.send("auth.sendPhoneCode", { phoneNumber: w(e) })];
                                        case 1:
                                            return [2, "Ok" === t.sent().data.SendStatus]
                                    }
                                }))
                            }))
                        }, e.prototype.signUpWithPhoneCode = function(e, t, n) { return _(this, void 0, void 0, (function() { return v(this, (function(r) { return [2, this.phoneAuthProvider().signUp(e, t, n)] })) })) }, e.prototype.signInWithPhoneCodeOrPassword = function(e) { return _(this, void 0, void 0, (function() { return v(this, (function(t) { return [2, this.phoneAuthProvider().signIn(e)] })) })) }, e.prototype.forceResetPwdByPhoneCode = function(e) { return _(this, void 0, void 0, (function() { return v(this, (function(t) { return [2, this.phoneAuthProvider().signIn(h(h({}, e), { signMethod: d.SIGN_METHOD.FORCERESETPWD }))] })) })) }, e.prototype._onLoginTypeChanged = function(e) {
                            return _(this, void 0, void 0, (function() {
                                var t, n, r;
                                return v(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return t = e.data, n = t.loginType, r = t.persistence, t.env !== this._config.env ? [2] : [4, this._cache.updatePersistenceAsync(r)];
                                        case 1:
                                            return o.sent(), [4, this._cache.setStoreAsync(this._cache.keys.loginTypeKey, n)];
                                        case 2:
                                            return o.sent(), [2]
                                    }
                                }))
                            }))
                        }, y([N({ title: "获取用户信息失败", messages: ["请确认以下各项：", "  1 - 调用 auth().getCurrenUser() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "getCurrenUser", null), y([N({ title: "获取用户是否被占用失败", messages: ["请确认以下各项：", "  1 - 调用 auth().isUsernameRegistered() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", Promise)], e.prototype, "isUsernameRegistered", null), y([N({ title: "用户登出失败", messages: ["请确认以下各项：", "  1 - 调用 auth().signOut() 的语法或参数是否正确", "  2 - 当前用户是否为匿名登录（匿名登录不支持signOut）", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "signOut", null), y([N({ title: "获取本地登录态失败", messages: ["请确认以下各项：", "  1 - 调用 auth().getLoginState() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "getLoginState", null), y([N({ title: "获取用户信息失败", messages: ["请确认以下各项：", "  1 - 是否已登录", "  2 - 调用 auth().getUserInfo() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "getUserInfo", null), y([N({ title: "发送短信验证码失败", messages: ["请确认以下各项：", "  1 - 调用语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + E] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", Promise)], e.prototype, "sendPhoneCode", null), e
                    }();
                    t.Auth = P;
                    var L = { LOGIN_STATE_CHANGED: "loginStateChanged", LOGIN_STATE_EXPIRED: "loginStateExpire", LOGIN_TYPE_CHANGED: "loginTypeChanged", ANONYMOUS_CONVERTED: "anonymousConverted", ACCESS_TOKEN_REFRESHD: "refreshAccessToken" };
                    t.EVENTS = L;
                    var D = {
                        name: "auth",
                        namespace: "auth",
                        injectEvents: { bus: T, events: [L.LOGIN_TYPE_CHANGED, L.LOGIN_STATE_EXPIRED, L.LOGIN_STATE_CHANGED, L.ACCESS_TOKEN_REFRESHD, L.ANONYMOUS_CONVERTED] },
                        entity: function(e) {
                            if (void 0 === e && (e = { region: "", persistence: "local" }), this.authInstance) return O(S.INVALID_OPERATION, "every cloudbase instance should has only one auth object"), this.authInstance;
                            var t = this.platform,
                                n = t.adapter,
                                r = t.runtime,
                                o = e.persistence || n.primaryStorage;
                            o && o !== this.config.persistence && this.updateConfig({ persistence: o });
                            var i = this.config,
                                s = i.env,
                                a = i.persistence,
                                u = i.debug;
                            return this.authInstance = new P({ env: s, region: e.region, persistence: a, debug: u, cache: this.cache, request: this.request, runtime: r }), this.authInstance
                        }
                    };
                    try { cloudbase.registerComponent(D) } catch (R) {}
                },
                1424: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.AnonymousAuthProvider = void 0;
                    var o, i = r(n(3988)),
                        s = n(2251),
                        a = n(1895),
                        u = n(627),
                        c = n(2198),
                        f = (o = function(e, t) {
                            return (o = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var o, s = arguments.length,
                                a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else
                                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (a = (s < 3 ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
                            return s > 3 && a && Object.defineProperty(t, n, a), a
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        y = a.constants.ERRORS,
                        g = a.constants.COMMUNITY_SITE_URL,
                        _ = a.utils.throwError,
                        v = a.utils.isString,
                        m = a.events.addEventListener,
                        b = a.helpers.catchErrorsDecorator,
                        O = function(e) {
                            function t(t) { var n = e.call(this, t) || this; return n._onConverted = n._onConverted.bind(n), m(c.EVENTS.ANONYMOUS_CONVERTED, n._onConverted), n }
                            return f(t, e), t.prototype.signIn = function() {
                                return d(this, void 0, void 0, (function() {
                                    var e, t, n, r, o, i, s;
                                    return h(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return [4, this._cache.updatePersistenceAsync("local")];
                                            case 1:
                                                return a.sent(), e = this._cache.keys, t = e.anonymousUuidKey, n = e.refreshTokenKey, [4, this._cache.getStoreAsync(t)];
                                            case 2:
                                                return r = a.sent(), [4, this._cache.getStoreAsync(n)];
                                            case 3:
                                                return o = a.sent(), [4, this._request.send("auth.signInAnonymously", { anonymous_uuid: r, refresh_token: o })];
                                            case 4:
                                                return (i = a.sent()).uuid && i.refresh_token ? [4, this._setAnonymousUUID(i.uuid)] : [3, 10];
                                            case 5:
                                                return a.sent(), [4, this.setRefreshToken(i.refresh_token)];
                                            case 6:
                                                return a.sent(), [4, this._request.refreshAccessToken()];
                                            case 7:
                                                return a.sent(), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: u.LOGINTYPE.ANONYMOUS, persistence: "local" }), c.eventBus.fire(c.EVENTS.LOGIN_STATE_CHANGED), [4, (s = new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()];
                                            case 8:
                                                return a.sent(), [4, s.user.refresh()];
                                            case 9:
                                                return a.sent(), [2, s];
                                            case 10:
                                                throw new Error(JSON.stringify({ code: y.OPERATION_FAIL, msg: JSON.stringify(i) || "anonymous signIn failed" }))
                                        }
                                    }))
                                }))
                            }, t.prototype.linkAndRetrieveDataWithTicket = function(e) {
                                return d(this, void 0, void 0, (function() {
                                    var t, n, r, o, i, s, a;
                                    return h(this, (function(f) {
                                        switch (f.label) {
                                            case 0:
                                                return v(e) || _(y.INVALID_PARAMS, "ticket must be a string"), t = this._cache.keys, n = t.anonymousUuidKey, r = t.refreshTokenKey, [4, this._cache.getStoreAsync(n)];
                                            case 1:
                                                return o = f.sent(), [4, this._cache.getStoreAsync(r)];
                                            case 2:
                                                return i = f.sent(), [4, this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: o, refresh_token: i, ticket: e })];
                                            case 3:
                                                return (s = f.sent()).refresh_token ? [4, this._clearAnonymousUUID()] : [3, 8];
                                            case 4:
                                                return f.sent(), [4, this.setRefreshToken(s.refresh_token)];
                                            case 5:
                                                return f.sent(), [4, this._request.refreshAccessToken()];
                                            case 6:
                                                return f.sent(), c.eventBus.fire(c.EVENTS.ANONYMOUS_CONVERTED, { env: this._config.env }), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { loginType: u.LOGINTYPE.CUSTOM, persistence: "local" }), [4, (a = new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()];
                                            case 7:
                                                return f.sent(), [2, a];
                                            case 8:
                                                _(y.OPERATION_FAIL, JSON.stringify(s) || "linkAndRetrieveDataWithTicket failed"), f.label = 9;
                                            case 9:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, t.prototype._setAnonymousUUID = function(e) {
                                return d(this, void 0, void 0, (function() {
                                    var t, n, r;
                                    return h(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return t = this._cache.keys, n = t.anonymousUuidKey, r = t.loginTypeKey, [4, this._cache.removeStoreAsync(n)];
                                            case 1:
                                                return o.sent(), [4, this._cache.setStoreAsync(n, e)];
                                            case 2:
                                                return o.sent(), [4, this._cache.setStoreAsync(r, u.LOGINTYPE.ANONYMOUS)];
                                            case 3:
                                                return o.sent(), [2]
                                        }
                                    }))
                                }))
                            }, t.prototype._clearAnonymousUUID = function() {
                                return d(this, void 0, void 0, (function() {
                                    return h(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, this._cache.removeStoreAsync(this._cache.keys.anonymousUuidKey)];
                                            case 1:
                                                return e.sent(), [2]
                                        }
                                    }))
                                }))
                            }, t.prototype._onConverted = function(e) {
                                return d(this, void 0, void 0, (function() {
                                    return h(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return e.data.env !== this._config.env ? [2] : [4, this._cache.updatePersistenceAsync(this._config.persistence)];
                                            case 1:
                                                return t.sent(), [2]
                                        }
                                    }))
                                }))
                            }, l([b({ title: "匿名登录失败", messages: ["请确认以下各项：", "  1 - 当前环境是否开启了匿名登录", "  2 - 调用 auth().anonymouseProvider().signIn() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + g] }), p("design:type", Function), p("design:paramtypes", []), p("design:returntype", Promise)], t.prototype, "signIn", null), t
                        }(s.AuthProvider);
                    t.AnonymousAuthProvider = O
                },
                2251: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.AuthProvider = void 0;
                    var r = n(2198),
                        o = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        i = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        s = function() {
                            function e(e) { this._config = e, this._cache = e.cache, this._request = e.request }
                            return e.prototype.checkLocalLoginState = function() {
                                return o(this, void 0, void 0, (function() {
                                    var e, t, n, o, s, a;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return e = this._cache.keys, t = e.accessTokenKey, n = e.accessTokenExpireKey, [4, this._cache.getStoreAsync(t)];
                                            case 1:
                                                return o = i.sent(), [4, this._cache.getStoreAsync(n)];
                                            case 2:
                                                return s = i.sent(), o ? s && s > Date.now() ? [4, (a = new r.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()] : [3, 4] : [3, 7];
                                            case 3:
                                                return i.sent(), [2, a];
                                            case 4:
                                                return [4, this._cache.removeStoreAsync(t)];
                                            case 5:
                                                return i.sent(), [4, this._cache.removeStoreAsync(n)];
                                            case 6:
                                                i.sent(), i.label = 7;
                                            case 7:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.setRefreshToken = function(e) {
                                return o(this, void 0, void 0, (function() {
                                    var t, n, r, o;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.refreshTokenKey, [4, this._cache.removeStoreAsync(n)];
                                            case 1:
                                                return i.sent(), [4, this._cache.removeStoreAsync(r)];
                                            case 2:
                                                return i.sent(), [4, this._cache.setStoreAsync(o, e)];
                                            case 3:
                                                return i.sent(), [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.setAccessToken = function(e, t) {
                                return o(this, void 0, void 0, (function() {
                                    var n, r, o;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return n = this._cache.keys, r = n.accessTokenKey, o = n.accessTokenExpireKey, [4, this._cache.setStoreAsync(r, e)];
                                            case 1:
                                                return i.sent(), [4, this._cache.setStoreAsync(o, t)];
                                            case 2:
                                                return i.sent(), [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.refreshUserInfo = function() {
                                return o(this, void 0, void 0, (function() {
                                    var e;
                                    return i(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, this._request.send("auth.getUserInfo", {})];
                                            case 1:
                                                return e = t.sent().data, [4, this.setLocalUserInfo(e)];
                                            case 2:
                                                return t.sent(), [2, e]
                                        }
                                    }))
                                }))
                            }, e.prototype.setLocalUserInfo = function(e) {
                                return o(this, void 0, void 0, (function() {
                                    var t;
                                    return i(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return t = this._cache.keys.userInfoKey, [4, this._cache.setStoreAsync(t, e)];
                                            case 1:
                                                return n.sent(), [2]
                                        }
                                    }))
                                }))
                            }, e
                        }();
                    t.AuthProvider = s
                },
                8432: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.CustomAuthProvider = void 0;
                    var o, i = r(n(3988)),
                        s = n(1895),
                        a = n(2251),
                        u = n(627),
                        c = n(2198),
                        f = (o = function(e, t) {
                            return (o = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var o, s = arguments.length,
                                a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else
                                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (a = (s < 3 ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
                            return s > 3 && a && Object.defineProperty(t, n, a), a
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        y = s.constants.ERRORS,
                        g = s.constants.COMMUNITY_SITE_URL,
                        _ = s.utils.isString,
                        v = s.helpers.catchErrorsDecorator,
                        m = function(e) {
                            function t() { return null !== e && e.apply(this, arguments) || this }
                            return f(t, e), t.prototype.signIn = function(e) {
                                return d(this, void 0, void 0, (function() {
                                    var t, n, r, o, i, s, a;
                                    return h(this, (function(f) {
                                        switch (f.label) {
                                            case 0:
                                                if (!_(e)) throw new Error(JSON.stringify({ code: y.INVALID_PARAMS, msg: "ticket must be a string" }));
                                                return t = this._cache.keys.refreshTokenKey, o = (r = this._request).send, i = ["auth.signInWithTicket"], s = { ticket: e }, [4, this._cache.getStoreAsync(t)];
                                            case 1:
                                                return [4, o.apply(r, i.concat([(s.refresh_token = f.sent() || "", s)]))];
                                            case 2:
                                                return (n = f.sent()).refresh_token ? [4, this.setRefreshToken(n.refresh_token)] : [3, 7];
                                            case 3:
                                                return f.sent(), [4, this._request.refreshAccessToken()];
                                            case 4:
                                                return f.sent(), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: u.LOGINTYPE.CUSTOM, persistence: this._config.persistence }), c.eventBus.fire(c.EVENTS.LOGIN_STATE_CHANGED), [4, this.refreshUserInfo()];
                                            case 5:
                                                return f.sent(), [4, (a = new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()];
                                            case 6:
                                                return f.sent(), [2, a];
                                            case 7:
                                                throw new Error(JSON.stringify({ code: y.OPERATION_FAIL, msg: "custom signIn failed" }))
                                        }
                                    }))
                                }))
                            }, l([v({ title: "自定义登录失败", messages: ["请确认以下各项：", "  1 - 当前环境是否开启了自定义登录", "  2 - 调用 auth().customAuthProvider().signIn() 的语法或参数是否正确", "  3 - ticket 是否归属于当前环境", "  4 - 创建 ticket 的自定义登录私钥是否过期", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + g] }), p("design:type", Function), p("design:paramtypes", [String]), p("design:returntype", Promise)], t.prototype, "signIn", null), t
                        }(a.AuthProvider);
                    t.CustomAuthProvider = m
                },
                2360: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.EmailAuthProvider = void 0;
                    var o, i = r(n(3988)),
                        s = n(1895),
                        a = n(2251),
                        u = n(627),
                        c = n(2198),
                        f = (o = function(e, t) {
                            return (o = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var o, s = arguments.length,
                                a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else
                                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (a = (s < 3 ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
                            return s > 3 && a && Object.defineProperty(t, n, a), a
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        y = s.utils.throwError,
                        g = s.utils.isString,
                        _ = s.constants.ERRORS,
                        v = s.constants.COMMUNITY_SITE_URL,
                        m = s.helpers.catchErrorsDecorator,
                        b = function(e) {
                            function t() { return null !== e && e.apply(this, arguments) || this }
                            return f(t, e), t.prototype.signIn = function(e, t) {
                                return d(this, void 0, void 0, (function() {
                                    var n, r, o, i, s;
                                    return h(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return g(e) || y(_.INVALID_PARAMS, "email must be a string"), n = this._cache.keys.refreshTokenKey, [4, this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" })];
                                            case 1:
                                                return r = a.sent(), o = r.refresh_token, i = r.access_token, s = r.access_token_expire, o ? [4, this.setRefreshToken(o)] : [3, 8];
                                            case 2:
                                                return a.sent(), i && s ? [4, this.setAccessToken(i, s)] : [3, 4];
                                            case 3:
                                                return a.sent(), [3, 6];
                                            case 4:
                                                return [4, this._request.refreshAccessToken()];
                                            case 5:
                                                a.sent(), a.label = 6;
                                            case 6:
                                                return [4, this.refreshUserInfo()];
                                            case 7:
                                                return a.sent(), c.eventBus.fire(c.EVENTS.LOGIN_STATE_CHANGED), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: u.LOGINTYPE.EMAIL, persistence: this._config.persistence }), [2, new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })];
                                            case 8:
                                                r.code ? y(_.OPERATION_FAIL, "Email login fail[" + r.code + "] " + r.message) : y(_.OPERATION_FAIL, "Email login fail"), a.label = 9;
                                            case 9:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, t.prototype.signUp = function(e, t) { return d(this, void 0, void 0, (function() { return h(this, (function(n) { return [2, this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t })] })) })) }, t.prototype.resetPassword = function(e) { return d(this, void 0, void 0, (function() { return h(this, (function(t) { return [2, this._request.send("auth.sendPasswordResetEmail", { email: e })] })) })) }, t.prototype.resetPasswordWithToken = function(e, t) { return d(this, void 0, void 0, (function() { return h(this, (function(n) { return [2, this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t })] })) })) }, t.prototype.activate = function(e) { return d(this, void 0, void 0, (function() { return h(this, (function(t) { return [2, this._request.send("auth.activateEndUserMail", { token: e })] })) })) }, l([m({ title: "邮箱密码登录失败", messages: ["请确认以下各项：", "  1 - 调用 auth().emailAuthProvider() 的语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "  3 - 邮箱地址与密码是否匹配", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + v] }), p("design:type", Function), p("design:paramtypes", [String, String]), p("design:returntype", Promise)], t.prototype, "signIn", null), l([m({ title: "邮箱注册失败", messages: ["请确认以下各项：", "  1 - 调用 auth().signUpWithEmailAndPassword() 的语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "  3 - 此邮箱地址是否已经被其他用户占用", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + v] }), p("design:type", Function), p("design:paramtypes", [String, String]), p("design:returntype", Promise)], t.prototype, "signUp", null), l([m({ title: "重置密码失败", messages: ["请确认以下各项：", "  1 - 调用 auth().sendPasswordResetEmail() 的语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "  3 - 此邮箱地址是否已经与当前用户绑定", "  4 - 此邮箱地址是否已经被其他用户占用", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + v] }), p("design:type", Function), p("design:paramtypes", [String]), p("design:returntype", Promise)], t.prototype, "resetPassword", null), l([m({ title: "重置密码失败", messages: ["请确认以下各项：", "  1 - 调用语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + v] }), p("design:type", Function), p("design:paramtypes", [String, String]), p("design:returntype", Promise)], t.prototype, "resetPasswordWithToken", null), l([m({ title: "邮箱激活失败", messages: ["请确认以下各项：", "  1 - 调用语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + v] }), p("design:type", Function), p("design:paramtypes", [String]), p("design:returntype", Promise)], t.prototype, "activate", null), t
                        }(a.AuthProvider);
                    t.EmailAuthProvider = b
                },
                4718: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.PhoneAuthProvider = t.SIGN_METHOD = void 0;
                    var o, i = r(n(3988)),
                        s = n(1895),
                        a = n(2251),
                        u = n(627),
                        c = n(2198),
                        f = (o = function(e, t) {
                            return (o = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var o, s = arguments.length,
                                a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else
                                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (a = (s < 3 ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
                            return s > 3 && a && Object.defineProperty(t, n, a), a
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        y = s.utils.throwError,
                        g = s.utils.isString,
                        _ = s.utils.transformPhone,
                        v = s.constants.ERRORS,
                        m = s.constants.COMMUNITY_SITE_URL,
                        b = s.helpers.catchErrorsDecorator,
                        O = { SIGNIN: "SIGNIN", SIGNUP: "SIGNUP", FORCERESETPWD: "FORCERESETPWD" };
                    t.SIGN_METHOD = O;
                    var A = function(e) {
                        function t() { return null !== e && e.apply(this, arguments) || this }
                        return f(t, e), t.prototype.signIn = function(e) {
                            return d(this, void 0, void 0, (function() {
                                var t, n, r, o, i, s, a, f, l;
                                return h(this, (function(p) {
                                    switch (p.label) {
                                        case 0:
                                            return t = e.phoneNumber, n = e.phoneCode, r = e.password, o = e.signMethod, g(t) || y(v.INVALID_PARAMS, "phoneNumber must be a string"), g(n) || g(r) || y(v.INVALID_PARAMS, "phoneCode or password must be a string"), o || (o = O.SIGNIN), i = this._cache.keys.refreshTokenKey, [4, this._request.send("auth.signIn", { loginType: u.LOGINTYPE.PHONE, phoneNumber: _(t), phoneCode: n, password: r, refresh_token: this._cache.getStore(i) || "", signMethod: o })];
                                        case 1:
                                            return s = p.sent(), a = s.refresh_token, f = s.access_token, l = s.access_token_expire, a ? [4, this.setRefreshToken(a)] : [3, 8];
                                        case 2:
                                            return p.sent(), f && l ? [4, this.setAccessToken(f, l)] : [3, 4];
                                        case 3:
                                            return p.sent(), [3, 6];
                                        case 4:
                                            return [4, this._request.refreshAccessToken()];
                                        case 5:
                                            p.sent(), p.label = 6;
                                        case 6:
                                            return [4, this.refreshUserInfo()];
                                        case 7:
                                            return p.sent(), c.eventBus.fire(c.EVENTS.LOGIN_STATE_CHANGED), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: u.LOGINTYPE.PHONE, persistence: this._config.persistence }), [2, new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })];
                                        case 8:
                                            s.code ? y(v.OPERATION_FAIL, "Phone login fail[" + s.code + "] " + s.message) : y(v.OPERATION_FAIL, "Phone login fail"), p.label = 9;
                                        case 9:
                                            return [2]
                                    }
                                }))
                            }))
                        }, t.prototype.signUp = function(e, t, n) { return d(this, void 0, void 0, (function() { return h(this, (function(r) { return [2, this.signIn({ phoneNumber: e, phoneCode: t, password: n, signMethod: O.SIGNUP })] })) })) }, t.prototype.forceResetPwd = function(e, t, n) { return d(this, void 0, void 0, (function() { return h(this, (function(r) { return [2, this.signIn({ phoneNumber: e, phoneCode: t, password: n, signMethod: O.FORCERESETPWD })] })) })) }, l([b({ title: "手机号登录失败", messages: ["请确认以下各项：", "  1 - 调用 auth().SmsAuthProvider() 的语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "  3 - 短信验证码/密码是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + m] }), p("design:type", Function), p("design:paramtypes", [Object]), p("design:returntype", Promise)], t.prototype, "signIn", null), l([b({ title: "手机短信注册失败", messages: ["请确认以下各项：", "  1 - 调用 auth().signUpWithPhoneCode() 的语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + m] }), p("design:type", Function), p("design:paramtypes", [String, String, String]), p("design:returntype", Promise)], t.prototype, "signUp", null), l([b({ title: "手机密码重置失败", messages: ["请确认以下各项：", "  1 - 调用 auth().forceResetPwd() 的语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + m] }), p("design:type", Function), p("design:paramtypes", [String, String, String]), p("design:returntype", Promise)], t.prototype, "forceResetPwd", null), t
                    }(a.AuthProvider);
                    t.PhoneAuthProvider = A
                },
                5518: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.UsernameAuthProvider = void 0;
                    var o, i = r(n(3988)),
                        s = n(2251),
                        a = n(2198),
                        u = n(627),
                        c = n(1895),
                        f = (o = function(e, t) {
                            return (o = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var o, s = arguments.length,
                                a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else
                                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (a = (s < 3 ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
                            return s > 3 && a && Object.defineProperty(t, n, a), a
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        y = c.utils.printWarn,
                        g = c.constants.ERRORS,
                        _ = c.constants.COMMUNITY_SITE_URL,
                        v = c.helpers.catchErrorsDecorator,
                        m = function(e) {
                            function t() { return null !== e && e.apply(this, arguments) || this }
                            return f(t, e), t.prototype.signIn = function(e, t) {
                                return d(this, void 0, void 0, (function() {
                                    var n, r, o, i, s, c, f, l, p;
                                    return h(this, (function(d) {
                                        switch (d.label) {
                                            case 0:
                                                if ("string" != typeof e) throw new Error(JSON.stringify({ code: g.INVALID_PARAMS, msg: "username must be a string" }));
                                                return "string" != typeof t && (t = "", y(g.INVALID_PARAMS, "password is empty")), n = this._cache.keys.refreshTokenKey, i = (o = this._request).send, s = ["auth.signIn"], c = { loginType: u.LOGINTYPE.USERNAME, username: e, password: t }, [4, this._cache.getStoreAsync(n)];
                                            case 1:
                                                return [4, i.apply(o, s.concat([(c.refresh_token = d.sent() || "", c)]))];
                                            case 2:
                                                return r = d.sent(), f = r.refresh_token, l = r.access_token_expire, p = r.access_token, f ? [4, this.setRefreshToken(f)] : [3, 9];
                                            case 3:
                                                return d.sent(), p && l ? [4, this.setAccessToken(p, l)] : [3, 5];
                                            case 4:
                                                return d.sent(), [3, 7];
                                            case 5:
                                                return [4, this._request.refreshAccessToken()];
                                            case 6:
                                                d.sent(), d.label = 7;
                                            case 7:
                                                return [4, this.refreshUserInfo()];
                                            case 8:
                                                return d.sent(), a.eventBus.fire(a.EVENTS.LOGIN_STATE_CHANGED), a.eventBus.fire(a.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: u.LOGINTYPE.USERNAME, persistence: this._config.persistence }), [2, new a.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })];
                                            case 9:
                                                throw r.code ? new Error(JSON.stringify({ code: g.OPERATION_FAIL, msg: "login by username failed:[" + r.code + "] " + r.message })) : new Error(JSON.stringify({ code: g.OPERATION_FAIL, msg: "login by username failed" }));
                                            case 10:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, l([v({ title: "用户名密码登录失败", messages: ["请确认以下各项：", "  1 - 调用 auth().signInWithUsernameAndPassword() 的语法或参数是否正确", "  2 - 当前环境是否开通了用户名密码登录", "  3 - 用户名密码是否匹配", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + _] }), p("design:type", Function), p("design:paramtypes", [String, String]), p("design:returntype", Promise)], t.prototype, "signIn", null), t
                        }(s.AuthProvider);
                    t.UsernameAuthProvider = m
                },
                9368: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.WeixinAuthProvider = void 0;
                    var o, i = r(n(3988)),
                        s = n(2251),
                        a = n(1895),
                        u = n(2198),
                        c = n(627),
                        f = (o = function(e, t) {
                            return (o = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var o, s = arguments.length,
                                a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else
                                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (a = (s < 3 ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
                            return s > 3 && a && Object.defineProperty(t, n, a), a
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        y = a.constants.getSdkName,
                        g = a.constants.ERRORS,
                        _ = a.constants.COMMUNITY_SITE_URL,
                        v = a.adapters.RUNTIME,
                        m = a.utils.getQuery,
                        b = a.utils.getHash,
                        O = a.utils.removeParam,
                        A = a.utils.printWarn,
                        w = a.helpers.catchErrorsDecorator,
                        S = function(e) {
                            function t(t, n, r, o) { var i = e.call(this, t) || this; return i._runtime = t.runtime, i._appid = n, i._scope = r, i._state = o || "weixin", i }
                            return f(t, e), t.prototype.signIn = function() { return d(this, void 0, void 0, (function() { return h(this, (function(e) { return [2, A(g.OPERATION_FAIL, "API signIn has been deprecated, please use signInWithRedirect insteed")] })) })) }, t.prototype.signInWithRedirect = function() { return d(this, void 0, void 0, (function() { return h(this, (function(e) { return [2, this._redirect()] })) })) }, t.prototype.getRedirectResult = function(e) { return d(this, void 0, void 0, (function() { var t; return h(this, (function(n) { return (t = E()) ? [2, this._signInWithCode(t, e)] : [2, null] })) })) }, t.prototype.getLinkRedirectResult = function(e) {
                                return void 0 === e && (e = {}), d(this, void 0, void 0, (function() {
                                    var t, n, r, o, i, s;
                                    return h(this, (function(a) {
                                        return t = e.withUnionId, n = void 0 !== t && t, (r = E()) ? (o = this._appid, i = function(e) {
                                            switch (e) {
                                                case "snsapi_login":
                                                    return "WECHAT-OPEN";
                                                default:
                                                    return "WECHAT-PUBLIC"
                                            }
                                        }(this._scope), s = this._runtime === v.WX_MP ? "1" : "0", [2, this._request.send("auth.linkWithWeixinCode", { payload: { appid: o, loginType: i, code: r, hybridMiniapp: s, withUnionId: n } })]) : [2, null]
                                    }))
                                }))
                            }, t.prototype._redirect = function() {
                                var e = O("code", location.href);
                                e = O("state", e), e = encodeURIComponent(e);
                                var t = "//open.weixin.qq.com/connect/oauth2/authorize";
                                "snsapi_login" === this._scope && (t = "//open.weixin.qq.com/connect/qrconnect");
                                try { location.href = t + "?appid=" + this._appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this._scope + "&state=" + this._state + "#wechat_redirect" } catch (n) { throw new Error("[" + y() + "][" + g.UNKOWN_ERROR + "]" + n) }
                            }, t.prototype._signInWithCode = function(e, t) {
                                return d(this, void 0, void 0, (function() {
                                    var n, r, o, i, s, a, f, l;
                                    return h(this, (function(p) {
                                        switch (p.label) {
                                            case 0:
                                                return n = this._cache.keys, r = n.accessTokenKey, o = n.accessTokenExpireKey, i = n.refreshTokenKey, s = function(e) {
                                                    switch (e) {
                                                        case "snsapi_login":
                                                            return "WECHAT-OPEN";
                                                        default:
                                                            return "WECHAT-PUBLIC"
                                                    }
                                                }(this._scope), [4, this._getRefreshTokenByWXCode(this._appid, s, e, t)];
                                            case 1:
                                                return a = p.sent(), f = a.refreshToken, [4, this._cache.setStoreAsync(i, f)];
                                            case 2:
                                                return p.sent(), a.accessToken ? [4, this._cache.setStoreAsync(r, a.accessToken)] : [3, 4];
                                            case 3:
                                                p.sent(), p.label = 4;
                                            case 4:
                                                return a.accessTokenExpire ? [4, this._cache.setStoreAsync(o, String(a.accessTokenExpire + Date.now()))] : [3, 6];
                                            case 5:
                                                p.sent(), p.label = 6;
                                            case 6:
                                                return u.eventBus.fire(u.EVENTS.LOGIN_STATE_CHANGED), u.eventBus.fire(u.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: c.LOGINTYPE.WECHAT, persistence: this._config.persistence }), [4, this.refreshUserInfo()];
                                            case 7:
                                                return p.sent(), [4, (l = new u.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()];
                                            case 8:
                                                return p.sent(), [2, l]
                                        }
                                    }))
                                }))
                            }, t.prototype._getRefreshTokenByWXCode = function(e, t, n, r) { return void 0 === r && (r = {}), d(this, void 0, void 0, (function() { var o, i, s, a, u, c; return h(this, (function(f) { return o = r.withUnionId, i = void 0 !== o && o, s = r.createUser, a = void 0 === s || s, u = "snsapi_base" !== this._scope && (r.syncUserInfo || !1), c = this._runtime === v.WX_MP ? "1" : "0", [2, this._request.send("auth.signIn", { appid: e, loginType: t, hybridMiniapp: c, syncUserInfo: u, loginCredential: n, withUnionId: i, createUser: a }).then((function(e) { if (e.code) throw new Error("[" + y() + "][" + g.OPERATION_FAIL + "] failed login via wechat: " + e.code); if (e.refresh_token) return { refreshToken: e.refresh_token, accessToken: e.access_token, accessTokenExpire: e.access_token_expire }; throw new Error("[" + y() + "][" + g.OPERATION_FAIL + "] action:getJwt not return refreshToken") }))] })) })) }, l([w({ title: "跳转微信公众号授权失败", messages: ["请确认以下各项：", "  1 - 调用 auth().weixinAuthProvider().signInWithRedirect() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + _] }), p("design:type", Function), p("design:paramtypes", []), p("design:returntype", Promise)], t.prototype, "signInWithRedirect", null), l([w({ title: "微信公众号登录失败", messages: ["请确认以下各项：", "  1 - 调用 auth().weixinAuthProvider().getRedirectResult() 的语法或参数是否正确", "  2 - 当前环境是否开通了微信公众号登录授权", "  3 - 微信公众号的 AppId 与 AppSecret 配置是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + _] }), p("design:type", Function), p("design:paramtypes", [Object]), p("design:returntype", Promise)], t.prototype, "getRedirectResult", null), l([w({ title: "获取微信重定向绑定结果", messages: ["请确认以下各项：", "  1 - 调用 auth().weixinAuthProvider().getLinkRedirectResult() 的语法或参数是否正确", "  2 - 当前环境是否开通了微信公众号登录授权", "  3 - 微信公众号的 AppId 与 AppSecret 配置是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + _] }), p("design:type", Function), p("design:paramtypes", [Object]), p("design:returntype", Promise)], t.prototype, "getLinkRedirectResult", null), t
                        }(s.AuthProvider);

                    function E() { return m("code") || b("code") }
                    t.WeixinAuthProvider = S
                },
                7362: function(e, t, n) {
                    "use strict";
                    var r = n(2370),
                        o = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
                    var i = o(n(9304)),
                        s = r(n(9215)).version;
                    i["default"].registerVersion(s);
                    try { window.cloudbase = i["default"] } catch (u) {}
                    var a = i["default"];
                    t["default"] = a
                },
                1598: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.registerProvider = t.registerAuth = void 0;
                    var r = n(2198),
                        o = r.registerAuth;
                    t.registerAuth = o;
                    var i = r.registerProvider;
                    t.registerProvider = i
                },
                8722: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.registerDatabase = function(e) { try { e.registerComponent(i) } catch (t) { console.warn(t) } };
                    var r = n(5938),
                        o = function() {
                            return (o = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        i = {
                            name: "database",
                            entity: {
                                database: function(e) {
                                    var t = this.platform,
                                        n = t.adapter,
                                        i = t.runtime;
                                    return r.Db.reqClass = this.request.constructor, r.Db.getAccessToken = this.authInstance ? this.authInstance.getAccessToken.bind(this.authInstance) : function() { return "" }, r.Db.runtime = i, this.wsClientClass && (r.Db.wsClass = n.wsClass, r.Db.wsClientClass = this.wsClientClass), r.Db.ws || (r.Db.ws = null), new r.Db(o(o({}, this.config), e))
                                }
                            }
                        };
                    try { cloudbase.registerComponent(i) } catch (s) {}
                },
                5497: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
                    var r = n(5938),
                        o = n(7567),
                        i = n(6532),
                        s = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        a = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        u = function() {
                            function e(e, t) { this._stages = [], e && t && (this._db = e, this._request = new r.Db.reqClass(this._db.config), this._collectionName = t) }
                            return e.prototype.end = function() {
                                return s(this, void 0, void 0, (function() {
                                    var e;
                                    return a(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                if (!this._collectionName || !this._db) throw new Error("Aggregation pipeline cannot send request");
                                                return [4, this._request.send("database.aggregate", { collectionName: this._collectionName, stages: this._stages })];
                                            case 1:
                                                return (e = t.sent()) && e.data && e.data.list ? [2, { requestId: e.requestId, data: JSON.parse(e.data.list).map(o.EJSON.parse) }] : [2, e]
                                        }
                                    }))
                                }))
                            }, e.prototype.unwrap = function() { return this._stages }, e.prototype.done = function() {
                                return this._stages.map((function(e) {
                                    var t, n = e.stageKey,
                                        r = e.stageValue;
                                    return (t = {})[n] = JSON.parse(r), t
                                }))
                            }, e.prototype._pipe = function(e, t) { return this._stages.push({ stageKey: "$" + e, stageValue: JSON.stringify(t) }), this }, e.prototype.addFields = function(e) { return this._pipe("addFields", e) }, e.prototype.bucket = function(e) { return this._pipe("bucket", e) }, e.prototype.bucketAuto = function(e) { return this._pipe("bucketAuto", e) }, e.prototype.count = function(e) { return this._pipe("count", e) }, e.prototype.geoNear = function(e) { return this._pipe("geoNear", e) }, e.prototype.group = function(e) { return this._pipe("group", e) }, e.prototype.limit = function(e) { return this._pipe("limit", e) }, e.prototype.match = function(e) { return this._pipe("match", i.QuerySerializer.encode(e)) }, e.prototype.project = function(e) { return this._pipe("project", e) }, e.prototype.lookup = function(e) { return this._pipe("lookup", e) }, e.prototype.replaceRoot = function(e) { return this._pipe("replaceRoot", e) }, e.prototype.sample = function(e) { return this._pipe("sample", e) }, e.prototype.skip = function(e) { return this._pipe("skip", e) }, e.prototype.sort = function(e) { return this._pipe("sort", e) }, e.prototype.sortByCount = function(e) { return this._pipe("sortByCount", e) }, e.prototype.unwind = function(e) { return this._pipe("unwind", e) }, e
                        }();
                    t["default"] = u
                },
                7505: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.CollectionReference = void 0;
                    var o, i = n(6724),
                        s = n(6582),
                        a = r(n(5497)),
                        u = (o = function(e, t) {
                            return (o = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        c = function(e) {
                            function t(t, n) { return e.call(this, t, n) || this }
                            return u(t, e), Object.defineProperty(t.prototype, "name", { get: function() { return this._coll }, enumerable: !0, configurable: !0 }), t.prototype.doc = function(e) { if ("string" != typeof e && "number" != typeof e) throw new Error("docId必须为字符串或数字"); return new i.DocumentReference(this._db, this._coll, e) }, t.prototype.add = function(e, t) { return new i.DocumentReference(this._db, this._coll, undefined).create(e, t) }, t.prototype.aggregate = function() { return new a["default"](this._db, this._coll) }, t
                        }(s.Query);
                    t.CollectionReference = c
                },
                8991: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = t.Command = void 0;
                    var o = n(8176),
                        i = n(85),
                        s = n(982),
                        a = n(3703),
                        u = r(n(5497)),
                        c = {
                            eq: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.EQ, [e]) },
                            neq: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.NEQ, [e]) },
                            lt: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.LT, [e]) },
                            lte: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.LTE, [e]) },
                            gt: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.GT, [e]) },
                            gte: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.GTE, [e]) },
                            "in": function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.IN, e) },
                            nin: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.NIN, e) },
                            all: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.ALL, e) },
                            elemMatch: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.ELEM_MATCH, [e]) },
                            exists: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.EXISTS, [e]) },
                            size: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.SIZE, [e]) },
                            mod: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.MOD, [e]) },
                            geoNear: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.GEO_NEAR, [e]) },
                            geoWithin: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.GEO_WITHIN, [e]) },
                            geoIntersects: function(e) { return new o.QueryCommand(o.QUERY_COMMANDS_LITERAL.GEO_INTERSECTS, [e]) },
                            and: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, a.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new i.LogicCommand(i.LOGIC_COMMANDS_LITERAL.AND, n) },
                            nor: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, a.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new i.LogicCommand(i.LOGIC_COMMANDS_LITERAL.NOR, n) },
                            or: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, a.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new i.LogicCommand(i.LOGIC_COMMANDS_LITERAL.OR, n) },
                            not: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, a.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new i.LogicCommand(i.LOGIC_COMMANDS_LITERAL.NOT, n) },
                            set: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.SET, [e]) },
                            remove: function() { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.REMOVE, []) },
                            inc: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.INC, [e]) },
                            mul: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.MUL, [e]) },
                            push: function() {
                                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                if ((0, a.isObject)(t[0]) && t[0].hasOwnProperty("each")) {
                                    var r = t[0];
                                    e = { $each: r.each, $position: r.position, $sort: r.sort, $slice: r.slice }
                                } else e = (0, a.isArray)(t[0]) ? t[0] : Array.from(t);
                                return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.PUSH, e)
                            },
                            pull: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.PULL, e) },
                            pullAll: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.PULL_ALL, e) },
                            pop: function() { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.POP, []) },
                            shift: function() { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.SHIFT, []) },
                            unshift: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, a.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.UNSHIFT, n) },
                            addToSet: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.ADD_TO_SET, e) },
                            rename: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.RENAME, [e]) },
                            bit: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.BIT, [e]) },
                            max: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.MAX, [e]) },
                            min: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.MIN, [e]) },
                            expr: function(e) { return { $expr: e } },
                            jsonSchema: function(e) { return { $jsonSchema: e } },
                            text: function(e) { return (0, a.isString)(e) ? { $search: e.search } : { $search: e.search, $language: e.language, $caseSensitive: e.caseSensitive, $diacriticSensitive: e.diacriticSensitive } },
                            aggregate: { pipeline: function() { return new u["default"] }, abs: function(e) { return new f("abs", e) }, add: function(e) { return new f("add", e) }, ceil: function(e) { return new f("ceil", e) }, divide: function(e) { return new f("divide", e) }, exp: function(e) { return new f("exp", e) }, floor: function(e) { return new f("floor", e) }, ln: function(e) { return new f("ln", e) }, log: function(e) { return new f("log", e) }, log10: function(e) { return new f("log10", e) }, mod: function(e) { return new f("mod", e) }, multiply: function(e) { return new f("multiply", e) }, pow: function(e) { return new f("pow", e) }, sqrt: function(e) { return new f("sqrt", e) }, subtract: function(e) { return new f("subtract", e) }, trunc: function(e) { return new f("trunc", e) }, arrayElemAt: function(e) { return new f("arrayElemAt", e) }, arrayToObject: function(e) { return new f("arrayToObject", e) }, concatArrays: function(e) { return new f("concatArrays", e) }, filter: function(e) { return new f("filter", e) }, "in": function(e) { return new f("in", e) }, indexOfArray: function(e) { return new f("indexOfArray", e) }, isArray: function(e) { return new f("isArray", e) }, map: function(e) { return new f("map", e) }, range: function(e) { return new f("range", e) }, reduce: function(e) { return new f("reduce", e) }, reverseArray: function(e) { return new f("reverseArray", e) }, size: function(e) { return new f("size", e) }, slice: function(e) { return new f("slice", e) }, zip: function(e) { return new f("zip", e) }, and: function(e) { return new f("and", e) }, not: function(e) { return new f("not", e) }, or: function(e) { return new f("or", e) }, cmp: function(e) { return new f("cmp", e) }, eq: function(e) { return new f("eq", e) }, gt: function(e) { return new f("gt", e) }, gte: function(e) { return new f("gte", e) }, lt: function(e) { return new f("lt", e) }, lte: function(e) { return new f("lte", e) }, neq: function(e) { return new f("ne", e) }, cond: function(e) { return new f("cond", e) }, ifNull: function(e) { return new f("ifNull", e) }, "switch": function(e) { return new f("switch", e) }, dateFromParts: function(e) { return new f("dateFromParts", e) }, dateFromString: function(e) { return new f("dateFromString", e) }, dayOfMonth: function(e) { return new f("dayOfMonth", e) }, dayOfWeek: function(e) { return new f("dayOfWeek", e) }, dayOfYear: function(e) { return new f("dayOfYear", e) }, isoDayOfWeek: function(e) { return new f("isoDayOfWeek", e) }, isoWeek: function(e) { return new f("isoWeek", e) }, isoWeekYear: function(e) { return new f("isoWeekYear", e) }, millisecond: function(e) { return new f("millisecond", e) }, minute: function(e) { return new f("minute", e) }, month: function(e) { return new f("month", e) }, second: function(e) { return new f("second", e) }, hour: function(e) { return new f("hour", e) }, week: function(e) { return new f("week", e) }, year: function(e) { return new f("year", e) }, literal: function(e) { return new f("literal", e) }, mergeObjects: function(e) { return new f("mergeObjects", e) }, objectToArray: function(e) { return new f("objectToArray", e) }, allElementsTrue: function(e) { return new f("allElementsTrue", e) }, anyElementTrue: function(e) { return new f("anyElementTrue", e) }, setDifference: function(e) { return new f("setDifference", e) }, setEquals: function(e) { return new f("setEquals", e) }, setIntersection: function(e) { return new f("setIntersection", e) }, setIsSubset: function(e) { return new f("setIsSubset", e) }, setUnion: function(e) { return new f("setUnion", e) }, concat: function(e) { return new f("concat", e) }, dateToString: function(e) { return new f("dateToString", e) }, indexOfBytes: function(e) { return new f("indexOfBytes", e) }, indexOfCP: function(e) { return new f("indexOfCP", e) }, split: function(e) { return new f("split", e) }, strLenBytes: function(e) { return new f("strLenBytes", e) }, strLenCP: function(e) { return new f("strLenCP", e) }, strcasecmp: function(e) { return new f("strcasecmp", e) }, substr: function(e) { return new f("substr", e) }, substrBytes: function(e) { return new f("substrBytes", e) }, substrCP: function(e) { return new f("substrCP", e) }, toLower: function(e) { return new f("toLower", e) }, toUpper: function(e) { return new f("toUpper", e) }, meta: function(e) { return new f("meta", e) }, addToSet: function(e) { return new f("addToSet", e) }, avg: function(e) { return new f("avg", e) }, first: function(e) { return new f("first", e) }, last: function(e) { return new f("last", e) }, max: function(e) { return new f("max", e) }, min: function(e) { return new f("min", e) }, push: function(e) { return new f("push", e) }, stdDevPop: function(e) { return new f("stdDevPop", e) }, stdDevSamp: function(e) { return new f("stdDevSamp", e) }, sum: function(e) { return new f("sum", e) }, "let": function(e) { return new f("let", e) } },
                            project: { slice: function(e) { return new l("slice", e) }, elemMatch: function(e) { return new l("elemMatch", e) } }
                        };
                    t.Command = c;
                    var f = function(e, t) { this["$" + e] = t },
                        l = function(e, t) { this["$" + e] = t },
                        p = c;
                    t["default"] = p
                },
                85: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.isLogicCommand = a, t.isKnownLogicCommand = function(e) { return a && e.operator.toUpperCase() in r }, t["default"] = t.LogicCommand = t.LOGIC_COMMANDS_LITERAL = t.NOR = t.NOT = t.OR = t.AND = void 0;
                    var r, o = n(2352),
                        i = n(8176);
                    t.AND = "and", t.OR = "or", t.NOT = "not", t.NOR = "nor", t.LOGIC_COMMANDS_LITERAL = r,
                        function(e) { e.AND = "and", e.OR = "or", e.NOT = "not", e.NOR = "nor" }(r || (t.LOGIC_COMMANDS_LITERAL = r = {}));
                    var s = function() {
                        function e(e, t, n) {
                            if (this._internalType = o.SYMBOL_LOGIC_COMMAND, Object.defineProperties(this, { _internalType: { enumerable: !1, configurable: !1 } }), this.operator = e, this.operands = t, this.fieldName = n || o.SYMBOL_UNSET_FIELD_NAME, this.fieldName !== o.SYMBOL_UNSET_FIELD_NAME)
                                if (Array.isArray(t)) { t = t.slice(), this.operands = t; for (var r = 0, s = t.length; r < s; r++)(a(u = t[r]) || (0, i.isQueryCommand)(u)) && (t[r] = u._setFieldName(this.fieldName)) } else {
                                    var u;
                                    (a(u = t) || (0, i.isQueryCommand)(u)) && (t = u._setFieldName(this.fieldName))
                                }
                        }
                        return e.prototype._setFieldName = function(t) { var n = this.operands.map((function(n) { return n instanceof e ? n._setFieldName(t) : n })); return new e(this.operator, n, t) }, e.prototype.and = function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; var o = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments); return o.unshift(this), new e(r.AND, o, this.fieldName) }, e.prototype.or = function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; var o = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments); return o.unshift(this), new e(r.OR, o, this.fieldName) }, e
                    }();

                    function a(e) { return e && e instanceof s && e._internalType === o.SYMBOL_LOGIC_COMMAND }
                    t.LogicCommand = s;
                    var u = s;
                    t["default"] = u
                },
                8176: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.isQueryCommand = d, t.isKnownQueryCommand = function(e) { return d(e) && e.operator.toUpperCase() in i }, t.isComparisonCommand = function(e) { return d(e) }, t["default"] = t.QueryCommand = t.QUERY_COMMANDS_LITERAL = t.MOD = t.SIZE = t.EXISTS = t.ELEM_MATCH = t.ALL = t.NIN = t.IN = t.LTE = t.LT = t.GTE = t.GT = t.NEQ = t.EQ = void 0;
                    var o, i, s = r(n(3988)),
                        a = n(85),
                        u = n(2352),
                        c = n(7685),
                        f = n(3703),
                        l = (o = function(e, t) {
                            return (o = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        });
                    t.EQ = "eq", t.NEQ = "neq", t.GT = "gt", t.GTE = "gte", t.LT = "lt", t.LTE = "lte", t.IN = "in", t.NIN = "nin", t.ALL = "all", t.ELEM_MATCH = "elemMatch", t.EXISTS = "exists", t.SIZE = "size", t.MOD = "mod", t.QUERY_COMMANDS_LITERAL = i,
                        function(e) { e.EQ = "eq", e.NEQ = "neq", e.GT = "gt", e.GTE = "gte", e.LT = "lt", e.LTE = "lte", e.IN = "in", e.NIN = "nin", e.ALL = "all", e.ELEM_MATCH = "elemMatch", e.EXISTS = "exists", e.SIZE = "size", e.MOD = "mod", e.GEO_NEAR = "geoNear", e.GEO_WITHIN = "geoWithin", e.GEO_INTERSECTS = "geoIntersects" }(i || (t.QUERY_COMMANDS_LITERAL = i = {}));
                    var p = function(e) {
                        function t(t, n, r) { var o = e.call(this, t, n, r) || this; return o.operator = t, o._internalType = u.SYMBOL_QUERY_COMMAND, o }
                        return l(t, e), t.prototype.toJSON = function() {
                            var e, t;
                            switch (this.operator) {
                                case i.IN:
                                case i.NIN:
                                    return (e = {})["$" + this.operator] = this.operands, e;
                                default:
                                    return (t = {})["$" + this.operator] = this.operands[0], t
                            }
                        }, t.prototype._setFieldName = function(e) { return new t(this.operator, this.operands, e) }, t.prototype.eq = function(e) { var n = new t(i.EQ, [e], this.fieldName); return this.and(n) }, t.prototype.neq = function(e) { var n = new t(i.NEQ, [e], this.fieldName); return this.and(n) }, t.prototype.gt = function(e) { var n = new t(i.GT, [e], this.fieldName); return this.and(n) }, t.prototype.gte = function(e) { var n = new t(i.GTE, [e], this.fieldName); return this.and(n) }, t.prototype.lt = function(e) { var n = new t(i.LT, [e], this.fieldName); return this.and(n) }, t.prototype.lte = function(e) { var n = new t(i.LTE, [e], this.fieldName); return this.and(n) }, t.prototype["in"] = function(e) { var n = new t(i.IN, e, this.fieldName); return this.and(n) }, t.prototype.nin = function(e) { var n = new t(i.NIN, e, this.fieldName); return this.and(n) }, t.prototype.geoNear = function(e) { if (!(e.geometry instanceof c.Point)) throw new TypeError('"geometry" must be of type Point. Received type ' + (0, s["default"])(e.geometry)); if (e.maxDistance !== undefined && !(0, f.isNumber)(e.maxDistance)) throw new TypeError('"maxDistance" must be of type Number. Received type ' + (0, s["default"])(e.maxDistance)); if (e.minDistance !== undefined && !(0, f.isNumber)(e.minDistance)) throw new TypeError('"minDistance" must be of type Number. Received type ' + (0, s["default"])(e.minDistance)); var n = new t(i.GEO_NEAR, [e], this.fieldName); return this.and(n) }, t.prototype.geoWithin = function(e) { if (!(e.geometry instanceof c.MultiPolygon || e.geometry instanceof c.Polygon)) throw new TypeError('"geometry" must be of type Polygon or MultiPolygon. Received type ' + (0, s["default"])(e.geometry)); var n = new t(i.GEO_WITHIN, [e], this.fieldName); return this.and(n) }, t.prototype.geoIntersects = function(e) { if (!(e.geometry instanceof c.Point || e.geometry instanceof c.LineString || e.geometry instanceof c.Polygon || e.geometry instanceof c.MultiPoint || e.geometry instanceof c.MultiLineString || e.geometry instanceof c.MultiPolygon)) throw new TypeError('"geometry" must be of type Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon. Received type ' + (0, s["default"])(e.geometry)); var n = new t(i.GEO_INTERSECTS, [e], this.fieldName); return this.and(n) }, t
                    }(a.LogicCommand);

                    function d(e) { return e && e instanceof p && e._internalType === u.SYMBOL_QUERY_COMMAND }
                    t.QueryCommand = p;
                    var h = p;
                    t["default"] = h
                },
                982: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.isUpdateCommand = s, t.isKnownUpdateCommand = function(e) { return s(e) && e.operator.toUpperCase() in r }, t["default"] = t.UpdateCommand = t.UPDATE_COMMANDS_LITERAL = void 0;
                    var r, o = n(2352);
                    t.UPDATE_COMMANDS_LITERAL = r,
                        function(e) { e.SET = "set", e.REMOVE = "remove", e.INC = "inc", e.MUL = "mul", e.PUSH = "push", e.PULL = "pull", e.PULL_ALL = "pullAll", e.POP = "pop", e.SHIFT = "shift", e.UNSHIFT = "unshift", e.ADD_TO_SET = "addToSet", e.BIT = "bit", e.RENAME = "rename", e.MAX = "max", e.MIN = "min" }(r || (t.UPDATE_COMMANDS_LITERAL = r = {}));
                    var i = function() {
                        function e(e, t, n) { this._internalType = o.SYMBOL_UPDATE_COMMAND, Object.defineProperties(this, { _internalType: { enumerable: !1, configurable: !1 } }), this.operator = e, this.operands = t, this.fieldName = n || o.SYMBOL_UNSET_FIELD_NAME }
                        return e.prototype._setFieldName = function(t) { return new e(this.operator, this.operands, t) }, e
                    }();

                    function s(e) { return e && e instanceof i && e._internalType === o.SYMBOL_UPDATE_COMMAND }
                    t.UpdateCommand = i;
                    var a = i;
                    t["default"] = a
                },
                5029: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.ERRORS = void 0, t.ERRORS = { CREATE_WATCH_NET_ERROR: { code: "CREATE_WATCH_NET_ERROR", message: "create watch network error" }, CREATE_WACTH_EXCEED_ERROR: { code: "CREATE_WACTH_EXCEED_ERROR", message: "maximum connections exceed" }, CREATE_WATCH_SERVER_ERROR: { code: "CREATE_WATCH_SERVER_ERROR", message: "create watch server error" }, CONN_ERROR: { code: "CONN_ERROR", message: "connection error" }, INVALID_PARAM: { code: "INVALID_PARAM", message: "Invalid request param" }, INSERT_DOC_FAIL: { code: "INSERT_DOC_FAIL", message: "insert document failed" }, DATABASE_TRANSACTION_CONFLICT: { code: "DATABASE_TRANSACTION_CONFLICT", message: "database transaction conflict" } }
                },
                7785: function(e, t) {
                    "use strict";
                    var n, r, o;
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.QueryType = t.UpdateOperatorList = t.OrderDirectionList = t.OperatorMap = t.Opeartor = t.WhereFilterOpList = t.FieldType = t.ErrorCode = void 0, t.ErrorCode = r,
                        function(e) { e.DocIDError = "文档ID不合法", e.CollNameError = "集合名称不合法", e.OpStrError = "操作符不合法", e.DirectionError = "排序字符不合法", e.IntergerError = "must be integer", e.QueryParamTypeError = "查询参数必须为对象", e.QueryParamValueError = "查询参数对象值不能均为undefined" }(r || (t.ErrorCode = r = {})), t.FieldType = { String: "String", Number: "Number", Object: "Object", Array: "Array", Boolean: "Boolean", Null: "Null", GeoPoint: "GeoPoint", GeoLineString: "GeoLineString", GeoPolygon: "GeoPolygon", GeoMultiPoint: "GeoMultiPoint", GeoMultiLineString: "GeoMultiLineString", GeoMultiPolygon: "GeoMultiPolygon", Timestamp: "Date", Command: "Command", ServerDate: "ServerDate", BsonDate: "BsonDate" }, t.OrderDirectionList = ["desc", "asc"], t.WhereFilterOpList = ["<", "<=", "==", ">=", ">"], t.Opeartor = o,
                        function(e) { e.lt = "<", e.gt = ">", e.lte = "<=", e.gte = ">=", e.eq = "==" }(o || (t.Opeartor = o = {}));
                    var i, s = ((n = {})[o.eq] = "$eq", n[o.lt] = "$lt", n[o.lte] = "$lte", n[o.gt] = "$gt", n[o.gte] = "$gte", n);
                    t.OperatorMap = s, t.UpdateOperatorList = ["$set", "$inc", "$mul", "$unset", "$push", "$pop", "$unshift", "$shift", "$currentDate", "$each", "$position"], t.QueryType = i,
                        function(e) { e.WHERE = "WHERE", e.DOC = "DOC" }(i || (t.QueryType = i = {}))
                },
                6724: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.DocumentReference = void 0;
                    var o = r(n(3988)),
                        i = n(9054),
                        s = n(5938),
                        a = n(9833),
                        u = n(5323),
                        c = n(9272),
                        f = n(982),
                        l = n(7785),
                        p = n(64),
                        d = function() {
                            return (d = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        h = function() {
                            function e(e, t, n, r) {
                                var o = this;
                                void 0 === r && (r = {}), this.watch = function(e) { return (0, p.getWsInstance)(o._db).watch(d(d({}, e), { envId: o._db.config.env, collectionName: o._coll, query: JSON.stringify({ _id: o.id }) })) }, this._db = e, this._coll = t, this.id = n, this.request = new s.Db.reqClass(this._db.config), this.projection = r
                            }
                            return e.prototype.create = function(e, t) { t = t || (0, i.createPromiseCallback)(); var n = { collectionName: this._coll, data: (0, c.serialize)(e) }; return this.id && (n._id = this.id), this.request.send("database.addDocument", n).then((function(e) { e.code ? t(0, e) : t(0, { id: e.data._id, requestId: e.requestId }) }))["catch"]((function(e) { t(e) })), t.promise }, e.prototype.set = function(e, t) {
                                if (t = t || (0, i.createPromiseCallback)(), !this.id) return Promise.resolve({ code: "INVALID_PARAM", message: "docId不能为空" });
                                if (!e || "object" !== (0, o["default"])(e)) return Promise.resolve({ code: "INVALID_PARAM", message: "参数必需是非空对象" });
                                if (e.hasOwnProperty("_id")) return Promise.resolve({ code: "INVALID_PARAM", message: "不能更新_id的值" });
                                var n = !1;
                                if (function s(e) {
                                        if ("object" === (0, o["default"])(e))
                                            for (var t in e) e[t] instanceof f.UpdateCommand ? n = !0 : "object" === (0, o["default"])(e[t]) && s(e[t])
                                    }(e), n) return Promise.resolve({ code: "DATABASE_REQUEST_FAILED", message: "update operator complicit" });
                                var r = { collectionName: this._coll, queryType: l.QueryType.DOC, data: (0, c.serialize)(e), multi: !1, merge: !1, upsert: !0 };
                                return this.id && (r.query = { _id: this.id }), this.request.send("database.updateDocument", r).then((function(e) { e.code ? t(0, e) : t(0, { updated: e.data.updated, upsertedId: e.data.upserted_id, requestId: e.requestId }) }))["catch"]((function(e) { t(e) })), t.promise
                            }, e.prototype.update = function(e, t) {
                                if (t = t || (0, i.createPromiseCallback)(), !e || "object" !== (0, o["default"])(e)) return Promise.resolve({ code: "INVALID_PARAM", message: "参数必需是非空对象" });
                                if (e.hasOwnProperty("_id")) return Promise.resolve({ code: "INVALID_PARAM", message: "不能更新_id的值" });
                                var n = { _id: this.id },
                                    r = { collectionName: this._coll, data: u.UpdateSerializer.encode(e), query: n, queryType: l.QueryType.DOC, multi: !1, merge: !0, upsert: !1 };
                                return this.request.send("database.updateDocument", r).then((function(e) { e.code ? t(0, e) : t(0, { updated: e.data.updated, upsertedId: e.data.upserted_id, requestId: e.requestId }) }))["catch"]((function(e) { t(e) })), t.promise
                            }, e.prototype.remove = function(e) {
                                e = e || (0, i.createPromiseCallback)();
                                var t = { _id: this.id },
                                    n = { collectionName: this._coll, query: t, queryType: l.QueryType.DOC, multi: !1 };
                                return this.request.send("database.deleteDocument", n).then((function(t) { t.code ? e(0, t) : e(0, { deleted: t.data.deleted, requestId: t.requestId }) }))["catch"]((function(t) { e(t) })), e.promise
                            }, e.prototype.get = function(e) {
                                e = e || (0, i.createPromiseCallback)();
                                var t = { _id: this.id },
                                    n = { collectionName: this._coll, query: t, queryType: l.QueryType.DOC, multi: !1, projection: this.projection };
                                return this.request.send("database.queryDocument", n).then((function(t) {
                                    if (t.code) e(0, t);
                                    else {
                                        var n = a.Util.formatResDocumentData(t.data.list);
                                        e(0, { data: n, requestId: t.requestId, total: t.TotalCount, limit: t.Limit, offset: t.Offset })
                                    }
                                }))["catch"]((function(t) { e(t) })), e.promise
                            }, e.prototype.field = function(t) { for (var n in t) t[n] ? t[n] = 1 : t[n] = 0; return new e(this._db, this._coll, this.id, t) }, e
                        }();
                    t.DocumentReference = h
                },
                7685: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var r = n(5556);
                    Object.keys(r).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return r[e] } })) }));
                    var o = n(9423);
                    Object.keys(o).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return o[e] } })) }));
                    var i = n(4870);
                    Object.keys(i).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === i[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return i[e] } })) }));
                    var s = n(5405);
                    Object.keys(s).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === s[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return s[e] } })) }));
                    var a = n(7686);
                    Object.keys(a).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === a[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return a[e] } })) }));
                    var u = n(3323);
                    Object.keys(u).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === u[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return u[e] } })) }))
                },
                9423: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.LineString = void 0;
                    var o = r(n(3988)),
                        i = n(2352),
                        s = n(5556),
                        a = n(3703),
                        u = function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        },
                        c = function() {
                            function e(e) {
                                if (!(0, a.isArray)(e)) throw new TypeError('"points" must be of type Point[]. Received type ' + (0, o["default"])(e));
                                if (e.length < 2) throw new Error('"points" must contain 2 points at least');
                                e.forEach((function(e) { if (!(e instanceof s.Point)) throw new TypeError('"points" must be of type Point[]. Received type ' + (0, o["default"])(e) + "[]") })), this.points = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "LineString", coordinates: this.points.map((function(e) { return e.toJSON().coordinates })) }, t }, e.prototype.toJSON = function() { return { type: "LineString", coordinates: this.points.map((function(e) { return e.toJSON().coordinates })) } }, e.validate = function(e) { var t, n; if ("LineString" !== e.type || !(0, a.isArray)(e.coordinates)) return !1; try { for (var r = u(e.coordinates), o = r.next(); !o.done; o = r.next()) { var i = o.value; if (!(0, a.isNumber)(i[0]) || !(0, a.isNumber)(i[1])) return !1 } } catch (s) { t = { error: s } } finally { try { o && !o.done && (n = r["return"]) && n.call(r) } finally { if (t) throw t.error } } return !0 }, e.isClosed = function(e) {
                                var t = e.points[0],
                                    n = e.points[e.points.length - 1];
                                if (t.latitude === n.latitude && t.longitude === n.longitude) return !0
                            }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return i.SYMBOL_GEO_LINE_STRING }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.LineString = c
                },
                7686: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.MultiLineString = void 0;
                    var o = r(n(3988)),
                        i = n(2352),
                        s = n(3703),
                        a = n(9423),
                        u = function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        },
                        c = function() {
                            function e(e) {
                                if (!(0, s.isArray)(e)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + (0, o["default"])(e));
                                if (0 === e.length) throw new Error("Polygon must contain 1 linestring at least");
                                e.forEach((function(e) { if (!(e instanceof a.LineString)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + (0, o["default"])(e) + "[]") })), this.lines = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "MultiLineString", coordinates: this.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) }, t }, e.prototype.toJSON = function() { return { type: "MultiLineString", coordinates: this.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) } }, e.validate = function(e) { var t, n, r, o; if ("MultiLineString" !== e.type || !(0, s.isArray)(e.coordinates)) return !1; try { for (var i = u(e.coordinates), a = i.next(); !a.done; a = i.next()) { var c = a.value; try { for (var f = (r = void 0, u(c)), l = f.next(); !l.done; l = f.next()) { var p = l.value; if (!(0, s.isNumber)(p[0]) || !(0, s.isNumber)(p[1])) return !1 } } catch (d) { r = { error: d } } finally { try { l && !l.done && (o = f["return"]) && o.call(f) } finally { if (r) throw r.error } } } } catch (h) { t = { error: h } } finally { try { a && !a.done && (n = i["return"]) && n.call(i) } finally { if (t) throw t.error } } return !0 }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return i.SYMBOL_GEO_MULTI_LINE_STRING }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.MultiLineString = c
                },
                5405: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.MultiPoint = void 0;
                    var o = r(n(3988)),
                        i = n(2352),
                        s = n(5556),
                        a = n(3703),
                        u = function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        },
                        c = function() {
                            function e(e) {
                                if (!(0, a.isArray)(e)) throw new TypeError('"points" must be of type Point[]. Received type ' + (0, o["default"])(e));
                                if (0 === e.length) throw new Error('"points" must contain 1 point at least');
                                e.forEach((function(e) { if (!(e instanceof s.Point)) throw new TypeError('"points" must be of type Point[]. Received type ' + (0, o["default"])(e) + "[]") })), this.points = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "MultiPoint", coordinates: this.points.map((function(e) { return e.toJSON().coordinates })) }, t }, e.prototype.toJSON = function() { return { type: "MultiPoint", coordinates: this.points.map((function(e) { return e.toJSON().coordinates })) } }, e.validate = function(e) { var t, n; if ("MultiPoint" !== e.type || !(0, a.isArray)(e.coordinates)) return !1; try { for (var r = u(e.coordinates), o = r.next(); !o.done; o = r.next()) { var i = o.value; if (!(0, a.isNumber)(i[0]) || !(0, a.isNumber)(i[1])) return !1 } } catch (s) { t = { error: s } } finally { try { o && !o.done && (n = r["return"]) && n.call(r) } finally { if (t) throw t.error } } return !0 }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return i.SYMBOL_GEO_MULTI_POINT }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.MultiPoint = c
                },
                3323: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.MultiPolygon = void 0;
                    var o = r(n(3988)),
                        i = n(2352),
                        s = n(3703),
                        a = n(4870),
                        u = function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        },
                        c = function() {
                            function e(e) {
                                var t, n;
                                if (!(0, s.isArray)(e)) throw new TypeError('"polygons" must be of type Polygon[]. Received type ' + (0, o["default"])(e));
                                if (0 === e.length) throw new Error("MultiPolygon must contain 1 polygon at least");
                                try { for (var r = u(e), i = r.next(); !i.done; i = r.next()) { var c = i.value; if (!(c instanceof a.Polygon)) throw new TypeError('"polygon" must be of type Polygon[]. Received type ' + (0, o["default"])(c) + "[]") } } catch (f) { t = { error: f } } finally { try { i && !i.done && (n = r["return"]) && n.call(r) } finally { if (t) throw t.error } }
                                this.polygons = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "MultiPolygon", coordinates: this.polygons.map((function(e) { return e.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) })) }, t }, e.prototype.toJSON = function() { return { type: "MultiPolygon", coordinates: this.polygons.map((function(e) { return e.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) })) } }, e.validate = function(e) { var t, n, r, o, i, a; if ("MultiPolygon" !== e.type || !(0, s.isArray)(e.coordinates)) return !1; try { for (var c = u(e.coordinates), f = c.next(); !f.done; f = c.next()) { var l = f.value; try { for (var p = (r = void 0, u(l)), d = p.next(); !d.done; d = p.next()) { var h = d.value; try { for (var y = (i = void 0, u(h)), g = y.next(); !g.done; g = y.next()) { var _ = g.value; if (!(0, s.isNumber)(_[0]) || !(0, s.isNumber)(_[1])) return !1 } } catch (v) { i = { error: v } } finally { try { g && !g.done && (a = y["return"]) && a.call(y) } finally { if (i) throw i.error } } } } catch (m) { r = { error: m } } finally { try { d && !d.done && (o = p["return"]) && o.call(p) } finally { if (r) throw r.error } } } } catch (b) { t = { error: b } } finally { try { f && !f.done && (n = c["return"]) && n.call(c) } finally { if (t) throw t.error } } return !0 }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return i.SYMBOL_GEO_POLYGON }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.MultiPolygon = c
                },
                5556: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Point = void 0;
                    var r = n(3228),
                        o = n(2352),
                        i = n(3703),
                        s = function() {
                            function e(e, t) { r.Validate.isGeopoint("longitude", e), r.Validate.isGeopoint("latitude", t), this.longitude = e, this.latitude = t }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "Point", coordinates: [this.longitude, this.latitude] }, t }, e.prototype.toJSON = function() { return { type: "Point", coordinates: [this.longitude, this.latitude] } }, e.prototype.toReadableString = function() { return "[" + this.longitude + "," + this.latitude + "]" }, e.validate = function(e) { return "Point" === e.type && (0, i.isArray)(e.coordinates) && r.Validate.isGeopoint("longitude", e.coordinates[0]) && r.Validate.isGeopoint("latitude", e.coordinates[1]) }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return o.SYMBOL_GEO_POINT }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.Point = s
                },
                4870: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Polygon = void 0;
                    var o = r(n(3988)),
                        i = n(2352),
                        s = n(3703),
                        a = n(9423),
                        u = function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        },
                        c = function() {
                            function e(e) {
                                if (!(0, s.isArray)(e)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + (0, o["default"])(e));
                                if (0 === e.length) throw new Error("Polygon must contain 1 linestring at least");
                                e.forEach((function(e) { if (!(e instanceof a.LineString)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + (0, o["default"])(e) + "[]"); if (!a.LineString.isClosed(e)) throw new Error("LineString " + e.points.map((function(e) { return e.toReadableString() })) + " is not a closed cycle") })), this.lines = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "Polygon", coordinates: this.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) }, t }, e.prototype.toJSON = function() { return { type: "Polygon", coordinates: this.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) } }, e.validate = function(e) { var t, n, r, o; if ("Polygon" !== e.type || !(0, s.isArray)(e.coordinates)) return !1; try { for (var i = u(e.coordinates), a = i.next(); !a.done; a = i.next()) { var c = a.value; if (!this.isCloseLineString(c)) return !1; try { for (var f = (r = void 0, u(c)), l = f.next(); !l.done; l = f.next()) { var p = l.value; if (!(0, s.isNumber)(p[0]) || !(0, s.isNumber)(p[1])) return !1 } } catch (d) { r = { error: d } } finally { try { l && !l.done && (o = f["return"]) && o.call(f) } finally { if (r) throw r.error } } } } catch (h) { t = { error: h } } finally { try { a && !a.done && (n = i["return"]) && n.call(i) } finally { if (t) throw t.error } } return !0 }, e.isCloseLineString = function(e) {
                                var t = e[0],
                                    n = e[e.length - 1];
                                return t[0] === n[0] && t[1] === n[1]
                            }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return i.SYMBOL_GEO_MULTI_POLYGON }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.Polygon = c
                },
                2352: function(e, t, n) {
                    "use strict";
                    var r = n(2370);
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var o = { SYMBOL_UNSET_FIELD_NAME: !0, SYMBOL_UPDATE_COMMAND: !0, SYMBOL_QUERY_COMMAND: !0, SYMBOL_LOGIC_COMMAND: !0, SYMBOL_GEO_POINT: !0, SYMBOL_GEO_LINE_STRING: !0, SYMBOL_GEO_POLYGON: !0, SYMBOL_GEO_MULTI_POINT: !0, SYMBOL_GEO_MULTI_LINE_STRING: !0, SYMBOL_GEO_MULTI_POLYGON: !0, SYMBOL_SERVER_DATE: !0, SYMBOL_REGEXP: !0 };
                    t.SYMBOL_REGEXP = t.SYMBOL_SERVER_DATE = t.SYMBOL_GEO_MULTI_POLYGON = t.SYMBOL_GEO_MULTI_LINE_STRING = t.SYMBOL_GEO_MULTI_POINT = t.SYMBOL_GEO_POLYGON = t.SYMBOL_GEO_LINE_STRING = t.SYMBOL_GEO_POINT = t.SYMBOL_LOGIC_COMMAND = t.SYMBOL_QUERY_COMMAND = t.SYMBOL_UPDATE_COMMAND = t.SYMBOL_UNSET_FIELD_NAME = void 0;
                    var i = r(n(7471));
                    Object.keys(i).forEach((function(e) { "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || e in t && t[e] === i[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return i[e] } })) }));
                    var s = i["default"]["for"]("UNSET_FIELD_NAME");
                    t.SYMBOL_UNSET_FIELD_NAME = s;
                    var a = i["default"]["for"]("UPDATE_COMMAND");
                    t.SYMBOL_UPDATE_COMMAND = a;
                    var u = i["default"]["for"]("QUERY_COMMAND");
                    t.SYMBOL_QUERY_COMMAND = u;
                    var c = i["default"]["for"]("LOGIC_COMMAND");
                    t.SYMBOL_LOGIC_COMMAND = c;
                    var f = i["default"]["for"]("GEO_POINT");
                    t.SYMBOL_GEO_POINT = f;
                    var l = i["default"]["for"]("SYMBOL_GEO_LINE_STRING");
                    t.SYMBOL_GEO_LINE_STRING = l;
                    var p = i["default"]["for"]("SYMBOL_GEO_POLYGON");
                    t.SYMBOL_GEO_POLYGON = p;
                    var d = i["default"]["for"]("SYMBOL_GEO_MULTI_POINT");
                    t.SYMBOL_GEO_MULTI_POINT = d;
                    var h = i["default"]["for"]("SYMBOL_GEO_MULTI_LINE_STRING");
                    t.SYMBOL_GEO_MULTI_LINE_STRING = h;
                    var y = i["default"]["for"]("SYMBOL_GEO_MULTI_POLYGON");
                    t.SYMBOL_GEO_MULTI_POLYGON = y;
                    var g = i["default"]["for"]("SERVER_DATE");
                    t.SYMBOL_SERVER_DATE = g;
                    var _ = i["default"]["for"]("REGEXP");
                    t.SYMBOL_REGEXP = _
                },
                5938: function(e, t, n) {
                    "use strict";
                    var r = n(2370);
                    Object.defineProperty(t, "__esModule", { value: !0 }), Object.defineProperty(t, "CollectionReference", { enumerable: !0, get: function() { return i.CollectionReference } }), Object.defineProperty(t, "Query", { enumerable: !0, get: function() { return d.Query } }), Object.defineProperty(t, "DocumentReference", { enumerable: !0, get: function() { return h.DocumentReference } }), t.Db = void 0;
                    var o = r(n(7685)),
                        i = n(7505),
                        s = n(8991),
                        a = n(1312),
                        u = n(1250),
                        c = n(8617),
                        f = n(85),
                        l = n(8176),
                        p = n(982),
                        d = n(6582),
                        h = n(6724),
                        y = function() {
                            function e(e) { this.config = e, this.Geo = o, this.serverDate = a.ServerDateConstructor, this.command = s.Command, this.RegExp = u.RegExpConstructor, this.startTransaction = c.startTransaction, this.runTransaction = c.runTransaction, this.logicCommand = f.LogicCommand, this.updateCommand = p.UpdateCommand, this.queryCommand = l.QueryCommand }
                            return e.prototype.collection = function(e) { if (!e) throw new Error("Collection name is required"); return new i.CollectionReference(this, e) }, e.prototype.createCollection = function(t) { var n = { collectionName: t }; return new e.reqClass(this.config).send("database.addCollection", n) }, e
                        }();
                    t.Db = y
                },
                9054: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.createPromiseCallback = void 0, t.createPromiseCallback = function() {
                        var e;
                        if (!Promise) {
                            (e = function() {}).promise = {};
                            var t = function() { throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.') };
                            return Object.defineProperty(e.promise, "then", { get: t }), Object.defineProperty(e.promise, "catch", { get: t }), e
                        }
                        var n = new Promise((function(t, n) { e = function(e, r) { return e ? n(e) : t(r) } }));
                        return e.promise = n, e
                    }
                },
                5085: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.operatorToString = function(e) { return s[e] || "$" + e }, t.OperatorMap = void 0;
                    var r = n(8176),
                        o = n(85),
                        i = n(982),
                        s = {};
                    for (var a in t.OperatorMap = s, r.QUERY_COMMANDS_LITERAL) s[a] = "$" + a;
                    for (var a in o.LOGIC_COMMANDS_LITERAL) s[a] = "$" + a;
                    for (var a in i.UPDATE_COMMANDS_LITERAL) s[a] = "$" + a;
                    s[r.QUERY_COMMANDS_LITERAL.NEQ] = "$ne", s[i.UPDATE_COMMANDS_LITERAL.REMOVE] = "$unset", s[i.UPDATE_COMMANDS_LITERAL.SHIFT] = "$pop", s[i.UPDATE_COMMANDS_LITERAL.UNSHIFT] = "$push"
                },
                6582: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Query = void 0;
                    var o = r(n(3988)),
                        i = n(9054),
                        s = n(7785),
                        a = n(5938),
                        u = n(3228),
                        c = n(9833),
                        f = n(6532),
                        l = n(5323),
                        p = n(64),
                        d = function() {
                            return (d = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        h = function() {
                            function e(e, t, n, r, o) {
                                var i = this;
                                this.watch = function(e) { return (0, p.getWsInstance)(i._db).watch(d(d({}, e), { envId: i._db.config.env, collectionName: i._coll, query: JSON.stringify(i._fieldFilters || {}), limit: i._queryOptions.limit, orderBy: i._fieldOrders ? i._fieldOrders.reduce((function(e, t) { return e[t.field] = t.direction, e }), {}) : undefined })) }, this._db = e, this._coll = t, this._fieldFilters = n, this._fieldOrders = r || [], this._queryOptions = o || {}, this._request = new a.Db.reqClass(this._db.config)
                            }
                            return e.prototype.get = function(e) {
                                e = e || (0, i.createPromiseCallback)();
                                var t = [];
                                this._fieldOrders && this._fieldOrders.forEach((function(e) { t.push(e) }));
                                var n = { collectionName: this._coll, queryType: s.QueryType.WHERE };
                                return this._fieldFilters && (n.query = this._fieldFilters), t.length > 0 && (n.order = t), this._queryOptions.offset && (n.offset = this._queryOptions.offset), this._queryOptions.limit ? n.limit = this._queryOptions.limit < 1e3 ? this._queryOptions.limit : 1e3 : n.limit = 100, this._queryOptions.projection && (n.projection = this._queryOptions.projection), this._request.send("database.queryDocument", n).then((function(t) {
                                    if (t.code) e(0, t);
                                    else {
                                        var n = { data: c.Util.formatResDocumentData(t.data.list), requestId: t.requestId };
                                        t.TotalCount && (n.total = t.TotalCount), t.Limit && (n.limit = t.Limit), t.Offset && (n.offset = t.Offset), e(0, n)
                                    }
                                }))["catch"]((function(t) { e(t) })), e.promise
                            }, e.prototype.count = function(e) { e = e || (0, i.createPromiseCallback)(); var t = { collectionName: this._coll, queryType: s.QueryType.WHERE }; return this._fieldFilters && (t.query = this._fieldFilters), this._request.send("database.countDocument", t).then((function(t) { t.code ? e(0, t) : e(0, { requestId: t.requestId, total: t.data.total }) }))["catch"]((function(t) { e(t) })), e.promise }, e.prototype.where = function(t) {
                                if ("Object" !== Object.prototype.toString.call(t).slice(8, -1)) throw Error(s.ErrorCode.QueryParamTypeError);
                                var n = Object.keys(t),
                                    r = n.some((function(e) { return t[e] !== undefined }));
                                if (n.length && !r) throw Error(s.ErrorCode.QueryParamValueError);
                                return new e(this._db, this._coll, f.QuerySerializer.encode(t), this._fieldOrders, this._queryOptions)
                            }, e.prototype.orderBy = function(t, n) {
                                u.Validate.isFieldPath(t), u.Validate.isFieldOrder(n);
                                var r = { field: t, direction: n },
                                    o = this._fieldOrders.concat(r);
                                return new e(this._db, this._coll, this._fieldFilters, o, this._queryOptions)
                            }, e.prototype.limit = function(t) { u.Validate.isInteger("limit", t); var n = d({}, this._queryOptions); return n.limit = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, n) }, e.prototype.skip = function(t) { u.Validate.isInteger("offset", t); var n = d({}, this._queryOptions); return n.offset = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, n) }, e.prototype.update = function(e, t) { if (t = t || (0, i.createPromiseCallback)(), !e || "object" !== (0, o["default"])(e)) return Promise.resolve({ code: "INVALID_PARAM", message: "参数必需是非空对象" }); if (e.hasOwnProperty("_id")) return Promise.resolve({ code: "INVALID_PARAM", message: "不能更新_id的值" }); var n = { collectionName: this._coll, query: this._fieldFilters, queryType: s.QueryType.WHERE, multi: !0, merge: !0, upsert: !1, data: l.UpdateSerializer.encode(e) }; return this._request.send("database.updateDocument", n).then((function(e) { e.code ? t(0, e) : t(0, { requestId: e.requestId, updated: e.data.updated, upsertId: e.data.upsert_id }) }))["catch"]((function(e) { t(e) })), t.promise }, e.prototype.field = function(t) { for (var n in t) t[n] ? "object" !== (0, o["default"])(t[n]) && (t[n] = 1) : t[n] = 0; var r = d({}, this._queryOptions); return r.projection = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, r) }, e.prototype.remove = function(e) { e = e || (0, i.createPromiseCallback)(), Object.keys(this._queryOptions).length > 0 && console.warn("`offset`, `limit` and `projection` are not supported in remove() operation"), this._fieldOrders.length > 0 && console.warn("`orderBy` is not supported in remove() operation"); var t = { collectionName: this._coll, query: f.QuerySerializer.encode(this._fieldFilters), queryType: s.QueryType.WHERE, multi: !0 }; return this._request.send("database.deleteDocument", t).then((function(t) { t.code ? e(0, t) : e(0, { requestId: t.requestId, deleted: t.data.deleted }) }))["catch"]((function(t) { e(t) })), e.promise }, e
                        }();
                    t.Query = h
                },
                1250: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.RegExpConstructor = function(e) { return new o(e) }, t.RegExp = void 0;
                    var r = n(2352),
                        o = function() {
                            function e(e) {
                                var t = e.regexp,
                                    n = e.options;
                                if (!t) throw new TypeError("regexp must be a string");
                                this.$regex = t, this.$options = n
                            }
                            return e.prototype.parse = function() { return { $regex: this.$regex, $options: this.$options } }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return r.SYMBOL_REGEXP }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.RegExp = o
                },
                4953: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.flattenQueryObject = function(e) { return u(e, c, [], [e]) }, t.flattenObject = function(e) { return u(e, (function(e) { return !1 }), [], [e]) }, t.mergeConditionAfterEncode = function(e, t, n) { for (var o in t[n] || delete e[n], t) e[o] ? (0, r.isArray)(e[o]) ? e[o].push(t[o]) : (0, r.isObject)(e[o]) ? (0, r.isObject)(t[o]) ? Object.assign(e[o], t[o]) : (console.warn("unmergable condition, query is object but condition is " + (0, r.getType)(t) + ", can only overwrite", t, n), e[o] = t[o]) : (console.warn("to-merge query is of type " + (0, r.getType)(e) + ", can only overwrite", e, t, n), e[o] = t[o]) : e[o] = t[o] }, t.isConversionRequired = c, t.encodeInternalDataType = function(e) { return (0, o.serialize)(e) }, t.decodeInternalDataType = function(e) { return (0, o.deserialize)(e) };
                    var r = n(3703),
                        o = n(9272),
                        i = function() {
                            return (i = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        s = function(e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var r, o, i = n.call(e),
                                s = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                            } catch (a) { o = { error: a } } finally { try { r && !r.done && (n = i["return"]) && n.call(i) } finally { if (o) throw o.error } }
                            return s
                        },
                        a = function() { for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t])); return e };

                    function u(e, t, n, o) {
                        var s = i({}, e);
                        for (var c in e)
                            if (!/^\$/.test(c)) {
                                var f = e[c];
                                if (f && (0, r.isObject)(f) && !t(f)) {
                                    if (o.indexOf(f) > -1) throw new Error("Cannot convert circular structure to JSON");
                                    var l = u(f, t, a(n, [c]), a(o, [f]));
                                    s[c] = l;
                                    var p = !1;
                                    for (var d in l) /^\$/.test(d) ? p = !0 : (s[c + "." + d] = l[d], delete s[c][d]);
                                    p || delete s[c]
                                }
                            }
                        return s
                    }

                    function c(e) { return (0, r.isInternalObject)(e) || (0, r.isDate)(e) || (0, r.isRegExp)(e) }
                },
                9272: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.serialize = function(e) { return f(e, [e]) }, t.deserialize = function(e) {
                        var t = a({}, e);
                        for (var n in t) switch (n) {
                            case "$date":
                                switch ((0, o.getType)(t[n])) {
                                    case "number":
                                        return new Date(t[n]);
                                    case "object":
                                        return new s.ServerDate(t[n])
                                }
                                break;
                            case "type":
                                switch (t.type) {
                                    case "Point":
                                        if ((0, o.isArray)(t.coordinates) && (0, o.isNumber)(t.coordinates[0]) && (0, o.isNumber)(t.coordinates[1])) return new i.Point(t.coordinates[0], t.coordinates[1])
                                }
                        }
                        return e
                    };
                    var r = n(2352),
                        o = n(3703),
                        i = n(7685),
                        s = n(1312),
                        a = function() {
                            return (a = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        u = function(e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var r, o, i = n.call(e),
                                s = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                            } catch (a) { o = { error: a } } finally { try { r && !r.done && (n = i["return"]) && n.call(i) } finally { if (o) throw o.error } }
                            return s
                        },
                        c = function() { for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t])); return e };

                    function f(e, t) {
                        if (!(0, o.isInternalObject)(e)) {
                            if ((0, o.isDate)(e)) return { $date: +e };
                            if ((0, o.isRegExp)(e)) return { $regex: e.source, $options: e.flags };
                            if ((0, o.isArray)(e)) return e.map((function(e) { if (t.indexOf(e) > -1) throw new Error("Cannot convert circular structure to JSON"); return f(e, c(t, [e])) }));
                            if ((0, o.isObject)(e)) {
                                var n = a({}, e);
                                for (var i in n) {
                                    if (t.indexOf(n[i]) > -1) throw new Error("Cannot convert circular structure to JSON");
                                    n[i] = f(n[i], c(t, [n[i]]))
                                }
                                return n
                            }
                            return e
                        }
                        switch (e._internalType) {
                            case r.SYMBOL_GEO_POINT:
                                return e.toJSON();
                            case r.SYMBOL_SERVER_DATE:
                            case r.SYMBOL_REGEXP:
                                return e.parse();
                            default:
                                return e.toJSON ? e.toJSON() : e
                        }
                    }
                },
                6532: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.QuerySerializer = void 0;
                    var r = n(8176),
                        o = n(85),
                        i = n(2352),
                        s = n(3703),
                        a = n(5085),
                        u = n(4953),
                        c = function() {
                            function e() {}
                            return e.encode = function(e) { return (new f).encodeQuery(e) }, e
                        }();
                    t.QuerySerializer = c;
                    var f = function() {
                        function e() {}
                        return e.prototype.encodeQuery = function(e, t) { var n; return (0, u.isConversionRequired)(e) ? (0, o.isLogicCommand)(e) ? this.encodeLogicCommand(e) : (0, r.isQueryCommand)(e) ? this.encodeQueryCommand(e) : ((n = {})[t] = this.encodeQueryObject(e), n) : (0, s.isObject)(e) ? this.encodeQueryObject(e) : e }, e.prototype.encodeRegExp = function(e) { return { $regex: e.source, $options: e.flags } }, e.prototype.encodeLogicCommand = function(e) {
                            var t, n, r, i, u, c, f, l = this;
                            switch (e.operator) {
                                case o.LOGIC_COMMANDS_LITERAL.NOR:
                                case o.LOGIC_COMMANDS_LITERAL.AND:
                                case o.LOGIC_COMMANDS_LITERAL.OR:
                                    var p = (0, a.operatorToString)(e.operator),
                                        d = e.operands.map((function(t) { return l.encodeQuery(t, e.fieldName) }));
                                    return (t = {})[p] = d, t;
                                case o.LOGIC_COMMANDS_LITERAL.NOT:
                                    p = (0, a.operatorToString)(e.operator);
                                    var h = e.operands[0];
                                    return (0, s.isRegExp)(h) ? ((n = {})[e.fieldName] = ((r = {})[p] = this.encodeRegExp(h), r), n) : (d = this.encodeQuery(h)[e.fieldName], (i = {})[e.fieldName] = ((u = {})[p] = d, u), i);
                                default:
                                    if (p = (0, a.operatorToString)(e.operator), 1 === e.operands.length) { var y = this.encodeQuery(e.operands[0]); return (c = {})[p] = y, c }
                                    return d = e.operands.map(this.encodeQuery.bind(this)), (f = {})[p] = d, f
                            }
                        }, e.prototype.encodeQueryCommand = function(e) { return (0, r.isComparisonCommand)(e), this.encodeComparisonCommand(e) }, e.prototype.encodeComparisonCommand = function(e) {
                            var t, n, o, s, c, f, l, p, d;
                            if (e.fieldName === i.SYMBOL_UNSET_FIELD_NAME) throw new Error("Cannot encode a comparison command with unset field name");
                            var h = (0, a.operatorToString)(e.operator);
                            switch (e.operator) {
                                case r.QUERY_COMMANDS_LITERAL.EQ:
                                case r.QUERY_COMMANDS_LITERAL.NEQ:
                                case r.QUERY_COMMANDS_LITERAL.LT:
                                case r.QUERY_COMMANDS_LITERAL.LTE:
                                case r.QUERY_COMMANDS_LITERAL.GT:
                                case r.QUERY_COMMANDS_LITERAL.GTE:
                                case r.QUERY_COMMANDS_LITERAL.ELEM_MATCH:
                                case r.QUERY_COMMANDS_LITERAL.EXISTS:
                                case r.QUERY_COMMANDS_LITERAL.SIZE:
                                case r.QUERY_COMMANDS_LITERAL.MOD:
                                    return (t = {})[e.fieldName] = ((n = {})[h] = (0, u.encodeInternalDataType)(e.operands[0]), n), t;
                                case r.QUERY_COMMANDS_LITERAL.IN:
                                case r.QUERY_COMMANDS_LITERAL.NIN:
                                case r.QUERY_COMMANDS_LITERAL.ALL:
                                    return (o = {})[e.fieldName] = ((s = {})[h] = (0, u.encodeInternalDataType)(e.operands), s), o;
                                case r.QUERY_COMMANDS_LITERAL.GEO_NEAR:
                                    var y = e.operands[0];
                                    return (c = {})[e.fieldName] = { $nearSphere: { $geometry: y.geometry.toJSON(), $maxDistance: y.maxDistance, $minDistance: y.minDistance } }, c;
                                case r.QUERY_COMMANDS_LITERAL.GEO_WITHIN:
                                    return y = e.operands[0], (f = {})[e.fieldName] = { $geoWithin: { $geometry: y.geometry.toJSON() } }, f;
                                case r.QUERY_COMMANDS_LITERAL.GEO_INTERSECTS:
                                    return y = e.operands[0], (l = {})[e.fieldName] = { $geoIntersects: { $geometry: y.geometry.toJSON() } }, l;
                                default:
                                    return (p = {})[e.fieldName] = ((d = {})[h] = (0, u.encodeInternalDataType)(e.operands[0]), d), p
                            }
                        }, e.prototype.encodeQueryObject = function(e) {
                            var t = (0, u.flattenQueryObject)(e);
                            for (var n in t) {
                                var i = t[n];
                                if ((0, o.isLogicCommand)(i)) {
                                    t[n] = i._setFieldName(n);
                                    var s = this.encodeLogicCommand(t[n]);
                                    this.mergeConditionAfterEncode(t, s, n)
                                } else(0, r.isComparisonCommand)(i) ? (t[n] = i._setFieldName(n), s = this.encodeComparisonCommand(t[n]), this.mergeConditionAfterEncode(t, s, n)) : (0, u.isConversionRequired)(i) && (t[n] = (0, u.encodeInternalDataType)(i))
                            }
                            return t
                        }, e.prototype.mergeConditionAfterEncode = function(e, t, n) { for (var r in t[n] || delete e[n], t) e[r] ? (0, s.isArray)(e[r]) ? e[r] = e[r].concat(t[r]) : (0, s.isObject)(e[r]) ? (0, s.isObject)(t[r]) ? Object.assign(e, t) : (console.warn("unmergable condition, query is object but condition is " + (0, s.getType)(t) + ", can only overwrite", t, n), e[r] = t[r]) : (console.warn("to-merge query is of type " + (0, s.getType)(e) + ", can only overwrite", e, t, n), e[r] = t[r]) : e[r] = t[r] }, e
                    }()
                },
                5323: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.UpdateSerializer = void 0;
                    var r = n(982),
                        o = n(2352),
                        i = n(3703),
                        s = n(5085),
                        a = n(4953),
                        u = function() {
                            function e() {}
                            return e.encode = function(t) { return (new e).encodeUpdate(t) }, e.prototype.encodeUpdate = function(e) { return (0, r.isUpdateCommand)(e) ? this.encodeUpdateCommand(e) : "object" === (0, i.getType)(e) ? this.encodeUpdateObject(e) : e }, e.prototype.encodeUpdateCommand = function(e) {
                                if (e.fieldName === o.SYMBOL_UNSET_FIELD_NAME) throw new Error("Cannot encode a comparison command with unset field name");
                                switch (e.operator) {
                                    case r.UPDATE_COMMANDS_LITERAL.PUSH:
                                    case r.UPDATE_COMMANDS_LITERAL.PULL:
                                    case r.UPDATE_COMMANDS_LITERAL.PULL_ALL:
                                    case r.UPDATE_COMMANDS_LITERAL.POP:
                                    case r.UPDATE_COMMANDS_LITERAL.SHIFT:
                                    case r.UPDATE_COMMANDS_LITERAL.UNSHIFT:
                                    case r.UPDATE_COMMANDS_LITERAL.ADD_TO_SET:
                                        return this.encodeArrayUpdateCommand(e);
                                    default:
                                        return this.encodeFieldUpdateCommand(e)
                                }
                            }, e.prototype.encodeFieldUpdateCommand = function(e) {
                                var t, n, o, i, a = (0, s.operatorToString)(e.operator);
                                switch (e.operator) {
                                    case r.UPDATE_COMMANDS_LITERAL.REMOVE:
                                        return (t = {})[a] = ((n = {})[e.fieldName] = "", n), t;
                                    default:
                                        return (o = {})[a] = ((i = {})[e.fieldName] = e.operands[0], i), o
                                }
                            }, e.prototype.encodeArrayUpdateCommand = function(e) {
                                var t, n, o, u, c, f, l, p, d, h, y = (0, s.operatorToString)(e.operator);
                                switch (e.operator) {
                                    case r.UPDATE_COMMANDS_LITERAL.PUSH:
                                        var g = void 0;
                                        return g = (0, i.isArray)(e.operands) ? { $each: e.operands.map(a.encodeInternalDataType) } : e.operands, (t = {})[y] = ((n = {})[e.fieldName] = g, n), t;
                                    case r.UPDATE_COMMANDS_LITERAL.UNSHIFT:
                                        return g = { $each: e.operands.map(a.encodeInternalDataType), $position: 0 }, (o = {})[y] = ((u = {})[e.fieldName] = g, u), o;
                                    case r.UPDATE_COMMANDS_LITERAL.POP:
                                        return (c = {})[y] = ((f = {})[e.fieldName] = 1, f), c;
                                    case r.UPDATE_COMMANDS_LITERAL.SHIFT:
                                        return (l = {})[y] = ((p = {})[e.fieldName] = -1, p), l;
                                    default:
                                        return (d = {})[y] = ((h = {})[e.fieldName] = (0, a.encodeInternalDataType)(e.operands), h), d
                                }
                            }, e.prototype.encodeUpdateObject = function(e) {
                                var t = (0, a.flattenQueryObject)(e);
                                for (var n in t)
                                    if (!/^\$/.test(n)) {
                                        var o = t[n];
                                        if ((0, r.isUpdateCommand)(o)) {
                                            t[n] = o._setFieldName(n);
                                            var i = this.encodeUpdateCommand(t[n]);
                                            (0, a.mergeConditionAfterEncode)(t, i, n)
                                        } else {
                                            t[n] = o = (0, a.encodeInternalDataType)(o);
                                            var s = new r.UpdateCommand(r.UPDATE_COMMANDS_LITERAL.SET, [o], n);
                                            i = this.encodeUpdateCommand(s), (0, a.mergeConditionAfterEncode)(t, i, n)
                                        }
                                    }
                                return t
                            }, e
                        }();
                    t.UpdateSerializer = u
                },
                1312: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.ServerDateConstructor = function(e) { return new o(e) }, t.ServerDate = void 0;
                    var r = n(2352),
                        o = function() {
                            function e(e) {
                                var t = (void 0 === e ? {} : e).offset,
                                    n = void 0 === t ? 0 : t;
                                this.offset = n
                            }
                            return Object.defineProperty(e.prototype, "_internalType", { get: function() { return r.SYMBOL_SERVER_DATE }, enumerable: !0, configurable: !0 }), e.prototype.parse = function() { return { $date: { offset: this.offset } } }, e
                        }();
                    t.ServerDate = o
                },
                4452: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.CollectionReference = void 0;
                    var r, o = n(6171),
                        i = n(5039),
                        s = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        a = function(e) {
                            function t(t, n) { return e.call(this, t, n) || this }
                            return s(t, e), Object.defineProperty(t.prototype, "name", { get: function() { return this._coll }, enumerable: !0, configurable: !0 }), t.prototype.doc = function(e) { if ("string" != typeof e && "number" != typeof e) throw new Error("docId必须为字符串或数字"); return new o.DocumentReference(this._transaction, this._coll, e) }, t.prototype.add = function(e) { var t; return e._id !== undefined && (t = e._id), new o.DocumentReference(this._transaction, this._coll, t).create(e) }, t
                        }(i.Query);
                    t.CollectionReference = a
                },
                6171: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.DocumentReference = void 0;
                    var r = n(7567),
                        o = n(5029),
                        i = n(5323),
                        s = n(9272),
                        a = n(9833),
                        u = function() {
                            return (u = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        c = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        f = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        l = "database.updateDocInTransaction",
                        p = function() {
                            function e(e, t, n) { this._coll = t, this.id = n, this._transaction = e, this._request = this._transaction.getRequestMethod(), this._transactionId = this._transaction.getTransactionId() }
                            return e.prototype.create = function(e) {
                                return c(this, void 0, void 0, (function() {
                                    var t, n, i, a;
                                    return f(this, (function(c) {
                                        switch (c.label) {
                                            case 0:
                                                return t = { collectionName: this._coll, transactionId: this._transactionId, data: r.EJSON.stringify((0, s.serialize)(e), { relaxed: !1 }) }, this.id && (t._id = this.id), [4, this._request.send("database.insertDocInTransaction", t)];
                                            case 1:
                                                if ((n = c.sent()).code) throw n;
                                                if (i = r.EJSON.parse(n.inserted), 1 == (a = r.EJSON.parse(n.ok)) && 1 == i) return [2, u(u({}, n), { ok: a, inserted: i })];
                                                throw new Error(o.ERRORS.INSERT_DOC_FAIL.message)
                                        }
                                    }))
                                }))
                            }, e.prototype.get = function() {
                                return c(this, void 0, void 0, (function() {
                                    var e, t;
                                    return f(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return e = { collectionName: this._coll, transactionId: this._transactionId, query: { _id: { $eq: this.id } } }, [4, this._request.send("database.getInTransaction", e)];
                                            case 1:
                                                if ((t = n.sent()).code) throw t;
                                                return [2, { data: "null" !== t.data ? a.Util.formatField(r.EJSON.parse(t.data)) : r.EJSON.parse(t.data), requestId: t.requestId }]
                                        }
                                    }))
                                }))
                            }, e.prototype.set = function(e) {
                                return c(this, void 0, void 0, (function() {
                                    var t, n;
                                    return f(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return t = { collectionName: this._coll, transactionId: this._transactionId, query: { _id: { $eq: this.id } }, data: r.EJSON.stringify((0, s.serialize)(e), { relaxed: !1 }), upsert: !0 }, [4, this._request.send(l, t)];
                                            case 1:
                                                if ((n = o.sent()).code) throw n;
                                                return [2, u(u({}, n), { updated: r.EJSON.parse(n.updated), upserted: n.upserted ? JSON.parse(n.upserted) : null })]
                                        }
                                    }))
                                }))
                            }, e.prototype.update = function(e) {
                                return c(this, void 0, void 0, (function() {
                                    var t, n;
                                    return f(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return t = { collectionName: this._coll, transactionId: this._transactionId, query: { _id: { $eq: this.id } }, data: r.EJSON.stringify(i.UpdateSerializer.encode(e), { relaxed: !1 }) }, [4, this._request.send(l, t)];
                                            case 1:
                                                if ((n = o.sent()).code) throw n;
                                                return [2, u(u({}, n), { updated: r.EJSON.parse(n.updated) })]
                                        }
                                    }))
                                }))
                            }, e.prototype["delete"] = function() {
                                return c(this, void 0, void 0, (function() {
                                    var e, t;
                                    return f(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return e = { collectionName: this._coll, transactionId: this._transactionId, query: { _id: { $eq: this.id } } }, [4, this._request.send("database.deleteDocInTransaction", e)];
                                            case 1:
                                                if ((t = n.sent()).code) throw t;
                                                return [2, u(u({}, t), { deleted: r.EJSON.parse(t.deleted) })]
                                        }
                                    }))
                                }))
                            }, e
                        }();
                    t.DocumentReference = p
                },
                8617: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.startTransaction = function() {
                        return s(this, void 0, void 0, (function() {
                            var e;
                            return a(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, (e = new u(this)).init()];
                                    case 1:
                                        return t.sent(), [2, e]
                                }
                            }))
                        }))
                    }, t.runTransaction = function c(e, t) {
                        return void 0 === t && (t = 3), s(this, void 0, void 0, (function() {
                            var n, r, o, f, l = this;
                            return a(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        return p.trys.push([0, 4, , 10]), [4, (n = new u(this)).init()];
                                    case 1:
                                        return p.sent(), [4, e(n)];
                                    case 2:
                                        if (r = p.sent(), !0 === n.aborted) throw n.abortReason;
                                        return [4, n.commit()];
                                    case 3:
                                        return p.sent(), [2, r];
                                    case 4:
                                        if (o = p.sent(), !1 === n.inited) throw o;
                                        return f = function(e) {
                                            return s(l, void 0, void 0, (function() {
                                                return a(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            if (n.aborted || n.commited) return [3, 5];
                                                            t.label = 1;
                                                        case 1:
                                                            return t.trys.push([1, 3, , 4]), [4, n.rollback()];
                                                        case 2:
                                                        case 3:
                                                            return t.sent(), [3, 4];
                                                        case 4:
                                                            throw e;
                                                        case 5:
                                                            if (!0 === n.aborted) throw n.abortReason;
                                                            throw e
                                                    }
                                                }))
                                            }))
                                        }, t <= 0 ? [4, f(o)] : [3, 6];
                                    case 5:
                                        p.sent(), p.label = 6;
                                    case 6:
                                        return o && o.code === i.ERRORS.DATABASE_TRANSACTION_CONFLICT.code ? [4, c.bind(this)(e, --t)] : [3, 8];
                                    case 7:
                                        return [2, p.sent()];
                                    case 8:
                                        return [4, f(o)];
                                    case 9:
                                        return p.sent(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.Transaction = void 0;
                    var r = n(5938),
                        o = n(4452),
                        i = n(5029),
                        s = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        a = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        u = function() {
                            function e(e) { this._db = e, this._request = new r.Db.reqClass(this._db.config), this.aborted = !1, this.commited = !1, this.inited = !1 }
                            return e.prototype.init = function() {
                                return s(this, void 0, void 0, (function() {
                                    var e;
                                    return a(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, this._request.send("database.startTransaction")];
                                            case 1:
                                                if ((e = t.sent()).code) throw e;
                                                return this.inited = !0, this._id = e.transactionId, [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.collection = function(e) { if (!e) throw new Error("Collection name is required"); return new o.CollectionReference(this, e) }, e.prototype.getTransactionId = function() { return this._id }, e.prototype.getRequestMethod = function() { return this._request }, e.prototype.commit = function() {
                                return s(this, void 0, void 0, (function() {
                                    var e, t;
                                    return a(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return e = { transactionId: this._id }, [4, this._request.send("database.commitTransaction", e)];
                                            case 1:
                                                if ((t = n.sent()).code) throw t;
                                                return this.commited = !0, [2, t]
                                        }
                                    }))
                                }))
                            }, e.prototype.rollback = function(e) {
                                return s(this, void 0, void 0, (function() {
                                    var t, n;
                                    return a(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return t = { transactionId: this._id }, [4, this._request.send("database.abortTransaction", t)];
                                            case 1:
                                                if ((n = r.sent()).code) throw n;
                                                return this.aborted = !0, this.abortReason = e, [2, n]
                                        }
                                    }))
                                }))
                            }, e
                        }();
                    t.Transaction = u
                },
                5039: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Query = void 0;
                    var n = function(e, t) { this._coll = t, this._transaction = e };
                    t.Query = n
                },
                9833: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Util = void 0;
                    var r = n(7785),
                        o = n(7685),
                        i = n(1312),
                        s = function(e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var r, o, i = n.call(e),
                                s = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                            } catch (a) { o = { error: a } } finally { try { r && !r.done && (n = i["return"]) && n.call(i) } finally { if (o) throw o.error } }
                            return s
                        },
                        a = function() {
                            function e() {}
                            return e.formatResDocumentData = function(t) { return t.map((function(t) { return e.formatField(t) })) }, e.formatField = function(t) {
                                var n = Object.keys(t),
                                    i = {};
                                return Array.isArray(t) && (i = []), n.forEach((function(n) {
                                    var a, u = t[n];
                                    switch (e.whichType(u)) {
                                        case r.FieldType.GeoPoint:
                                            a = new o.Point(u.coordinates[0], u.coordinates[1]);
                                            break;
                                        case r.FieldType.GeoLineString:
                                            a = new o.LineString(u.coordinates.map((function(e) { return new o.Point(e[0], e[1]) })));
                                            break;
                                        case r.FieldType.GeoPolygon:
                                            a = new o.Polygon(u.coordinates.map((function(e) {
                                                return new o.LineString(e.map((function(e) {
                                                    var t = s(e, 2),
                                                        n = t[0],
                                                        r = t[1];
                                                    return new o.Point(n, r)
                                                })))
                                            })));
                                            break;
                                        case r.FieldType.GeoMultiPoint:
                                            a = new o.MultiPoint(u.coordinates.map((function(e) { return new o.Point(e[0], e[1]) })));
                                            break;
                                        case r.FieldType.GeoMultiLineString:
                                            a = new o.MultiLineString(u.coordinates.map((function(e) {
                                                return new o.LineString(e.map((function(e) {
                                                    var t = s(e, 2),
                                                        n = t[0],
                                                        r = t[1];
                                                    return new o.Point(n, r)
                                                })))
                                            })));
                                            break;
                                        case r.FieldType.GeoMultiPolygon:
                                            a = new o.MultiPolygon(u.coordinates.map((function(e) {
                                                return new o.Polygon(e.map((function(e) {
                                                    return new o.LineString(e.map((function(e) {
                                                        var t = s(e, 2),
                                                            n = t[0],
                                                            r = t[1];
                                                        return new o.Point(n, r)
                                                    })))
                                                })))
                                            })));
                                            break;
                                        case r.FieldType.Timestamp:
                                            a = new Date(1e3 * u.$timestamp);
                                            break;
                                        case r.FieldType.Object:
                                        case r.FieldType.Array:
                                            a = e.formatField(u);
                                            break;
                                        case r.FieldType.ServerDate:
                                            a = new Date(u.$date);
                                            break;
                                        default:
                                            a = u
                                    }
                                    Array.isArray(i) ? i.push(a) : i[n] = a
                                })), i
                            }, e.whichType = function(e) {
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if (t === r.FieldType.Timestamp) return r.FieldType.BsonDate;
                                if (t === r.FieldType.Object) {
                                    if (e instanceof o.Point) return r.FieldType.GeoPoint;
                                    if (e instanceof Date) return r.FieldType.Timestamp;
                                    if (e instanceof i.ServerDate) return r.FieldType.ServerDate;
                                    e.$timestamp ? t = r.FieldType.Timestamp : e.$date ? t = r.FieldType.ServerDate : o.Point.validate(e) ? t = r.FieldType.GeoPoint : o.LineString.validate(e) ? t = r.FieldType.GeoLineString : o.Polygon.validate(e) ? t = r.FieldType.GeoPolygon : o.MultiPoint.validate(e) ? t = r.FieldType.GeoMultiPoint : o.MultiLineString.validate(e) ? t = r.FieldType.GeoMultiLineString : o.MultiPolygon.validate(e) && (t = r.FieldType.GeoMultiPolygon)
                                }
                                return t
                            }, e.generateDocId = function() { for (var e = "ABCDEFabcdef0123456789", t = "", n = 0; n < 24; n++) t += e.charAt(Math.floor(Math.random() * e.length)); return t }, e
                        }();
                    t.Util = a
                },
                7471: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = t.InternalSymbol = void 0;
                    var n, r = (n = function(e, t) {
                            return (n = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function r() { this.constructor = e }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                        }),
                        o = [],
                        i = {},
                        s = function(e) {
                            function t(t, n) { if (n !== i) throw new TypeError("InternalSymbol cannot be constructed with new operator"); return e.call(this, t) || this }
                            return r(t, e), t["for"] = function(e) {
                                for (var n = 0, r = o.length; n < r; n++)
                                    if (o[n].target === e) return o[n].instance;
                                var s = new t(e, i);
                                return o.push({ target: e, instance: s }), s
                            }, t
                        }((function(e) { Object.defineProperties(this, { target: { enumerable: !1, writable: !1, configurable: !1, value: e } }) }));
                    t.InternalSymbol = s;
                    var a = s;
                    t["default"] = a
                },
                3703: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.isPlainObject = t.isInternalObject = t.isRegExp = t.isDate = t.isArray = t.isFunction = t.isPromise = t.isNumber = t.isString = t.isObject = t.getType = void 0;
                    var o = r(n(3988)),
                        i = n(7471),
                        s = function(e) { return Object.prototype.toString.call(e).slice(8, -1).toLowerCase() };
                    t.getType = s, t.isObject = function(e) { return "object" === s(e) }, t.isString = function(e) { return "string" === s(e) }, t.isNumber = function(e) { return "number" === s(e) }, t.isPromise = function(e) { return "promise" === s(e) }, t.isFunction = function(e) { return "function" == typeof e }, t.isArray = function(e) { return Array.isArray(e) }, t.isDate = function(e) { return "date" === s(e) }, t.isRegExp = function(e) { return "regexp" === s(e) }, t.isInternalObject = function(e) { return e && e._internalType instanceof i.InternalSymbol }, t.isPlainObject = function(e) { if ("object" !== (0, o["default"])(e) || null === e) return !1; for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t); return Object.getPrototypeOf(e) === t }
                },
                64: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.getWsInstance = function(e) { if (!r.Db.wsClientClass) throw new Error("to use realtime you must import realtime module first"); var t = e.config.env; return i[t] || (i[t] = new r.Db.wsClientClass({ context: { appConfig: { docSizeLimit: 1e3, realtimePingInterval: 1e4, realtimePongWaitTimeout: 5e3, request: new r.Db.reqClass(e.config) } } })), i[t] }, t.autoCount = t.sleep = void 0;
                    var r = n(5938);
                    t.sleep = function(e) { return void 0 === e && (e = 0), new Promise((function(t) { return setTimeout(t, e) })) };
                    var o = {};
                    t.autoCount = function(e) { return void 0 === e && (e = "any"), o[e] || (o[e] = 0), o[e]++ };
                    var i = {}
                },
                3228: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Validate = void 0;
                    var r = n(7785),
                        o = n(9833),
                        i = function() {
                            function e() {}
                            return e.isGeopoint = function(e, t) { if (o.Util.whichType(t) !== r.FieldType.Number) throw new Error("Geo Point must be number type"); var n = Math.abs(t); if ("latitude" === e && n > 90) throw new Error("latitude should be a number ranges from -90 to 90"); if ("longitude" === e && n > 180) throw new Error("longitude should be a number ranges from -180 to 180"); return !0 }, e.isInteger = function(e, t) { if (!Number.isInteger(t)) throw new Error(e + r.ErrorCode.IntergerError); return !0 }, e.isFieldOrder = function(e) { if (-1 === r.OrderDirectionList.indexOf(e)) throw new Error(r.ErrorCode.DirectionError); return !0 }, e.isFieldPath = function(e) { if (!/^[a-zA-Z0-9-_\.]/.test(e)) throw new Error; return !0 }, e.isOperator = function(e) { if (-1 === r.WhereFilterOpList.indexOf(e)) throw new Error(r.ErrorCode.OpStrError); return !0 }, e.isCollName = function(e) { if (!/^[a-zA-Z0-9]([a-zA-Z0-9-_]){1,32}$/.test(e)) throw new Error(r.ErrorCode.CollNameError); return !0 }, e.isDocID = function(e) { if (!/^([a-fA-F0-9]){24}$/.test(e)) throw new Error(r.ErrorCode.DocIDError); return !0 }, e
                        }();
                    t.Validate = i
                },
                1825: function(e, t, n) {
                    "use strict";
                    var r = Object.create ? function(e, t, n, r) { r === undefined && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, r) { r === undefined && (r = n), e[r] = t[n] },
                        o = Object.create ? function(e, t) { Object.defineProperty(e, "default", { enumerable: !0, value: t }) } : function(e, t) { e["default"] = t },
                        i = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                            return o(t, e), t
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.useDefaultAdapter = t.useAdapters = t.RUNTIME = void 0;
                    var s, a = i(n(9651)),
                        u = n(4224);
                    ! function(e) { e.WEB = "web", e.WX_MP = "wx_mp" }(s = t.RUNTIME || (t.RUNTIME = {})), t.useAdapters = function(e) {
                        for (var t = 0, n = u.isArray(e) ? e : [e]; t < n.length; t++) {
                            var r = n[t],
                                o = r.isMatch,
                                i = r.genAdapter,
                                s = r.runtime;
                            if (o()) return { adapter: i(), runtime: s }
                        }
                    }, t.useDefaultAdapter = function() { return { adapter: a.genAdapter(), runtime: s.WEB } }
                },
                9651: function(e, t, n) {
                    "use strict";
                    var r, o = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        i = function() {
                            return (i = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        s = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        a = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.WebRequest = t.genAdapter = void 0;
                    var u = n(1588),
                        c = n(4224),
                        f = n(2595),
                        l = function(e) {
                            function t(t) {
                                var n = e.call(this) || this,
                                    r = t.timeout,
                                    o = t.timeoutMsg,
                                    i = t.restrictedMethods;
                                return n._timeout = r || 0, n._timeoutMsg = o || "请求超时", n._restrictedMethods = i || ["get", "post", "upload", "download"], n
                            }
                            return o(t, e), t.prototype.get = function(e) { return this._request(i(i({}, e), { method: "get" }), this._restrictedMethods.includes("get")) }, t.prototype.post = function(e) { return this._request(i(i({}, e), { method: "post" }), this._restrictedMethods.includes("post")) }, t.prototype.put = function(e) { return this._request(i(i({}, e), { method: "put" })) }, t.prototype.upload = function(e) {
                                var t = e.data,
                                    n = e.file,
                                    r = e.name,
                                    o = new FormData;
                                for (var s in t) o.append(s, t[s]);
                                return o.append("key", r), o.append("file", n), this._request(i(i({}, e), { data: o, method: "post" }), this._restrictedMethods.includes("upload"))
                            }, t.prototype.download = function(e) {
                                return s(this, void 0, void 0, (function() {
                                    var t, n, r, o;
                                    return a(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return s.trys.push([0, 2, , 3]), [4, this.get(i(i({}, e), { headers: {}, responseType: "blob" }))];
                                            case 1:
                                                return t = s.sent().data, n = window.URL.createObjectURL(new Blob([t])), r = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || ""), (o = document.createElement("a")).href = n, o.setAttribute("download", r), o.style.display = "none", document.body.appendChild(o), o.click(), window.URL.revokeObjectURL(n), document.body.removeChild(o), [3, 3];
                                            case 2:
                                                return s.sent(), [3, 3];
                                            case 3:
                                                return [2, new Promise((function(t) { t({ statusCode: 200, tempFilePath: e.url }) }))]
                                        }
                                    }))
                                }))
                            }, t.prototype._request = function(e, t) {
                                var n = this;
                                void 0 === t && (t = !1);
                                var r = String(e.method).toLowerCase() || "get";
                                return new Promise((function(o) {
                                    var i, s, a = e.url,
                                        u = e.headers,
                                        l = void 0 === u ? {} : u,
                                        p = e.data,
                                        d = e.responseType,
                                        h = e.withCredentials,
                                        y = e.body,
                                        g = e.onUploadProgress,
                                        _ = c.formatUrl(f.getProtocol(), a, "get" === r ? p : {}),
                                        v = new XMLHttpRequest;
                                    for (var m in v.open(r, _), d && (v.responseType = d), l) v.setRequestHeader(m, l[m]);
                                    g && v.upload.addEventListener("progress", g), v.onreadystatechange = function() {
                                        var e = {};
                                        if (4 === v.readyState) {
                                            var t = v.getAllResponseHeaders().trim().split(/[\r\n]+/),
                                                n = {};
                                            t.forEach((function(e) {
                                                var t = e.split(": "),
                                                    r = t.shift().toLowerCase(),
                                                    o = t.join(": ");
                                                n[r] = o
                                            })), e.header = n, e.statusCode = v.status;
                                            try { e.data = "blob" === d ? v.response : JSON.parse(v.responseText) } catch (r) { e.data = "blob" === d ? v.response : v.responseText }
                                            clearTimeout(i), o(e)
                                        }
                                    }, t && n._timeout && (i = setTimeout((function() { console.warn(n._timeoutMsg), v.abort() }), n._timeout)), s = c.isFormData(p) ? p : "application/x-www-form-urlencoded" === l["content-type"] ? c.toQueryString(p) : y || (p ? JSON.stringify(p) : undefined), h && (v.withCredentials = !0), v.send(s)
                                }))
                            }, t
                        }(u.AbstractSDKRequest);
                    t.WebRequest = l, t.genAdapter = function() { return { root: window, reqClass: l, wsClass: WebSocket, localStorage: localStorage, sessionStorage: sessionStorage } }
                },
                2595: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.COMMUNITY_SITE_URL = t.IS_DEBUG_MODE = t.getProtocol = t.setProtocol = t.getSdkName = t.setSdkName = void 0;
                    var n = "@cloudbase/js-sdk";
                    t.setSdkName = function(e) { n = e }, t.getSdkName = function() { return n };
                    var r = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
                    t.setProtocol = function(e) { r = e }, t.getProtocol = function() { return r }, t.IS_DEBUG_MODE = !1, t.COMMUNITY_SITE_URL = "https://support.qq.com/products/148793"
                },
                8511: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.ERRORS = void 0, t.ERRORS = { INVALID_PARAMS: "INVALID_PARAMS", INVALID_SYNTAX: "INVALID_SYNTAX", INVALID_OPERATION: "INVALID_OPERATION", OPERATION_FAIL: "OPERATION_FAIL", NETWORK_ERROR: "NETWORK_ERROR", UNKOWN_ERROR: "UNKOWN_ERROR" }
                },
                6823: function(e, t, n) {
                    "use strict";
                    var r = Object.create ? function(e, t, n, r) { r === undefined && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, r) { r === undefined && (r = n), e[r] = t[n] },
                        o = function(e, t) { for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n) };
                    Object.defineProperty(t, "__esModule", { value: !0 }), o(n(2595), t), o(n(8511), t)
                },
                9891: function(e, t, n) {
                    "use strict";
                    var r = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        o = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.catchErrorsDecorator = void 0;
                    var i = n(4224),
                        s = n(6823),
                        a = !1;
                    "undefined" != typeof navigator && navigator.userAgent && (a = -1 !== navigator.userAgent.indexOf("Firefox"));
                    var u = a ? /(\.js\/)?__decorate(\$\d+)?<@.*\d$/ : /(\/\w+\.js\.)?__decorate(\$\d+)?\s*\(.*\)$/,
                        c = /https?\:\/\/.+\:\d*\/.*\.js\:\d+\:\d+/;

                    function f(e) {
                        var t = e.err,
                            n = e.className,
                            r = e.methodName,
                            o = e.sourceLink;
                        if (!o) return null;
                        var i, s = t.stack.split("\n"),
                            u = a ? /^catchErrorsDecorator\/<\/descriptor.value@.*\d$/ : new RegExp(n + "\\.descriptor.value\\s*\\[as\\s" + r + "\\]\\s*\\(.*\\)$"),
                            f = a ? /^catchErrorsDecorator\/<\/descriptor.value/ : new RegExp(n + "\\.descriptor.value\\s*\\[as\\s" + r + "\\]"),
                            l = s.findIndex((function(e) { return u.test(e) }));
                        if (-1 !== l) {
                            var p = s.filter((function(e, t) { return t > l }));
                            p.unshift(s[l].replace(f, n + "." + r).replace(c, o)), (i = new Error).stack = (a ? "@debugger" : "Error") + "\n" + p.join("\n")
                        }
                        return i
                    }
                    t.catchErrorsDecorator = function(e) {
                        var t = e.mode,
                            n = void 0 === t ? "async" : t,
                            a = e.customInfo,
                            l = void 0 === a ? {} : a,
                            p = e.title,
                            d = e.messages,
                            h = void 0 === d ? [] : d;
                        return function(e, t, a) {
                            if (s.IS_DEBUG_MODE) {
                                var d = l.className || e.constructor.name,
                                    y = l.methodName || t,
                                    g = a.value,
                                    _ = function(e) {
                                        var t = "",
                                            n = e.stack.split("\n"),
                                            r = n.findIndex((function(e) { return u.test(e) }));
                                        if (-1 !== r) {
                                            var o = c.exec(n[r + 1] || "");
                                            t = o ? o[0] : ""
                                        }
                                        return t
                                    }(new Error);
                                a.value = "sync" === n ? function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var n = f({ err: new Error, className: d, methodName: y, sourceLink: _ });
                                    try { return g.apply(this, e) } catch (u) {
                                        var r = u,
                                            o = u.message,
                                            s = { title: p || d + "." + y + " failed", content: [{ type: "error", body: u }] };
                                        if (o && /^\{.*\}$/.test(o)) {
                                            var a = JSON.parse(o);
                                            s.subtitle = o, a.code && (n ? (n.code = a.code, n.msg = a.msg) : (u.code = a.code, u.message = a.msg), r = n || u, s.content = h.map((function(e) { return { type: "info", body: e } })))
                                        }
                                        throw i.printGroupLog(s), r
                                    }
                                } : function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    return r(this, void 0, void 0, (function() {
                                        var t, n, r, s, a, u;
                                        return o(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    t = f({ err: new Error, className: d, methodName: y, sourceLink: _ }), o.label = 1;
                                                case 1:
                                                    return o.trys.push([1, 3, , 4]), [4, g.apply(this, e)];
                                                case 2:
                                                    return [2, o.sent()];
                                                case 3:
                                                    throw n = o.sent(), r = n, s = n.message, a = { title: p || d + "." + y + " failed", content: [{ type: "error", body: n }] }, s && /^\{.*\}$/.test(s) && (u = JSON.parse(s), a.subtitle = u, u.code && (t ? (t.code = u.code, t.message = u.msg) : (n.code = u.code, n.message = u.msg), r = t || n, a.content = h.map((function(e) { return { type: "info", body: e } })))), i.printGroupLog(a), r;
                                                case 4:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }
                            }
                        }
                    }
                },
                2647: function(e, t, n) {
                    "use strict";
                    var r = Object.create ? function(e, t, n, r) { r === undefined && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, r) { r === undefined && (r = n), e[r] = t[n] },
                        o = function(e, t) { for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n) };
                    Object.defineProperty(t, "__esModule", { value: !0 }), o(n(9891), t)
                },
                1895: function(e, t, n) {
                    "use strict";
                    var r = Object.create ? function(e, t, n, r) { r === undefined && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, r) { r === undefined && (r = n), e[r] = t[n] },
                        o = Object.create ? function(e, t) { Object.defineProperty(e, "default", { enumerable: !0, value: t }) } : function(e, t) { e["default"] = t },
                        i = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                            return o(t, e), t
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.helpers = t.utils = t.events = t.cache = t.adapters = t.constants = void 0;
                    var s = i(n(6823));
                    t.constants = s;
                    var a = i(n(1825));
                    t.adapters = a;
                    var u = i(n(2208));
                    t.cache = u;
                    var c = i(n(4047));
                    t.events = c;
                    var f = i(n(4224));
                    t.utils = f;
                    var l = i(n(2647));
                    t.helpers = l
                },
                2208: function(e, t, n) {
                    "use strict";
                    var r, o = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        i = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        s = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.CloudbaseCache = void 0;
                    var a = n(1588),
                        u = n(4224),
                        c = n(6823),
                        f = function(e) {
                            function t(t) { var n = e.call(this) || this; return n._root = t, t.tcbCacheObject || (t.tcbCacheObject = {}), n }
                            return o(t, e), t.prototype.setItem = function(e, t) { this._root.tcbCacheObject[e] = t }, t.prototype.getItem = function(e) { return this._root.tcbCacheObject[e] }, t.prototype.removeItem = function(e) { delete this._root.tcbCacheObject[e] }, t.prototype.clear = function() { delete this._root.tcbCacheObject }, t
                        }(a.AbstractStorage);

                    function l(e, t) {
                        switch (e) {
                            case "local":
                                return t.localStorage ? t.localStorage : (u.printWarn(c.ERRORS.INVALID_PARAMS, "localStorage is not supported on current platform"), new f(t.root));
                            case "none":
                                return new f(t.root);
                            case "session":
                                return t.sessionStorage ? t.sessionStorage : (u.printWarn(c.ERRORS.INVALID_PARAMS, "sessionStorage is not supported on current platform"), new f(t.root));
                            default:
                                return t.localStorage ? t.localStorage : (u.printWarn(c.ERRORS.INVALID_PARAMS, "localStorage is not supported on current platform"), new f(t.root))
                        }
                    }
                    var p = function() {
                        function e(e) {
                            this.keys = {};
                            var t = e.persistence,
                                n = e.platformInfo,
                                r = void 0 === n ? {} : n,
                                o = e.keys,
                                i = void 0 === o ? {} : o,
                                s = e.alwaysLocalKeys,
                                a = void 0 === s ? [] : s;
                            this._platformInfo = r, this._alwaysLocalKeys = a, this._storage || (this._persistence = r.adapter.primaryStorage || t, this._storage = l(this._persistence, r.adapter), this.keys = i)
                        }
                        return Object.defineProperty(e.prototype, "mode", { get: function() { return this._storage.mode || "sync" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "persistence", { get: function() { return this._persistence }, enumerable: !1, configurable: !0 }), e.prototype.updatePersistence = function(e) {
                            if ("async" !== this.mode) {
                                if (e !== this._persistence) {
                                    var t = "local" === this._persistence;
                                    this._persistence = e;
                                    var n = l(e, this._platformInfo.adapter);
                                    for (var r in this.keys) {
                                        var o = this.keys[r];
                                        if (!t || !this._alwaysLocalKeys.includes(r)) {
                                            var i = this._storage.getItem(o);
                                            u.isUndefined(i) || u.isNull(i) || (n.setItem(o, i), this._storage.removeItem(o))
                                        }
                                    }
                                    this._storage = n
                                }
                            } else u.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use updatePersistenceAsync insteed")
                        }, e.prototype.updatePersistenceAsync = function(e) {
                            return i(this, void 0, void 0, (function() {
                                var t, n, r, o, i, a, c, f;
                                return s(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (e === this._persistence) return [2];
                                            for (o in t = "local" === this._persistence, this._persistence = e, n = l(e, this._platformInfo.adapter), r = [], this.keys) r.push(o);
                                            i = 0, s.label = 1;
                                        case 1:
                                            return i < r.length ? (a = r[i], c = this.keys[a], t && this._alwaysLocalKeys.includes(a) ? [3, 4] : [4, this._storage.getItem(c)]) : [3, 5];
                                        case 2:
                                            return f = s.sent(), u.isUndefined(f) || u.isNull(f) ? [3, 4] : (n.setItem(c, f), [4, this._storage.removeItem(c)]);
                                        case 3:
                                            s.sent(), s.label = 4;
                                        case 4:
                                            return i++, [3, 1];
                                        case 5:
                                            return this._storage = n, [2]
                                    }
                                }))
                            }))
                        }, e.prototype.setStore = function(e, t, n) {
                            if ("async" !== this.mode) {
                                if (this._storage) try {
                                    var r = { version: n || "localCachev1", content: t };
                                    this._storage.setItem(e, JSON.stringify(r))
                                } catch (o) { throw new Error(JSON.stringify({ code: c.ERRORS.OPERATION_FAIL, msg: "[" + c.getSdkName() + "][" + c.ERRORS.OPERATION_FAIL + "]setStore failed", info: o })) }
                            } else u.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use setStoreAsync insteed")
                        }, e.prototype.setStoreAsync = function(e, t, n) {
                            return i(this, void 0, void 0, (function() {
                                var r;
                                return s(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this._storage) return [2];
                                            o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), r = { version: n || "localCachev1", content: t }, [4, this._storage.setItem(e, JSON.stringify(r))];
                                        case 2:
                                            return o.sent(), [3, 4];
                                        case 3:
                                            return o.sent(), [2];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.prototype.getStore = function(e, t) {
                            var n;
                            if ("async" !== this.mode) {
                                try { if ("undefined" != typeof process && (null === (n = process.env) || void 0 === n ? void 0 : n.tcb_token)) return process.env.tcb_token; if (!this._storage) return "" } catch (o) { return "" }
                                t = t || "localCachev1";
                                var r = this._storage.getItem(e);
                                return r && r.indexOf(t) >= 0 ? JSON.parse(r).content : ""
                            }
                            u.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use getStoreAsync insteed")
                        }, e.prototype.getStoreAsync = function(e, t) {
                            var n;
                            return i(this, void 0, void 0, (function() {
                                var r;
                                return s(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            try { if ("undefined" != typeof process && (null === (n = process.env) || void 0 === n ? void 0 : n.tcb_token)) return [2, process.env.tcb_token]; if (!this._storage) return [2, ""] } catch (i) { return [2, ""] }
                                            return t = t || "localCachev1", [4, this._storage.getItem(e)];
                                        case 1:
                                            return (r = o.sent()) && r.indexOf(t) >= 0 ? [2, JSON.parse(r).content] : [2, ""]
                                    }
                                }))
                            }))
                        }, e.prototype.removeStore = function(e) { "async" !== this.mode ? this._storage.removeItem(e) : u.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use removeStoreAsync insteed") }, e.prototype.removeStoreAsync = function(e) {
                            return i(this, void 0, void 0, (function() {
                                return s(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this._storage.removeItem(e)];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        }, e
                    }();
                    t.CloudbaseCache = p
                },
                4047: function(e, t, n) {
                    "use strict";
                    var r, o = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        i = function() {
                            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                            var r = Array(e),
                                o = 0;
                            for (t = 0; t < n; t++)
                                for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                            return r
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.removeEventListener = t.activateEvent = t.addEventListener = t.CloudbaseEventEmitter = t.IErrorEvent = t.CloudbaseEvent = void 0;
                    var s = n(4224),
                        a = function(e, t) { this.data = t || null, this.name = e };
                    t.CloudbaseEvent = a;
                    var u = function(e) {
                        function t(t, n) { var r = e.call(this, "error", { error: t, data: n }) || this; return r.error = t, r }
                        return o(t, e), t
                    }(a);
                    t.IErrorEvent = u;
                    var c = function() {
                        function e() { this._listeners = {} }
                        return e.prototype.on = function(e, t) { return function(e, t, n) { n[e] = n[e] || [], n[e].push(t) }(e, t, this._listeners), this }, e.prototype.off = function(e, t) { return function(e, t, n) { if (null == n ? void 0 : n[e]) { var r = n[e].indexOf(t); - 1 !== r && n[e].splice(r, 1) } }(e, t, this._listeners), this }, e.prototype.fire = function(e, t) {
                            if (s.isInstanceOf(e, u)) return console.error(e.error), this;
                            var n = s.isString(e) ? new a(e, t || {}) : e,
                                r = n.name;
                            if (this._listens(r)) { n.target = this; for (var o = 0, c = this._listeners[r] ? i(this._listeners[r]) : []; o < c.length; o++) c[o].call(this, n) }
                            return this
                        }, e.prototype._listens = function(e) { return this._listeners[e] && this._listeners[e].length > 0 }, e
                    }();
                    t.CloudbaseEventEmitter = c;
                    var f = new c;
                    t.addEventListener = function(e, t) { f.on(e, t) }, t.activateEvent = function(e, t) { void 0 === t && (t = {}), f.fire(e, t) }, t.removeEventListener = function(e, t) { f.off(e, t) }
                },
                4224: function(e, t, n) {
                    "use strict";
                    var r = function(e) { return e && e.__esModule ? e : { "default": e } };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.transformPhone = t.sleep = t.printGroupLog = t.throwError = t.printInfo = t.printError = t.printWarn = t.execCallback = t.createPromiseCallback = t.removeParam = t.getHash = t.getQuery = t.toQueryString = t.createSign = t.formatUrl = t.genSeqId = t.isFormData = t.isInstanceOf = t.isNull = t.isPalinObject = t.isUndefined = t.isString = t.isArray = void 0;
                    var o = r(n(6443)),
                        i = r(n(4544)),
                        s = r(n(1801)),
                        a = n(6823);

                    function u(e) { var t = i["default"].stringify(e); return t = (t = (t = t.replace(/=+$/, "")).replace(/\+/g, "-")).replace(/\//g, "_") }
                    t.isArray = function(e) { return "[object Array]" === Object.prototype.toString.call(e) }, t.isString = function(e) { return "string" == typeof e }, t.isUndefined = function(e) { return void 0 === e }, t.isPalinObject = function(e) { return "[object Object]" === Object.prototype.toString.call(e) }, t.isNull = function(e) { return "[object Null]" === Object.prototype.toString.call(e) }, t.isInstanceOf = function(e, t) { return e instanceof t }, t.isFormData = function(e) { return "[object FormData]" === Object.prototype.toString.call(e) }, t.genSeqId = function() { return Math.random().toString(16).slice(2) }, t.formatUrl = function(e, t, n) {
                        void 0 === n && (n = {});
                        var r = /\?/.test(t),
                            o = "";
                        for (var i in n) "" === o ? !r && (t += "?") : o += "&", o += i + "=" + encodeURIComponent(n[i]);
                        return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t
                    }, t.createSign = function(e, t) { var n = u(s["default"].parse(JSON.stringify({ alg: "HS256", typ: "JWT" }))) + "." + u(s["default"].parse(JSON.stringify(e))); return n + "." + u(o["default"](n, t)) }, t.toQueryString = function(e) { void 0 === e && (e = {}); var t = []; for (var n in e) t.push(n + "=" + encodeURIComponent(e[n])); return t.join("&") }, t.getQuery = function(e, t) {
                        if ("undefined" == typeof window) return !1;
                        var n = t || window.location.search,
                            r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                            o = n.substr(n.indexOf("?") + 1).match(r);
                        return null != o ? o[2] : ""
                    }, t.getHash = function(e) { if ("undefined" == typeof window) return ""; var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)")); return t ? t[1] : "" }, t.removeParam = function(e, t) {
                        var n = t.split("?")[0],
                            r = [],
                            o = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
                        if ("" !== o) {
                            for (var i = (r = o.split("&")).length - 1; i >= 0; i -= 1) r[i].split("=")[0] === e && r.splice(i, 1);
                            n = n + "?" + r.join("&")
                        }
                        return n
                    }, t.createPromiseCallback = function() {
                        var e;
                        if (!Promise) {
                            (e = function() {}).promise = {};
                            var t = function() { throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.') };
                            return Object.defineProperty(e.promise, "then", { get: t }), Object.defineProperty(e.promise, "catch", { get: t }), e
                        }
                        var n = new Promise((function(t, n) { e = function(e, r) { return e ? n(e) : t(r) } }));
                        return e.promise = n, e
                    }, t.execCallback = function(e, t, n) { if (void 0 === n && (n = null), e && "function" == typeof e) return e(t, n); if (t) throw t; return n }, t.printWarn = function(e, t) { console.warn("[" + a.getSdkName() + "][" + e + "]:" + t) }, t.printError = function(e, t) { console.error({ code: e, msg: "[" + a.getSdkName() + "][" + e + "]:" + t }) }, t.printInfo = function(e, t) { console.log("[" + a.getSdkName() + "][" + e + "]:" + t) }, t.throwError = function(e, t) { throw new Error(JSON.stringify({ code: e, msg: "[" + a.getSdkName() + "][" + e + "]:" + t })) }, t.printGroupLog = function(e) {
                        var t = e.title,
                            n = e.subtitle,
                            r = void 0 === n ? "" : n,
                            o = e.content,
                            i = void 0 === o ? [] : o,
                            s = e.printTrace,
                            a = void 0 !== s && s,
                            u = e.collapsed;
                        void 0 !== u && u ? console.groupCollapsed(t, r) : console.group(t, r);
                        for (var c = 0, f = i; c < f.length; c++) {
                            var l = f[c],
                                p = l.type,
                                d = l.body;
                            switch (p) {
                                case "info":
                                    console.log(d);
                                    break;
                                case "warn":
                                    console.warn(d);
                                    break;
                                case "error":
                                    console.error(d)
                            }
                        }
                        a && console.trace("stack trace:"), console.groupEnd()
                    }, t.sleep = function(e) { return void 0 === e && (e = 0), new Promise((function(t) { return setTimeout(t, e) })) }, t.transformPhone = function(e) { return "+86" + e }
                },
                7567: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.setInternalBufferSize = t.serializeWithBufferAndIndex = t.serialize = t.deserializeStream = t.deserialize = t.calculateObjectSize = t.Timestamp = t.ObjectId = t.ObjectID = t.MinKey = t.MaxKey = t.Map = t.LongWithoutOverridesClass = t.Long = t.Int32 = t.EJSON = t.Double = t.Decimal128 = t.DBRef = t.Code = t.Binary = t.BSON_INT64_MIN = t.BSON_INT64_MAX = t.BSON_INT32_MIN = t.BSON_INT32_MAX = t.BSON_DATA_UNDEFINED = t.BSON_DATA_TIMESTAMP = t.BSON_DATA_SYMBOL = t.BSON_DATA_STRING = t.BSON_DATA_REGEXP = t.BSON_DATA_OID = t.BSON_DATA_OBJECT = t.BSON_DATA_NUMBER = t.BSON_DATA_NULL = t.BSON_DATA_MIN_KEY = t.BSON_DATA_MAX_KEY = t.BSON_DATA_LONG = t.BSON_DATA_INT = t.BSON_DATA_DECIMAL128 = t.BSON_DATA_DBPOINTER = t.BSON_DATA_DATE = t.BSON_DATA_CODE_W_SCOPE = t.BSON_DATA_CODE = t.BSON_DATA_BOOLEAN = t.BSON_DATA_BINARY = t.BSON_DATA_ARRAY = t.BSON_BINARY_SUBTYPE_UUID_NEW = t.BSON_BINARY_SUBTYPE_UUID = t.BSON_BINARY_SUBTYPE_USER_DEFINED = t.BSON_BINARY_SUBTYPE_MD5 = t.BSON_BINARY_SUBTYPE_FUNCTION = t.BSON_BINARY_SUBTYPE_DEFAULT = t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = t.BSONSymbol = t.BSONRegExp = t["default"] = void 0;
                    var o = r(n(3988)),
                        i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof n.g ? n.g : "undefined" != typeof self ? self : {};

                    function s(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e }

                    function a(e, t) { return e(t = { exports: {} }, t.exports), t.exports }
                    for (var u = function(e) {
                            var t = _(e),
                                n = t[0],
                                r = t[1];
                            return 3 * (n + r) / 4 - r
                        }, c = function(e) {
                            var t, n, r = _(e),
                                o = r[0],
                                i = r[1],
                                s = new d(function(e, t, n) { return 3 * (t + n) / 4 - n }(0, o, i)),
                                a = 0,
                                u = i > 0 ? o - 4 : o;
                            for (n = 0; n < u; n += 4) t = p[e.charCodeAt(n)] << 18 | p[e.charCodeAt(n + 1)] << 12 | p[e.charCodeAt(n + 2)] << 6 | p[e.charCodeAt(n + 3)], s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = 255 & t;
                            return 2 === i && (t = p[e.charCodeAt(n)] << 2 | p[e.charCodeAt(n + 1)] >> 4, s[a++] = 255 & t), 1 === i && (t = p[e.charCodeAt(n)] << 10 | p[e.charCodeAt(n + 1)] << 4 | p[e.charCodeAt(n + 2)] >> 2, s[a++] = t >> 8 & 255, s[a++] = 255 & t), s
                        }, f = function(e) { for (var t, n = e.length, r = n % 3, o = [], i = 16383, s = 0, a = n - r; s < a; s += i) o.push(v(e, s, s + i > a ? a : s + i)); return 1 === r ? (t = e[n - 1], o.push(l[t >> 2] + l[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o.push(l[t >> 10] + l[t >> 4 & 63] + l[t << 2 & 63] + "=")), o.join("") }, l = [], p = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", y = 0, g = h.length; y < g; ++y) l[y] = h[y], p[h.charCodeAt(y)] = y;

                    function _(e) { var t = e.length; if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var n = e.indexOf("="); return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4] }

                    function v(e, t, n) { for (var r, o, i = [], s = t; s < n; s += 3) r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), i.push(l[(o = r) >> 18 & 63] + l[o >> 12 & 63] + l[o >> 6 & 63] + l[63 & o]); return i.join("") }
                    p["-".charCodeAt(0)] = 62, p["_".charCodeAt(0)] = 63;
                    var m = { byteLength: u, toByteArray: c, fromByteArray: f },
                        b = function(e, t, n, r, o) {
                            var i, s, a = 8 * o - r - 1,
                                u = (1 << a) - 1,
                                c = u >> 1,
                                f = -7,
                                l = n ? o - 1 : 0,
                                p = n ? -1 : 1,
                                d = e[t + l];
                            for (l += p, i = d & (1 << -f) - 1, d >>= -f, f += a; f > 0; i = 256 * i + e[t + l], l += p, f -= 8);
                            for (s = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; s = 256 * s + e[t + l], l += p, f -= 8);
                            if (0 === i) i = 1 - c;
                            else {
                                if (i === u) return s ? NaN : (d ? -1 : 1) * Infinity;
                                s += Math.pow(2, r), i -= c
                            }
                            return (d ? -1 : 1) * s * Math.pow(2, i - r)
                        },
                        O = function(e, t, n, r, o, i) {
                            var s, a, u, c = 8 * i - o - 1,
                                f = (1 << c) - 1,
                                l = f >> 1,
                                p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                d = r ? 0 : i - 1,
                                h = r ? 1 : -1,
                                y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                            for (t = Math.abs(t), isNaN(t) || t === Infinity ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; e[n + d] = 255 & a, d += h, a /= 256, o -= 8);
                            for (s = s << o | a, c += o; c > 0; e[n + d] = 255 & s, d += h, s /= 256, c -= 8);
                            e[n + d - h] |= 128 * y
                        },
                        A = a((function(e, t) {
                            var n = "function" == typeof Symbol && "function" == typeof Symbol["for"] ? Symbol["for"]("nodejs.util.inspect.custom") : null;
                            t.Buffer = i, t.SlowBuffer = function(e) { return +e != e && (e = 0), i.alloc(+e) }, t.INSPECT_MAX_BYTES = 50;
                            var r = 2147483647;

                            function o(e) { if (e > r) throw new RangeError('The value "' + e + '" is invalid for option "size"'); var t = new Uint8Array(e); return Object.setPrototypeOf(t, i.prototype), t }

                            function i(e, t, n) { if ("number" == typeof e) { if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number'); return u(e) } return s(e, t, n) }

                            function s(e, t, n) {
                                if ("string" == typeof e) return function(e, t) {
                                    if ("string" == typeof t && "" !== t || (t = "utf8"), !i.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                                    var n = 0 | p(e, t),
                                        r = o(n),
                                        s = r.write(e, t);
                                    return s !== n && (r = r.slice(0, s)), r
                                }(e, t);
                                if (ArrayBuffer.isView(e)) return c(e);
                                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers["typeof"](e));
                                if (q(e, ArrayBuffer) || e && q(e.buffer, ArrayBuffer)) return f(e, t, n);
                                if ("undefined" != typeof SharedArrayBuffer && (q(e, SharedArrayBuffer) || e && q(e.buffer, SharedArrayBuffer))) return f(e, t, n);
                                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                                var r = e.valueOf && e.valueOf();
                                if (null != r && r !== e) return i.from(r, t, n);
                                var s = function(e) {
                                    if (i.isBuffer(e)) {
                                        var t = 0 | l(e.length),
                                            n = o(t);
                                        return 0 === n.length || e.copy(n, 0, 0, t), n
                                    }
                                    return e.length !== undefined ? "number" != typeof e.length || F(e.length) ? o(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0
                                }(e);
                                if (s) return s;
                                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return i.from(e[Symbol.toPrimitive]("string"), t, n);
                                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers["typeof"](e))
                            }

                            function a(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be of type number'); if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"') }

                            function u(e) { return a(e), o(e < 0 ? 0 : 0 | l(e)) }

                            function c(e) { for (var t = e.length < 0 ? 0 : 0 | l(e.length), n = o(t), r = 0; r < t; r += 1) n[r] = 255 & e[r]; return n }

                            function f(e, t, n) { if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds'); if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds'); var r; return r = t === undefined && n === undefined ? new Uint8Array(e) : n === undefined ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, i.prototype), r }

                            function l(e) { if (e >= r) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes"); return 0 | e }

                            function p(e, t) {
                                if (i.isBuffer(e)) return e.length;
                                if (ArrayBuffer.isView(e) || q(e, ArrayBuffer)) return e.byteLength;
                                if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + babelHelpers["typeof"](e));
                                var n = e.length,
                                    r = arguments.length > 2 && !0 === arguments[2];
                                if (!r && 0 === n) return 0;
                                for (var o = !1;;) switch (t) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                        return n;
                                    case "utf8":
                                    case "utf-8":
                                        return j(e).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return 2 * n;
                                    case "hex":
                                        return n >>> 1;
                                    case "base64":
                                        return Y(e).length;
                                    default:
                                        if (o) return r ? -1 : j(e).length;
                                        t = ("" + t).toLowerCase(), o = !0
                                }
                            }

                            function d(e, t, n) {
                                var r = !1;
                                if ((t === undefined || t < 0) && (t = 0), t > this.length) return "";
                                if ((n === undefined || n > this.length) && (n = this.length), n <= 0) return "";
                                if ((n >>>= 0) <= (t >>>= 0)) return "";
                                for (e || (e = "utf8");;) switch (e) {
                                    case "hex":
                                        return L(this, t, n);
                                    case "utf8":
                                    case "utf-8":
                                        return T(this, t, n);
                                    case "ascii":
                                        return B(this, t, n);
                                    case "latin1":
                                    case "binary":
                                        return P(this, t, n);
                                    case "base64":
                                        return N(this, t, n);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return D(this, t, n);
                                    default:
                                        if (r) throw new TypeError("Unknown encoding: " + e);
                                        e = (e + "").toLowerCase(), r = !0
                                }
                            }

                            function h(e, t, n) {
                                var r = e[t];
                                e[t] = e[n], e[n] = r
                            }

                            function y(e, t, n, r, o) {
                                if (0 === e.length) return -1;
                                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), F(n = +n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                                    if (o) return -1;
                                    n = e.length - 1
                                } else if (n < 0) {
                                    if (!o) return -1;
                                    n = 0
                                }
                                if ("string" == typeof t && (t = i.from(t, r)), i.isBuffer(t)) return 0 === t.length ? -1 : g(e, t, n, r, o);
                                if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : g(e, [t], n, r, o);
                                throw new TypeError("val must be string, number or Buffer")
                            }

                            function g(e, t, n, r, o) {
                                var i, s = 1,
                                    a = e.length,
                                    u = t.length;
                                if (r !== undefined && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                    if (e.length < 2 || t.length < 2) return -1;
                                    s = 2, a /= 2, u /= 2, n /= 2
                                }

                                function c(e, t) { return 1 === s ? e[t] : e.readUInt16BE(t * s) }
                                if (o) {
                                    var f = -1;
                                    for (i = n; i < a; i++)
                                        if (c(e, i) === c(t, -1 === f ? 0 : i - f)) { if (-1 === f && (f = i), i - f + 1 === u) return f * s } else -1 !== f && (i -= i - f), f = -1
                                } else
                                    for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
                                        for (var l = !0, p = 0; p < u; p++)
                                            if (c(e, i + p) !== c(t, p)) { l = !1; break }
                                        if (l) return i
                                    }
                                return -1
                            }

                            function _(e, t, n, r) {
                                n = Number(n) || 0;
                                var o = e.length - n;
                                r ? (r = Number(r)) > o && (r = o) : r = o;
                                var i = t.length;
                                r > i / 2 && (r = i / 2);
                                for (var s = 0; s < r; ++s) {
                                    var a = parseInt(t.substr(2 * s, 2), 16);
                                    if (F(a)) return s;
                                    e[n + s] = a
                                }
                                return s
                            }

                            function v(e, t, n, r) { return $(j(t, e.length - n), e, n, r) }

                            function A(e, t, n, r) { return $(function(e) { for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n)); return t }(t), e, n, r) }

                            function w(e, t, n, r) { return A(e, t, n, r) }

                            function S(e, t, n, r) { return $(Y(t), e, n, r) }

                            function E(e, t, n, r) { return $(function(e, t) { for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = (n = e.charCodeAt(s)) >> 8, o = n % 256, i.push(o), i.push(r); return i }(t, e.length - n), e, n, r) }

                            function N(e, t, n) { return 0 === t && n === e.length ? m.fromByteArray(e) : m.fromByteArray(e.slice(t, n)) }

                            function T(e, t, n) {
                                n = Math.min(e.length, n);
                                for (var r = [], o = t; o < n;) {
                                    var i, s, a, u, c = e[o],
                                        f = null,
                                        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                    if (o + l <= n) switch (l) {
                                        case 1:
                                            c < 128 && (f = c);
                                            break;
                                        case 2:
                                            128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (f = u);
                                            break;
                                        case 3:
                                            i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
                                            break;
                                        case 4:
                                            i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u)
                                    }
                                    null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), o += l
                                }
                                return function(e) { var t = e.length; if (t <= I) return String.fromCharCode.apply(String, e); for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += I)); return n }(r)
                            }
                            t.kMaxLength = r, i.TYPED_ARRAY_SUPPORT = function() {
                                try {
                                    var e = new Uint8Array(1),
                                        t = { foo: function() { return 42 } };
                                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                                } catch (n) { return !1 }
                            }(), i.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(i.prototype, "parent", { enumerable: !0, get: function() { return i.isBuffer(this) ? this.buffer : undefined } }), Object.defineProperty(i.prototype, "offset", { enumerable: !0, get: function() { return i.isBuffer(this) ? this.byteOffset : undefined } }), i.poolSize = 8192, i.from = function(e, t, n) { return s(e, t, n) }, Object.setPrototypeOf(i.prototype, Uint8Array.prototype), Object.setPrototypeOf(i, Uint8Array), i.alloc = function(e, t, n) { return function(e, t, n) { return a(e), e <= 0 ? o(e) : t !== undefined ? "string" == typeof n ? o(e).fill(t, n) : o(e).fill(t) : o(e) }(e, t, n) }, i.allocUnsafe = function(e) { return u(e) }, i.allocUnsafeSlow = function(e) { return u(e) }, i.isBuffer = function(e) { return null != e && !0 === e._isBuffer && e !== i.prototype }, i.compare = function(e, t) {
                                if (q(e, Uint8Array) && (e = i.from(e, e.offset, e.byteLength)), q(t, Uint8Array) && (t = i.from(t, t.offset, t.byteLength)), !i.isBuffer(e) || !i.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                if (e === t) return 0;
                                for (var n = e.length, r = t.length, o = 0, s = Math.min(n, r); o < s; ++o)
                                    if (e[o] !== t[o]) { n = e[o], r = t[o]; break }
                                return n < r ? -1 : r < n ? 1 : 0
                            }, i.isEncoding = function(e) {
                                switch (String(e).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                    case "base64":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }, i.concat = function(e, t) {
                                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                                if (0 === e.length) return i.alloc(0);
                                var n;
                                if (t === undefined)
                                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                                var r = i.allocUnsafe(t),
                                    o = 0;
                                for (n = 0; n < e.length; ++n) {
                                    var s = e[n];
                                    if (q(s, Uint8Array) && (s = i.from(s)), !i.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                                    s.copy(r, o), o += s.length
                                }
                                return r
                            }, i.byteLength = p, i.prototype._isBuffer = !0, i.prototype.swap16 = function() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) h(this, t, t + 1); return this }, i.prototype.swap32 = function() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) h(this, t, t + 3), h(this, t + 1, t + 2); return this }, i.prototype.swap64 = function() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) h(this, t, t + 7), h(this, t + 1, t + 6), h(this, t + 2, t + 5), h(this, t + 3, t + 4); return this }, i.prototype.toString = function() { var e = this.length; return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : d.apply(this, arguments) }, i.prototype.toLocaleString = i.prototype.toString, i.prototype.equals = function(e) { if (!i.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === i.compare(this, e) }, i.prototype.inspect = function() {
                                var e = "",
                                    n = t.INSPECT_MAX_BYTES;
                                return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
                            }, n && (i.prototype[n] = i.prototype.inspect), i.prototype.compare = function(e, t, n, r, o) {
                                if (q(e, Uint8Array) && (e = i.from(e, e.offset, e.byteLength)), !i.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + babelHelpers["typeof"](e));
                                if (t === undefined && (t = 0), n === undefined && (n = e ? e.length : 0), r === undefined && (r = 0), o === undefined && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                                if (r >= o && t >= n) return 0;
                                if (r >= o) return -1;
                                if (t >= n) return 1;
                                if (this === e) return 0;
                                for (var s = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), u = Math.min(s, a), c = this.slice(r, o), f = e.slice(t, n), l = 0; l < u; ++l)
                                    if (c[l] !== f[l]) { s = c[l], a = f[l]; break }
                                return s < a ? -1 : a < s ? 1 : 0
                            }, i.prototype.includes = function(e, t, n) { return -1 !== this.indexOf(e, t, n) }, i.prototype.indexOf = function(e, t, n) { return y(this, e, t, n, !0) }, i.prototype.lastIndexOf = function(e, t, n) { return y(this, e, t, n, !1) }, i.prototype.write = function(e, t, n, r) {
                                if (t === undefined) r = "utf8", n = this.length, t = 0;
                                else if (n === undefined && "string" == typeof t) r = t, n = this.length, t = 0;
                                else {
                                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                    t >>>= 0, isFinite(n) ? (n >>>= 0, r === undefined && (r = "utf8")) : (r = n, n = undefined)
                                }
                                var o = this.length - t;
                                if ((n === undefined || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                                r || (r = "utf8");
                                for (var i = !1;;) switch (r) {
                                    case "hex":
                                        return _(this, e, t, n);
                                    case "utf8":
                                    case "utf-8":
                                        return v(this, e, t, n);
                                    case "ascii":
                                        return A(this, e, t, n);
                                    case "latin1":
                                    case "binary":
                                        return w(this, e, t, n);
                                    case "base64":
                                        return S(this, e, t, n);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return E(this, e, t, n);
                                    default:
                                        if (i) throw new TypeError("Unknown encoding: " + r);
                                        r = ("" + r).toLowerCase(), i = !0
                                }
                            }, i.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
                            var I = 4096;

                            function B(e, t, n) {
                                var r = "";
                                n = Math.min(e.length, n);
                                for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
                                return r
                            }

                            function P(e, t, n) {
                                var r = "";
                                n = Math.min(e.length, n);
                                for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
                                return r
                            }

                            function L(e, t, n) {
                                var r = e.length;
                                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                                for (var o = "", i = t; i < n; ++i) o += G[e[i]];
                                return o
                            }

                            function D(e, t, n) { for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o }

                            function R(e, t, n) { if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint"); if (e + t > n) throw new RangeError("Trying to access beyond buffer length") }

                            function M(e, t, n, r, o, s) { if (!i.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > o || t < s) throw new RangeError('"value" argument is out of bounds'); if (n + r > e.length) throw new RangeError("Index out of range") }

                            function C(e, t, n, r, o, i) { if (n + r > e.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

                            function x(e, t, n, r, o) { return t = +t, n >>>= 0, o || C(e, 0, n, 4), O(e, t, n, r, 23, 4), n + 4 }

                            function k(e, t, n, r, o) { return t = +t, n >>>= 0, o || C(e, 0, n, 8), O(e, t, n, r, 52, 8), n + 8 }
                            i.prototype.slice = function(e, t) {
                                var n = this.length;
                                (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = t === undefined ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                                var r = this.subarray(e, t);
                                return Object.setPrototypeOf(r, i.prototype), r
                            }, i.prototype.readUIntLE = function(e, t, n) { e >>>= 0, t >>>= 0, n || R(e, t, this.length); for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o; return r }, i.prototype.readUIntBE = function(e, t, n) { e >>>= 0, t >>>= 0, n || R(e, t, this.length); for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o; return r }, i.prototype.readUInt8 = function(e, t) { return e >>>= 0, t || R(e, 1, this.length), this[e] }, i.prototype.readUInt16LE = function(e, t) { return e >>>= 0, t || R(e, 2, this.length), this[e] | this[e + 1] << 8 }, i.prototype.readUInt16BE = function(e, t) { return e >>>= 0, t || R(e, 2, this.length), this[e] << 8 | this[e + 1] }, i.prototype.readUInt32LE = function(e, t) { return e >>>= 0, t || R(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, i.prototype.readUInt32BE = function(e, t) { return e >>>= 0, t || R(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, i.prototype.readIntLE = function(e, t, n) { e >>>= 0, t >>>= 0, n || R(e, t, this.length); for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o; return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r }, i.prototype.readIntBE = function(e, t, n) { e >>>= 0, t >>>= 0, n || R(e, t, this.length); for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o; return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i }, i.prototype.readInt8 = function(e, t) { return e >>>= 0, t || R(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, i.prototype.readInt16LE = function(e, t) { e >>>= 0, t || R(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n }, i.prototype.readInt16BE = function(e, t) { e >>>= 0, t || R(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n }, i.prototype.readInt32LE = function(e, t) { return e >>>= 0, t || R(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, i.prototype.readInt32BE = function(e, t) { return e >>>= 0, t || R(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, i.prototype.readFloatLE = function(e, t) { return e >>>= 0, t || R(e, 4, this.length), b(this, e, !0, 23, 4) }, i.prototype.readFloatBE = function(e, t) { return e >>>= 0, t || R(e, 4, this.length), b(this, e, !1, 23, 4) }, i.prototype.readDoubleLE = function(e, t) { return e >>>= 0, t || R(e, 8, this.length), b(this, e, !0, 52, 8) }, i.prototype.readDoubleBE = function(e, t) { return e >>>= 0, t || R(e, 8, this.length), b(this, e, !1, 52, 8) }, i.prototype.writeUIntLE = function(e, t, n, r) {
                                e = +e, t >>>= 0, n >>>= 0, r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                                var o = 1,
                                    i = 0;
                                for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
                                return t + n
                            }, i.prototype.writeUIntBE = function(e, t, n, r) {
                                e = +e, t >>>= 0, n >>>= 0, r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                                var o = n - 1,
                                    i = 1;
                                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
                                return t + n
                            }, i.prototype.writeUInt8 = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1 }, i.prototype.writeUInt16LE = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, i.prototype.writeUInt16BE = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, i.prototype.writeUInt32LE = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4 }, i.prototype.writeUInt32BE = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, i.prototype.writeIntLE = function(e, t, n, r) {
                                if (e = +e, t >>>= 0, !r) {
                                    var o = Math.pow(2, 8 * n - 1);
                                    M(this, e, t, n, o - 1, -o)
                                }
                                var i = 0,
                                    s = 1,
                                    a = 0;
                                for (this[t] = 255 & e; ++i < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                                return t + n
                            }, i.prototype.writeIntBE = function(e, t, n, r) {
                                if (e = +e, t >>>= 0, !r) {
                                    var o = Math.pow(2, 8 * n - 1);
                                    M(this, e, t, n, o - 1, -o)
                                }
                                var i = n - 1,
                                    s = 1,
                                    a = 0;
                                for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                                return t + n
                            }, i.prototype.writeInt8 = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, i.prototype.writeInt16LE = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, i.prototype.writeInt16BE = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, i.prototype.writeInt32LE = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4 }, i.prototype.writeInt32BE = function(e, t, n) { return e = +e, t >>>= 0, n || M(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, i.prototype.writeFloatLE = function(e, t, n) { return x(this, e, t, !0, n) }, i.prototype.writeFloatBE = function(e, t, n) { return x(this, e, t, !1, n) }, i.prototype.writeDoubleLE = function(e, t, n) { return k(this, e, t, !0, n) }, i.prototype.writeDoubleBE = function(e, t, n) { return k(this, e, t, !1, n) }, i.prototype.copy = function(e, t, n, r) {
                                if (!i.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                                if (0 === e.length || 0 === this.length) return 0;
                                if (t < 0) throw new RangeError("targetStart out of bounds");
                                if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                                var o = r - n;
                                if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
                                else if (this === e && n < t && t < r)
                                    for (var s = o - 1; s >= 0; --s) e[s + t] = this[s + n];
                                else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
                                return o
                            }, i.prototype.fill = function(e, t, n, r) {
                                if ("string" == typeof e) {
                                    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), r !== undefined && "string" != typeof r) throw new TypeError("encoding must be a string");
                                    if ("string" == typeof r && !i.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                                    if (1 === e.length) {
                                        var o = e.charCodeAt(0);
                                        ("utf8" === r && o < 128 || "latin1" === r) && (e = o)
                                    }
                                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                                if (n <= t) return this;
                                var s;
                                if (t >>>= 0, n = n === undefined ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                                    for (s = t; s < n; ++s) this[s] = e;
                                else {
                                    var a = i.isBuffer(e) ? e : i.from(e, r),
                                        u = a.length;
                                    if (0 === u) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                                    for (s = 0; s < n - t; ++s) this[s + t] = a[s % u]
                                }
                                return this
                            };
                            var U = /[^+/0-9A-Za-z-_]/g;

                            function j(e, t) {
                                var n;
                                t = t || Infinity;
                                for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
                                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                                        if (!o) {
                                            if (n > 56319) {
                                                (t -= 3) > -1 && i.push(239, 191, 189);
                                                continue
                                            }
                                            if (s + 1 === r) {
                                                (t -= 3) > -1 && i.push(239, 191, 189);
                                                continue
                                            }
                                            o = n;
                                            continue
                                        }
                                        if (n < 56320) {
                                            (t -= 3) > -1 && i.push(239, 191, 189), o = n;
                                            continue
                                        }
                                        n = 65536 + (o - 55296 << 10 | n - 56320)
                                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                                    if (o = null, n < 128) {
                                        if ((t -= 1) < 0) break;
                                        i.push(n)
                                    } else if (n < 2048) {
                                        if ((t -= 2) < 0) break;
                                        i.push(n >> 6 | 192, 63 & n | 128)
                                    } else if (n < 65536) {
                                        if ((t -= 3) < 0) break;
                                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                    } else {
                                        if (!(n < 1114112)) throw new Error("Invalid code point");
                                        if ((t -= 4) < 0) break;
                                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                    }
                                }
                                return i
                            }

                            function Y(e) { return m.toByteArray(function(e) { if ((e = (e = e.split("=")[0]).trim().replace(U, "")).length < 2) return ""; for (; e.length % 4 != 0;) e += "="; return e }(e)) }

                            function $(e, t, n, r) { for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o]; return o }

                            function q(e, t) { return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name }

                            function F(e) { return e != e }
                            var G = function() {
                                for (var e = "0123456789abcdef", t = new Array(256), n = 0; n < 16; ++n)
                                    for (var r = 16 * n, o = 0; o < 16; ++o) t[r + o] = e[n] + e[o];
                                return t
                            }()
                        })),
                        w = (A.Buffer, A.SlowBuffer, A.INSPECT_MAX_BYTES, A.kMaxLength, function(e, t) {
                            return (w = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }),
                        S = function() {
                            return (S = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        };

                    function E(e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            r = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }

                    function N(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r, o, i = n.call(e),
                            s = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                        } catch (a) { o = { error: a } } finally { try { r && !r.done && (n = i["return"]) && n.call(i) } finally { if (o) throw o.error } }
                        return s
                    }

                    function T(e) { return this instanceof T ? (this.v = e, this) : new T(e) }
                    var I = Object.freeze({
                            __proto__: null,
                            __extends: function(e, t) {
                                function n() { this.constructor = e }
                                w(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                            },
                            get __assign() { return S },
                            __rest: function(e, t) { var n = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) { var o = 0; for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]) } return n },
                            __decorate: function(e, t, n, r) {
                                var o, i = arguments.length,
                                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                                if ("object" === ("undefined" == typeof Reflect ? "undefined" : babelHelpers["typeof"](Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                                return i > 3 && s && Object.defineProperty(t, n, s), s
                            },
                            __param: function(e, t) { return function(n, r) { t(n, r, e) } },
                            __metadata: function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : babelHelpers["typeof"](Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                            __awaiter: function(e, t, n, r) {
                                return new(n || (n = Promise))((function(o, i) {
                                    function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                    function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                    function u(e) {
                                        var t;
                                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                    }
                                    u((r = r.apply(e, t || [])).next())
                                }))
                            },
                            __generator: function(e, t) {
                                var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                                return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                                function a(i) {
                                    return function(a) {
                                        return function(i) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; s;) try {
                                                if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = i;
                                                        break;
                                                    case 4:
                                                        return s.label++, { value: i[1], done: !1 };
                                                    case 5:
                                                        s.label++, r = i[1], i = [0];
                                                        continue;
                                                    case 7:
                                                        i = s.ops.pop(), s.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                        if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                        if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                        o[2] && s.ops.pop(), s.trys.pop();
                                                        continue
                                                }
                                                i = t.call(e, s)
                                            } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                            if (5 & i[0]) throw i[1];
                                            return { value: i[0] ? i[1] : void 0, done: !0 }
                                        }([i, a])
                                    }
                                }
                            },
                            __createBinding: function(e, t, n, r) { r === undefined && (r = n), e[r] = t[n] },
                            __exportStar: function(e, t) { for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]) },
                            __values: E,
                            __read: N,
                            __spread: function() { for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(N(arguments[t])); return e },
                            __spreadArrays: function() {
                                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                                var r = Array(e),
                                    o = 0;
                                for (t = 0; t < n; t++)
                                    for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                                return r
                            },
                            __await: T,
                            __asyncGenerator: function(e, t, n) {
                                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                var r, o = n.apply(e, t || []),
                                    i = [];
                                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() { return this }, r;

                                function s(e) { o[e] && (r[e] = function(t) { return new Promise((function(n, r) { i.push([e, t, n, r]) > 1 || a(e, t) })) }) }

                                function a(e, t) {
                                    try {
                                        (n = o[e](t)).value instanceof T ? Promise.resolve(n.value.v).then(u, c) : f(i[0][2], n)
                                    } catch (r) { f(i[0][3], r) }
                                    var n
                                }

                                function u(e) { a("next", e) }

                                function c(e) { a("throw", e) }

                                function f(e, t) { e(t), i.shift(), i.length && a(i[0][0], i[0][1]) }
                            },
                            __asyncDelegator: function(e) {
                                var t, n;
                                return t = {}, r("next"), r("throw", (function(e) { throw e })), r("return"), t[Symbol.iterator] = function() { return this }, t;

                                function r(r, o) { t[r] = e[r] ? function(t) { return (n = !n) ? { value: T(e[r](t)), done: "return" === r } : o ? o(t) : t } : o }
                            },
                            __asyncValues: function(e) {
                                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                var t, n = e[Symbol.asyncIterator];
                                return n ? n.call(e) : (e = E(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() { return this }, t);

                                function r(n) { t[n] = e[n] && function(t) { return new Promise((function(r, o) {! function(e, t, n, r) { Promise.resolve(r).then((function(t) { e({ value: t, done: n }) }), t) }(r, o, (t = e[n](t)).done, t.value) })) } }
                            },
                            __makeTemplateObject: function(e, t) { return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e },
                            __importStar: function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return t["default"] = e, t
                            },
                            __importDefault: function(e) { return e && e.__esModule ? e : { "default": e } },
                            __classPrivateFieldGet: function(e, t) { if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance"); return t.get(e) },
                            __classPrivateFieldSet: function(e, t, n) { if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance"); return t.set(e, n), n }
                        }),
                        B = {},
                        P = "function" == typeof Object.create ? function(e, t) { e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }) } : function(e, t) {
                            e.super_ = t;
                            var n = function() {};
                            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
                        },
                        L = /%[sdj%]/g;

                    function D(e) {
                        if (!W(e)) { for (var t = [], n = 0; n < arguments.length; n++) t.push(C(arguments[n])); return t.join(" ") }
                        n = 1;
                        for (var r = arguments, o = r.length, i = String(e).replace(L, (function(e) {
                                if ("%%" === e) return "%";
                                if (n >= o) return e;
                                switch (e) {
                                    case "%s":
                                        return String(r[n++]);
                                    case "%d":
                                        return Number(r[n++]);
                                    case "%j":
                                        try { return JSON.stringify(r[n++]) } catch (t) { return "[Circular]" }
                                    default:
                                        return e
                                }
                            })), s = r[n]; n < o; s = r[++n]) F(s) || !V(s) ? i += " " + s : i += " " + C(s);
                        return i
                    }
                    var R, M = {};

                    function C(e, t) { var n = { seen: [], stylize: k }; return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), q(t) ? n.showHidden = t : t && ne(n, t), z(n.showHidden) && (n.showHidden = !1), z(n.depth) && (n.depth = 2), z(n.colors) && (n.colors = !1), z(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = x), U(n, e, n.depth) }

                    function x(e, t) { var n = C.styles[t]; return n ? "[" + C.colors[n][0] + "m" + e + "[" + C.colors[n][1] + "m" : e }

                    function k(e, t) { return e }

                    function U(e, t, n) {
                        if (e.customInspect && t && Q(t.inspect) && t.inspect !== C && (!t.constructor || t.constructor.prototype !== t)) { var r = t.inspect(n, e); return W(r) || (r = U(e, r, n)), r }
                        var o = function(e, t) { if (z(t)) return e.stylize("undefined", "undefined"); if (W(t)) { var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'"; return e.stylize(n, "string") } return G(t) ? e.stylize("" + t, "number") : q(t) ? e.stylize("" + t, "boolean") : F(t) ? e.stylize("null", "null") : void 0 }(e, t);
                        if (o) return o;
                        var i = Object.keys(t),
                            s = function(e) { var t = {}; return e.forEach((function(e, n) { t[e] = !0 })), t }(i);
                        if (e.showHidden && (i = Object.getOwnPropertyNames(t)), J(t) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)) return j(t);
                        if (0 === i.length) { if (Q(t)) { var a = t.name ? ": " + t.name : ""; return e.stylize("[Function" + a + "]", "special") } if (H(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp"); if (K(t)) return e.stylize(Date.prototype.toString.call(t), "date"); if (J(t)) return j(t) }
                        var u, c = "",
                            f = !1,
                            l = ["{", "}"];
                        return $(t) && (f = !0, l = ["[", "]"]), Q(t) && (c = " [Function" + (t.name ? ": " + t.name : "") + "]"), H(t) && (c = " " + RegExp.prototype.toString.call(t)), K(t) && (c = " " + Date.prototype.toUTCString.call(t)), J(t) && (c = " " + j(t)), 0 !== i.length || f && 0 != t.length ? n < 0 ? H(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t), u = f ? function(e, t, n, r, o) { for (var i = [], s = 0, a = t.length; s < a; ++s) re(t, String(s)) ? i.push(Y(e, t, n, r, String(s), !0)) : i.push(""); return o.forEach((function(o) { o.match(/^\d+$/) || i.push(Y(e, t, n, r, o, !0)) })), i }(e, t, n, s, i) : i.map((function(r) { return Y(e, t, n, s, r, f) })), e.seen.pop(), function(e, t, n) { return e.reduce((function(e, t) { return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1 }), 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1] }(u, c, l)) : l[0] + c + l[1]
                    }

                    function j(e) { return "[" + Error.prototype.toString.call(e) + "]" }

                    function Y(e, t, n, r, o, i) {
                        var s, a, u;
                        if ((u = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }).get ? a = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (a = e.stylize("[Setter]", "special")), re(r, o) || (s = "[" + o + "]"), a || (e.seen.indexOf(u.value) < 0 ? (a = F(n) ? U(e, u.value, null) : U(e, u.value, n - 1)).indexOf("\n") > -1 && (a = i ? a.split("\n").map((function(e) { return "  " + e })).join("\n").substr(2) : "\n" + a.split("\n").map((function(e) { return "   " + e })).join("\n")) : a = e.stylize("[Circular]", "special")), z(s)) {
                            if (i && o.match(/^\d+$/)) return a;
                            (s = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
                        }
                        return s + ": " + a
                    }

                    function $(e) { return Array.isArray(e) }

                    function q(e) { return "boolean" == typeof e }

                    function F(e) { return null === e }

                    function G(e) { return "number" == typeof e }

                    function W(e) { return "string" == typeof e }

                    function z(e) { return void 0 === e }

                    function H(e) { return V(e) && "[object RegExp]" === X(e) }

                    function V(e) { return "object" === babelHelpers["typeof"](e) && null !== e }

                    function K(e) { return V(e) && "[object Date]" === X(e) }

                    function J(e) { return V(e) && ("[object Error]" === X(e) || e instanceof Error) }

                    function Q(e) { return "function" == typeof e }

                    function X(e) { return Object.prototype.toString.call(e) }

                    function Z(e) { return e < 10 ? "0" + e.toString(10) : e.toString(10) }
                    C.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, C.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", "null": "bold", string: "green", date: "magenta", regexp: "red" };
                    var ee = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                    function te() {
                        var e = new Date,
                            t = [Z(e.getHours()), Z(e.getMinutes()), Z(e.getSeconds())].join(":");
                        return [e.getDate(), ee[e.getMonth()], t].join(" ")
                    }

                    function ne(e, t) { if (!t || !V(t)) return e; for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]]; return e }

                    function re(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
                    var oe = {
                            inherits: P,
                            _extend: ne,
                            log: function() { console.log("%s - %s", te(), D.apply(null, arguments)) },
                            isBuffer: function(e) { return Buffer.isBuffer(e) },
                            isPrimitive: function(e) { return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" === babelHelpers["typeof"](e) || void 0 === e },
                            isFunction: Q,
                            isError: J,
                            isDate: K,
                            isObject: V,
                            isRegExp: H,
                            isUndefined: z,
                            isSymbol: function(e) { return "symbol" === babelHelpers["typeof"](e) },
                            isString: W,
                            isNumber: G,
                            isNullOrUndefined: function(e) { return null == e },
                            isNull: F,
                            isBoolean: q,
                            isArray: $,
                            inspect: C,
                            deprecate: function Rt(e, t) { if (z(n.g.process)) return function() { return Rt(e, t).apply(this, arguments) }; var r = !1; return function() { return r || (console.error(t), r = !0), e.apply(this, arguments) } },
                            format: D,
                            debuglog: function(e) {
                                return z(R) && (R = ""), e = e.toUpperCase(), M[e] || (new RegExp("\\b" + e + "\\b", "i").test(R) ? M[e] = function() {
                                    var t = D.apply(null, arguments);
                                    console.error("%s %d: %s", e, 0, t)
                                } : M[e] = function() {}), M[e]
                            }
                        },
                        ie = a((function(e, t) {
                            function n(e) { for (var t = A.Buffer.alloc(e), n = 0; n < e; ++n) t[n] = Math.floor(256 * Math.random()); return t }
                            if (Object.defineProperty(t, "__esModule", { value: !0 }), t.deprecate = t.isObjectLike = t.isDate = t.isBuffer = t.haveBuffer = t.isBigUInt64Array = t.isBigInt64Array = t.isUint8Array = t.randomBytes = t.normalizedFunctionString = void 0, t.normalizedFunctionString = function(e) { return e.toString().replace("function(", "function (") }, t.randomBytes = n, "undefined" != typeof window && window.crypto && window.crypto.getRandomValues) t.randomBytes = function(e) { return window.crypto.getRandomValues(A.Buffer.alloc(e)) };
                            else {
                                try { t.randomBytes = B.randomBytes } catch (s) {}
                                null == t.randomBytes && (t.randomBytes = n)
                            }

                            function r(e) { return "object" === (0, o["default"])(e) && null !== e }
                            t.isUint8Array = function(e) { return "[object Uint8Array]" === Object.prototype.toString.call(e) }, t.isBigInt64Array = function(e) { return "[object BigInt64Array]" === Object.prototype.toString.call(e) }, t.isBigUInt64Array = function(e) { return "[object BigUint64Array]" === Object.prototype.toString.call(e) }, t.haveBuffer = function() { return void 0 !== i && "undefined" != typeof i.Buffer }, t.isBuffer = function(e) { var t; return "object" === (0, o["default"])(e) && "Buffer" === (null === (t = null == e ? void 0 : e.constructor) || void 0 === t ? void 0 : t.name) }, t.isDate = function(e) { return r(e) && "[object Date]" === Object.prototype.toString.call(e) }, t.isObjectLike = r, t.deprecate = function(e, t) { if ("undefined" == typeof window && "undefined" == typeof self) return oe.deprecate(e, t); var n = !1; return function() { for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o]; return n || (console.warn(t), n = !0), e.apply.apply(e, I.__spreadArrays([this], r)) } }
                        }));
                    s(ie), ie.deprecate, ie.isObjectLike, ie.isDate, ie.isBuffer, ie.haveBuffer, ie.isBigUInt64Array, ie.isBigInt64Array, ie.isUint8Array, ie.randomBytes, ie.normalizedFunctionString;
                    var se = a((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.ensureBuffer = void 0, t.ensureBuffer = function(e) { if (ie.isBuffer(e)) return e; if (ArrayBuffer.isView(e)) return A.Buffer.from(e.buffer); if (e instanceof ArrayBuffer) return A.Buffer.from(e); throw new TypeError("Must use either Buffer or TypedArray") } }));
                    s(se), se.ensureBuffer;
                    var ae = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.parseUUID = void 0;
                        var n = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
                        t.parseUUID = function(e) { if ("string" != typeof e) throw new TypeError("Invalid type for UUID, expected string but got " + (0, o["default"])(e)); if (!n.test(e)) throw new TypeError("Invalid format for UUID: " + e); var t, r = new Uint8Array(16); return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, r[5] = 255 & t, r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, r[7] = 255 & t, r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, r[9] = 255 & t, r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = 255 & t, r }
                    }));
                    s(ae), ae.parseUUID;
                    var ue = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Binary = void 0;
                        var n = function() {
                            function e(t, n) {
                                if (!(this instanceof e)) return new e(t, n);
                                if (!(null == t || "string" == typeof t || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || Array.isArray(t))) throw new TypeError("Binary can only be constructed from string, Buffer, TypedArray, or Array<number>");
                                this.sub_type = null != n ? n : e.BSON_BINARY_SUBTYPE_DEFAULT, null == t ? (this.buffer = A.Buffer.alloc(e.BUFFER_SIZE), this.position = 0) : ("string" == typeof t ? this.buffer = A.Buffer.from(t, "binary") : Array.isArray(t) ? this.buffer = A.Buffer.from(t) : this.buffer = se.ensureBuffer(t), this.position = this.buffer.byteLength)
                            }
                            return e.prototype.put = function(t) {
                                if ("string" == typeof t && 1 !== t.length) throw new TypeError("only accepts single character String");
                                if ("number" != typeof t && 1 !== t.length) throw new TypeError("only accepts single character Uint8Array or Array");
                                var n;
                                if ((n = "string" == typeof t ? t.charCodeAt(0) : "number" == typeof t ? t : t[0]) < 0 || n > 255) throw new TypeError("only accepts number in a valid unsigned byte range 0-255");
                                if (this.buffer.length > this.position) this.buffer[this.position++] = n;
                                else {
                                    var r = A.Buffer.alloc(e.BUFFER_SIZE + this.buffer.length);
                                    this.buffer.copy(r, 0, 0, this.buffer.length), this.buffer = r, this.buffer[this.position++] = n
                                }
                            }, e.prototype.write = function(e, t) {
                                if (t = "number" == typeof t ? t : this.position, this.buffer.length < t + e.length) {
                                    var n = A.Buffer.alloc(this.buffer.length + e.length);
                                    this.buffer.copy(n, 0, 0, this.buffer.length), this.buffer = n
                                }
                                ArrayBuffer.isView(e) ? (this.buffer.set(se.ensureBuffer(e), t), this.position = t + e.byteLength > this.position ? t + e.length : this.position) : "string" == typeof e && (this.buffer.write(e, t, e.length, "binary"), this.position = t + e.length > this.position ? t + e.length : this.position)
                            }, e.prototype.read = function(e, t) { return t = t && t > 0 ? t : this.position, this.buffer.slice(e, e + t) }, e.prototype.value = function(e) { return (e = !!e) && this.buffer.length === this.position ? this.buffer : e ? this.buffer.slice(0, this.position) : this.buffer.toString("binary", 0, this.position) }, e.prototype.length = function() { return this.position }, e.prototype.toJSON = function() { return this.buffer.toString("base64") }, e.prototype.toString = function(e) { return this.buffer.toString(e) }, e.prototype.toExtendedJSON = function(e) {
                                e = e || {};
                                var t = this.buffer.toString("base64"),
                                    n = Number(this.sub_type).toString(16);
                                return e.legacy ? { $binary: t, $type: 1 === n.length ? "0" + n : n } : { $binary: { base64: t, subType: 1 === n.length ? "0" + n : n } }
                            }, e.fromExtendedJSON = function(t, n) { var r, o; if (n = n || {}, "$binary" in t ? n.legacy && "string" == typeof t.$binary && "$type" in t ? (o = t.$type ? parseInt(t.$type, 16) : 0, r = A.Buffer.from(t.$binary, "base64")) : "string" != typeof t.$binary && (o = t.$binary.subType ? parseInt(t.$binary.subType, 16) : 0, r = A.Buffer.from(t.$binary.base64, "base64")) : "$uuid" in t && (o = 4, r = A.Buffer.from(ae.parseUUID(t.$uuid))), !r) throw new TypeError("Unexpected Binary Extended JSON format " + JSON.stringify(t)); return new e(r, o) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return 'new Binary(Buffer.from("' + this.value(!0).toString("hex") + '", "hex"), ' + this.sub_type + ")" }, e.BSON_BINARY_SUBTYPE_DEFAULT = 0, e.BUFFER_SIZE = 256, e.SUBTYPE_DEFAULT = 0, e.SUBTYPE_FUNCTION = 1, e.SUBTYPE_BYTE_ARRAY = 2, e.SUBTYPE_UUID_OLD = 3, e.SUBTYPE_UUID = 4, e.SUBTYPE_MD5 = 5, e.SUBTYPE_USER_DEFINED = 128, e
                        }();
                        t.Binary = n, Object.defineProperty(n.prototype, "_bsontype", { value: "Binary" })
                    }));
                    s(ue), ue.Binary;
                    var ce = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Code = void 0;
                        var n = function() {
                            function e(t, n) {
                                if (!(this instanceof e)) return new e(t, n);
                                this.code = t, this.scope = n
                            }
                            return e.prototype.toJSON = function() { return { code: this.code, scope: this.scope } }, e.prototype.toExtendedJSON = function() { return this.scope ? { $code: this.code, $scope: this.scope } : { $code: this.code } }, e.fromExtendedJSON = function(t) { return new e(t.$code, t.$scope) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { var e = this.toJSON(); return 'new Code("' + e.code + '"' + (e.scope ? ", " + JSON.stringify(e.scope) : "") + ")" }, e
                        }();
                        t.Code = n, Object.defineProperty(n.prototype, "_bsontype", { value: "Code" })
                    }));
                    s(ce), ce.Code;
                    var fe = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.DBRef = t.isDBRefLike = void 0, t.isDBRefLike = function(e) { return ie.isObjectLike(e) && null != e.$id && null != e.$ref };
                        var n = function() {
                            function e(t, n, r, o) {
                                if (!(this instanceof e)) return new e(t, n, r, o);
                                var i = t.split(".");
                                2 === i.length && (r = i.shift(), t = i.shift()), this.collection = t, this.oid = n, this.db = r, this.fields = o || {}
                            }
                            return Object.defineProperty(e.prototype, "namespace", { get: function() { return this.collection }, set: function(e) { this.collection = e }, enumerable: !1, configurable: !0 }), e.prototype.toJSON = function() { var e = Object.assign({ $ref: this.collection, $id: this.oid }, this.fields); return null != this.db && (e.$db = this.db), e }, e.prototype.toExtendedJSON = function(e) { e = e || {}; var t = { $ref: this.collection, $id: this.oid }; return e.legacy ? t : (this.db && (t.$db = this.db), t = Object.assign(t, this.fields)) }, e.fromExtendedJSON = function(t) { var n = Object.assign({}, t); return delete n.$ref, delete n.$id, delete n.$db, new e(t.$ref, t.$id, t.$db, n) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { var e = this.oid === undefined || this.oid.toString === undefined ? this.oid : this.oid.toString(); return 'new DBRef("' + this.namespace + '", new ObjectId("' + e + '")' + (this.db ? ', "' + this.db + '"' : "") + ")" }, e
                        }();
                        t.DBRef = n, Object.defineProperty(n.prototype, "_bsontype", { value: "DBRef" })
                    }));
                    s(fe), fe.DBRef, fe.isDBRefLike;
                    var le = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Long = void 0;
                        var n = undefined;
                        try { n = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports } catch (c) {}
                        var r = 4294967296,
                            o = 0x10000000000000000,
                            i = o / 2,
                            s = {},
                            a = {},
                            u = function() {
                                function e(t, n, r) {
                                    if (void 0 === t && (t = 0), void 0 === n && (n = 0), !(this instanceof e)) return new e(t, n, r);
                                    this.low = 0 | t, this.high = 0 | n, this.unsigned = !!r, Object.defineProperty(this, "__isLong__", { value: !0, configurable: !1, writable: !1, enumerable: !1 })
                                }
                                return e.fromBits = function(t, n, r) { return new e(t, n, r) }, e.fromInt = function(t, n) { var r, o, i; return n ? (i = 0 <= (t >>>= 0) && t < 256) && (o = a[t]) ? o : (r = e.fromBits(t, (0 | t) < 0 ? -1 : 0, !0), i && (a[t] = r), r) : (i = -128 <= (t |= 0) && t < 128) && (o = s[t]) ? o : (r = e.fromBits(t, t < 0 ? -1 : 0, !1), i && (s[t] = r), r) }, e.fromNumber = function(t, n) { if (isNaN(t)) return n ? e.UZERO : e.ZERO; if (n) { if (t < 0) return e.UZERO; if (t >= o) return e.MAX_UNSIGNED_VALUE } else { if (t <= -i) return e.MIN_VALUE; if (t + 1 >= i) return e.MAX_VALUE } return t < 0 ? e.fromNumber(-t, n).neg() : e.fromBits(t % r | 0, t / r | 0, n) }, e.fromBigInt = function(t, n) { return e.fromString(t.toString(), n) }, e.fromString = function(t, n, r) {
                                    if (0 === t.length) throw Error("empty string");
                                    if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return e.ZERO;
                                    if ("number" == typeof n ? (r = n, n = !1) : n = !!n, (r = r || 10) < 2 || 36 < r) throw RangeError("radix");
                                    var o;
                                    if ((o = t.indexOf("-")) > 0) throw Error("interior hyphen");
                                    if (0 === o) return e.fromString(t.substring(1), n, r).neg();
                                    for (var i = e.fromNumber(Math.pow(r, 8)), s = e.ZERO, a = 0; a < t.length; a += 8) {
                                        var u = Math.min(8, t.length - a),
                                            c = parseInt(t.substring(a, a + u), r);
                                        if (u < 8) {
                                            var f = e.fromNumber(Math.pow(r, u));
                                            s = s.mul(f).add(e.fromNumber(c))
                                        } else s = (s = s.mul(i)).add(e.fromNumber(c))
                                    }
                                    return s.unsigned = n, s
                                }, e.fromBytes = function(t, n, r) { return r ? e.fromBytesLE(t, n) : e.fromBytesBE(t, n) }, e.fromBytesLE = function(t, n) { return new e(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, n) }, e.fromBytesBE = function(t, n) { return new e(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], n) }, e.isLong = function(e) { return ie.isObjectLike(e) && !0 === e.__isLong__ }, e.fromValue = function(t, n) { return "number" == typeof t ? e.fromNumber(t, n) : "string" == typeof t ? e.fromString(t, n) : e.fromBits(t.low, t.high, "boolean" == typeof n ? n : t.unsigned) }, e.prototype.add = function(t) {
                                    e.isLong(t) || (t = e.fromValue(t));
                                    var n = this.high >>> 16,
                                        r = 65535 & this.high,
                                        o = this.low >>> 16,
                                        i = 65535 & this.low,
                                        s = t.high >>> 16,
                                        a = 65535 & t.high,
                                        u = t.low >>> 16,
                                        c = 0,
                                        f = 0,
                                        l = 0,
                                        p = 0;
                                    return l += (p += i + (65535 & t.low)) >>> 16, p &= 65535, f += (l += o + u) >>> 16, l &= 65535, c += (f += r + a) >>> 16, f &= 65535, c += n + s, c &= 65535, e.fromBits(l << 16 | p, c << 16 | f, this.unsigned)
                                }, e.prototype.and = function(t) { return e.isLong(t) || (t = e.fromValue(t)), e.fromBits(this.low & t.low, this.high & t.high, this.unsigned) }, e.prototype.compare = function(t) {
                                    if (e.isLong(t) || (t = e.fromValue(t)), this.eq(t)) return 0;
                                    var n = this.isNegative(),
                                        r = t.isNegative();
                                    return n && !r ? -1 : !n && r ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
                                }, e.prototype.comp = function(e) { return this.compare(e) }, e.prototype.divide = function(t) {
                                    if (e.isLong(t) || (t = e.fromValue(t)), t.isZero()) throw Error("division by zero");
                                    if (n) { if (!this.unsigned && -2147483648 === this.high && -1 === t.low && -1 === t.high) return this; var r = (this.unsigned ? n.div_u : n.div_s)(this.low, this.high, t.low, t.high); return e.fromBits(r, n.get_high(), this.unsigned) }
                                    if (this.isZero()) return this.unsigned ? e.UZERO : e.ZERO;
                                    var o, i, s;
                                    if (this.unsigned) {
                                        if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return e.UZERO;
                                        if (t.gt(this.shru(1))) return e.UONE;
                                        s = e.UZERO
                                    } else {
                                        if (this.eq(e.MIN_VALUE)) return t.eq(e.ONE) || t.eq(e.NEG_ONE) ? e.MIN_VALUE : t.eq(e.MIN_VALUE) ? e.ONE : (o = this.shr(1).div(t).shl(1)).eq(e.ZERO) ? t.isNegative() ? e.ONE : e.NEG_ONE : (i = this.sub(t.mul(o)), s = o.add(i.div(t)));
                                        if (t.eq(e.MIN_VALUE)) return this.unsigned ? e.UZERO : e.ZERO;
                                        if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                                        if (t.isNegative()) return this.div(t.neg()).neg();
                                        s = e.ZERO
                                    }
                                    for (i = this; i.gte(t);) {
                                        o = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
                                        for (var a = Math.ceil(Math.log(o) / Math.LN2), u = a <= 48 ? 1 : Math.pow(2, a - 48), c = e.fromNumber(o), f = c.mul(t); f.isNegative() || f.gt(i);) o -= u, f = (c = e.fromNumber(o, this.unsigned)).mul(t);
                                        c.isZero() && (c = e.ONE), s = s.add(c), i = i.sub(f)
                                    }
                                    return s
                                }, e.prototype.div = function(e) { return this.divide(e) }, e.prototype.equals = function(t) { return e.isLong(t) || (t = e.fromValue(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low }, e.prototype.eq = function(e) { return this.equals(e) }, e.prototype.getHighBits = function() { return this.high }, e.prototype.getHighBitsUnsigned = function() { return this.high >>> 0 }, e.prototype.getLowBits = function() { return this.low }, e.prototype.getLowBitsUnsigned = function() { return this.low >>> 0 }, e.prototype.getNumBitsAbs = function() { if (this.isNegative()) return this.eq(e.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs(); var t, n = 0 !== this.high ? this.high : this.low; for (t = 31; t > 0 && 0 == (n & 1 << t); t--); return 0 !== this.high ? t + 33 : t + 1 }, e.prototype.greaterThan = function(e) { return this.comp(e) > 0 }, e.prototype.gt = function(e) { return this.greaterThan(e) }, e.prototype.greaterThanOrEqual = function(e) { return this.comp(e) >= 0 }, e.prototype.gte = function(e) { return this.greaterThanOrEqual(e) }, e.prototype.ge = function(e) { return this.greaterThanOrEqual(e) }, e.prototype.isEven = function() { return 0 == (1 & this.low) }, e.prototype.isNegative = function() { return !this.unsigned && this.high < 0 }, e.prototype.isOdd = function() { return 1 == (1 & this.low) }, e.prototype.isPositive = function() { return this.unsigned || this.high >= 0 }, e.prototype.isZero = function() { return 0 === this.high && 0 === this.low }, e.prototype.lessThan = function(e) { return this.comp(e) < 0 }, e.prototype.lt = function(e) { return this.lessThan(e) }, e.prototype.lessThanOrEqual = function(e) { return this.comp(e) <= 0 }, e.prototype.lte = function(e) { return this.lessThanOrEqual(e) }, e.prototype.modulo = function(t) { if (e.isLong(t) || (t = e.fromValue(t)), n) { var r = (this.unsigned ? n.rem_u : n.rem_s)(this.low, this.high, t.low, t.high); return e.fromBits(r, n.get_high(), this.unsigned) } return this.sub(this.div(t).mul(t)) }, e.prototype.mod = function(e) { return this.modulo(e) }, e.prototype.rem = function(e) { return this.modulo(e) }, e.prototype.multiply = function(t) {
                                    if (this.isZero()) return e.ZERO;
                                    if (e.isLong(t) || (t = e.fromValue(t)), n) { var r = n.mul(this.low, this.high, t.low, t.high); return e.fromBits(r, n.get_high(), this.unsigned) }
                                    if (t.isZero()) return e.ZERO;
                                    if (this.eq(e.MIN_VALUE)) return t.isOdd() ? e.MIN_VALUE : e.ZERO;
                                    if (t.eq(e.MIN_VALUE)) return this.isOdd() ? e.MIN_VALUE : e.ZERO;
                                    if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
                                    if (t.isNegative()) return this.mul(t.neg()).neg();
                                    if (this.lt(e.TWO_PWR_24) && t.lt(e.TWO_PWR_24)) return e.fromNumber(this.toNumber() * t.toNumber(), this.unsigned);
                                    var o = this.high >>> 16,
                                        i = 65535 & this.high,
                                        s = this.low >>> 16,
                                        a = 65535 & this.low,
                                        u = t.high >>> 16,
                                        c = 65535 & t.high,
                                        f = t.low >>> 16,
                                        l = 65535 & t.low,
                                        p = 0,
                                        d = 0,
                                        h = 0,
                                        y = 0;
                                    return h += (y += a * l) >>> 16, y &= 65535, d += (h += s * l) >>> 16, h &= 65535, d += (h += a * f) >>> 16, h &= 65535, p += (d += i * l) >>> 16, d &= 65535, p += (d += s * f) >>> 16, d &= 65535, p += (d += a * c) >>> 16, d &= 65535, p += o * l + i * f + s * c + a * u, p &= 65535, e.fromBits(h << 16 | y, p << 16 | d, this.unsigned)
                                }, e.prototype.mul = function(e) { return this.multiply(e) }, e.prototype.negate = function() { return !this.unsigned && this.eq(e.MIN_VALUE) ? e.MIN_VALUE : this.not().add(e.ONE) }, e.prototype.neg = function() { return this.negate() }, e.prototype.not = function() { return e.fromBits(~this.low, ~this.high, this.unsigned) }, e.prototype.notEquals = function(e) { return !this.equals(e) }, e.prototype.neq = function(e) { return this.notEquals(e) }, e.prototype.ne = function(e) { return this.notEquals(e) }, e.prototype.or = function(t) { return e.isLong(t) || (t = e.fromValue(t)), e.fromBits(this.low | t.low, this.high | t.high, this.unsigned) }, e.prototype.shiftLeft = function(t) { return e.isLong(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? e.fromBits(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : e.fromBits(0, this.low << t - 32, this.unsigned) }, e.prototype.shl = function(e) { return this.shiftLeft(e) }, e.prototype.shiftRight = function(t) { return e.isLong(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? e.fromBits(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : e.fromBits(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned) }, e.prototype.shr = function(e) { return this.shiftRight(e) }, e.prototype.shiftRightUnsigned = function(t) { if (e.isLong(t) && (t = t.toInt()), 0 == (t &= 63)) return this; var n = this.high; if (t < 32) { var r = this.low; return e.fromBits(r >>> t | n << 32 - t, n >>> t, this.unsigned) } return 32 === t ? e.fromBits(n, 0, this.unsigned) : e.fromBits(n >>> t - 32, 0, this.unsigned) }, e.prototype.shr_u = function(e) { return this.shiftRightUnsigned(e) }, e.prototype.shru = function(e) { return this.shiftRightUnsigned(e) }, e.prototype.subtract = function(t) { return e.isLong(t) || (t = e.fromValue(t)), this.add(t.neg()) }, e.prototype.sub = function(e) { return this.subtract(e) }, e.prototype.toInt = function() { return this.unsigned ? this.low >>> 0 : this.low }, e.prototype.toNumber = function() { return this.unsigned ? (this.high >>> 0) * r + (this.low >>> 0) : this.high * r + (this.low >>> 0) }, e.prototype.toBigInt = function() { return BigInt(this.toString()) }, e.prototype.toBytes = function(e) { return e ? this.toBytesLE() : this.toBytesBE() }, e.prototype.toBytesLE = function() {
                                    var e = this.high,
                                        t = this.low;
                                    return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
                                }, e.prototype.toBytesBE = function() {
                                    var e = this.high,
                                        t = this.low;
                                    return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
                                }, e.prototype.toSigned = function() { return this.unsigned ? e.fromBits(this.low, this.high, !1) : this }, e.prototype.toString = function(t) {
                                    if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
                                    if (this.isZero()) return "0";
                                    if (this.isNegative()) {
                                        if (this.eq(e.MIN_VALUE)) {
                                            var n = e.fromNumber(t),
                                                r = this.div(n),
                                                o = r.mul(n).sub(this);
                                            return r.toString(t) + o.toInt().toString(t)
                                        }
                                        return "-" + this.neg().toString(t)
                                    }
                                    for (var i = e.fromNumber(Math.pow(t, 6), this.unsigned), s = this, a = "";;) {
                                        var u = s.div(i),
                                            c = (s.sub(u.mul(i)).toInt() >>> 0).toString(t);
                                        if ((s = u).isZero()) return c + a;
                                        for (; c.length < 6;) c = "0" + c;
                                        a = "" + c + a
                                    }
                                }, e.prototype.toUnsigned = function() { return this.unsigned ? this : e.fromBits(this.low, this.high, !0) }, e.prototype.xor = function(t) { return e.isLong(t) || (t = e.fromValue(t)), e.fromBits(this.low ^ t.low, this.high ^ t.high, this.unsigned) }, e.prototype.eqz = function() { return this.isZero() }, e.prototype.le = function(e) { return this.lessThanOrEqual(e) }, e.prototype.toExtendedJSON = function(e) { return e && e.relaxed ? this.toNumber() : { $numberLong: this.toString() } }, e.fromExtendedJSON = function(t, n) { var r = e.fromString(t.$numberLong); return n && n.relaxed ? r.toNumber() : r }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return 'new Long("' + this.toString() + '")' }, e.TWO_PWR_24 = e.fromInt(16777216), e.MAX_UNSIGNED_VALUE = e.fromBits(-1, -1, !0), e.ZERO = e.fromInt(0), e.UZERO = e.fromInt(0, !0), e.ONE = e.fromInt(1), e.UONE = e.fromInt(1, !0), e.NEG_ONE = e.fromInt(-1), e.MAX_VALUE = e.fromBits(-1, 2147483647, !1), e.MIN_VALUE = e.fromBits(0, -2147483648, !1), e
                            }();
                        t.Long = u, Object.defineProperty(u.prototype, "__isLong__", { value: !0 }), Object.defineProperty(u.prototype, "_bsontype", { value: "Long" })
                    }));
                    s(le), le.Long;
                    var pe = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Decimal128 = void 0;
                        var n = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
                            r = /^(\+|-)?(Infinity|inf)$/i,
                            o = /^(\+|-)?NaN$/i,
                            i = 6111,
                            s = -6176,
                            a = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
                            u = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
                            c = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
                            f = /^([-+])?(\d+)?$/;

                        function l(e) { return !isNaN(parseInt(e, 10)) }

                        function p(e) {
                            var t = le.Long.fromNumber(1e9),
                                n = le.Long.fromNumber(0);
                            if (!(e.parts[0] || e.parts[1] || e.parts[2] || e.parts[3])) return { quotient: e, rem: n };
                            for (var r = 0; r <= 3; r++) n = (n = n.shiftLeft(32)).add(new le.Long(e.parts[r], 0)), e.parts[r] = n.div(t).low, n = n.modulo(t);
                            return { quotient: e, rem: n }
                        }

                        function d(e, t) { throw new TypeError('"' + e + '" is not a valid Decimal128 string - ' + t) }
                        var h = function() {
                            function e(t) {
                                if (!(this instanceof e)) return new e(t);
                                this.bytes = t
                            }
                            return e.fromString = function(t) {
                                var p, h = !1,
                                    y = !1,
                                    g = !1,
                                    _ = 0,
                                    v = 0,
                                    m = 0,
                                    b = 0,
                                    O = 0,
                                    w = [0],
                                    S = 0,
                                    E = 0,
                                    N = 0,
                                    T = 0,
                                    I = 0,
                                    B = 0,
                                    P = new le.Long(0, 0),
                                    L = new le.Long(0, 0),
                                    D = 0;
                                if (t.length >= 7e3) throw new TypeError(t + " not a valid Decimal128 string");
                                var R = t.match(n),
                                    M = t.match(r),
                                    C = t.match(o);
                                if (!R && !M && !C || 0 === t.length) throw new TypeError(t + " not a valid Decimal128 string");
                                if (R) {
                                    var x = R[2],
                                        k = R[4],
                                        U = R[5],
                                        j = R[6];
                                    k && j === undefined && d(t, "missing exponent power"), k && x === undefined && d(t, "missing exponent base"), k === undefined && (U || j) && d(t, "missing e before exponent")
                                }
                                if ("+" !== t[D] && "-" !== t[D] || (h = "-" === t[D++]), !l(t[D]) && "." !== t[D]) { if ("i" === t[D] || "I" === t[D]) return new e(A.Buffer.from(h ? u : c)); if ("N" === t[D]) return new e(A.Buffer.from(a)) }
                                for (; l(t[D]) || "." === t[D];) "." !== t[D] ? (S < 34 && ("0" !== t[D] || g) && (g || (O = v), g = !0, w[E++] = parseInt(t[D], 10), S += 1), g && (m += 1), y && (b += 1), v += 1, D += 1) : (y && d(t, "contains multiple periods"), y = !0, D += 1);
                                if (y && !v) throw new TypeError(t + " not a valid Decimal128 string");
                                if ("e" === t[D] || "E" === t[D]) {
                                    var Y = t.substr(++D).match(f);
                                    if (!Y || !Y[2]) return new e(A.Buffer.from(a));
                                    I = parseInt(Y[0], 10), D += Y[0].length
                                }
                                if (t[D]) return new e(A.Buffer.from(a));
                                if (N = 0, S) {
                                    if (T = S - 1, 1 !== (_ = m))
                                        for (;
                                            "0" === t[O + _ - 1];) _ -= 1
                                } else N = 0, T = 0, w[0] = 0, m = 1, S = 1, _ = 0;
                                for (I <= b && b - I > 16384 ? I = s : I -= b; I > i;) {
                                    if ((T += 1) - N > 34) {
                                        if (w.join("").match(/^0+$/)) { I = i; break }
                                        d(t, "overflow")
                                    }
                                    I -= 1
                                }
                                for (; I < s || S < m;) {
                                    if (0 === T && _ < S) { I = s, _ = 0; break }
                                    if (S < m ? m -= 1 : T -= 1, I < i) I += 1;
                                    else {
                                        if (w.join("").match(/^0+$/)) { I = i; break }
                                        d(t, "overflow")
                                    }
                                }
                                if (T - N + 1 < _) {
                                    var $ = v;
                                    y && (O += 1, $ += 1), h && (O += 1, $ += 1);
                                    var q = parseInt(t[O + T + 1], 10),
                                        F = 0;
                                    if (q >= 5 && (F = 1, 5 === q))
                                        for (F = w[T] % 2 == 1 ? 1 : 0, B = O + T + 2; B < $; B++)
                                            if (parseInt(t[B], 10)) { F = 1; break }
                                    if (F)
                                        for (var G = T; G >= 0; G--)
                                            if (++w[G] > 9 && (w[G] = 0, 0 === G)) {
                                                if (!(I < i)) return new e(A.Buffer.from(h ? u : c));
                                                I += 1, w[G] = 1
                                            }
                                }
                                if (P = le.Long.fromNumber(0), L = le.Long.fromNumber(0), 0 === _) P = le.Long.fromNumber(0), L = le.Long.fromNumber(0);
                                else if (T - N < 17)
                                    for (G = N, L = le.Long.fromNumber(w[G++]), P = new le.Long(0, 0); G <= T; G++) L = (L = L.multiply(le.Long.fromNumber(10))).add(le.Long.fromNumber(w[G]));
                                else { for (G = N, P = le.Long.fromNumber(w[G++]); G <= T - 17; G++) P = (P = P.multiply(le.Long.fromNumber(10))).add(le.Long.fromNumber(w[G])); for (L = le.Long.fromNumber(w[G++]); G <= T; G++) L = (L = L.multiply(le.Long.fromNumber(10))).add(le.Long.fromNumber(w[G])) }
                                var W, z, H, V, K = function(e, t) {
                                    if (!e && !t) return { high: le.Long.fromNumber(0), low: le.Long.fromNumber(0) };
                                    var n = e.shiftRightUnsigned(32),
                                        r = new le.Long(e.getLowBits(), 0),
                                        o = t.shiftRightUnsigned(32),
                                        i = new le.Long(t.getLowBits(), 0),
                                        s = n.multiply(o),
                                        a = n.multiply(i),
                                        u = r.multiply(o),
                                        c = r.multiply(i);
                                    return s = s.add(a.shiftRightUnsigned(32)), a = new le.Long(a.getLowBits(), 0).add(u).add(c.shiftRightUnsigned(32)), { high: s = s.add(a.shiftRightUnsigned(32)), low: c = a.shiftLeft(32).add(new le.Long(c.getLowBits(), 0)) }
                                }(P, le.Long.fromString("100000000000000000"));
                                K.low = K.low.add(L), W = K.low, z = L, H = W.high >>> 0, V = z.high >>> 0, (H < V || H === V && W.low >>> 0 < z.low >>> 0) && (K.high = K.high.add(le.Long.fromNumber(1))), p = I + 6176;
                                var J = { low: le.Long.fromNumber(0), high: le.Long.fromNumber(0) };
                                K.high.shiftRightUnsigned(49).and(le.Long.fromNumber(1)).equals(le.Long.fromNumber(1)) ? (J.high = J.high.or(le.Long.fromNumber(3).shiftLeft(61)), J.high = J.high.or(le.Long.fromNumber(p).and(le.Long.fromNumber(16383).shiftLeft(47))), J.high = J.high.or(K.high.and(le.Long.fromNumber(0x7fffffffffff)))) : (J.high = J.high.or(le.Long.fromNumber(16383 & p).shiftLeft(49)), J.high = J.high.or(K.high.and(le.Long.fromNumber(562949953421311)))), J.low = K.low, h && (J.high = J.high.or(le.Long.fromString("9223372036854775808")));
                                var Q = A.Buffer.alloc(16);
                                return D = 0, Q[D++] = 255 & J.low.low, Q[D++] = J.low.low >> 8 & 255, Q[D++] = J.low.low >> 16 & 255, Q[D++] = J.low.low >> 24 & 255, Q[D++] = 255 & J.low.high, Q[D++] = J.low.high >> 8 & 255, Q[D++] = J.low.high >> 16 & 255, Q[D++] = J.low.high >> 24 & 255, Q[D++] = 255 & J.high.low, Q[D++] = J.high.low >> 8 & 255, Q[D++] = J.high.low >> 16 & 255, Q[D++] = J.high.low >> 24 & 255, Q[D++] = 255 & J.high.high, Q[D++] = J.high.high >> 8 & 255, Q[D++] = J.high.high >> 16 & 255, Q[D++] = J.high.high >> 24 & 255, new e(Q)
                            }, e.prototype.toString = function() {
                                for (var e, t = 0, n = new Array(36), r = 0; r < n.length; r++) n[r] = 0;
                                var o, i, s, a = 0,
                                    u = !1,
                                    c = { parts: [0, 0, 0, 0] },
                                    f = [];
                                a = 0;
                                var l = this.bytes,
                                    d = l[a++] | l[a++] << 8 | l[a++] << 16 | l[a++] << 24,
                                    h = l[a++] | l[a++] << 8 | l[a++] << 16 | l[a++] << 24,
                                    y = l[a++] | l[a++] << 8 | l[a++] << 16 | l[a++] << 24,
                                    g = l[a++] | l[a++] << 8 | l[a++] << 16 | l[a++] << 24;
                                a = 0, (new le.Long(d, h), new le.Long(y, g)).lessThan(le.Long.ZERO) && f.push("-");
                                var _ = g >> 26 & 31;
                                if (_ >> 3 == 3) {
                                    if (30 === _) return f.join("") + "Infinity";
                                    if (31 === _) return "NaN";
                                    e = g >> 15 & 16383, o = 8 + (g >> 14 & 1)
                                } else o = g >> 14 & 7, e = g >> 17 & 16383;
                                var v = e - 6176;
                                if (c.parts[0] = (16383 & g) + ((15 & o) << 14), c.parts[1] = y, c.parts[2] = h, c.parts[3] = d, 0 === c.parts[0] && 0 === c.parts[1] && 0 === c.parts[2] && 0 === c.parts[3]) u = !0;
                                else
                                    for (s = 3; s >= 0; s--) {
                                        var m = 0,
                                            b = p(c);
                                        if (c = b.quotient, m = b.rem.low)
                                            for (i = 8; i >= 0; i--) n[9 * s + i] = m % 10, m = Math.floor(m / 10)
                                    }
                                if (u) t = 1, n[a] = 0;
                                else
                                    for (t = 36; !n[a];) t -= 1, a += 1;
                                var O = t - 1 + v;
                                if (O >= 34 || O <= -7 || v > 0) {
                                    if (t > 34) return f.push("0"), v > 0 ? f.push("E+" + v) : v < 0 && f.push("E" + v), f.join("");
                                    for (f.push("" + n[a++]), (t -= 1) && f.push("."), r = 0; r < t; r++) f.push("" + n[a++]);
                                    f.push("E"), O > 0 ? f.push("+" + O) : f.push("" + O)
                                } else if (v >= 0)
                                    for (r = 0; r < t; r++) f.push("" + n[a++]);
                                else {
                                    var A = t + v;
                                    if (A > 0)
                                        for (r = 0; r < A; r++) f.push("" + n[a++]);
                                    else f.push("0");
                                    for (f.push("."); A++ < 0;) f.push("0");
                                    for (r = 0; r < t - Math.max(A - 1, 0); r++) f.push("" + n[a++])
                                }
                                return f.join("")
                            }, e.prototype.toJSON = function() { return { $numberDecimal: this.toString() } }, e.prototype.toExtendedJSON = function() { return { $numberDecimal: this.toString() } }, e.fromExtendedJSON = function(t) { return e.fromString(t.$numberDecimal) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return 'Decimal128.fromString("' + this.toString() + '")' }, e
                        }();
                        t.Decimal128 = h, Object.defineProperty(h.prototype, "_bsontype", { value: "Decimal128" })
                    }));
                    s(pe), pe.Decimal128;
                    var de = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Double = void 0;
                        var n = function() {
                            function e(t) {
                                if (!(this instanceof e)) return new e(t);
                                t instanceof Number && (t = t.valueOf()), this.value = +t
                            }
                            return e.prototype.valueOf = function() { return this.value }, e.prototype.toJSON = function() { return this.value }, e.prototype.toExtendedJSON = function(e) { return e && (e.legacy || e.relaxed && isFinite(this.value)) ? this.value : Object.is(Math.sign(this.value), -0) ? { $numberDouble: "-" + this.value.toFixed(1) } : (Number.isInteger(this.value) ? (t = this.value.toFixed(1)).length >= 13 && (t = this.value.toExponential(13).toUpperCase()) : t = this.value.toString(), { $numberDouble: t }); var t }, e.fromExtendedJSON = function(t, n) { var r = parseFloat(t.$numberDouble); return n && n.relaxed ? r : new e(r) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return "new Double(" + this.toExtendedJSON().$numberDouble + ")" }, e
                        }();
                        t.Double = n, Object.defineProperty(n.prototype, "_bsontype", { value: "Double" })
                    }));
                    s(de), de.Double;
                    var he = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Int32 = void 0;
                        var n = function() {
                            function e(t) {
                                if (!(this instanceof e)) return new e(t);
                                t instanceof Number && (t = t.valueOf()), this.value = +t
                            }
                            return e.prototype.valueOf = function() { return this.value }, e.prototype.toJSON = function() { return this.value }, e.prototype.toExtendedJSON = function(e) { return e && (e.relaxed || e.legacy) ? this.value : { $numberInt: this.value.toString() } }, e.fromExtendedJSON = function(t, n) { return n && n.relaxed ? parseInt(t.$numberInt, 10) : new e(t.$numberInt) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return "new Int32(" + this.valueOf() + ")" }, e
                        }();
                        t.Int32 = n, Object.defineProperty(n.prototype, "_bsontype", { value: "Int32" })
                    }));
                    s(he), he.Int32;
                    var ye = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.MaxKey = void 0;
                        var n = function() {
                            function e() { if (!(this instanceof e)) return new e }
                            return e.prototype.toExtendedJSON = function() { return { $maxKey: 1 } }, e.fromExtendedJSON = function() { return new e }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return "new MaxKey()" }, e
                        }();
                        t.MaxKey = n, Object.defineProperty(n.prototype, "_bsontype", { value: "MaxKey" })
                    }));
                    s(ye), ye.MaxKey;
                    var ge = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.MinKey = void 0;
                        var n = function() {
                            function e() { if (!(this instanceof e)) return new e }
                            return e.prototype.toExtendedJSON = function() { return { $minKey: 1 } }, e.fromExtendedJSON = function() { return new e }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return "new MinKey()" }, e
                        }();
                        t.MinKey = n, Object.defineProperty(n.prototype, "_bsontype", { value: "MinKey" })
                    }));
                    s(ge), ge.MinKey;
                    var _e = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.ObjectId = void 0;
                        for (var n = ie.randomBytes(5), r = new RegExp("^[0-9a-fA-F]{24}$"), i = [], s = 0; s < 256; s++) i[s] = (s <= 15 ? "0" : "") + s.toString(16);
                        for (var a = [], u = 0; u < 10;) a[48 + u] = u++;
                        for (; u < 16;) a[55 + u] = a[87 + u] = u++;
                        var c = Symbol("id"),
                            f = function() {
                                function e(t) {
                                    if (!(this instanceof e)) return new e(t);
                                    if (t instanceof e && (this[c] = t.id, this.__id = t.__id), "object" === (0, o["default"])(t) && t && "id" in t && ("toHexString" in t && "function" == typeof t.toHexString ? this[c] = A.Buffer.from(t.toHexString(), "hex") : this[c] = "string" == typeof t.id ? A.Buffer.from(t.id) : t.id), null != t && "number" != typeof t || (this[c] = e.generate("number" == typeof t ? t : undefined), e.cacheHexString && (this.__id = this.id.toString("hex"))), ArrayBuffer.isView(t) && 12 === t.byteLength && (this[c] = se.ensureBuffer(t)), "string" == typeof t)
                                        if (12 === t.length) {
                                            var n = A.Buffer.from(t);
                                            12 === n.byteLength && (this[c] = n)
                                        } else {
                                            if (24 !== t.length || !r.test(t)) throw new TypeError("Argument passed in must be a Buffer or string of 12 bytes or a string of 24 hex characters");
                                            this[c] = A.Buffer.from(t, "hex")
                                        }
                                    e.cacheHexString && (this.__id = this.id.toString("hex"))
                                }
                                return Object.defineProperty(e.prototype, "id", { get: function() { return this[c] }, set: function(t) { this[c] = t, e.cacheHexString && (this.__id = t.toString("hex")) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "generationTime", { get: function() { return this.id.readInt32BE(0) }, set: function(e) { this.id.writeUInt32BE(e, 0) }, enumerable: !1, configurable: !0 }), e.prototype.toHexString = function() { if (e.cacheHexString && this.__id) return this.__id; var t = this.id.toString("hex"); return e.cacheHexString && !this.__id && (this.__id = t), t }, e.getInc = function() { return e.index = (e.index + 1) % 16777215 }, e.generate = function(t) {
                                    "number" != typeof t && (t = ~~(Date.now() / 1e3));
                                    var r = e.getInc(),
                                        o = A.Buffer.alloc(12);
                                    return o.writeUInt32BE(t, 0), o[4] = n[0], o[5] = n[1], o[6] = n[2], o[7] = n[3], o[8] = n[4], o[11] = 255 & r, o[10] = r >> 8 & 255, o[9] = r >> 16 & 255, o
                                }, e.prototype.toString = function(e) { return e ? this.id.toString(e) : this.toHexString() }, e.prototype.toJSON = function() { return this.toHexString() }, e.prototype.equals = function(t) { return t !== undefined && null !== t && (t instanceof e ? this.toString() === t.toString() : "string" == typeof t && e.isValid(t) && 12 === t.length && this.id instanceof A.Buffer ? t === this.id.toString("binary") : "string" == typeof t && e.isValid(t) && 24 === t.length ? t.toLowerCase() === this.toHexString() : "string" == typeof t && e.isValid(t) && 12 === t.length ? A.Buffer.from(t).equals(this.id) : "object" === (0, o["default"])(t) && "toHexString" in t && "function" == typeof t.toHexString && t.toHexString() === this.toHexString()) }, e.prototype.getTimestamp = function() {
                                    var e = new Date,
                                        t = this.id.readUInt32BE(0);
                                    return e.setTime(1e3 * Math.floor(t)), e
                                }, e.createPk = function() { return new e }, e.createFromTime = function(t) { var n = A.Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); return n.writeUInt32BE(t, 0), new e(n) }, e.createFromHexString = function(t) { if (void 0 === t || null != t && 24 !== t.length) throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"); return new e(A.Buffer.from(t, "hex")) }, e.isValid = function(t) { return null != t && ("number" == typeof t || ("string" == typeof t ? 12 === t.length || 24 === t.length && r.test(t) : t instanceof e || t instanceof A.Buffer && 12 === t.length || "object" === (0, o["default"])(t) && "toHexString" in t && "function" == typeof t.toHexString && ("string" == typeof t.id ? 12 === t.id.length : 24 === t.toHexString().length && r.test(t.id.toString("hex"))))) }, e.prototype.toExtendedJSON = function() { return this.toHexString ? { $oid: this.toHexString() } : { $oid: this.toString("hex") } }, e.fromExtendedJSON = function(t) { return new e(t.$oid) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return 'new ObjectId("' + this.toHexString() + '")' }, e.index = ~~(16777215 * Math.random()), e
                            }();
                        t.ObjectId = f, Object.defineProperty(f.prototype, "generate", { value: ie.deprecate((function(e) { return f.generate(e) }), "Please use the static `ObjectId.generate(time)` instead") }), Object.defineProperty(f.prototype, "getInc", { value: ie.deprecate((function() { return f.getInc() }), "Please use the static `ObjectId.getInc()` instead") }), Object.defineProperty(f.prototype, "get_inc", { value: ie.deprecate((function() { return f.getInc() }), "Please use the static `ObjectId.getInc()` instead") }), Object.defineProperty(f, "get_inc", { value: ie.deprecate((function() { return f.getInc() }), "Please use the static `ObjectId.getInc()` instead") }), Object.defineProperty(f.prototype, "_bsontype", { value: "ObjectID" })
                    }));
                    s(_e), _e.ObjectId;
                    var ve = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.BSONRegExp = void 0;
                        var n = function() {
                            function e(t, n) {
                                if (!(this instanceof e)) return new e(t, n);
                                this.pattern = t, this.options = null != n ? n : "", this.options.split("").sort().join("");
                                for (var r = 0; r < this.options.length; r++)
                                    if ("i" !== this.options[r] && "m" !== this.options[r] && "x" !== this.options[r] && "l" !== this.options[r] && "s" !== this.options[r] && "u" !== this.options[r]) throw new Error("The regular expression option [" + this.options[r] + "] is not supported")
                            }
                            return e.parseOptions = function(e) { return e ? e.split("").sort().join("") : "" }, e.prototype.toExtendedJSON = function(e) { return (e = e || {}).legacy ? { $regex: this.pattern, $options: this.options } : { $regularExpression: { pattern: this.pattern, options: this.options } } }, e.fromExtendedJSON = function(t) { if ("$regex" in t) { if ("string" == typeof t.$regex) return new e(t.$regex, e.parseOptions(t.$options)); if ("BSONRegExp" === t.$regex._bsontype) return t } if ("$regularExpression" in t) return new e(t.$regularExpression.pattern, e.parseOptions(t.$regularExpression.options)); throw new TypeError("Unexpected BSONRegExp EJSON object form: " + JSON.stringify(t)) }, e
                        }();
                        t.BSONRegExp = n, Object.defineProperty(n.prototype, "_bsontype", { value: "BSONRegExp" })
                    }));
                    s(ve), ve.BSONRegExp;
                    var me = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.BSONSymbol = void 0;
                        var n = function() {
                            function e(t) {
                                if (!(this instanceof e)) return new e(t);
                                this.value = t
                            }
                            return e.prototype.valueOf = function() { return this.value }, e.prototype.toString = function() { return this.value }, e.prototype.inspect = function() { return 'new BSONSymbol("' + this.value + '")' }, e.prototype.toJSON = function() { return this.value }, e.prototype.toExtendedJSON = function() { return { $symbol: this.value } }, e.fromExtendedJSON = function(t) { return new e(t.$symbol) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e
                        }();
                        t.BSONSymbol = n, Object.defineProperty(n.prototype, "_bsontype", { value: "Symbol" })
                    }));
                    s(me), me.BSONSymbol;
                    var be = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Timestamp = t.LongWithoutOverridesClass = void 0, t.LongWithoutOverridesClass = le.Long;
                        var n = function(e) {
                            function t(n, r) { var o = this; return o instanceof t ? (o = le.Long.isLong(n) ? e.call(this, n.low, n.high, !0) || this : e.call(this, n, r, !0) || this, Object.defineProperty(o, "_bsontype", { value: "Timestamp", writable: !1, configurable: !1, enumerable: !1 }), o) : new t(n, r) }
                            return I.__extends(t, e), t.prototype.toJSON = function() { return { $timestamp: this.toString() } }, t.fromInt = function(e) { return new t(le.Long.fromInt(e, !0)) }, t.fromNumber = function(e) { return new t(le.Long.fromNumber(e, !0)) }, t.fromBits = function(e, n) { return new t(e, n) }, t.fromString = function(e, n) { return new t(le.Long.fromString(e, !0, n)) }, t.prototype.toExtendedJSON = function() { return { $timestamp: { t: this.high >>> 0, i: this.low >>> 0 } } }, t.fromExtendedJSON = function(e) { return new t(e.$timestamp.i, e.$timestamp.t) }, t.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, t.prototype.inspect = function() { return "new Timestamp(" + this.getLowBits().toString() + ", " + this.getHighBits().toString() + ")" }, t.MAX_VALUE = le.Long.MAX_UNSIGNED_VALUE, t
                        }(t.LongWithoutOverridesClass);
                        t.Timestamp = n
                    }));
                    s(be), be.Timestamp, be.LongWithoutOverridesClass;
                    var Oe = a((function(e, t) {
                        function n(e) { return ie.isObjectLike(e) && Reflect.has(e, "_bsontype") && "string" == typeof e._bsontype }
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.EJSON = t.isBSONType = void 0, t.isBSONType = n;
                        var r = 2147483647,
                            i = -2147483648,
                            s = 0x8000000000000000,
                            a = -0x8000000000000000,
                            u = { $oid: _e.ObjectId, $binary: ue.Binary, $uuid: ue.Binary, $symbol: me.BSONSymbol, $numberInt: he.Int32, $numberDecimal: pe.Decimal128, $numberDouble: de.Double, $numberLong: le.Long, $minKey: ge.MinKey, $maxKey: ye.MaxKey, $regex: ve.BSONRegExp, $regularExpression: ve.BSONRegExp, $timestamp: be.Timestamp };

                        function c(e, t) {
                            if (void 0 === t && (t = {}), "number" == typeof e) { if (t.relaxed || t.legacy) return e; if (Math.floor(e) === e) { if (e >= i && e <= r) return new he.Int32(e); if (e >= a && e <= s) return le.Long.fromNumber(e) } return new de.Double(e) }
                            if (null == e || "object" !== (0, o["default"])(e)) return e;
                            if (e.$undefined) return null;
                            for (var n = Object.keys(e).filter((function(t) { return t.startsWith("$") && null != e[t] })), f = 0; f < n.length; f++) { var l = u[n[f]]; if (l) return l.fromExtendedJSON(e, t) }
                            if (null != e.$date) {
                                var p = e.$date,
                                    d = new Date;
                                return t.legacy ? "number" == typeof p ? d.setTime(p) : "string" == typeof p && d.setTime(Date.parse(p)) : "string" == typeof p ? d.setTime(Date.parse(p)) : le.Long.isLong(p) ? d.setTime(p.toNumber()) : "number" == typeof p && t.relaxed && d.setTime(p), d
                            }
                            if (null != e.$code) { var h = Object.assign({}, e); return e.$scope && (h.$scope = c(e.$scope)), ce.Code.fromExtendedJSON(e) }
                            if (null != e.$ref || null != e.$dbPointer) {
                                var y = e.$ref ? e : e.$dbPointer;
                                if (y instanceof fe.DBRef) return y;
                                var g = Object.keys(y).filter((function(e) { return e.startsWith("$") })),
                                    _ = !0;
                                if (g.forEach((function(e) {-1 === ["$ref", "$id", "$db"].indexOf(e) && (_ = !1) })), _) return fe.DBRef.fromExtendedJSON(y)
                            }
                            return e
                        }

                        function f(e) { var t = e.toISOString(); return 0 !== e.getUTCMilliseconds() ? t : t.slice(0, -5) + "Z" }

                        function l(e, t) {
                            if (Array.isArray(e)) return function(e, t) { return e.map((function(e) { return l(e, t) })) }(e, t);
                            if (e === undefined) return null;
                            if (e instanceof Date) {
                                var u = e.getTime(),
                                    c = u > -1 && u < 2534023188e5;
                                return t.legacy ? t.relaxed && c ? { $date: e.getTime() } : { $date: f(e) } : t.relaxed && c ? { $date: f(e) } : { $date: { $numberLong: e.getTime().toString() } }
                            }
                            if ("number" == typeof e && !t.relaxed) { if (Math.floor(e) === e) { var d = e >= a && e <= s; if (e >= i && e <= r) return { $numberInt: e.toString() }; if (d) return { $numberLong: e.toString() } } return { $numberDouble: e.toString() } }
                            if (e instanceof RegExp) {
                                var h = e.flags;
                                if (h === undefined) {
                                    var y = e.toString().match(/[gimuy]*$/);
                                    y && (h = y[0])
                                }
                                return new ve.BSONRegExp(e.source, h).toExtendedJSON(t)
                            }
                            return null != e && "object" === (0, o["default"])(e) ? function(e, t) {
                                if (null == e || "object" !== (0, o["default"])(e)) throw new Error("not an object instance");
                                var r = e._bsontype;
                                if (void 0 === r) { var i = {}; for (var s in e) i[s] = l(e[s], t); return i }
                                if (n(e)) {
                                    var a = e;
                                    if ("function" != typeof a.toExtendedJSON) {
                                        var u = p[e._bsontype];
                                        if (!u) throw new TypeError("Unrecognized or invalid _bsontype: " + e._bsontype);
                                        a = u(a)
                                    }
                                    return "Code" === r && a.scope ? a = new ce.Code(a.code, l(a.scope, t)) : "DBRef" === r && a.oid && (a = new fe.DBRef(a.collection, l(a.oid, t), a.db, a.fields)), a.toExtendedJSON(t)
                                }
                                throw new Error("_bsontype must be a string, but was: " + (0, o["default"])(r))
                            }(e, t) : e
                        }
                        var p = { Binary: function(e) { return new ue.Binary(e.value(), e.sub_type) }, Code: function(e) { return new ce.Code(e.code, e.scope) }, DBRef: function(e) { return new fe.DBRef(e.collection || e.namespace, e.oid, e.db, e.fields) }, Decimal128: function(e) { return new pe.Decimal128(e.bytes) }, Double: function(e) { return new de.Double(e.value) }, Int32: function(e) { return new he.Int32(e.value) }, Long: function(e) { return le.Long.fromBits(null != e.low ? e.low : e.low_, null != e.low ? e.high : e.high_, null != e.low ? e.unsigned : e.unsigned_) }, MaxKey: function() { return new ye.MaxKey }, MinKey: function() { return new ge.MinKey }, ObjectID: function(e) { return new _e.ObjectId(e) }, ObjectId: function(e) { return new _e.ObjectId(e) }, BSONRegExp: function(e) { return new ve.BSONRegExp(e.pattern, e.options) }, Symbol: function(e) { return new me.BSONSymbol(e.value) }, Timestamp: function(e) { return be.Timestamp.fromBits(e.low, e.high) } };
                        ! function(e) {
                            function t(e, t) { var n = Object.assign({}, { relaxed: !0, legacy: !1 }, t); return "boolean" == typeof n.relaxed && (n.strict = !n.relaxed), "boolean" == typeof n.strict && (n.relaxed = !n.strict), JSON.parse(e, (function(e, t) { return c(t, n) })) }

                            function n(e, t, n, r) { null != n && "object" === (0, o["default"])(n) && (r = n, n = 0), null == t || "object" !== (0, o["default"])(t) || Array.isArray(t) || (r = t, t = undefined, n = 0); var i = l(e, r = Object.assign({}, { relaxed: !0, legacy: !1 }, r)); return JSON.stringify(i, t, n) }
                            e.parse = t, e.stringify = n, e.serialize = function(e, t) { return t = t || {}, JSON.parse(n(e, t)) }, e.deserialize = function(e, n) { return n = n || {}, t(JSON.stringify(e), n) }
                        }(t.EJSON || (t.EJSON = {}))
                    }));
                    s(Oe), Oe.EJSON, Oe.isBSONType;
                    var Ae = a((function(e, t) {
                        var n;
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Map = void 0, t.Map = n;
                        var r = function(e) { return e && e.Math == Math && e },
                            s = r("object" === ("undefined" == typeof globalThis ? "undefined" : (0, o["default"])(globalThis)) && globalThis) || r("object" === ("undefined" == typeof window ? "undefined" : (0, o["default"])(window)) && window) || r("object" === ("undefined" == typeof self ? "undefined" : (0, o["default"])(self)) && self) || r("object" === (0, o["default"])(i) && i) || Function("return this")();
                        Object.prototype.hasOwnProperty.call(s, "Map") ? t.Map = n = s.Map : t.Map = n = function() {
                            function e(e) {
                                void 0 === e && (e = []), this._keys = [], this._values = {};
                                for (var t = 0; t < e.length; t++)
                                    if (null != e[t]) {
                                        var n = e[t],
                                            r = n[0],
                                            o = n[1];
                                        this._keys.push(r), this._values[r] = { v: o, i: this._keys.length - 1 }
                                    }
                            }
                            return e.prototype.clear = function() { this._keys = [], this._values = {} }, e.prototype["delete"] = function(e) { var t = this._values[e]; return null != t && (delete this._values[e], this._keys.splice(t.i, 1), !0) }, e.prototype.entries = function() {
                                var e = this,
                                    t = 0;
                                return { next: function() { var n = e._keys[t++]; return { value: n !== undefined ? [n, e._values[n].v] : undefined, done: n === undefined } } }
                            }, e.prototype.forEach = function(e, t) {
                                t = t || this;
                                for (var n = 0; n < this._keys.length; n++) {
                                    var r = this._keys[n];
                                    e.call(t, this._values[r].v, r, t)
                                }
                            }, e.prototype.get = function(e) { return this._values[e] ? this._values[e].v : undefined }, e.prototype.has = function(e) { return null != this._values[e] }, e.prototype.keys = function() {
                                var e = this,
                                    t = 0;
                                return { next: function() { var n = e._keys[t++]; return { value: n !== undefined ? n : undefined, done: n === undefined } } }
                            }, e.prototype.set = function(e, t) { return this._values[e] ? (this._values[e].v = t, this) : (this._keys.push(e), this._values[e] = { v: t, i: this._keys.length - 1 }, this) }, e.prototype.values = function() {
                                var e = this,
                                    t = 0;
                                return { next: function() { var n = e._keys[t++]; return { value: n !== undefined ? e._values[n].v : undefined, done: n === undefined } } }
                            }, Object.defineProperty(e.prototype, "size", { get: function() { return this._keys.length }, enumerable: !1, configurable: !0 }), e
                        }()
                    }));
                    s(Ae), Ae.Map;
                    var we = a((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.BSON_BINARY_SUBTYPE_USER_DEFINED = t.BSON_BINARY_SUBTYPE_MD5 = t.BSON_BINARY_SUBTYPE_UUID_NEW = t.BSON_BINARY_SUBTYPE_UUID = t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = t.BSON_BINARY_SUBTYPE_FUNCTION = t.BSON_BINARY_SUBTYPE_DEFAULT = t.BSON_DATA_MAX_KEY = t.BSON_DATA_MIN_KEY = t.BSON_DATA_DECIMAL128 = t.BSON_DATA_LONG = t.BSON_DATA_TIMESTAMP = t.BSON_DATA_INT = t.BSON_DATA_CODE_W_SCOPE = t.BSON_DATA_SYMBOL = t.BSON_DATA_CODE = t.BSON_DATA_DBPOINTER = t.BSON_DATA_REGEXP = t.BSON_DATA_NULL = t.BSON_DATA_DATE = t.BSON_DATA_BOOLEAN = t.BSON_DATA_OID = t.BSON_DATA_UNDEFINED = t.BSON_DATA_BINARY = t.BSON_DATA_ARRAY = t.BSON_DATA_OBJECT = t.BSON_DATA_STRING = t.BSON_DATA_NUMBER = t.JS_INT_MIN = t.JS_INT_MAX = t.BSON_INT64_MIN = t.BSON_INT64_MAX = t.BSON_INT32_MIN = t.BSON_INT32_MAX = void 0, t.BSON_INT32_MAX = 2147483647, t.BSON_INT32_MIN = -2147483648, t.BSON_INT64_MAX = Math.pow(2, 63) - 1, t.BSON_INT64_MIN = -Math.pow(2, 63), t.JS_INT_MAX = Math.pow(2, 53), t.JS_INT_MIN = -Math.pow(2, 53), t.BSON_DATA_NUMBER = 1, t.BSON_DATA_STRING = 2, t.BSON_DATA_OBJECT = 3, t.BSON_DATA_ARRAY = 4, t.BSON_DATA_BINARY = 5, t.BSON_DATA_UNDEFINED = 6, t.BSON_DATA_OID = 7, t.BSON_DATA_BOOLEAN = 8, t.BSON_DATA_DATE = 9, t.BSON_DATA_NULL = 10, t.BSON_DATA_REGEXP = 11, t.BSON_DATA_DBPOINTER = 12, t.BSON_DATA_CODE = 13, t.BSON_DATA_SYMBOL = 14, t.BSON_DATA_CODE_W_SCOPE = 15, t.BSON_DATA_INT = 16, t.BSON_DATA_TIMESTAMP = 17, t.BSON_DATA_LONG = 18, t.BSON_DATA_DECIMAL128 = 19, t.BSON_DATA_MIN_KEY = 255, t.BSON_DATA_MAX_KEY = 127, t.BSON_BINARY_SUBTYPE_DEFAULT = 0, t.BSON_BINARY_SUBTYPE_FUNCTION = 1, t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2, t.BSON_BINARY_SUBTYPE_UUID = 3, t.BSON_BINARY_SUBTYPE_UUID_NEW = 4, t.BSON_BINARY_SUBTYPE_MD5 = 5, t.BSON_BINARY_SUBTYPE_USER_DEFINED = 128 }));
                    s(we), we.BSON_BINARY_SUBTYPE_USER_DEFINED, we.BSON_BINARY_SUBTYPE_MD5, we.BSON_BINARY_SUBTYPE_UUID_NEW, we.BSON_BINARY_SUBTYPE_UUID, we.BSON_BINARY_SUBTYPE_BYTE_ARRAY, we.BSON_BINARY_SUBTYPE_FUNCTION, we.BSON_BINARY_SUBTYPE_DEFAULT, we.BSON_DATA_MAX_KEY, we.BSON_DATA_MIN_KEY, we.BSON_DATA_DECIMAL128, we.BSON_DATA_LONG, we.BSON_DATA_TIMESTAMP, we.BSON_DATA_INT, we.BSON_DATA_CODE_W_SCOPE, we.BSON_DATA_SYMBOL, we.BSON_DATA_CODE, we.BSON_DATA_DBPOINTER, we.BSON_DATA_REGEXP, we.BSON_DATA_NULL, we.BSON_DATA_DATE, we.BSON_DATA_BOOLEAN, we.BSON_DATA_OID, we.BSON_DATA_UNDEFINED, we.BSON_DATA_BINARY, we.BSON_DATA_ARRAY, we.BSON_DATA_OBJECT, we.BSON_DATA_STRING, we.BSON_DATA_NUMBER, we.JS_INT_MIN, we.JS_INT_MAX, we.BSON_INT64_MIN, we.BSON_INT64_MAX, we.BSON_INT32_MIN, we.BSON_INT32_MAX;
                    var Se = a((function(e, t) {
                        function n(e, t, n) {
                            var o = 5;
                            if (Array.isArray(e))
                                for (var i = 0; i < e.length; i++) o += r(i.toString(), e[i], t, !0, n);
                            else
                                for (var s in e.toBSON && (e = e.toBSON()), e) o += r(s, e[s], t, !1, n);
                            return o
                        }

                        function r(e, t, r, i, s) {
                            switch (void 0 === r && (r = !1), void 0 === i && (i = !1), void 0 === s && (s = !1), t && t.toBSON && (t = t.toBSON()), (0, o["default"])(t)) {
                                case "string":
                                    return 1 + A.Buffer.byteLength(e, "utf8") + 1 + 4 + A.Buffer.byteLength(t, "utf8") + 1;
                                case "number":
                                    return Math.floor(t) === t && t >= we.JS_INT_MIN && t <= we.JS_INT_MAX && t >= we.BSON_INT32_MIN && t <= we.BSON_INT32_MAX ? (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 5 : (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 9;
                                case "undefined":
                                    return i || !s ? (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 : 0;
                                case "boolean":
                                    return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 2;
                                case "object":
                                    if (null == t || "MinKey" === t._bsontype || "MaxKey" === t._bsontype) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1;
                                    if ("ObjectId" === t._bsontype || "ObjectID" === t._bsontype) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 13;
                                    if (t instanceof Date || ie.isDate(t)) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 9;
                                    if (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 6 + t.byteLength;
                                    if ("Long" === t._bsontype || "Double" === t._bsontype || "Timestamp" === t._bsontype) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 9;
                                    if ("Decimal128" === t._bsontype) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 17;
                                    if ("Code" === t._bsontype) return null != t.scope && Object.keys(t.scope).length > 0 ? (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + A.Buffer.byteLength(t.code.toString(), "utf8") + 1 + n(t.scope, r, s) : (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + A.Buffer.byteLength(t.code.toString(), "utf8") + 1;
                                    if ("Binary" === t._bsontype) return t.sub_type === ue.Binary.SUBTYPE_BYTE_ARRAY ? (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1 + 4) : (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1);
                                    if ("Symbol" === t._bsontype) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + A.Buffer.byteLength(t.value, "utf8") + 4 + 1 + 1;
                                    if ("DBRef" === t._bsontype) { var a = Object.assign({ $ref: t.collection, $id: t.oid }, t.fields); return null != t.db && (a.$db = t.db), (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + n(a, r, s) }
                                    return t instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(t) ? (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + A.Buffer.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1 : "BSONRegExp" === t._bsontype ? (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + A.Buffer.byteLength(t.pattern, "utf8") + 1 + A.Buffer.byteLength(t.options, "utf8") + 1 : (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + n(t, r, s) + 1;
                                case "function":
                                    if (t instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(t) || "[object RegExp]" === String.call(t)) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + A.Buffer.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1;
                                    if (r && null != t.scope && Object.keys(t.scope).length > 0) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + A.Buffer.byteLength(ie.normalizedFunctionString(t), "utf8") + 1 + n(t.scope, r, s);
                                    if (r) return (null != e ? A.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + A.Buffer.byteLength(ie.normalizedFunctionString(t), "utf8") + 1
                            }
                            return 0
                        }
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.calculateObjectSize = void 0, t.calculateObjectSize = n
                    }));
                    s(Se), Se.calculateObjectSize;
                    var Ee = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.validateUtf8 = void 0, t.validateUtf8 = function(e, t, n) {
                            for (var r = 0, o = t; o < n; o += 1) {
                                var i = e[o];
                                if (r) {
                                    if (128 != (192 & i)) return !1;
                                    r -= 1
                                } else if (128 & i)
                                    if (192 == (224 & i)) r = 1;
                                    else if (224 == (240 & i)) r = 2;
                                else {
                                    if (240 != (248 & i)) return !1;
                                    r = 3
                                }
                            }
                            return !r
                        }
                    }));
                    s(Ee), Ee.validateUtf8;
                    var Ne = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.deserialize = void 0;
                        var n = le.Long.fromNumber(we.JS_INT_MAX),
                            r = le.Long.fromNumber(we.JS_INT_MIN),
                            o = {};

                        function i(e, t, a, u) {
                            void 0 === u && (u = !1);
                            var c = null != a.evalFunctions && a.evalFunctions,
                                f = null != a.cacheFunctions && a.cacheFunctions,
                                l = null == a.fieldsAsRaw ? null : a.fieldsAsRaw,
                                p = null != a.raw && a.raw,
                                d = "boolean" == typeof a.bsonRegExp && a.bsonRegExp,
                                h = null != a.promoteBuffers && a.promoteBuffers,
                                y = null == a.promoteLongs || a.promoteLongs,
                                g = null == a.promoteValues || a.promoteValues,
                                _ = t;
                            if (e.length < 5) throw new Error("corrupt bson message < 5 bytes long");
                            var v = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                            if (v < 5 || v > e.length) throw new Error("corrupt bson message");
                            for (var m = u ? [] : {}, b = 0;;) {
                                var O = e[t++];
                                if (0 === O) break;
                                for (var w = t; 0 !== e[w] && w < e.length;) w++;
                                if (w >= e.byteLength) throw new Error("Bad BSON Document: illegal CString");
                                var S = u ? b++ : e.toString("utf8", t, w);
                                if (t = w + 1, O === we.BSON_DATA_STRING) {
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    if (!Ee.validateUtf8(e, t, t + V - 1)) throw new Error("Invalid UTF-8 string in BSON document");
                                    var E = e.toString("utf8", t, t + V - 1);
                                    m[S] = E, t += V
                                } else if (O === we.BSON_DATA_OID) {
                                    var N = A.Buffer.alloc(12);
                                    e.copy(N, 0, t, t + 12), m[S] = new _e.ObjectId(N), t += 12
                                } else if (O === we.BSON_DATA_INT && !1 === g) m[S] = new he.Int32(e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24);
                                else if (O === we.BSON_DATA_INT) m[S] = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                                else if (O === we.BSON_DATA_NUMBER && !1 === g) m[S] = new de.Double(e.readDoubleLE(t)), t += 8;
                                else if (O === we.BSON_DATA_NUMBER) m[S] = e.readDoubleLE(t), t += 8;
                                else if (O === we.BSON_DATA_DATE) {
                                    var T = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24,
                                        I = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                                    m[S] = new Date(new le.Long(T, I).toNumber())
                                } else if (O === we.BSON_DATA_BOOLEAN) {
                                    if (0 !== e[t] && 1 !== e[t]) throw new Error("illegal boolean type value");
                                    m[S] = 1 === e[t++]
                                } else if (O === we.BSON_DATA_OBJECT) {
                                    var B = t;
                                    if ((z = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) <= 0 || z > e.length - t) throw new Error("bad embedded document length in bson");
                                    m[S] = p ? e.slice(t, t + z) : i(e, B, a, !1), t += z
                                } else if (O === we.BSON_DATA_ARRAY) {
                                    B = t;
                                    var P = a,
                                        L = t + (z = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24);
                                    if (l && l[S]) {
                                        for (var D in P = {}, a) P[D] = a[D];
                                        P.raw = !0
                                    }
                                    if (m[S] = i(e, B, P, !0), 0 !== e[(t += z) - 1]) throw new Error("invalid array terminator byte");
                                    if (t !== L) throw new Error("corrupted array bson")
                                } else if (O === we.BSON_DATA_UNDEFINED) m[S] = undefined;
                                else if (O === we.BSON_DATA_NULL) m[S] = null;
                                else if (O === we.BSON_DATA_LONG) {
                                    T = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, I = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                                    var R = new le.Long(T, I);
                                    m[S] = y && !0 === g && R.lessThanOrEqual(n) && R.greaterThanOrEqual(r) ? R.toNumber() : R
                                } else if (O === we.BSON_DATA_DECIMAL128) {
                                    var M = A.Buffer.alloc(16);
                                    e.copy(M, 0, t, t + 16), t += 16;
                                    var C = new pe.Decimal128(M);
                                    "toObject" in C && "function" == typeof C.toObject ? m[S] = C.toObject() : m[S] = C
                                } else if (O === we.BSON_DATA_BINARY) {
                                    var x = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24,
                                        k = x,
                                        U = e[t++];
                                    if (x < 0) throw new Error("Negative binary type element size found");
                                    if (x > e.byteLength) throw new Error("Binary type size larger than document size");
                                    if (null != e.slice) {
                                        if (U === ue.Binary.SUBTYPE_BYTE_ARRAY) { if ((x = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02"); if (x > k - 4) throw new Error("Binary type with subtype 0x02 contains too long binary size"); if (x < k - 4) throw new Error("Binary type with subtype 0x02 contains too short binary size") }
                                        m[S] = h && g ? e.slice(t, t + x) : new ue.Binary(e.slice(t, t + x), U)
                                    } else {
                                        var j = A.Buffer.alloc(x);
                                        if (U === ue.Binary.SUBTYPE_BYTE_ARRAY) { if ((x = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02"); if (x > k - 4) throw new Error("Binary type with subtype 0x02 contains too long binary size"); if (x < k - 4) throw new Error("Binary type with subtype 0x02 contains too short binary size") }
                                        for (w = 0; w < x; w++) j[w] = e[t + w];
                                        m[S] = h && g ? j : new ue.Binary(j, U)
                                    }
                                    t += x
                                } else if (O === we.BSON_DATA_REGEXP && !1 === d) {
                                    for (w = t; 0 !== e[w] && w < e.length;) w++;
                                    if (w >= e.length) throw new Error("Bad BSON Document: illegal CString");
                                    var Y = e.toString("utf8", t, w);
                                    for (w = t = w + 1; 0 !== e[w] && w < e.length;) w++;
                                    if (w >= e.length) throw new Error("Bad BSON Document: illegal CString");
                                    var $ = e.toString("utf8", t, w);
                                    t = w + 1;
                                    var q = new Array($.length);
                                    for (w = 0; w < $.length; w++) switch ($[w]) {
                                        case "m":
                                            q[w] = "m";
                                            break;
                                        case "s":
                                            q[w] = "g";
                                            break;
                                        case "i":
                                            q[w] = "i"
                                    }
                                    m[S] = new RegExp(Y, q.join(""))
                                } else if (O === we.BSON_DATA_REGEXP && !0 === d) {
                                    for (w = t; 0 !== e[w] && w < e.length;) w++;
                                    if (w >= e.length) throw new Error("Bad BSON Document: illegal CString");
                                    for (Y = e.toString("utf8", t, w), w = t = w + 1; 0 !== e[w] && w < e.length;) w++;
                                    if (w >= e.length) throw new Error("Bad BSON Document: illegal CString");
                                    $ = e.toString("utf8", t, w), t = w + 1, m[S] = new ve.BSONRegExp(Y, $)
                                } else if (O === we.BSON_DATA_SYMBOL) {
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    var F = e.toString("utf8", t, t + V - 1);
                                    m[S] = g ? F : new me.BSONSymbol(F), t += V
                                } else if (O === we.BSON_DATA_TIMESTAMP) T = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, I = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, m[S] = new be.Timestamp(T, I);
                                else if (O === we.BSON_DATA_MIN_KEY) m[S] = new ge.MinKey;
                                else if (O === we.BSON_DATA_MAX_KEY) m[S] = new ye.MaxKey;
                                else if (O === we.BSON_DATA_CODE) {
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    var G = e.toString("utf8", t, t + V - 1);
                                    m[S] = c ? f ? s(G, o, m) : s(G) : new ce.Code(G), t += V
                                } else if (O === we.BSON_DATA_CODE_W_SCOPE) {
                                    var W = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                                    if (W < 13) throw new Error("code_w_scope total size shorter minimum expected length");
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    G = e.toString("utf8", t, t + V - 1), B = t += V;
                                    var z = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24,
                                        H = i(e, B, a, !1);
                                    if (t += z, W < 8 + z + V) throw new Error("code_w_scope total size is too short, truncating scope");
                                    if (W > 8 + z + V) throw new Error("code_w_scope total size is too long, clips outer document");
                                    c ? (m[S] = f ? s(G, o, m) : s(G), m[S].scope = H) : m[S] = new ce.Code(G, H)
                                } else {
                                    if (O !== we.BSON_DATA_DBPOINTER) throw new Error("Detected unknown BSON type " + O.toString(16) + ' for fieldname "' + S + '"');
                                    var V;
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    if (!Ee.validateUtf8(e, t, t + V - 1)) throw new Error("Invalid UTF-8 string in BSON document");
                                    var K = e.toString("utf8", t, t + V - 1);
                                    t += V;
                                    var J = A.Buffer.alloc(12);
                                    e.copy(J, 0, t, t + 12), N = new _e.ObjectId(J), t += 12, m[S] = new fe.DBRef(K, N)
                                }
                            }
                            if (v !== t - _) { if (u) throw new Error("corrupt array bson"); throw new Error("corrupt object bson") }
                            var Q = Object.keys(m).filter((function(e) { return e.startsWith("$") })),
                                X = !0;
                            if (Q.forEach((function(e) {-1 === ["$ref", "$id", "$db"].indexOf(e) && (X = !1) })), !X) return m;
                            if (fe.isDBRefLike(m)) { var Z = Object.assign({}, m); return delete Z.$ref, delete Z.$id, delete Z.$db, new fe.DBRef(m.$ref, m.$id, m.$db, Z) }
                            return m
                        }

                        function s(e, t, n) { return t ? (null == t[e] && (t[e] = new Function(e)), t[e].bind(n)) : new Function(e) }
                        t.deserialize = function(e, t, n) {
                            var r = (t = null == t ? {} : t) && t.index ? t.index : 0,
                                o = e[r] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24;
                            if (o < 5) throw new Error("bson size must be >= 5, is " + o);
                            if (t.allowObjectSmallerThanBufferSize && e.length < o) throw new Error("buffer length " + e.length + " must be >= bson size " + o);
                            if (!t.allowObjectSmallerThanBufferSize && e.length !== o) throw new Error("buffer length " + e.length + " must === bson size " + o);
                            if (o + r > e.byteLength) throw new Error("(bson size " + o + " + options.index " + r + " must be <= buffer length " + e.byteLength + ")");
                            if (0 !== e[r + o - 1]) throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
                            return i(e, r, t, n)
                        }
                    }));
                    s(Ne), Ne.deserialize;
                    var Te = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.writeIEEE754 = t.readIEEE754 = void 0, t.readIEEE754 = function(e, t, n, r, o) {
                            var i, s, a = "big" === n,
                                u = 8 * o - r - 1,
                                c = (1 << u) - 1,
                                f = c >> 1,
                                l = -7,
                                p = a ? 0 : o - 1,
                                d = a ? 1 : -1,
                                h = e[t + p];
                            for (p += d, i = h & (1 << -l) - 1, h >>= -l, l += u; l > 0; i = 256 * i + e[t + p], p += d, l -= 8);
                            for (s = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; s = 256 * s + e[t + p], p += d, l -= 8);
                            if (0 === i) i = 1 - f;
                            else {
                                if (i === c) return s ? NaN : (h ? -1 : 1) * Infinity;
                                s += Math.pow(2, r), i -= f
                            }
                            return (h ? -1 : 1) * s * Math.pow(2, i - r)
                        }, t.writeIEEE754 = function(e, t, n, r, o, i) {
                            var s, a, u, c = "big" === r,
                                f = 8 * i - o - 1,
                                l = (1 << f) - 1,
                                p = l >> 1,
                                d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                h = c ? i - 1 : 0,
                                y = c ? -1 : 1,
                                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                            for (t = Math.abs(t), isNaN(t) || t === Infinity ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + p >= 1 ? d / u : d * Math.pow(2, 1 - p)) * u >= 2 && (s++, u /= 2), s + p >= l ? (a = 0, s = l) : s + p >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, o), s = 0)), isNaN(t) && (a = 0); o >= 8;) e[n + h] = 255 & a, h += y, a /= 256, o -= 8;
                            for (s = s << o | a, isNaN(t) && (s += 8), f += o; f > 0;) e[n + h] = 255 & s, h += y, s /= 256, f -= 8;
                            e[n + h - y] |= 128 * g
                        }
                    }));
                    s(Te), Te.writeIEEE754, Te.readIEEE754;
                    var Ie = a((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.serializeInto = void 0;
                        var n = /\x00/,
                            r = new Set(["$db", "$ref", "$id", "$clusterTime"]);

                        function i(e) { return "[object RegExp]" === Object.prototype.toString.call(e) }

                        function s(e, t, n, r, o) {
                            e[r++] = we.BSON_DATA_STRING;
                            var i = o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8");
                            e[(r = r + i + 1) - 1] = 0;
                            var s = e.write(n, r + 4, undefined, "utf8");
                            return e[r + 3] = s + 1 >> 24 & 255, e[r + 2] = s + 1 >> 16 & 255, e[r + 1] = s + 1 >> 8 & 255, e[r] = s + 1 & 255, r = r + 4 + s, e[r++] = 0, r
                        }

                        function a(e, t, n, r, o) { return Number.isInteger(n) && n >= we.BSON_INT32_MIN && n <= we.BSON_INT32_MAX ? (e[r++] = we.BSON_DATA_INT, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, e[r++] = 255 & n, e[r++] = n >> 8 & 255, e[r++] = n >> 16 & 255, e[r++] = n >> 24 & 255) : (e[r++] = we.BSON_DATA_NUMBER, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, Te.writeIEEE754(e, n, r, "little", 52, 8), r += 8), r }

                        function u(e, t, n, r, o) { return e[r++] = we.BSON_DATA_NULL, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, r }

                        function c(e, t, n, r, o) { return e[r++] = we.BSON_DATA_BOOLEAN, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, e[r++] = n ? 1 : 0, r }

                        function f(e, t, n, r, o) {
                            e[r++] = we.BSON_DATA_DATE, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var i = le.Long.fromNumber(n.getTime()),
                                s = i.getLowBits(),
                                a = i.getHighBits();
                            return e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255, e[r++] = 255 & a, e[r++] = a >> 8 & 255, e[r++] = a >> 16 & 255, e[r++] = a >> 24 & 255, r
                        }

                        function l(e, t, r, o, i) { if (e[o++] = we.BSON_DATA_REGEXP, o += i ? e.write(t, o, undefined, "ascii") : e.write(t, o, undefined, "utf8"), e[o++] = 0, r.source && null != r.source.match(n)) throw Error("value " + r.source + " must not contain null bytes"); return o += e.write(r.source, o, undefined, "utf8"), e[o++] = 0, r.ignoreCase && (e[o++] = 105), r.global && (e[o++] = 115), r.multiline && (e[o++] = 109), e[o++] = 0, o }

                        function p(e, t, r, o, i) { if (e[o++] = we.BSON_DATA_REGEXP, o += i ? e.write(t, o, undefined, "ascii") : e.write(t, o, undefined, "utf8"), e[o++] = 0, null != r.pattern.match(n)) throw Error("pattern " + r.pattern + " must not contain null bytes"); return o += e.write(r.pattern, o, undefined, "utf8"), e[o++] = 0, o += e.write(r.options.split("").sort().join(""), o, undefined, "utf8"), e[o++] = 0, o }

                        function d(e, t, n, r, o) { return null === n ? e[r++] = we.BSON_DATA_NULL : "MinKey" === n._bsontype ? e[r++] = we.BSON_DATA_MIN_KEY : e[r++] = we.BSON_DATA_MAX_KEY, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, r }

                        function h(e, t, n, r, o) {
                            if (e[r++] = we.BSON_DATA_OID, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, "string" == typeof n.id) e.write(n.id, r, undefined, "binary");
                            else {
                                if (!n.id || !n.id.copy) throw new TypeError("object [" + JSON.stringify(n) + "] is not a valid ObjectId");
                                n.id.copy(e, r, 0, 12)
                            }
                            return r + 12
                        }

                        function y(e, t, n, r, o) { e[r++] = we.BSON_DATA_BINARY, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0; var i = n.length; return e[r++] = 255 & i, e[r++] = i >> 8 & 255, e[r++] = i >> 16 & 255, e[r++] = i >> 24 & 255, e[r++] = we.BSON_BINARY_SUBTYPE_DEFAULT, e.set(se.ensureBuffer(n), r), r += i }

                        function g(e, t, n, r, o, i, s, a, u, c) {
                            void 0 === o && (o = !1), void 0 === i && (i = 0), void 0 === s && (s = !1), void 0 === a && (a = !0), void 0 === u && (u = !1), void 0 === c && (c = []);
                            for (var f = 0; f < c.length; f++)
                                if (c[f] === n) throw new Error("cyclic dependency detected");
                            c.push(n), e[r++] = Array.isArray(n) ? we.BSON_DATA_ARRAY : we.BSON_DATA_OBJECT, r += u ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var l = N(e, n, o, r, i + 1, s, a, c);
                            return c.pop(), l
                        }

                        function _(e, t, n, r, o) { return e[r++] = we.BSON_DATA_DECIMAL128, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, n.bytes.copy(e, r, 0, 16), r + 16 }

                        function v(e, t, n, r, o) {
                            e[r++] = "Long" === n._bsontype ? we.BSON_DATA_LONG : we.BSON_DATA_TIMESTAMP, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var i = n.getLowBits(),
                                s = n.getHighBits();
                            return e[r++] = 255 & i, e[r++] = i >> 8 & 255, e[r++] = i >> 16 & 255, e[r++] = i >> 24 & 255, e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255, r
                        }

                        function m(e, t, n, r, o) { return n = n.valueOf(), e[r++] = we.BSON_DATA_INT, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, e[r++] = 255 & n, e[r++] = n >> 8 & 255, e[r++] = n >> 16 & 255, e[r++] = n >> 24 & 255, r }

                        function b(e, t, n, r, o) { return e[r++] = we.BSON_DATA_NUMBER, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, Te.writeIEEE754(e, n.value, r, "little", 52, 8), r += 8 }

                        function O(e, t, n, r, o, i, s) {
                            e[r++] = we.BSON_DATA_CODE, r += s ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var a = ie.normalizedFunctionString(n),
                                u = e.write(a, r + 4, undefined, "utf8") + 1;
                            return e[r] = 255 & u, e[r + 1] = u >> 8 & 255, e[r + 2] = u >> 16 & 255, e[r + 3] = u >> 24 & 255, r = r + 4 + u - 1, e[r++] = 0, r
                        }

                        function A(e, t, n, r, i, s, a, u, c) {
                            if (void 0 === i && (i = !1), void 0 === s && (s = 0), void 0 === a && (a = !1), void 0 === u && (u = !0), void 0 === c && (c = !1), n.scope && "object" === (0, o["default"])(n.scope)) {
                                e[r++] = we.BSON_DATA_CODE_W_SCOPE, r += c ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                                var f = r,
                                    l = "string" == typeof n.code ? n.code : n.code.toString();
                                r += 4;
                                var p = e.write(l, r + 4, undefined, "utf8") + 1;
                                e[r] = 255 & p, e[r + 1] = p >> 8 & 255, e[r + 2] = p >> 16 & 255, e[r + 3] = p >> 24 & 255, e[r + 4 + p - 1] = 0, r = r + p + 4;
                                var d = N(e, n.scope, i, r, s + 1, a, u);
                                r = d - 1;
                                var h = d - f;
                                e[f++] = 255 & h, e[f++] = h >> 8 & 255, e[f++] = h >> 16 & 255, e[f++] = h >> 24 & 255, e[r++] = 0
                            } else {
                                e[r++] = we.BSON_DATA_CODE, r += c ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, l = n.code.toString();
                                var y = e.write(l, r + 4, undefined, "utf8") + 1;
                                e[r] = 255 & y, e[r + 1] = y >> 8 & 255, e[r + 2] = y >> 16 & 255, e[r + 3] = y >> 24 & 255, r = r + 4 + y - 1, e[r++] = 0
                            }
                            return r
                        }

                        function w(e, t, n, r, o) {
                            e[r++] = we.BSON_DATA_BINARY, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var i = n.value(!0),
                                s = n.position;
                            return n.sub_type === ue.Binary.SUBTYPE_BYTE_ARRAY && (s += 4), e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255, e[r++] = n.sub_type, n.sub_type === ue.Binary.SUBTYPE_BYTE_ARRAY && (s -= 4, e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255), e.set(i, r), r += n.position
                        }

                        function S(e, t, n, r, o) { e[r++] = we.BSON_DATA_SYMBOL, r += o ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0; var i = e.write(n.value, r + 4, undefined, "utf8") + 1; return e[r] = 255 & i, e[r + 1] = i >> 8 & 255, e[r + 2] = i >> 16 & 255, e[r + 3] = i >> 24 & 255, r = r + 4 + i - 1, e[r++] = 0, r }

                        function E(e, t, n, r, o, i, s) {
                            e[r++] = we.BSON_DATA_OBJECT, r += s ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var a = r,
                                u = { $ref: n.collection || n.namespace, $id: n.oid };
                            null != n.db && (u.$db = n.db);
                            var c = N(e, u = Object.assign(u, n.fields), !1, r, o + 1, i),
                                f = c - a;
                            return e[a++] = 255 & f, e[a++] = f >> 8 & 255, e[a++] = f >> 16 & 255, e[a++] = f >> 24 & 255, c
                        }

                        function N(e, t, N, T, I, B, P, L) {
                            void 0 === N && (N = !1), void 0 === T && (T = 0), void 0 === I && (I = 0), void 0 === B && (B = !1), void 0 === P && (P = !0), void 0 === L && (L = []), T = T || 0, (L = L || []).push(t);
                            var D = T + 4;
                            if (Array.isArray(t))
                                for (var R = 0; R < t.length; R++) {
                                    var M = "" + R;
                                    if ((U = t[R]) && U.toBSON) {
                                        if ("function" != typeof U.toBSON) throw new TypeError("toBSON is not a function");
                                        U = U.toBSON()
                                    }
                                    if ("string" == typeof U) D = s(e, M, U, D, !0);
                                    else if ("number" == typeof U) D = a(e, M, U, D, !0);
                                    else {
                                        if ("bigint" == typeof U) throw new TypeError("Unsupported type BigInt, please use Decimal128");
                                        if ("boolean" == typeof U) D = c(e, M, U, D, !0);
                                        else if (U instanceof Date || ie.isDate(U)) D = f(e, M, U, D, !0);
                                        else if (U === undefined) D = u(e, M, 0, D, !0);
                                        else if (null === U) D = u(e, M, 0, D, !0);
                                        else if ("ObjectId" === U._bsontype || "ObjectID" === U._bsontype) D = h(e, M, U, D, !0);
                                        else if (ie.isBuffer(U) || ie.isUint8Array(U)) D = y(e, M, U, D, !0);
                                        else if (U instanceof RegExp || i(U)) D = l(e, M, U, D, !0);
                                        else if ("object" === (0, o["default"])(U) && null == U._bsontype) D = g(e, M, U, D, N, I, B, P, !0, L);
                                        else if ("object" === (0, o["default"])(U) && Oe.isBSONType(U) && "Decimal128" === U._bsontype) D = _(e, M, U, D, !0);
                                        else if ("Long" === U._bsontype || "Timestamp" === U._bsontype) D = v(e, M, U, D, !0);
                                        else if ("Double" === U._bsontype) D = b(e, M, U, D, !0);
                                        else if ("function" == typeof U && B) D = O(e, M, U, D, 0, 0, !0);
                                        else if ("Code" === U._bsontype) D = A(e, M, U, D, N, I, B, P, !0);
                                        else if ("Binary" === U._bsontype) D = w(e, M, U, D, !0);
                                        else if ("Symbol" === U._bsontype) D = S(e, M, U, D, !0);
                                        else if ("DBRef" === U._bsontype) D = E(e, M, U, D, I, B, !0);
                                        else if ("BSONRegExp" === U._bsontype) D = p(e, M, U, D, !0);
                                        else if ("Int32" === U._bsontype) D = m(e, M, U, D, !0);
                                        else if ("MinKey" === U._bsontype || "MaxKey" === U._bsontype) D = d(e, M, U, D, !0);
                                        else if ("undefined" != typeof U._bsontype) throw new TypeError("Unrecognized or invalid _bsontype: " + U._bsontype)
                                    }
                                } else if (t instanceof Ae.Map)
                                    for (var C = t.entries(), x = !1; !x;) {
                                        var k = C.next();
                                        if (!(x = !!k.done)) {
                                            M = k.value[0];
                                            var U = k.value[1],
                                                j = (0, o["default"])(U);
                                            if ("string" == typeof M && !r.has(M)) { if (null != M.match(n)) throw Error("key " + M + " must not contain null bytes"); if (N) { if ("$" === M[0]) throw Error("key " + M + " must not start with '$'"); if (~M.indexOf(".")) throw Error("key " + M + " must not contain '.'") } }
                                            if ("string" === j) D = s(e, M, U, D);
                                            else if ("number" === j) D = a(e, M, U, D);
                                            else {
                                                if ("bigint" === j || ie.isBigInt64Array(U) || ie.isBigUInt64Array(U)) throw new TypeError("Unsupported type BigInt, please use Decimal128");
                                                if ("boolean" === j) D = c(e, M, U, D);
                                                else if (U instanceof Date || ie.isDate(U)) D = f(e, M, U, D);
                                                else if (null === U || U === undefined && !1 === P) D = u(e, M, 0, D);
                                                else if ("ObjectId" === U._bsontype || "ObjectID" === U._bsontype) D = h(e, M, U, D);
                                                else if (ie.isBuffer(U) || ie.isUint8Array(U)) D = y(e, M, U, D);
                                                else if (U instanceof RegExp || i(U)) D = l(e, M, U, D);
                                                else if ("object" === j && null == U._bsontype) D = g(e, M, U, D, N, I, B, P, !1, L);
                                                else if ("object" === j && "Decimal128" === U._bsontype) D = _(e, M, U, D);
                                                else if ("Long" === U._bsontype || "Timestamp" === U._bsontype) D = v(e, M, U, D);
                                                else if ("Double" === U._bsontype) D = b(e, M, U, D);
                                                else if ("Code" === U._bsontype) D = A(e, M, U, D, N, I, B, P);
                                                else if ("function" == typeof U && B) D = O(e, M, U, D, 0, 0, B);
                                                else if ("Binary" === U._bsontype) D = w(e, M, U, D);
                                                else if ("Symbol" === U._bsontype) D = S(e, M, U, D);
                                                else if ("DBRef" === U._bsontype) D = E(e, M, U, D, I, B);
                                                else if ("BSONRegExp" === U._bsontype) D = p(e, M, U, D);
                                                else if ("Int32" === U._bsontype) D = m(e, M, U, D);
                                                else if ("MinKey" === U._bsontype || "MaxKey" === U._bsontype) D = d(e, M, U, D);
                                                else if ("undefined" != typeof U._bsontype) throw new TypeError("Unrecognized or invalid _bsontype: " + U._bsontype)
                                            }
                                        }
                                    } else {
                                        if (t.toBSON) { if ("function" != typeof t.toBSON) throw new TypeError("toBSON is not a function"); if (null != (t = t.toBSON()) && "object" !== (0, o["default"])(t)) throw new TypeError("toBSON function did not return an object") }
                                        for (var M in t) {
                                            if ((U = t[M]) && U.toBSON) {
                                                if ("function" != typeof U.toBSON) throw new TypeError("toBSON is not a function");
                                                U = U.toBSON()
                                            }
                                            if (j = (0, o["default"])(U), "string" == typeof M && !r.has(M)) { if (null != M.match(n)) throw Error("key " + M + " must not contain null bytes"); if (N) { if ("$" === M[0]) throw Error("key " + M + " must not start with '$'"); if (~M.indexOf(".")) throw Error("key " + M + " must not contain '.'") } }
                                            if ("string" === j) D = s(e, M, U, D);
                                            else if ("number" === j) D = a(e, M, U, D);
                                            else {
                                                if ("bigint" === j) throw new TypeError("Unsupported type BigInt, please use Decimal128");
                                                if ("boolean" === j) D = c(e, M, U, D);
                                                else if (U instanceof Date || ie.isDate(U)) D = f(e, M, U, D);
                                                else if (U === undefined) !1 === P && (D = u(e, M, 0, D));
                                                else if (null === U) D = u(e, M, 0, D);
                                                else if ("ObjectId" === U._bsontype || "ObjectID" === U._bsontype) D = h(e, M, U, D);
                                                else if (ie.isBuffer(U) || ie.isUint8Array(U)) D = y(e, M, U, D);
                                                else if (U instanceof RegExp || i(U)) D = l(e, M, U, D);
                                                else if ("object" === j && null == U._bsontype) D = g(e, M, U, D, N, I, B, P, !1, L);
                                                else if ("object" === j && "Decimal128" === U._bsontype) D = _(e, M, U, D);
                                                else if ("Long" === U._bsontype || "Timestamp" === U._bsontype) D = v(e, M, U, D);
                                                else if ("Double" === U._bsontype) D = b(e, M, U, D);
                                                else if ("Code" === U._bsontype) D = A(e, M, U, D, N, I, B, P);
                                                else if ("function" == typeof U && B) D = O(e, M, U, D, 0, 0, B);
                                                else if ("Binary" === U._bsontype) D = w(e, M, U, D);
                                                else if ("Symbol" === U._bsontype) D = S(e, M, U, D);
                                                else if ("DBRef" === U._bsontype) D = E(e, M, U, D, I, B);
                                                else if ("BSONRegExp" === U._bsontype) D = p(e, M, U, D);
                                                else if ("Int32" === U._bsontype) D = m(e, M, U, D);
                                                else if ("MinKey" === U._bsontype || "MaxKey" === U._bsontype) D = d(e, M, U, D);
                                                else if ("undefined" != typeof U._bsontype) throw new TypeError("Unrecognized or invalid _bsontype: " + U._bsontype)
                                            }
                                        }
                                    }
                            L.pop(), e[D++] = 0;
                            var Y = D - T;
                            return e[T++] = 255 & Y, e[T++] = Y >> 8 & 255, e[T++] = Y >> 16 & 255, e[T++] = Y >> 24 & 255, D
                        }
                        t.serializeInto = N
                    }));
                    s(Ie), Ie.serializeInto;
                    var Be = a((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.deserializeStream = t.calculateObjectSize = t.deserialize = t.serializeWithBufferAndIndex = t.serialize = t.setInternalBufferSize = t.ObjectID = t.Decimal128 = t.BSONRegExp = t.MaxKey = t.MinKey = t.Int32 = t.Double = t.Timestamp = t.Long = t.ObjectId = t.Binary = t.DBRef = t.BSONSymbol = t.Map = t.Code = t.LongWithoutOverridesClass = t.EJSON = t.BSON_INT64_MIN = t.BSON_INT64_MAX = t.BSON_INT32_MIN = t.BSON_INT32_MAX = t.BSON_DATA_UNDEFINED = t.BSON_DATA_TIMESTAMP = t.BSON_DATA_SYMBOL = t.BSON_DATA_STRING = t.BSON_DATA_REGEXP = t.BSON_DATA_OID = t.BSON_DATA_OBJECT = t.BSON_DATA_NUMBER = t.BSON_DATA_NULL = t.BSON_DATA_MIN_KEY = t.BSON_DATA_MAX_KEY = t.BSON_DATA_LONG = t.BSON_DATA_INT = t.BSON_DATA_DECIMAL128 = t.BSON_DATA_DBPOINTER = t.BSON_DATA_DATE = t.BSON_DATA_CODE_W_SCOPE = t.BSON_DATA_CODE = t.BSON_DATA_BOOLEAN = t.BSON_DATA_BINARY = t.BSON_DATA_ARRAY = t.BSON_BINARY_SUBTYPE_UUID_NEW = t.BSON_BINARY_SUBTYPE_UUID = t.BSON_BINARY_SUBTYPE_USER_DEFINED = t.BSON_BINARY_SUBTYPE_MD5 = t.BSON_BINARY_SUBTYPE_FUNCTION = t.BSON_BINARY_SUBTYPE_DEFAULT = t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = void 0, Object.defineProperty(t, "Binary", { enumerable: !0, get: function() { return ue.Binary } }), Object.defineProperty(t, "Code", { enumerable: !0, get: function() { return ce.Code } }), Object.defineProperty(t, "DBRef", { enumerable: !0, get: function() { return fe.DBRef } }), Object.defineProperty(t, "Decimal128", { enumerable: !0, get: function() { return pe.Decimal128 } }), Object.defineProperty(t, "Double", { enumerable: !0, get: function() { return de.Double } }), Object.defineProperty(t, "Int32", { enumerable: !0, get: function() { return he.Int32 } }), Object.defineProperty(t, "Long", { enumerable: !0, get: function() { return le.Long } }), Object.defineProperty(t, "Map", { enumerable: !0, get: function() { return Ae.Map } }), Object.defineProperty(t, "MaxKey", { enumerable: !0, get: function() { return ye.MaxKey } }), Object.defineProperty(t, "MinKey", { enumerable: !0, get: function() { return ge.MinKey } }), Object.defineProperty(t, "ObjectId", { enumerable: !0, get: function() { return _e.ObjectId } }), Object.defineProperty(t, "ObjectID", { enumerable: !0, get: function() { return _e.ObjectId } }), Object.defineProperty(t, "BSONRegExp", { enumerable: !0, get: function() { return ve.BSONRegExp } }), Object.defineProperty(t, "BSONSymbol", { enumerable: !0, get: function() { return me.BSONSymbol } }), Object.defineProperty(t, "Timestamp", { enumerable: !0, get: function() { return be.Timestamp } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_BYTE_ARRAY", { enumerable: !0, get: function() { return we.BSON_BINARY_SUBTYPE_BYTE_ARRAY } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_DEFAULT", { enumerable: !0, get: function() { return we.BSON_BINARY_SUBTYPE_DEFAULT } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_FUNCTION", { enumerable: !0, get: function() { return we.BSON_BINARY_SUBTYPE_FUNCTION } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_MD5", { enumerable: !0, get: function() { return we.BSON_BINARY_SUBTYPE_MD5 } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_USER_DEFINED", { enumerable: !0, get: function() { return we.BSON_BINARY_SUBTYPE_USER_DEFINED } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_UUID", { enumerable: !0, get: function() { return we.BSON_BINARY_SUBTYPE_UUID } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_UUID_NEW", { enumerable: !0, get: function() { return we.BSON_BINARY_SUBTYPE_UUID_NEW } }), Object.defineProperty(t, "BSON_DATA_ARRAY", { enumerable: !0, get: function() { return we.BSON_DATA_ARRAY } }), Object.defineProperty(t, "BSON_DATA_BINARY", { enumerable: !0, get: function() { return we.BSON_DATA_BINARY } }), Object.defineProperty(t, "BSON_DATA_BOOLEAN", { enumerable: !0, get: function() { return we.BSON_DATA_BOOLEAN } }), Object.defineProperty(t, "BSON_DATA_CODE", { enumerable: !0, get: function() { return we.BSON_DATA_CODE } }), Object.defineProperty(t, "BSON_DATA_CODE_W_SCOPE", { enumerable: !0, get: function() { return we.BSON_DATA_CODE_W_SCOPE } }), Object.defineProperty(t, "BSON_DATA_DATE", { enumerable: !0, get: function() { return we.BSON_DATA_DATE } }), Object.defineProperty(t, "BSON_DATA_DBPOINTER", { enumerable: !0, get: function() { return we.BSON_DATA_DBPOINTER } }), Object.defineProperty(t, "BSON_DATA_DECIMAL128", { enumerable: !0, get: function() { return we.BSON_DATA_DECIMAL128 } }), Object.defineProperty(t, "BSON_DATA_INT", { enumerable: !0, get: function() { return we.BSON_DATA_INT } }), Object.defineProperty(t, "BSON_DATA_LONG", { enumerable: !0, get: function() { return we.BSON_DATA_LONG } }), Object.defineProperty(t, "BSON_DATA_MAX_KEY", { enumerable: !0, get: function() { return we.BSON_DATA_MAX_KEY } }), Object.defineProperty(t, "BSON_DATA_MIN_KEY", { enumerable: !0, get: function() { return we.BSON_DATA_MIN_KEY } }), Object.defineProperty(t, "BSON_DATA_NULL", { enumerable: !0, get: function() { return we.BSON_DATA_NULL } }), Object.defineProperty(t, "BSON_DATA_NUMBER", { enumerable: !0, get: function() { return we.BSON_DATA_NUMBER } }), Object.defineProperty(t, "BSON_DATA_OBJECT", { enumerable: !0, get: function() { return we.BSON_DATA_OBJECT } }), Object.defineProperty(t, "BSON_DATA_OID", { enumerable: !0, get: function() { return we.BSON_DATA_OID } }), Object.defineProperty(t, "BSON_DATA_REGEXP", { enumerable: !0, get: function() { return we.BSON_DATA_REGEXP } }), Object.defineProperty(t, "BSON_DATA_STRING", { enumerable: !0, get: function() { return we.BSON_DATA_STRING } }), Object.defineProperty(t, "BSON_DATA_SYMBOL", { enumerable: !0, get: function() { return we.BSON_DATA_SYMBOL } }), Object.defineProperty(t, "BSON_DATA_TIMESTAMP", { enumerable: !0, get: function() { return we.BSON_DATA_TIMESTAMP } }), Object.defineProperty(t, "BSON_DATA_UNDEFINED", { enumerable: !0, get: function() { return we.BSON_DATA_UNDEFINED } }), Object.defineProperty(t, "BSON_INT32_MAX", { enumerable: !0, get: function() { return we.BSON_INT32_MAX } }), Object.defineProperty(t, "BSON_INT32_MIN", { enumerable: !0, get: function() { return we.BSON_INT32_MIN } }), Object.defineProperty(t, "BSON_INT64_MAX", { enumerable: !0, get: function() { return we.BSON_INT64_MAX } }), Object.defineProperty(t, "BSON_INT64_MIN", { enumerable: !0, get: function() { return we.BSON_INT64_MIN } });
                            var n = Oe;
                            Object.defineProperty(t, "EJSON", { enumerable: !0, get: function() { return n.EJSON } });
                            var r = be;
                            Object.defineProperty(t, "LongWithoutOverridesClass", { enumerable: !0, get: function() { return r.LongWithoutOverridesClass } });
                            var o = 17825792,
                                i = A.Buffer.alloc(o);

                            function s(e) { i.length < e && (i = A.Buffer.alloc(e)) }

                            function a(e, t) {
                                void 0 === t && (t = {});
                                var n = "boolean" == typeof t.checkKeys && t.checkKeys,
                                    r = "boolean" == typeof t.serializeFunctions && t.serializeFunctions,
                                    s = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined,
                                    a = "number" == typeof t.minInternalBufferSize ? t.minInternalBufferSize : o;
                                i.length < a && (i = A.Buffer.alloc(a));
                                var u = Ie.serializeInto(i, e, n, 0, 0, r, s, []),
                                    c = A.Buffer.alloc(u);
                                return i.copy(c, 0, 0, c.length), c
                            }

                            function u(e, t, n) {
                                void 0 === n && (n = {});
                                var r = "boolean" == typeof n.checkKeys && n.checkKeys,
                                    o = "boolean" == typeof n.serializeFunctions && n.serializeFunctions,
                                    s = "boolean" != typeof n.ignoreUndefined || n.ignoreUndefined,
                                    a = "number" == typeof n.index ? n.index : 0,
                                    u = Ie.serializeInto(i, e, r, 0, 0, o, s);
                                return i.copy(t, a, 0, u), a + u - 1
                            }

                            function c(e, t) { return void 0 === t && (t = {}), Ne.deserialize(se.ensureBuffer(e), t) }

                            function f(e, t) {
                                void 0 === t && (t = {});
                                var n = "boolean" == typeof(t = t || {}).serializeFunctions && t.serializeFunctions,
                                    r = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined;
                                return Se.calculateObjectSize(e, n, r)
                            }

                            function l(e, t, n, r, o, i) {
                                for (var s = Object.assign({ allowObjectSmallerThanBufferSize: !0, index: 0 }, i), a = se.ensureBuffer(e), u = t, c = 0; c < n; c++) {
                                    var f = a[u] | a[u + 1] << 8 | a[u + 2] << 16 | a[u + 3] << 24;
                                    s.index = u, r[o + c] = Ne.deserialize(a, s), u += f
                                }
                                return u
                            }
                            t.setInternalBufferSize = s, t.serialize = a, t.serializeWithBufferAndIndex = u, t.deserialize = c, t.calculateObjectSize = f, t.deserializeStream = l;
                            var p = { Binary: ue.Binary, Code: ce.Code, DBRef: fe.DBRef, Decimal128: pe.Decimal128, Double: de.Double, Int32: he.Int32, Long: le.Long, Map: Ae.Map, MaxKey: ye.MaxKey, MinKey: ge.MinKey, ObjectId: _e.ObjectId, ObjectID: _e.ObjectId, BSONRegExp: ve.BSONRegExp, BSONSymbol: me.BSONSymbol, Timestamp: be.Timestamp, EJSON: Oe.EJSON, setInternalBufferSize: s, serialize: a, serializeWithBufferAndIndex: u, deserialize: c, calculateObjectSize: f, deserializeStream: l };
                            t["default"] = p
                        })),
                        Pe = s(Be),
                        Le = Be.deserializeStream;
                    t.deserializeStream = Le;
                    var De = Be.calculateObjectSize;
                    t.calculateObjectSize = De;
                    var Re = Be.deserialize;
                    t.deserialize = Re;
                    var Me = Be.serializeWithBufferAndIndex;
                    t.serializeWithBufferAndIndex = Me;
                    var Ce = Be.serialize;
                    t.serialize = Ce;
                    var xe = Be.setInternalBufferSize;
                    t.setInternalBufferSize = xe;
                    var ke = Be.ObjectID;
                    t.ObjectID = ke;
                    var Ue = Be.Decimal128;
                    t.Decimal128 = Ue;
                    var je = Be.BSONRegExp;
                    t.BSONRegExp = je;
                    var Ye = Be.MaxKey;
                    t.MaxKey = Ye;
                    var $e = Be.MinKey;
                    t.MinKey = $e;
                    var qe = Be.Int32;
                    t.Int32 = qe;
                    var Fe = Be.Double;
                    t.Double = Fe;
                    var Ge = Be.Timestamp;
                    t.Timestamp = Ge;
                    var We = Be.Long;
                    t.Long = We;
                    var ze = Be.ObjectId;
                    t.ObjectId = ze;
                    var He = Be.Binary;
                    t.Binary = He;
                    var Ve = Be.DBRef;
                    t.DBRef = Ve;
                    var Ke = Be.BSONSymbol;
                    t.BSONSymbol = Ke;
                    var Je = Be.Map;
                    t.Map = Je;
                    var Qe = Be.Code;
                    t.Code = Qe;
                    var Xe = Be.LongWithoutOverridesClass;
                    t.LongWithoutOverridesClass = Xe;
                    var Ze = Be.EJSON;
                    t.EJSON = Ze;
                    var et = Be.BSON_INT64_MIN;
                    t.BSON_INT64_MIN = et;
                    var tt = Be.BSON_INT64_MAX;
                    t.BSON_INT64_MAX = tt;
                    var nt = Be.BSON_INT32_MIN;
                    t.BSON_INT32_MIN = nt;
                    var rt = Be.BSON_INT32_MAX;
                    t.BSON_INT32_MAX = rt;
                    var ot = Be.BSON_DATA_UNDEFINED;
                    t.BSON_DATA_UNDEFINED = ot;
                    var it = Be.BSON_DATA_TIMESTAMP;
                    t.BSON_DATA_TIMESTAMP = it;
                    var st = Be.BSON_DATA_SYMBOL;
                    t.BSON_DATA_SYMBOL = st;
                    var at = Be.BSON_DATA_STRING;
                    t.BSON_DATA_STRING = at;
                    var ut = Be.BSON_DATA_REGEXP;
                    t.BSON_DATA_REGEXP = ut;
                    var ct = Be.BSON_DATA_OID;
                    t.BSON_DATA_OID = ct;
                    var ft = Be.BSON_DATA_OBJECT;
                    t.BSON_DATA_OBJECT = ft;
                    var lt = Be.BSON_DATA_NUMBER;
                    t.BSON_DATA_NUMBER = lt;
                    var pt = Be.BSON_DATA_NULL;
                    t.BSON_DATA_NULL = pt;
                    var dt = Be.BSON_DATA_MIN_KEY;
                    t.BSON_DATA_MIN_KEY = dt;
                    var ht = Be.BSON_DATA_MAX_KEY;
                    t.BSON_DATA_MAX_KEY = ht;
                    var yt = Be.BSON_DATA_LONG;
                    t.BSON_DATA_LONG = yt;
                    var gt = Be.BSON_DATA_INT;
                    t.BSON_DATA_INT = gt;
                    var _t = Be.BSON_DATA_DECIMAL128;
                    t.BSON_DATA_DECIMAL128 = _t;
                    var vt = Be.BSON_DATA_DBPOINTER;
                    t.BSON_DATA_DBPOINTER = vt;
                    var mt = Be.BSON_DATA_DATE;
                    t.BSON_DATA_DATE = mt;
                    var bt = Be.BSON_DATA_CODE_W_SCOPE;
                    t.BSON_DATA_CODE_W_SCOPE = bt;
                    var Ot = Be.BSON_DATA_CODE;
                    t.BSON_DATA_CODE = Ot;
                    var At = Be.BSON_DATA_BOOLEAN;
                    t.BSON_DATA_BOOLEAN = At;
                    var wt = Be.BSON_DATA_BINARY;
                    t.BSON_DATA_BINARY = wt;
                    var St = Be.BSON_DATA_ARRAY;
                    t.BSON_DATA_ARRAY = St;
                    var Et = Be.BSON_BINARY_SUBTYPE_UUID_NEW;
                    t.BSON_BINARY_SUBTYPE_UUID_NEW = Et;
                    var Nt = Be.BSON_BINARY_SUBTYPE_UUID;
                    t.BSON_BINARY_SUBTYPE_UUID = Nt;
                    var Tt = Be.BSON_BINARY_SUBTYPE_USER_DEFINED;
                    t.BSON_BINARY_SUBTYPE_USER_DEFINED = Tt;
                    var It = Be.BSON_BINARY_SUBTYPE_MD5;
                    t.BSON_BINARY_SUBTYPE_MD5 = It;
                    var Bt = Be.BSON_BINARY_SUBTYPE_FUNCTION;
                    t.BSON_BINARY_SUBTYPE_FUNCTION = Bt;
                    var Pt = Be.BSON_BINARY_SUBTYPE_DEFAULT;
                    t.BSON_BINARY_SUBTYPE_DEFAULT = Pt;
                    var Lt = Be.BSON_BINARY_SUBTYPE_BYTE_ARRAY;
                    t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = Lt;
                    var Dt = Pe;
                    t["default"] = Dt
                },
                4934: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = t.WxMpWebSocket = t.wxMpStorage = t.WxRequest = void 0;
                    var r, o = n(1588),
                        i = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        s = function() {
                            return (s = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        a = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function s(e) { try { u(r.next(e)) } catch (t) { i(t) } }

                                function a(e) { try { u(r["throw"](e)) } catch (t) { i(t) } }

                                function u(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        },
                        u = function(e, t) {
                            var n, r, o, i, s = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                            return i = { next: a(0), "throw": a(1), "return": a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function() { return this }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: i[1], done: !1 };
                                                case 5:
                                                    s.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) { s = 0; continue }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) { s.label = i[1]; break }
                                                    if (6 === i[0] && s.label < o[1]) { s.label = o[1], o = i; break }
                                                    if (o && s.label < o[2]) { s.label = o[2], s.ops.push(i); break }
                                                    o[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, s)
                                        } catch (a) { i = [6, a], r = 0 } finally { n = o = 0 }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    }([i, a])
                                }
                            }
                        },
                        c = function(e) {
                            function t(t) {
                                void 0 === t && (t = {});
                                var n = e.call(this) || this,
                                    r = t.timeout,
                                    o = t.timeoutMsg,
                                    i = t.restrictedMethods;
                                return n._timeout = r || 0, n._timeoutMsg = o || "请求超时", n._restrictedMethods = i || ["get", "post", "upload", "download"], n
                            }
                            return i(t, e), t.prototype.post = function(e) {
                                var t = this;
                                return new Promise((function(n, r) {
                                    var i = e.url,
                                        s = e.data,
                                        a = e.headers,
                                        u = wx.request({ url: (0, o.formatUrl)("https:", i), data: s, timeout: t._timeout, method: "POST", header: a, success: function(e) { n(e) }, fail: function(e) { r(e) }, complete: function(e) { if (e && e.errMsg && t._timeout && -1 !== t._restrictedMethods.indexOf("post") && "request:fail timeout" === e.errMsg) { console.warn(t._timeoutMsg); try { u.abort() } catch (n) {} } } })
                                }))
                            }, t.prototype.upload = function(e) {
                                var t = this,
                                    n = this;
                                return new Promise((function(r) {
                                    return a(t, void 0, void 0, (function() {
                                        var t, o, i, a, c, f;
                                        return u(this, (function(u) {
                                            return t = e.url, o = e.file, i = e.data, a = e.headers, c = e.onUploadProgress, f = wx.uploadFile({
                                                url: t,
                                                filePath: o,
                                                name: "file",
                                                formData: s({}, i),
                                                header: a,
                                                timeout: this._timeout,
                                                success: function(e) {
                                                    var t = { statusCode: e.statusCode, data: e.data || {} };
                                                    200 === e.statusCode && i.success_action_status && (t.statusCode = parseInt(i.success_action_status, 10)), r(t)
                                                },
                                                fail: function(e) { r(e) },
                                                complete: function(e) { if (e && e.errMsg && n._timeout && -1 !== n._restrictedMethods.indexOf("upload") && "request:fail timeout" === e.errMsg) { console.warn(n._timeoutMsg); try { f.abort() } catch (t) {} } }
                                            }), c && f.onProgressUpdate((function(e) { c(e) })), [2]
                                        }))
                                    }))
                                }))
                            }, t.prototype.download = function(e) {
                                var t = this,
                                    n = this;
                                return new Promise((function(r, i) {
                                    var s = e.url,
                                        a = e.headers,
                                        u = wx.downloadFile({ url: (0, o.formatUrl)("https:", s), header: a, timeout: t._timeout, success: function(e) { 200 === e.statusCode && e.tempFilePath ? r({ statusCode: 200, tempFilePath: e.tempFilePath }) : r(e) }, fail: function(e) { i(e) }, complete: function(e) { if (e && e.errMsg && n._timeout && -1 !== n._restrictedMethods.indexOf("download") && "request:fail timeout" === e.errMsg) { console.warn(n._timeoutMsg); try { u.abort() } catch (t) {} } } })
                                }))
                            }, t
                        }(o.AbstractSDKRequest);
                    t.WxRequest = c;
                    var f = { setItem: function(e, t) { wx.setStorageSync(e, t) }, getItem: function(e) { return wx.getStorageSync(e) }, removeItem: function(e) { wx.removeStorageSync(e) }, clear: function() { wx.clearStorageSync() } };
                    t.wxMpStorage = f;
                    var l = function(e, t) { void 0 === t && (t = {}); var n = wx.connectSocket(s({ url: e }, t)); return {set onopen(e) { n.onOpen(e) }, set onmessage(e) { n.onMessage(e) }, set onclose(e) { n.onClose(e) }, set onerror(e) { n.onError(e) }, send: function(e) { return n.send({ data: e }) }, close: function(e, t) { return n.close({ code: e, reason: t }) }, get readyState() { return n.readyState }, CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 } };
                    t.WxMpWebSocket = l;
                    var p = { genAdapter: function() { return { root: {}, reqClass: c, wsClass: l, localStorage: f, primaryStorage: o.StorageType.local, getAppSign: function() { var e = wx.getAccountInfoSync(); return "undefined" != typeof App || "undefined" != typeof getApp || wx.onAppHide || wx.offAppHide || wx.onAppShow || wx.offAppShow ? e && e.miniProgram ? e.miniProgram.appId : "" : e && e.plugin ? e.plugin.appId : "" } } }, isMatch: function() { if ("undefined" == typeof wx) return !1; if ("undefined" == typeof Page) return !1; if (!wx.getSystemInfoSync) return !1; if (!wx.getStorageSync) return !1; if (!wx.setStorageSync) return !1; if (!wx.connectSocket) return !1; if (!wx.request) return !1; try { if (!wx.getSystemInfoSync()) return !1; if ("qq" === wx.getSystemInfoSync().AppPlatform) return !1 } catch (e) { return !1 } return !0 }, runtime: "wx_mp" };
                    t["default"] = p
                },
                9935: function(e, t, n) {
                    "use strict";
                    var r, o, i, s, a = n(3483)(n(3988));
                    s = function() {
                        var e = e || function(e, t) {
                            var n = Object.create || function() {
                                    function e() {}
                                    return function(t) { var n; return e.prototype = t, n = new e, e.prototype = null, n }
                                }(),
                                r = {},
                                o = r.lib = {},
                                i = o.Base = {
                                    extend: function(e) { var t = n(this); return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() { t.$super.init.apply(this, arguments) }), t.init.prototype = t, t.$super = this, t },
                                    create: function() { var e = this.extend(); return e.init.apply(e, arguments), e },
                                    init: function() {},
                                    mixIn: function(e) {
                                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                                    },
                                    clone: function() { return this.init.prototype.extend(this) }
                                },
                                s = o.WordArray = i.extend({
                                    init: function(e, t) { e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length },
                                    toString: function(e) { return (e || u).stringify(this) },
                                    concat: function(e) {
                                        var t = this.words,
                                            n = e.words,
                                            r = this.sigBytes,
                                            o = e.sigBytes;
                                        if (this.clamp(), r % 4)
                                            for (var i = 0; i < o; i++) {
                                                var s = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                                t[r + i >>> 2] |= s << 24 - (r + i) % 4 * 8
                                            } else
                                                for (i = 0; i < o; i += 4) t[r + i >>> 2] = n[i >>> 2];
                                        return this.sigBytes += o, this
                                    },
                                    clamp: function() {
                                        var t = this.words,
                                            n = this.sigBytes;
                                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                                    },
                                    clone: function() { var e = i.clone.call(this); return e.words = this.words.slice(0), e },
                                    random: function(t) {
                                        for (var n, r = [], o = function(t) {
                                                t = t;
                                                var n = 987654321,
                                                    r = 4294967295;
                                                return function() { var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r; return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1) }
                                            }, i = 0; i < t; i += 4) {
                                            var a = o(4294967296 * (n || e.random()));
                                            n = 987654071 * a(), r.push(4294967296 * a() | 0)
                                        }
                                        return new s.init(r, t)
                                    }
                                }),
                                a = r.enc = {},
                                u = a.Hex = {
                                    stringify: function(e) {
                                        for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                                            var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                            r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16))
                                        }
                                        return r.join("")
                                    },
                                    parse: function(e) { for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4; return new s.init(n, t / 2) }
                                },
                                c = a.Latin1 = {
                                    stringify: function(e) {
                                        for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                                            var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                            r.push(String.fromCharCode(i))
                                        }
                                        return r.join("")
                                    },
                                    parse: function(e) { for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8; return new s.init(n, t) }
                                },
                                f = a.Utf8 = { stringify: function(e) { try { return decodeURIComponent(escape(c.stringify(e))) } catch (t) { throw new Error("Malformed UTF-8 data") } }, parse: function(e) { return c.parse(unescape(encodeURIComponent(e))) } },
                                l = o.BufferedBlockAlgorithm = i.extend({
                                    reset: function() { this._data = new s.init, this._nDataBytes = 0 },
                                    _append: function(e) { "string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes },
                                    _process: function(t) {
                                        var n = this._data,
                                            r = n.words,
                                            o = n.sigBytes,
                                            i = this.blockSize,
                                            a = o / (4 * i),
                                            u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
                                            c = e.min(4 * u, o);
                                        if (u) {
                                            for (var f = 0; f < u; f += i) this._doProcessBlock(r, f);
                                            var l = r.splice(0, u);
                                            n.sigBytes -= c
                                        }
                                        return new s.init(l, c)
                                    },
                                    clone: function() { var e = i.clone.call(this); return e._data = this._data.clone(), e },
                                    _minBufferSize: 0
                                }),
                                p = (o.Hasher = l.extend({ cfg: i.extend(), init: function(e) { this.cfg = this.cfg.extend(e), this.reset() }, reset: function() { l.reset.call(this), this._doReset() }, update: function(e) { return this._append(e), this._process(), this }, finalize: function(e) { return e && this._append(e), this._doFinalize() }, blockSize: 16, _createHelper: function(e) { return function(t, n) { return new e.init(n).finalize(t) } }, _createHmacHelper: function(e) { return function(t, n) { return new p.HMAC.init(e, n).finalize(t) } } }), r.algo = {});
                            return r
                        }(Math);
                        return e
                    }, "object" === (0, a["default"])(t) ? e.exports = t = s() : (o = [], (i = "function" == typeof(r = s) ? r.apply(t, o) : r) === undefined || (e.exports = i))
                },
                4544: function(e, t, n) {
                    "use strict";
                    var r, o, i, s, a = n(3483)(n(3988));
                    s = function(e) {
                        var t, n;
                        return n = (t = e).lib.WordArray, t.enc.Base64 = {
                            stringify: function(e) {
                                var t = e.words,
                                    n = e.sigBytes,
                                    r = this._map;
                                e.clamp();
                                for (var o = [], i = 0; i < n; i += 3)
                                    for (var s = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) o.push(r.charAt(s >>> 6 * (3 - a) & 63));
                                var u = r.charAt(64);
                                if (u)
                                    for (; o.length % 4;) o.push(u);
                                return o.join("")
                            },
                            parse: function(e) {
                                var t = e.length,
                                    r = this._map,
                                    o = this._reverseMap;
                                if (!o) { o = this._reverseMap = []; for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i }
                                var s = r.charAt(64);
                                if (s) { var a = e.indexOf(s); - 1 !== a && (t = a) }
                                return function(e, t, r) {
                                    for (var o = [], i = 0, s = 0; s < t; s++)
                                        if (s % 4) {
                                            var a = r[e.charCodeAt(s - 1)] << s % 4 * 2,
                                                u = r[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
                                            o[i >>> 2] |= (a | u) << 24 - i % 4 * 8, i++
                                        }
                                    return n.create(o, i)
                                }(e, t, o)
                            },
                            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                        }, e.enc.Base64
                    }, "object" === (0, a["default"])(t) ? e.exports = t = s(n(9935)) : (o = [n(9935)], (i = "function" == typeof(r = s) ? r.apply(t, o) : r) === undefined || (e.exports = i))
                },
                1801: function(e, t, n) {
                    "use strict";
                    var r, o, i, s, a = n(3483)(n(3988));
                    s = function(e) { return e.enc.Utf8 }, "object" === (0, a["default"])(t) ? e.exports = t = s(n(9935)) : (o = [n(9935)], (i = "function" == typeof(r = s) ? r.apply(t, o) : r) === undefined || (e.exports = i))
                },
                6443: function(e, t, n) {
                    "use strict";
                    var r, o, i, s, a = n(3483)(n(3988));
                    s = function(e) { return e.HmacSHA256 }, "object" === (0, a["default"])(t) ? e.exports = t = s(n(9935), n(2803), n(8836)) : (o = [n(9935), n(2803), n(8836)], (i = "function" == typeof(r = s) ? r.apply(t, o) : r) === undefined || (e.exports = i))
                },
                8836: function(e, t, n) {
                    "use strict";
                    var r, o, i, s, a = n(3483)(n(3988));
                    s = function(e) {
                        var t, n, r;
                        n = (t = e).lib.Base, r = t.enc.Utf8, t.algo.HMAC = n.extend({
                            init: function(e, t) {
                                e = this._hasher = new e.init, "string" == typeof t && (t = r.parse(t));
                                var n = e.blockSize,
                                    o = 4 * n;
                                t.sigBytes > o && (t = e.finalize(t)), t.clamp();
                                for (var i = this._oKey = t.clone(), s = this._iKey = t.clone(), a = i.words, u = s.words, c = 0; c < n; c++) a[c] ^= 1549556828, u[c] ^= 909522486;
                                i.sigBytes = s.sigBytes = o, this.reset()
                            },
                            reset: function() {
                                var e = this._hasher;
                                e.reset(), e.update(this._iKey)
                            },
                            update: function(e) { return this._hasher.update(e), this },
                            finalize: function(e) {
                                var t = this._hasher,
                                    n = t.finalize(e);
                                return t.reset(), t.finalize(this._oKey.clone().concat(n))
                            }
                        })
                    }, "object" === (0, a["default"])(t) ? e.exports = t = s(n(9935)) : (o = [n(9935)], (i = "function" == typeof(r = s) ? r.apply(t, o) : r) === undefined || (e.exports = i))
                },
                2803: function(e, t, n) {
                    "use strict";
                    var r, o, i, s, a = n(3483)(n(3988));
                    s = function(e) {
                        return function(t) {
                            var n = e,
                                r = n.lib,
                                o = r.WordArray,
                                i = r.Hasher,
                                s = n.algo,
                                a = [],
                                u = [];
                            ! function() {
                                function e(e) {
                                    for (var n = t.sqrt(e), r = 2; r <= n; r++)
                                        if (!(e % r)) return !1;
                                    return !0
                                }

                                function n(e) { return 4294967296 * (e - (0 | e)) | 0 }
                                for (var r = 2, o = 0; o < 64;) e(r) && (o < 8 && (a[o] = n(t.pow(r, .5))), u[o] = n(t.pow(r, 1 / 3)), o++), r++
                            }();
                            var c = [],
                                f = s.SHA256 = i.extend({
                                    _doReset: function() { this._hash = new o.init(a.slice(0)) },
                                    _doProcessBlock: function(e, t) {
                                        for (var n = this._hash.words, r = n[0], o = n[1], i = n[2], s = n[3], a = n[4], f = n[5], l = n[6], p = n[7], d = 0; d < 64; d++) {
                                            if (d < 16) c[d] = 0 | e[t + d];
                                            else {
                                                var h = c[d - 15],
                                                    y = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3,
                                                    g = c[d - 2],
                                                    _ = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                                                c[d] = y + c[d - 7] + _ + c[d - 16]
                                            }
                                            var v = r & o ^ r & i ^ o & i,
                                                m = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                                b = p + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & f ^ ~a & l) + u[d] + c[d];
                                            p = l, l = f, f = a, a = s + b | 0, s = i, i = o, o = r, r = b + (m + v) | 0
                                        }
                                        n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + i | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0, n[5] = n[5] + f | 0, n[6] = n[6] + l | 0, n[7] = n[7] + p | 0
                                    },
                                    _doFinalize: function() {
                                        var e = this._data,
                                            n = e.words,
                                            r = 8 * this._nDataBytes,
                                            o = 8 * e.sigBytes;
                                        return n[o >>> 5] |= 128 << 24 - o % 32, n[14 + (o + 64 >>> 9 << 4)] = t.floor(r / 4294967296), n[15 + (o + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * n.length, this._process(), this._hash
                                    },
                                    clone: function() { var e = i.clone.call(this); return e._hash = this._hash.clone(), e }
                                });
                            n.SHA256 = i._createHelper(f), n.HmacSHA256 = i._createHmacHelper(f)
                        }(Math), e.SHA256
                    }, "object" === (0, a["default"])(t) ? e.exports = t = s(n(9935)) : (o = [n(9935)], (i = "function" == typeof(r = s) ? r.apply(t, o) : r) === undefined || (e.exports = i))
                },
                5306: function(e) {
                    "use strict";
                    e.exports = function(e) {
                        var t = [];
                        return t.toString = function() {
                            return this.map((function(t) {
                                var n = function(e, t) {
                                    var n, r, o, i = e[1] || "",
                                        s = e[3];
                                    if (!s) return i;
                                    if (t && "function" == typeof btoa) {
                                        var a = (n = s, r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r), "/*# ".concat(o, " */")),
                                            u = s.sources.map((function(e) { return "/*# sourceURL=".concat(s.sourceRoot || "").concat(e, " */") }));
                                        return [i].concat(u).concat([a]).join("\n")
                                    }
                                    return [i].join("\n")
                                }(t, e);
                                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                            })).join("")
                        }, t.i = function(e, n, r) {
                            "string" == typeof e && (e = [
                                [null, e, ""]
                            ]);
                            var o = {};
                            if (r)
                                for (var i = 0; i < this.length; i++) {
                                    var s = this[i][0];
                                    null != s && (o[s] = !0)
                                }
                            for (var a = 0; a < e.length; a++) {
                                var u = [].concat(e[a]);
                                r && o[u[0]] || (n && (u[2] ? u[2] = "".concat(n, " and ").concat(u[2]) : u[2] = n), t.push(u))
                            }
                        }, t
                    }
                },
                3355: function(e, t, n) {
                    "use strict";
                    e = n.nmd(e);
                    var r = n(3483)(n(3988)),
                        o = function(e) {
                            var t, n = Object.prototype,
                                o = n.hasOwnProperty,
                                i = "function" == typeof Symbol ? Symbol : {},
                                s = i.iterator || "@@iterator",
                                a = i.asyncIterator || "@@asyncIterator",
                                u = i.toStringTag || "@@toStringTag";

                            function c(e, t, n) { return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t] }
                            try { c({}, "") } catch (D) { c = function(e, t, n) { return e[t] = n } }

                            function f(e, t, n, r) {
                                var o = t && t.prototype instanceof _ ? t : _,
                                    i = Object.create(o.prototype),
                                    s = new B(r || []);
                                return i._invoke = function(e, t, n) {
                                    var r = p;
                                    return function(o, i) {
                                        if (r === h) throw new Error("Generator is already running");
                                        if (r === y) { if ("throw" === o) throw i; return L() }
                                        for (n.method = o, n.arg = i;;) {
                                            var s = n.delegate;
                                            if (s) { var a = N(s, n); if (a) { if (a === g) continue; return a } }
                                            if ("next" === n.method) n.sent = n._sent = n.arg;
                                            else if ("throw" === n.method) {
                                                if (r === p) throw r = y, n.arg;
                                                n.dispatchException(n.arg)
                                            } else "return" === n.method && n.abrupt("return", n.arg);
                                            r = h;
                                            var u = l(e, t, n);
                                            if ("normal" === u.type) { if (r = n.done ? y : d, u.arg === g) continue; return { value: u.arg, done: n.done } }
                                            "throw" === u.type && (r = y, n.method = "throw", n.arg = u.arg)
                                        }
                                    }
                                }(e, n, s), i
                            }

                            function l(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (D) { return { type: "throw", arg: D } } }
                            e.wrap = f;
                            var p = "suspendedStart",
                                d = "suspendedYield",
                                h = "executing",
                                y = "completed",
                                g = {};

                            function _() {}

                            function v() {}

                            function m() {}
                            var b = {};
                            b[s] = function() { return this };
                            var O = Object.getPrototypeOf,
                                A = O && O(O(P([])));
                            A && A !== n && o.call(A, s) && (b = A);
                            var w = m.prototype = _.prototype = Object.create(b);

                            function S(e) {
                                ["next", "throw", "return"].forEach((function(t) { c(e, t, (function(e) { return this._invoke(t, e) })) }))
                            }

                            function E(e, t) {
                                function n(i, s, a, u) {
                                    var c = l(e[i], e, s);
                                    if ("throw" !== c.type) {
                                        var f = c.arg,
                                            p = f.value;
                                        return p && "object" === (0, r["default"])(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) { n("next", e, a, u) }), (function(e) { n("throw", e, a, u) })) : t.resolve(p).then((function(e) { f.value = e, a(f) }), (function(e) { return n("throw", e, a, u) }))
                                    }
                                    u(c.arg)
                                }
                                var i;
                                this._invoke = function(e, r) {
                                    function o() { return new t((function(t, o) { n(e, r, t, o) })) }
                                    return i = i ? i.then(o, o) : o()
                                }
                            }

                            function N(e, n) {
                                var r = e.iterator[n.method];
                                if (r === t) {
                                    if (n.delegate = null, "throw" === n.method) {
                                        if (e.iterator["return"] && (n.method = "return", n.arg = t, N(e, n), "throw" === n.method)) return g;
                                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return g
                                }
                                var o = l(r, e.iterator, n.arg);
                                if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g;
                                var i = o.arg;
                                return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                            }

                            function T(e) {
                                var t = { tryLoc: e[0] };
                                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                            }

                            function I(e) {
                                var t = e.completion || {};
                                t.type = "normal", delete t.arg, e.completion = t
                            }

                            function B(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(T, this), this.reset(!0) }

                            function P(e) {
                                if (e) {
                                    var n = e[s];
                                    if (n) return n.call(e);
                                    if ("function" == typeof e.next) return e;
                                    if (!isNaN(e.length)) {
                                        var r = -1,
                                            i = function n() {
                                                for (; ++r < e.length;)
                                                    if (o.call(e, r)) return n.value = e[r], n.done = !1, n;
                                                return n.value = t, n.done = !0, n
                                            };
                                        return i.next = i
                                    }
                                }
                                return { next: L }
                            }

                            function L() { return { value: t, done: !0 } }
                            return v.prototype = w.constructor = m, m.constructor = v, v.displayName = c(m, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name)) }, e.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, u, "GeneratorFunction")), e.prototype = Object.create(w), e }, e.awrap = function(e) { return { __await: e } }, S(E.prototype), E.prototype[a] = function() { return this }, e.AsyncIterator = E, e.async = function(t, n, r, o, i) { void 0 === i && (i = Promise); var s = new E(f(t, n, r, o), i); return e.isGeneratorFunction(n) ? s : s.next().then((function(e) { return e.done ? e.value : s.next() })) }, S(w), c(w, u, "Generator"), w[s] = function() { return this }, w.toString = function() { return "[object Generator]" }, e.keys = function(e) {
                                var t = [];
                                for (var n in e) t.push(n);
                                return t.reverse(),
                                    function r() { for (; t.length;) { var n = t.pop(); if (n in e) return r.value = n, r.done = !1, r } return r.done = !0, r }
                            }, e.values = P, B.prototype = {
                                constructor: B,
                                reset: function(e) {
                                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(I), !e)
                                        for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                                },
                                stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval },
                                dispatchException: function(e) {
                                    if (this.done) throw e;
                                    var n = this;

                                    function r(r, o) { return a.type = "throw", a.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o }
                                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                        var s = this.tryEntries[i],
                                            a = s.completion;
                                        if ("root" === s.tryLoc) return r("end");
                                        if (s.tryLoc <= this.prev) {
                                            var u = o.call(s, "catchLoc"),
                                                c = o.call(s, "finallyLoc");
                                            if (u && c) { if (this.prev < s.catchLoc) return r(s.catchLoc, !0); if (this.prev < s.finallyLoc) return r(s.finallyLoc) } else if (u) { if (this.prev < s.catchLoc) return r(s.catchLoc, !0) } else { if (!c) throw new Error("try statement without catch or finally"); if (this.prev < s.finallyLoc) return r(s.finallyLoc) }
                                        }
                                    }
                                },
                                abrupt: function(e, t) {
                                    for (var n = this.tryEntries.length - 1; n >= 0; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var i = r; break } }
                                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                                    var s = i ? i.completion : {};
                                    return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(s)
                                },
                                complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g },
                                finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), g } },
                                "catch": function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.tryLoc === e) {
                                            var r = n.completion;
                                            if ("throw" === r.type) {
                                                var o = r.arg;
                                                I(n)
                                            }
                                            return o
                                        }
                                    }
                                    throw new Error("illegal catch attempt")
                                },
                                delegateYield: function(e, n, r) { return this.delegate = { iterator: P(e), resultName: n, nextLoc: r }, "next" === this.method && (this.arg = t), g }
                            }, e
                        }("object" === (0, r["default"])(e) ? e.exports : {});
                    try { regeneratorRuntime = o } catch (i) { Function("r", "regeneratorRuntime = r")(o) }
                },
                9785: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0;
                    var o = r(n(6978)),
                        i = r(n(4920)),
                        s = r(n(7054)),
                        a = { components: { XkFooter: o["default"], XkIssue: i["default"], XkInfo: s["default"] } };
                    t.Z = a
                },
                5272: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0;
                    var o = r(n(8252)),
                        i = {
                            props: ["bbData", "name", "avatar", "fromColor"],
                            data: function() { return { content: "", date: "", from: "" } },
                            computed: { time_title: function() { return new Date(this.bbData.date).toLocaleString() } },
                            mounted: function() {
                                this.content = this.formatBody(this.bbData.content), this.from = this.bbData.from;
                                var e = this.bbData.date,
                                    t = (new Date).getTime() - new Date(e).getTime(),
                                    n = new Date(this.bbData.date).getTime() + 288e5,
                                    r = new Date(n).toJSON();
                                r = r.substr(0, 10).replace("T", " "), this.date = t > 26784e5 ? r : timeago.format(this.bbData.date, "zh_CN")
                            },
                            methods: {
                                formatBody: function(e) {
                                    if (o["default"].prototype.$marked) {
                                        var t = o["default"].prototype.$marked,
                                            n = { image: function(e, t, n) { return console.log(e), '<a href="'.concat(e, '" target="_blank" data-fancybox="group" class="fancybox">\n           <img src="').concat(e, "\" alt='").concat(n, "'>\n          </a>") } };
                                        return t.use({ renderer: n }), t(e, { breaks: !0, gfm: !0 })
                                    }
                                    var r;
                                    return r = (r = (r = (r = (r = e).replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gm, (function(e, t, n, r) { return t }))).replace(/!\[(.*?)\]\((.*?)\)/gm, (function(e, t, n) { return n }))).replace(/\bhttps?:[^:<>"]*\/([^:<>"]*)(\.(jpeg)|(png)|(jpg)|(webp))/g, (function(e) { return '<a href="'.concat(e, '" target="_blank" data-fancybox="group" class="fancybox">\n            <img src="').concat(e, '" ></a>') }))).replace(/\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|gif|mp4))\S+/g, (function(e) { return "<a href='".concat(e, "' rel='noopener' target='_blank'>↘链接↙</a>") })), window.qqWechatEmotionParser && (r = qqWechatEmotionParser(r)), r
                                }
                            }
                        };
                    t.Z = i
                },
                739: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0;
                    var r = n(306),
                        o = { data: function() { return { version: r.version, name: r.name } }, methods: {}, mounted: function() {} };
                    t.Z = o
                },
                317: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0, t.Z = { props: ["count"] }
                },
                4667: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0;
                    var o = r(n(6304)),
                        i = r(n(7402)),
                        s = r(n(6247)),
                        a = r(n(8252)),
                        u = r(n(3505)),
                        c = r(n(7054)),
                        f = r(n(7362));
                    n(1598), n(8722);
                    var l = {
                        components: (0, s["default"])({ XkCard: u["default"], XkInfo: c["default"] }, "XkInfo", c["default"]),
                        data: function() { return { envId: "", region: "", name: "", avatar: "", bbList: [], total: 0, message: "正在加载...", loading: !0, page: 1, limit: 5, app: null, showMessage: !1, fromColor: "", loadingImg: "https://7.dusays.com/2021/03/04/d2d5e983e2961.gif", dbName: "talks" } },
                        methods: {
                            login: function(e) {
                                return (0, i["default"])(o["default"].mark((function t() {
                                    var n;
                                    return o["default"].wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if ((n = e.auth({ persistence: "local" })).hasLoginState()) { t.next = 4; break }
                                                return t.next = 4, n.anonymousAuthProvider().signIn();
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            getCount: function() {
                                var e = this;
                                return (0, i["default"])(o["default"].mark((function t() {
                                    var n, r, i;
                                    return o["default"].wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e.app.database();
                                            case 2:
                                                return n = t.sent, t.next = 5, n.collection(e.dbName).count();
                                            case 5:
                                                r = t.sent, i = r.total, e.total = i;
                                            case 8:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            getData: function() {
                                var e = this;
                                return (0, i["default"])(o["default"].mark((function t() {
                                    var n, r, i, s;
                                    return o["default"].wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.loading = !0, e.showMessage = !0, n = e.app, r = n.database(), t.prev = 4, t.next = 7, r.collection("talks").limit(e.limit).skip((e.page - 1) * e.limit).orderBy("date", "desc").get();
                                            case 7:
                                                i = t.sent, s = i.data, e.bbList = e.bbList.concat(s), e.loading = !1, e.showMessage = !1, e.page++, t.next = 20;
                                                break;
                                            case 15:
                                                t.prev = 15, t.t0 = t["catch"](4), e.loading = !1, e.showMessage = !0, e.message = t.t0;
                                            case 20:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [4, 15]
                                    ])
                                })))()
                            }
                        },
                        mounted: function() {
                            var e = this;
                            return (0, i["default"])(o["default"].mark((function t() {
                                var n, r, i, s, u, c, l, p, d, h, y, g, _, v, m;
                                return o["default"].wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = a["default"].prototype.$speakData, r = n.name, i = n.avatar, s = n.envId, u = n.limit, c = void 0 === u ? 5 : u, l = n.dbName, p = void 0 === l ? "talks" : l, d = n.region, h = void 0 === d ? "ap-shanghai" : d, y = n.fromColor, g = void 0 === y ? "rgb(245, 150, 170)" : y, _ = n.loadingImg, v = void 0 === _ ? "https://7.dusays.com/2021/03/04/d2d5e983e2961.gif" : _, e.name = r, e.envId = s, e.avatar = i, e.fromColor = g, e.region = h, e.dbName = p, e.limit = Number(c), e.loadingImg = v, m = f["default"].init({ env: e.envId, region: e.region }), e.app = m, t.next = 13, e.login(e.app);
                                        case 13:
                                            return t.next = 15, e.getData();
                                        case 15:
                                            return t.next = 17, e.getCount();
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }
                    };
                    t.Z = l
                },
                1658: function(e, t) {
                    "use strict";
                    t.Z = function(e, t) {
                        for (var n = [], r = {}, o = 0; o < t.length; o++) {
                            var i = t[o],
                                s = i[0],
                                a = i[1],
                                u = i[2],
                                c = i[3],
                                f = { id: e + ":" + o, css: a, media: u, sourceMap: c };
                            r[s] ? r[s].parts.push(f) : n.push(r[s] = { id: s, parts: [f] })
                        }
                        return n
                    }
                },
                8252: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
                    var o = r(n(3988)),
                        i = Object.freeze({});

                    function s(e) { return e === undefined || null === e }

                    function a(e) { return e !== undefined && null !== e }

                    function u(e) { return !0 === e }

                    function c(e) { return "string" == typeof e || "number" == typeof e || "symbol" === (0, o["default"])(e) || "boolean" == typeof e }

                    function f(e) { return null !== e && "object" === (0, o["default"])(e) }
                    var l = Object.prototype.toString;

                    function p(e) { return "[object Object]" === l.call(e) }

                    function d(e) { return "[object RegExp]" === l.call(e) }

                    function h(e) { var t = parseFloat(String(e)); return t >= 0 && Math.floor(t) === t && isFinite(e) }

                    function y(e) { return a(e) && "function" == typeof e.then && "function" == typeof e["catch"] }

                    function g(e) { return null == e ? "" : Array.isArray(e) || p(e) && e.toString === l ? JSON.stringify(e, null, 2) : String(e) }

                    function _(e) { var t = parseFloat(e); return isNaN(t) ? e : t }

                    function v(e, t) { for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0; return t ? function(e) { return n[e.toLowerCase()] } : function(e) { return n[e] } }
                    v("slot,component", !0);
                    var m = v("key,ref,slot,slot-scope,is");

                    function b(e, t) { if (e.length) { var n = e.indexOf(t); if (n > -1) return e.splice(n, 1) } }
                    var O = Object.prototype.hasOwnProperty;

                    function A(e, t) { return O.call(e, t) }

                    function w(e) { var t = Object.create(null); return function(n) { return t[n] || (t[n] = e(n)) } }
                    var S = /-(\w)/g,
                        E = w((function(e) { return e.replace(S, (function(e, t) { return t ? t.toUpperCase() : "" })) })),
                        N = w((function(e) { return e.charAt(0).toUpperCase() + e.slice(1) })),
                        T = /\B([A-Z])/g,
                        I = w((function(e) { return e.replace(T, "-$1").toLowerCase() })),
                        B = Function.prototype.bind ? function(e, t) { return e.bind(t) } : function(e, t) {
                            function n(n) { var r = arguments.length; return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t) }
                            return n._length = e.length, n
                        };

                    function P(e, t) { t = t || 0; for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t]; return r }

                    function L(e, t) { for (var n in t) e[n] = t[n]; return e }

                    function D(e) { for (var t = {}, n = 0; n < e.length; n++) e[n] && L(t, e[n]); return t }

                    function R(e, t, n) {}
                    var M = function(e, t, n) { return !1 },
                        C = function(e) { return e };

                    function x(e, t) {
                        if (e === t) return !0;
                        var n = f(e),
                            r = f(t);
                        if (!n || !r) return !n && !r && String(e) === String(t);
                        try {
                            var o = Array.isArray(e),
                                i = Array.isArray(t);
                            if (o && i) return e.length === t.length && e.every((function(e, n) { return x(e, t[n]) }));
                            if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                            if (o || i) return !1;
                            var s = Object.keys(e),
                                a = Object.keys(t);
                            return s.length === a.length && s.every((function(n) { return x(e[n], t[n]) }))
                        } catch (u) { return !1 }
                    }

                    function k(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (x(e[n], t)) return n;
                        return -1
                    }

                    function U(e) { var t = !1; return function() { t || (t = !0, e.apply(this, arguments)) } }
                    var j = "data-server-rendered",
                        Y = ["component", "directive", "filter"],
                        $ = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
                        q = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: M, isReservedAttr: M, isUnknownElement: M, getTagNamespace: R, parsePlatformTagName: C, mustUseProp: M, async: !0, _lifecycleHooks: $ },
                        F = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

                    function G(e) { var t = (e + "").charCodeAt(0); return 36 === t || 95 === t }

                    function W(e, t, n, r) { Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 }) }
                    var z, H = new RegExp("[^" + F.source + ".$_\\d]"),
                        V = "__proto__" in {},
                        K = "undefined" != typeof window,
                        J = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
                        Q = J && WXEnvironment.platform.toLowerCase(),
                        X = K && window.navigator.userAgent.toLowerCase(),
                        Z = X && /msie|trident/.test(X),
                        ee = X && X.indexOf("msie 9.0") > 0,
                        te = X && X.indexOf("edge/") > 0,
                        ne = (X && X.indexOf("android"), X && /iphone|ipad|ipod|ios/.test(X) || "ios" === Q),
                        re = (X && /chrome\/\d+/.test(X), X && /phantomjs/.test(X), X && X.match(/firefox\/(\d+)/)),
                        oe = {}.watch,
                        ie = !1;
                    if (K) try {
                        var se = {};
                        Object.defineProperty(se, "passive", { get: function() { ie = !0 } }), window.addEventListener("test-passive", null, se)
                    } catch (Fo) {}
                    var ae = function() { return z === undefined && (z = !K && !J && "undefined" != typeof n.g && n.g.process && "server" === n.g.process.env.VUE_ENV), z },
                        ue = K && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

                    function ce(e) { return "function" == typeof e && /native code/.test(e.toString()) }
                    var fe, le = "undefined" != typeof Symbol && ce(Symbol) && "undefined" != typeof Reflect && ce(Reflect.ownKeys);
                    fe = "undefined" != typeof Set && ce(Set) ? Set : function() {
                        function e() { this.set = Object.create(null) }
                        return e.prototype.has = function(e) { return !0 === this.set[e] }, e.prototype.add = function(e) { this.set[e] = !0 }, e.prototype.clear = function() { this.set = Object.create(null) }, e
                    }();
                    var pe = R,
                        de = 0,
                        he = function() { this.id = de++, this.subs = [] };
                    he.prototype.addSub = function(e) { this.subs.push(e) }, he.prototype.removeSub = function(e) { b(this.subs, e) }, he.prototype.depend = function() { he.target && he.target.addDep(this) }, he.prototype.notify = function() { for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update() }, he.target = null;
                    var ye = [];

                    function ge(e) { ye.push(e), he.target = e }

                    function _e() { ye.pop(), he.target = ye[ye.length - 1] }
                    var ve = function(e, t, n, r, o, i, s, a) { this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = undefined, this.context = i, this.fnContext = undefined, this.fnOptions = undefined, this.fnScopeId = undefined, this.key = t && t.key, this.componentOptions = s, this.componentInstance = undefined, this.parent = undefined, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = a, this.asyncMeta = undefined, this.isAsyncPlaceholder = !1 },
                        me = { child: { configurable: !0 } };
                    me.child.get = function() { return this.componentInstance }, Object.defineProperties(ve.prototype, me);
                    var be = function(e) { void 0 === e && (e = ""); var t = new ve; return t.text = e, t.isComment = !0, t };

                    function Oe(e) { return new ve(undefined, undefined, undefined, String(e)) }

                    function Ae(e) { var t = new ve(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory); return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t }
                    var we = Array.prototype,
                        Se = Object.create(we);
                    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(e) {
                        var t = we[e];
                        W(Se, e, (function() {
                            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                            var o, i = t.apply(this, n),
                                s = this.__ob__;
                            switch (e) {
                                case "push":
                                case "unshift":
                                    o = n;
                                    break;
                                case "splice":
                                    o = n.slice(2)
                            }
                            return o && s.observeArray(o), s.dep.notify(), i
                        }))
                    }));
                    var Ee = Object.getOwnPropertyNames(Se),
                        Ne = !0;

                    function Te(e) { Ne = e }
                    var Ie = function(e) {
                        this.value = e, this.dep = new he, this.vmCount = 0, W(e, "__ob__", this), Array.isArray(e) ? (V ? function(e, t) { e.__proto__ = t }(e, Se) : function(e, t, n) {
                            for (var r = 0, o = n.length; r < o; r++) {
                                var i = n[r];
                                W(e, i, t[i])
                            }
                        }(e, Se, Ee), this.observeArray(e)) : this.walk(e)
                    };

                    function Be(e, t) { var n; if (f(e) && !(e instanceof ve)) return A(e, "__ob__") && e.__ob__ instanceof Ie ? n = e.__ob__ : Ne && !ae() && (Array.isArray(e) || p(e)) && Object.isExtensible(e) && !e._isVue && (n = new Ie(e)), t && n && n.vmCount++, n }

                    function Pe(e, t, n, r, o) {
                        var i = new he,
                            s = Object.getOwnPropertyDescriptor(e, t);
                        if (!s || !1 !== s.configurable) {
                            var a = s && s.get,
                                u = s && s.set;
                            a && !u || 2 !== arguments.length || (n = e[t]);
                            var c = !o && Be(n);
                            Object.defineProperty(e, t, {
                                enumerable: !0,
                                configurable: !0,
                                get: function() { var t = a ? a.call(e) : n; return he.target && (i.depend(), c && (c.dep.depend(), Array.isArray(t) && Re(t))), t },
                                set: function(t) {
                                    var r = a ? a.call(e) : n;
                                    t === r || t != t && r != r || a && !u || (u ? u.call(e, t) : n = t, c = !o && Be(t), i.notify())
                                }
                            })
                        }
                    }

                    function Le(e, t, n) { if (Array.isArray(e) && h(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n; if (t in e && !(t in Object.prototype)) return e[t] = n, n; var r = e.__ob__; return e._isVue || r && r.vmCount ? n : r ? (Pe(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n) }

                    function De(e, t) {
                        if (Array.isArray(e) && h(t)) e.splice(t, 1);
                        else {
                            var n = e.__ob__;
                            e._isVue || n && n.vmCount || A(e, t) && (delete e[t], n && n.dep.notify())
                        }
                    }

                    function Re(e) { for (var t = void 0, n = 0, r = e.length; n < r; n++)(t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Re(t) }
                    Ie.prototype.walk = function(e) { for (var t = Object.keys(e), n = 0; n < t.length; n++) Pe(e, t[n]) }, Ie.prototype.observeArray = function(e) { for (var t = 0, n = e.length; t < n; t++) Be(e[t]) };
                    var Me = q.optionMergeStrategies;

                    function Ce(e, t) { if (!t) return e; for (var n, r, o, i = le ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < i.length; s++) "__ob__" !== (n = i[s]) && (r = e[n], o = t[n], A(e, n) ? r !== o && p(r) && p(o) && Ce(r, o) : Le(e, n, o)); return e }

                    function xe(e, t, n) {
                        return n ? function() {
                            var r = "function" == typeof t ? t.call(n, n) : t,
                                o = "function" == typeof e ? e.call(n, n) : e;
                            return r ? Ce(r, o) : o
                        } : t ? e ? function() { return Ce("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e) } : t : e
                    }

                    function ke(e, t) { var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e; return n ? function(e) { for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]); return t }(n) : n }

                    function Ue(e, t, n, r) { var o = Object.create(e || null); return t ? L(o, t) : o }
                    Me.data = function(e, t, n) { return n ? xe(e, t, n) : t && "function" != typeof t ? e : xe(e, t) }, $.forEach((function(e) { Me[e] = ke })), Y.forEach((function(e) { Me[e + "s"] = Ue })), Me.watch = function(e, t, n, r) {
                        if (e === oe && (e = undefined), t === oe && (t = undefined), !t) return Object.create(e || null);
                        if (!e) return t;
                        var o = {};
                        for (var i in L(o, e), t) {
                            var s = o[i],
                                a = t[i];
                            s && !Array.isArray(s) && (s = [s]), o[i] = s ? s.concat(a) : Array.isArray(a) ? a : [a]
                        }
                        return o
                    }, Me.props = Me.methods = Me.inject = Me.computed = function(e, t, n, r) { if (!e) return t; var o = Object.create(null); return L(o, e), t && L(o, t), o }, Me.provide = xe;
                    var je = function(e, t) { return t === undefined ? e : t };

                    function Ye(e, t, n) {
                        if ("function" == typeof t && (t = t.options), function(e, t) {
                                var n = e.props;
                                if (n) {
                                    var r, o, i = {};
                                    if (Array.isArray(n))
                                        for (r = n.length; r--;) "string" == typeof(o = n[r]) && (i[E(o)] = { type: null });
                                    else if (p(n))
                                        for (var s in n) o = n[s], i[E(s)] = p(o) ? o : { type: o };
                                    e.props = i
                                }
                            }(t), function(e, t) {
                                var n = e.inject;
                                if (n) {
                                    var r = e.inject = {};
                                    if (Array.isArray(n))
                                        for (var o = 0; o < n.length; o++) r[n[o]] = { from: n[o] };
                                    else if (p(n))
                                        for (var i in n) {
                                            var s = n[i];
                                            r[i] = p(s) ? L({ from: i }, s) : { from: s }
                                        }
                                }
                            }(t), function(e) {
                                var t = e.directives;
                                if (t)
                                    for (var n in t) { var r = t[n]; "function" == typeof r && (t[n] = { bind: r, update: r }) }
                            }(t), !t._base && (t["extends"] && (e = Ye(e, t["extends"], n)), t.mixins))
                            for (var r = 0, o = t.mixins.length; r < o; r++) e = Ye(e, t.mixins[r], n);
                        var i, s = {};
                        for (i in e) a(i);
                        for (i in t) A(e, i) || a(i);

                        function a(r) {
                            var o = Me[r] || je;
                            s[r] = o(e[r], t[r], n, r)
                        }
                        return s
                    }

                    function $e(e, t, n, r) { if ("string" == typeof n) { var o = e[t]; if (A(o, n)) return o[n]; var i = E(n); if (A(o, i)) return o[i]; var s = N(i); return A(o, s) ? o[s] : o[n] || o[i] || o[s] } }

                    function qe(e, t, n, r) {
                        var o = t[e],
                            i = !A(n, e),
                            s = n[e],
                            a = We(Boolean, o.type);
                        if (a > -1)
                            if (i && !A(o, "default")) s = !1;
                            else if ("" === s || s === I(e)) {
                            var u = We(String, o.type);
                            (u < 0 || a < u) && (s = !0)
                        }
                        if (s === undefined) {
                            s = function(e, t, n) { if (!A(t, "default")) return undefined; var r = t["default"]; return e && e.$options.propsData && e.$options.propsData[n] === undefined && e._props[n] !== undefined ? e._props[n] : "function" == typeof r && "Function" !== Fe(t.type) ? r.call(e) : r }(r, o, e);
                            var c = Ne;
                            Te(!0), Be(s), Te(c)
                        }
                        return s
                    }

                    function Fe(e) { var t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : "" }

                    function Ge(e, t) { return Fe(e) === Fe(t) }

                    function We(e, t) {
                        if (!Array.isArray(t)) return Ge(t, e) ? 0 : -1;
                        for (var n = 0, r = t.length; n < r; n++)
                            if (Ge(t[n], e)) return n;
                        return -1
                    }

                    function ze(e, t, n) {
                        ge();
                        try {
                            if (t)
                                for (var r = t; r = r.$parent;) {
                                    var o = r.$options.errorCaptured;
                                    if (o)
                                        for (var i = 0; i < o.length; i++) try { if (!1 === o[i].call(r, e, t, n)) return } catch (Fo) { Ve(Fo, r, "errorCaptured hook") }
                                }
                            Ve(e, t, n)
                        } finally { _e() }
                    }

                    function He(e, t, n, r, o) {
                        var i;
                        try {
                            (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && y(i) && !i._handled && (i["catch"]((function(e) { return ze(e, r, o + " (Promise/async)") })), i._handled = !0)
                        } catch (Fo) { ze(Fo, r, o) }
                        return i
                    }

                    function Ve(e, t, n) {
                        if (q.errorHandler) try { return q.errorHandler.call(null, e, t, n) } catch (Fo) { Fo !== e && Ke(Fo) }
                        Ke(e)
                    }

                    function Ke(e, t, n) {
                        if (!K && !J || "undefined" == typeof console) throw e;
                        console.error(e)
                    }
                    var Je, Qe = !1,
                        Xe = [],
                        Ze = !1;

                    function et() {
                        Ze = !1;
                        var e = Xe.slice(0);
                        Xe.length = 0;
                        for (var t = 0; t < e.length; t++) e[t]()
                    }
                    if ("undefined" != typeof Promise && ce(Promise)) {
                        var tt = Promise.resolve();
                        Je = function() { tt.then(et), ne && setTimeout(R) }, Qe = !0
                    } else if (Z || "undefined" == typeof MutationObserver || !ce(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Je = "undefined" != typeof setImmediate && ce(setImmediate) ? function() { setImmediate(et) } : function() { setTimeout(et, 0) };
                    else {
                        var nt = 1,
                            rt = new MutationObserver(et),
                            ot = document.createTextNode(String(nt));
                        rt.observe(ot, { characterData: !0 }), Je = function() { nt = (nt + 1) % 2, ot.data = String(nt) }, Qe = !0
                    }

                    function it(e, t) { var n; if (Xe.push((function() { if (e) try { e.call(t) } catch (Fo) { ze(Fo, t, "nextTick") } else n && n(t) })), Ze || (Ze = !0, Je()), !e && "undefined" != typeof Promise) return new Promise((function(e) { n = e })) }
                    var st = new fe;

                    function at(e) { ut(e, st), st.clear() }

                    function ut(e, t) {
                        var n, r, o = Array.isArray(e);
                        if (!(!o && !f(e) || Object.isFrozen(e) || e instanceof ve)) {
                            if (e.__ob__) {
                                var i = e.__ob__.dep.id;
                                if (t.has(i)) return;
                                t.add(i)
                            }
                            if (o)
                                for (n = e.length; n--;) ut(e[n], t);
                            else
                                for (n = (r = Object.keys(e)).length; n--;) ut(e[r[n]], t)
                        }
                    }
                    var ct = w((function(e) {
                        var t = "&" === e.charAt(0),
                            n = "~" === (e = t ? e.slice(1) : e).charAt(0),
                            r = "!" === (e = n ? e.slice(1) : e).charAt(0);
                        return { name: e = r ? e.slice(1) : e, once: n, capture: r, passive: t }
                    }));

                    function ft(e, t) {
                        function n() {
                            var e = arguments,
                                r = n.fns;
                            if (!Array.isArray(r)) return He(r, null, arguments, t, "v-on handler");
                            for (var o = r.slice(), i = 0; i < o.length; i++) He(o[i], null, e, t, "v-on handler")
                        }
                        return n.fns = e, n
                    }

                    function lt(e, t, n, r, o, i) { var a, c, f, l; for (a in e) c = e[a], f = t[a], l = ct(a), s(c) || (s(f) ? (s(c.fns) && (c = e[a] = ft(c, i)), u(l.once) && (c = e[a] = o(l.name, c, l.capture)), n(l.name, c, l.capture, l.passive, l.params)) : c !== f && (f.fns = c, e[a] = f)); for (a in t) s(e[a]) && r((l = ct(a)).name, t[a], l.capture) }

                    function pt(e, t, n) {
                        var r;
                        e instanceof ve && (e = e.data.hook || (e.data.hook = {}));
                        var o = e[t];

                        function i() { n.apply(this, arguments), b(r.fns, i) }
                        s(o) ? r = ft([i]) : a(o.fns) && u(o.merged) ? (r = o).fns.push(i) : r = ft([o, i]), r.merged = !0, e[t] = r
                    }

                    function dt(e, t, n, r, o) { if (a(t)) { if (A(t, n)) return e[n] = t[n], o || delete t[n], !0; if (A(t, r)) return e[n] = t[r], o || delete t[r], !0 } return !1 }

                    function ht(e) { return c(e) ? [Oe(e)] : Array.isArray(e) ? gt(e) : undefined }

                    function yt(e) { return a(e) && a(e.text) && !1 === e.isComment }

                    function gt(e, t) { var n, r, o, i, f = []; for (n = 0; n < e.length; n++) s(r = e[n]) || "boolean" == typeof r || (i = f[o = f.length - 1], Array.isArray(r) ? r.length > 0 && (yt((r = gt(r, (t || "") + "_" + n))[0]) && yt(i) && (f[o] = Oe(i.text + r[0].text), r.shift()), f.push.apply(f, r)) : c(r) ? yt(i) ? f[o] = Oe(i.text + r) : "" !== r && f.push(Oe(r)) : yt(r) && yt(i) ? f[o] = Oe(i.text + r.text) : (u(e._isVList) && a(r.tag) && s(r.key) && a(t) && (r.key = "__vlist" + t + "_" + n + "__"), f.push(r))); return f }

                    function _t(e, t) {
                        if (e) {
                            for (var n = Object.create(null), r = le ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                                var i = r[o];
                                if ("__ob__" !== i) {
                                    for (var s = e[i].from, a = t; a;) {
                                        if (a._provided && A(a._provided, s)) { n[i] = a._provided[s]; break }
                                        a = a.$parent
                                    }
                                    if (!a && "default" in e[i]) {
                                        var u = e[i]["default"];
                                        n[i] = "function" == typeof u ? u.call(t) : u
                                    }
                                }
                            }
                            return n
                        }
                    }

                    function vt(e, t) {
                        if (!e || !e.length) return {};
                        for (var n = {}, r = 0, o = e.length; r < o; r++) {
                            var i = e[r],
                                s = i.data;
                            if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, i.context !== t && i.fnContext !== t || !s || null == s.slot)(n["default"] || (n["default"] = [])).push(i);
                            else {
                                var a = s.slot,
                                    u = n[a] || (n[a] = []);
                                "template" === i.tag ? u.push.apply(u, i.children || []) : u.push(i)
                            }
                        }
                        for (var c in n) n[c].every(mt) && delete n[c];
                        return n
                    }

                    function mt(e) { return e.isComment && !e.asyncFactory || " " === e.text }

                    function bt(e, t, n) {
                        var r, o = Object.keys(t).length > 0,
                            s = e ? !!e.$stable : !o,
                            a = e && e.$key;
                        if (e) { if (e._normalized) return e._normalized; if (s && n && n !== i && a === n.$key && !o && !n.$hasNormal) return n; for (var u in r = {}, e) e[u] && "$" !== u[0] && (r[u] = Ot(t, u, e[u])) } else r = {};
                        for (var c in t) c in r || (r[c] = At(t, c));
                        return e && Object.isExtensible(e) && (e._normalized = r), W(r, "$stable", s), W(r, "$key", a), W(r, "$hasNormal", o), r
                    }

                    function Ot(e, t, n) { var r = function() { var e = arguments.length ? n.apply(null, arguments) : n({}); return (e = e && "object" === (0, o["default"])(e) && !Array.isArray(e) ? [e] : ht(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? undefined : e }; return n.proxy && Object.defineProperty(e, t, { get: r, enumerable: !0, configurable: !0 }), r }

                    function At(e, t) { return function() { return e[t] } }

                    function wt(e, t) {
                        var n, r, o, i, s;
                        if (Array.isArray(e) || "string" == typeof e)
                            for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r);
                        else if ("number" == typeof e)
                            for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
                        else if (f(e))
                            if (le && e[Symbol.iterator]) { n = []; for (var u = e[Symbol.iterator](), c = u.next(); !c.done;) n.push(t(c.value, n.length)), c = u.next() } else
                                for (i = Object.keys(e), n = new Array(i.length), r = 0, o = i.length; r < o; r++) s = i[r], n[r] = t(e[s], s, r);
                        return a(n) || (n = []), n._isVList = !0, n
                    }

                    function St(e, t, n, r) {
                        var o, i = this.$scopedSlots[e];
                        i ? (n = n || {}, r && (n = L(L({}, r), n)), o = i(n) || t) : o = this.$slots[e] || t;
                        var s = n && n.slot;
                        return s ? this.$createElement("template", { slot: s }, o) : o
                    }

                    function Et(e) { return $e(this.$options, "filters", e) || C }

                    function Nt(e, t) { return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t }

                    function Tt(e, t, n, r, o) { var i = q.keyCodes[t] || n; return o && r && !q.keyCodes[t] ? Nt(o, r) : i ? Nt(i, e) : r ? I(r) !== t : void 0 }

                    function It(e, t, n, r, o) {
                        if (n && f(n)) {
                            var i;
                            Array.isArray(n) && (n = D(n));
                            var s = function(s) {
                                if ("class" === s || "style" === s || m(s)) i = e;
                                else {
                                    var a = e.attrs && e.attrs.type;
                                    i = r || q.mustUseProp(t, a, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                                }
                                var u = E(s),
                                    c = I(s);
                                u in i || c in i || (i[s] = n[s], o && ((e.on || (e.on = {}))["update:" + s] = function(e) { n[s] = e }))
                            };
                            for (var a in n) s(a)
                        }
                        return e
                    }

                    function Bt(e, t) {
                        var n = this._staticTrees || (this._staticTrees = []),
                            r = n[e];
                        return r && !t || Lt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r
                    }

                    function Pt(e, t, n) { return Lt(e, "__once__" + t + (n ? "_" + n : ""), !0), e }

                    function Lt(e, t, n) {
                        if (Array.isArray(e))
                            for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && Dt(e[r], t + "_" + r, n);
                        else Dt(e, t, n)
                    }

                    function Dt(e, t, n) { e.isStatic = !0, e.key = t, e.isOnce = n }

                    function Rt(e, t) {
                        if (t && p(t)) {
                            var n = e.on = e.on ? L({}, e.on) : {};
                            for (var r in t) {
                                var o = n[r],
                                    i = t[r];
                                n[r] = o ? [].concat(o, i) : i
                            }
                        }
                        return e
                    }

                    function Mt(e, t, n, r) {
                        t = t || { $stable: !n };
                        for (var o = 0; o < e.length; o++) {
                            var i = e[o];
                            Array.isArray(i) ? Mt(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn)
                        }
                        return r && (t.$key = r), t
                    }

                    function Ct(e, t) { for (var n = 0; n < t.length; n += 2) { var r = t[n]; "string" == typeof r && r && (e[t[n]] = t[n + 1]) } return e }

                    function xt(e, t) { return "string" == typeof e ? t + e : e }

                    function kt(e) { e._o = Pt, e._n = _, e._s = g, e._l = wt, e._t = St, e._q = x, e._i = k, e._m = Bt, e._f = Et, e._k = Tt, e._b = It, e._v = Oe, e._e = be, e._u = Mt, e._g = Rt, e._d = Ct, e._p = xt }

                    function Ut(e, t, n, r, o) {
                        var s, a = this,
                            c = o.options;
                        A(r, "_uid") ? (s = Object.create(r))._original = r : (s = r, r = r._original);
                        var f = u(c._compiled),
                            l = !f;
                        this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || i, this.injections = _t(c.inject, r), this.slots = function() { return a.$slots || bt(e.scopedSlots, a.$slots = vt(n, r)), a.$slots }, Object.defineProperty(this, "scopedSlots", { enumerable: !0, get: function() { return bt(e.scopedSlots, this.slots()) } }), f && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = bt(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function(e, t, n, o) { var i = Wt(s, e, t, n, o, l); return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId, i.fnContext = r), i } : this._c = function(e, t, n, r) { return Wt(s, e, t, n, r, l) }
                    }

                    function jt(e, t, n, r, o) { var i = Ae(e); return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), i }

                    function Yt(e, t) { for (var n in t) e[E(n)] = t[n] }
                    kt(Ut.prototype);
                    var $t = {
                            init: function(e, t) {
                                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                                    var n = e;
                                    $t.prepatch(n, n)
                                } else(e.componentInstance = function(e, t) {
                                    var n = { _isComponent: !0, _parentVnode: e, parent: t },
                                        r = e.data.inlineTemplate;
                                    return a(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n)
                                }(e, nn)).$mount(t ? e.elm : undefined, t)
                            },
                            prepatch: function(e, t) {
                                var n = t.componentOptions;
                                ! function(e, t, n, r, o) {
                                    var s = r.data.scopedSlots,
                                        a = e.$scopedSlots,
                                        u = !!(s && !s.$stable || a !== i && !a.$stable || s && e.$scopedSlots.$key !== s.$key),
                                        c = !!(o || e.$options._renderChildren || u);
                                    if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = o, e.$attrs = r.data.attrs || i, e.$listeners = n || i, t && e.$options.props) {
                                        Te(!1);
                                        for (var f = e._props, l = e.$options._propKeys || [], p = 0; p < l.length; p++) {
                                            var d = l[p],
                                                h = e.$options.props;
                                            f[d] = qe(d, h, t, e)
                                        }
                                        Te(!0), e.$options.propsData = t
                                    }
                                    n = n || i;
                                    var y = e.$options._parentListeners;
                                    e.$options._parentListeners = n, tn(e, n, y), c && (e.$slots = vt(o, r.context), e.$forceUpdate())
                                }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
                            },
                            insert: function(e) {
                                var t, n = e.context,
                                    r = e.componentInstance;
                                r._isMounted || (r._isMounted = !0, un(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, fn.push(t)) : sn(r, !0))
                            },
                            destroy: function(e) {
                                var t = e.componentInstance;
                                t._isDestroyed || (e.data.keepAlive ? an(t, !0) : t.$destroy())
                            }
                        },
                        qt = Object.keys($t);

                    function Ft(e, t, n, r, o) {
                        if (!s(e)) {
                            var c = n.$options._base;
                            if (f(e) && (e = c.extend(e)), "function" == typeof e) {
                                var l;
                                if (s(e.cid) && (e = function(e, t) {
                                        if (u(e.error) && a(e.errorComp)) return e.errorComp;
                                        if (a(e.resolved)) return e.resolved;
                                        var n = Vt;
                                        if (n && a(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), u(e.loading) && a(e.loadingComp)) return e.loadingComp;
                                        if (n && !a(e.owners)) {
                                            var r = e.owners = [n],
                                                o = !0,
                                                i = null,
                                                c = null;
                                            n.$on("hook:destroyed", (function() { return b(r, n) }));
                                            var l = function(e) {
                                                    for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
                                                    e && (r.length = 0, null !== i && (clearTimeout(i), i = null), null !== c && (clearTimeout(c), c = null))
                                                },
                                                p = U((function(n) { e.resolved = Kt(n, t), o ? r.length = 0 : l(!0) })),
                                                d = U((function(t) { a(e.errorComp) && (e.error = !0, l(!0)) })),
                                                h = e(p, d);
                                            return f(h) && (y(h) ? s(e.resolved) && h.then(p, d) : y(h.component) && (h.component.then(p, d), a(h.error) && (e.errorComp = Kt(h.error, t)), a(h.loading) && (e.loadingComp = Kt(h.loading, t), 0 === h.delay ? e.loading = !0 : i = setTimeout((function() { i = null, s(e.resolved) && s(e.error) && (e.loading = !0, l(!1)) }), h.delay || 200)), a(h.timeout) && (c = setTimeout((function() { c = null, s(e.resolved) && d(null) }), h.timeout)))), o = !1, e.loading ? e.loadingComp : e.resolved
                                        }
                                    }(l = e, c)) === undefined) return function(e, t, n, r, o) { var i = be(); return i.asyncFactory = e, i.asyncMeta = { data: t, context: n, children: r, tag: o }, i }(l, t, n, r, o);
                                t = t || {}, Pn(e), a(t.model) && function(e, t) {
                                    var n = e.model && e.model.prop || "value",
                                        r = e.model && e.model.event || "input";
                                    (t.attrs || (t.attrs = {}))[n] = t.model.value;
                                    var o = t.on || (t.on = {}),
                                        i = o[r],
                                        s = t.model.callback;
                                    a(i) ? (Array.isArray(i) ? -1 === i.indexOf(s) : i !== s) && (o[r] = [s].concat(i)) : o[r] = s
                                }(e.options, t);
                                var p = function(e, t, n) {
                                    var r = t.options.props;
                                    if (!s(r)) {
                                        var o = {},
                                            i = e.attrs,
                                            u = e.props;
                                        if (a(i) || a(u))
                                            for (var c in r) {
                                                var f = I(c);
                                                dt(o, u, c, f, !0) || dt(o, i, c, f, !1)
                                            }
                                        return o
                                    }
                                }(t, e);
                                if (u(e.options.functional)) return function(e, t, n, r, o) {
                                    var s = e.options,
                                        u = {},
                                        c = s.props;
                                    if (a(c))
                                        for (var f in c) u[f] = qe(f, c, t || i);
                                    else a(n.attrs) && Yt(u, n.attrs), a(n.props) && Yt(u, n.props);
                                    var l = new Ut(n, u, o, r, e),
                                        p = s.render.call(null, l._c, l);
                                    if (p instanceof ve) return jt(p, n, l.parent, s);
                                    if (Array.isArray(p)) { for (var d = ht(p) || [], h = new Array(d.length), y = 0; y < d.length; y++) h[y] = jt(d[y], n, l.parent, s); return h }
                                }(e, p, t, n, r);
                                var d = t.on;
                                if (t.on = t.nativeOn, u(e.options.abstract)) {
                                    var h = t.slot;
                                    t = {}, h && (t.slot = h)
                                }! function(e) {
                                    for (var t = e.hook || (e.hook = {}), n = 0; n < qt.length; n++) {
                                        var r = qt[n],
                                            o = t[r],
                                            i = $t[r];
                                        o === i || o && o._merged || (t[r] = o ? Gt(i, o) : i)
                                    }
                                }(t);
                                var g = e.options.name || o;
                                return new ve("vue-component-" + e.cid + (g ? "-" + g : ""), t, undefined, undefined, undefined, n, { Ctor: e, propsData: p, listeners: d, tag: o, children: r }, l)
                            }
                        }
                    }

                    function Gt(e, t) { var n = function(n, r) { e(n, r), t(n, r) }; return n._merged = !0, n }

                    function Wt(e, t, n, r, o, i) {
                        return (Array.isArray(n) || c(n)) && (o = r, r = n, n = undefined), u(i) && (o = 2),
                            function(e, t, n, r, o) {
                                if (a(n) && a(n.__ob__)) return be();
                                if (a(n) && a(n.is) && (t = n.is), !t) return be();
                                var i, s, u;
                                (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = { "default": r[0] }, r.length = 0), 2 === o ? r = ht(r) : 1 === o && (r = function(e) {
                                    for (var t = 0; t < e.length; t++)
                                        if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                                    return e
                                }(r)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || q.getTagNamespace(t), i = q.isReservedTag(t) ? new ve(q.parsePlatformTagName(t), n, r, undefined, undefined, e) : n && n.pre || !a(u = $e(e.$options, "components", t)) ? new ve(t, n, r, undefined, undefined, e) : Ft(u, n, e, r, t)) : i = Ft(t, n, e, r);
                                return Array.isArray(i) ? i : a(i) ? (a(s) && zt(i, s), a(n) && function(e) { f(e.style) && at(e.style), f(e["class"]) && at(e["class"]) }(n), i) : be()
                            }(e, t, n, r, o)
                    }

                    function zt(e, t, n) {
                        if (e.ns = t, "foreignObject" === e.tag && (t = undefined, n = !0), a(e.children))
                            for (var r = 0, o = e.children.length; r < o; r++) {
                                var i = e.children[r];
                                a(i.tag) && (s(i.ns) || u(n) && "svg" !== i.tag) && zt(i, t, n)
                            }
                    }
                    var Ht, Vt = null;

                    function Kt(e, t) { return (e.__esModule || le && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), f(e) ? t.extend(e) : e }

                    function Jt(e) { return e.isComment && e.asyncFactory }

                    function Qt(e) {
                        if (Array.isArray(e))
                            for (var t = 0; t < e.length; t++) { var n = e[t]; if (a(n) && (a(n.componentOptions) || Jt(n))) return n }
                    }

                    function Xt(e, t) { Ht.$on(e, t) }

                    function Zt(e, t) { Ht.$off(e, t) }

                    function en(e, t) {
                        var n = Ht;
                        return function r() {
                            var o = t.apply(null, arguments);
                            null !== o && n.$off(e, r)
                        }
                    }

                    function tn(e, t, n) { Ht = e, lt(t, n || {}, Xt, Zt, en, e), Ht = undefined }
                    var nn = null;

                    function rn(e) {
                        var t = nn;
                        return nn = e,
                            function() { nn = t }
                    }

                    function on(e) {
                        for (; e && (e = e.$parent);)
                            if (e._inactive) return !0;
                        return !1
                    }

                    function sn(e, t) {
                        if (t) { if (e._directInactive = !1, on(e)) return } else if (e._directInactive) return;
                        if (e._inactive || null === e._inactive) {
                            e._inactive = !1;
                            for (var n = 0; n < e.$children.length; n++) sn(e.$children[n]);
                            un(e, "activated")
                        }
                    }

                    function an(e, t) {
                        if (!(t && (e._directInactive = !0, on(e)) || e._inactive)) {
                            e._inactive = !0;
                            for (var n = 0; n < e.$children.length; n++) an(e.$children[n]);
                            un(e, "deactivated")
                        }
                    }

                    function un(e, t) {
                        ge();
                        var n = e.$options[t],
                            r = t + " hook";
                        if (n)
                            for (var o = 0, i = n.length; o < i; o++) He(n[o], e, null, e, r);
                        e._hasHookEvent && e.$emit("hook:" + t), _e()
                    }
                    var cn = [],
                        fn = [],
                        ln = {},
                        pn = !1,
                        dn = !1,
                        hn = 0,
                        yn = 0,
                        gn = Date.now;
                    if (K && !Z) {
                        var _n = window.performance;
                        _n && "function" == typeof _n.now && gn() > document.createEvent("Event").timeStamp && (gn = function() { return _n.now() })
                    }

                    function vn() {
                        var e, t;
                        for (yn = gn(), dn = !0, cn.sort((function(e, t) { return e.id - t.id })), hn = 0; hn < cn.length; hn++)(e = cn[hn]).before && e.before(), t = e.id, ln[t] = null, e.run();
                        var n = fn.slice(),
                            r = cn.slice();
                        hn = cn.length = fn.length = 0, ln = {}, pn = dn = !1,
                            function(e) { for (var t = 0; t < e.length; t++) e[t]._inactive = !0, sn(e[t], !0) }(n),
                            function(e) {
                                for (var t = e.length; t--;) {
                                    var n = e[t],
                                        r = n.vm;
                                    r._watcher === n && r._isMounted && !r._isDestroyed && un(r, "updated")
                                }
                            }(r), ue && q.devtools && ue.emit("flush")
                    }
                    var mn = 0,
                        bn = function(e, t, n, r, o) {
                            this.vm = e, o && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++mn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new fe, this.newDepIds = new fe, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function(e) {
                                if (!H.test(e)) {
                                    var t = e.split(".");
                                    return function(e) {
                                        for (var n = 0; n < t.length; n++) {
                                            if (!e) return;
                                            e = e[t[n]]
                                        }
                                        return e
                                    }
                                }
                            }(t), this.getter || (this.getter = R)), this.value = this.lazy ? undefined : this.get()
                        };
                    bn.prototype.get = function() {
                        var e;
                        ge(this);
                        var t = this.vm;
                        try { e = this.getter.call(t, t) } catch (Fo) {
                            if (!this.user) throw Fo;
                            ze(Fo, t, 'getter for watcher "' + this.expression + '"')
                        } finally { this.deep && at(e), _e(), this.cleanupDeps() }
                        return e
                    }, bn.prototype.addDep = function(e) {
                        var t = e.id;
                        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
                    }, bn.prototype.cleanupDeps = function() {
                        for (var e = this.deps.length; e--;) {
                            var t = this.deps[e];
                            this.newDepIds.has(t.id) || t.removeSub(this)
                        }
                        var n = this.depIds;
                        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
                    }, bn.prototype.update = function() {
                        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                            var t = e.id;
                            if (null == ln[t]) {
                                if (ln[t] = !0, dn) {
                                    for (var n = cn.length - 1; n > hn && cn[n].id > e.id;) n--;
                                    cn.splice(n + 1, 0, e)
                                } else cn.push(e);
                                pn || (pn = !0, it(vn))
                            }
                        }(this)
                    }, bn.prototype.run = function() { if (this.active) { var e = this.get(); if (e !== this.value || f(e) || this.deep) { var t = this.value; if (this.value = e, this.user) try { this.cb.call(this.vm, e, t) } catch (Fo) { ze(Fo, this.vm, 'callback for watcher "' + this.expression + '"') } else this.cb.call(this.vm, e, t) } } }, bn.prototype.evaluate = function() { this.value = this.get(), this.dirty = !1 }, bn.prototype.depend = function() { for (var e = this.deps.length; e--;) this.deps[e].depend() }, bn.prototype.teardown = function() {
                        if (this.active) {
                            this.vm._isBeingDestroyed || b(this.vm._watchers, this);
                            for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                            this.active = !1
                        }
                    };
                    var On = { enumerable: !0, configurable: !0, get: R, set: R };

                    function An(e, t, n) { On.get = function() { return this[t][n] }, On.set = function(e) { this[t][n] = e }, Object.defineProperty(e, n, On) }

                    function wn(e) {
                        e._watchers = [];
                        var t = e.$options;
                        t.props && function(e, t) {
                            var n = e.$options.propsData || {},
                                r = e._props = {},
                                o = e.$options._propKeys = [];
                            e.$parent && Te(!1);
                            var i = function(i) {
                                o.push(i);
                                var s = qe(i, t, n, e);
                                Pe(r, i, s), i in e || An(e, "_props", i)
                            };
                            for (var s in t) i(s);
                            Te(!0)
                        }(e, t.props), t.methods && function(e, t) { for (var n in e.$options.props, t) e[n] = "function" != typeof t[n] ? R : B(t[n], e) }(e, t.methods), t.data ? function(e) {
                            var t = e.$options.data;
                            p(t = e._data = "function" == typeof t ? function(e, t) { ge(); try { return e.call(t, t) } catch (Fo) { return ze(Fo, t, "data()"), {} } finally { _e() } }(t, e) : t || {}) || (t = {});
                            for (var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length); o--;) {
                                var i = n[o];
                                r && A(r, i) || G(i) || An(e, "_data", i)
                            }
                            Be(t, !0)
                        }(e) : Be(e._data = {}, !0), t.computed && function(e, t) {
                            var n = e._computedWatchers = Object.create(null),
                                r = ae();
                            for (var o in t) {
                                var i = t[o],
                                    s = "function" == typeof i ? i : i.get;
                                r || (n[o] = new bn(e, s || R, R, Sn)), o in e || En(e, o, i)
                            }
                        }(e, t.computed), t.watch && t.watch !== oe && function(e, t) {
                            for (var n in t) {
                                var r = t[n];
                                if (Array.isArray(r))
                                    for (var o = 0; o < r.length; o++) In(e, n, r[o]);
                                else In(e, n, r)
                            }
                        }(e, t.watch)
                    }
                    var Sn = { lazy: !0 };

                    function En(e, t, n) { var r = !ae(); "function" == typeof n ? (On.get = r ? Nn(t) : Tn(n), On.set = R) : (On.get = n.get ? r && !1 !== n.cache ? Nn(t) : Tn(n.get) : R, On.set = n.set || R), Object.defineProperty(e, t, On) }

                    function Nn(e) { return function() { var t = this._computedWatchers && this._computedWatchers[e]; if (t) return t.dirty && t.evaluate(), he.target && t.depend(), t.value } }

                    function Tn(e) { return function() { return e.call(this, this) } }

                    function In(e, t, n, r) { return p(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r) }
                    var Bn = 0;

                    function Pn(e) {
                        var t = e.options;
                        if (e["super"]) {
                            var n = Pn(e["super"]);
                            if (n !== e.superOptions) {
                                e.superOptions = n;
                                var r = function(e) {
                                    var t, n = e.options,
                                        r = e.sealedOptions;
                                    for (var o in n) n[o] !== r[o] && (t || (t = {}), t[o] = n[o]);
                                    return t
                                }(e);
                                r && L(e.extendOptions, r), (t = e.options = Ye(n, e.extendOptions)).name && (t.components[t.name] = e)
                            }
                        }
                        return t
                    }

                    function Ln(e) { this._init(e) }

                    function Dn(e) {
                        e.cid = 0;
                        var t = 1;
                        e.extend = function(e) {
                            e = e || {};
                            var n = this,
                                r = n.cid,
                                o = e._Ctor || (e._Ctor = {});
                            if (o[r]) return o[r];
                            var i = e.name || n.options.name,
                                s = function(e) { this._init(e) };
                            return (s.prototype = Object.create(n.prototype)).constructor = s, s.cid = t++, s.options = Ye(n.options, e), s["super"] = n, s.options.props && function(e) { var t = e.options.props; for (var n in t) An(e.prototype, "_props", n) }(s), s.options.computed && function(e) { var t = e.options.computed; for (var n in t) En(e.prototype, n, t[n]) }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, Y.forEach((function(e) { s[e] = n[e] })), i && (s.options.components[i] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = L({}, s.options), o[r] = s, s
                        }
                    }

                    function Rn(e) { return e && (e.Ctor.options.name || e.tag) }

                    function Mn(e, t) { return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!d(e) && e.test(t) }

                    function Cn(e, t) {
                        var n = e.cache,
                            r = e.keys,
                            o = e._vnode;
                        for (var i in n) {
                            var s = n[i];
                            if (s) {
                                var a = Rn(s.componentOptions);
                                a && !t(a) && xn(n, i, r, o)
                            }
                        }
                    }

                    function xn(e, t, n, r) { var o = e[t];!o || r && o.tag === r.tag || o.componentInstance.$destroy(), e[t] = null, b(n, t) }! function(e) {
                        e.prototype._init = function(e) {
                            var t = this;
                            t._uid = Bn++, t._isVue = !0, e && e._isComponent ? function(e, t) {
                                    var n = e.$options = Object.create(e.constructor.options),
                                        r = t._parentVnode;
                                    n.parent = t.parent, n._parentVnode = r;
                                    var o = r.componentOptions;
                                    n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
                                }(t, e) : t.$options = Ye(Pn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t,
                                function(e) {
                                    var t = e.$options,
                                        n = t.parent;
                                    if (n && !t.abstract) {
                                        for (; n.$options.abstract && n.$parent;) n = n.$parent;
                                        n.$children.push(e)
                                    }
                                    e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                                }(t),
                                function(e) {
                                    e._events = Object.create(null), e._hasHookEvent = !1;
                                    var t = e.$options._parentListeners;
                                    t && tn(e, t)
                                }(t),
                                function(e) {
                                    e._vnode = null, e._staticTrees = null;
                                    var t = e.$options,
                                        n = e.$vnode = t._parentVnode,
                                        r = n && n.context;
                                    e.$slots = vt(t._renderChildren, r), e.$scopedSlots = i, e._c = function(t, n, r, o) { return Wt(e, t, n, r, o, !1) }, e.$createElement = function(t, n, r, o) { return Wt(e, t, n, r, o, !0) };
                                    var o = n && n.data;
                                    Pe(e, "$attrs", o && o.attrs || i, null, !0), Pe(e, "$listeners", t._parentListeners || i, null, !0)
                                }(t), un(t, "beforeCreate"),
                                function(e) {
                                    var t = _t(e.$options.inject, e);
                                    t && (Te(!1), Object.keys(t).forEach((function(n) { Pe(e, n, t[n]) })), Te(!0))
                                }(t), wn(t),
                                function(e) {
                                    var t = e.$options.provide;
                                    t && (e._provided = "function" == typeof t ? t.call(e) : t)
                                }(t), un(t, "created"), t.$options.el && t.$mount(t.$options.el)
                        }
                    }(Ln),
                    function(e) {
                        var t = { get: function() { return this._data } },
                            n = { get: function() { return this._props } };
                        Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Le, e.prototype.$delete = De, e.prototype.$watch = function(e, t, n) {
                            var r = this;
                            if (p(t)) return In(r, e, t, n);
                            (n = n || {}).user = !0;
                            var o = new bn(r, e, t, n);
                            if (n.immediate) try { t.call(r, o.value) } catch (i) { ze(i, r, 'callback for immediate watcher "' + o.expression + '"') }
                            return function() { o.teardown() }
                        }
                    }(Ln),
                    function(e) {
                        var t = /^hook:/;
                        e.prototype.$on = function(e, n) {
                            var r = this;
                            if (Array.isArray(e))
                                for (var o = 0, i = e.length; o < i; o++) r.$on(e[o], n);
                            else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
                            return r
                        }, e.prototype.$once = function(e, t) {
                            var n = this;

                            function r() { n.$off(e, r), t.apply(n, arguments) }
                            return r.fn = t, n.$on(e, r), n
                        }, e.prototype.$off = function(e, t) {
                            var n = this;
                            if (!arguments.length) return n._events = Object.create(null), n;
                            if (Array.isArray(e)) { for (var r = 0, o = e.length; r < o; r++) n.$off(e[r], t); return n }
                            var i, s = n._events[e];
                            if (!s) return n;
                            if (!t) return n._events[e] = null, n;
                            for (var a = s.length; a--;)
                                if ((i = s[a]) === t || i.fn === t) { s.splice(a, 1); break }
                            return n
                        }, e.prototype.$emit = function(e) {
                            var t = this,
                                n = t._events[e];
                            if (n) { n = n.length > 1 ? P(n) : n; for (var r = P(arguments, 1), o = 'event handler for "' + e + '"', i = 0, s = n.length; i < s; i++) He(n[i], t, r, t, o) }
                            return t
                        }
                    }(Ln),
                    function(e) {
                        e.prototype._update = function(e, t) {
                            var n = this,
                                r = n.$el,
                                o = n._vnode,
                                i = rn(n);
                            n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), i(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                        }, e.prototype.$forceUpdate = function() { this._watcher && this._watcher.update() }, e.prototype.$destroy = function() {
                            var e = this;
                            if (!e._isBeingDestroyed) {
                                un(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                                var t = e.$parent;
                                !t || t._isBeingDestroyed || e.$options.abstract || b(t.$children, e), e._watcher && e._watcher.teardown();
                                for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), un(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                            }
                        }
                    }(Ln),
                    function(e) {
                        kt(e.prototype), e.prototype.$nextTick = function(e) { return it(e, this) }, e.prototype._render = function() {
                            var e, t = this,
                                n = t.$options,
                                r = n.render,
                                o = n._parentVnode;
                            o && (t.$scopedSlots = bt(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;
                            try { Vt = t, e = r.call(t._renderProxy, t.$createElement) } catch (Fo) { ze(Fo, t, "render"), e = t._vnode } finally { Vt = null }
                            return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ve || (e = be()), e.parent = o, e
                        }
                    }(Ln);
                    var kn = [String, RegExp, Array],
                        Un = {
                            KeepAlive: {
                                name: "keep-alive",
                                abstract: !0,
                                props: { include: kn, exclude: kn, max: [String, Number] },
                                created: function() { this.cache = Object.create(null), this.keys = [] },
                                destroyed: function() { for (var e in this.cache) xn(this.cache, e, this.keys) },
                                mounted: function() {
                                    var e = this;
                                    this.$watch("include", (function(t) { Cn(e, (function(e) { return Mn(t, e) })) })), this.$watch("exclude", (function(t) { Cn(e, (function(e) { return !Mn(t, e) })) }))
                                },
                                render: function() {
                                    var e = this.$slots["default"],
                                        t = Qt(e),
                                        n = t && t.componentOptions;
                                    if (n) {
                                        var r = Rn(n),
                                            o = this.include,
                                            i = this.exclude;
                                        if (o && (!r || !Mn(o, r)) || i && r && Mn(i, r)) return t;
                                        var s = this.cache,
                                            a = this.keys,
                                            u = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                                        s[u] ? (t.componentInstance = s[u].componentInstance, b(a, u), a.push(u)) : (s[u] = t, a.push(u), this.max && a.length > parseInt(this.max) && xn(s, a[0], a, this._vnode)), t.data.keepAlive = !0
                                    }
                                    return t || e && e[0]
                                }
                            }
                        };
                    ! function(e) {
                        var t = { get: function() { return q } };
                        Object.defineProperty(e, "config", t), e.util = { warn: pe, extend: L, mergeOptions: Ye, defineReactive: Pe }, e.set = Le, e["delete"] = De, e.nextTick = it, e.observable = function(e) { return Be(e), e }, e.options = Object.create(null), Y.forEach((function(t) { e.options[t + "s"] = Object.create(null) })), e.options._base = e, L(e.options.components, Un),
                            function(e) { e.use = function(e) { var t = this._installedPlugins || (this._installedPlugins = []); if (t.indexOf(e) > -1) return this; var n = P(arguments, 1); return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this } }(e),
                            function(e) { e.mixin = function(e) { return this.options = Ye(this.options, e), this } }(e), Dn(e),
                            function(e) { Y.forEach((function(t) { e[t] = function(e, n) { return n ? ("component" === t && p(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e] } })) }(e)
                    }(Ln), Object.defineProperty(Ln.prototype, "$isServer", { get: ae }), Object.defineProperty(Ln.prototype, "$ssrContext", { get: function() { return this.$vnode && this.$vnode.ssrContext } }), Object.defineProperty(Ln, "FunctionalRenderContext", { value: Ut }), Ln.version = "2.6.12";
                    var jn = v("style,class"),
                        Yn = v("input,textarea,option,select,progress"),
                        $n = v("contenteditable,draggable,spellcheck"),
                        qn = v("events,caret,typing,plaintext-only"),
                        Fn = v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                        Gn = "http://www.w3.org/1999/xlink",
                        Wn = function(e) { return ":" === e.charAt(5) && "xlink" === e.slice(0, 5) },
                        zn = function(e) { return Wn(e) ? e.slice(6, e.length) : "" },
                        Hn = function(e) { return null == e || !1 === e };

                    function Vn(e) { for (var t = e.data, n = e, r = e; a(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (t = Kn(r.data, t)); for (; a(n = n.parent);) n && n.data && (t = Kn(t, n.data)); return o = t.staticClass, i = t["class"], a(o) || a(i) ? Jn(o, Qn(i)) : ""; var o, i }

                    function Kn(e, t) { return { staticClass: Jn(e.staticClass, t.staticClass), "class": a(e["class"]) ? [e["class"], t["class"]] : t["class"] } }

                    function Jn(e, t) { return e ? t ? e + " " + t : e : t || "" }

                    function Qn(e) { return Array.isArray(e) ? function(e) { for (var t, n = "", r = 0, o = e.length; r < o; r++) a(t = Qn(e[r])) && "" !== t && (n && (n += " "), n += t); return n }(e) : f(e) ? function(e) { var t = ""; for (var n in e) e[n] && (t && (t += " "), t += n); return t }(e) : "string" == typeof e ? e : "" }
                    var Xn = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
                        Zn = v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                        er = v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                        tr = function(e) { return Zn(e) || er(e) },
                        nr = Object.create(null),
                        rr = v("text,number,password,search,email,tel,url"),
                        or = Object.freeze({ createElement: function(e, t) { var n = document.createElement(e); return "select" !== e || t.data && t.data.attrs && t.data.attrs.multiple !== undefined && n.setAttribute("multiple", "multiple"), n }, createElementNS: function(e, t) { return document.createElementNS(Xn[e], t) }, createTextNode: function(e) { return document.createTextNode(e) }, createComment: function(e) { return document.createComment(e) }, insertBefore: function(e, t, n) { e.insertBefore(t, n) }, removeChild: function(e, t) { e.removeChild(t) }, appendChild: function(e, t) { e.appendChild(t) }, parentNode: function(e) { return e.parentNode }, nextSibling: function(e) { return e.nextSibling }, tagName: function(e) { return e.tagName }, setTextContent: function(e, t) { e.textContent = t }, setStyleScope: function(e, t) { e.setAttribute(t, "") } }),
                        ir = { create: function(e, t) { sr(t) }, update: function(e, t) { e.data.ref !== t.data.ref && (sr(e, !0), sr(t)) }, destroy: function(e) { sr(e, !0) } };

                    function sr(e, t) {
                        var n = e.data.ref;
                        if (a(n)) {
                            var r = e.context,
                                o = e.componentInstance || e.elm,
                                i = r.$refs;
                            t ? Array.isArray(i[n]) ? b(i[n], o) : i[n] === o && (i[n] = undefined) : e.data.refInFor ? Array.isArray(i[n]) ? i[n].indexOf(o) < 0 && i[n].push(o) : i[n] = [o] : i[n] = o
                        }
                    }
                    var ar = new ve("", {}, []),
                        ur = ["create", "activate", "update", "remove", "destroy"];

                    function cr(e, t) {
                        return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && a(e.data) === a(t.data) && function(e, t) {
                            if ("input" !== e.tag) return !0;
                            var n, r = a(n = e.data) && a(n = n.attrs) && n.type,
                                o = a(n = t.data) && a(n = n.attrs) && n.type;
                            return r === o || rr(r) && rr(o)
                        }(e, t) || u(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && s(t.asyncFactory.error))
                    }

                    function fr(e, t, n) { var r, o, i = {}; for (r = t; r <= n; ++r) a(o = e[r].key) && (i[o] = r); return i }
                    var lr = { create: pr, update: pr, destroy: function(e) { pr(e, ar) } };

                    function pr(e, t) {
                        (e.data.directives || t.data.directives) && function(e, t) {
                            var n, r, o, i = e === ar,
                                s = t === ar,
                                a = hr(e.data.directives, e.context),
                                u = hr(t.data.directives, t.context),
                                c = [],
                                f = [];
                            for (n in u) r = a[n], o = u[n], r ? (o.oldValue = r.value, o.oldArg = r.arg, gr(o, "update", t, e), o.def && o.def.componentUpdated && f.push(o)) : (gr(o, "bind", t, e), o.def && o.def.inserted && c.push(o));
                            if (c.length) {
                                var l = function() { for (var n = 0; n < c.length; n++) gr(c[n], "inserted", t, e) };
                                i ? pt(t, "insert", l) : l()
                            }
                            if (f.length && pt(t, "postpatch", (function() { for (var n = 0; n < f.length; n++) gr(f[n], "componentUpdated", t, e) })), !i)
                                for (n in a) u[n] || gr(a[n], "unbind", e, e, s)
                        }(e, t)
                    }
                    var dr = Object.create(null);

                    function hr(e, t) { var n, r, o = Object.create(null); if (!e) return o; for (n = 0; n < e.length; n++)(r = e[n]).modifiers || (r.modifiers = dr), o[yr(r)] = r, r.def = $e(t.$options, "directives", r.name); return o }

                    function yr(e) { return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".") }

                    function gr(e, t, n, r, o) { var i = e.def && e.def[t]; if (i) try { i(n.elm, e, n, r, o) } catch (Fo) { ze(Fo, n.context, "directive " + e.name + " " + t + " hook") } }
                    var _r = [ir, lr];

                    function vr(e, t) {
                        var n = t.componentOptions;
                        if (!(a(n) && !1 === n.Ctor.options.inheritAttrs || s(e.data.attrs) && s(t.data.attrs))) {
                            var r, o, i = t.elm,
                                u = e.data.attrs || {},
                                c = t.data.attrs || {};
                            for (r in a(c.__ob__) && (c = t.data.attrs = L({}, c)), c) o = c[r], u[r] !== o && mr(i, r, o);
                            for (r in (Z || te) && c.value !== u.value && mr(i, "value", c.value), u) s(c[r]) && (Wn(r) ? i.removeAttributeNS(Gn, zn(r)) : $n(r) || i.removeAttribute(r))
                        }
                    }

                    function mr(e, t, n) { e.tagName.indexOf("-") > -1 ? br(e, t, n) : Fn(t) ? Hn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : $n(t) ? e.setAttribute(t, function(e, t) { return Hn(t) || "false" === t ? "false" : "contenteditable" === e && qn(t) ? t : "true" }(t, n)) : Wn(t) ? Hn(n) ? e.removeAttributeNS(Gn, zn(t)) : e.setAttributeNS(Gn, t, n) : br(e, t, n) }

                    function br(e, t, n) { Hn(n) ? e.removeAttribute(t) : (!Z || ee || "TEXTAREA" !== e.tagName || "placeholder" !== t || "" === n || e.__ieph || (e.addEventListener("input", (function r(t) { t.stopImmediatePropagation(), e.removeEventListener("input", r) })), e.__ieph = !0), e.setAttribute(t, n)) }
                    var Or = { create: vr, update: vr };

                    function Ar(e, t) {
                        var n = t.elm,
                            r = t.data,
                            o = e.data;
                        if (!(s(r.staticClass) && s(r["class"]) && (s(o) || s(o.staticClass) && s(o["class"])))) {
                            var i = Vn(t),
                                u = n._transitionClasses;
                            a(u) && (i = Jn(i, Qn(u))), i !== n._prevClass && (n.setAttribute("class", i), n._prevClass = i)
                        }
                    }
                    var wr, Sr = { create: Ar, update: Ar };

                    function Er(e, t, n) {
                        var r = wr;
                        return function o() {
                            var i = t.apply(null, arguments);
                            null !== i && Ir(e, o, n, r)
                        }
                    }
                    var Nr = Qe && !(re && Number(re[1]) <= 53);

                    function Tr(e, t, n, r) {
                        if (Nr) {
                            var o = yn,
                                i = t;
                            t = i._wrapper = function(e) { if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document) return i.apply(this, arguments) }
                        }
                        wr.addEventListener(e, t, ie ? { capture: n, passive: r } : n)
                    }

                    function Ir(e, t, n, r) {
                        (r || wr).removeEventListener(e, t._wrapper || t, n)
                    }

                    function Br(e, t) {
                        if (!s(e.data.on) || !s(t.data.on)) {
                            var n = t.data.on || {},
                                r = e.data.on || {};
                            wr = t.elm,
                                function(e) {
                                    if (a(e.__r)) {
                                        var t = Z ? "change" : "input";
                                        e[t] = [].concat(e.__r, e[t] || []), delete e.__r
                                    }
                                    a(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c)
                                }(n), lt(n, r, Tr, Ir, Er, t.context), wr = undefined
                        }
                    }
                    var Pr, Lr = { create: Br, update: Br };

                    function Dr(e, t) {
                        if (!s(e.data.domProps) || !s(t.data.domProps)) {
                            var n, r, o = t.elm,
                                i = e.data.domProps || {},
                                u = t.data.domProps || {};
                            for (n in a(u.__ob__) && (u = t.data.domProps = L({}, u)), i) n in u || (o[n] = "");
                            for (n in u) {
                                if (r = u[n], "textContent" === n || "innerHTML" === n) {
                                    if (t.children && (t.children.length = 0), r === i[n]) continue;
                                    1 === o.childNodes.length && o.removeChild(o.childNodes[0])
                                }
                                if ("value" === n && "PROGRESS" !== o.tagName) {
                                    o._value = r;
                                    var c = s(r) ? "" : String(r);
                                    Rr(o, c) && (o.value = c)
                                } else if ("innerHTML" === n && er(o.tagName) && s(o.innerHTML)) {
                                    (Pr = Pr || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
                                    for (var f = Pr.firstChild; o.firstChild;) o.removeChild(o.firstChild);
                                    for (; f.firstChild;) o.appendChild(f.firstChild)
                                } else if (r !== i[n]) try { o[n] = r } catch (Fo) {}
                            }
                        }
                    }

                    function Rr(e, t) {
                        return !e.composing && ("OPTION" === e.tagName || function(e, t) { var n = !0; try { n = document.activeElement !== e } catch (Fo) {} return n && e.value !== t }(e, t) || function(e, t) {
                            var n = e.value,
                                r = e._vModifiers;
                            if (a(r)) { if (r.number) return _(n) !== _(t); if (r.trim) return n.trim() !== t.trim() }
                            return n !== t
                        }(e, t))
                    }
                    var Mr = { create: Dr, update: Dr },
                        Cr = w((function(e) {
                            var t = {},
                                n = /:(.+)/;
                            return e.split(/;(?![^(]*\))/g).forEach((function(e) {
                                if (e) {
                                    var r = e.split(n);
                                    r.length > 1 && (t[r[0].trim()] = r[1].trim())
                                }
                            })), t
                        }));

                    function xr(e) { var t = kr(e.style); return e.staticStyle ? L(e.staticStyle, t) : t }

                    function kr(e) { return Array.isArray(e) ? D(e) : "string" == typeof e ? Cr(e) : e }
                    var Ur, jr = /^--/,
                        Yr = /\s*!important$/,
                        $r = function(e, t, n) {
                            if (jr.test(t)) e.style.setProperty(t, n);
                            else if (Yr.test(n)) e.style.setProperty(I(t), n.replace(Yr, ""), "important");
                            else {
                                var r = Fr(t);
                                if (Array.isArray(n))
                                    for (var o = 0, i = n.length; o < i; o++) e.style[r] = n[o];
                                else e.style[r] = n
                            }
                        },
                        qr = ["Webkit", "Moz", "ms"],
                        Fr = w((function(e) { if (Ur = Ur || document.createElement("div").style, "filter" !== (e = E(e)) && e in Ur) return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < qr.length; n++) { var r = qr[n] + t; if (r in Ur) return r } }));

                    function Gr(e, t) {
                        var n = t.data,
                            r = e.data;
                        if (!(s(n.staticStyle) && s(n.style) && s(r.staticStyle) && s(r.style))) {
                            var o, i, u = t.elm,
                                c = r.staticStyle,
                                f = r.normalizedStyle || r.style || {},
                                l = c || f,
                                p = kr(t.data.style) || {};
                            t.data.normalizedStyle = a(p.__ob__) ? L({}, p) : p;
                            var d = function(e, t) {
                                var n, r = {};
                                if (t)
                                    for (var o = e; o.componentInstance;)(o = o.componentInstance._vnode) && o.data && (n = xr(o.data)) && L(r, n);
                                (n = xr(e.data)) && L(r, n);
                                for (var i = e; i = i.parent;) i.data && (n = xr(i.data)) && L(r, n);
                                return r
                            }(t, !0);
                            for (i in l) s(d[i]) && $r(u, i, "");
                            for (i in d)(o = d[i]) !== l[i] && $r(u, i, null == o ? "" : o)
                        }
                    }
                    var Wr = { create: Gr, update: Gr },
                        zr = /\s+/;

                    function Hr(e, t) {
                        if (t && (t = t.trim()))
                            if (e.classList) t.indexOf(" ") > -1 ? t.split(zr).forEach((function(t) { return e.classList.add(t) })) : e.classList.add(t);
                            else {
                                var n = " " + (e.getAttribute("class") || "") + " ";
                                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                            }
                    }

                    function Vr(e, t) {
                        if (t && (t = t.trim()))
                            if (e.classList) t.indexOf(" ") > -1 ? t.split(zr).forEach((function(t) { return e.classList.remove(t) })) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
                            else {
                                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                                (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
                            }
                    }

                    function Kr(e) { if (e) { if ("object" === (0, o["default"])(e)) { var t = {}; return !1 !== e.css && L(t, Jr(e.name || "v")), L(t, e), t } return "string" == typeof e ? Jr(e) : void 0 } }
                    var Jr = w((function(e) { return { enterClass: e + "-enter", enterToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveClass: e + "-leave", leaveToClass: e + "-leave-to", leaveActiveClass: e + "-leave-active" } })),
                        Qr = K && !ee,
                        Xr = "transition",
                        Zr = "animation",
                        eo = "transition",
                        to = "transitionend",
                        no = "animation",
                        ro = "animationend";
                    Qr && (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined && (eo = "WebkitTransition", to = "webkitTransitionEnd"), window.onanimationend === undefined && window.onwebkitanimationend !== undefined && (no = "WebkitAnimation", ro = "webkitAnimationEnd"));
                    var oo = K ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) { return e() };

                    function io(e) { oo((function() { oo(e) })) }

                    function so(e, t) {
                        var n = e._transitionClasses || (e._transitionClasses = []);
                        n.indexOf(t) < 0 && (n.push(t), Hr(e, t))
                    }

                    function ao(e, t) { e._transitionClasses && b(e._transitionClasses, t), Vr(e, t) }

                    function uo(e, t, n) {
                        var r = fo(e, t),
                            o = r.type,
                            i = r.timeout,
                            s = r.propCount;
                        if (!o) return n();
                        var a = o === Xr ? to : ro,
                            u = 0,
                            c = function() { e.removeEventListener(a, f), n() },
                            f = function(t) { t.target === e && ++u >= s && c() };
                        setTimeout((function() { u < s && c() }), i + 1), e.addEventListener(a, f)
                    }
                    var co = /\b(transform|all)(,|$)/;

                    function fo(e, t) {
                        var n, r = window.getComputedStyle(e),
                            o = (r[eo + "Delay"] || "").split(", "),
                            i = (r[eo + "Duration"] || "").split(", "),
                            s = lo(o, i),
                            a = (r[no + "Delay"] || "").split(", "),
                            u = (r[no + "Duration"] || "").split(", "),
                            c = lo(a, u),
                            f = 0,
                            l = 0;
                        return t === Xr ? s > 0 && (n = Xr, f = s, l = i.length) : t === Zr ? c > 0 && (n = Zr, f = c, l = u.length) : l = (n = (f = Math.max(s, c)) > 0 ? s > c ? Xr : Zr : null) ? n === Xr ? i.length : u.length : 0, { type: n, timeout: f, propCount: l, hasTransform: n === Xr && co.test(r[eo + "Property"]) }
                    }

                    function lo(e, t) { for (; e.length < t.length;) e = e.concat(e); return Math.max.apply(null, t.map((function(t, n) { return po(t) + po(e[n]) }))) }

                    function po(e) { return 1e3 * Number(e.slice(0, -1).replace(",", ".")) }

                    function ho(e, t) {
                        var n = e.elm;
                        a(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
                        var r = Kr(e.data.transition);
                        if (!s(r) && !a(n._enterCb) && 1 === n.nodeType) {
                            for (var o = r.css, i = r.type, u = r.enterClass, c = r.enterToClass, l = r.enterActiveClass, p = r.appearClass, d = r.appearToClass, h = r.appearActiveClass, y = r.beforeEnter, g = r.enter, v = r.afterEnter, m = r.enterCancelled, b = r.beforeAppear, O = r.appear, A = r.afterAppear, w = r.appearCancelled, S = r.duration, E = nn, N = nn.$vnode; N && N.parent;) E = N.context, N = N.parent;
                            var T = !E._isMounted || !e.isRootInsert;
                            if (!T || O || "" === O) {
                                var I = T && p ? p : u,
                                    B = T && h ? h : l,
                                    P = T && d ? d : c,
                                    L = T && b || y,
                                    D = T && "function" == typeof O ? O : g,
                                    R = T && A || v,
                                    M = T && w || m,
                                    C = _(f(S) ? S.enter : S),
                                    x = !1 !== o && !ee,
                                    k = _o(D),
                                    j = n._enterCb = U((function() { x && (ao(n, P), ao(n, B)), j.cancelled ? (x && ao(n, I), M && M(n)) : R && R(n), n._enterCb = null }));
                                e.data.show || pt(e, "insert", (function() {
                                    var t = n.parentNode,
                                        r = t && t._pending && t._pending[e.key];
                                    r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), D && D(n, j)
                                })), L && L(n), x && (so(n, I), so(n, B), io((function() { ao(n, I), j.cancelled || (so(n, P), k || (go(C) ? setTimeout(j, C) : uo(n, i, j))) }))), e.data.show && (t && t(), D && D(n, j)), x || k || j()
                            }
                        }
                    }

                    function yo(e, t) {
                        var n = e.elm;
                        a(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
                        var r = Kr(e.data.transition);
                        if (s(r) || 1 !== n.nodeType) return t();
                        if (!a(n._leaveCb)) {
                            var o = r.css,
                                i = r.type,
                                u = r.leaveClass,
                                c = r.leaveToClass,
                                l = r.leaveActiveClass,
                                p = r.beforeLeave,
                                d = r.leave,
                                h = r.afterLeave,
                                y = r.leaveCancelled,
                                g = r.delayLeave,
                                v = r.duration,
                                m = !1 !== o && !ee,
                                b = _o(d),
                                O = _(f(v) ? v.leave : v),
                                A = n._leaveCb = U((function() { n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), m && (ao(n, c), ao(n, l)), A.cancelled ? (m && ao(n, u), y && y(n)) : (t(), h && h(n)), n._leaveCb = null }));
                            g ? g(w) : w()
                        }

                        function w() { A.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), p && p(n), m && (so(n, u), so(n, l), io((function() { ao(n, u), A.cancelled || (so(n, c), b || (go(O) ? setTimeout(A, O) : uo(n, i, A))) }))), d && d(n, A), m || b || A()) }
                    }

                    function go(e) { return "number" == typeof e && !isNaN(e) }

                    function _o(e) { if (s(e)) return !1; var t = e.fns; return a(t) ? _o(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1 }

                    function vo(e, t) {!0 !== t.data.show && ho(t) }
                    var mo = function(e) {
                        var t, n, r = {},
                            o = e.modules,
                            i = e.nodeOps;
                        for (t = 0; t < ur.length; ++t)
                            for (r[ur[t]] = [], n = 0; n < o.length; ++n) a(o[n][ur[t]]) && r[ur[t]].push(o[n][ur[t]]);

                        function f(e) {
                            var t = i.parentNode(e);
                            a(t) && i.removeChild(t, e)
                        }

                        function l(e, t, n, o, s, c, f) {
                            if (a(e.elm) && a(c) && (e = c[f] = Ae(e)), e.isRootInsert = !s, ! function(e, t, n, o) {
                                    var i = e.data;
                                    if (a(i)) {
                                        var s = a(e.componentInstance) && i.keepAlive;
                                        if (a(i = i.hook) && a(i = i.init) && i(e, !1), a(e.componentInstance)) return p(e, t), d(n, e.elm, o), u(s) && function(e, t, n, o) {
                                            for (var i, s = e; s.componentInstance;)
                                                if (a(i = (s = s.componentInstance._vnode).data) && a(i = i.transition)) {
                                                    for (i = 0; i < r.activate.length; ++i) r.activate[i](ar, s);
                                                    t.push(s);
                                                    break
                                                }
                                            d(n, e.elm, o)
                                        }(e, t, n, o), !0
                                    }
                                }(e, t, n, o)) {
                                var l = e.data,
                                    y = e.children,
                                    v = e.tag;
                                a(v) ? (e.elm = e.ns ? i.createElementNS(e.ns, v) : i.createElement(v, e), _(e), h(e, y, t), a(l) && g(e, t), d(n, e.elm, o)) : u(e.isComment) ? (e.elm = i.createComment(e.text), d(n, e.elm, o)) : (e.elm = i.createTextNode(e.text), d(n, e.elm, o))
                            }
                        }

                        function p(e, t) { a(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, y(e) ? (g(e, t), _(e)) : (sr(e), t.push(e)) }

                        function d(e, t, n) { a(e) && (a(n) ? i.parentNode(n) === e && i.insertBefore(e, t, n) : i.appendChild(e, t)) }

                        function h(e, t, n) {
                            if (Array.isArray(t))
                                for (var r = 0; r < t.length; ++r) l(t[r], n, e.elm, null, !0, t, r);
                            else c(e.text) && i.appendChild(e.elm, i.createTextNode(String(e.text)))
                        }

                        function y(e) { for (; e.componentInstance;) e = e.componentInstance._vnode; return a(e.tag) }

                        function g(e, n) {
                            for (var o = 0; o < r.create.length; ++o) r.create[o](ar, e);
                            a(t = e.data.hook) && (a(t.create) && t.create(ar, e), a(t.insert) && n.push(e))
                        }

                        function _(e) {
                            var t;
                            if (a(t = e.fnScopeId)) i.setStyleScope(e.elm, t);
                            else
                                for (var n = e; n;) a(t = n.context) && a(t = t.$options._scopeId) && i.setStyleScope(e.elm, t), n = n.parent;
                            a(t = nn) && t !== e.context && t !== e.fnContext && a(t = t.$options._scopeId) && i.setStyleScope(e.elm, t)
                        }

                        function m(e, t, n, r, o, i) { for (; r <= o; ++r) l(n[r], i, e, t, !1, n, r) }

                        function b(e) {
                            var t, n, o = e.data;
                            if (a(o))
                                for (a(t = o.hook) && a(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) r.destroy[t](e);
                            if (a(t = e.children))
                                for (n = 0; n < e.children.length; ++n) b(e.children[n])
                        }

                        function O(e, t, n) {
                            for (; t <= n; ++t) {
                                var r = e[t];
                                a(r) && (a(r.tag) ? (A(r), b(r)) : f(r.elm))
                            }
                        }

                        function A(e, t) {
                            if (a(t) || a(e.data)) {
                                var n, o = r.remove.length + 1;
                                for (a(t) ? t.listeners += o : t = function(e, t) {
                                        function n() { 0 == --n.listeners && f(e) }
                                        return n.listeners = t, n
                                    }(e.elm, o), a(n = e.componentInstance) && a(n = n._vnode) && a(n.data) && A(n, t), n = 0; n < r.remove.length; ++n) r.remove[n](e, t);
                                a(n = e.data.hook) && a(n = n.remove) ? n(e, t) : t()
                            } else f(e.elm)
                        }

                        function w(e, t, n, r) { for (var o = n; o < r; o++) { var i = t[o]; if (a(i) && cr(e, i)) return o } }

                        function S(e, t, n, o, c, f) {
                            if (e !== t) {
                                a(t.elm) && a(o) && (t = o[c] = Ae(t));
                                var p = t.elm = e.elm;
                                if (u(e.isAsyncPlaceholder)) a(t.asyncFactory.resolved) ? T(e.elm, t, n) : t.isAsyncPlaceholder = !0;
                                else if (u(t.isStatic) && u(e.isStatic) && t.key === e.key && (u(t.isCloned) || u(t.isOnce))) t.componentInstance = e.componentInstance;
                                else {
                                    var d, h = t.data;
                                    a(h) && a(d = h.hook) && a(d = d.prepatch) && d(e, t);
                                    var g = e.children,
                                        _ = t.children;
                                    if (a(h) && y(t)) {
                                        for (d = 0; d < r.update.length; ++d) r.update[d](e, t);
                                        a(d = h.hook) && a(d = d.update) && d(e, t)
                                    }
                                    s(t.text) ? a(g) && a(_) ? g !== _ && function(e, t, n, r, o) {
                                        for (var u, c, f, p = 0, d = 0, h = t.length - 1, y = t[0], g = t[h], _ = n.length - 1, v = n[0], b = n[_], A = !o; p <= h && d <= _;) s(y) ? y = t[++p] : s(g) ? g = t[--h] : cr(y, v) ? (S(y, v, r, n, d), y = t[++p], v = n[++d]) : cr(g, b) ? (S(g, b, r, n, _), g = t[--h], b = n[--_]) : cr(y, b) ? (S(y, b, r, n, _), A && i.insertBefore(e, y.elm, i.nextSibling(g.elm)), y = t[++p], b = n[--_]) : cr(g, v) ? (S(g, v, r, n, d), A && i.insertBefore(e, g.elm, y.elm), g = t[--h], v = n[++d]) : (s(u) && (u = fr(t, p, h)), s(c = a(v.key) ? u[v.key] : w(v, t, p, h)) ? l(v, r, e, y.elm, !1, n, d) : cr(f = t[c], v) ? (S(f, v, r, n, d), t[c] = undefined, A && i.insertBefore(e, f.elm, y.elm)) : l(v, r, e, y.elm, !1, n, d), v = n[++d]);
                                        p > h ? m(e, s(n[_ + 1]) ? null : n[_ + 1].elm, n, d, _, r) : d > _ && O(t, p, h)
                                    }(p, g, _, n, f) : a(_) ? (a(e.text) && i.setTextContent(p, ""), m(p, null, _, 0, _.length - 1, n)) : a(g) ? O(g, 0, g.length - 1) : a(e.text) && i.setTextContent(p, "") : e.text !== t.text && i.setTextContent(p, t.text), a(h) && a(d = h.hook) && a(d = d.postpatch) && d(e, t)
                                }
                            }
                        }

                        function E(e, t, n) {
                            if (u(n) && a(e.parent)) e.parent.data.pendingInsert = t;
                            else
                                for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
                        }
                        var N = v("attrs,class,staticClass,staticStyle,key");

                        function T(e, t, n, r) {
                            var o, i = t.tag,
                                s = t.data,
                                c = t.children;
                            if (r = r || s && s.pre, t.elm = e, u(t.isComment) && a(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                            if (a(s) && (a(o = s.hook) && a(o = o.init) && o(t, !0), a(o = t.componentInstance))) return p(t, n), !0;
                            if (a(i)) {
                                if (a(c))
                                    if (e.hasChildNodes())
                                        if (a(o = s) && a(o = o.domProps) && a(o = o.innerHTML)) { if (o !== e.innerHTML) return !1 } else {
                                            for (var f = !0, l = e.firstChild, d = 0; d < c.length; d++) {
                                                if (!l || !T(l, c[d], n, r)) { f = !1; break }
                                                l = l.nextSibling
                                            }
                                            if (!f || l) return !1
                                        }
                                else h(t, c, n);
                                if (a(s)) {
                                    var y = !1;
                                    for (var _ in s)
                                        if (!N(_)) { y = !0, g(t, n); break }!y && s["class"] && at(s["class"])
                                }
                            } else e.data !== t.text && (e.data = t.text);
                            return !0
                        }
                        return function(e, t, n, o) {
                            if (!s(t)) {
                                var c, f = !1,
                                    p = [];
                                if (s(e)) f = !0, l(t, p);
                                else {
                                    var d = a(e.nodeType);
                                    if (!d && cr(e, t)) S(e, t, p, null, null, o);
                                    else {
                                        if (d) {
                                            if (1 === e.nodeType && e.hasAttribute(j) && (e.removeAttribute(j), n = !0), u(n) && T(e, t, p)) return E(t, p, !0), e;
                                            c = e, e = new ve(i.tagName(c).toLowerCase(), {}, [], undefined, c)
                                        }
                                        var h = e.elm,
                                            g = i.parentNode(h);
                                        if (l(t, p, h._leaveCb ? null : g, i.nextSibling(h)), a(t.parent))
                                            for (var _ = t.parent, v = y(t); _;) {
                                                for (var m = 0; m < r.destroy.length; ++m) r.destroy[m](_);
                                                if (_.elm = t.elm, v) {
                                                    for (var A = 0; A < r.create.length; ++A) r.create[A](ar, _);
                                                    var w = _.data.hook.insert;
                                                    if (w.merged)
                                                        for (var N = 1; N < w.fns.length; N++) w.fns[N]()
                                                } else sr(_);
                                                _ = _.parent
                                            }
                                        a(g) ? O([e], 0, 0) : a(e.tag) && b(e)
                                    }
                                }
                                return E(t, p, f), t.elm
                            }
                            a(e) && b(e)
                        }
                    }({ nodeOps: or, modules: [Or, Sr, Lr, Mr, Wr, K ? { create: vo, activate: vo, remove: function(e, t) {!0 !== e.data.show ? yo(e, t) : t() } } : {}].concat(_r) });
                    ee && document.addEventListener("selectionchange", (function() {
                        var e = document.activeElement;
                        e && e.vmodel && To(e, "input")
                    }));
                    var bo = {
                        inserted: function(e, t, n, r) { "select" === n.tag ? (r.elm && !r.elm._vOptions ? pt(n, "postpatch", (function() { bo.componentUpdated(e, t, n) })) : Oo(e, t, n.context), e._vOptions = [].map.call(e.options, So)) : ("textarea" === n.tag || rr(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Eo), e.addEventListener("compositionend", No), e.addEventListener("change", No), ee && (e.vmodel = !0))) },
                        componentUpdated: function(e, t, n) {
                            if ("select" === n.tag) {
                                Oo(e, t, n.context);
                                var r = e._vOptions,
                                    o = e._vOptions = [].map.call(e.options, So);
                                o.some((function(e, t) { return !x(e, r[t]) })) && (e.multiple ? t.value.some((function(e) { return wo(e, o) })) : t.value !== t.oldValue && wo(t.value, o)) && To(e, "change")
                            }
                        }
                    };

                    function Oo(e, t, n) { Ao(e, t), (Z || te) && setTimeout((function() { Ao(e, t) }), 0) }

                    function Ao(e, t, n) {
                        var r = t.value,
                            o = e.multiple;
                        if (!o || Array.isArray(r)) {
                            for (var i, s, a = 0, u = e.options.length; a < u; a++)
                                if (s = e.options[a], o) i = k(r, So(s)) > -1, s.selected !== i && (s.selected = i);
                                else if (x(So(s), r)) return void(e.selectedIndex !== a && (e.selectedIndex = a));
                            o || (e.selectedIndex = -1)
                        }
                    }

                    function wo(e, t) { return t.every((function(t) { return !x(t, e) })) }

                    function So(e) { return "_value" in e ? e._value : e.value }

                    function Eo(e) { e.target.composing = !0 }

                    function No(e) { e.target.composing && (e.target.composing = !1, To(e.target, "input")) }

                    function To(e, t) {
                        var n = document.createEvent("HTMLEvents");
                        n.initEvent(t, !0, !0), e.dispatchEvent(n)
                    }

                    function Io(e) { return !e.componentInstance || e.data && e.data.transition ? e : Io(e.componentInstance._vnode) }
                    var Bo = {
                            model: bo,
                            show: {
                                bind: function(e, t, n) {
                                    var r = t.value,
                                        o = (n = Io(n)).data && n.data.transition,
                                        i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                                    r && o ? (n.data.show = !0, ho(n, (function() { e.style.display = i }))) : e.style.display = r ? i : "none"
                                },
                                update: function(e, t, n) { var r = t.value;!r != !t.oldValue && ((n = Io(n)).data && n.data.transition ? (n.data.show = !0, r ? ho(n, (function() { e.style.display = e.__vOriginalDisplay })) : yo(n, (function() { e.style.display = "none" }))) : e.style.display = r ? e.__vOriginalDisplay : "none") },
                                unbind: function(e, t, n, r, o) { o || (e.style.display = e.__vOriginalDisplay) }
                            }
                        },
                        Po = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] };

                    function Lo(e) { var t = e && e.componentOptions; return t && t.Ctor.options.abstract ? Lo(Qt(t.children)) : e }

                    function Do(e) {
                        var t = {},
                            n = e.$options;
                        for (var r in n.propsData) t[r] = e[r];
                        var o = n._parentListeners;
                        for (var i in o) t[E(i)] = o[i];
                        return t
                    }

                    function Ro(e, t) { if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData }) }
                    var Mo = function(e) { return e.tag || Jt(e) },
                        Co = function(e) { return "show" === e.name },
                        xo = {
                            name: "transition",
                            props: Po,
                            abstract: !0,
                            render: function(e) {
                                var t = this,
                                    n = this.$slots["default"];
                                if (n && (n = n.filter(Mo)).length) {
                                    var r = this.mode,
                                        o = n[0];
                                    if (function(e) {
                                            for (; e = e.parent;)
                                                if (e.data.transition) return !0
                                        }(this.$vnode)) return o;
                                    var i = Lo(o);
                                    if (!i) return o;
                                    if (this._leaving) return Ro(e, o);
                                    var s = "__transition-" + this._uid + "-";
                                    i.key = null == i.key ? i.isComment ? s + "comment" : s + i.tag : c(i.key) ? 0 === String(i.key).indexOf(s) ? i.key : s + i.key : i.key;
                                    var a = (i.data || (i.data = {})).transition = Do(this),
                                        u = this._vnode,
                                        f = Lo(u);
                                    if (i.data.directives && i.data.directives.some(Co) && (i.data.show = !0), f && f.data && ! function(e, t) { return t.key === e.key && t.tag === e.tag }(i, f) && !Jt(f) && (!f.componentInstance || !f.componentInstance._vnode.isComment)) {
                                        var l = f.data.transition = L({}, a);
                                        if ("out-in" === r) return this._leaving = !0, pt(l, "afterLeave", (function() { t._leaving = !1, t.$forceUpdate() })), Ro(e, o);
                                        if ("in-out" === r) {
                                            if (Jt(i)) return u;
                                            var p, d = function() { p() };
                                            pt(a, "afterEnter", d), pt(a, "enterCancelled", d), pt(l, "delayLeave", (function(e) { p = e }))
                                        }
                                    }
                                    return o
                                }
                            }
                        },
                        ko = L({ tag: String, moveClass: String }, Po);

                    function Uo(e) { e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb() }

                    function jo(e) { e.data.newPos = e.elm.getBoundingClientRect() }

                    function Yo(e) {
                        var t = e.data.pos,
                            n = e.data.newPos,
                            r = t.left - n.left,
                            o = t.top - n.top;
                        if (r || o) {
                            e.data.moved = !0;
                            var i = e.elm.style;
                            i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)", i.transitionDuration = "0s"
                        }
                    }
                    delete ko.mode;
                    var $o = {
                        Transition: xo,
                        TransitionGroup: {
                            props: ko,
                            beforeMount: function() {
                                var e = this,
                                    t = this._update;
                                this._update = function(n, r) {
                                    var o = rn(e);
                                    e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, o(), t.call(e, n, r)
                                }
                            },
                            render: function(e) {
                                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots["default"] || [], i = this.children = [], s = Do(this), a = 0; a < o.length; a++) {
                                    var u = o[a];
                                    u.tag && null != u.key && 0 !== String(u.key).indexOf("__vlist") && (i.push(u), n[u.key] = u, (u.data || (u.data = {})).transition = s)
                                }
                                if (r) {
                                    for (var c = [], f = [], l = 0; l < r.length; l++) {
                                        var p = r[l];
                                        p.data.transition = s, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? c.push(p) : f.push(p)
                                    }
                                    this.kept = e(t, null, c), this.removed = f
                                }
                                return e(t, null, i)
                            },
                            updated: function() {
                                var e = this.prevChildren,
                                    t = this.moveClass || (this.name || "v") + "-move";
                                e.length && this.hasMove(e[0].elm, t) && (e.forEach(Uo), e.forEach(jo), e.forEach(Yo), this._reflow = document.body.offsetHeight, e.forEach((function(e) {
                                    if (e.data.moved) {
                                        var n = e.elm,
                                            r = n.style;
                                        so(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(to, n._moveCb = function o(e) { e && e.target !== n || e && !/transform$/.test(e.propertyName) || (n.removeEventListener(to, o), n._moveCb = null, ao(n, t)) })
                                    }
                                })))
                            },
                            methods: {
                                hasMove: function(e, t) {
                                    if (!Qr) return !1;
                                    if (this._hasMove) return this._hasMove;
                                    var n = e.cloneNode();
                                    e._transitionClasses && e._transitionClasses.forEach((function(e) { Vr(n, e) })), Hr(n, t), n.style.display = "none", this.$el.appendChild(n);
                                    var r = fo(n);
                                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                                }
                            }
                        }
                    };
                    Ln.config.mustUseProp = function(e, t, n) { return "value" === n && Yn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e }, Ln.config.isReservedTag = tr, Ln.config.isReservedAttr = jn, Ln.config.getTagNamespace = function(e) { return er(e) ? "svg" : "math" === e ? "math" : void 0 }, Ln.config.isUnknownElement = function(e) { if (!K) return !0; if (tr(e)) return !1; if (e = e.toLowerCase(), null != nr[e]) return nr[e]; var t = document.createElement(e); return e.indexOf("-") > -1 ? nr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : nr[e] = /HTMLUnknownElement/.test(t.toString()) }, L(Ln.options.directives, Bo), L(Ln.options.components, $o), Ln.prototype.__patch__ = K ? mo : R, Ln.prototype.$mount = function(e, t) { return function(e, t, n) { var r; return e.$el = t, e.$options.render || (e.$options.render = be), un(e, "beforeMount"), r = function() { e._update(e._render(), n) }, new bn(e, r, R, { before: function() { e._isMounted && !e._isDestroyed && un(e, "beforeUpdate") } }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, un(e, "mounted")), e }(this, e = e && K ? function(e) { return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e }(e) : undefined, t) }, K && setTimeout((function() { q.devtools && ue && ue.emit("init", Ln) }), 0);
                    var qo = Ln;
                    t["default"] = qo
                },
                653: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.render = void 0;
                    var o = r(n(8252)),
                        i = r(n(2925)),
                        s = new o["default"];
                    t.render = function() {
                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : undefined;
                        return o["default"].prototype.$marked = t, o["default"].prototype.$speakData = e, o["default"].prototype.$eventHub = s, new o["default"]({ render: function(e) { return e(i["default"]) } }).$mount(e.el || "#ispeak")
                    }
                },
                6299: function(e, t, n) {
                    (t = n(5306)(!1)).push([e.id, "\n.xk-card[data-v-185689ea] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);\n  overflow: hidden;\n  margin-top: 20px;\n  user-select: none;\n}\n.xk-card[data-v-185689ea]:hover {\n  box-shadow: 0 5px 10px 8px rgba(7, 17, 27, 0.16);\n  transition: all .15s ease-in-out;\n}\n.xk-card .xk-card-time[data-v-185689ea] {\n  font-size: 12px;\n  text-shadow: #d9d9d9 0 0 1px, #fffffb 0 0 1px, #fffffb 0 0 2px;\n  margin-left: 10px;\n}\n.xk-card .xk-card-header[data-v-185689ea] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.xk-card .xk-card-header .xk-card-name[data-v-185689ea] {\n  display: flex;\n  align-items: center;\n}\n.xk-card .xk-card-header .xk-card-name .is-badge[data-v-185689ea] {\n  height: 20px;\n  width: 20px;\n  margin-left: 5px;\n}\n.xk-card .xk-card-header .xk-card-name .avatar[data-v-185689ea] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.xk-card .xk-card-header .xk-card-name .avatar-img[data-v-185689ea] {\n  width: 100%;\n  height: unset;\n  border-radius: 50%;\n}\n.xk-card .xk-card-content[data-v-185689ea] {\n  padding: 0.8rem 0;\n}\n@media screen and (min-width: 768px) {\n#article-container .xk-card-content[data-v-185689ea] .fancybox,\n  #article-container .xk-card-content[data-v-185689ea] video {\n    display: inline-block;\n    max-width: 50%;\n}\n}\n@media screen and (max-width: 768px) {\n#article-container .xk-card-content[data-v-185689ea] .fancybox,\n  #article-container .xk-card-content[data-v-185689ea] video {\n    display: inline-block;\n    max-width: 100%;\n}\n}\n.xk-card .xk-card-footer[data-v-185689ea] {\n  display: flex;\n  padding-bottom: 10px;\n}\n.xk-card .xk-card-footer .xk-card-label[data-v-185689ea] {\n  border-radius: 5px;\n  padding: 0 5px;\n  font-weight: 550;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgb(27 31 35 / 12%);\n  font-size: 14px;\n  cursor: pointer;\n  user-select: none;\n  margin-right: 10px;\n}\n", ""]), e.exports = t
                },
                7273: function(e, t, n) {
                    (t = n(5306)(!1)).push([e.id, "\n.xk-footer[data-v-83222954] {\n  width: 100%;\n  text-align: end;\n  font-size: 0.75em;\n  color: #999999;\n  margin-top: 1em;\n}\n", ""]), e.exports = t
                },
                3139: function(e, t, n) {
                    (t = n(5306)(!1)).push([e.id, "\n.xk-info[data-v-0224b4ae] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.xk-info .count[data-v-0224b4ae] {\n  font-weight: 700;\n  font-size: 16px;\n  /* color: #49b1f5; */\n}\n.xk-info .count i[data-v-0224b4ae] {\n  /* color: black; */\n  font-size: 20px;\n}\n@font-face {\n  font-family: 'iconfont';\n  src: url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.eot?t=1641618509331'); /* IE9 */\n  src: url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.eot?t=1641618509331#iefix')\n      format('embedded-opentype'),\n    /* IE6-IE8 */\n      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMUAAsAAAAABswAAALIAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBWIFdATYCJAMICwYABCAFhG0HMBsDBsiemjwpUokNLPAZtJlEAoQIov3Yz947VJNLIopHtaRJSyVBhhYowRL5awlvck0zIE7JjQhkMf8FTPMDhUDn5xDUpuZ2E47y4rM+PUz6Di6nP8VbB5TLHJPHBAwsDXCsRZEVSGDeIruI7YlHxHECtXr4M1jLzC8H5jIYF4hbGS0E5g2vLBuJaqGSsjSLFxWq01O6BsBz9v34D0LDnKSiACXbNxkSkPyrB1OMGsoG5wmCt5wZxioKTAEysU+1bjIqolOM1HpRYwPAsQqDX/7LhHvYPx5BVIL8etAlc5+JF/EfNT+BXHSvAy4mXU2aIe6KHBubHndZtXp7q3r9rnz+LG942RidnFhxDUOv0Xh0TCvpfvkKeWkoP6BPE3RtTXlVja+vjjqXj4y6FSxNPCFP/9cWMbjH+Vr8HJw1ut80qkdWEp41nEkP1fYpibiTYR+wW5ODOSm89IJsVvIfIxgL2yCsVPRXsw6wUuzttbP2T3cpoRceFtw8Qi9NSOn5G8O6c2SUFT+SAZQfxUoR8HN/47U4O+XbzW1el8HP1cOZu/zIYJgdqL4FW/AreQObsi8AXcouj2pP1ieFE2oxQAmcrT6mKjvuOxmqddy9vUp3BYVqQ2gmp6BCnVmoVG0Rak3KWl2nDWYkcg0mtEoQmu1D0ugdCs1u0Ey+Q4VO31CpOYyg1mG0bVlnJGSWqxgJCZJAUR2UiTVqihiIZV5YimhGKcR1QUapRFgvC8CQwOB2IgupEV5ihr6aDiWEghTWqGCmdBpSKjVQizVyJCaBUkK0sUFBFO1NgWKNClhahSFCBCIBidSBZMQ01KikM2HZ+XwphMZQEsKcsh5zJQTTk/UOhQgUPADNkqoHlT3KK3rVaKEIggJRMA0VKFMahCgpaUBa+iA5RIwIJJ0Q1ooVhO2oodLA7eWqH8gxqgBVCuxXqHyUqZWMGgA=')\n      format('woff2'),\n    url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.woff?t=1641618509331')\n      format('woff'),\n    url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.ttf?t=1641618509331')\n      format('truetype'),\n    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n      url('//at.alicdn.com/t/font_2988473_8n1r36q7mfv.svg?t=1641618509331#iconfont')\n      format('svg'); /* iOS 4.1- */\n}\n.iconfont[data-v-0224b4ae] {\n  font-family: 'iconfont' !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-gangbi[data-v-0224b4ae]:before {\n  content: '\\e61e';\n}\n", ""]), e.exports = t
                },
                9442: function(e, t, n) {
                    (t = n(5306)(!1)).push([e.id, "\n.list-enter-active[data-v-b9fd4424],\n.list-leave-active[data-v-b9fd4424] {\n  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  transform-origin: 50% 50%;\n}\n.list-enter[data-v-b9fd4424],\n.list-leave-to[data-v-b9fd4424] {\n  transform-origin: 50% 50%;\n  transform: scaleY(0) translateZ(0);\n  opacity: 0;\n}\n.loading[data-v-b9fd4424] {\n  text-align: center;\n}\n@keyframes Gradient-data-v-b9fd4424 {\n0% {\n    background-position: 0 50%;\n}\n50% {\n    background-position: 100% 50%;\n}\nto {\n    background-position: 0 50%;\n}\n}\nbutton[data-v-b9fd4424] {\n  cursor: pointer;\n  color: #fff;\n  border: 0;\n  margin: 20px auto;\n  border-radius: 0.3125rem;\n  display: block;\n  padding: 0 1rem;\n  height: 40px;\n  font-weight: 500;\n  text-align: center;\n  transition: all 0.5s ease-out;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  background-size: 1000% 1000%;\n  animation: Gradient-data-v-b9fd4424 90s linear infinite;\n  outline: 0;\n  box-shadow: 0 0px 5px 2px rgb(7 17 27 / 15%);\n}\nbutton[data-v-b9fd4424]:hover {\n  box-shadow: 0 0px 8px 6px rgb(7 17 27 / 16%);\n}\n", ""]), e.exports = t
                },
                2925: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, { __esModule: function() { return o.X }, "default": function() { return a } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "ispeak", attrs: { id: "ispeak" } }, [n("xk-issue"), e._v(" "), n("xk-footer")], 1)
                    };
                    r._withStripped = !0;
                    var o = n(9785),
                        i = o.Z,
                        s = (0, n(1900).Z)(i, r, [], !1, null, "1a1fd4f0", null);
                    s.options.__file = "src/view/App.vue";
                    var a = s.exports
                },
                3505: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, { __esModule: function() { return o.X }, "default": function() { return a } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "xk-card wow animate__zoomIn" }, [n("div", { staticClass: "xk-card-header" }, [n("div", { staticClass: "xk-card-name" }, [n("div", { staticClass: "avatar" }, [n("img", { staticClass: "avatar-img", attrs: { src: e.avatar } })]), e._v(" "), n("div", { staticClass: "name" }, [e._v(e._s(e.name))]), e._v(" "), n("svg", { staticClass: "is-badge", attrs: { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#1da1f2" } })]), e._v(" "), n("span", { staticClass: "xk-card-time", attrs: { title: e.time_title } }, [e._v(e._s(e.date))])])]), e._v(" "), n("div", { staticClass: "xk-card-content", domProps: { innerHTML: e._s(e.content) } }), e._v(" "), n("div", { staticClass: "xk-card-footer" }, [n("div", { staticClass: "xk-card-label", style: "background: " + e.fromColor + ";color:white" }, [e._v("\n      " + e._s(e.from) + "\n    ")])])])
                    };
                    r._withStripped = !0;
                    var o = n(5272),
                        i = o.Z,
                        s = (n(6032), (0, n(1900).Z)(i, r, [], !1, null, "185689ea", null));
                    s.options.__file = "src/view/components/XkCard.vue";
                    var a = s.exports
                },
                6978: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, { __esModule: function() { return o.X }, "default": function() { return a } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "xk-footer" }, [e._v("\n  Powered by\n  "), n("a", { attrs: { href: "https://github.com/xue-hy/bber-ispeak", target: "_blank" } }, [e._v(e._s(e.name))]), e._v(" v" + e._s(e.version) + "\n")])
                    };
                    r._withStripped = !0;
                    var o = n(739),
                        i = o.Z,
                        s = (n(9083), (0, n(1900).Z)(i, r, [], !1, null, "83222954", null));
                    s.options.__file = "src/view/components/XkFooter.vue";
                    var a = s.exports
                },
                7054: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, { __esModule: function() { return o.X }, "default": function() { return a } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "xk-info" }, [n("div", { staticClass: "count" }, [n("i", { staticClass: "iconfont icon-gangbi" }), e._v("\n    小记 (" + e._s(e.count) + ")\n  ")])])
                    };
                    r._withStripped = !0;
                    var o = n(317),
                        i = o.Z,
                        s = (n(5135), (0, n(1900).Z)(i, r, [], !1, null, "0224b4ae", null));
                    s.options.__file = "src/view/components/XkInfo.vue";
                    var a = s.exports
                },
                4920: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, { __esModule: function() { return o.X }, "default": function() { return a } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("xk-info", { attrs: { count: e.total } }), e._v(" "), n("transition-group", { attrs: { name: "list", tag: "div" } }, [e._l(e.bbList, (function(t) { return [n("xk-card", { key: t._id, attrs: { bbData: t, name: e.name, avatar: e.avatar, fromColor: e.fromColor } })] }))], 2), e._v(" "), e.loading ? n("div", { staticClass: "loading" }, [n("img", { attrs: { src: e.loadingImg, alt: "loading" } })]) : e._e(), e._v(" "), e.bbList.length < e.total ? n("button", { staticClass: "next", on: { click: e.getData } }, [e._v("再翻翻")]) : e._e(), e._v(" "), e.showMessage ? n("div", { staticStyle: { "text-align": "center", "margin-top": "20px" } }, [e._v("\n    " + e._s(e.message) + "\n  ")]) : e._e()], 1)
                    };
                    r._withStripped = !0;
                    var o = n(4667),
                        i = o.Z,
                        s = (n(2e3), (0, n(1900).Z)(i, r, [], !1, null, "b9fd4424", null));
                    s.options.__file = "src/view/components/XkIssue.vue";
                    var a = s.exports
                },
                1900: function(e, t, n) {
                    "use strict";

                    function r(e, t, n, r, o, i, s, a) {
                        var u, c = "function" == typeof e ? e.options : e;
                        if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), i && (c._scopeId = "data-v-" + i), s ? (u = function(e) {
                                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                            }, c._ssrRegister = u) : o && (u = a ? function() { o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot) } : o), u)
                            if (c.functional) {
                                c._injectStyles = u;
                                var f = c.render;
                                c.render = function(e, t) { return u.call(t), f(e, t) }
                            } else {
                                var l = c.beforeCreate;
                                c.beforeCreate = l ? [].concat(l, u) : [u]
                            }
                        return { exports: e, options: c }
                    }
                    n.d(t, { Z: function() { return r } })
                },
                6032: function(e, t, n) {
                    var r = n(6299);
                    r.__esModule && (r = r["default"]), "string" == typeof r && (r = [
                        [e.id, r, ""]
                    ]), r.locals && (e.exports = r.locals), (0, n(7913).Z)("19ed7160", r, !1, {})
                },
                9083: function(e, t, n) {
                    var r = n(7273);
                    r.__esModule && (r = r["default"]), "string" == typeof r && (r = [
                        [e.id, r, ""]
                    ]), r.locals && (e.exports = r.locals), (0, n(7913).Z)("a9027d0c", r, !1, {})
                },
                5135: function(e, t, n) {
                    var r = n(3139);
                    r.__esModule && (r = r["default"]), "string" == typeof r && (r = [
                        [e.id, r, ""]
                    ]), r.locals && (e.exports = r.locals), (0, n(7913).Z)("07e281e7", r, !1, {})
                },
                2e3: function(e, t, n) {
                    var r = n(9442);
                    r.__esModule && (r = r["default"]), "string" == typeof r && (r = [
                        [e.id, r, ""]
                    ]), r.locals && (e.exports = r.locals), (0, n(7913).Z)("526027c0", r, !1, {})
                },
                7913: function(e, t, n) {
                    "use strict";
                    n.d(t, { Z: function() { return h } });
                    var r = n(1658),
                        o = "undefined" != typeof document;
                    if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                    var i = {},
                        s = o && (document.head || document.getElementsByTagName("head")[0]),
                        a = null,
                        u = 0,
                        c = !1,
                        f = function() {},
                        l = null,
                        p = "data-vue-ssr-id",
                        d = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                    function h(e, t, n, o) {
                        c = n, l = o || {};
                        var s = (0, r.Z)(e, t);
                        return y(s),
                            function(t) {
                                for (var n = [], o = 0; o < s.length; o++) {
                                    var a = s[o];
                                    (u = i[a.id]).refs--, n.push(u)
                                }
                                for (t ? y(s = (0, r.Z)(e, t)) : s = [], o = 0; o < n.length; o++) {
                                    var u;
                                    if (0 === (u = n[o]).refs) {
                                        for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                                        delete i[u.id]
                                    }
                                }
                            }
                    }

                    function y(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t],
                                r = i[n.id];
                            if (r) {
                                r.refs++;
                                for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                                for (; o < n.parts.length; o++) r.parts.push(_(n.parts[o]));
                                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                            } else {
                                var s = [];
                                for (o = 0; o < n.parts.length; o++) s.push(_(n.parts[o]));
                                i[n.id] = { id: n.id, refs: 1, parts: s }
                            }
                        }
                    }

                    function g() { var e = document.createElement("style"); return e.type = "text/css", s.appendChild(e), e }

                    function _(e) {
                        var t, n, r = document.querySelector("style[" + p + '~="' + e.id + '"]');
                        if (r) {
                            if (c) return f;
                            r.parentNode.removeChild(r)
                        }
                        if (d) {
                            var o = u++;
                            r = a || (a = g()), t = b.bind(null, r, o, !1), n = b.bind(null, r, o, !0)
                        } else r = g(), t = O.bind(null, r), n = function() { r.parentNode.removeChild(r) };
                        return t(e),
                            function(r) {
                                if (r) {
                                    if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                                    t(e = r)
                                } else n()
                            }
                    }
                    var v, m = (v = [], function(e, t) { return v[e] = t, v.filter(Boolean).join("\n") });

                    function b(e, t, n, r) {
                        var o = n ? "" : r.css;
                        if (e.styleSheet) e.styleSheet.cssText = m(t, o);
                        else {
                            var i = document.createTextNode(o),
                                s = e.childNodes;
                            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
                        }
                    }

                    function O(e, t) {
                        var n = t.css,
                            r = t.media,
                            o = t.sourceMap;
                        if (r && e.setAttribute("media", r), l.ssrId && e.setAttribute(p, t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
                        else {
                            for (; e.firstChild;) e.removeChild(e.firstChild);
                            e.appendChild(document.createTextNode(n))
                        }
                    }
                },
                306: function(e) {
                    "use strict";
                    e.exports = JSON.parse('{"name":"bber-ispeak","version":"1.4.6","description":"bber-ispeak前端展示","main":"dist/ispeak-bber.min.js","dependencies":{"@cloudbase/js-sdk":"^1.4.1","axios":"^0.21.1","marked":"^2.0.0","vue":"^2.6.12"},"devDependencies":{"@babel/cli":"^7.12.13","@babel/core":"^7.12.13","@babel/plugin-transform-modules-commonjs":"^7.12.13","@babel/plugin-transform-runtime":"^7.12.15","@babel/preset-env":"^7.12.13","@babel/runtime":"^7.12.13","@webpack-cli/serve":"^1.3.0","babel-loader":"^8.2.2","copy-webpack-plugin":"^7.0.0","cross-env":"^7.0.3","css-loader":"^3.6.0","eslint":"^7.19.0","eslint-config-standard":"^16.0.2","eslint-plugin-import":"^2.22.1","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.1.0","eslint-plugin-vue":"^7.5.0","svg-inline-loader":"^0.8.2","terser-webpack-plugin":"^5.1.1","vue-loader":"^15.9.6","vue-template-compiler":"^2.6.12","webpack":"^5.21.2","webpack-bundle-analyzer":"^4.4.0","webpack-cli":"^4.5.0","webpack-dev-server":"^4.0.0-beta.0"},"homepage":"https://blog.hiyoung.fun/bb/","scripts":{"dev":"webpack serve --mode development","serve":"webpack serve --mode development","build":"webpack --mode production","analyze":"webpack --profile --json > stats.json && webpack-bundle-analyzer stats.json","lint":"eslint src/** --ignore-path .eslintignore"},"repository":{"type":"git","url":"git+ssh://git@github.com/xue-hy/bber-ispeak.git"},"author":"hiyoung","license":"Apache-2.0","bugs":{"url":"https://github.com/xue-hy/bber-ispeak/issues"}}')
                }
            },
            t = {};

        function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { id: r, loaded: !1, exports: {} }; return e[r](o, o.exports, n), o.loaded = !0, o.exports }
        n.d = function(e, t) { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.nmd = function(e) { return e.paths = [], e.children || (e.children = []), e };
        var r = {};
        return function() {
            "use strict";
            var e = r,
                t = n(3483);
            Object.defineProperty(e, "__esModule", { value: !0 }), e.init = a, e["default"] = void 0;
            var o = t(n(6304)),
                i = t(n(7402)),
                s = n(653);

            function a(e) { return u.apply(this, arguments) }

            function u() {
                return (u = (0, i["default"])(o["default"].mark((function e(t) {
                    return o["default"].wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                (0, s.render)(t);
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var c = a;
            e["default"] = c
        }(), r
    }()
}, "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ispeakBber = t() : e.ispeakBber = t();