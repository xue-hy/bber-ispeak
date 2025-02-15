/*! For license information please see ispeak-bber-md.min.js.LICENSE.txt */
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

                    function t(e, t, n, r, i, o, s) {
                        try {
                            var u = e[o](s),
                                a = u.value
                        } catch (c) { return void n(c) }
                        u.done ? t(a) : Promise.resolve(a).then(r, i)
                    }
                    e.exports = function(e) {
                        return function() {
                            var n = this,
                                r = arguments;
                            return new Promise((function(i, o) {
                                var s = e.apply(n, r);

                                function u(e) { t(s, i, o, u, a, "next", e) }

                                function a(e) { t(s, i, o, u, a, "throw", e) }
                                u(undefined)
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

                    function i() { if ("function" != typeof WeakMap) return null; var e = new WeakMap; return i = function() { return e }, e }
                    e.exports = function(e) {
                        if (e && e.__esModule) return e;
                        if (null === e || "object" !== r(e) && "function" != typeof e) return { "default": e };
                        var t = i();
                        if (t && t.has(e)) return t.get(e);
                        var n = {},
                            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var s in e)
                            if (Object.prototype.hasOwnProperty.call(e, s)) {
                                var u = o ? Object.getOwnPropertyDescriptor(e, s) : null;
                                u && (u.get || u.set) ? Object.defineProperty(n, s, u) : n[s] = e[s]
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
                    var i = n(9206);
                    Object.keys(i).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === i[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return i[e] } })) }))
                },
                3125: function(e, t) {
                    "use strict";
                    var n;
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.AbstractStorage = t.AbstractSDKRequest = t.StorageType = void 0, t.StorageType = n,
                        function(e) { e.local = "local", e.none = "none", e.session = "session" }(n || (t.StorageType = n = {}));
                    var r = function() {};
                    t.AbstractSDKRequest = r;
                    var i = function() {};
                    t.AbstractStorage = i
                },
                9206: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.formatUrl = function(e, t, n) {
                        void 0 === n && (n = {});
                        var r = /\?/.test(t),
                            i = "";
                        for (var o in n) "" === i ? !r && (t += "?") : i += "&", i += o + "=" + encodeURIComponent(n[o]);
                        return /^http(s)?\:\/\//.test(t += i) ? t : "" + e + t
                    }
                },
                5086: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.setSdkVersion = function(e) { s = e }, t.getSdkVersion = function() { return s }, t.setSdkName = function(e) { u = e, i(e) }, t.getSdkName = function() { return u }, t.setEndPoint = l, t.setRegionLevelEndpoint = function(e, t, n) { l(t ? "//" + e + "." + t + ".tcb-api.tencentcloudapi.com/web" : "//" + e + ".ap-shanghai.tcb-api.tencentcloudapi.com/web", n) }, t.getEndPoint = function() { return { BASE_URL: f, PROTOCOL: c } }, t.LOGINTYPE = t.DATA_VERSION = void 0;
                    var r = n(1895),
                        i = r.constants.setSdkName,
                        o = r.constants.setProtocol,
                        s = "",
                        u = "@cloudbase/js-sdk";
                    t.DATA_VERSION = "2020-01-10";
                    var a, c = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:",
                        f = "//tcb-api.tencentcloudapi.com/web";

                    function l(e, t) { f = e, t && (c = t, o(t)) }
                    t.LOGINTYPE = a,
                        function(e) { e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.CUSTOM = "CUSTOM", e.NULL = "NULL" }(a || (t.LOGINTYPE = a = {}))
                },
                2701: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.EVENTS = void 0, t.EVENTS = { LOGIN_STATE_CHANGED: "loginStateChanged", LOGIN_STATE_EXPIRED: "loginStateExpire", LOGIN_TYPE_CHANGED: "loginTypeChanged", ANONYMOUS_CONVERTED: "anonymousConverted", ACCESS_TOKEN_REFRESHD: "refreshAccessToken" }
                },
                9304: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = t.cloudbase = void 0;
                    var i = r(n(3988)),
                        o = n(1895),
                        s = r(n(4934)),
                        u = n(9487),
                        a = n(1510),
                        c = n(1888),
                        f = n(3704),
                        l = n(5086),
                        p = function() {
                            return (p = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        d = function(e, t, n, r) {
                            var o, s = arguments.length,
                                u = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (u = (s < 3 ? o(u) : s > 3 ? o(t, n, u) : o(t, n)) || u);
                            return s > 3 && u && Object.defineProperty(t, n, u), u
                        },
                        h = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        y = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        g = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        v = o.adapters.useAdapters,
                        _ = o.adapters.useDefaultAdapter,
                        m = o.adapters.RUNTIME,
                        b = o.constants.ERRORS,
                        A = o.constants.COMMUNITY_SITE_URL,
                        O = o.utils.printWarn,
                        E = o.helpers.catchErrorsDecorator,
                        w = { timeout: 15e3, persistence: "local" },
                        S = 6e5,
                        D = {},
                        N = new(function() {
                            function e(e) { this._config = e || this._config, this.authInstance = null }
                            return Object.defineProperty(e.prototype, "config", { get: function() { return this._config }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "platform", { get: function() { return a.Platform }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "cache", { get: function() { return (0, c.getCacheByEnvId)(this._config.env) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "localCache", { get: function() { return (0, c.getLocalCache)(this._config.env) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "request", { get: function() { return (0, f.getRequestByEnvId)(this._config.env) }, enumerable: !1, configurable: !0 }), e.prototype.init = function(t) {
                                if (!t.env) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "env must not be specified" }));
                                if (a.Platform.adapter || this._useDefaultAdapter(), this.requestClient = new a.Platform.adapter.reqClass({ timeout: t.timeout || 5e3, timeoutMsg: "[" + (0, l.getSdkName)() + "][REQUEST TIMEOUT] request had been abort since didn't finished within" + t.timeout / 1e3 + "s" }), a.Platform.runtime !== m.WEB) { if (!t.appSecret) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "invalid appSecret" })); var n = a.Platform.adapter.getAppSign ? a.Platform.adapter.getAppSign() : ""; if (t.appSign && n && t.appSign !== n) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "invalid appSign" })); if (n && (t.appSign = n), !t.appSign) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "invalid appSign" })) }
                                this._config = p(p({}, w), t), this._config.timeout = this._formatTimeout(this._config.timeout);
                                var r = this._config,
                                    i = r.env,
                                    o = r.persistence,
                                    s = r.debug,
                                    u = r.timeout,
                                    d = r.appSecret,
                                    h = r.appSign;
                                (0, c.initCache)({ env: i, persistence: o, debug: s, platformInfo: this.platform }), (0, f.initRequest)({ env: i, region: t.region || "", timeout: u, appSecret: d, appSign: h }), t.region && (0, l.setRegionLevelEndpoint)(i, t.region || "");
                                var y = new e(this._config);
                                return y.requestClient = this.requestClient, y
                            }, e.prototype.updateConfig = function(e) {
                                var t = e.persistence,
                                    n = e.debug;
                                this._config.persistence = t, this._config.debug = n, (0, c.initCache)({ env: this._config.env, persistence: t, debug: n, platformInfo: this.platform })
                            }, e.prototype.registerExtension = function(e) { D[e.name] = e }, e.prototype.invokeExtension = function(e, t) {
                                return y(this, void 0, void 0, (function() {
                                    var n;
                                    return g(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                if (!(n = D[e])) throw new Error(JSON.stringify({ code: b.INVALID_PARAMS, msg: "extension:" + e + " must be registered before invoke" }));
                                                return [4, n.invoke(t, this)];
                                            case 1:
                                                return [2, r.sent()]
                                        }
                                    }))
                                }))
                            }, e.prototype.useAdapters = function(e) {
                                var t = v(e) || {},
                                    n = t.adapter,
                                    r = t.runtime;
                                n && (a.Platform.adapter = n), r && (a.Platform.runtime = r)
                            }, e.prototype.registerHook = function(t) {
                                (0, u.registerHook)(e, t)
                            }, e.prototype.registerComponent = function(t) {
                                (0, u.registerComponent)(e, t)
                            }, e.prototype.registerVersion = function(e) {
                                (0, l.setSdkVersion)(e)
                            }, e.prototype.registerSdkName = function(e) {
                                (0, l.setSdkName)(e)
                            }, e.prototype.registerEndPoint = function(e, t) {
                                (0, l.setEndPoint)(e, t)
                            }, e.prototype._useDefaultAdapter = function() {
                                var e = _(),
                                    t = e.adapter,
                                    n = e.runtime;
                                a.Platform.adapter = t, a.Platform.runtime = n
                            }, e.prototype._formatTimeout = function(e) {
                                switch (!0) {
                                    case e > S:
                                        return O(b.INVALID_PARAMS, "timeout is greater than maximum value[10min]"), S;
                                    case e < 100:
                                        return O(b.INVALID_PARAMS, "timeout is less than maximum value[100ms]"), 100;
                                    default:
                                        return e
                                }
                            }, d([E({ mode: "sync", title: "Cloudbase 初始化失败", messages: ["请确认以下各项：", "  1 - 调用 cloudbase.init() 的语法或参数是否正确", "  2 - 如果是非浏览器环境，是否配置了安全应用来源（https://docs.cloudbase.net/api-reference/webv2/adapter.html#jie-ru-liu-cheng）", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + A] }), h("design:type", Function), h("design:paramtypes", [Object]), h("design:returntype", e)], e.prototype, "init", null), d([E({ title: "调用扩展能力失败", messages: ["请确认以下各项：", "  1 - 调用 invokeExtension() 的语法或参数是否正确", "  2 - 被调用的扩展能力是否已经安装并通过 registerExtension() 注册", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + A] }), h("design:type", Function), h("design:paramtypes", [String, Object]), h("design:returntype", Promise)], e.prototype, "invokeExtension", null), e
                        }());
                    t.cloudbase = N, N.useAdapters(s["default"]);
                    var T = N;
                    t["default"] = T
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
                            a = { accessTokenKey: "access_token_" + t, accessTokenExpireKey: "access_token_expire_" + t, refreshTokenKey: "refresh_token_" + t, anonymousUuidKey: "anonymous_uuid_" + t, loginTypeKey: "login_type_" + t, userInfoKey: "user_info_" + t };
                        s[t] ? s[t].updatePersistence(n) : s[t] = new o(i(i({}, e), { keys: a, platformInfo: r, alwaysLocalKeys: ["anonymousUuidKey"] })), u[t] = u[t] || new o(i(i({}, e), { keys: a, platformInfo: r, persistence: "local" }))
                    }, t.getCacheByEnvId = function(e) { return s[e] }, t.getLocalCache = function(e) { return u[e] };
                    var r = n(1895),
                        i = function() {
                            return (i = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        o = r.cache.CloudbaseCache,
                        s = {},
                        u = {}
                },
                9487: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.registerComponent = function(e, t) {
                        var n = t.name,
                            r = t.namespace,
                            a = t.entity,
                            c = t.injectEvents,
                            f = t.IIFE,
                            l = void 0 !== f && f;
                        if (s[n] || r && e[r]) throw new Error(JSON.stringify({ code: o.INVALID_OPERATION, msg: "Duplicate component " + n }));
                        if (l) {
                            if (!a || "function" != typeof a) throw new Error(JSON.stringify({ code: o.INVALID_PARAMS, msg: "IIFE component's entity must be a function" }));
                            a.call(e)
                        }
                        if (s[n] = t, r ? e.prototype[r] = a : u(e.prototype, a), c) {
                            var p = c.bus,
                                d = c.events;
                            if (!p || !d || 0 === d.length) return;
                            var h = e.prototype.fire || function() {};
                            e.prototype.events || (e.prototype.events = {}), (e.prototype.events || {})[n] ? e.prototype.events[n].events = i(e.prototype.events[n].events, d) : e.prototype.events[n] = { bus: p, events: d }, e.prototype.fire = function(e, t) {
                                for (var n in h(e, t), this.events) {
                                    var r = this.events[n],
                                        i = r.bus;
                                    if (r.events.includes(e)) { i.fire(e, t); break }
                                }
                            }
                        }
                    }, t.registerHook = function(e, t) {
                        var n = t.entity,
                            r = t.target;
                        if (!e.prototype.hasOwnProperty(r)) throw new Error(JSON.stringify({ code: o.INVALID_OPERATION, msg: "target:" + r + " is not exist" }));
                        var s = e.prototype[r];
                        if ("function" != typeof s) throw new Error(JSON.stringify({ code: o.INVALID_OPERATION, msg: "target:" + r + " is not a function which is the only type supports hook" }));
                        e.prototype[r] = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return n.call.apply(n, i([this], e)), s.call.apply(s, i([this], e)) }
                    };
                    var r = n(1895),
                        i = function() {
                            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                            var r = Array(e),
                                i = 0;
                            for (t = 0; t < n; t++)
                                for (var o = arguments[t], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
                            return r
                        },
                        o = r.constants.ERRORS,
                        s = {};

                    function u(e, t) {
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
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = u(e[n], t[n]));
                        return e
                    }
                },
                3704: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.initRequest = function(e) { O[e.env] = new A(c(c({}, e), { "throw": !0 })) }, t.getRequestByEnvId = function(e) { return O[e] }, t.CloudbaseRequest = void 0;
                    var r = n(5086),
                        i = n(1895),
                        o = n(9304),
                        s = n(1888),
                        u = n(2701),
                        a = n(1510),
                        c = function() {
                            return (c = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        f = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        l = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        p = i.constants.ERRORS,
                        d = i.utils.genSeqId,
                        h = i.utils.isFormData,
                        y = i.utils.formatUrl,
                        g = i.utils.createSign,
                        v = i.adapters.RUNTIME,
                        _ = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"];

                    function m(e, t, n) {
                        var r = e[t];
                        e[t] = function(t) {
                            var i = {},
                                o = {};
                            n.forEach((function(n) {
                                var r = n.call(e, t),
                                    s = r.data,
                                    u = r.headers;
                                Object.assign(i, s), Object.assign(o, u)
                            }));
                            var s = t.data;
                            return s && function() {
                                if (h(s))
                                    for (var e in i) s.append(e, i[e]);
                                else t.data = c(c({}, s), i)
                            }(), t.headers = c(c({}, t.headers || {}), o), r.call(e, t)
                        }
                    }

                    function b() { var e = d(); return { data: { seqId: e }, headers: { "X-SDK-Version": "@cloudbase/js-sdk/" + (0, r.getSdkVersion)(), "x-seqid": e } } }
                    var A = function() {
                        function e(e) { this._throwWhenRequestFail = !1, this.config = e, this._reqClass = new a.Platform.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "[@cloudbase/js-sdk] 请求在" + this.config.timeout / 1e3 + "s内未完成，已中断", restrictedMethods: ["post"] }), this._throwWhenRequestFail = e["throw"] || !1, this._cache = (0, s.getCacheByEnvId)(this.config.env), this._localCache = (0, s.getLocalCache)(this.config.env), m(this._reqClass, "post", [b]), m(this._reqClass, "upload", [b]), m(this._reqClass, "download", [b]) }
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
                                var e, t, n, r, i, o, s, u, a;
                                return l(this, (function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return e = this._cache.keys, t = e.accessTokenKey, n = e.accessTokenExpireKey, r = e.refreshTokenKey, [4, this._cache.getStoreAsync(r)];
                                        case 1:
                                            if (!c.sent()) throw new Error(JSON.stringify({ code: p.OPERATION_FAIL, msg: "refresh token is not exist, your local data might be messed up, please retry after clear localStorage or sessionStorage" }));
                                            return [4, this._cache.getStoreAsync(t)];
                                        case 2:
                                            return i = c.sent(), s = Number, [4, this._cache.getStoreAsync(n)];
                                        case 3:
                                            return o = s.apply(void 0, [c.sent()]), u = !0, (a = this._shouldRefreshAccessTokenHook) ? [4, this._shouldRefreshAccessTokenHook(i, o)] : [3, 5];
                                        case 4:
                                            a = !c.sent(), c.label = 5;
                                        case 5:
                                            return a && (u = !1), i && o && !(o < Date.now()) || !u ? [3, 7] : [4, this.refreshAccessToken()];
                                        case 6:
                                            return [2, c.sent()];
                                        case 7:
                                            return [2, { accessToken: i, accessTokenExpire: o }]
                                    }
                                }))
                            }))
                        }, e.prototype.request = function(e, t, n) {
                            return f(this, void 0, void 0, (function() {
                                var i, o, s, u, f, p, d, h, m, b, A, O, E, w, S, D, N, T, I, B, C, x, P, k, L, R;
                                return l(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return i = "x-tcb-trace_" + this.config.env, o = "application/x-www-form-urlencoded", s = c({ action: e, dataVersion: r.DATA_VERSION, env: this.config.env }, t), -1 !== _.indexOf(e) ? [3, 3] : (u = this._cache.keys.refreshTokenKey, [4, this._cache.getStoreAsync(u)]);
                                        case 1:
                                            return l.sent() ? (f = s, [4, this.getAccessToken()]) : [3, 3];
                                        case 2:
                                            f.access_token = l.sent().accessToken, l.label = 3;
                                        case 3:
                                            if ("storage.uploadFile" === e) {
                                                for (d in p = new FormData) p.hasOwnProperty(d) && p[d] !== undefined && p.append(d, s[d]);
                                                o = "multipart/form-data"
                                            } else
                                                for (d in o = "application/json;charset=UTF-8", p = {}, s) s[d] !== undefined && (p[d] = s[d]);
                                            return h = { headers: { "content-type": o } }, (null == n ? void 0 : n.onUploadProgress) && (h.onUploadProgress = n.onUploadProgress), this.config.region && (h.headers["X-TCB-Region"] = this.config.region), (m = this._localCache.getStore(i)) && (h.headers["X-TCB-Trace"] = m), a.Platform.runtime !== v.WEB && (b = this.config, A = b.appSign, O = b.appSecret, E = Date.now(), w = O.appAccessKey, S = O.appAccessKeyId, D = g({ data: {}, timestamp: E, appAccessKeyId: S, appSign: A }, w), h.headers["X-TCB-App-Source"] = "timestamp=" + E + ";appAccessKeyId=" + S + ";appSign=" + A + ";sign=" + D), N = t.parse, T = t.inQuery, I = t.search, B = { env: this.config.env }, N && (B.parse = !0), T && (B = c(c({}, T), B)), C = (0, r.getEndPoint)(), x = C.BASE_URL, P = C.PROTOCOL, k = y(P, x, B), I && (k += I), [4, this.post(c({ url: k, data: p }, h))];
                                        case 4:
                                            if (L = l.sent(), (R = L.header && L.header["x-tcb-trace"]) && this._localCache.setStore(i, R), 200 !== Number(L.status) && 200 !== Number(L.statusCode) || !L.data) throw new Error("network request error");
                                            return [2, L]
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
                                            return "ACCESS_TOKEN_EXPIRED" !== (n = r.sent()).data.code || -1 !== _.indexOf(e) ? [3, 4] : [4, this.refreshAccessToken()];
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
                                var t, n, i, s, a, c, f, d, h, y, g, v, _;
                                return l(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return t = this._cache.keys, n = t.accessTokenKey, i = t.accessTokenExpireKey, s = t.refreshTokenKey, a = t.loginTypeKey, c = t.anonymousUuidKey, [4, this._cache.removeStoreAsync(n)];
                                        case 1:
                                            return l.sent(), [4, this._cache.removeStoreAsync(i)];
                                        case 2:
                                            return l.sent(), [4, this._cache.getStoreAsync(s)];
                                        case 3:
                                            if (!(f = l.sent())) throw new Error(JSON.stringify({ code: p.INVALID_OPERATION, msg: "not login" }));
                                            return d = { refresh_token: f }, [4, this.request("auth.fetchAccessTokenWithRefreshToken", d)];
                                        case 4:
                                            return (h = l.sent()).data.code ? "SIGN_PARAM_INVALID" !== (y = h.data.code) && "REFRESH_TOKEN_EXPIRED" !== y && "INVALID_REFRESH_TOKEN" !== y ? [3, 11] : [4, this._cache.getStoreAsync(a)] : [3, 12];
                                        case 5:
                                            return l.sent() === r.LOGINTYPE.ANONYMOUS && "INVALID_REFRESH_TOKEN" === y ? [4, this._cache.getStoreAsync(c)] : [3, 9];
                                        case 6:
                                            return g = l.sent(), [4, this._cache.getStoreAsync(s)];
                                        case 7:
                                            return v = l.sent(), [4, this.send("auth.signInAnonymously", { anonymous_uuid: g, refresh_token: v })];
                                        case 8:
                                            if (_ = l.sent(), this._setRefreshToken(_.refresh_token), e >= 1) return [2, this._refreshAccessToken(--e)];
                                            throw new Error(JSON.stringify({ code: p.OPERATION_FAIL, message: "重试获取 refresh token 失败" }));
                                        case 9:
                                            return o.cloudbase.fire(u.EVENTS.LOGIN_STATE_EXPIRED), [4, this._cache.removeStoreAsync(s)];
                                        case 10:
                                            l.sent(), l.label = 11;
                                        case 11:
                                            throw new Error(JSON.stringify({ code: p.NETWORK_ERROR, msg: "refresh access_token failed：" + h.data.code }));
                                        case 12:
                                            return h.data.access_token ? (o.cloudbase.fire(u.EVENTS.ACCESS_TOKEN_REFRESHD), [4, this._cache.setStoreAsync(n, h.data.access_token)]) : [3, 15];
                                        case 13:
                                            return l.sent(), [4, this._cache.setStoreAsync(i, h.data.access_token_expire + Date.now())];
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
                                var t, n, r, i;
                                return l(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, i = t.refreshTokenKey, [4, this._cache.removeStoreAsync(n)];
                                        case 1:
                                            return o.sent(), [4, this._cache.removeStoreAsync(r)];
                                        case 2:
                                            return o.sent(), [4, this._cache.setStoreAsync(i, e)];
                                        case 3:
                                            return o.sent(), [2]
                                    }
                                }))
                            }))
                        }, e
                    }();
                    t.CloudbaseRequest = A;
                    var O = {}
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
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.registerAuth = function(e) { try { e.registerComponent(x) } catch (t) { console.warn(t) } }, t.registerProvider = function(e, t) { B.prototype[e] = function(n) { var r = "_" + e; return this[r] || (this[r] = new t(h(h({}, n), this._config))), this[r] } }, Object.defineProperty(t, "AuthProvider", { enumerable: !0, get: function() { return f.AuthProvider } }), t.eventBus = t.EVENTS = t.Auth = t.LoginState = void 0;
                    var i = r(n(3988)),
                        o = n(1895),
                        s = n(9368),
                        u = n(1424),
                        a = n(8432),
                        c = n(627),
                        f = n(2251),
                        l = n(2360),
                        p = n(5518),
                        d = n(4718),
                        h = function() {
                            return (h = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        y = function(e, t, n, r) {
                            var o, s = arguments.length,
                                u = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (u = (s < 3 ? o(u) : s > 3 ? o(t, n, u) : o(t, n)) || u);
                            return s > 3 && u && Object.defineProperty(t, n, u), u
                        },
                        g = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, i["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        v = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        _ = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        m = o.events.CloudbaseEventEmitter,
                        b = o.adapters.RUNTIME,
                        A = o.utils.printWarn,
                        O = o.utils.throwError,
                        E = o.utils.transformPhone,
                        w = o.constants.ERRORS,
                        S = o.constants.COMMUNITY_SITE_URL,
                        D = o.helpers.catchErrorsDecorator,
                        N = new m;
                    t.eventBus = N;
                    var T = function() {
                            function e(e) {
                                var t = e.cache,
                                    n = e.request;
                                this._cache = t, this._request = n, this._setUserInfo()
                            }
                            return e.prototype.checkLocalInfo = function() { return v(this, void 0, void 0, (function() { return _(this, (function(e) { return this.uid = this._getLocalUserInfo("uid"), this.loginType = this._getLocalUserInfo("loginType"), this.openid = this._getLocalUserInfo("wxOpenId"), this.wxOpenId = this._getLocalUserInfo("wxOpenId"), this.wxPublicId = this._getLocalUserInfo("wxPublicId"), this.unionId = this._getLocalUserInfo("wxUnionId"), this.qqMiniOpenId = this._getLocalUserInfo("qqMiniOpenId"), this.customUserId = this._getLocalUserInfo("customUserId"), this.nickName = this._getLocalUserInfo("nickName"), this.gender = this._getLocalUserInfo("gender"), this.avatarUrl = this._getLocalUserInfo("avatarUrl"), this.email = this._getLocalUserInfo("email"), this.hasPassword = Boolean(this._getLocalUserInfo("hasPassword")), this.phone = this._getLocalUserInfo("phone"), this.username = this._getLocalUserInfo("username"), this.location = { country: this._getLocalUserInfo("country"), province: this._getLocalUserInfo("province"), city: this._getLocalUserInfo("city") }, [2] })) })) }, e.prototype.checkLocalInfoAsync = function() {
                                return v(this, void 0, void 0, (function() {
                                    var e, t, n, r, i, o, s, u, a, c, f, l, p, d, h, y, g, v;
                                    return _(this, (function(_) {
                                        switch (_.label) {
                                            case 0:
                                                return e = this, [4, this._getLocalUserInfoAsync("uid")];
                                            case 1:
                                                return e.uid = _.sent(), t = this, [4, this._getLocalUserInfoAsync("loginType")];
                                            case 2:
                                                return t.loginType = _.sent(), n = this, [4, this._getLocalUserInfoAsync("wxOpenId")];
                                            case 3:
                                                return n.openid = _.sent(), r = this, [4, this._getLocalUserInfoAsync("wxOpenId")];
                                            case 4:
                                                return r.wxOpenId = _.sent(), i = this, [4, this._getLocalUserInfoAsync("wxPublicId")];
                                            case 5:
                                                return i.wxPublicId = _.sent(), o = this, [4, this._getLocalUserInfoAsync("wxUnionId")];
                                            case 6:
                                                return o.unionId = _.sent(), s = this, [4, this._getLocalUserInfoAsync("qqMiniOpenId")];
                                            case 7:
                                                return s.qqMiniOpenId = _.sent(), u = this, [4, this._getLocalUserInfoAsync("customUserId")];
                                            case 8:
                                                return u.customUserId = _.sent(), a = this, [4, this._getLocalUserInfoAsync("nickName")];
                                            case 9:
                                                return a.nickName = _.sent(), c = this, [4, this._getLocalUserInfoAsync("gender")];
                                            case 10:
                                                return c.gender = _.sent(), f = this, [4, this._getLocalUserInfoAsync("avatarUrl")];
                                            case 11:
                                                return f.avatarUrl = _.sent(), l = this, [4, this._getLocalUserInfoAsync("email")];
                                            case 12:
                                                return l.email = _.sent(), p = this, d = Boolean, [4, this._getLocalUserInfoAsync("hasPassword")];
                                            case 13:
                                                return p.hasPassword = d.apply(void 0, [_.sent()]), h = this, [4, this._getLocalUserInfoAsync("phone")];
                                            case 14:
                                                return h.phone = _.sent(), y = this, [4, this._getLocalUserInfoAsync("username")];
                                            case 15:
                                                return y.username = _.sent(), g = this, v = {}, [4, this._getLocalUserInfoAsync("country")];
                                            case 16:
                                                return v.country = _.sent(), [4, this._getLocalUserInfoAsync("province")];
                                            case 17:
                                                return v.province = _.sent(), [4, this._getLocalUserInfoAsync("city")];
                                            case 18:
                                                return g.location = (v.city = _.sent(), v), [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.linkWithTicket = function(e) { if ("string" != typeof e) throw new Error("ticket must be string"); return this._request.send("auth.linkWithTicket", { ticket: e }) }, e.prototype.linkWithRedirect = function(e) { e.signInWithRedirect() }, e.prototype.getLinkedUidList = function() {
                                return v(this, void 0, void 0, (function() {
                                    var e, t, n, r, i, o;
                                    return _(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return [4, this._request.send("auth.getLinkedUidList", {})];
                                            case 1:
                                                for (e = s.sent().data, t = !1, n = e.users, r = 0, i = n; r < i.length; r++)
                                                    if ((o = i[r]).wxOpenId && o.wxPublicId) { t = !0; break }
                                                return [2, { users: n, hasPrimaryUid: t }]
                                        }
                                    }))
                                }))
                            }, e.prototype.setPrimaryUid = function(e) { return this._request.send("auth.setPrimaryUid", { uid: e }) }, e.prototype.unlink = function(e) { return this._request.send("auth.unlink", { platform: e }) }, e.prototype.update = function(e) {
                                return v(this, void 0, void 0, (function() {
                                    var t, n, r, i, o, s, u;
                                    return _(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return t = e.nickName, n = e.gender, r = e.avatarUrl, i = e.province, o = e.country, s = e.city, [4, this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: r, province: i, country: o, city: s })];
                                            case 1:
                                                return u = a.sent().data, this._setLocalUserInfo(u), [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.updatePassword = function(e, t) { return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e }) }, e.prototype.updateEmail = function(e, t) { return this._request.send("auth.updateEmail", { newEmail: e, password: t }) }, e.prototype.updateUsername = function(e) { return "string" != typeof e && O(w.INVALID_PARAMS, "username must be a string"), this._request.send("auth.updateUsername", { username: e }) }, e.prototype.refresh = function() {
                                return v(this, void 0, void 0, (function() {
                                    var e;
                                    return _(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, this._request.send("auth.getUserInfo", {})];
                                            case 1:
                                                return e = t.sent().data, this._setLocalUserInfo(e), [2, e]
                                        }
                                    }))
                                }))
                            }, e.prototype.linkWithPhoneNumber = function(e, t) { return v(this, void 0, void 0, (function() { return _(this, (function(n) { return [2, this._request.send("auth.linkOrUpdatePhoneNumber", { phoneNumber: E(e), phoneCode: t })] })) })) }, e.prototype.updatePhoneNumber = function(e, t) { return v(this, void 0, void 0, (function() { return _(this, (function(n) { return [2, this._request.send("auth.linkOrUpdatePhoneNumber", { phoneNumber: E(e), phoneCode: t })] })) })) }, e.prototype._getLocalUserInfo = function(e) { var t = this._cache.keys.userInfoKey; return this._cache.getStore(t)[e] }, e.prototype._getLocalUserInfoAsync = function(e) {
                                return v(this, void 0, void 0, (function() {
                                    var t;
                                    return _(this, (function(n) {
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
                            }, y([D({ title: "绑定自定义登录失败", messages: ["请确认以下各项：", "  1 - 调用 User.linkWithTicket() 的语法或参数是否正确", "  2 - 此账户是否已经绑定自定义登录", "  3 - ticket 参数是否归属当前环境", "  4 - 创建 ticket 的自定义登录私钥是否过期", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", Promise)], e.prototype, "linkWithTicket", null), y([D({ title: "绑定第三方登录方式失败", messages: ["请确认以下各项：", "  1 - 调用 User.linkWithRedirect() 的语法或参数是否正确", "  2 - 此账户是否已经绑定此第三方", "  3 - 此第三方是否已经授权", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [Object]), g("design:returntype", void 0)], e.prototype, "linkWithRedirect", null), y([D({ title: "获取账户列表失败", messages: ["请确认以下各项：", "  1 - 调用 User.getLinkedUidList() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "getLinkedUidList", null), y([D({ title: "设置微信主账号失败", messages: ["请确认以下各项：", "  1 - 调用 User.setPrimaryUid() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", void 0)], e.prototype, "setPrimaryUid", null), y([D({ title: "接触绑定失败", messages: ["请确认以下各项：", "  1 - 调用 User.unlink() 的语法或参数是否正确", "  2 - 当前账户是否已经与此登录方式解绑", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", void 0)], e.prototype, "unlink", null), y([D({ title: "更新用户信息失败", messages: ["请确认以下各项：", "  1 - 调用 User.update() 的语法或参数是否正确", "  2 - 用户信息中是否包含非法值", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [Object]), g("design:returntype", Promise)], e.prototype, "update", null), y([D({ title: "更新密码失败", messages: ["请确认以下各项：", "  1 - 调用 User.updatePassword() 的语法或参数是否正确", "  3 - 新密码中是否包含非法字符", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String, String]), g("design:returntype", void 0)], e.prototype, "updatePassword", null), y([D({ title: "更新邮箱地址失败", messages: ["请确认以下各项：", "  1 - 调用 User.updateEmail() 的语法或参数是否正确", "  2 - 当前环境是否开通了邮箱密码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String, String]), g("design:returntype", void 0)], e.prototype, "updateEmail", null), y([D({ title: "更新用户名失败", messages: ["请确认以下各项：", "  1 - 调用 User.updateUsername() 的语法或参数是否正确", "  2 - 当前环境是否开通了用户名密码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", void 0)], e.prototype, "updateUsername", null), y([D({ title: "刷新本地用户信息失败", messages: ["请确认以下各项：", "  1 - 调用 User.refresh() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "refresh", null), y([D({ title: "绑定手机号失败", messages: ["请确认以下各项：", "  1 - 调用 auth().linkWithPhoneNumber() 的语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String, String]), g("design:returntype", Promise)], e.prototype, "linkWithPhoneNumber", null), y([D({ title: "更新手机号失败", messages: ["请确认以下各项：", "  1 - 调用语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String, String]), g("design:returntype", Promise)], e.prototype, "updatePhoneNumber", null), e
                        }(),
                        I = function() {
                            function e(e) {
                                var t = e.envId,
                                    n = e.cache,
                                    r = e.request;
                                t || O(w.INVALID_PARAMS, "envId is not defined"), this._cache = n, this.user = new T({ cache: n, request: r })
                            }
                            return e.prototype.checkLocalState = function() { return v(this, void 0, void 0, (function() { var e, t, n, r, i, o, s; return _(this, (function(u) { return e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, r = e.accessTokenExpireKey, i = this._cache.getStore(t), o = this._cache.getStore(n), s = this._cache.getStore(r), this.credential = { refreshToken: i, accessToken: o, accessTokenExpire: s }, this._loginType = this._cache.getStore(this._cache.keys.loginTypeKey), this.user.checkLocalInfo(), [2] })) })) }, e.prototype.checkLocalStateAsync = function() {
                                return v(this, void 0, void 0, (function() {
                                    var e, t, n, r, i, o, s, u;
                                    return _(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, r = e.accessTokenExpireKey, [4, this._cache.getStoreAsync(t)];
                                            case 1:
                                                return i = a.sent(), [4, this._cache.getStoreAsync(n)];
                                            case 2:
                                                return o = a.sent(), [4, this._cache.getStoreAsync(r)];
                                            case 3:
                                                return s = a.sent(), this.credential = { refreshToken: i, accessToken: o, accessTokenExpire: s }, u = this, [4, this._cache.getStoreAsync(this._cache.keys.loginTypeKey)];
                                            case 4:
                                                return u._loginType = a.sent(), [4, this.user.checkLocalInfoAsync()];
                                            case 5:
                                                return a.sent(), [2]
                                        }
                                    }))
                                }))
                            }, Object.defineProperty(e.prototype, "isAnonymousAuth", { get: function() { return this.loginType === c.LOGINTYPE.ANONYMOUS }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isCustomAuth", { get: function() { return this.loginType === c.LOGINTYPE.CUSTOM }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isWeixinAuth", { get: function() { return this.loginType === c.LOGINTYPE.WECHAT || this.loginType === c.LOGINTYPE.WECHAT_OPEN || this.loginType === c.LOGINTYPE.WECHAT_PUBLIC }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isUsernameAuth", { get: function() { return this.loginType === c.LOGINTYPE.USERNAME }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "loginType", { get: function() { return this._loginType }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "isPhoneAuth", { get: function() { return this.loginType === c.LOGINTYPE.PHONE }, enumerable: !1, configurable: !0 }), e
                        }();
                    t.LoginState = I;
                    var B = function() {
                        function e(e) { this._config = e, this._cache = e.cache, this._request = e.request, this._runtime = e.runtime || b.WEB, N.on(C.LOGIN_TYPE_CHANGED, this._onLoginTypeChanged.bind(this)) }
                        return Object.defineProperty(e.prototype, "currentUser", {
                            get: function() {
                                if ("async" !== this._cache.mode) { var e = this.hasLoginState(); return e && e.user || null }
                                A(w.INVALID_OPERATION, "current platform's storage is asynchronous, please use getCurrenUser insteed")
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "loginType", { get: function() { return this._cache.getStore(this._cache.keys.loginTypeKey) }, enumerable: !1, configurable: !0 }), e.prototype.getCurrenUser = function() {
                            return v(this, void 0, void 0, (function() {
                                var e;
                                return _(this, (function(t) {
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
                            return v(this, void 0, void 0, (function() {
                                return _(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this._cache.getStoreAsync(this._cache.keys.loginTypeKey)];
                                        case 1:
                                            return [2, e.sent()]
                                    }
                                }))
                            }))
                        }, e.prototype.getAccessToken = function() {
                            return v(this, void 0, void 0, (function() {
                                var e;
                                return _(this, (function(t) {
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
                        }, e.prototype.anonymousAuthProvider = function() { return this._anonymousAuthProvider || (this._anonymousAuthProvider = new u.AnonymousAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._anonymousAuthProvider }, e.prototype.customAuthProvider = function() { return this._customAuthProvider || (this._customAuthProvider = new a.CustomAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._customAuthProvider }, e.prototype.emailAuthProvider = function() { return this._emailAuthProvider || (this._emailAuthProvider = new l.EmailAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._emailAuthProvider }, e.prototype.usernameAuthProvider = function() { return this._usernameAuthProvider || (this._usernameAuthProvider = new p.UsernameAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._usernameAuthProvider }, e.prototype.phoneAuthProvider = function() { return this._phoneAuthProvider || (this._phoneAuthProvider = new d.PhoneAuthProvider(h(h({}, this._config), { cache: this._cache, request: this._request }))), this._phoneAuthProvider }, e.prototype.signInWithUsernameAndPassword = function(e, t) { return v(this, void 0, void 0, (function() { return _(this, (function(n) { return [2, this.usernameAuthProvider().signIn(e, t)] })) })) }, e.prototype.isUsernameRegistered = function(e) {
                            return v(this, void 0, void 0, (function() {
                                var t;
                                return _(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return "string" != typeof e && O(w.INVALID_PARAMS, "username must be a string"), [4, this._request.send("auth.isUsernameRegistered", { username: e })];
                                        case 1:
                                            return [2, null == (t = n.sent().data) ? void 0 : t.isRegistered]
                                    }
                                }))
                            }))
                        }, e.prototype.signInWithEmailAndPassword = function(e, t) { return v(this, void 0, void 0, (function() { return _(this, (function(n) { return [2, this.emailAuthProvider().signIn(e, t)] })) })) }, e.prototype.signUpWithEmailAndPassword = function(e, t) { return v(this, void 0, void 0, (function() { return _(this, (function(n) { return [2, this.emailAuthProvider().signUp(e, t)] })) })) }, e.prototype.sendPasswordResetEmail = function(e) { return v(this, void 0, void 0, (function() { return _(this, (function(t) { return [2, this.emailAuthProvider().resetPassword(e)] })) })) }, e.prototype.signOut = function() {
                            return v(this, void 0, void 0, (function() {
                                var e, t, n, r, i, o, s;
                                return _(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, r = e.accessTokenExpireKey, i = "auth.logout", [4, this._cache.getStoreAsync(t)];
                                        case 1:
                                            return (o = u.sent()) ? [4, this._request.send(i, { refresh_token: o })] : [2];
                                        case 2:
                                            return s = u.sent(), this._cache.removeStoreAsync(t), this._cache.removeStoreAsync(n), this._cache.removeStoreAsync(r), N.fire(C.LOGIN_STATE_CHANGED), N.fire(C.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: c.LOGINTYPE.NULL, persistence: this._config.persistence }), [2, s]
                                    }
                                }))
                            }))
                        }, e.prototype.onLoginStateChanged = function(e) {
                            return v(this, void 0, void 0, (function() {
                                var t, n = this;
                                return _(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return N.on(C.LOGIN_STATE_CHANGED, (function() {
                                                return v(n, void 0, void 0, (function() {
                                                    var t;
                                                    return _(this, (function(n) {
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
                        }, e.prototype.onLoginStateExpired = function(e) { N.on(C.LOGIN_STATE_EXPIRED, e.bind(this)) }, e.prototype.onAccessTokenRefreshed = function(e) { N.on(C.ACCESS_TOKEN_REFRESHD, e.bind(this)) }, e.prototype.onAnonymousConverted = function(e) { N.on(C.ANONYMOUS_CONVERTED, e.bind(this)) }, e.prototype.onLoginTypeChanged = function(e) {
                            var t = this;
                            N.on(C.LOGIN_TYPE_CHANGED, (function() {
                                return v(t, void 0, void 0, (function() {
                                    var t;
                                    return _(this, (function(n) {
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
                            if ("async" !== this._cache.mode) { var e = this._cache.keys.refreshTokenKey; if (this._cache.getStore(e)) { var t = new I({ envId: this._config.env, cache: this._cache, request: this._request }); return t.checkLocalState(), t } return null }
                            A(w.INVALID_OPERATION, "current platform's storage is asynchronous, please use getLoginState insteed")
                        }, e.prototype.getLoginState = function() {
                            return v(this, void 0, void 0, (function() {
                                var e, t;
                                return _(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e = this._cache.keys.refreshTokenKey, [4, this._cache.getStoreAsync(e)];
                                        case 1:
                                            return n.sent() ? [4, (t = new I({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()] : [3, 3];
                                        case 2:
                                            return n.sent(), [2, t];
                                        case 3:
                                            return [2, null]
                                    }
                                }))
                            }))
                        }, e.prototype.shouldRefreshAccessToken = function(e) { this._request._shouldRefreshAccessTokenHook = e.bind(this) }, e.prototype.getUserInfo = function() {
                            return v(this, void 0, void 0, (function() {
                                var e;
                                return _(this, (function(t) {
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
                            return v(this, void 0, void 0, (function() {
                                var e, t, n, r;
                                return _(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, this._request.refreshAccessToken()];
                                        case 1:
                                            return i.sent(), e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, [4, this._cache.getStoreAsync(t)];
                                        case 2:
                                            return r = i.sent(), [4, this._cache.getStoreAsync(n)];
                                        case 3:
                                            return [2, { "x-cloudbase-credentials": i.sent() + "/@@/" + r }]
                                    }
                                }))
                            }))
                        }, e.prototype.sendPhoneCode = function(e) {
                            return v(this, void 0, void 0, (function() {
                                return _(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this._request.send("auth.sendPhoneCode", { phoneNumber: E(e) })];
                                        case 1:
                                            return [2, "Ok" === t.sent().data.SendStatus]
                                    }
                                }))
                            }))
                        }, e.prototype.signUpWithPhoneCode = function(e, t, n) { return v(this, void 0, void 0, (function() { return _(this, (function(r) { return [2, this.phoneAuthProvider().signUp(e, t, n)] })) })) }, e.prototype.signInWithPhoneCodeOrPassword = function(e) { return v(this, void 0, void 0, (function() { return _(this, (function(t) { return [2, this.phoneAuthProvider().signIn(e)] })) })) }, e.prototype.forceResetPwdByPhoneCode = function(e) { return v(this, void 0, void 0, (function() { return _(this, (function(t) { return [2, this.phoneAuthProvider().signIn(h(h({}, e), { signMethod: d.SIGN_METHOD.FORCERESETPWD }))] })) })) }, e.prototype._onLoginTypeChanged = function(e) {
                            return v(this, void 0, void 0, (function() {
                                var t, n, r;
                                return _(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return t = e.data, n = t.loginType, r = t.persistence, t.env !== this._config.env ? [2] : [4, this._cache.updatePersistenceAsync(r)];
                                        case 1:
                                            return i.sent(), [4, this._cache.setStoreAsync(this._cache.keys.loginTypeKey, n)];
                                        case 2:
                                            return i.sent(), [2]
                                    }
                                }))
                            }))
                        }, y([D({ title: "获取用户信息失败", messages: ["请确认以下各项：", "  1 - 调用 auth().getCurrenUser() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "getCurrenUser", null), y([D({ title: "获取用户是否被占用失败", messages: ["请确认以下各项：", "  1 - 调用 auth().isUsernameRegistered() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", Promise)], e.prototype, "isUsernameRegistered", null), y([D({ title: "用户登出失败", messages: ["请确认以下各项：", "  1 - 调用 auth().signOut() 的语法或参数是否正确", "  2 - 当前用户是否为匿名登录（匿名登录不支持signOut）", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "signOut", null), y([D({ title: "获取本地登录态失败", messages: ["请确认以下各项：", "  1 - 调用 auth().getLoginState() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "getLoginState", null), y([D({ title: "获取用户信息失败", messages: ["请确认以下各项：", "  1 - 是否已登录", "  2 - 调用 auth().getUserInfo() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", []), g("design:returntype", Promise)], e.prototype, "getUserInfo", null), y([D({ title: "发送短信验证码失败", messages: ["请确认以下各项：", "  1 - 调用语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + S] }), g("design:type", Function), g("design:paramtypes", [String]), g("design:returntype", Promise)], e.prototype, "sendPhoneCode", null), e
                    }();
                    t.Auth = B;
                    var C = { LOGIN_STATE_CHANGED: "loginStateChanged", LOGIN_STATE_EXPIRED: "loginStateExpire", LOGIN_TYPE_CHANGED: "loginTypeChanged", ANONYMOUS_CONVERTED: "anonymousConverted", ACCESS_TOKEN_REFRESHD: "refreshAccessToken" };
                    t.EVENTS = C;
                    var x = {
                        name: "auth",
                        namespace: "auth",
                        injectEvents: { bus: N, events: [C.LOGIN_TYPE_CHANGED, C.LOGIN_STATE_EXPIRED, C.LOGIN_STATE_CHANGED, C.ACCESS_TOKEN_REFRESHD, C.ANONYMOUS_CONVERTED] },
                        entity: function(e) {
                            if (void 0 === e && (e = { region: "", persistence: "local" }), this.authInstance) return A(w.INVALID_OPERATION, "every cloudbase instance should has only one auth object"), this.authInstance;
                            var t = this.platform,
                                n = t.adapter,
                                r = t.runtime,
                                i = e.persistence || n.primaryStorage;
                            i && i !== this.config.persistence && this.updateConfig({ persistence: i });
                            var o = this.config,
                                s = o.env,
                                u = o.persistence,
                                a = o.debug;
                            return this.authInstance = new B({ env: s, region: e.region, persistence: u, debug: a, cache: this.cache, request: this.request, runtime: r }), this.authInstance
                        }
                    };
                    try { cloudbase.registerComponent(x) } catch (P) {}
                },
                1424: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.AnonymousAuthProvider = void 0;
                    var i, o = r(n(3988)),
                        s = n(2251),
                        u = n(1895),
                        a = n(627),
                        c = n(2198),
                        f = (i = function(e, t) {
                            return (i = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var i, s = arguments.length,
                                u = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (u = (s < 3 ? i(u) : s > 3 ? i(t, n, u) : i(t, n)) || u);
                            return s > 3 && u && Object.defineProperty(t, n, u), u
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        y = u.constants.ERRORS,
                        g = u.constants.COMMUNITY_SITE_URL,
                        v = u.utils.throwError,
                        _ = u.utils.isString,
                        m = u.events.addEventListener,
                        b = u.helpers.catchErrorsDecorator,
                        A = function(e) {
                            function t(t) { var n = e.call(this, t) || this; return n._onConverted = n._onConverted.bind(n), m(c.EVENTS.ANONYMOUS_CONVERTED, n._onConverted), n }
                            return f(t, e), t.prototype.signIn = function() {
                                return d(this, void 0, void 0, (function() {
                                    var e, t, n, r, i, o, s;
                                    return h(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return [4, this._cache.updatePersistenceAsync("local")];
                                            case 1:
                                                return u.sent(), e = this._cache.keys, t = e.anonymousUuidKey, n = e.refreshTokenKey, [4, this._cache.getStoreAsync(t)];
                                            case 2:
                                                return r = u.sent(), [4, this._cache.getStoreAsync(n)];
                                            case 3:
                                                return i = u.sent(), [4, this._request.send("auth.signInAnonymously", { anonymous_uuid: r, refresh_token: i })];
                                            case 4:
                                                return (o = u.sent()).uuid && o.refresh_token ? [4, this._setAnonymousUUID(o.uuid)] : [3, 10];
                                            case 5:
                                                return u.sent(), [4, this.setRefreshToken(o.refresh_token)];
                                            case 6:
                                                return u.sent(), [4, this._request.refreshAccessToken()];
                                            case 7:
                                                return u.sent(), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: a.LOGINTYPE.ANONYMOUS, persistence: "local" }), c.eventBus.fire(c.EVENTS.LOGIN_STATE_CHANGED), [4, (s = new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()];
                                            case 8:
                                                return u.sent(), [4, s.user.refresh()];
                                            case 9:
                                                return u.sent(), [2, s];
                                            case 10:
                                                throw new Error(JSON.stringify({ code: y.OPERATION_FAIL, msg: JSON.stringify(o) || "anonymous signIn failed" }))
                                        }
                                    }))
                                }))
                            }, t.prototype.linkAndRetrieveDataWithTicket = function(e) {
                                return d(this, void 0, void 0, (function() {
                                    var t, n, r, i, o, s, u;
                                    return h(this, (function(f) {
                                        switch (f.label) {
                                            case 0:
                                                return _(e) || v(y.INVALID_PARAMS, "ticket must be a string"), t = this._cache.keys, n = t.anonymousUuidKey, r = t.refreshTokenKey, [4, this._cache.getStoreAsync(n)];
                                            case 1:
                                                return i = f.sent(), [4, this._cache.getStoreAsync(r)];
                                            case 2:
                                                return o = f.sent(), [4, this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: i, refresh_token: o, ticket: e })];
                                            case 3:
                                                return (s = f.sent()).refresh_token ? [4, this._clearAnonymousUUID()] : [3, 8];
                                            case 4:
                                                return f.sent(), [4, this.setRefreshToken(s.refresh_token)];
                                            case 5:
                                                return f.sent(), [4, this._request.refreshAccessToken()];
                                            case 6:
                                                return f.sent(), c.eventBus.fire(c.EVENTS.ANONYMOUS_CONVERTED, { env: this._config.env }), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { loginType: a.LOGINTYPE.CUSTOM, persistence: "local" }), [4, (u = new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()];
                                            case 7:
                                                return f.sent(), [2, u];
                                            case 8:
                                                v(y.OPERATION_FAIL, JSON.stringify(s) || "linkAndRetrieveDataWithTicket failed"), f.label = 9;
                                            case 9:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, t.prototype._setAnonymousUUID = function(e) {
                                return d(this, void 0, void 0, (function() {
                                    var t, n, r;
                                    return h(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return t = this._cache.keys, n = t.anonymousUuidKey, r = t.loginTypeKey, [4, this._cache.removeStoreAsync(n)];
                                            case 1:
                                                return i.sent(), [4, this._cache.setStoreAsync(n, e)];
                                            case 2:
                                                return i.sent(), [4, this._cache.setStoreAsync(r, a.LOGINTYPE.ANONYMOUS)];
                                            case 3:
                                                return i.sent(), [2]
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
                    t.AnonymousAuthProvider = A
                },
                2251: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.AuthProvider = void 0;
                    var r = n(2198),
                        i = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        o = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        s = function() {
                            function e(e) { this._config = e, this._cache = e.cache, this._request = e.request }
                            return e.prototype.checkLocalLoginState = function() {
                                return i(this, void 0, void 0, (function() {
                                    var e, t, n, i, s, u;
                                    return o(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return e = this._cache.keys, t = e.accessTokenKey, n = e.accessTokenExpireKey, [4, this._cache.getStoreAsync(t)];
                                            case 1:
                                                return i = o.sent(), [4, this._cache.getStoreAsync(n)];
                                            case 2:
                                                return s = o.sent(), i ? s && s > Date.now() ? [4, (u = new r.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()] : [3, 4] : [3, 7];
                                            case 3:
                                                return o.sent(), [2, u];
                                            case 4:
                                                return [4, this._cache.removeStoreAsync(t)];
                                            case 5:
                                                return o.sent(), [4, this._cache.removeStoreAsync(n)];
                                            case 6:
                                                o.sent(), o.label = 7;
                                            case 7:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.setRefreshToken = function(e) {
                                return i(this, void 0, void 0, (function() {
                                    var t, n, r, i;
                                    return o(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, i = t.refreshTokenKey, [4, this._cache.removeStoreAsync(n)];
                                            case 1:
                                                return o.sent(), [4, this._cache.removeStoreAsync(r)];
                                            case 2:
                                                return o.sent(), [4, this._cache.setStoreAsync(i, e)];
                                            case 3:
                                                return o.sent(), [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.setAccessToken = function(e, t) {
                                return i(this, void 0, void 0, (function() {
                                    var n, r, i;
                                    return o(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return n = this._cache.keys, r = n.accessTokenKey, i = n.accessTokenExpireKey, [4, this._cache.setStoreAsync(r, e)];
                                            case 1:
                                                return o.sent(), [4, this._cache.setStoreAsync(i, t)];
                                            case 2:
                                                return o.sent(), [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.refreshUserInfo = function() {
                                return i(this, void 0, void 0, (function() {
                                    var e;
                                    return o(this, (function(t) {
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
                                return i(this, void 0, void 0, (function() {
                                    var t;
                                    return o(this, (function(n) {
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
                    var i, o = r(n(3988)),
                        s = n(1895),
                        u = n(2251),
                        a = n(627),
                        c = n(2198),
                        f = (i = function(e, t) {
                            return (i = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var i, s = arguments.length,
                                u = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (u = (s < 3 ? i(u) : s > 3 ? i(t, n, u) : i(t, n)) || u);
                            return s > 3 && u && Object.defineProperty(t, n, u), u
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        y = s.constants.ERRORS,
                        g = s.constants.COMMUNITY_SITE_URL,
                        v = s.utils.isString,
                        _ = s.helpers.catchErrorsDecorator,
                        m = function(e) {
                            function t() { return null !== e && e.apply(this, arguments) || this }
                            return f(t, e), t.prototype.signIn = function(e) {
                                return d(this, void 0, void 0, (function() {
                                    var t, n, r, i, o, s, u;
                                    return h(this, (function(f) {
                                        switch (f.label) {
                                            case 0:
                                                if (!v(e)) throw new Error(JSON.stringify({ code: y.INVALID_PARAMS, msg: "ticket must be a string" }));
                                                return t = this._cache.keys.refreshTokenKey, i = (r = this._request).send, o = ["auth.signInWithTicket"], s = { ticket: e }, [4, this._cache.getStoreAsync(t)];
                                            case 1:
                                                return [4, i.apply(r, o.concat([(s.refresh_token = f.sent() || "", s)]))];
                                            case 2:
                                                return (n = f.sent()).refresh_token ? [4, this.setRefreshToken(n.refresh_token)] : [3, 7];
                                            case 3:
                                                return f.sent(), [4, this._request.refreshAccessToken()];
                                            case 4:
                                                return f.sent(), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: a.LOGINTYPE.CUSTOM, persistence: this._config.persistence }), c.eventBus.fire(c.EVENTS.LOGIN_STATE_CHANGED), [4, this.refreshUserInfo()];
                                            case 5:
                                                return f.sent(), [4, (u = new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()];
                                            case 6:
                                                return f.sent(), [2, u];
                                            case 7:
                                                throw new Error(JSON.stringify({ code: y.OPERATION_FAIL, msg: "custom signIn failed" }))
                                        }
                                    }))
                                }))
                            }, l([_({ title: "自定义登录失败", messages: ["请确认以下各项：", "  1 - 当前环境是否开启了自定义登录", "  2 - 调用 auth().customAuthProvider().signIn() 的语法或参数是否正确", "  3 - ticket 是否归属于当前环境", "  4 - 创建 ticket 的自定义登录私钥是否过期", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + g] }), p("design:type", Function), p("design:paramtypes", [String]), p("design:returntype", Promise)], t.prototype, "signIn", null), t
                        }(u.AuthProvider);
                    t.CustomAuthProvider = m
                },
                2360: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.EmailAuthProvider = void 0;
                    var i, o = r(n(3988)),
                        s = n(1895),
                        u = n(2251),
                        a = n(627),
                        c = n(2198),
                        f = (i = function(e, t) {
                            return (i = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var i, s = arguments.length,
                                u = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (u = (s < 3 ? i(u) : s > 3 ? i(t, n, u) : i(t, n)) || u);
                            return s > 3 && u && Object.defineProperty(t, n, u), u
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        y = s.utils.throwError,
                        g = s.utils.isString,
                        v = s.constants.ERRORS,
                        _ = s.constants.COMMUNITY_SITE_URL,
                        m = s.helpers.catchErrorsDecorator,
                        b = function(e) {
                            function t() { return null !== e && e.apply(this, arguments) || this }
                            return f(t, e), t.prototype.signIn = function(e, t) {
                                return d(this, void 0, void 0, (function() {
                                    var n, r, i, o, s;
                                    return h(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return g(e) || y(v.INVALID_PARAMS, "email must be a string"), n = this._cache.keys.refreshTokenKey, [4, this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" })];
                                            case 1:
                                                return r = u.sent(), i = r.refresh_token, o = r.access_token, s = r.access_token_expire, i ? [4, this.setRefreshToken(i)] : [3, 8];
                                            case 2:
                                                return u.sent(), o && s ? [4, this.setAccessToken(o, s)] : [3, 4];
                                            case 3:
                                                return u.sent(), [3, 6];
                                            case 4:
                                                return [4, this._request.refreshAccessToken()];
                                            case 5:
                                                u.sent(), u.label = 6;
                                            case 6:
                                                return [4, this.refreshUserInfo()];
                                            case 7:
                                                return u.sent(), c.eventBus.fire(c.EVENTS.LOGIN_STATE_CHANGED), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: a.LOGINTYPE.EMAIL, persistence: this._config.persistence }), [2, new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })];
                                            case 8:
                                                r.code ? y(v.OPERATION_FAIL, "Email login fail[" + r.code + "] " + r.message) : y(v.OPERATION_FAIL, "Email login fail"), u.label = 9;
                                            case 9:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, t.prototype.signUp = function(e, t) { return d(this, void 0, void 0, (function() { return h(this, (function(n) { return [2, this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t })] })) })) }, t.prototype.resetPassword = function(e) { return d(this, void 0, void 0, (function() { return h(this, (function(t) { return [2, this._request.send("auth.sendPasswordResetEmail", { email: e })] })) })) }, t.prototype.resetPasswordWithToken = function(e, t) { return d(this, void 0, void 0, (function() { return h(this, (function(n) { return [2, this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t })] })) })) }, t.prototype.activate = function(e) { return d(this, void 0, void 0, (function() { return h(this, (function(t) { return [2, this._request.send("auth.activateEndUserMail", { token: e })] })) })) }, l([m({ title: "邮箱密码登录失败", messages: ["请确认以下各项：", "  1 - 调用 auth().emailAuthProvider() 的语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "  3 - 邮箱地址与密码是否匹配", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + _] }), p("design:type", Function), p("design:paramtypes", [String, String]), p("design:returntype", Promise)], t.prototype, "signIn", null), l([m({ title: "邮箱注册失败", messages: ["请确认以下各项：", "  1 - 调用 auth().signUpWithEmailAndPassword() 的语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "  3 - 此邮箱地址是否已经被其他用户占用", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + _] }), p("design:type", Function), p("design:paramtypes", [String, String]), p("design:returntype", Promise)], t.prototype, "signUp", null), l([m({ title: "重置密码失败", messages: ["请确认以下各项：", "  1 - 调用 auth().sendPasswordResetEmail() 的语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "  3 - 此邮箱地址是否已经与当前用户绑定", "  4 - 此邮箱地址是否已经被其他用户占用", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + _] }), p("design:type", Function), p("design:paramtypes", [String]), p("design:returntype", Promise)], t.prototype, "resetPassword", null), l([m({ title: "重置密码失败", messages: ["请确认以下各项：", "  1 - 调用语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + _] }), p("design:type", Function), p("design:paramtypes", [String, String]), p("design:returntype", Promise)], t.prototype, "resetPasswordWithToken", null), l([m({ title: "邮箱激活失败", messages: ["请确认以下各项：", "  1 - 调用语法或参数是否正确", "  2 - 当前环境是否开通了邮箱登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + _] }), p("design:type", Function), p("design:paramtypes", [String]), p("design:returntype", Promise)], t.prototype, "activate", null), t
                        }(u.AuthProvider);
                    t.EmailAuthProvider = b
                },
                4718: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.PhoneAuthProvider = t.SIGN_METHOD = void 0;
                    var i, o = r(n(3988)),
                        s = n(1895),
                        u = n(2251),
                        a = n(627),
                        c = n(2198),
                        f = (i = function(e, t) {
                            return (i = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var i, s = arguments.length,
                                u = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (u = (s < 3 ? i(u) : s > 3 ? i(t, n, u) : i(t, n)) || u);
                            return s > 3 && u && Object.defineProperty(t, n, u), u
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        y = s.utils.throwError,
                        g = s.utils.isString,
                        v = s.utils.transformPhone,
                        _ = s.constants.ERRORS,
                        m = s.constants.COMMUNITY_SITE_URL,
                        b = s.helpers.catchErrorsDecorator,
                        A = { SIGNIN: "SIGNIN", SIGNUP: "SIGNUP", FORCERESETPWD: "FORCERESETPWD" };
                    t.SIGN_METHOD = A;
                    var O = function(e) {
                        function t() { return null !== e && e.apply(this, arguments) || this }
                        return f(t, e), t.prototype.signIn = function(e) {
                            return d(this, void 0, void 0, (function() {
                                var t, n, r, i, o, s, u, f, l;
                                return h(this, (function(p) {
                                    switch (p.label) {
                                        case 0:
                                            return t = e.phoneNumber, n = e.phoneCode, r = e.password, i = e.signMethod, g(t) || y(_.INVALID_PARAMS, "phoneNumber must be a string"), g(n) || g(r) || y(_.INVALID_PARAMS, "phoneCode or password must be a string"), i || (i = A.SIGNIN), o = this._cache.keys.refreshTokenKey, [4, this._request.send("auth.signIn", { loginType: a.LOGINTYPE.PHONE, phoneNumber: v(t), phoneCode: n, password: r, refresh_token: this._cache.getStore(o) || "", signMethod: i })];
                                        case 1:
                                            return s = p.sent(), u = s.refresh_token, f = s.access_token, l = s.access_token_expire, u ? [4, this.setRefreshToken(u)] : [3, 8];
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
                                            return p.sent(), c.eventBus.fire(c.EVENTS.LOGIN_STATE_CHANGED), c.eventBus.fire(c.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: a.LOGINTYPE.PHONE, persistence: this._config.persistence }), [2, new c.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })];
                                        case 8:
                                            s.code ? y(_.OPERATION_FAIL, "Phone login fail[" + s.code + "] " + s.message) : y(_.OPERATION_FAIL, "Phone login fail"), p.label = 9;
                                        case 9:
                                            return [2]
                                    }
                                }))
                            }))
                        }, t.prototype.signUp = function(e, t, n) { return d(this, void 0, void 0, (function() { return h(this, (function(r) { return [2, this.signIn({ phoneNumber: e, phoneCode: t, password: n, signMethod: A.SIGNUP })] })) })) }, t.prototype.forceResetPwd = function(e, t, n) { return d(this, void 0, void 0, (function() { return h(this, (function(r) { return [2, this.signIn({ phoneNumber: e, phoneCode: t, password: n, signMethod: A.FORCERESETPWD })] })) })) }, l([b({ title: "手机号登录失败", messages: ["请确认以下各项：", "  1 - 调用 auth().SmsAuthProvider() 的语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "  3 - 短信验证码/密码是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + m] }), p("design:type", Function), p("design:paramtypes", [Object]), p("design:returntype", Promise)], t.prototype, "signIn", null), l([b({ title: "手机短信注册失败", messages: ["请确认以下各项：", "  1 - 调用 auth().signUpWithPhoneCode() 的语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + m] }), p("design:type", Function), p("design:paramtypes", [String, String, String]), p("design:returntype", Promise)], t.prototype, "signUp", null), l([b({ title: "手机密码重置失败", messages: ["请确认以下各项：", "  1 - 调用 auth().forceResetPwd() 的语法或参数是否正确", "  2 - 当前环境是否开通了短信验证码登录", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + m] }), p("design:type", Function), p("design:paramtypes", [String, String, String]), p("design:returntype", Promise)], t.prototype, "forceResetPwd", null), t
                    }(u.AuthProvider);
                    t.PhoneAuthProvider = O
                },
                5518: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.UsernameAuthProvider = void 0;
                    var i, o = r(n(3988)),
                        s = n(2251),
                        u = n(2198),
                        a = n(627),
                        c = n(1895),
                        f = (i = function(e, t) {
                            return (i = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var i, s = arguments.length,
                                u = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (u = (s < 3 ? i(u) : s > 3 ? i(t, n, u) : i(t, n)) || u);
                            return s > 3 && u && Object.defineProperty(t, n, u), u
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        y = c.utils.printWarn,
                        g = c.constants.ERRORS,
                        v = c.constants.COMMUNITY_SITE_URL,
                        _ = c.helpers.catchErrorsDecorator,
                        m = function(e) {
                            function t() { return null !== e && e.apply(this, arguments) || this }
                            return f(t, e), t.prototype.signIn = function(e, t) {
                                return d(this, void 0, void 0, (function() {
                                    var n, r, i, o, s, c, f, l, p;
                                    return h(this, (function(d) {
                                        switch (d.label) {
                                            case 0:
                                                if ("string" != typeof e) throw new Error(JSON.stringify({ code: g.INVALID_PARAMS, msg: "username must be a string" }));
                                                return "string" != typeof t && (t = "", y(g.INVALID_PARAMS, "password is empty")), n = this._cache.keys.refreshTokenKey, o = (i = this._request).send, s = ["auth.signIn"], c = { loginType: a.LOGINTYPE.USERNAME, username: e, password: t }, [4, this._cache.getStoreAsync(n)];
                                            case 1:
                                                return [4, o.apply(i, s.concat([(c.refresh_token = d.sent() || "", c)]))];
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
                                                return d.sent(), u.eventBus.fire(u.EVENTS.LOGIN_STATE_CHANGED), u.eventBus.fire(u.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: a.LOGINTYPE.USERNAME, persistence: this._config.persistence }), [2, new u.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })];
                                            case 9:
                                                throw r.code ? new Error(JSON.stringify({ code: g.OPERATION_FAIL, msg: "login by username failed:[" + r.code + "] " + r.message })) : new Error(JSON.stringify({ code: g.OPERATION_FAIL, msg: "login by username failed" }));
                                            case 10:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, l([_({ title: "用户名密码登录失败", messages: ["请确认以下各项：", "  1 - 调用 auth().signInWithUsernameAndPassword() 的语法或参数是否正确", "  2 - 当前环境是否开通了用户名密码登录", "  3 - 用户名密码是否匹配", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + v] }), p("design:type", Function), p("design:paramtypes", [String, String]), p("design:returntype", Promise)], t.prototype, "signIn", null), t
                        }(s.AuthProvider);
                    t.UsernameAuthProvider = m
                },
                9368: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.WeixinAuthProvider = void 0;
                    var i, o = r(n(3988)),
                        s = n(2251),
                        u = n(1895),
                        a = n(2198),
                        c = n(627),
                        f = (i = function(e, t) {
                            return (i = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        l = function(e, t, n, r) {
                            var i, s = arguments.length,
                                u = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (u = (s < 3 ? i(u) : s > 3 ? i(t, n, u) : i(t, n)) || u);
                            return s > 3 && u && Object.defineProperty(t, n, u), u
                        },
                        p = function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, o["default"])(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                        d = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        h = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        y = u.constants.getSdkName,
                        g = u.constants.ERRORS,
                        v = u.constants.COMMUNITY_SITE_URL,
                        _ = u.adapters.RUNTIME,
                        m = u.utils.getQuery,
                        b = u.utils.getHash,
                        A = u.utils.removeParam,
                        O = u.utils.printWarn,
                        E = u.helpers.catchErrorsDecorator,
                        w = function(e) {
                            function t(t, n, r, i) { var o = e.call(this, t) || this; return o._runtime = t.runtime, o._appid = n, o._scope = r, o._state = i || "weixin", o }
                            return f(t, e), t.prototype.signIn = function() { return d(this, void 0, void 0, (function() { return h(this, (function(e) { return [2, O(g.OPERATION_FAIL, "API signIn has been deprecated, please use signInWithRedirect insteed")] })) })) }, t.prototype.signInWithRedirect = function() { return d(this, void 0, void 0, (function() { return h(this, (function(e) { return [2, this._redirect()] })) })) }, t.prototype.getRedirectResult = function(e) { return d(this, void 0, void 0, (function() { var t; return h(this, (function(n) { return (t = S()) ? [2, this._signInWithCode(t, e)] : [2, null] })) })) }, t.prototype.getLinkRedirectResult = function(e) {
                                return void 0 === e && (e = {}), d(this, void 0, void 0, (function() {
                                    var t, n, r, i, o, s;
                                    return h(this, (function(u) {
                                        return t = e.withUnionId, n = void 0 !== t && t, (r = S()) ? (i = this._appid, o = function(e) {
                                            switch (e) {
                                                case "snsapi_login":
                                                    return "WECHAT-OPEN";
                                                default:
                                                    return "WECHAT-PUBLIC"
                                            }
                                        }(this._scope), s = this._runtime === _.WX_MP ? "1" : "0", [2, this._request.send("auth.linkWithWeixinCode", { payload: { appid: i, loginType: o, code: r, hybridMiniapp: s, withUnionId: n } })]) : [2, null]
                                    }))
                                }))
                            }, t.prototype._redirect = function() {
                                var e = A("code", location.href);
                                e = A("state", e), e = encodeURIComponent(e);
                                var t = "//open.weixin.qq.com/connect/oauth2/authorize";
                                "snsapi_login" === this._scope && (t = "//open.weixin.qq.com/connect/qrconnect");
                                try { location.href = t + "?appid=" + this._appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this._scope + "&state=" + this._state + "#wechat_redirect" } catch (n) { throw new Error("[" + y() + "][" + g.UNKOWN_ERROR + "]" + n) }
                            }, t.prototype._signInWithCode = function(e, t) {
                                return d(this, void 0, void 0, (function() {
                                    var n, r, i, o, s, u, f, l;
                                    return h(this, (function(p) {
                                        switch (p.label) {
                                            case 0:
                                                return n = this._cache.keys, r = n.accessTokenKey, i = n.accessTokenExpireKey, o = n.refreshTokenKey, s = function(e) {
                                                    switch (e) {
                                                        case "snsapi_login":
                                                            return "WECHAT-OPEN";
                                                        default:
                                                            return "WECHAT-PUBLIC"
                                                    }
                                                }(this._scope), [4, this._getRefreshTokenByWXCode(this._appid, s, e, t)];
                                            case 1:
                                                return u = p.sent(), f = u.refreshToken, [4, this._cache.setStoreAsync(o, f)];
                                            case 2:
                                                return p.sent(), u.accessToken ? [4, this._cache.setStoreAsync(r, u.accessToken)] : [3, 4];
                                            case 3:
                                                p.sent(), p.label = 4;
                                            case 4:
                                                return u.accessTokenExpire ? [4, this._cache.setStoreAsync(i, String(u.accessTokenExpire + Date.now()))] : [3, 6];
                                            case 5:
                                                p.sent(), p.label = 6;
                                            case 6:
                                                return a.eventBus.fire(a.EVENTS.LOGIN_STATE_CHANGED), a.eventBus.fire(a.EVENTS.LOGIN_TYPE_CHANGED, { env: this._config.env, loginType: c.LOGINTYPE.WECHAT, persistence: this._config.persistence }), [4, this.refreshUserInfo()];
                                            case 7:
                                                return p.sent(), [4, (l = new a.LoginState({ envId: this._config.env, cache: this._cache, request: this._request })).checkLocalStateAsync()];
                                            case 8:
                                                return p.sent(), [2, l]
                                        }
                                    }))
                                }))
                            }, t.prototype._getRefreshTokenByWXCode = function(e, t, n, r) { return void 0 === r && (r = {}), d(this, void 0, void 0, (function() { var i, o, s, u, a, c; return h(this, (function(f) { return i = r.withUnionId, o = void 0 !== i && i, s = r.createUser, u = void 0 === s || s, a = "snsapi_base" !== this._scope && (r.syncUserInfo || !1), c = this._runtime === _.WX_MP ? "1" : "0", [2, this._request.send("auth.signIn", { appid: e, loginType: t, hybridMiniapp: c, syncUserInfo: a, loginCredential: n, withUnionId: o, createUser: u }).then((function(e) { if (e.code) throw new Error("[" + y() + "][" + g.OPERATION_FAIL + "] failed login via wechat: " + e.code); if (e.refresh_token) return { refreshToken: e.refresh_token, accessToken: e.access_token, accessTokenExpire: e.access_token_expire }; throw new Error("[" + y() + "][" + g.OPERATION_FAIL + "] action:getJwt not return refreshToken") }))] })) })) }, l([E({ title: "跳转微信公众号授权失败", messages: ["请确认以下各项：", "  1 - 调用 auth().weixinAuthProvider().signInWithRedirect() 的语法或参数是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + v] }), p("design:type", Function), p("design:paramtypes", []), p("design:returntype", Promise)], t.prototype, "signInWithRedirect", null), l([E({ title: "微信公众号登录失败", messages: ["请确认以下各项：", "  1 - 调用 auth().weixinAuthProvider().getRedirectResult() 的语法或参数是否正确", "  2 - 当前环境是否开通了微信公众号登录授权", "  3 - 微信公众号的 AppId 与 AppSecret 配置是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + v] }), p("design:type", Function), p("design:paramtypes", [Object]), p("design:returntype", Promise)], t.prototype, "getRedirectResult", null), l([E({ title: "获取微信重定向绑定结果", messages: ["请确认以下各项：", "  1 - 调用 auth().weixinAuthProvider().getLinkRedirectResult() 的语法或参数是否正确", "  2 - 当前环境是否开通了微信公众号登录授权", "  3 - 微信公众号的 AppId 与 AppSecret 配置是否正确", "如果问题依然存在，建议到官方问答社区提问或寻找帮助：" + v] }), p("design:type", Function), p("design:paramtypes", [Object]), p("design:returntype", Promise)], t.prototype, "getLinkRedirectResult", null), t
                        }(s.AuthProvider);

                    function S() { return m("code") || b("code") }
                    t.WeixinAuthProvider = w
                },
                7362: function(e, t, n) {
                    "use strict";
                    var r = n(2370),
                        i = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
                    var o = i(n(9304)),
                        s = r(n(9215)).version;
                    o["default"].registerVersion(s);
                    try { window.cloudbase = o["default"] } catch (a) {}
                    var u = o["default"];
                    t["default"] = u
                },
                1598: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.registerProvider = t.registerAuth = void 0;
                    var r = n(2198),
                        i = r.registerAuth;
                    t.registerAuth = i;
                    var o = r.registerProvider;
                    t.registerProvider = o
                },
                8722: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.registerDatabase = function(e) { try { e.registerComponent(o) } catch (t) { console.warn(t) } };
                    var r = n(5938),
                        i = function() {
                            return (i = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        o = {
                            name: "database",
                            entity: {
                                database: function(e) {
                                    var t = this.platform,
                                        n = t.adapter,
                                        o = t.runtime;
                                    return r.Db.reqClass = this.request.constructor, r.Db.getAccessToken = this.authInstance ? this.authInstance.getAccessToken.bind(this.authInstance) : function() { return "" }, r.Db.runtime = o, this.wsClientClass && (r.Db.wsClass = n.wsClass, r.Db.wsClientClass = this.wsClientClass), r.Db.ws || (r.Db.ws = null), new r.Db(i(i({}, this.config), e))
                                }
                            }
                        };
                    try { cloudbase.registerComponent(o) } catch (s) {}
                },
                5497: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
                    var r = n(5938),
                        i = n(7567),
                        o = n(6532),
                        s = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        u = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        a = function() {
                            function e(e, t) { this._stages = [], e && t && (this._db = e, this._request = new r.Db.reqClass(this._db.config), this._collectionName = t) }
                            return e.prototype.end = function() {
                                return s(this, void 0, void 0, (function() {
                                    var e;
                                    return u(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                if (!this._collectionName || !this._db) throw new Error("Aggregation pipeline cannot send request");
                                                return [4, this._request.send("database.aggregate", { collectionName: this._collectionName, stages: this._stages })];
                                            case 1:
                                                return (e = t.sent()) && e.data && e.data.list ? [2, { requestId: e.requestId, data: JSON.parse(e.data.list).map(i.EJSON.parse) }] : [2, e]
                                        }
                                    }))
                                }))
                            }, e.prototype.unwrap = function() { return this._stages }, e.prototype.done = function() {
                                return this._stages.map((function(e) {
                                    var t, n = e.stageKey,
                                        r = e.stageValue;
                                    return (t = {})[n] = JSON.parse(r), t
                                }))
                            }, e.prototype._pipe = function(e, t) { return this._stages.push({ stageKey: "$" + e, stageValue: JSON.stringify(t) }), this }, e.prototype.addFields = function(e) { return this._pipe("addFields", e) }, e.prototype.bucket = function(e) { return this._pipe("bucket", e) }, e.prototype.bucketAuto = function(e) { return this._pipe("bucketAuto", e) }, e.prototype.count = function(e) { return this._pipe("count", e) }, e.prototype.geoNear = function(e) { return this._pipe("geoNear", e) }, e.prototype.group = function(e) { return this._pipe("group", e) }, e.prototype.limit = function(e) { return this._pipe("limit", e) }, e.prototype.match = function(e) { return this._pipe("match", o.QuerySerializer.encode(e)) }, e.prototype.project = function(e) { return this._pipe("project", e) }, e.prototype.lookup = function(e) { return this._pipe("lookup", e) }, e.prototype.replaceRoot = function(e) { return this._pipe("replaceRoot", e) }, e.prototype.sample = function(e) { return this._pipe("sample", e) }, e.prototype.skip = function(e) { return this._pipe("skip", e) }, e.prototype.sort = function(e) { return this._pipe("sort", e) }, e.prototype.sortByCount = function(e) { return this._pipe("sortByCount", e) }, e.prototype.unwind = function(e) { return this._pipe("unwind", e) }, e
                        }();
                    t["default"] = a
                },
                7505: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.CollectionReference = void 0;
                    var i, o = n(6724),
                        s = n(6582),
                        u = r(n(5497)),
                        a = (i = function(e, t) {
                            return (i = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        c = function(e) {
                            function t(t, n) { return e.call(this, t, n) || this }
                            return a(t, e), Object.defineProperty(t.prototype, "name", { get: function() { return this._coll }, enumerable: !0, configurable: !0 }), t.prototype.doc = function(e) { if ("string" != typeof e && "number" != typeof e) throw new Error("docId必须为字符串或数字"); return new o.DocumentReference(this._db, this._coll, e) }, t.prototype.add = function(e, t) { return new o.DocumentReference(this._db, this._coll, undefined).create(e, t) }, t.prototype.aggregate = function() { return new u["default"](this._db, this._coll) }, t
                        }(s.Query);
                    t.CollectionReference = c
                },
                8991: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = t.Command = void 0;
                    var i = n(8176),
                        o = n(85),
                        s = n(982),
                        u = n(3703),
                        a = r(n(5497)),
                        c = {
                            eq: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.EQ, [e]) },
                            neq: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.NEQ, [e]) },
                            lt: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.LT, [e]) },
                            lte: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.LTE, [e]) },
                            gt: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.GT, [e]) },
                            gte: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.GTE, [e]) },
                            "in": function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.IN, e) },
                            nin: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.NIN, e) },
                            all: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.ALL, e) },
                            elemMatch: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.ELEM_MATCH, [e]) },
                            exists: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.EXISTS, [e]) },
                            size: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.SIZE, [e]) },
                            mod: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.MOD, [e]) },
                            geoNear: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.GEO_NEAR, [e]) },
                            geoWithin: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.GEO_WITHIN, [e]) },
                            geoIntersects: function(e) { return new i.QueryCommand(i.QUERY_COMMANDS_LITERAL.GEO_INTERSECTS, [e]) },
                            and: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, u.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new o.LogicCommand(o.LOGIC_COMMANDS_LITERAL.AND, n) },
                            nor: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, u.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new o.LogicCommand(o.LOGIC_COMMANDS_LITERAL.NOR, n) },
                            or: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, u.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new o.LogicCommand(o.LOGIC_COMMANDS_LITERAL.OR, n) },
                            not: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, u.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new o.LogicCommand(o.LOGIC_COMMANDS_LITERAL.NOT, n) },
                            set: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.SET, [e]) },
                            remove: function() { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.REMOVE, []) },
                            inc: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.INC, [e]) },
                            mul: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.MUL, [e]) },
                            push: function() {
                                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                if ((0, u.isObject)(t[0]) && t[0].hasOwnProperty("each")) {
                                    var r = t[0];
                                    e = { $each: r.each, $position: r.position, $sort: r.sort, $slice: r.slice }
                                } else e = (0, u.isArray)(t[0]) ? t[0] : Array.from(t);
                                return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.PUSH, e)
                            },
                            pull: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.PULL, e) },
                            pullAll: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.PULL_ALL, e) },
                            pop: function() { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.POP, []) },
                            shift: function() { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.SHIFT, []) },
                            unshift: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = (0, u.isArray)(arguments[0]) ? arguments[0] : Array.from(arguments); return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.UNSHIFT, n) },
                            addToSet: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.ADD_TO_SET, e) },
                            rename: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.RENAME, [e]) },
                            bit: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.BIT, [e]) },
                            max: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.MAX, [e]) },
                            min: function(e) { return new s.UpdateCommand(s.UPDATE_COMMANDS_LITERAL.MIN, [e]) },
                            expr: function(e) { return { $expr: e } },
                            jsonSchema: function(e) { return { $jsonSchema: e } },
                            text: function(e) { return (0, u.isString)(e) ? { $search: e.search } : { $search: e.search, $language: e.language, $caseSensitive: e.caseSensitive, $diacriticSensitive: e.diacriticSensitive } },
                            aggregate: { pipeline: function() { return new a["default"] }, abs: function(e) { return new f("abs", e) }, add: function(e) { return new f("add", e) }, ceil: function(e) { return new f("ceil", e) }, divide: function(e) { return new f("divide", e) }, exp: function(e) { return new f("exp", e) }, floor: function(e) { return new f("floor", e) }, ln: function(e) { return new f("ln", e) }, log: function(e) { return new f("log", e) }, log10: function(e) { return new f("log10", e) }, mod: function(e) { return new f("mod", e) }, multiply: function(e) { return new f("multiply", e) }, pow: function(e) { return new f("pow", e) }, sqrt: function(e) { return new f("sqrt", e) }, subtract: function(e) { return new f("subtract", e) }, trunc: function(e) { return new f("trunc", e) }, arrayElemAt: function(e) { return new f("arrayElemAt", e) }, arrayToObject: function(e) { return new f("arrayToObject", e) }, concatArrays: function(e) { return new f("concatArrays", e) }, filter: function(e) { return new f("filter", e) }, "in": function(e) { return new f("in", e) }, indexOfArray: function(e) { return new f("indexOfArray", e) }, isArray: function(e) { return new f("isArray", e) }, map: function(e) { return new f("map", e) }, range: function(e) { return new f("range", e) }, reduce: function(e) { return new f("reduce", e) }, reverseArray: function(e) { return new f("reverseArray", e) }, size: function(e) { return new f("size", e) }, slice: function(e) { return new f("slice", e) }, zip: function(e) { return new f("zip", e) }, and: function(e) { return new f("and", e) }, not: function(e) { return new f("not", e) }, or: function(e) { return new f("or", e) }, cmp: function(e) { return new f("cmp", e) }, eq: function(e) { return new f("eq", e) }, gt: function(e) { return new f("gt", e) }, gte: function(e) { return new f("gte", e) }, lt: function(e) { return new f("lt", e) }, lte: function(e) { return new f("lte", e) }, neq: function(e) { return new f("ne", e) }, cond: function(e) { return new f("cond", e) }, ifNull: function(e) { return new f("ifNull", e) }, "switch": function(e) { return new f("switch", e) }, dateFromParts: function(e) { return new f("dateFromParts", e) }, dateFromString: function(e) { return new f("dateFromString", e) }, dayOfMonth: function(e) { return new f("dayOfMonth", e) }, dayOfWeek: function(e) { return new f("dayOfWeek", e) }, dayOfYear: function(e) { return new f("dayOfYear", e) }, isoDayOfWeek: function(e) { return new f("isoDayOfWeek", e) }, isoWeek: function(e) { return new f("isoWeek", e) }, isoWeekYear: function(e) { return new f("isoWeekYear", e) }, millisecond: function(e) { return new f("millisecond", e) }, minute: function(e) { return new f("minute", e) }, month: function(e) { return new f("month", e) }, second: function(e) { return new f("second", e) }, hour: function(e) { return new f("hour", e) }, week: function(e) { return new f("week", e) }, year: function(e) { return new f("year", e) }, literal: function(e) { return new f("literal", e) }, mergeObjects: function(e) { return new f("mergeObjects", e) }, objectToArray: function(e) { return new f("objectToArray", e) }, allElementsTrue: function(e) { return new f("allElementsTrue", e) }, anyElementTrue: function(e) { return new f("anyElementTrue", e) }, setDifference: function(e) { return new f("setDifference", e) }, setEquals: function(e) { return new f("setEquals", e) }, setIntersection: function(e) { return new f("setIntersection", e) }, setIsSubset: function(e) { return new f("setIsSubset", e) }, setUnion: function(e) { return new f("setUnion", e) }, concat: function(e) { return new f("concat", e) }, dateToString: function(e) { return new f("dateToString", e) }, indexOfBytes: function(e) { return new f("indexOfBytes", e) }, indexOfCP: function(e) { return new f("indexOfCP", e) }, split: function(e) { return new f("split", e) }, strLenBytes: function(e) { return new f("strLenBytes", e) }, strLenCP: function(e) { return new f("strLenCP", e) }, strcasecmp: function(e) { return new f("strcasecmp", e) }, substr: function(e) { return new f("substr", e) }, substrBytes: function(e) { return new f("substrBytes", e) }, substrCP: function(e) { return new f("substrCP", e) }, toLower: function(e) { return new f("toLower", e) }, toUpper: function(e) { return new f("toUpper", e) }, meta: function(e) { return new f("meta", e) }, addToSet: function(e) { return new f("addToSet", e) }, avg: function(e) { return new f("avg", e) }, first: function(e) { return new f("first", e) }, last: function(e) { return new f("last", e) }, max: function(e) { return new f("max", e) }, min: function(e) { return new f("min", e) }, push: function(e) { return new f("push", e) }, stdDevPop: function(e) { return new f("stdDevPop", e) }, stdDevSamp: function(e) { return new f("stdDevSamp", e) }, sum: function(e) { return new f("sum", e) }, "let": function(e) { return new f("let", e) } },
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
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.isLogicCommand = u, t.isKnownLogicCommand = function(e) { return u && e.operator.toUpperCase() in r }, t["default"] = t.LogicCommand = t.LOGIC_COMMANDS_LITERAL = t.NOR = t.NOT = t.OR = t.AND = void 0;
                    var r, i = n(2352),
                        o = n(8176);
                    t.AND = "and", t.OR = "or", t.NOT = "not", t.NOR = "nor", t.LOGIC_COMMANDS_LITERAL = r,
                        function(e) { e.AND = "and", e.OR = "or", e.NOT = "not", e.NOR = "nor" }(r || (t.LOGIC_COMMANDS_LITERAL = r = {}));
                    var s = function() {
                        function e(e, t, n) {
                            if (this._internalType = i.SYMBOL_LOGIC_COMMAND, Object.defineProperties(this, { _internalType: { enumerable: !1, configurable: !1 } }), this.operator = e, this.operands = t, this.fieldName = n || i.SYMBOL_UNSET_FIELD_NAME, this.fieldName !== i.SYMBOL_UNSET_FIELD_NAME)
                                if (Array.isArray(t)) { t = t.slice(), this.operands = t; for (var r = 0, s = t.length; r < s; r++)(u(a = t[r]) || (0, o.isQueryCommand)(a)) && (t[r] = a._setFieldName(this.fieldName)) } else {
                                    var a;
                                    (u(a = t) || (0, o.isQueryCommand)(a)) && (t = a._setFieldName(this.fieldName))
                                }
                        }
                        return e.prototype._setFieldName = function(t) { var n = this.operands.map((function(n) { return n instanceof e ? n._setFieldName(t) : n })); return new e(this.operator, n, t) }, e.prototype.and = function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; var i = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments); return i.unshift(this), new e(r.AND, i, this.fieldName) }, e.prototype.or = function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; var i = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments); return i.unshift(this), new e(r.OR, i, this.fieldName) }, e
                    }();

                    function u(e) { return e && e instanceof s && e._internalType === i.SYMBOL_LOGIC_COMMAND }
                    t.LogicCommand = s;
                    var a = s;
                    t["default"] = a
                },
                8176: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.isQueryCommand = d, t.isKnownQueryCommand = function(e) { return d(e) && e.operator.toUpperCase() in o }, t.isComparisonCommand = function(e) { return d(e) }, t["default"] = t.QueryCommand = t.QUERY_COMMANDS_LITERAL = t.MOD = t.SIZE = t.EXISTS = t.ELEM_MATCH = t.ALL = t.NIN = t.IN = t.LTE = t.LT = t.GTE = t.GT = t.NEQ = t.EQ = void 0;
                    var i, o, s = r(n(3988)),
                        u = n(85),
                        a = n(2352),
                        c = n(7685),
                        f = n(3703),
                        l = (i = function(e, t) {
                            return (i = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        });
                    t.EQ = "eq", t.NEQ = "neq", t.GT = "gt", t.GTE = "gte", t.LT = "lt", t.LTE = "lte", t.IN = "in", t.NIN = "nin", t.ALL = "all", t.ELEM_MATCH = "elemMatch", t.EXISTS = "exists", t.SIZE = "size", t.MOD = "mod", t.QUERY_COMMANDS_LITERAL = o,
                        function(e) { e.EQ = "eq", e.NEQ = "neq", e.GT = "gt", e.GTE = "gte", e.LT = "lt", e.LTE = "lte", e.IN = "in", e.NIN = "nin", e.ALL = "all", e.ELEM_MATCH = "elemMatch", e.EXISTS = "exists", e.SIZE = "size", e.MOD = "mod", e.GEO_NEAR = "geoNear", e.GEO_WITHIN = "geoWithin", e.GEO_INTERSECTS = "geoIntersects" }(o || (t.QUERY_COMMANDS_LITERAL = o = {}));
                    var p = function(e) {
                        function t(t, n, r) { var i = e.call(this, t, n, r) || this; return i.operator = t, i._internalType = a.SYMBOL_QUERY_COMMAND, i }
                        return l(t, e), t.prototype.toJSON = function() {
                            var e, t;
                            switch (this.operator) {
                                case o.IN:
                                case o.NIN:
                                    return (e = {})["$" + this.operator] = this.operands, e;
                                default:
                                    return (t = {})["$" + this.operator] = this.operands[0], t
                            }
                        }, t.prototype._setFieldName = function(e) { return new t(this.operator, this.operands, e) }, t.prototype.eq = function(e) { var n = new t(o.EQ, [e], this.fieldName); return this.and(n) }, t.prototype.neq = function(e) { var n = new t(o.NEQ, [e], this.fieldName); return this.and(n) }, t.prototype.gt = function(e) { var n = new t(o.GT, [e], this.fieldName); return this.and(n) }, t.prototype.gte = function(e) { var n = new t(o.GTE, [e], this.fieldName); return this.and(n) }, t.prototype.lt = function(e) { var n = new t(o.LT, [e], this.fieldName); return this.and(n) }, t.prototype.lte = function(e) { var n = new t(o.LTE, [e], this.fieldName); return this.and(n) }, t.prototype["in"] = function(e) { var n = new t(o.IN, e, this.fieldName); return this.and(n) }, t.prototype.nin = function(e) { var n = new t(o.NIN, e, this.fieldName); return this.and(n) }, t.prototype.geoNear = function(e) { if (!(e.geometry instanceof c.Point)) throw new TypeError('"geometry" must be of type Point. Received type ' + (0, s["default"])(e.geometry)); if (e.maxDistance !== undefined && !(0, f.isNumber)(e.maxDistance)) throw new TypeError('"maxDistance" must be of type Number. Received type ' + (0, s["default"])(e.maxDistance)); if (e.minDistance !== undefined && !(0, f.isNumber)(e.minDistance)) throw new TypeError('"minDistance" must be of type Number. Received type ' + (0, s["default"])(e.minDistance)); var n = new t(o.GEO_NEAR, [e], this.fieldName); return this.and(n) }, t.prototype.geoWithin = function(e) { if (!(e.geometry instanceof c.MultiPolygon || e.geometry instanceof c.Polygon)) throw new TypeError('"geometry" must be of type Polygon or MultiPolygon. Received type ' + (0, s["default"])(e.geometry)); var n = new t(o.GEO_WITHIN, [e], this.fieldName); return this.and(n) }, t.prototype.geoIntersects = function(e) { if (!(e.geometry instanceof c.Point || e.geometry instanceof c.LineString || e.geometry instanceof c.Polygon || e.geometry instanceof c.MultiPoint || e.geometry instanceof c.MultiLineString || e.geometry instanceof c.MultiPolygon)) throw new TypeError('"geometry" must be of type Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon. Received type ' + (0, s["default"])(e.geometry)); var n = new t(o.GEO_INTERSECTS, [e], this.fieldName); return this.and(n) }, t
                    }(u.LogicCommand);

                    function d(e) { return e && e instanceof p && e._internalType === a.SYMBOL_QUERY_COMMAND }
                    t.QueryCommand = p;
                    var h = p;
                    t["default"] = h
                },
                982: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.isUpdateCommand = s, t.isKnownUpdateCommand = function(e) { return s(e) && e.operator.toUpperCase() in r }, t["default"] = t.UpdateCommand = t.UPDATE_COMMANDS_LITERAL = void 0;
                    var r, i = n(2352);
                    t.UPDATE_COMMANDS_LITERAL = r,
                        function(e) { e.SET = "set", e.REMOVE = "remove", e.INC = "inc", e.MUL = "mul", e.PUSH = "push", e.PULL = "pull", e.PULL_ALL = "pullAll", e.POP = "pop", e.SHIFT = "shift", e.UNSHIFT = "unshift", e.ADD_TO_SET = "addToSet", e.BIT = "bit", e.RENAME = "rename", e.MAX = "max", e.MIN = "min" }(r || (t.UPDATE_COMMANDS_LITERAL = r = {}));
                    var o = function() {
                        function e(e, t, n) { this._internalType = i.SYMBOL_UPDATE_COMMAND, Object.defineProperties(this, { _internalType: { enumerable: !1, configurable: !1 } }), this.operator = e, this.operands = t, this.fieldName = n || i.SYMBOL_UNSET_FIELD_NAME }
                        return e.prototype._setFieldName = function(t) { return new e(this.operator, this.operands, t) }, e
                    }();

                    function s(e) { return e && e instanceof o && e._internalType === i.SYMBOL_UPDATE_COMMAND }
                    t.UpdateCommand = o;
                    var u = o;
                    t["default"] = u
                },
                5029: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.ERRORS = void 0, t.ERRORS = { CREATE_WATCH_NET_ERROR: { code: "CREATE_WATCH_NET_ERROR", message: "create watch network error" }, CREATE_WACTH_EXCEED_ERROR: { code: "CREATE_WACTH_EXCEED_ERROR", message: "maximum connections exceed" }, CREATE_WATCH_SERVER_ERROR: { code: "CREATE_WATCH_SERVER_ERROR", message: "create watch server error" }, CONN_ERROR: { code: "CONN_ERROR", message: "connection error" }, INVALID_PARAM: { code: "INVALID_PARAM", message: "Invalid request param" }, INSERT_DOC_FAIL: { code: "INSERT_DOC_FAIL", message: "insert document failed" }, DATABASE_TRANSACTION_CONFLICT: { code: "DATABASE_TRANSACTION_CONFLICT", message: "database transaction conflict" } }
                },
                7785: function(e, t) {
                    "use strict";
                    var n, r, i;
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.QueryType = t.UpdateOperatorList = t.OrderDirectionList = t.OperatorMap = t.Opeartor = t.WhereFilterOpList = t.FieldType = t.ErrorCode = void 0, t.ErrorCode = r,
                        function(e) { e.DocIDError = "文档ID不合法", e.CollNameError = "集合名称不合法", e.OpStrError = "操作符不合法", e.DirectionError = "排序字符不合法", e.IntergerError = "must be integer", e.QueryParamTypeError = "查询参数必须为对象", e.QueryParamValueError = "查询参数对象值不能均为undefined" }(r || (t.ErrorCode = r = {})), t.FieldType = { String: "String", Number: "Number", Object: "Object", Array: "Array", Boolean: "Boolean", Null: "Null", GeoPoint: "GeoPoint", GeoLineString: "GeoLineString", GeoPolygon: "GeoPolygon", GeoMultiPoint: "GeoMultiPoint", GeoMultiLineString: "GeoMultiLineString", GeoMultiPolygon: "GeoMultiPolygon", Timestamp: "Date", Command: "Command", ServerDate: "ServerDate", BsonDate: "BsonDate" }, t.OrderDirectionList = ["desc", "asc"], t.WhereFilterOpList = ["<", "<=", "==", ">=", ">"], t.Opeartor = i,
                        function(e) { e.lt = "<", e.gt = ">", e.lte = "<=", e.gte = ">=", e.eq = "==" }(i || (t.Opeartor = i = {}));
                    var o, s = ((n = {})[i.eq] = "$eq", n[i.lt] = "$lt", n[i.lte] = "$lte", n[i.gt] = "$gt", n[i.gte] = "$gte", n);
                    t.OperatorMap = s, t.UpdateOperatorList = ["$set", "$inc", "$mul", "$unset", "$push", "$pop", "$unshift", "$shift", "$currentDate", "$each", "$position"], t.QueryType = o,
                        function(e) { e.WHERE = "WHERE", e.DOC = "DOC" }(o || (t.QueryType = o = {}))
                },
                6724: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.DocumentReference = void 0;
                    var i = r(n(3988)),
                        o = n(9054),
                        s = n(5938),
                        u = n(9833),
                        a = n(5323),
                        c = n(9272),
                        f = n(982),
                        l = n(7785),
                        p = n(64),
                        d = function() {
                            return (d = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        h = function() {
                            function e(e, t, n, r) {
                                var i = this;
                                void 0 === r && (r = {}), this.watch = function(e) { return (0, p.getWsInstance)(i._db).watch(d(d({}, e), { envId: i._db.config.env, collectionName: i._coll, query: JSON.stringify({ _id: i.id }) })) }, this._db = e, this._coll = t, this.id = n, this.request = new s.Db.reqClass(this._db.config), this.projection = r
                            }
                            return e.prototype.create = function(e, t) { t = t || (0, o.createPromiseCallback)(); var n = { collectionName: this._coll, data: (0, c.serialize)(e) }; return this.id && (n._id = this.id), this.request.send("database.addDocument", n).then((function(e) { e.code ? t(0, e) : t(0, { id: e.data._id, requestId: e.requestId }) }))["catch"]((function(e) { t(e) })), t.promise }, e.prototype.set = function(e, t) {
                                if (t = t || (0, o.createPromiseCallback)(), !this.id) return Promise.resolve({ code: "INVALID_PARAM", message: "docId不能为空" });
                                if (!e || "object" !== (0, i["default"])(e)) return Promise.resolve({ code: "INVALID_PARAM", message: "参数必需是非空对象" });
                                if (e.hasOwnProperty("_id")) return Promise.resolve({ code: "INVALID_PARAM", message: "不能更新_id的值" });
                                var n = !1;
                                if (function s(e) {
                                        if ("object" === (0, i["default"])(e))
                                            for (var t in e) e[t] instanceof f.UpdateCommand ? n = !0 : "object" === (0, i["default"])(e[t]) && s(e[t])
                                    }(e), n) return Promise.resolve({ code: "DATABASE_REQUEST_FAILED", message: "update operator complicit" });
                                var r = { collectionName: this._coll, queryType: l.QueryType.DOC, data: (0, c.serialize)(e), multi: !1, merge: !1, upsert: !0 };
                                return this.id && (r.query = { _id: this.id }), this.request.send("database.updateDocument", r).then((function(e) { e.code ? t(0, e) : t(0, { updated: e.data.updated, upsertedId: e.data.upserted_id, requestId: e.requestId }) }))["catch"]((function(e) { t(e) })), t.promise
                            }, e.prototype.update = function(e, t) {
                                if (t = t || (0, o.createPromiseCallback)(), !e || "object" !== (0, i["default"])(e)) return Promise.resolve({ code: "INVALID_PARAM", message: "参数必需是非空对象" });
                                if (e.hasOwnProperty("_id")) return Promise.resolve({ code: "INVALID_PARAM", message: "不能更新_id的值" });
                                var n = { _id: this.id },
                                    r = { collectionName: this._coll, data: a.UpdateSerializer.encode(e), query: n, queryType: l.QueryType.DOC, multi: !1, merge: !0, upsert: !1 };
                                return this.request.send("database.updateDocument", r).then((function(e) { e.code ? t(0, e) : t(0, { updated: e.data.updated, upsertedId: e.data.upserted_id, requestId: e.requestId }) }))["catch"]((function(e) { t(e) })), t.promise
                            }, e.prototype.remove = function(e) {
                                e = e || (0, o.createPromiseCallback)();
                                var t = { _id: this.id },
                                    n = { collectionName: this._coll, query: t, queryType: l.QueryType.DOC, multi: !1 };
                                return this.request.send("database.deleteDocument", n).then((function(t) { t.code ? e(0, t) : e(0, { deleted: t.data.deleted, requestId: t.requestId }) }))["catch"]((function(t) { e(t) })), e.promise
                            }, e.prototype.get = function(e) {
                                e = e || (0, o.createPromiseCallback)();
                                var t = { _id: this.id },
                                    n = { collectionName: this._coll, query: t, queryType: l.QueryType.DOC, multi: !1, projection: this.projection };
                                return this.request.send("database.queryDocument", n).then((function(t) {
                                    if (t.code) e(0, t);
                                    else {
                                        var n = u.Util.formatResDocumentData(t.data.list);
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
                    var i = n(9423);
                    Object.keys(i).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === i[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return i[e] } })) }));
                    var o = n(4870);
                    Object.keys(o).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return o[e] } })) }));
                    var s = n(5405);
                    Object.keys(s).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === s[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return s[e] } })) }));
                    var u = n(7686);
                    Object.keys(u).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === u[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return u[e] } })) }));
                    var a = n(3323);
                    Object.keys(a).forEach((function(e) { "default" !== e && "__esModule" !== e && (e in t && t[e] === a[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return a[e] } })) }))
                },
                9423: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.LineString = void 0;
                    var i = r(n(3988)),
                        o = n(2352),
                        s = n(5556),
                        u = n(3703),
                        a = function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        },
                        c = function() {
                            function e(e) {
                                if (!(0, u.isArray)(e)) throw new TypeError('"points" must be of type Point[]. Received type ' + (0, i["default"])(e));
                                if (e.length < 2) throw new Error('"points" must contain 2 points at least');
                                e.forEach((function(e) { if (!(e instanceof s.Point)) throw new TypeError('"points" must be of type Point[]. Received type ' + (0, i["default"])(e) + "[]") })), this.points = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "LineString", coordinates: this.points.map((function(e) { return e.toJSON().coordinates })) }, t }, e.prototype.toJSON = function() { return { type: "LineString", coordinates: this.points.map((function(e) { return e.toJSON().coordinates })) } }, e.validate = function(e) { var t, n; if ("LineString" !== e.type || !(0, u.isArray)(e.coordinates)) return !1; try { for (var r = a(e.coordinates), i = r.next(); !i.done; i = r.next()) { var o = i.value; if (!(0, u.isNumber)(o[0]) || !(0, u.isNumber)(o[1])) return !1 } } catch (s) { t = { error: s } } finally { try { i && !i.done && (n = r["return"]) && n.call(r) } finally { if (t) throw t.error } } return !0 }, e.isClosed = function(e) {
                                var t = e.points[0],
                                    n = e.points[e.points.length - 1];
                                if (t.latitude === n.latitude && t.longitude === n.longitude) return !0
                            }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return o.SYMBOL_GEO_LINE_STRING }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.LineString = c
                },
                7686: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.MultiLineString = void 0;
                    var i = r(n(3988)),
                        o = n(2352),
                        s = n(3703),
                        u = n(9423),
                        a = function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        },
                        c = function() {
                            function e(e) {
                                if (!(0, s.isArray)(e)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + (0, i["default"])(e));
                                if (0 === e.length) throw new Error("Polygon must contain 1 linestring at least");
                                e.forEach((function(e) { if (!(e instanceof u.LineString)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + (0, i["default"])(e) + "[]") })), this.lines = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "MultiLineString", coordinates: this.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) }, t }, e.prototype.toJSON = function() { return { type: "MultiLineString", coordinates: this.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) } }, e.validate = function(e) { var t, n, r, i; if ("MultiLineString" !== e.type || !(0, s.isArray)(e.coordinates)) return !1; try { for (var o = a(e.coordinates), u = o.next(); !u.done; u = o.next()) { var c = u.value; try { for (var f = (r = void 0, a(c)), l = f.next(); !l.done; l = f.next()) { var p = l.value; if (!(0, s.isNumber)(p[0]) || !(0, s.isNumber)(p[1])) return !1 } } catch (d) { r = { error: d } } finally { try { l && !l.done && (i = f["return"]) && i.call(f) } finally { if (r) throw r.error } } } } catch (h) { t = { error: h } } finally { try { u && !u.done && (n = o["return"]) && n.call(o) } finally { if (t) throw t.error } } return !0 }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return o.SYMBOL_GEO_MULTI_LINE_STRING }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.MultiLineString = c
                },
                5405: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.MultiPoint = void 0;
                    var i = r(n(3988)),
                        o = n(2352),
                        s = n(5556),
                        u = n(3703),
                        a = function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        },
                        c = function() {
                            function e(e) {
                                if (!(0, u.isArray)(e)) throw new TypeError('"points" must be of type Point[]. Received type ' + (0, i["default"])(e));
                                if (0 === e.length) throw new Error('"points" must contain 1 point at least');
                                e.forEach((function(e) { if (!(e instanceof s.Point)) throw new TypeError('"points" must be of type Point[]. Received type ' + (0, i["default"])(e) + "[]") })), this.points = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "MultiPoint", coordinates: this.points.map((function(e) { return e.toJSON().coordinates })) }, t }, e.prototype.toJSON = function() { return { type: "MultiPoint", coordinates: this.points.map((function(e) { return e.toJSON().coordinates })) } }, e.validate = function(e) { var t, n; if ("MultiPoint" !== e.type || !(0, u.isArray)(e.coordinates)) return !1; try { for (var r = a(e.coordinates), i = r.next(); !i.done; i = r.next()) { var o = i.value; if (!(0, u.isNumber)(o[0]) || !(0, u.isNumber)(o[1])) return !1 } } catch (s) { t = { error: s } } finally { try { i && !i.done && (n = r["return"]) && n.call(r) } finally { if (t) throw t.error } } return !0 }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return o.SYMBOL_GEO_MULTI_POINT }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.MultiPoint = c
                },
                3323: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.MultiPolygon = void 0;
                    var i = r(n(3988)),
                        o = n(2352),
                        s = n(3703),
                        u = n(4870),
                        a = function(e) {
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
                                if (!(0, s.isArray)(e)) throw new TypeError('"polygons" must be of type Polygon[]. Received type ' + (0, i["default"])(e));
                                if (0 === e.length) throw new Error("MultiPolygon must contain 1 polygon at least");
                                try { for (var r = a(e), o = r.next(); !o.done; o = r.next()) { var c = o.value; if (!(c instanceof u.Polygon)) throw new TypeError('"polygon" must be of type Polygon[]. Received type ' + (0, i["default"])(c) + "[]") } } catch (f) { t = { error: f } } finally { try { o && !o.done && (n = r["return"]) && n.call(r) } finally { if (t) throw t.error } }
                                this.polygons = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "MultiPolygon", coordinates: this.polygons.map((function(e) { return e.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) })) }, t }, e.prototype.toJSON = function() { return { type: "MultiPolygon", coordinates: this.polygons.map((function(e) { return e.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) })) } }, e.validate = function(e) { var t, n, r, i, o, u; if ("MultiPolygon" !== e.type || !(0, s.isArray)(e.coordinates)) return !1; try { for (var c = a(e.coordinates), f = c.next(); !f.done; f = c.next()) { var l = f.value; try { for (var p = (r = void 0, a(l)), d = p.next(); !d.done; d = p.next()) { var h = d.value; try { for (var y = (o = void 0, a(h)), g = y.next(); !g.done; g = y.next()) { var v = g.value; if (!(0, s.isNumber)(v[0]) || !(0, s.isNumber)(v[1])) return !1 } } catch (_) { o = { error: _ } } finally { try { g && !g.done && (u = y["return"]) && u.call(y) } finally { if (o) throw o.error } } } } catch (m) { r = { error: m } } finally { try { d && !d.done && (i = p["return"]) && i.call(p) } finally { if (r) throw r.error } } } } catch (b) { t = { error: b } } finally { try { f && !f.done && (n = c["return"]) && n.call(c) } finally { if (t) throw t.error } } return !0 }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return o.SYMBOL_GEO_POLYGON }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.MultiPolygon = c
                },
                5556: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Point = void 0;
                    var r = n(3228),
                        i = n(2352),
                        o = n(3703),
                        s = function() {
                            function e(e, t) { r.Validate.isGeopoint("longitude", e), r.Validate.isGeopoint("latitude", t), this.longitude = e, this.latitude = t }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "Point", coordinates: [this.longitude, this.latitude] }, t }, e.prototype.toJSON = function() { return { type: "Point", coordinates: [this.longitude, this.latitude] } }, e.prototype.toReadableString = function() { return "[" + this.longitude + "," + this.latitude + "]" }, e.validate = function(e) { return "Point" === e.type && (0, o.isArray)(e.coordinates) && r.Validate.isGeopoint("longitude", e.coordinates[0]) && r.Validate.isGeopoint("latitude", e.coordinates[1]) }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return i.SYMBOL_GEO_POINT }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.Point = s
                },
                4870: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Polygon = void 0;
                    var i = r(n(3988)),
                        o = n(2352),
                        s = n(3703),
                        u = n(9423),
                        a = function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        },
                        c = function() {
                            function e(e) {
                                if (!(0, s.isArray)(e)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + (0, i["default"])(e));
                                if (0 === e.length) throw new Error("Polygon must contain 1 linestring at least");
                                e.forEach((function(e) { if (!(e instanceof u.LineString)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + (0, i["default"])(e) + "[]"); if (!u.LineString.isClosed(e)) throw new Error("LineString " + e.points.map((function(e) { return e.toReadableString() })) + " is not a closed cycle") })), this.lines = e
                            }
                            return e.prototype.parse = function(e) { var t; return (t = {})[e] = { type: "Polygon", coordinates: this.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) }, t }, e.prototype.toJSON = function() { return { type: "Polygon", coordinates: this.lines.map((function(e) { return e.points.map((function(e) { return [e.longitude, e.latitude] })) })) } }, e.validate = function(e) { var t, n, r, i; if ("Polygon" !== e.type || !(0, s.isArray)(e.coordinates)) return !1; try { for (var o = a(e.coordinates), u = o.next(); !u.done; u = o.next()) { var c = u.value; if (!this.isCloseLineString(c)) return !1; try { for (var f = (r = void 0, a(c)), l = f.next(); !l.done; l = f.next()) { var p = l.value; if (!(0, s.isNumber)(p[0]) || !(0, s.isNumber)(p[1])) return !1 } } catch (d) { r = { error: d } } finally { try { l && !l.done && (i = f["return"]) && i.call(f) } finally { if (r) throw r.error } } } } catch (h) { t = { error: h } } finally { try { u && !u.done && (n = o["return"]) && n.call(o) } finally { if (t) throw t.error } } return !0 }, e.isCloseLineString = function(e) {
                                var t = e[0],
                                    n = e[e.length - 1];
                                return t[0] === n[0] && t[1] === n[1]
                            }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return o.SYMBOL_GEO_MULTI_POLYGON }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.Polygon = c
                },
                2352: function(e, t, n) {
                    "use strict";
                    var r = n(2370);
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var i = { SYMBOL_UNSET_FIELD_NAME: !0, SYMBOL_UPDATE_COMMAND: !0, SYMBOL_QUERY_COMMAND: !0, SYMBOL_LOGIC_COMMAND: !0, SYMBOL_GEO_POINT: !0, SYMBOL_GEO_LINE_STRING: !0, SYMBOL_GEO_POLYGON: !0, SYMBOL_GEO_MULTI_POINT: !0, SYMBOL_GEO_MULTI_LINE_STRING: !0, SYMBOL_GEO_MULTI_POLYGON: !0, SYMBOL_SERVER_DATE: !0, SYMBOL_REGEXP: !0 };
                    t.SYMBOL_REGEXP = t.SYMBOL_SERVER_DATE = t.SYMBOL_GEO_MULTI_POLYGON = t.SYMBOL_GEO_MULTI_LINE_STRING = t.SYMBOL_GEO_MULTI_POINT = t.SYMBOL_GEO_POLYGON = t.SYMBOL_GEO_LINE_STRING = t.SYMBOL_GEO_POINT = t.SYMBOL_LOGIC_COMMAND = t.SYMBOL_QUERY_COMMAND = t.SYMBOL_UPDATE_COMMAND = t.SYMBOL_UNSET_FIELD_NAME = void 0;
                    var o = r(n(7471));
                    Object.keys(o).forEach((function(e) { "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(i, e) || e in t && t[e] === o[e] || Object.defineProperty(t, e, { enumerable: !0, get: function() { return o[e] } })) }));
                    var s = o["default"]["for"]("UNSET_FIELD_NAME");
                    t.SYMBOL_UNSET_FIELD_NAME = s;
                    var u = o["default"]["for"]("UPDATE_COMMAND");
                    t.SYMBOL_UPDATE_COMMAND = u;
                    var a = o["default"]["for"]("QUERY_COMMAND");
                    t.SYMBOL_QUERY_COMMAND = a;
                    var c = o["default"]["for"]("LOGIC_COMMAND");
                    t.SYMBOL_LOGIC_COMMAND = c;
                    var f = o["default"]["for"]("GEO_POINT");
                    t.SYMBOL_GEO_POINT = f;
                    var l = o["default"]["for"]("SYMBOL_GEO_LINE_STRING");
                    t.SYMBOL_GEO_LINE_STRING = l;
                    var p = o["default"]["for"]("SYMBOL_GEO_POLYGON");
                    t.SYMBOL_GEO_POLYGON = p;
                    var d = o["default"]["for"]("SYMBOL_GEO_MULTI_POINT");
                    t.SYMBOL_GEO_MULTI_POINT = d;
                    var h = o["default"]["for"]("SYMBOL_GEO_MULTI_LINE_STRING");
                    t.SYMBOL_GEO_MULTI_LINE_STRING = h;
                    var y = o["default"]["for"]("SYMBOL_GEO_MULTI_POLYGON");
                    t.SYMBOL_GEO_MULTI_POLYGON = y;
                    var g = o["default"]["for"]("SERVER_DATE");
                    t.SYMBOL_SERVER_DATE = g;
                    var v = o["default"]["for"]("REGEXP");
                    t.SYMBOL_REGEXP = v
                },
                5938: function(e, t, n) {
                    "use strict";
                    var r = n(2370);
                    Object.defineProperty(t, "__esModule", { value: !0 }), Object.defineProperty(t, "CollectionReference", { enumerable: !0, get: function() { return o.CollectionReference } }), Object.defineProperty(t, "Query", { enumerable: !0, get: function() { return d.Query } }), Object.defineProperty(t, "DocumentReference", { enumerable: !0, get: function() { return h.DocumentReference } }), t.Db = void 0;
                    var i = r(n(7685)),
                        o = n(7505),
                        s = n(8991),
                        u = n(1312),
                        a = n(1250),
                        c = n(8617),
                        f = n(85),
                        l = n(8176),
                        p = n(982),
                        d = n(6582),
                        h = n(6724),
                        y = function() {
                            function e(e) { this.config = e, this.Geo = i, this.serverDate = u.ServerDateConstructor, this.command = s.Command, this.RegExp = a.RegExpConstructor, this.startTransaction = c.startTransaction, this.runTransaction = c.runTransaction, this.logicCommand = f.LogicCommand, this.updateCommand = p.UpdateCommand, this.queryCommand = l.QueryCommand }
                            return e.prototype.collection = function(e) { if (!e) throw new Error("Collection name is required"); return new o.CollectionReference(this, e) }, e.prototype.createCollection = function(t) { var n = { collectionName: t }; return new e.reqClass(this.config).send("database.addCollection", n) }, e
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
                        i = n(85),
                        o = n(982),
                        s = {};
                    for (var u in t.OperatorMap = s, r.QUERY_COMMANDS_LITERAL) s[u] = "$" + u;
                    for (var u in i.LOGIC_COMMANDS_LITERAL) s[u] = "$" + u;
                    for (var u in o.UPDATE_COMMANDS_LITERAL) s[u] = "$" + u;
                    s[r.QUERY_COMMANDS_LITERAL.NEQ] = "$ne", s[o.UPDATE_COMMANDS_LITERAL.REMOVE] = "$unset", s[o.UPDATE_COMMANDS_LITERAL.SHIFT] = "$pop", s[o.UPDATE_COMMANDS_LITERAL.UNSHIFT] = "$push"
                },
                6582: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Query = void 0;
                    var i = r(n(3988)),
                        o = n(9054),
                        s = n(7785),
                        u = n(5938),
                        a = n(3228),
                        c = n(9833),
                        f = n(6532),
                        l = n(5323),
                        p = n(64),
                        d = function() {
                            return (d = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        h = function() {
                            function e(e, t, n, r, i) {
                                var o = this;
                                this.watch = function(e) { return (0, p.getWsInstance)(o._db).watch(d(d({}, e), { envId: o._db.config.env, collectionName: o._coll, query: JSON.stringify(o._fieldFilters || {}), limit: o._queryOptions.limit, orderBy: o._fieldOrders ? o._fieldOrders.reduce((function(e, t) { return e[t.field] = t.direction, e }), {}) : undefined })) }, this._db = e, this._coll = t, this._fieldFilters = n, this._fieldOrders = r || [], this._queryOptions = i || {}, this._request = new u.Db.reqClass(this._db.config)
                            }
                            return e.prototype.get = function(e) {
                                e = e || (0, o.createPromiseCallback)();
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
                            }, e.prototype.count = function(e) { e = e || (0, o.createPromiseCallback)(); var t = { collectionName: this._coll, queryType: s.QueryType.WHERE }; return this._fieldFilters && (t.query = this._fieldFilters), this._request.send("database.countDocument", t).then((function(t) { t.code ? e(0, t) : e(0, { requestId: t.requestId, total: t.data.total }) }))["catch"]((function(t) { e(t) })), e.promise }, e.prototype.where = function(t) {
                                if ("Object" !== Object.prototype.toString.call(t).slice(8, -1)) throw Error(s.ErrorCode.QueryParamTypeError);
                                var n = Object.keys(t),
                                    r = n.some((function(e) { return t[e] !== undefined }));
                                if (n.length && !r) throw Error(s.ErrorCode.QueryParamValueError);
                                return new e(this._db, this._coll, f.QuerySerializer.encode(t), this._fieldOrders, this._queryOptions)
                            }, e.prototype.orderBy = function(t, n) {
                                a.Validate.isFieldPath(t), a.Validate.isFieldOrder(n);
                                var r = { field: t, direction: n },
                                    i = this._fieldOrders.concat(r);
                                return new e(this._db, this._coll, this._fieldFilters, i, this._queryOptions)
                            }, e.prototype.limit = function(t) { a.Validate.isInteger("limit", t); var n = d({}, this._queryOptions); return n.limit = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, n) }, e.prototype.skip = function(t) { a.Validate.isInteger("offset", t); var n = d({}, this._queryOptions); return n.offset = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, n) }, e.prototype.update = function(e, t) { if (t = t || (0, o.createPromiseCallback)(), !e || "object" !== (0, i["default"])(e)) return Promise.resolve({ code: "INVALID_PARAM", message: "参数必需是非空对象" }); if (e.hasOwnProperty("_id")) return Promise.resolve({ code: "INVALID_PARAM", message: "不能更新_id的值" }); var n = { collectionName: this._coll, query: this._fieldFilters, queryType: s.QueryType.WHERE, multi: !0, merge: !0, upsert: !1, data: l.UpdateSerializer.encode(e) }; return this._request.send("database.updateDocument", n).then((function(e) { e.code ? t(0, e) : t(0, { requestId: e.requestId, updated: e.data.updated, upsertId: e.data.upsert_id }) }))["catch"]((function(e) { t(e) })), t.promise }, e.prototype.field = function(t) { for (var n in t) t[n] ? "object" !== (0, i["default"])(t[n]) && (t[n] = 1) : t[n] = 0; var r = d({}, this._queryOptions); return r.projection = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, r) }, e.prototype.remove = function(e) { e = e || (0, o.createPromiseCallback)(), Object.keys(this._queryOptions).length > 0 && console.warn("`offset`, `limit` and `projection` are not supported in remove() operation"), this._fieldOrders.length > 0 && console.warn("`orderBy` is not supported in remove() operation"); var t = { collectionName: this._coll, query: f.QuerySerializer.encode(this._fieldFilters), queryType: s.QueryType.WHERE, multi: !0 }; return this._request.send("database.deleteDocument", t).then((function(t) { t.code ? e(0, t) : e(0, { requestId: t.requestId, deleted: t.data.deleted }) }))["catch"]((function(t) { e(t) })), e.promise }, e
                        }();
                    t.Query = h
                },
                1250: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.RegExpConstructor = function(e) { return new i(e) }, t.RegExp = void 0;
                    var r = n(2352),
                        i = function() {
                            function e(e) {
                                var t = e.regexp,
                                    n = e.options;
                                if (!t) throw new TypeError("regexp must be a string");
                                this.$regex = t, this.$options = n
                            }
                            return e.prototype.parse = function() { return { $regex: this.$regex, $options: this.$options } }, Object.defineProperty(e.prototype, "_internalType", { get: function() { return r.SYMBOL_REGEXP }, enumerable: !0, configurable: !0 }), e
                        }();
                    t.RegExp = i
                },
                4953: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.flattenQueryObject = function(e) { return a(e, c, [], [e]) }, t.flattenObject = function(e) { return a(e, (function(e) { return !1 }), [], [e]) }, t.mergeConditionAfterEncode = function(e, t, n) { for (var i in t[n] || delete e[n], t) e[i] ? (0, r.isArray)(e[i]) ? e[i].push(t[i]) : (0, r.isObject)(e[i]) ? (0, r.isObject)(t[i]) ? Object.assign(e[i], t[i]) : (console.warn("unmergable condition, query is object but condition is " + (0, r.getType)(t) + ", can only overwrite", t, n), e[i] = t[i]) : (console.warn("to-merge query is of type " + (0, r.getType)(e) + ", can only overwrite", e, t, n), e[i] = t[i]) : e[i] = t[i] }, t.isConversionRequired = c, t.encodeInternalDataType = function(e) { return (0, i.serialize)(e) }, t.decodeInternalDataType = function(e) { return (0, i.deserialize)(e) };
                    var r = n(3703),
                        i = n(9272),
                        o = function() {
                            return (o = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        s = function(e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var r, i, o = n.call(e),
                                s = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                            } catch (u) { i = { error: u } } finally { try { r && !r.done && (n = o["return"]) && n.call(o) } finally { if (i) throw i.error } }
                            return s
                        },
                        u = function() { for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t])); return e };

                    function a(e, t, n, i) {
                        var s = o({}, e);
                        for (var c in e)
                            if (!/^\$/.test(c)) {
                                var f = e[c];
                                if (f && (0, r.isObject)(f) && !t(f)) {
                                    if (i.indexOf(f) > -1) throw new Error("Cannot convert circular structure to JSON");
                                    var l = a(f, t, u(n, [c]), u(i, [f]));
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
                        var t = u({}, e);
                        for (var n in t) switch (n) {
                            case "$date":
                                switch ((0, i.getType)(t[n])) {
                                    case "number":
                                        return new Date(t[n]);
                                    case "object":
                                        return new s.ServerDate(t[n])
                                }
                                break;
                            case "type":
                                switch (t.type) {
                                    case "Point":
                                        if ((0, i.isArray)(t.coordinates) && (0, i.isNumber)(t.coordinates[0]) && (0, i.isNumber)(t.coordinates[1])) return new o.Point(t.coordinates[0], t.coordinates[1])
                                }
                        }
                        return e
                    };
                    var r = n(2352),
                        i = n(3703),
                        o = n(7685),
                        s = n(1312),
                        u = function() {
                            return (u = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        a = function(e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var r, i, o = n.call(e),
                                s = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                            } catch (u) { i = { error: u } } finally { try { r && !r.done && (n = o["return"]) && n.call(o) } finally { if (i) throw i.error } }
                            return s
                        },
                        c = function() { for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(a(arguments[t])); return e };

                    function f(e, t) {
                        if (!(0, i.isInternalObject)(e)) {
                            if ((0, i.isDate)(e)) return { $date: +e };
                            if ((0, i.isRegExp)(e)) return { $regex: e.source, $options: e.flags };
                            if ((0, i.isArray)(e)) return e.map((function(e) { if (t.indexOf(e) > -1) throw new Error("Cannot convert circular structure to JSON"); return f(e, c(t, [e])) }));
                            if ((0, i.isObject)(e)) {
                                var n = u({}, e);
                                for (var o in n) {
                                    if (t.indexOf(n[o]) > -1) throw new Error("Cannot convert circular structure to JSON");
                                    n[o] = f(n[o], c(t, [n[o]]))
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
                        i = n(85),
                        o = n(2352),
                        s = n(3703),
                        u = n(5085),
                        a = n(4953),
                        c = function() {
                            function e() {}
                            return e.encode = function(e) { return (new f).encodeQuery(e) }, e
                        }();
                    t.QuerySerializer = c;
                    var f = function() {
                        function e() {}
                        return e.prototype.encodeQuery = function(e, t) { var n; return (0, a.isConversionRequired)(e) ? (0, i.isLogicCommand)(e) ? this.encodeLogicCommand(e) : (0, r.isQueryCommand)(e) ? this.encodeQueryCommand(e) : ((n = {})[t] = this.encodeQueryObject(e), n) : (0, s.isObject)(e) ? this.encodeQueryObject(e) : e }, e.prototype.encodeRegExp = function(e) { return { $regex: e.source, $options: e.flags } }, e.prototype.encodeLogicCommand = function(e) {
                            var t, n, r, o, a, c, f, l = this;
                            switch (e.operator) {
                                case i.LOGIC_COMMANDS_LITERAL.NOR:
                                case i.LOGIC_COMMANDS_LITERAL.AND:
                                case i.LOGIC_COMMANDS_LITERAL.OR:
                                    var p = (0, u.operatorToString)(e.operator),
                                        d = e.operands.map((function(t) { return l.encodeQuery(t, e.fieldName) }));
                                    return (t = {})[p] = d, t;
                                case i.LOGIC_COMMANDS_LITERAL.NOT:
                                    p = (0, u.operatorToString)(e.operator);
                                    var h = e.operands[0];
                                    return (0, s.isRegExp)(h) ? ((n = {})[e.fieldName] = ((r = {})[p] = this.encodeRegExp(h), r), n) : (d = this.encodeQuery(h)[e.fieldName], (o = {})[e.fieldName] = ((a = {})[p] = d, a), o);
                                default:
                                    if (p = (0, u.operatorToString)(e.operator), 1 === e.operands.length) { var y = this.encodeQuery(e.operands[0]); return (c = {})[p] = y, c }
                                    return d = e.operands.map(this.encodeQuery.bind(this)), (f = {})[p] = d, f
                            }
                        }, e.prototype.encodeQueryCommand = function(e) { return (0, r.isComparisonCommand)(e), this.encodeComparisonCommand(e) }, e.prototype.encodeComparisonCommand = function(e) {
                            var t, n, i, s, c, f, l, p, d;
                            if (e.fieldName === o.SYMBOL_UNSET_FIELD_NAME) throw new Error("Cannot encode a comparison command with unset field name");
                            var h = (0, u.operatorToString)(e.operator);
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
                                    return (t = {})[e.fieldName] = ((n = {})[h] = (0, a.encodeInternalDataType)(e.operands[0]), n), t;
                                case r.QUERY_COMMANDS_LITERAL.IN:
                                case r.QUERY_COMMANDS_LITERAL.NIN:
                                case r.QUERY_COMMANDS_LITERAL.ALL:
                                    return (i = {})[e.fieldName] = ((s = {})[h] = (0, a.encodeInternalDataType)(e.operands), s), i;
                                case r.QUERY_COMMANDS_LITERAL.GEO_NEAR:
                                    var y = e.operands[0];
                                    return (c = {})[e.fieldName] = { $nearSphere: { $geometry: y.geometry.toJSON(), $maxDistance: y.maxDistance, $minDistance: y.minDistance } }, c;
                                case r.QUERY_COMMANDS_LITERAL.GEO_WITHIN:
                                    return y = e.operands[0], (f = {})[e.fieldName] = { $geoWithin: { $geometry: y.geometry.toJSON() } }, f;
                                case r.QUERY_COMMANDS_LITERAL.GEO_INTERSECTS:
                                    return y = e.operands[0], (l = {})[e.fieldName] = { $geoIntersects: { $geometry: y.geometry.toJSON() } }, l;
                                default:
                                    return (p = {})[e.fieldName] = ((d = {})[h] = (0, a.encodeInternalDataType)(e.operands[0]), d), p
                            }
                        }, e.prototype.encodeQueryObject = function(e) {
                            var t = (0, a.flattenQueryObject)(e);
                            for (var n in t) {
                                var o = t[n];
                                if ((0, i.isLogicCommand)(o)) {
                                    t[n] = o._setFieldName(n);
                                    var s = this.encodeLogicCommand(t[n]);
                                    this.mergeConditionAfterEncode(t, s, n)
                                } else(0, r.isComparisonCommand)(o) ? (t[n] = o._setFieldName(n), s = this.encodeComparisonCommand(t[n]), this.mergeConditionAfterEncode(t, s, n)) : (0, a.isConversionRequired)(o) && (t[n] = (0, a.encodeInternalDataType)(o))
                            }
                            return t
                        }, e.prototype.mergeConditionAfterEncode = function(e, t, n) { for (var r in t[n] || delete e[n], t) e[r] ? (0, s.isArray)(e[r]) ? e[r] = e[r].concat(t[r]) : (0, s.isObject)(e[r]) ? (0, s.isObject)(t[r]) ? Object.assign(e, t) : (console.warn("unmergable condition, query is object but condition is " + (0, s.getType)(t) + ", can only overwrite", t, n), e[r] = t[r]) : (console.warn("to-merge query is of type " + (0, s.getType)(e) + ", can only overwrite", e, t, n), e[r] = t[r]) : e[r] = t[r] }, e
                    }()
                },
                5323: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.UpdateSerializer = void 0;
                    var r = n(982),
                        i = n(2352),
                        o = n(3703),
                        s = n(5085),
                        u = n(4953),
                        a = function() {
                            function e() {}
                            return e.encode = function(t) { return (new e).encodeUpdate(t) }, e.prototype.encodeUpdate = function(e) { return (0, r.isUpdateCommand)(e) ? this.encodeUpdateCommand(e) : "object" === (0, o.getType)(e) ? this.encodeUpdateObject(e) : e }, e.prototype.encodeUpdateCommand = function(e) {
                                if (e.fieldName === i.SYMBOL_UNSET_FIELD_NAME) throw new Error("Cannot encode a comparison command with unset field name");
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
                                var t, n, i, o, u = (0, s.operatorToString)(e.operator);
                                switch (e.operator) {
                                    case r.UPDATE_COMMANDS_LITERAL.REMOVE:
                                        return (t = {})[u] = ((n = {})[e.fieldName] = "", n), t;
                                    default:
                                        return (i = {})[u] = ((o = {})[e.fieldName] = e.operands[0], o), i
                                }
                            }, e.prototype.encodeArrayUpdateCommand = function(e) {
                                var t, n, i, a, c, f, l, p, d, h, y = (0, s.operatorToString)(e.operator);
                                switch (e.operator) {
                                    case r.UPDATE_COMMANDS_LITERAL.PUSH:
                                        var g = void 0;
                                        return g = (0, o.isArray)(e.operands) ? { $each: e.operands.map(u.encodeInternalDataType) } : e.operands, (t = {})[y] = ((n = {})[e.fieldName] = g, n), t;
                                    case r.UPDATE_COMMANDS_LITERAL.UNSHIFT:
                                        return g = { $each: e.operands.map(u.encodeInternalDataType), $position: 0 }, (i = {})[y] = ((a = {})[e.fieldName] = g, a), i;
                                    case r.UPDATE_COMMANDS_LITERAL.POP:
                                        return (c = {})[y] = ((f = {})[e.fieldName] = 1, f), c;
                                    case r.UPDATE_COMMANDS_LITERAL.SHIFT:
                                        return (l = {})[y] = ((p = {})[e.fieldName] = -1, p), l;
                                    default:
                                        return (d = {})[y] = ((h = {})[e.fieldName] = (0, u.encodeInternalDataType)(e.operands), h), d
                                }
                            }, e.prototype.encodeUpdateObject = function(e) {
                                var t = (0, u.flattenQueryObject)(e);
                                for (var n in t)
                                    if (!/^\$/.test(n)) {
                                        var i = t[n];
                                        if ((0, r.isUpdateCommand)(i)) {
                                            t[n] = i._setFieldName(n);
                                            var o = this.encodeUpdateCommand(t[n]);
                                            (0, u.mergeConditionAfterEncode)(t, o, n)
                                        } else {
                                            t[n] = i = (0, u.encodeInternalDataType)(i);
                                            var s = new r.UpdateCommand(r.UPDATE_COMMANDS_LITERAL.SET, [i], n);
                                            o = this.encodeUpdateCommand(s), (0, u.mergeConditionAfterEncode)(t, o, n)
                                        }
                                    }
                                return t
                            }, e
                        }();
                    t.UpdateSerializer = a
                },
                1312: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.ServerDateConstructor = function(e) { return new i(e) }, t.ServerDate = void 0;
                    var r = n(2352),
                        i = function() {
                            function e(e) {
                                var t = (void 0 === e ? {} : e).offset,
                                    n = void 0 === t ? 0 : t;
                                this.offset = n
                            }
                            return Object.defineProperty(e.prototype, "_internalType", { get: function() { return r.SYMBOL_SERVER_DATE }, enumerable: !0, configurable: !0 }), e.prototype.parse = function() { return { $date: { offset: this.offset } } }, e
                        }();
                    t.ServerDate = i
                },
                4452: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.CollectionReference = void 0;
                    var r, i = n(6171),
                        o = n(5039),
                        s = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        u = function(e) {
                            function t(t, n) { return e.call(this, t, n) || this }
                            return s(t, e), Object.defineProperty(t.prototype, "name", { get: function() { return this._coll }, enumerable: !0, configurable: !0 }), t.prototype.doc = function(e) { if ("string" != typeof e && "number" != typeof e) throw new Error("docId必须为字符串或数字"); return new i.DocumentReference(this._transaction, this._coll, e) }, t.prototype.add = function(e) { var t; return e._id !== undefined && (t = e._id), new i.DocumentReference(this._transaction, this._coll, t).create(e) }, t
                        }(o.Query);
                    t.CollectionReference = u
                },
                6171: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.DocumentReference = void 0;
                    var r = n(7567),
                        i = n(5029),
                        o = n(5323),
                        s = n(9272),
                        u = n(9833),
                        a = function() {
                            return (a = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        c = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        f = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        l = "database.updateDocInTransaction",
                        p = function() {
                            function e(e, t, n) { this._coll = t, this.id = n, this._transaction = e, this._request = this._transaction.getRequestMethod(), this._transactionId = this._transaction.getTransactionId() }
                            return e.prototype.create = function(e) {
                                return c(this, void 0, void 0, (function() {
                                    var t, n, o, u;
                                    return f(this, (function(c) {
                                        switch (c.label) {
                                            case 0:
                                                return t = { collectionName: this._coll, transactionId: this._transactionId, data: r.EJSON.stringify((0, s.serialize)(e), { relaxed: !1 }) }, this.id && (t._id = this.id), [4, this._request.send("database.insertDocInTransaction", t)];
                                            case 1:
                                                if ((n = c.sent()).code) throw n;
                                                if (o = r.EJSON.parse(n.inserted), 1 == (u = r.EJSON.parse(n.ok)) && 1 == o) return [2, a(a({}, n), { ok: u, inserted: o })];
                                                throw new Error(i.ERRORS.INSERT_DOC_FAIL.message)
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
                                                return [2, { data: "null" !== t.data ? u.Util.formatField(r.EJSON.parse(t.data)) : r.EJSON.parse(t.data), requestId: t.requestId }]
                                        }
                                    }))
                                }))
                            }, e.prototype.set = function(e) {
                                return c(this, void 0, void 0, (function() {
                                    var t, n;
                                    return f(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return t = { collectionName: this._coll, transactionId: this._transactionId, query: { _id: { $eq: this.id } }, data: r.EJSON.stringify((0, s.serialize)(e), { relaxed: !1 }), upsert: !0 }, [4, this._request.send(l, t)];
                                            case 1:
                                                if ((n = i.sent()).code) throw n;
                                                return [2, a(a({}, n), { updated: r.EJSON.parse(n.updated), upserted: n.upserted ? JSON.parse(n.upserted) : null })]
                                        }
                                    }))
                                }))
                            }, e.prototype.update = function(e) {
                                return c(this, void 0, void 0, (function() {
                                    var t, n;
                                    return f(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return t = { collectionName: this._coll, transactionId: this._transactionId, query: { _id: { $eq: this.id } }, data: r.EJSON.stringify(o.UpdateSerializer.encode(e), { relaxed: !1 }) }, [4, this._request.send(l, t)];
                                            case 1:
                                                if ((n = i.sent()).code) throw n;
                                                return [2, a(a({}, n), { updated: r.EJSON.parse(n.updated) })]
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
                                                return [2, a(a({}, t), { deleted: r.EJSON.parse(t.deleted) })]
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
                            return u(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, (e = new a(this)).init()];
                                    case 1:
                                        return t.sent(), [2, e]
                                }
                            }))
                        }))
                    }, t.runTransaction = function c(e, t) {
                        return void 0 === t && (t = 3), s(this, void 0, void 0, (function() {
                            var n, r, i, f, l = this;
                            return u(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        return p.trys.push([0, 4, , 10]), [4, (n = new a(this)).init()];
                                    case 1:
                                        return p.sent(), [4, e(n)];
                                    case 2:
                                        if (r = p.sent(), !0 === n.aborted) throw n.abortReason;
                                        return [4, n.commit()];
                                    case 3:
                                        return p.sent(), [2, r];
                                    case 4:
                                        if (i = p.sent(), !1 === n.inited) throw i;
                                        return f = function(e) {
                                            return s(l, void 0, void 0, (function() {
                                                return u(this, (function(t) {
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
                                        }, t <= 0 ? [4, f(i)] : [3, 6];
                                    case 5:
                                        p.sent(), p.label = 6;
                                    case 6:
                                        return i && i.code === o.ERRORS.DATABASE_TRANSACTION_CONFLICT.code ? [4, c.bind(this)(e, --t)] : [3, 8];
                                    case 7:
                                        return [2, p.sent()];
                                    case 8:
                                        return [4, f(i)];
                                    case 9:
                                        return p.sent(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.Transaction = void 0;
                    var r = n(5938),
                        i = n(4452),
                        o = n(5029),
                        s = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        u = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        a = function() {
                            function e(e) { this._db = e, this._request = new r.Db.reqClass(this._db.config), this.aborted = !1, this.commited = !1, this.inited = !1 }
                            return e.prototype.init = function() {
                                return s(this, void 0, void 0, (function() {
                                    var e;
                                    return u(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, this._request.send("database.startTransaction")];
                                            case 1:
                                                if ((e = t.sent()).code) throw e;
                                                return this.inited = !0, this._id = e.transactionId, [2]
                                        }
                                    }))
                                }))
                            }, e.prototype.collection = function(e) { if (!e) throw new Error("Collection name is required"); return new i.CollectionReference(this, e) }, e.prototype.getTransactionId = function() { return this._id }, e.prototype.getRequestMethod = function() { return this._request }, e.prototype.commit = function() {
                                return s(this, void 0, void 0, (function() {
                                    var e, t;
                                    return u(this, (function(n) {
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
                                    return u(this, (function(r) {
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
                    t.Transaction = a
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
                        i = n(7685),
                        o = n(1312),
                        s = function(e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var r, i, o = n.call(e),
                                s = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                            } catch (u) { i = { error: u } } finally { try { r && !r.done && (n = o["return"]) && n.call(o) } finally { if (i) throw i.error } }
                            return s
                        },
                        u = function() {
                            function e() {}
                            return e.formatResDocumentData = function(t) { return t.map((function(t) { return e.formatField(t) })) }, e.formatField = function(t) {
                                var n = Object.keys(t),
                                    o = {};
                                return Array.isArray(t) && (o = []), n.forEach((function(n) {
                                    var u, a = t[n];
                                    switch (e.whichType(a)) {
                                        case r.FieldType.GeoPoint:
                                            u = new i.Point(a.coordinates[0], a.coordinates[1]);
                                            break;
                                        case r.FieldType.GeoLineString:
                                            u = new i.LineString(a.coordinates.map((function(e) { return new i.Point(e[0], e[1]) })));
                                            break;
                                        case r.FieldType.GeoPolygon:
                                            u = new i.Polygon(a.coordinates.map((function(e) {
                                                return new i.LineString(e.map((function(e) {
                                                    var t = s(e, 2),
                                                        n = t[0],
                                                        r = t[1];
                                                    return new i.Point(n, r)
                                                })))
                                            })));
                                            break;
                                        case r.FieldType.GeoMultiPoint:
                                            u = new i.MultiPoint(a.coordinates.map((function(e) { return new i.Point(e[0], e[1]) })));
                                            break;
                                        case r.FieldType.GeoMultiLineString:
                                            u = new i.MultiLineString(a.coordinates.map((function(e) {
                                                return new i.LineString(e.map((function(e) {
                                                    var t = s(e, 2),
                                                        n = t[0],
                                                        r = t[1];
                                                    return new i.Point(n, r)
                                                })))
                                            })));
                                            break;
                                        case r.FieldType.GeoMultiPolygon:
                                            u = new i.MultiPolygon(a.coordinates.map((function(e) {
                                                return new i.Polygon(e.map((function(e) {
                                                    return new i.LineString(e.map((function(e) {
                                                        var t = s(e, 2),
                                                            n = t[0],
                                                            r = t[1];
                                                        return new i.Point(n, r)
                                                    })))
                                                })))
                                            })));
                                            break;
                                        case r.FieldType.Timestamp:
                                            u = new Date(1e3 * a.$timestamp);
                                            break;
                                        case r.FieldType.Object:
                                        case r.FieldType.Array:
                                            u = e.formatField(a);
                                            break;
                                        case r.FieldType.ServerDate:
                                            u = new Date(a.$date);
                                            break;
                                        default:
                                            u = a
                                    }
                                    Array.isArray(o) ? o.push(u) : o[n] = u
                                })), o
                            }, e.whichType = function(e) {
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if (t === r.FieldType.Timestamp) return r.FieldType.BsonDate;
                                if (t === r.FieldType.Object) {
                                    if (e instanceof i.Point) return r.FieldType.GeoPoint;
                                    if (e instanceof Date) return r.FieldType.Timestamp;
                                    if (e instanceof o.ServerDate) return r.FieldType.ServerDate;
                                    e.$timestamp ? t = r.FieldType.Timestamp : e.$date ? t = r.FieldType.ServerDate : i.Point.validate(e) ? t = r.FieldType.GeoPoint : i.LineString.validate(e) ? t = r.FieldType.GeoLineString : i.Polygon.validate(e) ? t = r.FieldType.GeoPolygon : i.MultiPoint.validate(e) ? t = r.FieldType.GeoMultiPoint : i.MultiLineString.validate(e) ? t = r.FieldType.GeoMultiLineString : i.MultiPolygon.validate(e) && (t = r.FieldType.GeoMultiPolygon)
                                }
                                return t
                            }, e.generateDocId = function() { for (var e = "ABCDEFabcdef0123456789", t = "", n = 0; n < 24; n++) t += e.charAt(Math.floor(Math.random() * e.length)); return t }, e
                        }();
                    t.Util = u
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
                        i = [],
                        o = {},
                        s = function(e) {
                            function t(t, n) { if (n !== o) throw new TypeError("InternalSymbol cannot be constructed with new operator"); return e.call(this, t) || this }
                            return r(t, e), t["for"] = function(e) {
                                for (var n = 0, r = i.length; n < r; n++)
                                    if (i[n].target === e) return i[n].instance;
                                var s = new t(e, o);
                                return i.push({ target: e, instance: s }), s
                            }, t
                        }((function(e) { Object.defineProperties(this, { target: { enumerable: !1, writable: !1, configurable: !1, value: e } }) }));
                    t.InternalSymbol = s;
                    var u = s;
                    t["default"] = u
                },
                3703: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.isPlainObject = t.isInternalObject = t.isRegExp = t.isDate = t.isArray = t.isFunction = t.isPromise = t.isNumber = t.isString = t.isObject = t.getType = void 0;
                    var i = r(n(3988)),
                        o = n(7471),
                        s = function(e) { return Object.prototype.toString.call(e).slice(8, -1).toLowerCase() };
                    t.getType = s, t.isObject = function(e) { return "object" === s(e) }, t.isString = function(e) { return "string" === s(e) }, t.isNumber = function(e) { return "number" === s(e) }, t.isPromise = function(e) { return "promise" === s(e) }, t.isFunction = function(e) { return "function" == typeof e }, t.isArray = function(e) { return Array.isArray(e) }, t.isDate = function(e) { return "date" === s(e) }, t.isRegExp = function(e) { return "regexp" === s(e) }, t.isInternalObject = function(e) { return e && e._internalType instanceof o.InternalSymbol }, t.isPlainObject = function(e) { if ("object" !== (0, i["default"])(e) || null === e) return !1; for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t); return Object.getPrototypeOf(e) === t }
                },
                64: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.getWsInstance = function(e) { if (!r.Db.wsClientClass) throw new Error("to use realtime you must import realtime module first"); var t = e.config.env; return o[t] || (o[t] = new r.Db.wsClientClass({ context: { appConfig: { docSizeLimit: 1e3, realtimePingInterval: 1e4, realtimePongWaitTimeout: 5e3, request: new r.Db.reqClass(e.config) } } })), o[t] }, t.autoCount = t.sleep = void 0;
                    var r = n(5938);
                    t.sleep = function(e) { return void 0 === e && (e = 0), new Promise((function(t) { return setTimeout(t, e) })) };
                    var i = {};
                    t.autoCount = function(e) { return void 0 === e && (e = "any"), i[e] || (i[e] = 0), i[e]++ };
                    var o = {}
                },
                3228: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.Validate = void 0;
                    var r = n(7785),
                        i = n(9833),
                        o = function() {
                            function e() {}
                            return e.isGeopoint = function(e, t) { if (i.Util.whichType(t) !== r.FieldType.Number) throw new Error("Geo Point must be number type"); var n = Math.abs(t); if ("latitude" === e && n > 90) throw new Error("latitude should be a number ranges from -90 to 90"); if ("longitude" === e && n > 180) throw new Error("longitude should be a number ranges from -180 to 180"); return !0 }, e.isInteger = function(e, t) { if (!Number.isInteger(t)) throw new Error(e + r.ErrorCode.IntergerError); return !0 }, e.isFieldOrder = function(e) { if (-1 === r.OrderDirectionList.indexOf(e)) throw new Error(r.ErrorCode.DirectionError); return !0 }, e.isFieldPath = function(e) { if (!/^[a-zA-Z0-9-_\.]/.test(e)) throw new Error; return !0 }, e.isOperator = function(e) { if (-1 === r.WhereFilterOpList.indexOf(e)) throw new Error(r.ErrorCode.OpStrError); return !0 }, e.isCollName = function(e) { if (!/^[a-zA-Z0-9]([a-zA-Z0-9-_]){1,32}$/.test(e)) throw new Error(r.ErrorCode.CollNameError); return !0 }, e.isDocID = function(e) { if (!/^([a-fA-F0-9]){24}$/.test(e)) throw new Error(r.ErrorCode.DocIDError); return !0 }, e
                        }();
                    t.Validate = o
                },
                1825: function(e, t, n) {
                    "use strict";
                    var r = Object.create ? function(e, t, n, r) { r === undefined && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, r) { r === undefined && (r = n), e[r] = t[n] },
                        i = Object.create ? function(e, t) { Object.defineProperty(e, "default", { enumerable: !0, value: t }) } : function(e, t) { e["default"] = t },
                        o = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                            return i(t, e), t
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.useDefaultAdapter = t.useAdapters = t.RUNTIME = void 0;
                    var s, u = o(n(9651)),
                        a = n(4224);
                    ! function(e) { e.WEB = "web", e.WX_MP = "wx_mp" }(s = t.RUNTIME || (t.RUNTIME = {})), t.useAdapters = function(e) {
                        for (var t = 0, n = a.isArray(e) ? e : [e]; t < n.length; t++) {
                            var r = n[t],
                                i = r.isMatch,
                                o = r.genAdapter,
                                s = r.runtime;
                            if (i()) return { adapter: o(), runtime: s }
                        }
                    }, t.useDefaultAdapter = function() { return { adapter: u.genAdapter(), runtime: s.WEB } }
                },
                9651: function(e, t, n) {
                    "use strict";
                    var r, i = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        o = function() {
                            return (o = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        s = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        u = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.WebRequest = t.genAdapter = void 0;
                    var a = n(1588),
                        c = n(4224),
                        f = n(2595),
                        l = function(e) {
                            function t(t) {
                                var n = e.call(this) || this,
                                    r = t.timeout,
                                    i = t.timeoutMsg,
                                    o = t.restrictedMethods;
                                return n._timeout = r || 0, n._timeoutMsg = i || "请求超时", n._restrictedMethods = o || ["get", "post", "upload", "download"], n
                            }
                            return i(t, e), t.prototype.get = function(e) { return this._request(o(o({}, e), { method: "get" }), this._restrictedMethods.includes("get")) }, t.prototype.post = function(e) { return this._request(o(o({}, e), { method: "post" }), this._restrictedMethods.includes("post")) }, t.prototype.put = function(e) { return this._request(o(o({}, e), { method: "put" })) }, t.prototype.upload = function(e) {
                                var t = e.data,
                                    n = e.file,
                                    r = e.name,
                                    i = new FormData;
                                for (var s in t) i.append(s, t[s]);
                                return i.append("key", r), i.append("file", n), this._request(o(o({}, e), { data: i, method: "post" }), this._restrictedMethods.includes("upload"))
                            }, t.prototype.download = function(e) {
                                return s(this, void 0, void 0, (function() {
                                    var t, n, r, i;
                                    return u(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return s.trys.push([0, 2, , 3]), [4, this.get(o(o({}, e), { headers: {}, responseType: "blob" }))];
                                            case 1:
                                                return t = s.sent().data, n = window.URL.createObjectURL(new Blob([t])), r = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || ""), (i = document.createElement("a")).href = n, i.setAttribute("download", r), i.style.display = "none", document.body.appendChild(i), i.click(), window.URL.revokeObjectURL(n), document.body.removeChild(i), [3, 3];
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
                                return new Promise((function(i) {
                                    var o, s, u = e.url,
                                        a = e.headers,
                                        l = void 0 === a ? {} : a,
                                        p = e.data,
                                        d = e.responseType,
                                        h = e.withCredentials,
                                        y = e.body,
                                        g = e.onUploadProgress,
                                        v = c.formatUrl(f.getProtocol(), u, "get" === r ? p : {}),
                                        _ = new XMLHttpRequest;
                                    for (var m in _.open(r, v), d && (_.responseType = d), l) _.setRequestHeader(m, l[m]);
                                    g && _.upload.addEventListener("progress", g), _.onreadystatechange = function() {
                                        var e = {};
                                        if (4 === _.readyState) {
                                            var t = _.getAllResponseHeaders().trim().split(/[\r\n]+/),
                                                n = {};
                                            t.forEach((function(e) {
                                                var t = e.split(": "),
                                                    r = t.shift().toLowerCase(),
                                                    i = t.join(": ");
                                                n[r] = i
                                            })), e.header = n, e.statusCode = _.status;
                                            try { e.data = "blob" === d ? _.response : JSON.parse(_.responseText) } catch (r) { e.data = "blob" === d ? _.response : _.responseText }
                                            clearTimeout(o), i(e)
                                        }
                                    }, t && n._timeout && (o = setTimeout((function() { console.warn(n._timeoutMsg), _.abort() }), n._timeout)), s = c.isFormData(p) ? p : "application/x-www-form-urlencoded" === l["content-type"] ? c.toQueryString(p) : y || (p ? JSON.stringify(p) : undefined), h && (_.withCredentials = !0), _.send(s)
                                }))
                            }, t
                        }(a.AbstractSDKRequest);
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
                        i = function(e, t) { for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n) };
                    Object.defineProperty(t, "__esModule", { value: !0 }), i(n(2595), t), i(n(8511), t)
                },
                9891: function(e, t, n) {
                    "use strict";
                    var r = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        i = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.catchErrorsDecorator = void 0;
                    var o = n(4224),
                        s = n(6823),
                        u = !1;
                    "undefined" != typeof navigator && navigator.userAgent && (u = -1 !== navigator.userAgent.indexOf("Firefox"));
                    var a = u ? /(\.js\/)?__decorate(\$\d+)?<@.*\d$/ : /(\/\w+\.js\.)?__decorate(\$\d+)?\s*\(.*\)$/,
                        c = /https?\:\/\/.+\:\d*\/.*\.js\:\d+\:\d+/;

                    function f(e) {
                        var t = e.err,
                            n = e.className,
                            r = e.methodName,
                            i = e.sourceLink;
                        if (!i) return null;
                        var o, s = t.stack.split("\n"),
                            a = u ? /^catchErrorsDecorator\/<\/descriptor.value@.*\d$/ : new RegExp(n + "\\.descriptor.value\\s*\\[as\\s" + r + "\\]\\s*\\(.*\\)$"),
                            f = u ? /^catchErrorsDecorator\/<\/descriptor.value/ : new RegExp(n + "\\.descriptor.value\\s*\\[as\\s" + r + "\\]"),
                            l = s.findIndex((function(e) { return a.test(e) }));
                        if (-1 !== l) {
                            var p = s.filter((function(e, t) { return t > l }));
                            p.unshift(s[l].replace(f, n + "." + r).replace(c, i)), (o = new Error).stack = (u ? "@debugger" : "Error") + "\n" + p.join("\n")
                        }
                        return o
                    }
                    t.catchErrorsDecorator = function(e) {
                        var t = e.mode,
                            n = void 0 === t ? "async" : t,
                            u = e.customInfo,
                            l = void 0 === u ? {} : u,
                            p = e.title,
                            d = e.messages,
                            h = void 0 === d ? [] : d;
                        return function(e, t, u) {
                            if (s.IS_DEBUG_MODE) {
                                var d = l.className || e.constructor.name,
                                    y = l.methodName || t,
                                    g = u.value,
                                    v = function(e) {
                                        var t = "",
                                            n = e.stack.split("\n"),
                                            r = n.findIndex((function(e) { return a.test(e) }));
                                        if (-1 !== r) {
                                            var i = c.exec(n[r + 1] || "");
                                            t = i ? i[0] : ""
                                        }
                                        return t
                                    }(new Error);
                                u.value = "sync" === n ? function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var n = f({ err: new Error, className: d, methodName: y, sourceLink: v });
                                    try { return g.apply(this, e) } catch (a) {
                                        var r = a,
                                            i = a.message,
                                            s = { title: p || d + "." + y + " failed", content: [{ type: "error", body: a }] };
                                        if (i && /^\{.*\}$/.test(i)) {
                                            var u = JSON.parse(i);
                                            s.subtitle = i, u.code && (n ? (n.code = u.code, n.msg = u.msg) : (a.code = u.code, a.message = u.msg), r = n || a, s.content = h.map((function(e) { return { type: "info", body: e } })))
                                        }
                                        throw o.printGroupLog(s), r
                                    }
                                } : function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    return r(this, void 0, void 0, (function() {
                                        var t, n, r, s, u, a;
                                        return i(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    t = f({ err: new Error, className: d, methodName: y, sourceLink: v }), i.label = 1;
                                                case 1:
                                                    return i.trys.push([1, 3, , 4]), [4, g.apply(this, e)];
                                                case 2:
                                                    return [2, i.sent()];
                                                case 3:
                                                    throw n = i.sent(), r = n, s = n.message, u = { title: p || d + "." + y + " failed", content: [{ type: "error", body: n }] }, s && /^\{.*\}$/.test(s) && (a = JSON.parse(s), u.subtitle = a, a.code && (t ? (t.code = a.code, t.message = a.msg) : (n.code = a.code, n.message = a.msg), r = t || n, u.content = h.map((function(e) { return { type: "info", body: e } })))), o.printGroupLog(u), r;
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
                        i = function(e, t) { for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n) };
                    Object.defineProperty(t, "__esModule", { value: !0 }), i(n(9891), t)
                },
                1895: function(e, t, n) {
                    "use strict";
                    var r = Object.create ? function(e, t, n, r) { r === undefined && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, r) { r === undefined && (r = n), e[r] = t[n] },
                        i = Object.create ? function(e, t) { Object.defineProperty(e, "default", { enumerable: !0, value: t }) } : function(e, t) { e["default"] = t },
                        o = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                            return i(t, e), t
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.helpers = t.utils = t.events = t.cache = t.adapters = t.constants = void 0;
                    var s = o(n(6823));
                    t.constants = s;
                    var u = o(n(1825));
                    t.adapters = u;
                    var a = o(n(2208));
                    t.cache = a;
                    var c = o(n(4047));
                    t.events = c;
                    var f = o(n(4224));
                    t.utils = f;
                    var l = o(n(2647));
                    t.helpers = l
                },
                2208: function(e, t, n) {
                    "use strict";
                    var r, i = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        o = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        s = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.CloudbaseCache = void 0;
                    var u = n(1588),
                        a = n(4224),
                        c = n(6823),
                        f = function(e) {
                            function t(t) { var n = e.call(this) || this; return n._root = t, t.tcbCacheObject || (t.tcbCacheObject = {}), n }
                            return i(t, e), t.prototype.setItem = function(e, t) { this._root.tcbCacheObject[e] = t }, t.prototype.getItem = function(e) { return this._root.tcbCacheObject[e] }, t.prototype.removeItem = function(e) { delete this._root.tcbCacheObject[e] }, t.prototype.clear = function() { delete this._root.tcbCacheObject }, t
                        }(u.AbstractStorage);

                    function l(e, t) {
                        switch (e) {
                            case "local":
                                return t.localStorage ? t.localStorage : (a.printWarn(c.ERRORS.INVALID_PARAMS, "localStorage is not supported on current platform"), new f(t.root));
                            case "none":
                                return new f(t.root);
                            case "session":
                                return t.sessionStorage ? t.sessionStorage : (a.printWarn(c.ERRORS.INVALID_PARAMS, "sessionStorage is not supported on current platform"), new f(t.root));
                            default:
                                return t.localStorage ? t.localStorage : (a.printWarn(c.ERRORS.INVALID_PARAMS, "localStorage is not supported on current platform"), new f(t.root))
                        }
                    }
                    var p = function() {
                        function e(e) {
                            this.keys = {};
                            var t = e.persistence,
                                n = e.platformInfo,
                                r = void 0 === n ? {} : n,
                                i = e.keys,
                                o = void 0 === i ? {} : i,
                                s = e.alwaysLocalKeys,
                                u = void 0 === s ? [] : s;
                            this._platformInfo = r, this._alwaysLocalKeys = u, this._storage || (this._persistence = r.adapter.primaryStorage || t, this._storage = l(this._persistence, r.adapter), this.keys = o)
                        }
                        return Object.defineProperty(e.prototype, "mode", { get: function() { return this._storage.mode || "sync" }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "persistence", { get: function() { return this._persistence }, enumerable: !1, configurable: !0 }), e.prototype.updatePersistence = function(e) {
                            if ("async" !== this.mode) {
                                if (e !== this._persistence) {
                                    var t = "local" === this._persistence;
                                    this._persistence = e;
                                    var n = l(e, this._platformInfo.adapter);
                                    for (var r in this.keys) {
                                        var i = this.keys[r];
                                        if (!t || !this._alwaysLocalKeys.includes(r)) {
                                            var o = this._storage.getItem(i);
                                            a.isUndefined(o) || a.isNull(o) || (n.setItem(i, o), this._storage.removeItem(i))
                                        }
                                    }
                                    this._storage = n
                                }
                            } else a.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use updatePersistenceAsync insteed")
                        }, e.prototype.updatePersistenceAsync = function(e) {
                            return o(this, void 0, void 0, (function() {
                                var t, n, r, i, o, u, c, f;
                                return s(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (e === this._persistence) return [2];
                                            for (i in t = "local" === this._persistence, this._persistence = e, n = l(e, this._platformInfo.adapter), r = [], this.keys) r.push(i);
                                            o = 0, s.label = 1;
                                        case 1:
                                            return o < r.length ? (u = r[o], c = this.keys[u], t && this._alwaysLocalKeys.includes(u) ? [3, 4] : [4, this._storage.getItem(c)]) : [3, 5];
                                        case 2:
                                            return f = s.sent(), a.isUndefined(f) || a.isNull(f) ? [3, 4] : (n.setItem(c, f), [4, this._storage.removeItem(c)]);
                                        case 3:
                                            s.sent(), s.label = 4;
                                        case 4:
                                            return o++, [3, 1];
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
                                } catch (i) { throw new Error(JSON.stringify({ code: c.ERRORS.OPERATION_FAIL, msg: "[" + c.getSdkName() + "][" + c.ERRORS.OPERATION_FAIL + "]setStore failed", info: i })) }
                            } else a.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use setStoreAsync insteed")
                        }, e.prototype.setStoreAsync = function(e, t, n) {
                            return o(this, void 0, void 0, (function() {
                                var r;
                                return s(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this._storage) return [2];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), r = { version: n || "localCachev1", content: t }, [4, this._storage.setItem(e, JSON.stringify(r))];
                                        case 2:
                                            return i.sent(), [3, 4];
                                        case 3:
                                            return i.sent(), [2];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.prototype.getStore = function(e, t) {
                            var n;
                            if ("async" !== this.mode) {
                                try { if ("undefined" != typeof process && (null === (n = process.env) || void 0 === n ? void 0 : n.tcb_token)) return process.env.tcb_token; if (!this._storage) return "" } catch (i) { return "" }
                                t = t || "localCachev1";
                                var r = this._storage.getItem(e);
                                return r && r.indexOf(t) >= 0 ? JSON.parse(r).content : ""
                            }
                            a.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use getStoreAsync insteed")
                        }, e.prototype.getStoreAsync = function(e, t) {
                            var n;
                            return o(this, void 0, void 0, (function() {
                                var r;
                                return s(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            try { if ("undefined" != typeof process && (null === (n = process.env) || void 0 === n ? void 0 : n.tcb_token)) return [2, process.env.tcb_token]; if (!this._storage) return [2, ""] } catch (o) { return [2, ""] }
                                            return t = t || "localCachev1", [4, this._storage.getItem(e)];
                                        case 1:
                                            return (r = i.sent()) && r.indexOf(t) >= 0 ? [2, JSON.parse(r).content] : [2, ""]
                                    }
                                }))
                            }))
                        }, e.prototype.removeStore = function(e) { "async" !== this.mode ? this._storage.removeItem(e) : a.printWarn(c.ERRORS.INVALID_OPERATION, "current platform's storage is asynchronous, please use removeStoreAsync insteed") }, e.prototype.removeStoreAsync = function(e) {
                            return o(this, void 0, void 0, (function() {
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
                    var r, i = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        o = function() {
                            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                            var r = Array(e),
                                i = 0;
                            for (t = 0; t < n; t++)
                                for (var o = arguments[t], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
                            return r
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.removeEventListener = t.activateEvent = t.addEventListener = t.CloudbaseEventEmitter = t.IErrorEvent = t.CloudbaseEvent = void 0;
                    var s = n(4224),
                        u = function(e, t) { this.data = t || null, this.name = e };
                    t.CloudbaseEvent = u;
                    var a = function(e) {
                        function t(t, n) { var r = e.call(this, "error", { error: t, data: n }) || this; return r.error = t, r }
                        return i(t, e), t
                    }(u);
                    t.IErrorEvent = a;
                    var c = function() {
                        function e() { this._listeners = {} }
                        return e.prototype.on = function(e, t) { return function(e, t, n) { n[e] = n[e] || [], n[e].push(t) }(e, t, this._listeners), this }, e.prototype.off = function(e, t) { return function(e, t, n) { if (null == n ? void 0 : n[e]) { var r = n[e].indexOf(t); - 1 !== r && n[e].splice(r, 1) } }(e, t, this._listeners), this }, e.prototype.fire = function(e, t) {
                            if (s.isInstanceOf(e, a)) return console.error(e.error), this;
                            var n = s.isString(e) ? new u(e, t || {}) : e,
                                r = n.name;
                            if (this._listens(r)) { n.target = this; for (var i = 0, c = this._listeners[r] ? o(this._listeners[r]) : []; i < c.length; i++) c[i].call(this, n) }
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
                    var i = r(n(6443)),
                        o = r(n(4544)),
                        s = r(n(1801)),
                        u = n(6823);

                    function a(e) { var t = o["default"].stringify(e); return t = (t = (t = t.replace(/=+$/, "")).replace(/\+/g, "-")).replace(/\//g, "_") }
                    t.isArray = function(e) { return "[object Array]" === Object.prototype.toString.call(e) }, t.isString = function(e) { return "string" == typeof e }, t.isUndefined = function(e) { return void 0 === e }, t.isPalinObject = function(e) { return "[object Object]" === Object.prototype.toString.call(e) }, t.isNull = function(e) { return "[object Null]" === Object.prototype.toString.call(e) }, t.isInstanceOf = function(e, t) { return e instanceof t }, t.isFormData = function(e) { return "[object FormData]" === Object.prototype.toString.call(e) }, t.genSeqId = function() { return Math.random().toString(16).slice(2) }, t.formatUrl = function(e, t, n) {
                        void 0 === n && (n = {});
                        var r = /\?/.test(t),
                            i = "";
                        for (var o in n) "" === i ? !r && (t += "?") : i += "&", i += o + "=" + encodeURIComponent(n[o]);
                        return /^http(s)?\:\/\//.test(t += i) ? t : "" + e + t
                    }, t.createSign = function(e, t) { var n = a(s["default"].parse(JSON.stringify({ alg: "HS256", typ: "JWT" }))) + "." + a(s["default"].parse(JSON.stringify(e))); return n + "." + a(i["default"](n, t)) }, t.toQueryString = function(e) { void 0 === e && (e = {}); var t = []; for (var n in e) t.push(n + "=" + encodeURIComponent(e[n])); return t.join("&") }, t.getQuery = function(e, t) {
                        if ("undefined" == typeof window) return !1;
                        var n = t || window.location.search,
                            r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                            i = n.substr(n.indexOf("?") + 1).match(r);
                        return null != i ? i[2] : ""
                    }, t.getHash = function(e) { if ("undefined" == typeof window) return ""; var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)")); return t ? t[1] : "" }, t.removeParam = function(e, t) {
                        var n = t.split("?")[0],
                            r = [],
                            i = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
                        if ("" !== i) {
                            for (var o = (r = i.split("&")).length - 1; o >= 0; o -= 1) r[o].split("=")[0] === e && r.splice(o, 1);
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
                    }, t.execCallback = function(e, t, n) { if (void 0 === n && (n = null), e && "function" == typeof e) return e(t, n); if (t) throw t; return n }, t.printWarn = function(e, t) { console.warn("[" + u.getSdkName() + "][" + e + "]:" + t) }, t.printError = function(e, t) { console.error({ code: e, msg: "[" + u.getSdkName() + "][" + e + "]:" + t }) }, t.printInfo = function(e, t) { console.log("[" + u.getSdkName() + "][" + e + "]:" + t) }, t.throwError = function(e, t) { throw new Error(JSON.stringify({ code: e, msg: "[" + u.getSdkName() + "][" + e + "]:" + t })) }, t.printGroupLog = function(e) {
                        var t = e.title,
                            n = e.subtitle,
                            r = void 0 === n ? "" : n,
                            i = e.content,
                            o = void 0 === i ? [] : i,
                            s = e.printTrace,
                            u = void 0 !== s && s,
                            a = e.collapsed;
                        void 0 !== a && a ? console.groupCollapsed(t, r) : console.group(t, r);
                        for (var c = 0, f = o; c < f.length; c++) {
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
                        u && console.trace("stack trace:"), console.groupEnd()
                    }, t.sleep = function(e) { return void 0 === e && (e = 0), new Promise((function(t) { return setTimeout(t, e) })) }, t.transformPhone = function(e) { return "+86" + e }
                },
                7567: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.setInternalBufferSize = t.serializeWithBufferAndIndex = t.serialize = t.deserializeStream = t.deserialize = t.calculateObjectSize = t.Timestamp = t.ObjectId = t.ObjectID = t.MinKey = t.MaxKey = t.Map = t.LongWithoutOverridesClass = t.Long = t.Int32 = t.EJSON = t.Double = t.Decimal128 = t.DBRef = t.Code = t.Binary = t.BSON_INT64_MIN = t.BSON_INT64_MAX = t.BSON_INT32_MIN = t.BSON_INT32_MAX = t.BSON_DATA_UNDEFINED = t.BSON_DATA_TIMESTAMP = t.BSON_DATA_SYMBOL = t.BSON_DATA_STRING = t.BSON_DATA_REGEXP = t.BSON_DATA_OID = t.BSON_DATA_OBJECT = t.BSON_DATA_NUMBER = t.BSON_DATA_NULL = t.BSON_DATA_MIN_KEY = t.BSON_DATA_MAX_KEY = t.BSON_DATA_LONG = t.BSON_DATA_INT = t.BSON_DATA_DECIMAL128 = t.BSON_DATA_DBPOINTER = t.BSON_DATA_DATE = t.BSON_DATA_CODE_W_SCOPE = t.BSON_DATA_CODE = t.BSON_DATA_BOOLEAN = t.BSON_DATA_BINARY = t.BSON_DATA_ARRAY = t.BSON_BINARY_SUBTYPE_UUID_NEW = t.BSON_BINARY_SUBTYPE_UUID = t.BSON_BINARY_SUBTYPE_USER_DEFINED = t.BSON_BINARY_SUBTYPE_MD5 = t.BSON_BINARY_SUBTYPE_FUNCTION = t.BSON_BINARY_SUBTYPE_DEFAULT = t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = t.BSONSymbol = t.BSONRegExp = t["default"] = void 0;
                    var i = r(n(3988)),
                        o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof n.g ? n.g : "undefined" != typeof self ? self : {};

                    function s(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e }

                    function u(e, t) { return e(t = { exports: {} }, t.exports), t.exports }
                    for (var a = function(e) {
                            var t = v(e),
                                n = t[0],
                                r = t[1];
                            return 3 * (n + r) / 4 - r
                        }, c = function(e) {
                            var t, n, r = v(e),
                                i = r[0],
                                o = r[1],
                                s = new d(function(e, t, n) { return 3 * (t + n) / 4 - n }(0, i, o)),
                                u = 0,
                                a = o > 0 ? i - 4 : i;
                            for (n = 0; n < a; n += 4) t = p[e.charCodeAt(n)] << 18 | p[e.charCodeAt(n + 1)] << 12 | p[e.charCodeAt(n + 2)] << 6 | p[e.charCodeAt(n + 3)], s[u++] = t >> 16 & 255, s[u++] = t >> 8 & 255, s[u++] = 255 & t;
                            return 2 === o && (t = p[e.charCodeAt(n)] << 2 | p[e.charCodeAt(n + 1)] >> 4, s[u++] = 255 & t), 1 === o && (t = p[e.charCodeAt(n)] << 10 | p[e.charCodeAt(n + 1)] << 4 | p[e.charCodeAt(n + 2)] >> 2, s[u++] = t >> 8 & 255, s[u++] = 255 & t), s
                        }, f = function(e) { for (var t, n = e.length, r = n % 3, i = [], o = 16383, s = 0, u = n - r; s < u; s += o) i.push(_(e, s, s + o > u ? u : s + o)); return 1 === r ? (t = e[n - 1], i.push(l[t >> 2] + l[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i.push(l[t >> 10] + l[t >> 4 & 63] + l[t << 2 & 63] + "=")), i.join("") }, l = [], p = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", y = 0, g = h.length; y < g; ++y) l[y] = h[y], p[h.charCodeAt(y)] = y;

                    function v(e) { var t = e.length; if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var n = e.indexOf("="); return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4] }

                    function _(e, t, n) { for (var r, i, o = [], s = t; s < n; s += 3) r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), o.push(l[(i = r) >> 18 & 63] + l[i >> 12 & 63] + l[i >> 6 & 63] + l[63 & i]); return o.join("") }
                    p["-".charCodeAt(0)] = 62, p["_".charCodeAt(0)] = 63;
                    var m = { byteLength: a, toByteArray: c, fromByteArray: f },
                        b = function(e, t, n, r, i) {
                            var o, s, u = 8 * i - r - 1,
                                a = (1 << u) - 1,
                                c = a >> 1,
                                f = -7,
                                l = n ? i - 1 : 0,
                                p = n ? -1 : 1,
                                d = e[t + l];
                            for (l += p, o = d & (1 << -f) - 1, d >>= -f, f += u; f > 0; o = 256 * o + e[t + l], l += p, f -= 8);
                            for (s = o & (1 << -f) - 1, o >>= -f, f += r; f > 0; s = 256 * s + e[t + l], l += p, f -= 8);
                            if (0 === o) o = 1 - c;
                            else {
                                if (o === a) return s ? NaN : (d ? -1 : 1) * Infinity;
                                s += Math.pow(2, r), o -= c
                            }
                            return (d ? -1 : 1) * s * Math.pow(2, o - r)
                        },
                        A = function(e, t, n, r, i, o) {
                            var s, u, a, c = 8 * o - i - 1,
                                f = (1 << c) - 1,
                                l = f >> 1,
                                p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                d = r ? 0 : o - 1,
                                h = r ? 1 : -1,
                                y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                            for (t = Math.abs(t), isNaN(t) || t === Infinity ? (u = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (a = Math.pow(2, -s)) < 1 && (s--, a *= 2), (t += s + l >= 1 ? p / a : p * Math.pow(2, 1 - l)) * a >= 2 && (s++, a /= 2), s + l >= f ? (u = 0, s = f) : s + l >= 1 ? (u = (t * a - 1) * Math.pow(2, i), s += l) : (u = t * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + d] = 255 & u, d += h, u /= 256, i -= 8);
                            for (s = s << i | u, c += i; c > 0; e[n + d] = 255 & s, d += h, s /= 256, c -= 8);
                            e[n + d - h] |= 128 * y
                        },
                        O = u((function(e, t) {
                            var n = "function" == typeof Symbol && "function" == typeof Symbol["for"] ? Symbol["for"]("nodejs.util.inspect.custom") : null;
                            t.Buffer = o, t.SlowBuffer = function(e) { return +e != e && (e = 0), o.alloc(+e) }, t.INSPECT_MAX_BYTES = 50;
                            var r = 2147483647;

                            function i(e) { if (e > r) throw new RangeError('The value "' + e + '" is invalid for option "size"'); var t = new Uint8Array(e); return Object.setPrototypeOf(t, o.prototype), t }

                            function o(e, t, n) { if ("number" == typeof e) { if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number'); return a(e) } return s(e, t, n) }

                            function s(e, t, n) {
                                if ("string" == typeof e) return function(e, t) {
                                    if ("string" == typeof t && "" !== t || (t = "utf8"), !o.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                                    var n = 0 | p(e, t),
                                        r = i(n),
                                        s = r.write(e, t);
                                    return s !== n && (r = r.slice(0, s)), r
                                }(e, t);
                                if (ArrayBuffer.isView(e)) return c(e);
                                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers["typeof"](e));
                                if (Y(e, ArrayBuffer) || e && Y(e.buffer, ArrayBuffer)) return f(e, t, n);
                                if ("undefined" != typeof SharedArrayBuffer && (Y(e, SharedArrayBuffer) || e && Y(e.buffer, SharedArrayBuffer))) return f(e, t, n);
                                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                                var r = e.valueOf && e.valueOf();
                                if (null != r && r !== e) return o.from(r, t, n);
                                var s = function(e) {
                                    if (o.isBuffer(e)) {
                                        var t = 0 | l(e.length),
                                            n = i(t);
                                        return 0 === n.length || e.copy(n, 0, 0, t), n
                                    }
                                    return e.length !== undefined ? "number" != typeof e.length || q(e.length) ? i(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0
                                }(e);
                                if (s) return s;
                                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return o.from(e[Symbol.toPrimitive]("string"), t, n);
                                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + babelHelpers["typeof"](e))
                            }

                            function u(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be of type number'); if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"') }

                            function a(e) { return u(e), i(e < 0 ? 0 : 0 | l(e)) }

                            function c(e) { for (var t = e.length < 0 ? 0 : 0 | l(e.length), n = i(t), r = 0; r < t; r += 1) n[r] = 255 & e[r]; return n }

                            function f(e, t, n) { if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds'); if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds'); var r; return r = t === undefined && n === undefined ? new Uint8Array(e) : n === undefined ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, o.prototype), r }

                            function l(e) { if (e >= r) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes"); return 0 | e }

                            function p(e, t) {
                                if (o.isBuffer(e)) return e.length;
                                if (ArrayBuffer.isView(e) || Y(e, ArrayBuffer)) return e.byteLength;
                                if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + babelHelpers["typeof"](e));
                                var n = e.length,
                                    r = arguments.length > 2 && !0 === arguments[2];
                                if (!r && 0 === n) return 0;
                                for (var i = !1;;) switch (t) {
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
                                        return F(e).length;
                                    default:
                                        if (i) return r ? -1 : j(e).length;
                                        t = ("" + t).toLowerCase(), i = !0
                                }
                            }

                            function d(e, t, n) {
                                var r = !1;
                                if ((t === undefined || t < 0) && (t = 0), t > this.length) return "";
                                if ((n === undefined || n > this.length) && (n = this.length), n <= 0) return "";
                                if ((n >>>= 0) <= (t >>>= 0)) return "";
                                for (e || (e = "utf8");;) switch (e) {
                                    case "hex":
                                        return C(this, t, n);
                                    case "utf8":
                                    case "utf-8":
                                        return N(this, t, n);
                                    case "ascii":
                                        return I(this, t, n);
                                    case "latin1":
                                    case "binary":
                                        return B(this, t, n);
                                    case "base64":
                                        return D(this, t, n);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return x(this, t, n);
                                    default:
                                        if (r) throw new TypeError("Unknown encoding: " + e);
                                        e = (e + "").toLowerCase(), r = !0
                                }
                            }

                            function h(e, t, n) {
                                var r = e[t];
                                e[t] = e[n], e[n] = r
                            }

                            function y(e, t, n, r, i) {
                                if (0 === e.length) return -1;
                                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), q(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                                    if (i) return -1;
                                    n = e.length - 1
                                } else if (n < 0) {
                                    if (!i) return -1;
                                    n = 0
                                }
                                if ("string" == typeof t && (t = o.from(t, r)), o.isBuffer(t)) return 0 === t.length ? -1 : g(e, t, n, r, i);
                                if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : g(e, [t], n, r, i);
                                throw new TypeError("val must be string, number or Buffer")
                            }

                            function g(e, t, n, r, i) {
                                var o, s = 1,
                                    u = e.length,
                                    a = t.length;
                                if (r !== undefined && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                    if (e.length < 2 || t.length < 2) return -1;
                                    s = 2, u /= 2, a /= 2, n /= 2
                                }

                                function c(e, t) { return 1 === s ? e[t] : e.readUInt16BE(t * s) }
                                if (i) {
                                    var f = -1;
                                    for (o = n; o < u; o++)
                                        if (c(e, o) === c(t, -1 === f ? 0 : o - f)) { if (-1 === f && (f = o), o - f + 1 === a) return f * s } else -1 !== f && (o -= o - f), f = -1
                                } else
                                    for (n + a > u && (n = u - a), o = n; o >= 0; o--) {
                                        for (var l = !0, p = 0; p < a; p++)
                                            if (c(e, o + p) !== c(t, p)) { l = !1; break }
                                        if (l) return o
                                    }
                                return -1
                            }

                            function v(e, t, n, r) {
                                n = Number(n) || 0;
                                var i = e.length - n;
                                r ? (r = Number(r)) > i && (r = i) : r = i;
                                var o = t.length;
                                r > o / 2 && (r = o / 2);
                                for (var s = 0; s < r; ++s) {
                                    var u = parseInt(t.substr(2 * s, 2), 16);
                                    if (q(u)) return s;
                                    e[n + s] = u
                                }
                                return s
                            }

                            function _(e, t, n, r) { return $(j(t, e.length - n), e, n, r) }

                            function O(e, t, n, r) { return $(function(e) { for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n)); return t }(t), e, n, r) }

                            function E(e, t, n, r) { return O(e, t, n, r) }

                            function w(e, t, n, r) { return $(F(t), e, n, r) }

                            function S(e, t, n, r) { return $(function(e, t) { for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = (n = e.charCodeAt(s)) >> 8, i = n % 256, o.push(i), o.push(r); return o }(t, e.length - n), e, n, r) }

                            function D(e, t, n) { return 0 === t && n === e.length ? m.fromByteArray(e) : m.fromByteArray(e.slice(t, n)) }

                            function N(e, t, n) {
                                n = Math.min(e.length, n);
                                for (var r = [], i = t; i < n;) {
                                    var o, s, u, a, c = e[i],
                                        f = null,
                                        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                    if (i + l <= n) switch (l) {
                                        case 1:
                                            c < 128 && (f = c);
                                            break;
                                        case 2:
                                            128 == (192 & (o = e[i + 1])) && (a = (31 & c) << 6 | 63 & o) > 127 && (f = a);
                                            break;
                                        case 3:
                                            o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (a = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (a < 55296 || a > 57343) && (f = a);
                                            break;
                                        case 4:
                                            o = e[i + 1], s = e[i + 2], u = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & u) && (a = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & u) > 65535 && a < 1114112 && (f = a)
                                    }
                                    null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), i += l
                                }
                                return function(e) { var t = e.length; if (t <= T) return String.fromCharCode.apply(String, e); for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += T)); return n }(r)
                            }
                            t.kMaxLength = r, o.TYPED_ARRAY_SUPPORT = function() {
                                try {
                                    var e = new Uint8Array(1),
                                        t = { foo: function() { return 42 } };
                                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                                } catch (n) { return !1 }
                            }(), o.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(o.prototype, "parent", { enumerable: !0, get: function() { return o.isBuffer(this) ? this.buffer : undefined } }), Object.defineProperty(o.prototype, "offset", { enumerable: !0, get: function() { return o.isBuffer(this) ? this.byteOffset : undefined } }), o.poolSize = 8192, o.from = function(e, t, n) { return s(e, t, n) }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array), o.alloc = function(e, t, n) { return function(e, t, n) { return u(e), e <= 0 ? i(e) : t !== undefined ? "string" == typeof n ? i(e).fill(t, n) : i(e).fill(t) : i(e) }(e, t, n) }, o.allocUnsafe = function(e) { return a(e) }, o.allocUnsafeSlow = function(e) { return a(e) }, o.isBuffer = function(e) { return null != e && !0 === e._isBuffer && e !== o.prototype }, o.compare = function(e, t) {
                                if (Y(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), Y(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                if (e === t) return 0;
                                for (var n = e.length, r = t.length, i = 0, s = Math.min(n, r); i < s; ++i)
                                    if (e[i] !== t[i]) { n = e[i], r = t[i]; break }
                                return n < r ? -1 : r < n ? 1 : 0
                            }, o.isEncoding = function(e) {
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
                            }, o.concat = function(e, t) {
                                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                                if (0 === e.length) return o.alloc(0);
                                var n;
                                if (t === undefined)
                                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                                var r = o.allocUnsafe(t),
                                    i = 0;
                                for (n = 0; n < e.length; ++n) {
                                    var s = e[n];
                                    if (Y(s, Uint8Array) && (s = o.from(s)), !o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                                    s.copy(r, i), i += s.length
                                }
                                return r
                            }, o.byteLength = p, o.prototype._isBuffer = !0, o.prototype.swap16 = function() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) h(this, t, t + 1); return this }, o.prototype.swap32 = function() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) h(this, t, t + 3), h(this, t + 1, t + 2); return this }, o.prototype.swap64 = function() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) h(this, t, t + 7), h(this, t + 1, t + 6), h(this, t + 2, t + 5), h(this, t + 3, t + 4); return this }, o.prototype.toString = function() { var e = this.length; return 0 === e ? "" : 0 === arguments.length ? N(this, 0, e) : d.apply(this, arguments) }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(e) { if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === o.compare(this, e) }, o.prototype.inspect = function() {
                                var e = "",
                                    n = t.INSPECT_MAX_BYTES;
                                return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
                            }, n && (o.prototype[n] = o.prototype.inspect), o.prototype.compare = function(e, t, n, r, i) {
                                if (Y(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + babelHelpers["typeof"](e));
                                if (t === undefined && (t = 0), n === undefined && (n = e ? e.length : 0), r === undefined && (r = 0), i === undefined && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                                if (r >= i && t >= n) return 0;
                                if (r >= i) return -1;
                                if (t >= n) return 1;
                                if (this === e) return 0;
                                for (var s = (i >>>= 0) - (r >>>= 0), u = (n >>>= 0) - (t >>>= 0), a = Math.min(s, u), c = this.slice(r, i), f = e.slice(t, n), l = 0; l < a; ++l)
                                    if (c[l] !== f[l]) { s = c[l], u = f[l]; break }
                                return s < u ? -1 : u < s ? 1 : 0
                            }, o.prototype.includes = function(e, t, n) { return -1 !== this.indexOf(e, t, n) }, o.prototype.indexOf = function(e, t, n) { return y(this, e, t, n, !0) }, o.prototype.lastIndexOf = function(e, t, n) { return y(this, e, t, n, !1) }, o.prototype.write = function(e, t, n, r) {
                                if (t === undefined) r = "utf8", n = this.length, t = 0;
                                else if (n === undefined && "string" == typeof t) r = t, n = this.length, t = 0;
                                else {
                                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                    t >>>= 0, isFinite(n) ? (n >>>= 0, r === undefined && (r = "utf8")) : (r = n, n = undefined)
                                }
                                var i = this.length - t;
                                if ((n === undefined || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                                r || (r = "utf8");
                                for (var o = !1;;) switch (r) {
                                    case "hex":
                                        return v(this, e, t, n);
                                    case "utf8":
                                    case "utf-8":
                                        return _(this, e, t, n);
                                    case "ascii":
                                        return O(this, e, t, n);
                                    case "latin1":
                                    case "binary":
                                        return E(this, e, t, n);
                                    case "base64":
                                        return w(this, e, t, n);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return S(this, e, t, n);
                                    default:
                                        if (o) throw new TypeError("Unknown encoding: " + r);
                                        r = ("" + r).toLowerCase(), o = !0
                                }
                            }, o.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
                            var T = 4096;

                            function I(e, t, n) {
                                var r = "";
                                n = Math.min(e.length, n);
                                for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                                return r
                            }

                            function B(e, t, n) {
                                var r = "";
                                n = Math.min(e.length, n);
                                for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                                return r
                            }

                            function C(e, t, n) {
                                var r = e.length;
                                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                                for (var i = "", o = t; o < n; ++o) i += G[e[o]];
                                return i
                            }

                            function x(e, t, n) { for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]); return i }

                            function P(e, t, n) { if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint"); if (e + t > n) throw new RangeError("Trying to access beyond buffer length") }

                            function k(e, t, n, r, i, s) { if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > i || t < s) throw new RangeError('"value" argument is out of bounds'); if (n + r > e.length) throw new RangeError("Index out of range") }

                            function L(e, t, n, r, i, o) { if (n + r > e.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

                            function R(e, t, n, r, i) { return t = +t, n >>>= 0, i || L(e, 0, n, 4), A(e, t, n, r, 23, 4), n + 4 }

                            function M(e, t, n, r, i) { return t = +t, n >>>= 0, i || L(e, 0, n, 8), A(e, t, n, r, 52, 8), n + 8 }
                            o.prototype.slice = function(e, t) {
                                var n = this.length;
                                (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = t === undefined ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                                var r = this.subarray(e, t);
                                return Object.setPrototypeOf(r, o.prototype), r
                            }, o.prototype.readUIntLE = function(e, t, n) { e >>>= 0, t >>>= 0, n || P(e, t, this.length); for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i; return r }, o.prototype.readUIntBE = function(e, t, n) { e >>>= 0, t >>>= 0, n || P(e, t, this.length); for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i; return r }, o.prototype.readUInt8 = function(e, t) { return e >>>= 0, t || P(e, 1, this.length), this[e] }, o.prototype.readUInt16LE = function(e, t) { return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8 }, o.prototype.readUInt16BE = function(e, t) { return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1] }, o.prototype.readUInt32LE = function(e, t) { return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, o.prototype.readUInt32BE = function(e, t) { return e >>>= 0, t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, o.prototype.readIntLE = function(e, t, n) { e >>>= 0, t >>>= 0, n || P(e, t, this.length); for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i; return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r }, o.prototype.readIntBE = function(e, t, n) { e >>>= 0, t >>>= 0, n || P(e, t, this.length); for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i; return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o }, o.prototype.readInt8 = function(e, t) { return e >>>= 0, t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, o.prototype.readInt16LE = function(e, t) { e >>>= 0, t || P(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt16BE = function(e, t) { e >>>= 0, t || P(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt32LE = function(e, t) { return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, o.prototype.readInt32BE = function(e, t) { return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, o.prototype.readFloatLE = function(e, t) { return e >>>= 0, t || P(e, 4, this.length), b(this, e, !0, 23, 4) }, o.prototype.readFloatBE = function(e, t) { return e >>>= 0, t || P(e, 4, this.length), b(this, e, !1, 23, 4) }, o.prototype.readDoubleLE = function(e, t) { return e >>>= 0, t || P(e, 8, this.length), b(this, e, !0, 52, 8) }, o.prototype.readDoubleBE = function(e, t) { return e >>>= 0, t || P(e, 8, this.length), b(this, e, !1, 52, 8) }, o.prototype.writeUIntLE = function(e, t, n, r) {
                                e = +e, t >>>= 0, n >>>= 0, r || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                                var i = 1,
                                    o = 0;
                                for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
                                return t + n
                            }, o.prototype.writeUIntBE = function(e, t, n, r) {
                                e = +e, t >>>= 0, n >>>= 0, r || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                                var i = n - 1,
                                    o = 1;
                                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                                return t + n
                            }, o.prototype.writeUInt8 = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1 }, o.prototype.writeUInt16LE = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, o.prototype.writeUInt16BE = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, o.prototype.writeUInt32LE = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4 }, o.prototype.writeUInt32BE = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, o.prototype.writeIntLE = function(e, t, n, r) {
                                if (e = +e, t >>>= 0, !r) {
                                    var i = Math.pow(2, 8 * n - 1);
                                    k(this, e, t, n, i - 1, -i)
                                }
                                var o = 0,
                                    s = 1,
                                    u = 0;
                                for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === u && 0 !== this[t + o - 1] && (u = 1), this[t + o] = (e / s >> 0) - u & 255;
                                return t + n
                            }, o.prototype.writeIntBE = function(e, t, n, r) {
                                if (e = +e, t >>>= 0, !r) {
                                    var i = Math.pow(2, 8 * n - 1);
                                    k(this, e, t, n, i - 1, -i)
                                }
                                var o = n - 1,
                                    s = 1,
                                    u = 0;
                                for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === u && 0 !== this[t + o + 1] && (u = 1), this[t + o] = (e / s >> 0) - u & 255;
                                return t + n
                            }, o.prototype.writeInt8 = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, o.prototype.writeInt16LE = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, o.prototype.writeInt16BE = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, o.prototype.writeInt32LE = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4 }, o.prototype.writeInt32BE = function(e, t, n) { return e = +e, t >>>= 0, n || k(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, o.prototype.writeFloatLE = function(e, t, n) { return R(this, e, t, !0, n) }, o.prototype.writeFloatBE = function(e, t, n) { return R(this, e, t, !1, n) }, o.prototype.writeDoubleLE = function(e, t, n) { return M(this, e, t, !0, n) }, o.prototype.writeDoubleBE = function(e, t, n) { return M(this, e, t, !1, n) }, o.prototype.copy = function(e, t, n, r) {
                                if (!o.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                                if (0 === e.length || 0 === this.length) return 0;
                                if (t < 0) throw new RangeError("targetStart out of bounds");
                                if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                                var i = r - n;
                                if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
                                else if (this === e && n < t && t < r)
                                    for (var s = i - 1; s >= 0; --s) e[s + t] = this[s + n];
                                else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
                                return i
                            }, o.prototype.fill = function(e, t, n, r) {
                                if ("string" == typeof e) {
                                    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), r !== undefined && "string" != typeof r) throw new TypeError("encoding must be a string");
                                    if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                                    if (1 === e.length) {
                                        var i = e.charCodeAt(0);
                                        ("utf8" === r && i < 128 || "latin1" === r) && (e = i)
                                    }
                                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                                if (n <= t) return this;
                                var s;
                                if (t >>>= 0, n = n === undefined ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                                    for (s = t; s < n; ++s) this[s] = e;
                                else {
                                    var u = o.isBuffer(e) ? e : o.from(e, r),
                                        a = u.length;
                                    if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                                    for (s = 0; s < n - t; ++s) this[s + t] = u[s % a]
                                }
                                return this
                            };
                            var U = /[^+/0-9A-Za-z-_]/g;

                            function j(e, t) {
                                var n;
                                t = t || Infinity;
                                for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
                                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                                        if (!i) {
                                            if (n > 56319) {
                                                (t -= 3) > -1 && o.push(239, 191, 189);
                                                continue
                                            }
                                            if (s + 1 === r) {
                                                (t -= 3) > -1 && o.push(239, 191, 189);
                                                continue
                                            }
                                            i = n;
                                            continue
                                        }
                                        if (n < 56320) {
                                            (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                                            continue
                                        }
                                        n = 65536 + (i - 55296 << 10 | n - 56320)
                                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                                    if (i = null, n < 128) {
                                        if ((t -= 1) < 0) break;
                                        o.push(n)
                                    } else if (n < 2048) {
                                        if ((t -= 2) < 0) break;
                                        o.push(n >> 6 | 192, 63 & n | 128)
                                    } else if (n < 65536) {
                                        if ((t -= 3) < 0) break;
                                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                    } else {
                                        if (!(n < 1114112)) throw new Error("Invalid code point");
                                        if ((t -= 4) < 0) break;
                                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                    }
                                }
                                return o
                            }

                            function F(e) { return m.toByteArray(function(e) { if ((e = (e = e.split("=")[0]).trim().replace(U, "")).length < 2) return ""; for (; e.length % 4 != 0;) e += "="; return e }(e)) }

                            function $(e, t, n, r) { for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i]; return i }

                            function Y(e, t) { return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name }

                            function q(e) { return e != e }
                            var G = function() {
                                for (var e = "0123456789abcdef", t = new Array(256), n = 0; n < 16; ++n)
                                    for (var r = 16 * n, i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
                                return t
                            }()
                        })),
                        E = (O.Buffer, O.SlowBuffer, O.INSPECT_MAX_BYTES, O.kMaxLength, function(e, t) {
                            return (E = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }),
                        w = function() {
                            return (w = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        };

                    function S(e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            r = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }

                    function D(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r, i, o = n.call(e),
                            s = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                        } catch (u) { i = { error: u } } finally { try { r && !r.done && (n = o["return"]) && n.call(o) } finally { if (i) throw i.error } }
                        return s
                    }

                    function N(e) { return this instanceof N ? (this.v = e, this) : new N(e) }
                    var T = Object.freeze({
                            __proto__: null,
                            __extends: function(e, t) {
                                function n() { this.constructor = e }
                                E(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                            },
                            get __assign() { return w },
                            __rest: function(e, t) { var n = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) { var i = 0; for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]) } return n },
                            __decorate: function(e, t, n, r) {
                                var i, o = arguments.length,
                                    s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                                if ("object" === ("undefined" == typeof Reflect ? "undefined" : babelHelpers["typeof"](Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                                else
                                    for (var u = e.length - 1; u >= 0; u--)(i = e[u]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
                                return o > 3 && s && Object.defineProperty(t, n, s), s
                            },
                            __param: function(e, t) { return function(n, r) { t(n, r, e) } },
                            __metadata: function(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : babelHelpers["typeof"](Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                            __awaiter: function(e, t, n, r) {
                                return new(n || (n = Promise))((function(i, o) {
                                    function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                    function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                    function a(e) {
                                        var t;
                                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                    }
                                    a((r = r.apply(e, t || [])).next())
                                }))
                            },
                            __generator: function(e, t) {
                                var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                                return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                                function u(o) {
                                    return function(u) {
                                        return function(o) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; s;) try {
                                                if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = o;
                                                        break;
                                                    case 4:
                                                        return s.label++, { value: o[1], done: !1 };
                                                    case 5:
                                                        s.label++, r = o[1], o = [0];
                                                        continue;
                                                    case 7:
                                                        o = s.ops.pop(), s.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                        if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                        if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                        i[2] && s.ops.pop(), s.trys.pop();
                                                        continue
                                                }
                                                o = t.call(e, s)
                                            } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                            if (5 & o[0]) throw o[1];
                                            return { value: o[0] ? o[1] : void 0, done: !0 }
                                        }([o, u])
                                    }
                                }
                            },
                            __createBinding: function(e, t, n, r) { r === undefined && (r = n), e[r] = t[n] },
                            __exportStar: function(e, t) { for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]) },
                            __values: S,
                            __read: D,
                            __spread: function() { for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(D(arguments[t])); return e },
                            __spreadArrays: function() {
                                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                                var r = Array(e),
                                    i = 0;
                                for (t = 0; t < n; t++)
                                    for (var o = arguments[t], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
                                return r
                            },
                            __await: N,
                            __asyncGenerator: function(e, t, n) {
                                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                var r, i = n.apply(e, t || []),
                                    o = [];
                                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() { return this }, r;

                                function s(e) { i[e] && (r[e] = function(t) { return new Promise((function(n, r) { o.push([e, t, n, r]) > 1 || u(e, t) })) }) }

                                function u(e, t) {
                                    try {
                                        (n = i[e](t)).value instanceof N ? Promise.resolve(n.value.v).then(a, c) : f(o[0][2], n)
                                    } catch (r) { f(o[0][3], r) }
                                    var n
                                }

                                function a(e) { u("next", e) }

                                function c(e) { u("throw", e) }

                                function f(e, t) { e(t), o.shift(), o.length && u(o[0][0], o[0][1]) }
                            },
                            __asyncDelegator: function(e) {
                                var t, n;
                                return t = {}, r("next"), r("throw", (function(e) { throw e })), r("return"), t[Symbol.iterator] = function() { return this }, t;

                                function r(r, i) { t[r] = e[r] ? function(t) { return (n = !n) ? { value: N(e[r](t)), done: "return" === r } : i ? i(t) : t } : i }
                            },
                            __asyncValues: function(e) {
                                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                var t, n = e[Symbol.asyncIterator];
                                return n ? n.call(e) : (e = S(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() { return this }, t);

                                function r(n) { t[n] = e[n] && function(t) { return new Promise((function(r, i) {! function(e, t, n, r) { Promise.resolve(r).then((function(t) { e({ value: t, done: n }) }), t) }(r, i, (t = e[n](t)).done, t.value) })) } }
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
                        I = {},
                        B = "function" == typeof Object.create ? function(e, t) { e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }) } : function(e, t) {
                            e.super_ = t;
                            var n = function() {};
                            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
                        },
                        C = /%[sdj%]/g;

                    function x(e) {
                        if (!z(e)) { for (var t = [], n = 0; n < arguments.length; n++) t.push(L(arguments[n])); return t.join(" ") }
                        n = 1;
                        for (var r = arguments, i = r.length, o = String(e).replace(C, (function(e) {
                                if ("%%" === e) return "%";
                                if (n >= i) return e;
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
                            })), s = r[n]; n < i; s = r[++n]) q(s) || !V(s) ? o += " " + s : o += " " + L(s);
                        return o
                    }
                    var P, k = {};

                    function L(e, t) { var n = { seen: [], stylize: M }; return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), Y(t) ? n.showHidden = t : t && ne(n, t), W(n.showHidden) && (n.showHidden = !1), W(n.depth) && (n.depth = 2), W(n.colors) && (n.colors = !1), W(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = R), U(n, e, n.depth) }

                    function R(e, t) { var n = L.styles[t]; return n ? "[" + L.colors[n][0] + "m" + e + "[" + L.colors[n][1] + "m" : e }

                    function M(e, t) { return e }

                    function U(e, t, n) {
                        if (e.customInspect && t && Q(t.inspect) && t.inspect !== L && (!t.constructor || t.constructor.prototype !== t)) { var r = t.inspect(n, e); return z(r) || (r = U(e, r, n)), r }
                        var i = function(e, t) { if (W(t)) return e.stylize("undefined", "undefined"); if (z(t)) { var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'"; return e.stylize(n, "string") } return G(t) ? e.stylize("" + t, "number") : Y(t) ? e.stylize("" + t, "boolean") : q(t) ? e.stylize("null", "null") : void 0 }(e, t);
                        if (i) return i;
                        var o = Object.keys(t),
                            s = function(e) { var t = {}; return e.forEach((function(e, n) { t[e] = !0 })), t }(o);
                        if (e.showHidden && (o = Object.getOwnPropertyNames(t)), J(t) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return j(t);
                        if (0 === o.length) { if (Q(t)) { var u = t.name ? ": " + t.name : ""; return e.stylize("[Function" + u + "]", "special") } if (H(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp"); if (K(t)) return e.stylize(Date.prototype.toString.call(t), "date"); if (J(t)) return j(t) }
                        var a, c = "",
                            f = !1,
                            l = ["{", "}"];
                        return $(t) && (f = !0, l = ["[", "]"]), Q(t) && (c = " [Function" + (t.name ? ": " + t.name : "") + "]"), H(t) && (c = " " + RegExp.prototype.toString.call(t)), K(t) && (c = " " + Date.prototype.toUTCString.call(t)), J(t) && (c = " " + j(t)), 0 !== o.length || f && 0 != t.length ? n < 0 ? H(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t), a = f ? function(e, t, n, r, i) { for (var o = [], s = 0, u = t.length; s < u; ++s) re(t, String(s)) ? o.push(F(e, t, n, r, String(s), !0)) : o.push(""); return i.forEach((function(i) { i.match(/^\d+$/) || o.push(F(e, t, n, r, i, !0)) })), o }(e, t, n, s, o) : o.map((function(r) { return F(e, t, n, s, r, f) })), e.seen.pop(), function(e, t, n) { return e.reduce((function(e, t) { return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1 }), 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1] }(a, c, l)) : l[0] + c + l[1]
                    }

                    function j(e) { return "[" + Error.prototype.toString.call(e) + "]" }

                    function F(e, t, n, r, i, o) {
                        var s, u, a;
                        if ((a = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get ? u = a.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : a.set && (u = e.stylize("[Setter]", "special")), re(r, i) || (s = "[" + i + "]"), u || (e.seen.indexOf(a.value) < 0 ? (u = q(n) ? U(e, a.value, null) : U(e, a.value, n - 1)).indexOf("\n") > -1 && (u = o ? u.split("\n").map((function(e) { return "  " + e })).join("\n").substr(2) : "\n" + u.split("\n").map((function(e) { return "   " + e })).join("\n")) : u = e.stylize("[Circular]", "special")), W(s)) {
                            if (o && i.match(/^\d+$/)) return u;
                            (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
                        }
                        return s + ": " + u
                    }

                    function $(e) { return Array.isArray(e) }

                    function Y(e) { return "boolean" == typeof e }

                    function q(e) { return null === e }

                    function G(e) { return "number" == typeof e }

                    function z(e) { return "string" == typeof e }

                    function W(e) { return void 0 === e }

                    function H(e) { return V(e) && "[object RegExp]" === X(e) }

                    function V(e) { return "object" === babelHelpers["typeof"](e) && null !== e }

                    function K(e) { return V(e) && "[object Date]" === X(e) }

                    function J(e) { return V(e) && ("[object Error]" === X(e) || e instanceof Error) }

                    function Q(e) { return "function" == typeof e }

                    function X(e) { return Object.prototype.toString.call(e) }

                    function Z(e) { return e < 10 ? "0" + e.toString(10) : e.toString(10) }
                    L.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, L.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", "null": "bold", string: "green", date: "magenta", regexp: "red" };
                    var ee = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                    function te() {
                        var e = new Date,
                            t = [Z(e.getHours()), Z(e.getMinutes()), Z(e.getSeconds())].join(":");
                        return [e.getDate(), ee[e.getMonth()], t].join(" ")
                    }

                    function ne(e, t) { if (!t || !V(t)) return e; for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]]; return e }

                    function re(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
                    var ie = {
                            inherits: B,
                            _extend: ne,
                            log: function() { console.log("%s - %s", te(), x.apply(null, arguments)) },
                            isBuffer: function(e) { return Buffer.isBuffer(e) },
                            isPrimitive: function(e) { return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" === babelHelpers["typeof"](e) || void 0 === e },
                            isFunction: Q,
                            isError: J,
                            isDate: K,
                            isObject: V,
                            isRegExp: H,
                            isUndefined: W,
                            isSymbol: function(e) { return "symbol" === babelHelpers["typeof"](e) },
                            isString: z,
                            isNumber: G,
                            isNullOrUndefined: function(e) { return null == e },
                            isNull: q,
                            isBoolean: Y,
                            isArray: $,
                            inspect: L,
                            deprecate: function Pt(e, t) { if (W(n.g.process)) return function() { return Pt(e, t).apply(this, arguments) }; var r = !1; return function() { return r || (console.error(t), r = !0), e.apply(this, arguments) } },
                            format: x,
                            debuglog: function(e) {
                                return W(P) && (P = ""), e = e.toUpperCase(), k[e] || (new RegExp("\\b" + e + "\\b", "i").test(P) ? k[e] = function() {
                                    var t = x.apply(null, arguments);
                                    console.error("%s %d: %s", e, 0, t)
                                } : k[e] = function() {}), k[e]
                            }
                        },
                        oe = u((function(e, t) {
                            function n(e) { for (var t = O.Buffer.alloc(e), n = 0; n < e; ++n) t[n] = Math.floor(256 * Math.random()); return t }
                            if (Object.defineProperty(t, "__esModule", { value: !0 }), t.deprecate = t.isObjectLike = t.isDate = t.isBuffer = t.haveBuffer = t.isBigUInt64Array = t.isBigInt64Array = t.isUint8Array = t.randomBytes = t.normalizedFunctionString = void 0, t.normalizedFunctionString = function(e) { return e.toString().replace("function(", "function (") }, t.randomBytes = n, "undefined" != typeof window && window.crypto && window.crypto.getRandomValues) t.randomBytes = function(e) { return window.crypto.getRandomValues(O.Buffer.alloc(e)) };
                            else {
                                try { t.randomBytes = I.randomBytes } catch (s) {}
                                null == t.randomBytes && (t.randomBytes = n)
                            }

                            function r(e) { return "object" === (0, i["default"])(e) && null !== e }
                            t.isUint8Array = function(e) { return "[object Uint8Array]" === Object.prototype.toString.call(e) }, t.isBigInt64Array = function(e) { return "[object BigInt64Array]" === Object.prototype.toString.call(e) }, t.isBigUInt64Array = function(e) { return "[object BigUint64Array]" === Object.prototype.toString.call(e) }, t.haveBuffer = function() { return void 0 !== o && "undefined" != typeof o.Buffer }, t.isBuffer = function(e) { var t; return "object" === (0, i["default"])(e) && "Buffer" === (null === (t = null == e ? void 0 : e.constructor) || void 0 === t ? void 0 : t.name) }, t.isDate = function(e) { return r(e) && "[object Date]" === Object.prototype.toString.call(e) }, t.isObjectLike = r, t.deprecate = function(e, t) { if ("undefined" == typeof window && "undefined" == typeof self) return ie.deprecate(e, t); var n = !1; return function() { for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i]; return n || (console.warn(t), n = !0), e.apply.apply(e, T.__spreadArrays([this], r)) } }
                        }));
                    s(oe), oe.deprecate, oe.isObjectLike, oe.isDate, oe.isBuffer, oe.haveBuffer, oe.isBigUInt64Array, oe.isBigInt64Array, oe.isUint8Array, oe.randomBytes, oe.normalizedFunctionString;
                    var se = u((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.ensureBuffer = void 0, t.ensureBuffer = function(e) { if (oe.isBuffer(e)) return e; if (ArrayBuffer.isView(e)) return O.Buffer.from(e.buffer); if (e instanceof ArrayBuffer) return O.Buffer.from(e); throw new TypeError("Must use either Buffer or TypedArray") } }));
                    s(se), se.ensureBuffer;
                    var ue = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.parseUUID = void 0;
                        var n = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
                        t.parseUUID = function(e) { if ("string" != typeof e) throw new TypeError("Invalid type for UUID, expected string but got " + (0, i["default"])(e)); if (!n.test(e)) throw new TypeError("Invalid format for UUID: " + e); var t, r = new Uint8Array(16); return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, r[5] = 255 & t, r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, r[7] = 255 & t, r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, r[9] = 255 & t, r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = 255 & t, r }
                    }));
                    s(ue), ue.parseUUID;
                    var ae = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Binary = void 0;
                        var n = function() {
                            function e(t, n) {
                                if (!(this instanceof e)) return new e(t, n);
                                if (!(null == t || "string" == typeof t || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || Array.isArray(t))) throw new TypeError("Binary can only be constructed from string, Buffer, TypedArray, or Array<number>");
                                this.sub_type = null != n ? n : e.BSON_BINARY_SUBTYPE_DEFAULT, null == t ? (this.buffer = O.Buffer.alloc(e.BUFFER_SIZE), this.position = 0) : ("string" == typeof t ? this.buffer = O.Buffer.from(t, "binary") : Array.isArray(t) ? this.buffer = O.Buffer.from(t) : this.buffer = se.ensureBuffer(t), this.position = this.buffer.byteLength)
                            }
                            return e.prototype.put = function(t) {
                                if ("string" == typeof t && 1 !== t.length) throw new TypeError("only accepts single character String");
                                if ("number" != typeof t && 1 !== t.length) throw new TypeError("only accepts single character Uint8Array or Array");
                                var n;
                                if ((n = "string" == typeof t ? t.charCodeAt(0) : "number" == typeof t ? t : t[0]) < 0 || n > 255) throw new TypeError("only accepts number in a valid unsigned byte range 0-255");
                                if (this.buffer.length > this.position) this.buffer[this.position++] = n;
                                else {
                                    var r = O.Buffer.alloc(e.BUFFER_SIZE + this.buffer.length);
                                    this.buffer.copy(r, 0, 0, this.buffer.length), this.buffer = r, this.buffer[this.position++] = n
                                }
                            }, e.prototype.write = function(e, t) {
                                if (t = "number" == typeof t ? t : this.position, this.buffer.length < t + e.length) {
                                    var n = O.Buffer.alloc(this.buffer.length + e.length);
                                    this.buffer.copy(n, 0, 0, this.buffer.length), this.buffer = n
                                }
                                ArrayBuffer.isView(e) ? (this.buffer.set(se.ensureBuffer(e), t), this.position = t + e.byteLength > this.position ? t + e.length : this.position) : "string" == typeof e && (this.buffer.write(e, t, e.length, "binary"), this.position = t + e.length > this.position ? t + e.length : this.position)
                            }, e.prototype.read = function(e, t) { return t = t && t > 0 ? t : this.position, this.buffer.slice(e, e + t) }, e.prototype.value = function(e) { return (e = !!e) && this.buffer.length === this.position ? this.buffer : e ? this.buffer.slice(0, this.position) : this.buffer.toString("binary", 0, this.position) }, e.prototype.length = function() { return this.position }, e.prototype.toJSON = function() { return this.buffer.toString("base64") }, e.prototype.toString = function(e) { return this.buffer.toString(e) }, e.prototype.toExtendedJSON = function(e) {
                                e = e || {};
                                var t = this.buffer.toString("base64"),
                                    n = Number(this.sub_type).toString(16);
                                return e.legacy ? { $binary: t, $type: 1 === n.length ? "0" + n : n } : { $binary: { base64: t, subType: 1 === n.length ? "0" + n : n } }
                            }, e.fromExtendedJSON = function(t, n) { var r, i; if (n = n || {}, "$binary" in t ? n.legacy && "string" == typeof t.$binary && "$type" in t ? (i = t.$type ? parseInt(t.$type, 16) : 0, r = O.Buffer.from(t.$binary, "base64")) : "string" != typeof t.$binary && (i = t.$binary.subType ? parseInt(t.$binary.subType, 16) : 0, r = O.Buffer.from(t.$binary.base64, "base64")) : "$uuid" in t && (i = 4, r = O.Buffer.from(ue.parseUUID(t.$uuid))), !r) throw new TypeError("Unexpected Binary Extended JSON format " + JSON.stringify(t)); return new e(r, i) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return 'new Binary(Buffer.from("' + this.value(!0).toString("hex") + '", "hex"), ' + this.sub_type + ")" }, e.BSON_BINARY_SUBTYPE_DEFAULT = 0, e.BUFFER_SIZE = 256, e.SUBTYPE_DEFAULT = 0, e.SUBTYPE_FUNCTION = 1, e.SUBTYPE_BYTE_ARRAY = 2, e.SUBTYPE_UUID_OLD = 3, e.SUBTYPE_UUID = 4, e.SUBTYPE_MD5 = 5, e.SUBTYPE_USER_DEFINED = 128, e
                        }();
                        t.Binary = n, Object.defineProperty(n.prototype, "_bsontype", { value: "Binary" })
                    }));
                    s(ae), ae.Binary;
                    var ce = u((function(e, t) {
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
                    var fe = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.DBRef = t.isDBRefLike = void 0, t.isDBRefLike = function(e) { return oe.isObjectLike(e) && null != e.$id && null != e.$ref };
                        var n = function() {
                            function e(t, n, r, i) {
                                if (!(this instanceof e)) return new e(t, n, r, i);
                                var o = t.split(".");
                                2 === o.length && (r = o.shift(), t = o.shift()), this.collection = t, this.oid = n, this.db = r, this.fields = i || {}
                            }
                            return Object.defineProperty(e.prototype, "namespace", { get: function() { return this.collection }, set: function(e) { this.collection = e }, enumerable: !1, configurable: !0 }), e.prototype.toJSON = function() { var e = Object.assign({ $ref: this.collection, $id: this.oid }, this.fields); return null != this.db && (e.$db = this.db), e }, e.prototype.toExtendedJSON = function(e) { e = e || {}; var t = { $ref: this.collection, $id: this.oid }; return e.legacy ? t : (this.db && (t.$db = this.db), t = Object.assign(t, this.fields)) }, e.fromExtendedJSON = function(t) { var n = Object.assign({}, t); return delete n.$ref, delete n.$id, delete n.$db, new e(t.$ref, t.$id, t.$db, n) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { var e = this.oid === undefined || this.oid.toString === undefined ? this.oid : this.oid.toString(); return 'new DBRef("' + this.namespace + '", new ObjectId("' + e + '")' + (this.db ? ', "' + this.db + '"' : "") + ")" }, e
                        }();
                        t.DBRef = n, Object.defineProperty(n.prototype, "_bsontype", { value: "DBRef" })
                    }));
                    s(fe), fe.DBRef, fe.isDBRefLike;
                    var le = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Long = void 0;
                        var n = undefined;
                        try { n = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports } catch (c) {}
                        var r = 4294967296,
                            i = 0x10000000000000000,
                            o = i / 2,
                            s = {},
                            u = {},
                            a = function() {
                                function e(t, n, r) {
                                    if (void 0 === t && (t = 0), void 0 === n && (n = 0), !(this instanceof e)) return new e(t, n, r);
                                    this.low = 0 | t, this.high = 0 | n, this.unsigned = !!r, Object.defineProperty(this, "__isLong__", { value: !0, configurable: !1, writable: !1, enumerable: !1 })
                                }
                                return e.fromBits = function(t, n, r) { return new e(t, n, r) }, e.fromInt = function(t, n) { var r, i, o; return n ? (o = 0 <= (t >>>= 0) && t < 256) && (i = u[t]) ? i : (r = e.fromBits(t, (0 | t) < 0 ? -1 : 0, !0), o && (u[t] = r), r) : (o = -128 <= (t |= 0) && t < 128) && (i = s[t]) ? i : (r = e.fromBits(t, t < 0 ? -1 : 0, !1), o && (s[t] = r), r) }, e.fromNumber = function(t, n) { if (isNaN(t)) return n ? e.UZERO : e.ZERO; if (n) { if (t < 0) return e.UZERO; if (t >= i) return e.MAX_UNSIGNED_VALUE } else { if (t <= -o) return e.MIN_VALUE; if (t + 1 >= o) return e.MAX_VALUE } return t < 0 ? e.fromNumber(-t, n).neg() : e.fromBits(t % r | 0, t / r | 0, n) }, e.fromBigInt = function(t, n) { return e.fromString(t.toString(), n) }, e.fromString = function(t, n, r) {
                                    if (0 === t.length) throw Error("empty string");
                                    if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return e.ZERO;
                                    if ("number" == typeof n ? (r = n, n = !1) : n = !!n, (r = r || 10) < 2 || 36 < r) throw RangeError("radix");
                                    var i;
                                    if ((i = t.indexOf("-")) > 0) throw Error("interior hyphen");
                                    if (0 === i) return e.fromString(t.substring(1), n, r).neg();
                                    for (var o = e.fromNumber(Math.pow(r, 8)), s = e.ZERO, u = 0; u < t.length; u += 8) {
                                        var a = Math.min(8, t.length - u),
                                            c = parseInt(t.substring(u, u + a), r);
                                        if (a < 8) {
                                            var f = e.fromNumber(Math.pow(r, a));
                                            s = s.mul(f).add(e.fromNumber(c))
                                        } else s = (s = s.mul(o)).add(e.fromNumber(c))
                                    }
                                    return s.unsigned = n, s
                                }, e.fromBytes = function(t, n, r) { return r ? e.fromBytesLE(t, n) : e.fromBytesBE(t, n) }, e.fromBytesLE = function(t, n) { return new e(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, n) }, e.fromBytesBE = function(t, n) { return new e(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], n) }, e.isLong = function(e) { return oe.isObjectLike(e) && !0 === e.__isLong__ }, e.fromValue = function(t, n) { return "number" == typeof t ? e.fromNumber(t, n) : "string" == typeof t ? e.fromString(t, n) : e.fromBits(t.low, t.high, "boolean" == typeof n ? n : t.unsigned) }, e.prototype.add = function(t) {
                                    e.isLong(t) || (t = e.fromValue(t));
                                    var n = this.high >>> 16,
                                        r = 65535 & this.high,
                                        i = this.low >>> 16,
                                        o = 65535 & this.low,
                                        s = t.high >>> 16,
                                        u = 65535 & t.high,
                                        a = t.low >>> 16,
                                        c = 0,
                                        f = 0,
                                        l = 0,
                                        p = 0;
                                    return l += (p += o + (65535 & t.low)) >>> 16, p &= 65535, f += (l += i + a) >>> 16, l &= 65535, c += (f += r + u) >>> 16, f &= 65535, c += n + s, c &= 65535, e.fromBits(l << 16 | p, c << 16 | f, this.unsigned)
                                }, e.prototype.and = function(t) { return e.isLong(t) || (t = e.fromValue(t)), e.fromBits(this.low & t.low, this.high & t.high, this.unsigned) }, e.prototype.compare = function(t) {
                                    if (e.isLong(t) || (t = e.fromValue(t)), this.eq(t)) return 0;
                                    var n = this.isNegative(),
                                        r = t.isNegative();
                                    return n && !r ? -1 : !n && r ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
                                }, e.prototype.comp = function(e) { return this.compare(e) }, e.prototype.divide = function(t) {
                                    if (e.isLong(t) || (t = e.fromValue(t)), t.isZero()) throw Error("division by zero");
                                    if (n) { if (!this.unsigned && -2147483648 === this.high && -1 === t.low && -1 === t.high) return this; var r = (this.unsigned ? n.div_u : n.div_s)(this.low, this.high, t.low, t.high); return e.fromBits(r, n.get_high(), this.unsigned) }
                                    if (this.isZero()) return this.unsigned ? e.UZERO : e.ZERO;
                                    var i, o, s;
                                    if (this.unsigned) {
                                        if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return e.UZERO;
                                        if (t.gt(this.shru(1))) return e.UONE;
                                        s = e.UZERO
                                    } else {
                                        if (this.eq(e.MIN_VALUE)) return t.eq(e.ONE) || t.eq(e.NEG_ONE) ? e.MIN_VALUE : t.eq(e.MIN_VALUE) ? e.ONE : (i = this.shr(1).div(t).shl(1)).eq(e.ZERO) ? t.isNegative() ? e.ONE : e.NEG_ONE : (o = this.sub(t.mul(i)), s = i.add(o.div(t)));
                                        if (t.eq(e.MIN_VALUE)) return this.unsigned ? e.UZERO : e.ZERO;
                                        if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                                        if (t.isNegative()) return this.div(t.neg()).neg();
                                        s = e.ZERO
                                    }
                                    for (o = this; o.gte(t);) {
                                        i = Math.max(1, Math.floor(o.toNumber() / t.toNumber()));
                                        for (var u = Math.ceil(Math.log(i) / Math.LN2), a = u <= 48 ? 1 : Math.pow(2, u - 48), c = e.fromNumber(i), f = c.mul(t); f.isNegative() || f.gt(o);) i -= a, f = (c = e.fromNumber(i, this.unsigned)).mul(t);
                                        c.isZero() && (c = e.ONE), s = s.add(c), o = o.sub(f)
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
                                    var i = this.high >>> 16,
                                        o = 65535 & this.high,
                                        s = this.low >>> 16,
                                        u = 65535 & this.low,
                                        a = t.high >>> 16,
                                        c = 65535 & t.high,
                                        f = t.low >>> 16,
                                        l = 65535 & t.low,
                                        p = 0,
                                        d = 0,
                                        h = 0,
                                        y = 0;
                                    return h += (y += u * l) >>> 16, y &= 65535, d += (h += s * l) >>> 16, h &= 65535, d += (h += u * f) >>> 16, h &= 65535, p += (d += o * l) >>> 16, d &= 65535, p += (d += s * f) >>> 16, d &= 65535, p += (d += u * c) >>> 16, d &= 65535, p += i * l + o * f + s * c + u * a, p &= 65535, e.fromBits(h << 16 | y, p << 16 | d, this.unsigned)
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
                                                i = r.mul(n).sub(this);
                                            return r.toString(t) + i.toInt().toString(t)
                                        }
                                        return "-" + this.neg().toString(t)
                                    }
                                    for (var o = e.fromNumber(Math.pow(t, 6), this.unsigned), s = this, u = "";;) {
                                        var a = s.div(o),
                                            c = (s.sub(a.mul(o)).toInt() >>> 0).toString(t);
                                        if ((s = a).isZero()) return c + u;
                                        for (; c.length < 6;) c = "0" + c;
                                        u = "" + c + u
                                    }
                                }, e.prototype.toUnsigned = function() { return this.unsigned ? this : e.fromBits(this.low, this.high, !0) }, e.prototype.xor = function(t) { return e.isLong(t) || (t = e.fromValue(t)), e.fromBits(this.low ^ t.low, this.high ^ t.high, this.unsigned) }, e.prototype.eqz = function() { return this.isZero() }, e.prototype.le = function(e) { return this.lessThanOrEqual(e) }, e.prototype.toExtendedJSON = function(e) { return e && e.relaxed ? this.toNumber() : { $numberLong: this.toString() } }, e.fromExtendedJSON = function(t, n) { var r = e.fromString(t.$numberLong); return n && n.relaxed ? r.toNumber() : r }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return 'new Long("' + this.toString() + '")' }, e.TWO_PWR_24 = e.fromInt(16777216), e.MAX_UNSIGNED_VALUE = e.fromBits(-1, -1, !0), e.ZERO = e.fromInt(0), e.UZERO = e.fromInt(0, !0), e.ONE = e.fromInt(1), e.UONE = e.fromInt(1, !0), e.NEG_ONE = e.fromInt(-1), e.MAX_VALUE = e.fromBits(-1, 2147483647, !1), e.MIN_VALUE = e.fromBits(0, -2147483648, !1), e
                            }();
                        t.Long = a, Object.defineProperty(a.prototype, "__isLong__", { value: !0 }), Object.defineProperty(a.prototype, "_bsontype", { value: "Long" })
                    }));
                    s(le), le.Long;
                    var pe = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Decimal128 = void 0;
                        var n = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,
                            r = /^(\+|-)?(Infinity|inf)$/i,
                            i = /^(\+|-)?NaN$/i,
                            o = 6111,
                            s = -6176,
                            u = [124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
                            a = [248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reverse(),
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
                                    v = 0,
                                    _ = 0,
                                    m = 0,
                                    b = 0,
                                    A = 0,
                                    E = [0],
                                    w = 0,
                                    S = 0,
                                    D = 0,
                                    N = 0,
                                    T = 0,
                                    I = 0,
                                    B = new le.Long(0, 0),
                                    C = new le.Long(0, 0),
                                    x = 0;
                                if (t.length >= 7e3) throw new TypeError(t + " not a valid Decimal128 string");
                                var P = t.match(n),
                                    k = t.match(r),
                                    L = t.match(i);
                                if (!P && !k && !L || 0 === t.length) throw new TypeError(t + " not a valid Decimal128 string");
                                if (P) {
                                    var R = P[2],
                                        M = P[4],
                                        U = P[5],
                                        j = P[6];
                                    M && j === undefined && d(t, "missing exponent power"), M && R === undefined && d(t, "missing exponent base"), M === undefined && (U || j) && d(t, "missing e before exponent")
                                }
                                if ("+" !== t[x] && "-" !== t[x] || (h = "-" === t[x++]), !l(t[x]) && "." !== t[x]) { if ("i" === t[x] || "I" === t[x]) return new e(O.Buffer.from(h ? a : c)); if ("N" === t[x]) return new e(O.Buffer.from(u)) }
                                for (; l(t[x]) || "." === t[x];) "." !== t[x] ? (w < 34 && ("0" !== t[x] || g) && (g || (A = _), g = !0, E[S++] = parseInt(t[x], 10), w += 1), g && (m += 1), y && (b += 1), _ += 1, x += 1) : (y && d(t, "contains multiple periods"), y = !0, x += 1);
                                if (y && !_) throw new TypeError(t + " not a valid Decimal128 string");
                                if ("e" === t[x] || "E" === t[x]) {
                                    var F = t.substr(++x).match(f);
                                    if (!F || !F[2]) return new e(O.Buffer.from(u));
                                    T = parseInt(F[0], 10), x += F[0].length
                                }
                                if (t[x]) return new e(O.Buffer.from(u));
                                if (D = 0, w) {
                                    if (N = w - 1, 1 !== (v = m))
                                        for (;
                                            "0" === t[A + v - 1];) v -= 1
                                } else D = 0, N = 0, E[0] = 0, m = 1, w = 1, v = 0;
                                for (T <= b && b - T > 16384 ? T = s : T -= b; T > o;) {
                                    if ((N += 1) - D > 34) {
                                        if (E.join("").match(/^0+$/)) { T = o; break }
                                        d(t, "overflow")
                                    }
                                    T -= 1
                                }
                                for (; T < s || w < m;) {
                                    if (0 === N && v < w) { T = s, v = 0; break }
                                    if (w < m ? m -= 1 : N -= 1, T < o) T += 1;
                                    else {
                                        if (E.join("").match(/^0+$/)) { T = o; break }
                                        d(t, "overflow")
                                    }
                                }
                                if (N - D + 1 < v) {
                                    var $ = _;
                                    y && (A += 1, $ += 1), h && (A += 1, $ += 1);
                                    var Y = parseInt(t[A + N + 1], 10),
                                        q = 0;
                                    if (Y >= 5 && (q = 1, 5 === Y))
                                        for (q = E[N] % 2 == 1 ? 1 : 0, I = A + N + 2; I < $; I++)
                                            if (parseInt(t[I], 10)) { q = 1; break }
                                    if (q)
                                        for (var G = N; G >= 0; G--)
                                            if (++E[G] > 9 && (E[G] = 0, 0 === G)) {
                                                if (!(T < o)) return new e(O.Buffer.from(h ? a : c));
                                                T += 1, E[G] = 1
                                            }
                                }
                                if (B = le.Long.fromNumber(0), C = le.Long.fromNumber(0), 0 === v) B = le.Long.fromNumber(0), C = le.Long.fromNumber(0);
                                else if (N - D < 17)
                                    for (G = D, C = le.Long.fromNumber(E[G++]), B = new le.Long(0, 0); G <= N; G++) C = (C = C.multiply(le.Long.fromNumber(10))).add(le.Long.fromNumber(E[G]));
                                else { for (G = D, B = le.Long.fromNumber(E[G++]); G <= N - 17; G++) B = (B = B.multiply(le.Long.fromNumber(10))).add(le.Long.fromNumber(E[G])); for (C = le.Long.fromNumber(E[G++]); G <= N; G++) C = (C = C.multiply(le.Long.fromNumber(10))).add(le.Long.fromNumber(E[G])) }
                                var z, W, H, V, K = function(e, t) {
                                    if (!e && !t) return { high: le.Long.fromNumber(0), low: le.Long.fromNumber(0) };
                                    var n = e.shiftRightUnsigned(32),
                                        r = new le.Long(e.getLowBits(), 0),
                                        i = t.shiftRightUnsigned(32),
                                        o = new le.Long(t.getLowBits(), 0),
                                        s = n.multiply(i),
                                        u = n.multiply(o),
                                        a = r.multiply(i),
                                        c = r.multiply(o);
                                    return s = s.add(u.shiftRightUnsigned(32)), u = new le.Long(u.getLowBits(), 0).add(a).add(c.shiftRightUnsigned(32)), { high: s = s.add(u.shiftRightUnsigned(32)), low: c = u.shiftLeft(32).add(new le.Long(c.getLowBits(), 0)) }
                                }(B, le.Long.fromString("100000000000000000"));
                                K.low = K.low.add(C), z = K.low, W = C, H = z.high >>> 0, V = W.high >>> 0, (H < V || H === V && z.low >>> 0 < W.low >>> 0) && (K.high = K.high.add(le.Long.fromNumber(1))), p = T + 6176;
                                var J = { low: le.Long.fromNumber(0), high: le.Long.fromNumber(0) };
                                K.high.shiftRightUnsigned(49).and(le.Long.fromNumber(1)).equals(le.Long.fromNumber(1)) ? (J.high = J.high.or(le.Long.fromNumber(3).shiftLeft(61)), J.high = J.high.or(le.Long.fromNumber(p).and(le.Long.fromNumber(16383).shiftLeft(47))), J.high = J.high.or(K.high.and(le.Long.fromNumber(0x7fffffffffff)))) : (J.high = J.high.or(le.Long.fromNumber(16383 & p).shiftLeft(49)), J.high = J.high.or(K.high.and(le.Long.fromNumber(562949953421311)))), J.low = K.low, h && (J.high = J.high.or(le.Long.fromString("9223372036854775808")));
                                var Q = O.Buffer.alloc(16);
                                return x = 0, Q[x++] = 255 & J.low.low, Q[x++] = J.low.low >> 8 & 255, Q[x++] = J.low.low >> 16 & 255, Q[x++] = J.low.low >> 24 & 255, Q[x++] = 255 & J.low.high, Q[x++] = J.low.high >> 8 & 255, Q[x++] = J.low.high >> 16 & 255, Q[x++] = J.low.high >> 24 & 255, Q[x++] = 255 & J.high.low, Q[x++] = J.high.low >> 8 & 255, Q[x++] = J.high.low >> 16 & 255, Q[x++] = J.high.low >> 24 & 255, Q[x++] = 255 & J.high.high, Q[x++] = J.high.high >> 8 & 255, Q[x++] = J.high.high >> 16 & 255, Q[x++] = J.high.high >> 24 & 255, new e(Q)
                            }, e.prototype.toString = function() {
                                for (var e, t = 0, n = new Array(36), r = 0; r < n.length; r++) n[r] = 0;
                                var i, o, s, u = 0,
                                    a = !1,
                                    c = { parts: [0, 0, 0, 0] },
                                    f = [];
                                u = 0;
                                var l = this.bytes,
                                    d = l[u++] | l[u++] << 8 | l[u++] << 16 | l[u++] << 24,
                                    h = l[u++] | l[u++] << 8 | l[u++] << 16 | l[u++] << 24,
                                    y = l[u++] | l[u++] << 8 | l[u++] << 16 | l[u++] << 24,
                                    g = l[u++] | l[u++] << 8 | l[u++] << 16 | l[u++] << 24;
                                u = 0, (new le.Long(d, h), new le.Long(y, g)).lessThan(le.Long.ZERO) && f.push("-");
                                var v = g >> 26 & 31;
                                if (v >> 3 == 3) {
                                    if (30 === v) return f.join("") + "Infinity";
                                    if (31 === v) return "NaN";
                                    e = g >> 15 & 16383, i = 8 + (g >> 14 & 1)
                                } else i = g >> 14 & 7, e = g >> 17 & 16383;
                                var _ = e - 6176;
                                if (c.parts[0] = (16383 & g) + ((15 & i) << 14), c.parts[1] = y, c.parts[2] = h, c.parts[3] = d, 0 === c.parts[0] && 0 === c.parts[1] && 0 === c.parts[2] && 0 === c.parts[3]) a = !0;
                                else
                                    for (s = 3; s >= 0; s--) {
                                        var m = 0,
                                            b = p(c);
                                        if (c = b.quotient, m = b.rem.low)
                                            for (o = 8; o >= 0; o--) n[9 * s + o] = m % 10, m = Math.floor(m / 10)
                                    }
                                if (a) t = 1, n[u] = 0;
                                else
                                    for (t = 36; !n[u];) t -= 1, u += 1;
                                var A = t - 1 + _;
                                if (A >= 34 || A <= -7 || _ > 0) {
                                    if (t > 34) return f.push("0"), _ > 0 ? f.push("E+" + _) : _ < 0 && f.push("E" + _), f.join("");
                                    for (f.push("" + n[u++]), (t -= 1) && f.push("."), r = 0; r < t; r++) f.push("" + n[u++]);
                                    f.push("E"), A > 0 ? f.push("+" + A) : f.push("" + A)
                                } else if (_ >= 0)
                                    for (r = 0; r < t; r++) f.push("" + n[u++]);
                                else {
                                    var O = t + _;
                                    if (O > 0)
                                        for (r = 0; r < O; r++) f.push("" + n[u++]);
                                    else f.push("0");
                                    for (f.push("."); O++ < 0;) f.push("0");
                                    for (r = 0; r < t - Math.max(O - 1, 0); r++) f.push("" + n[u++])
                                }
                                return f.join("")
                            }, e.prototype.toJSON = function() { return { $numberDecimal: this.toString() } }, e.prototype.toExtendedJSON = function() { return { $numberDecimal: this.toString() } }, e.fromExtendedJSON = function(t) { return e.fromString(t.$numberDecimal) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return 'Decimal128.fromString("' + this.toString() + '")' }, e
                        }();
                        t.Decimal128 = h, Object.defineProperty(h.prototype, "_bsontype", { value: "Decimal128" })
                    }));
                    s(pe), pe.Decimal128;
                    var de = u((function(e, t) {
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
                    var he = u((function(e, t) {
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
                    var ye = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.MaxKey = void 0;
                        var n = function() {
                            function e() { if (!(this instanceof e)) return new e }
                            return e.prototype.toExtendedJSON = function() { return { $maxKey: 1 } }, e.fromExtendedJSON = function() { return new e }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return "new MaxKey()" }, e
                        }();
                        t.MaxKey = n, Object.defineProperty(n.prototype, "_bsontype", { value: "MaxKey" })
                    }));
                    s(ye), ye.MaxKey;
                    var ge = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.MinKey = void 0;
                        var n = function() {
                            function e() { if (!(this instanceof e)) return new e }
                            return e.prototype.toExtendedJSON = function() { return { $minKey: 1 } }, e.fromExtendedJSON = function() { return new e }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return "new MinKey()" }, e
                        }();
                        t.MinKey = n, Object.defineProperty(n.prototype, "_bsontype", { value: "MinKey" })
                    }));
                    s(ge), ge.MinKey;
                    var ve = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.ObjectId = void 0;
                        for (var n = oe.randomBytes(5), r = new RegExp("^[0-9a-fA-F]{24}$"), o = [], s = 0; s < 256; s++) o[s] = (s <= 15 ? "0" : "") + s.toString(16);
                        for (var u = [], a = 0; a < 10;) u[48 + a] = a++;
                        for (; a < 16;) u[55 + a] = u[87 + a] = a++;
                        var c = Symbol("id"),
                            f = function() {
                                function e(t) {
                                    if (!(this instanceof e)) return new e(t);
                                    if (t instanceof e && (this[c] = t.id, this.__id = t.__id), "object" === (0, i["default"])(t) && t && "id" in t && ("toHexString" in t && "function" == typeof t.toHexString ? this[c] = O.Buffer.from(t.toHexString(), "hex") : this[c] = "string" == typeof t.id ? O.Buffer.from(t.id) : t.id), null != t && "number" != typeof t || (this[c] = e.generate("number" == typeof t ? t : undefined), e.cacheHexString && (this.__id = this.id.toString("hex"))), ArrayBuffer.isView(t) && 12 === t.byteLength && (this[c] = se.ensureBuffer(t)), "string" == typeof t)
                                        if (12 === t.length) {
                                            var n = O.Buffer.from(t);
                                            12 === n.byteLength && (this[c] = n)
                                        } else {
                                            if (24 !== t.length || !r.test(t)) throw new TypeError("Argument passed in must be a Buffer or string of 12 bytes or a string of 24 hex characters");
                                            this[c] = O.Buffer.from(t, "hex")
                                        }
                                    e.cacheHexString && (this.__id = this.id.toString("hex"))
                                }
                                return Object.defineProperty(e.prototype, "id", { get: function() { return this[c] }, set: function(t) { this[c] = t, e.cacheHexString && (this.__id = t.toString("hex")) }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "generationTime", { get: function() { return this.id.readInt32BE(0) }, set: function(e) { this.id.writeUInt32BE(e, 0) }, enumerable: !1, configurable: !0 }), e.prototype.toHexString = function() { if (e.cacheHexString && this.__id) return this.__id; var t = this.id.toString("hex"); return e.cacheHexString && !this.__id && (this.__id = t), t }, e.getInc = function() { return e.index = (e.index + 1) % 16777215 }, e.generate = function(t) {
                                    "number" != typeof t && (t = ~~(Date.now() / 1e3));
                                    var r = e.getInc(),
                                        i = O.Buffer.alloc(12);
                                    return i.writeUInt32BE(t, 0), i[4] = n[0], i[5] = n[1], i[6] = n[2], i[7] = n[3], i[8] = n[4], i[11] = 255 & r, i[10] = r >> 8 & 255, i[9] = r >> 16 & 255, i
                                }, e.prototype.toString = function(e) { return e ? this.id.toString(e) : this.toHexString() }, e.prototype.toJSON = function() { return this.toHexString() }, e.prototype.equals = function(t) { return t !== undefined && null !== t && (t instanceof e ? this.toString() === t.toString() : "string" == typeof t && e.isValid(t) && 12 === t.length && this.id instanceof O.Buffer ? t === this.id.toString("binary") : "string" == typeof t && e.isValid(t) && 24 === t.length ? t.toLowerCase() === this.toHexString() : "string" == typeof t && e.isValid(t) && 12 === t.length ? O.Buffer.from(t).equals(this.id) : "object" === (0, i["default"])(t) && "toHexString" in t && "function" == typeof t.toHexString && t.toHexString() === this.toHexString()) }, e.prototype.getTimestamp = function() {
                                    var e = new Date,
                                        t = this.id.readUInt32BE(0);
                                    return e.setTime(1e3 * Math.floor(t)), e
                                }, e.createPk = function() { return new e }, e.createFromTime = function(t) { var n = O.Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); return n.writeUInt32BE(t, 0), new e(n) }, e.createFromHexString = function(t) { if (void 0 === t || null != t && 24 !== t.length) throw new TypeError("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"); return new e(O.Buffer.from(t, "hex")) }, e.isValid = function(t) { return null != t && ("number" == typeof t || ("string" == typeof t ? 12 === t.length || 24 === t.length && r.test(t) : t instanceof e || t instanceof O.Buffer && 12 === t.length || "object" === (0, i["default"])(t) && "toHexString" in t && "function" == typeof t.toHexString && ("string" == typeof t.id ? 12 === t.id.length : 24 === t.toHexString().length && r.test(t.id.toString("hex"))))) }, e.prototype.toExtendedJSON = function() { return this.toHexString ? { $oid: this.toHexString() } : { $oid: this.toString("hex") } }, e.fromExtendedJSON = function(t) { return new e(t.$oid) }, e.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, e.prototype.inspect = function() { return 'new ObjectId("' + this.toHexString() + '")' }, e.index = ~~(16777215 * Math.random()), e
                            }();
                        t.ObjectId = f, Object.defineProperty(f.prototype, "generate", { value: oe.deprecate((function(e) { return f.generate(e) }), "Please use the static `ObjectId.generate(time)` instead") }), Object.defineProperty(f.prototype, "getInc", { value: oe.deprecate((function() { return f.getInc() }), "Please use the static `ObjectId.getInc()` instead") }), Object.defineProperty(f.prototype, "get_inc", { value: oe.deprecate((function() { return f.getInc() }), "Please use the static `ObjectId.getInc()` instead") }), Object.defineProperty(f, "get_inc", { value: oe.deprecate((function() { return f.getInc() }), "Please use the static `ObjectId.getInc()` instead") }), Object.defineProperty(f.prototype, "_bsontype", { value: "ObjectID" })
                    }));
                    s(ve), ve.ObjectId;
                    var _e = u((function(e, t) {
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
                    s(_e), _e.BSONRegExp;
                    var me = u((function(e, t) {
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
                    var be = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Timestamp = t.LongWithoutOverridesClass = void 0, t.LongWithoutOverridesClass = le.Long;
                        var n = function(e) {
                            function t(n, r) { var i = this; return i instanceof t ? (i = le.Long.isLong(n) ? e.call(this, n.low, n.high, !0) || this : e.call(this, n, r, !0) || this, Object.defineProperty(i, "_bsontype", { value: "Timestamp", writable: !1, configurable: !1, enumerable: !1 }), i) : new t(n, r) }
                            return T.__extends(t, e), t.prototype.toJSON = function() { return { $timestamp: this.toString() } }, t.fromInt = function(e) { return new t(le.Long.fromInt(e, !0)) }, t.fromNumber = function(e) { return new t(le.Long.fromNumber(e, !0)) }, t.fromBits = function(e, n) { return new t(e, n) }, t.fromString = function(e, n) { return new t(le.Long.fromString(e, !0, n)) }, t.prototype.toExtendedJSON = function() { return { $timestamp: { t: this.high >>> 0, i: this.low >>> 0 } } }, t.fromExtendedJSON = function(e) { return new t(e.$timestamp.i, e.$timestamp.t) }, t.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function() { return this.inspect() }, t.prototype.inspect = function() { return "new Timestamp(" + this.getLowBits().toString() + ", " + this.getHighBits().toString() + ")" }, t.MAX_VALUE = le.Long.MAX_UNSIGNED_VALUE, t
                        }(t.LongWithoutOverridesClass);
                        t.Timestamp = n
                    }));
                    s(be), be.Timestamp, be.LongWithoutOverridesClass;
                    var Ae = u((function(e, t) {
                        function n(e) { return oe.isObjectLike(e) && Reflect.has(e, "_bsontype") && "string" == typeof e._bsontype }
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.EJSON = t.isBSONType = void 0, t.isBSONType = n;
                        var r = 2147483647,
                            o = -2147483648,
                            s = 0x8000000000000000,
                            u = -0x8000000000000000,
                            a = { $oid: ve.ObjectId, $binary: ae.Binary, $uuid: ae.Binary, $symbol: me.BSONSymbol, $numberInt: he.Int32, $numberDecimal: pe.Decimal128, $numberDouble: de.Double, $numberLong: le.Long, $minKey: ge.MinKey, $maxKey: ye.MaxKey, $regex: _e.BSONRegExp, $regularExpression: _e.BSONRegExp, $timestamp: be.Timestamp };

                        function c(e, t) {
                            if (void 0 === t && (t = {}), "number" == typeof e) { if (t.relaxed || t.legacy) return e; if (Math.floor(e) === e) { if (e >= o && e <= r) return new he.Int32(e); if (e >= u && e <= s) return le.Long.fromNumber(e) } return new de.Double(e) }
                            if (null == e || "object" !== (0, i["default"])(e)) return e;
                            if (e.$undefined) return null;
                            for (var n = Object.keys(e).filter((function(t) { return t.startsWith("$") && null != e[t] })), f = 0; f < n.length; f++) { var l = a[n[f]]; if (l) return l.fromExtendedJSON(e, t) }
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
                                    v = !0;
                                if (g.forEach((function(e) {-1 === ["$ref", "$id", "$db"].indexOf(e) && (v = !1) })), v) return fe.DBRef.fromExtendedJSON(y)
                            }
                            return e
                        }

                        function f(e) { var t = e.toISOString(); return 0 !== e.getUTCMilliseconds() ? t : t.slice(0, -5) + "Z" }

                        function l(e, t) {
                            if (Array.isArray(e)) return function(e, t) { return e.map((function(e) { return l(e, t) })) }(e, t);
                            if (e === undefined) return null;
                            if (e instanceof Date) {
                                var a = e.getTime(),
                                    c = a > -1 && a < 2534023188e5;
                                return t.legacy ? t.relaxed && c ? { $date: e.getTime() } : { $date: f(e) } : t.relaxed && c ? { $date: f(e) } : { $date: { $numberLong: e.getTime().toString() } }
                            }
                            if ("number" == typeof e && !t.relaxed) { if (Math.floor(e) === e) { var d = e >= u && e <= s; if (e >= o && e <= r) return { $numberInt: e.toString() }; if (d) return { $numberLong: e.toString() } } return { $numberDouble: e.toString() } }
                            if (e instanceof RegExp) {
                                var h = e.flags;
                                if (h === undefined) {
                                    var y = e.toString().match(/[gimuy]*$/);
                                    y && (h = y[0])
                                }
                                return new _e.BSONRegExp(e.source, h).toExtendedJSON(t)
                            }
                            return null != e && "object" === (0, i["default"])(e) ? function(e, t) {
                                if (null == e || "object" !== (0, i["default"])(e)) throw new Error("not an object instance");
                                var r = e._bsontype;
                                if (void 0 === r) { var o = {}; for (var s in e) o[s] = l(e[s], t); return o }
                                if (n(e)) {
                                    var u = e;
                                    if ("function" != typeof u.toExtendedJSON) {
                                        var a = p[e._bsontype];
                                        if (!a) throw new TypeError("Unrecognized or invalid _bsontype: " + e._bsontype);
                                        u = a(u)
                                    }
                                    return "Code" === r && u.scope ? u = new ce.Code(u.code, l(u.scope, t)) : "DBRef" === r && u.oid && (u = new fe.DBRef(u.collection, l(u.oid, t), u.db, u.fields)), u.toExtendedJSON(t)
                                }
                                throw new Error("_bsontype must be a string, but was: " + (0, i["default"])(r))
                            }(e, t) : e
                        }
                        var p = { Binary: function(e) { return new ae.Binary(e.value(), e.sub_type) }, Code: function(e) { return new ce.Code(e.code, e.scope) }, DBRef: function(e) { return new fe.DBRef(e.collection || e.namespace, e.oid, e.db, e.fields) }, Decimal128: function(e) { return new pe.Decimal128(e.bytes) }, Double: function(e) { return new de.Double(e.value) }, Int32: function(e) { return new he.Int32(e.value) }, Long: function(e) { return le.Long.fromBits(null != e.low ? e.low : e.low_, null != e.low ? e.high : e.high_, null != e.low ? e.unsigned : e.unsigned_) }, MaxKey: function() { return new ye.MaxKey }, MinKey: function() { return new ge.MinKey }, ObjectID: function(e) { return new ve.ObjectId(e) }, ObjectId: function(e) { return new ve.ObjectId(e) }, BSONRegExp: function(e) { return new _e.BSONRegExp(e.pattern, e.options) }, Symbol: function(e) { return new me.BSONSymbol(e.value) }, Timestamp: function(e) { return be.Timestamp.fromBits(e.low, e.high) } };
                        ! function(e) {
                            function t(e, t) { var n = Object.assign({}, { relaxed: !0, legacy: !1 }, t); return "boolean" == typeof n.relaxed && (n.strict = !n.relaxed), "boolean" == typeof n.strict && (n.relaxed = !n.strict), JSON.parse(e, (function(e, t) { return c(t, n) })) }

                            function n(e, t, n, r) { null != n && "object" === (0, i["default"])(n) && (r = n, n = 0), null == t || "object" !== (0, i["default"])(t) || Array.isArray(t) || (r = t, t = undefined, n = 0); var o = l(e, r = Object.assign({}, { relaxed: !0, legacy: !1 }, r)); return JSON.stringify(o, t, n) }
                            e.parse = t, e.stringify = n, e.serialize = function(e, t) { return t = t || {}, JSON.parse(n(e, t)) }, e.deserialize = function(e, n) { return n = n || {}, t(JSON.stringify(e), n) }
                        }(t.EJSON || (t.EJSON = {}))
                    }));
                    s(Ae), Ae.EJSON, Ae.isBSONType;
                    var Oe = u((function(e, t) {
                        var n;
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.Map = void 0, t.Map = n;
                        var r = function(e) { return e && e.Math == Math && e },
                            s = r("object" === ("undefined" == typeof globalThis ? "undefined" : (0, i["default"])(globalThis)) && globalThis) || r("object" === ("undefined" == typeof window ? "undefined" : (0, i["default"])(window)) && window) || r("object" === ("undefined" == typeof self ? "undefined" : (0, i["default"])(self)) && self) || r("object" === (0, i["default"])(o) && o) || Function("return this")();
                        Object.prototype.hasOwnProperty.call(s, "Map") ? t.Map = n = s.Map : t.Map = n = function() {
                            function e(e) {
                                void 0 === e && (e = []), this._keys = [], this._values = {};
                                for (var t = 0; t < e.length; t++)
                                    if (null != e[t]) {
                                        var n = e[t],
                                            r = n[0],
                                            i = n[1];
                                        this._keys.push(r), this._values[r] = { v: i, i: this._keys.length - 1 }
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
                    s(Oe), Oe.Map;
                    var Ee = u((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.BSON_BINARY_SUBTYPE_USER_DEFINED = t.BSON_BINARY_SUBTYPE_MD5 = t.BSON_BINARY_SUBTYPE_UUID_NEW = t.BSON_BINARY_SUBTYPE_UUID = t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = t.BSON_BINARY_SUBTYPE_FUNCTION = t.BSON_BINARY_SUBTYPE_DEFAULT = t.BSON_DATA_MAX_KEY = t.BSON_DATA_MIN_KEY = t.BSON_DATA_DECIMAL128 = t.BSON_DATA_LONG = t.BSON_DATA_TIMESTAMP = t.BSON_DATA_INT = t.BSON_DATA_CODE_W_SCOPE = t.BSON_DATA_SYMBOL = t.BSON_DATA_CODE = t.BSON_DATA_DBPOINTER = t.BSON_DATA_REGEXP = t.BSON_DATA_NULL = t.BSON_DATA_DATE = t.BSON_DATA_BOOLEAN = t.BSON_DATA_OID = t.BSON_DATA_UNDEFINED = t.BSON_DATA_BINARY = t.BSON_DATA_ARRAY = t.BSON_DATA_OBJECT = t.BSON_DATA_STRING = t.BSON_DATA_NUMBER = t.JS_INT_MIN = t.JS_INT_MAX = t.BSON_INT64_MIN = t.BSON_INT64_MAX = t.BSON_INT32_MIN = t.BSON_INT32_MAX = void 0, t.BSON_INT32_MAX = 2147483647, t.BSON_INT32_MIN = -2147483648, t.BSON_INT64_MAX = Math.pow(2, 63) - 1, t.BSON_INT64_MIN = -Math.pow(2, 63), t.JS_INT_MAX = Math.pow(2, 53), t.JS_INT_MIN = -Math.pow(2, 53), t.BSON_DATA_NUMBER = 1, t.BSON_DATA_STRING = 2, t.BSON_DATA_OBJECT = 3, t.BSON_DATA_ARRAY = 4, t.BSON_DATA_BINARY = 5, t.BSON_DATA_UNDEFINED = 6, t.BSON_DATA_OID = 7, t.BSON_DATA_BOOLEAN = 8, t.BSON_DATA_DATE = 9, t.BSON_DATA_NULL = 10, t.BSON_DATA_REGEXP = 11, t.BSON_DATA_DBPOINTER = 12, t.BSON_DATA_CODE = 13, t.BSON_DATA_SYMBOL = 14, t.BSON_DATA_CODE_W_SCOPE = 15, t.BSON_DATA_INT = 16, t.BSON_DATA_TIMESTAMP = 17, t.BSON_DATA_LONG = 18, t.BSON_DATA_DECIMAL128 = 19, t.BSON_DATA_MIN_KEY = 255, t.BSON_DATA_MAX_KEY = 127, t.BSON_BINARY_SUBTYPE_DEFAULT = 0, t.BSON_BINARY_SUBTYPE_FUNCTION = 1, t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2, t.BSON_BINARY_SUBTYPE_UUID = 3, t.BSON_BINARY_SUBTYPE_UUID_NEW = 4, t.BSON_BINARY_SUBTYPE_MD5 = 5, t.BSON_BINARY_SUBTYPE_USER_DEFINED = 128 }));
                    s(Ee), Ee.BSON_BINARY_SUBTYPE_USER_DEFINED, Ee.BSON_BINARY_SUBTYPE_MD5, Ee.BSON_BINARY_SUBTYPE_UUID_NEW, Ee.BSON_BINARY_SUBTYPE_UUID, Ee.BSON_BINARY_SUBTYPE_BYTE_ARRAY, Ee.BSON_BINARY_SUBTYPE_FUNCTION, Ee.BSON_BINARY_SUBTYPE_DEFAULT, Ee.BSON_DATA_MAX_KEY, Ee.BSON_DATA_MIN_KEY, Ee.BSON_DATA_DECIMAL128, Ee.BSON_DATA_LONG, Ee.BSON_DATA_TIMESTAMP, Ee.BSON_DATA_INT, Ee.BSON_DATA_CODE_W_SCOPE, Ee.BSON_DATA_SYMBOL, Ee.BSON_DATA_CODE, Ee.BSON_DATA_DBPOINTER, Ee.BSON_DATA_REGEXP, Ee.BSON_DATA_NULL, Ee.BSON_DATA_DATE, Ee.BSON_DATA_BOOLEAN, Ee.BSON_DATA_OID, Ee.BSON_DATA_UNDEFINED, Ee.BSON_DATA_BINARY, Ee.BSON_DATA_ARRAY, Ee.BSON_DATA_OBJECT, Ee.BSON_DATA_STRING, Ee.BSON_DATA_NUMBER, Ee.JS_INT_MIN, Ee.JS_INT_MAX, Ee.BSON_INT64_MIN, Ee.BSON_INT64_MAX, Ee.BSON_INT32_MIN, Ee.BSON_INT32_MAX;
                    var we = u((function(e, t) {
                        function n(e, t, n) {
                            var i = 5;
                            if (Array.isArray(e))
                                for (var o = 0; o < e.length; o++) i += r(o.toString(), e[o], t, !0, n);
                            else
                                for (var s in e.toBSON && (e = e.toBSON()), e) i += r(s, e[s], t, !1, n);
                            return i
                        }

                        function r(e, t, r, o, s) {
                            switch (void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === s && (s = !1), t && t.toBSON && (t = t.toBSON()), (0, i["default"])(t)) {
                                case "string":
                                    return 1 + O.Buffer.byteLength(e, "utf8") + 1 + 4 + O.Buffer.byteLength(t, "utf8") + 1;
                                case "number":
                                    return Math.floor(t) === t && t >= Ee.JS_INT_MIN && t <= Ee.JS_INT_MAX && t >= Ee.BSON_INT32_MIN && t <= Ee.BSON_INT32_MAX ? (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 5 : (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 9;
                                case "undefined":
                                    return o || !s ? (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 : 0;
                                case "boolean":
                                    return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 2;
                                case "object":
                                    if (null == t || "MinKey" === t._bsontype || "MaxKey" === t._bsontype) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1;
                                    if ("ObjectId" === t._bsontype || "ObjectID" === t._bsontype) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 13;
                                    if (t instanceof Date || oe.isDate(t)) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 9;
                                    if (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 6 + t.byteLength;
                                    if ("Long" === t._bsontype || "Double" === t._bsontype || "Timestamp" === t._bsontype) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 9;
                                    if ("Decimal128" === t._bsontype) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 17;
                                    if ("Code" === t._bsontype) return null != t.scope && Object.keys(t.scope).length > 0 ? (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + O.Buffer.byteLength(t.code.toString(), "utf8") + 1 + n(t.scope, r, s) : (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + O.Buffer.byteLength(t.code.toString(), "utf8") + 1;
                                    if ("Binary" === t._bsontype) return t.sub_type === ae.Binary.SUBTYPE_BYTE_ARRAY ? (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1 + 4) : (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + (t.position + 1 + 4 + 1);
                                    if ("Symbol" === t._bsontype) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + O.Buffer.byteLength(t.value, "utf8") + 4 + 1 + 1;
                                    if ("DBRef" === t._bsontype) { var u = Object.assign({ $ref: t.collection, $id: t.oid }, t.fields); return null != t.db && (u.$db = t.db), (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + n(u, r, s) }
                                    return t instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(t) ? (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + O.Buffer.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1 : "BSONRegExp" === t._bsontype ? (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + O.Buffer.byteLength(t.pattern, "utf8") + 1 + O.Buffer.byteLength(t.options, "utf8") + 1 : (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + n(t, r, s) + 1;
                                case "function":
                                    if (t instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(t) || "[object RegExp]" === String.call(t)) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + O.Buffer.byteLength(t.source, "utf8") + 1 + (t.global ? 1 : 0) + (t.ignoreCase ? 1 : 0) + (t.multiline ? 1 : 0) + 1;
                                    if (r && null != t.scope && Object.keys(t.scope).length > 0) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + 4 + O.Buffer.byteLength(oe.normalizedFunctionString(t), "utf8") + 1 + n(t.scope, r, s);
                                    if (r) return (null != e ? O.Buffer.byteLength(e, "utf8") + 1 : 0) + 1 + 4 + O.Buffer.byteLength(oe.normalizedFunctionString(t), "utf8") + 1
                            }
                            return 0
                        }
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.calculateObjectSize = void 0, t.calculateObjectSize = n
                    }));
                    s(we), we.calculateObjectSize;
                    var Se = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.validateUtf8 = void 0, t.validateUtf8 = function(e, t, n) {
                            for (var r = 0, i = t; i < n; i += 1) {
                                var o = e[i];
                                if (r) {
                                    if (128 != (192 & o)) return !1;
                                    r -= 1
                                } else if (128 & o)
                                    if (192 == (224 & o)) r = 1;
                                    else if (224 == (240 & o)) r = 2;
                                else {
                                    if (240 != (248 & o)) return !1;
                                    r = 3
                                }
                            }
                            return !r
                        }
                    }));
                    s(Se), Se.validateUtf8;
                    var De = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.deserialize = void 0;
                        var n = le.Long.fromNumber(Ee.JS_INT_MAX),
                            r = le.Long.fromNumber(Ee.JS_INT_MIN),
                            i = {};

                        function o(e, t, u, a) {
                            void 0 === a && (a = !1);
                            var c = null != u.evalFunctions && u.evalFunctions,
                                f = null != u.cacheFunctions && u.cacheFunctions,
                                l = null == u.fieldsAsRaw ? null : u.fieldsAsRaw,
                                p = null != u.raw && u.raw,
                                d = "boolean" == typeof u.bsonRegExp && u.bsonRegExp,
                                h = null != u.promoteBuffers && u.promoteBuffers,
                                y = null == u.promoteLongs || u.promoteLongs,
                                g = null == u.promoteValues || u.promoteValues,
                                v = t;
                            if (e.length < 5) throw new Error("corrupt bson message < 5 bytes long");
                            var _ = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                            if (_ < 5 || _ > e.length) throw new Error("corrupt bson message");
                            for (var m = a ? [] : {}, b = 0;;) {
                                var A = e[t++];
                                if (0 === A) break;
                                for (var E = t; 0 !== e[E] && E < e.length;) E++;
                                if (E >= e.byteLength) throw new Error("Bad BSON Document: illegal CString");
                                var w = a ? b++ : e.toString("utf8", t, E);
                                if (t = E + 1, A === Ee.BSON_DATA_STRING) {
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    if (!Se.validateUtf8(e, t, t + V - 1)) throw new Error("Invalid UTF-8 string in BSON document");
                                    var S = e.toString("utf8", t, t + V - 1);
                                    m[w] = S, t += V
                                } else if (A === Ee.BSON_DATA_OID) {
                                    var D = O.Buffer.alloc(12);
                                    e.copy(D, 0, t, t + 12), m[w] = new ve.ObjectId(D), t += 12
                                } else if (A === Ee.BSON_DATA_INT && !1 === g) m[w] = new he.Int32(e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24);
                                else if (A === Ee.BSON_DATA_INT) m[w] = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                                else if (A === Ee.BSON_DATA_NUMBER && !1 === g) m[w] = new de.Double(e.readDoubleLE(t)), t += 8;
                                else if (A === Ee.BSON_DATA_NUMBER) m[w] = e.readDoubleLE(t), t += 8;
                                else if (A === Ee.BSON_DATA_DATE) {
                                    var N = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24,
                                        T = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                                    m[w] = new Date(new le.Long(N, T).toNumber())
                                } else if (A === Ee.BSON_DATA_BOOLEAN) {
                                    if (0 !== e[t] && 1 !== e[t]) throw new Error("illegal boolean type value");
                                    m[w] = 1 === e[t++]
                                } else if (A === Ee.BSON_DATA_OBJECT) {
                                    var I = t;
                                    if ((W = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) <= 0 || W > e.length - t) throw new Error("bad embedded document length in bson");
                                    m[w] = p ? e.slice(t, t + W) : o(e, I, u, !1), t += W
                                } else if (A === Ee.BSON_DATA_ARRAY) {
                                    I = t;
                                    var B = u,
                                        C = t + (W = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24);
                                    if (l && l[w]) {
                                        for (var x in B = {}, u) B[x] = u[x];
                                        B.raw = !0
                                    }
                                    if (m[w] = o(e, I, B, !0), 0 !== e[(t += W) - 1]) throw new Error("invalid array terminator byte");
                                    if (t !== C) throw new Error("corrupted array bson")
                                } else if (A === Ee.BSON_DATA_UNDEFINED) m[w] = undefined;
                                else if (A === Ee.BSON_DATA_NULL) m[w] = null;
                                else if (A === Ee.BSON_DATA_LONG) {
                                    N = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, T = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                                    var P = new le.Long(N, T);
                                    m[w] = y && !0 === g && P.lessThanOrEqual(n) && P.greaterThanOrEqual(r) ? P.toNumber() : P
                                } else if (A === Ee.BSON_DATA_DECIMAL128) {
                                    var k = O.Buffer.alloc(16);
                                    e.copy(k, 0, t, t + 16), t += 16;
                                    var L = new pe.Decimal128(k);
                                    "toObject" in L && "function" == typeof L.toObject ? m[w] = L.toObject() : m[w] = L
                                } else if (A === Ee.BSON_DATA_BINARY) {
                                    var R = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24,
                                        M = R,
                                        U = e[t++];
                                    if (R < 0) throw new Error("Negative binary type element size found");
                                    if (R > e.byteLength) throw new Error("Binary type size larger than document size");
                                    if (null != e.slice) {
                                        if (U === ae.Binary.SUBTYPE_BYTE_ARRAY) { if ((R = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02"); if (R > M - 4) throw new Error("Binary type with subtype 0x02 contains too long binary size"); if (R < M - 4) throw new Error("Binary type with subtype 0x02 contains too short binary size") }
                                        m[w] = h && g ? e.slice(t, t + R) : new ae.Binary(e.slice(t, t + R), U)
                                    } else {
                                        var j = O.Buffer.alloc(R);
                                        if (U === ae.Binary.SUBTYPE_BYTE_ARRAY) { if ((R = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) < 0) throw new Error("Negative binary type element size found for subtype 0x02"); if (R > M - 4) throw new Error("Binary type with subtype 0x02 contains too long binary size"); if (R < M - 4) throw new Error("Binary type with subtype 0x02 contains too short binary size") }
                                        for (E = 0; E < R; E++) j[E] = e[t + E];
                                        m[w] = h && g ? j : new ae.Binary(j, U)
                                    }
                                    t += R
                                } else if (A === Ee.BSON_DATA_REGEXP && !1 === d) {
                                    for (E = t; 0 !== e[E] && E < e.length;) E++;
                                    if (E >= e.length) throw new Error("Bad BSON Document: illegal CString");
                                    var F = e.toString("utf8", t, E);
                                    for (E = t = E + 1; 0 !== e[E] && E < e.length;) E++;
                                    if (E >= e.length) throw new Error("Bad BSON Document: illegal CString");
                                    var $ = e.toString("utf8", t, E);
                                    t = E + 1;
                                    var Y = new Array($.length);
                                    for (E = 0; E < $.length; E++) switch ($[E]) {
                                        case "m":
                                            Y[E] = "m";
                                            break;
                                        case "s":
                                            Y[E] = "g";
                                            break;
                                        case "i":
                                            Y[E] = "i"
                                    }
                                    m[w] = new RegExp(F, Y.join(""))
                                } else if (A === Ee.BSON_DATA_REGEXP && !0 === d) {
                                    for (E = t; 0 !== e[E] && E < e.length;) E++;
                                    if (E >= e.length) throw new Error("Bad BSON Document: illegal CString");
                                    for (F = e.toString("utf8", t, E), E = t = E + 1; 0 !== e[E] && E < e.length;) E++;
                                    if (E >= e.length) throw new Error("Bad BSON Document: illegal CString");
                                    $ = e.toString("utf8", t, E), t = E + 1, m[w] = new _e.BSONRegExp(F, $)
                                } else if (A === Ee.BSON_DATA_SYMBOL) {
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    var q = e.toString("utf8", t, t + V - 1);
                                    m[w] = g ? q : new me.BSONSymbol(q), t += V
                                } else if (A === Ee.BSON_DATA_TIMESTAMP) N = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, T = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, m[w] = new be.Timestamp(N, T);
                                else if (A === Ee.BSON_DATA_MIN_KEY) m[w] = new ge.MinKey;
                                else if (A === Ee.BSON_DATA_MAX_KEY) m[w] = new ye.MaxKey;
                                else if (A === Ee.BSON_DATA_CODE) {
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    var G = e.toString("utf8", t, t + V - 1);
                                    m[w] = c ? f ? s(G, i, m) : s(G) : new ce.Code(G), t += V
                                } else if (A === Ee.BSON_DATA_CODE_W_SCOPE) {
                                    var z = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24;
                                    if (z < 13) throw new Error("code_w_scope total size shorter minimum expected length");
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    G = e.toString("utf8", t, t + V - 1), I = t += V;
                                    var W = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24,
                                        H = o(e, I, u, !1);
                                    if (t += W, z < 8 + W + V) throw new Error("code_w_scope total size is too short, truncating scope");
                                    if (z > 8 + W + V) throw new Error("code_w_scope total size is too long, clips outer document");
                                    c ? (m[w] = f ? s(G, i, m) : s(G), m[w].scope = H) : m[w] = new ce.Code(G, H)
                                } else {
                                    if (A !== Ee.BSON_DATA_DBPOINTER) throw new Error("Detected unknown BSON type " + A.toString(16) + ' for fieldname "' + w + '"');
                                    var V;
                                    if ((V = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) <= 0 || V > e.length - t || 0 !== e[t + V - 1]) throw new Error("bad string length in bson");
                                    if (!Se.validateUtf8(e, t, t + V - 1)) throw new Error("Invalid UTF-8 string in BSON document");
                                    var K = e.toString("utf8", t, t + V - 1);
                                    t += V;
                                    var J = O.Buffer.alloc(12);
                                    e.copy(J, 0, t, t + 12), D = new ve.ObjectId(J), t += 12, m[w] = new fe.DBRef(K, D)
                                }
                            }
                            if (_ !== t - v) { if (a) throw new Error("corrupt array bson"); throw new Error("corrupt object bson") }
                            var Q = Object.keys(m).filter((function(e) { return e.startsWith("$") })),
                                X = !0;
                            if (Q.forEach((function(e) {-1 === ["$ref", "$id", "$db"].indexOf(e) && (X = !1) })), !X) return m;
                            if (fe.isDBRefLike(m)) { var Z = Object.assign({}, m); return delete Z.$ref, delete Z.$id, delete Z.$db, new fe.DBRef(m.$ref, m.$id, m.$db, Z) }
                            return m
                        }

                        function s(e, t, n) { return t ? (null == t[e] && (t[e] = new Function(e)), t[e].bind(n)) : new Function(e) }
                        t.deserialize = function(e, t, n) {
                            var r = (t = null == t ? {} : t) && t.index ? t.index : 0,
                                i = e[r] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24;
                            if (i < 5) throw new Error("bson size must be >= 5, is " + i);
                            if (t.allowObjectSmallerThanBufferSize && e.length < i) throw new Error("buffer length " + e.length + " must be >= bson size " + i);
                            if (!t.allowObjectSmallerThanBufferSize && e.length !== i) throw new Error("buffer length " + e.length + " must === bson size " + i);
                            if (i + r > e.byteLength) throw new Error("(bson size " + i + " + options.index " + r + " must be <= buffer length " + e.byteLength + ")");
                            if (0 !== e[r + i - 1]) throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
                            return o(e, r, t, n)
                        }
                    }));
                    s(De), De.deserialize;
                    var Ne = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.writeIEEE754 = t.readIEEE754 = void 0, t.readIEEE754 = function(e, t, n, r, i) {
                            var o, s, u = "big" === n,
                                a = 8 * i - r - 1,
                                c = (1 << a) - 1,
                                f = c >> 1,
                                l = -7,
                                p = u ? 0 : i - 1,
                                d = u ? 1 : -1,
                                h = e[t + p];
                            for (p += d, o = h & (1 << -l) - 1, h >>= -l, l += a; l > 0; o = 256 * o + e[t + p], p += d, l -= 8);
                            for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + p], p += d, l -= 8);
                            if (0 === o) o = 1 - f;
                            else {
                                if (o === c) return s ? NaN : (h ? -1 : 1) * Infinity;
                                s += Math.pow(2, r), o -= f
                            }
                            return (h ? -1 : 1) * s * Math.pow(2, o - r)
                        }, t.writeIEEE754 = function(e, t, n, r, i, o) {
                            var s, u, a, c = "big" === r,
                                f = 8 * o - i - 1,
                                l = (1 << f) - 1,
                                p = l >> 1,
                                d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                h = c ? o - 1 : 0,
                                y = c ? -1 : 1,
                                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                            for (t = Math.abs(t), isNaN(t) || t === Infinity ? (u = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (a = Math.pow(2, -s)) < 1 && (s--, a *= 2), (t += s + p >= 1 ? d / a : d * Math.pow(2, 1 - p)) * a >= 2 && (s++, a /= 2), s + p >= l ? (u = 0, s = l) : s + p >= 1 ? (u = (t * a - 1) * Math.pow(2, i), s += p) : (u = t * Math.pow(2, p - 1) * Math.pow(2, i), s = 0)), isNaN(t) && (u = 0); i >= 8;) e[n + h] = 255 & u, h += y, u /= 256, i -= 8;
                            for (s = s << i | u, isNaN(t) && (s += 8), f += i; f > 0;) e[n + h] = 255 & s, h += y, s /= 256, f -= 8;
                            e[n + h - y] |= 128 * g
                        }
                    }));
                    s(Ne), Ne.writeIEEE754, Ne.readIEEE754;
                    var Te = u((function(e, t) {
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.serializeInto = void 0;
                        var n = /\x00/,
                            r = new Set(["$db", "$ref", "$id", "$clusterTime"]);

                        function o(e) { return "[object RegExp]" === Object.prototype.toString.call(e) }

                        function s(e, t, n, r, i) {
                            e[r++] = Ee.BSON_DATA_STRING;
                            var o = i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8");
                            e[(r = r + o + 1) - 1] = 0;
                            var s = e.write(n, r + 4, undefined, "utf8");
                            return e[r + 3] = s + 1 >> 24 & 255, e[r + 2] = s + 1 >> 16 & 255, e[r + 1] = s + 1 >> 8 & 255, e[r] = s + 1 & 255, r = r + 4 + s, e[r++] = 0, r
                        }

                        function u(e, t, n, r, i) { return Number.isInteger(n) && n >= Ee.BSON_INT32_MIN && n <= Ee.BSON_INT32_MAX ? (e[r++] = Ee.BSON_DATA_INT, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, e[r++] = 255 & n, e[r++] = n >> 8 & 255, e[r++] = n >> 16 & 255, e[r++] = n >> 24 & 255) : (e[r++] = Ee.BSON_DATA_NUMBER, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, Ne.writeIEEE754(e, n, r, "little", 52, 8), r += 8), r }

                        function a(e, t, n, r, i) { return e[r++] = Ee.BSON_DATA_NULL, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, r }

                        function c(e, t, n, r, i) { return e[r++] = Ee.BSON_DATA_BOOLEAN, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, e[r++] = n ? 1 : 0, r }

                        function f(e, t, n, r, i) {
                            e[r++] = Ee.BSON_DATA_DATE, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var o = le.Long.fromNumber(n.getTime()),
                                s = o.getLowBits(),
                                u = o.getHighBits();
                            return e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255, e[r++] = 255 & u, e[r++] = u >> 8 & 255, e[r++] = u >> 16 & 255, e[r++] = u >> 24 & 255, r
                        }

                        function l(e, t, r, i, o) { if (e[i++] = Ee.BSON_DATA_REGEXP, i += o ? e.write(t, i, undefined, "ascii") : e.write(t, i, undefined, "utf8"), e[i++] = 0, r.source && null != r.source.match(n)) throw Error("value " + r.source + " must not contain null bytes"); return i += e.write(r.source, i, undefined, "utf8"), e[i++] = 0, r.ignoreCase && (e[i++] = 105), r.global && (e[i++] = 115), r.multiline && (e[i++] = 109), e[i++] = 0, i }

                        function p(e, t, r, i, o) { if (e[i++] = Ee.BSON_DATA_REGEXP, i += o ? e.write(t, i, undefined, "ascii") : e.write(t, i, undefined, "utf8"), e[i++] = 0, null != r.pattern.match(n)) throw Error("pattern " + r.pattern + " must not contain null bytes"); return i += e.write(r.pattern, i, undefined, "utf8"), e[i++] = 0, i += e.write(r.options.split("").sort().join(""), i, undefined, "utf8"), e[i++] = 0, i }

                        function d(e, t, n, r, i) { return null === n ? e[r++] = Ee.BSON_DATA_NULL : "MinKey" === n._bsontype ? e[r++] = Ee.BSON_DATA_MIN_KEY : e[r++] = Ee.BSON_DATA_MAX_KEY, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, r }

                        function h(e, t, n, r, i) {
                            if (e[r++] = Ee.BSON_DATA_OID, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, "string" == typeof n.id) e.write(n.id, r, undefined, "binary");
                            else {
                                if (!n.id || !n.id.copy) throw new TypeError("object [" + JSON.stringify(n) + "] is not a valid ObjectId");
                                n.id.copy(e, r, 0, 12)
                            }
                            return r + 12
                        }

                        function y(e, t, n, r, i) { e[r++] = Ee.BSON_DATA_BINARY, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0; var o = n.length; return e[r++] = 255 & o, e[r++] = o >> 8 & 255, e[r++] = o >> 16 & 255, e[r++] = o >> 24 & 255, e[r++] = Ee.BSON_BINARY_SUBTYPE_DEFAULT, e.set(se.ensureBuffer(n), r), r += o }

                        function g(e, t, n, r, i, o, s, u, a, c) {
                            void 0 === i && (i = !1), void 0 === o && (o = 0), void 0 === s && (s = !1), void 0 === u && (u = !0), void 0 === a && (a = !1), void 0 === c && (c = []);
                            for (var f = 0; f < c.length; f++)
                                if (c[f] === n) throw new Error("cyclic dependency detected");
                            c.push(n), e[r++] = Array.isArray(n) ? Ee.BSON_DATA_ARRAY : Ee.BSON_DATA_OBJECT, r += a ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var l = D(e, n, i, r, o + 1, s, u, c);
                            return c.pop(), l
                        }

                        function v(e, t, n, r, i) { return e[r++] = Ee.BSON_DATA_DECIMAL128, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, n.bytes.copy(e, r, 0, 16), r + 16 }

                        function _(e, t, n, r, i) {
                            e[r++] = "Long" === n._bsontype ? Ee.BSON_DATA_LONG : Ee.BSON_DATA_TIMESTAMP, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var o = n.getLowBits(),
                                s = n.getHighBits();
                            return e[r++] = 255 & o, e[r++] = o >> 8 & 255, e[r++] = o >> 16 & 255, e[r++] = o >> 24 & 255, e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255, r
                        }

                        function m(e, t, n, r, i) { return n = n.valueOf(), e[r++] = Ee.BSON_DATA_INT, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, e[r++] = 255 & n, e[r++] = n >> 8 & 255, e[r++] = n >> 16 & 255, e[r++] = n >> 24 & 255, r }

                        function b(e, t, n, r, i) { return e[r++] = Ee.BSON_DATA_NUMBER, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, Ne.writeIEEE754(e, n.value, r, "little", 52, 8), r += 8 }

                        function A(e, t, n, r, i, o, s) {
                            e[r++] = Ee.BSON_DATA_CODE, r += s ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var u = oe.normalizedFunctionString(n),
                                a = e.write(u, r + 4, undefined, "utf8") + 1;
                            return e[r] = 255 & a, e[r + 1] = a >> 8 & 255, e[r + 2] = a >> 16 & 255, e[r + 3] = a >> 24 & 255, r = r + 4 + a - 1, e[r++] = 0, r
                        }

                        function O(e, t, n, r, o, s, u, a, c) {
                            if (void 0 === o && (o = !1), void 0 === s && (s = 0), void 0 === u && (u = !1), void 0 === a && (a = !0), void 0 === c && (c = !1), n.scope && "object" === (0, i["default"])(n.scope)) {
                                e[r++] = Ee.BSON_DATA_CODE_W_SCOPE, r += c ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                                var f = r,
                                    l = "string" == typeof n.code ? n.code : n.code.toString();
                                r += 4;
                                var p = e.write(l, r + 4, undefined, "utf8") + 1;
                                e[r] = 255 & p, e[r + 1] = p >> 8 & 255, e[r + 2] = p >> 16 & 255, e[r + 3] = p >> 24 & 255, e[r + 4 + p - 1] = 0, r = r + p + 4;
                                var d = D(e, n.scope, o, r, s + 1, u, a);
                                r = d - 1;
                                var h = d - f;
                                e[f++] = 255 & h, e[f++] = h >> 8 & 255, e[f++] = h >> 16 & 255, e[f++] = h >> 24 & 255, e[r++] = 0
                            } else {
                                e[r++] = Ee.BSON_DATA_CODE, r += c ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0, l = n.code.toString();
                                var y = e.write(l, r + 4, undefined, "utf8") + 1;
                                e[r] = 255 & y, e[r + 1] = y >> 8 & 255, e[r + 2] = y >> 16 & 255, e[r + 3] = y >> 24 & 255, r = r + 4 + y - 1, e[r++] = 0
                            }
                            return r
                        }

                        function E(e, t, n, r, i) {
                            e[r++] = Ee.BSON_DATA_BINARY, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var o = n.value(!0),
                                s = n.position;
                            return n.sub_type === ae.Binary.SUBTYPE_BYTE_ARRAY && (s += 4), e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255, e[r++] = n.sub_type, n.sub_type === ae.Binary.SUBTYPE_BYTE_ARRAY && (s -= 4, e[r++] = 255 & s, e[r++] = s >> 8 & 255, e[r++] = s >> 16 & 255, e[r++] = s >> 24 & 255), e.set(o, r), r += n.position
                        }

                        function w(e, t, n, r, i) { e[r++] = Ee.BSON_DATA_SYMBOL, r += i ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0; var o = e.write(n.value, r + 4, undefined, "utf8") + 1; return e[r] = 255 & o, e[r + 1] = o >> 8 & 255, e[r + 2] = o >> 16 & 255, e[r + 3] = o >> 24 & 255, r = r + 4 + o - 1, e[r++] = 0, r }

                        function S(e, t, n, r, i, o, s) {
                            e[r++] = Ee.BSON_DATA_OBJECT, r += s ? e.write(t, r, undefined, "ascii") : e.write(t, r, undefined, "utf8"), e[r++] = 0;
                            var u = r,
                                a = { $ref: n.collection || n.namespace, $id: n.oid };
                            null != n.db && (a.$db = n.db);
                            var c = D(e, a = Object.assign(a, n.fields), !1, r, i + 1, o),
                                f = c - u;
                            return e[u++] = 255 & f, e[u++] = f >> 8 & 255, e[u++] = f >> 16 & 255, e[u++] = f >> 24 & 255, c
                        }

                        function D(e, t, D, N, T, I, B, C) {
                            void 0 === D && (D = !1), void 0 === N && (N = 0), void 0 === T && (T = 0), void 0 === I && (I = !1), void 0 === B && (B = !0), void 0 === C && (C = []), N = N || 0, (C = C || []).push(t);
                            var x = N + 4;
                            if (Array.isArray(t))
                                for (var P = 0; P < t.length; P++) {
                                    var k = "" + P;
                                    if ((U = t[P]) && U.toBSON) {
                                        if ("function" != typeof U.toBSON) throw new TypeError("toBSON is not a function");
                                        U = U.toBSON()
                                    }
                                    if ("string" == typeof U) x = s(e, k, U, x, !0);
                                    else if ("number" == typeof U) x = u(e, k, U, x, !0);
                                    else {
                                        if ("bigint" == typeof U) throw new TypeError("Unsupported type BigInt, please use Decimal128");
                                        if ("boolean" == typeof U) x = c(e, k, U, x, !0);
                                        else if (U instanceof Date || oe.isDate(U)) x = f(e, k, U, x, !0);
                                        else if (U === undefined) x = a(e, k, 0, x, !0);
                                        else if (null === U) x = a(e, k, 0, x, !0);
                                        else if ("ObjectId" === U._bsontype || "ObjectID" === U._bsontype) x = h(e, k, U, x, !0);
                                        else if (oe.isBuffer(U) || oe.isUint8Array(U)) x = y(e, k, U, x, !0);
                                        else if (U instanceof RegExp || o(U)) x = l(e, k, U, x, !0);
                                        else if ("object" === (0, i["default"])(U) && null == U._bsontype) x = g(e, k, U, x, D, T, I, B, !0, C);
                                        else if ("object" === (0, i["default"])(U) && Ae.isBSONType(U) && "Decimal128" === U._bsontype) x = v(e, k, U, x, !0);
                                        else if ("Long" === U._bsontype || "Timestamp" === U._bsontype) x = _(e, k, U, x, !0);
                                        else if ("Double" === U._bsontype) x = b(e, k, U, x, !0);
                                        else if ("function" == typeof U && I) x = A(e, k, U, x, 0, 0, !0);
                                        else if ("Code" === U._bsontype) x = O(e, k, U, x, D, T, I, B, !0);
                                        else if ("Binary" === U._bsontype) x = E(e, k, U, x, !0);
                                        else if ("Symbol" === U._bsontype) x = w(e, k, U, x, !0);
                                        else if ("DBRef" === U._bsontype) x = S(e, k, U, x, T, I, !0);
                                        else if ("BSONRegExp" === U._bsontype) x = p(e, k, U, x, !0);
                                        else if ("Int32" === U._bsontype) x = m(e, k, U, x, !0);
                                        else if ("MinKey" === U._bsontype || "MaxKey" === U._bsontype) x = d(e, k, U, x, !0);
                                        else if ("undefined" != typeof U._bsontype) throw new TypeError("Unrecognized or invalid _bsontype: " + U._bsontype)
                                    }
                                } else if (t instanceof Oe.Map)
                                    for (var L = t.entries(), R = !1; !R;) {
                                        var M = L.next();
                                        if (!(R = !!M.done)) {
                                            k = M.value[0];
                                            var U = M.value[1],
                                                j = (0, i["default"])(U);
                                            if ("string" == typeof k && !r.has(k)) { if (null != k.match(n)) throw Error("key " + k + " must not contain null bytes"); if (D) { if ("$" === k[0]) throw Error("key " + k + " must not start with '$'"); if (~k.indexOf(".")) throw Error("key " + k + " must not contain '.'") } }
                                            if ("string" === j) x = s(e, k, U, x);
                                            else if ("number" === j) x = u(e, k, U, x);
                                            else {
                                                if ("bigint" === j || oe.isBigInt64Array(U) || oe.isBigUInt64Array(U)) throw new TypeError("Unsupported type BigInt, please use Decimal128");
                                                if ("boolean" === j) x = c(e, k, U, x);
                                                else if (U instanceof Date || oe.isDate(U)) x = f(e, k, U, x);
                                                else if (null === U || U === undefined && !1 === B) x = a(e, k, 0, x);
                                                else if ("ObjectId" === U._bsontype || "ObjectID" === U._bsontype) x = h(e, k, U, x);
                                                else if (oe.isBuffer(U) || oe.isUint8Array(U)) x = y(e, k, U, x);
                                                else if (U instanceof RegExp || o(U)) x = l(e, k, U, x);
                                                else if ("object" === j && null == U._bsontype) x = g(e, k, U, x, D, T, I, B, !1, C);
                                                else if ("object" === j && "Decimal128" === U._bsontype) x = v(e, k, U, x);
                                                else if ("Long" === U._bsontype || "Timestamp" === U._bsontype) x = _(e, k, U, x);
                                                else if ("Double" === U._bsontype) x = b(e, k, U, x);
                                                else if ("Code" === U._bsontype) x = O(e, k, U, x, D, T, I, B);
                                                else if ("function" == typeof U && I) x = A(e, k, U, x, 0, 0, I);
                                                else if ("Binary" === U._bsontype) x = E(e, k, U, x);
                                                else if ("Symbol" === U._bsontype) x = w(e, k, U, x);
                                                else if ("DBRef" === U._bsontype) x = S(e, k, U, x, T, I);
                                                else if ("BSONRegExp" === U._bsontype) x = p(e, k, U, x);
                                                else if ("Int32" === U._bsontype) x = m(e, k, U, x);
                                                else if ("MinKey" === U._bsontype || "MaxKey" === U._bsontype) x = d(e, k, U, x);
                                                else if ("undefined" != typeof U._bsontype) throw new TypeError("Unrecognized or invalid _bsontype: " + U._bsontype)
                                            }
                                        }
                                    } else {
                                        if (t.toBSON) { if ("function" != typeof t.toBSON) throw new TypeError("toBSON is not a function"); if (null != (t = t.toBSON()) && "object" !== (0, i["default"])(t)) throw new TypeError("toBSON function did not return an object") }
                                        for (var k in t) {
                                            if ((U = t[k]) && U.toBSON) {
                                                if ("function" != typeof U.toBSON) throw new TypeError("toBSON is not a function");
                                                U = U.toBSON()
                                            }
                                            if (j = (0, i["default"])(U), "string" == typeof k && !r.has(k)) { if (null != k.match(n)) throw Error("key " + k + " must not contain null bytes"); if (D) { if ("$" === k[0]) throw Error("key " + k + " must not start with '$'"); if (~k.indexOf(".")) throw Error("key " + k + " must not contain '.'") } }
                                            if ("string" === j) x = s(e, k, U, x);
                                            else if ("number" === j) x = u(e, k, U, x);
                                            else {
                                                if ("bigint" === j) throw new TypeError("Unsupported type BigInt, please use Decimal128");
                                                if ("boolean" === j) x = c(e, k, U, x);
                                                else if (U instanceof Date || oe.isDate(U)) x = f(e, k, U, x);
                                                else if (U === undefined) !1 === B && (x = a(e, k, 0, x));
                                                else if (null === U) x = a(e, k, 0, x);
                                                else if ("ObjectId" === U._bsontype || "ObjectID" === U._bsontype) x = h(e, k, U, x);
                                                else if (oe.isBuffer(U) || oe.isUint8Array(U)) x = y(e, k, U, x);
                                                else if (U instanceof RegExp || o(U)) x = l(e, k, U, x);
                                                else if ("object" === j && null == U._bsontype) x = g(e, k, U, x, D, T, I, B, !1, C);
                                                else if ("object" === j && "Decimal128" === U._bsontype) x = v(e, k, U, x);
                                                else if ("Long" === U._bsontype || "Timestamp" === U._bsontype) x = _(e, k, U, x);
                                                else if ("Double" === U._bsontype) x = b(e, k, U, x);
                                                else if ("Code" === U._bsontype) x = O(e, k, U, x, D, T, I, B);
                                                else if ("function" == typeof U && I) x = A(e, k, U, x, 0, 0, I);
                                                else if ("Binary" === U._bsontype) x = E(e, k, U, x);
                                                else if ("Symbol" === U._bsontype) x = w(e, k, U, x);
                                                else if ("DBRef" === U._bsontype) x = S(e, k, U, x, T, I);
                                                else if ("BSONRegExp" === U._bsontype) x = p(e, k, U, x);
                                                else if ("Int32" === U._bsontype) x = m(e, k, U, x);
                                                else if ("MinKey" === U._bsontype || "MaxKey" === U._bsontype) x = d(e, k, U, x);
                                                else if ("undefined" != typeof U._bsontype) throw new TypeError("Unrecognized or invalid _bsontype: " + U._bsontype)
                                            }
                                        }
                                    }
                            C.pop(), e[x++] = 0;
                            var F = x - N;
                            return e[N++] = 255 & F, e[N++] = F >> 8 & 255, e[N++] = F >> 16 & 255, e[N++] = F >> 24 & 255, x
                        }
                        t.serializeInto = D
                    }));
                    s(Te), Te.serializeInto;
                    var Ie = u((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.deserializeStream = t.calculateObjectSize = t.deserialize = t.serializeWithBufferAndIndex = t.serialize = t.setInternalBufferSize = t.ObjectID = t.Decimal128 = t.BSONRegExp = t.MaxKey = t.MinKey = t.Int32 = t.Double = t.Timestamp = t.Long = t.ObjectId = t.Binary = t.DBRef = t.BSONSymbol = t.Map = t.Code = t.LongWithoutOverridesClass = t.EJSON = t.BSON_INT64_MIN = t.BSON_INT64_MAX = t.BSON_INT32_MIN = t.BSON_INT32_MAX = t.BSON_DATA_UNDEFINED = t.BSON_DATA_TIMESTAMP = t.BSON_DATA_SYMBOL = t.BSON_DATA_STRING = t.BSON_DATA_REGEXP = t.BSON_DATA_OID = t.BSON_DATA_OBJECT = t.BSON_DATA_NUMBER = t.BSON_DATA_NULL = t.BSON_DATA_MIN_KEY = t.BSON_DATA_MAX_KEY = t.BSON_DATA_LONG = t.BSON_DATA_INT = t.BSON_DATA_DECIMAL128 = t.BSON_DATA_DBPOINTER = t.BSON_DATA_DATE = t.BSON_DATA_CODE_W_SCOPE = t.BSON_DATA_CODE = t.BSON_DATA_BOOLEAN = t.BSON_DATA_BINARY = t.BSON_DATA_ARRAY = t.BSON_BINARY_SUBTYPE_UUID_NEW = t.BSON_BINARY_SUBTYPE_UUID = t.BSON_BINARY_SUBTYPE_USER_DEFINED = t.BSON_BINARY_SUBTYPE_MD5 = t.BSON_BINARY_SUBTYPE_FUNCTION = t.BSON_BINARY_SUBTYPE_DEFAULT = t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = void 0, Object.defineProperty(t, "Binary", { enumerable: !0, get: function() { return ae.Binary } }), Object.defineProperty(t, "Code", { enumerable: !0, get: function() { return ce.Code } }), Object.defineProperty(t, "DBRef", { enumerable: !0, get: function() { return fe.DBRef } }), Object.defineProperty(t, "Decimal128", { enumerable: !0, get: function() { return pe.Decimal128 } }), Object.defineProperty(t, "Double", { enumerable: !0, get: function() { return de.Double } }), Object.defineProperty(t, "Int32", { enumerable: !0, get: function() { return he.Int32 } }), Object.defineProperty(t, "Long", { enumerable: !0, get: function() { return le.Long } }), Object.defineProperty(t, "Map", { enumerable: !0, get: function() { return Oe.Map } }), Object.defineProperty(t, "MaxKey", { enumerable: !0, get: function() { return ye.MaxKey } }), Object.defineProperty(t, "MinKey", { enumerable: !0, get: function() { return ge.MinKey } }), Object.defineProperty(t, "ObjectId", { enumerable: !0, get: function() { return ve.ObjectId } }), Object.defineProperty(t, "ObjectID", { enumerable: !0, get: function() { return ve.ObjectId } }), Object.defineProperty(t, "BSONRegExp", { enumerable: !0, get: function() { return _e.BSONRegExp } }), Object.defineProperty(t, "BSONSymbol", { enumerable: !0, get: function() { return me.BSONSymbol } }), Object.defineProperty(t, "Timestamp", { enumerable: !0, get: function() { return be.Timestamp } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_BYTE_ARRAY", { enumerable: !0, get: function() { return Ee.BSON_BINARY_SUBTYPE_BYTE_ARRAY } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_DEFAULT", { enumerable: !0, get: function() { return Ee.BSON_BINARY_SUBTYPE_DEFAULT } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_FUNCTION", { enumerable: !0, get: function() { return Ee.BSON_BINARY_SUBTYPE_FUNCTION } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_MD5", { enumerable: !0, get: function() { return Ee.BSON_BINARY_SUBTYPE_MD5 } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_USER_DEFINED", { enumerable: !0, get: function() { return Ee.BSON_BINARY_SUBTYPE_USER_DEFINED } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_UUID", { enumerable: !0, get: function() { return Ee.BSON_BINARY_SUBTYPE_UUID } }), Object.defineProperty(t, "BSON_BINARY_SUBTYPE_UUID_NEW", { enumerable: !0, get: function() { return Ee.BSON_BINARY_SUBTYPE_UUID_NEW } }), Object.defineProperty(t, "BSON_DATA_ARRAY", { enumerable: !0, get: function() { return Ee.BSON_DATA_ARRAY } }), Object.defineProperty(t, "BSON_DATA_BINARY", { enumerable: !0, get: function() { return Ee.BSON_DATA_BINARY } }), Object.defineProperty(t, "BSON_DATA_BOOLEAN", { enumerable: !0, get: function() { return Ee.BSON_DATA_BOOLEAN } }), Object.defineProperty(t, "BSON_DATA_CODE", { enumerable: !0, get: function() { return Ee.BSON_DATA_CODE } }), Object.defineProperty(t, "BSON_DATA_CODE_W_SCOPE", { enumerable: !0, get: function() { return Ee.BSON_DATA_CODE_W_SCOPE } }), Object.defineProperty(t, "BSON_DATA_DATE", { enumerable: !0, get: function() { return Ee.BSON_DATA_DATE } }), Object.defineProperty(t, "BSON_DATA_DBPOINTER", { enumerable: !0, get: function() { return Ee.BSON_DATA_DBPOINTER } }), Object.defineProperty(t, "BSON_DATA_DECIMAL128", { enumerable: !0, get: function() { return Ee.BSON_DATA_DECIMAL128 } }), Object.defineProperty(t, "BSON_DATA_INT", { enumerable: !0, get: function() { return Ee.BSON_DATA_INT } }), Object.defineProperty(t, "BSON_DATA_LONG", { enumerable: !0, get: function() { return Ee.BSON_DATA_LONG } }), Object.defineProperty(t, "BSON_DATA_MAX_KEY", { enumerable: !0, get: function() { return Ee.BSON_DATA_MAX_KEY } }), Object.defineProperty(t, "BSON_DATA_MIN_KEY", { enumerable: !0, get: function() { return Ee.BSON_DATA_MIN_KEY } }), Object.defineProperty(t, "BSON_DATA_NULL", { enumerable: !0, get: function() { return Ee.BSON_DATA_NULL } }), Object.defineProperty(t, "BSON_DATA_NUMBER", { enumerable: !0, get: function() { return Ee.BSON_DATA_NUMBER } }), Object.defineProperty(t, "BSON_DATA_OBJECT", { enumerable: !0, get: function() { return Ee.BSON_DATA_OBJECT } }), Object.defineProperty(t, "BSON_DATA_OID", { enumerable: !0, get: function() { return Ee.BSON_DATA_OID } }), Object.defineProperty(t, "BSON_DATA_REGEXP", { enumerable: !0, get: function() { return Ee.BSON_DATA_REGEXP } }), Object.defineProperty(t, "BSON_DATA_STRING", { enumerable: !0, get: function() { return Ee.BSON_DATA_STRING } }), Object.defineProperty(t, "BSON_DATA_SYMBOL", { enumerable: !0, get: function() { return Ee.BSON_DATA_SYMBOL } }), Object.defineProperty(t, "BSON_DATA_TIMESTAMP", { enumerable: !0, get: function() { return Ee.BSON_DATA_TIMESTAMP } }), Object.defineProperty(t, "BSON_DATA_UNDEFINED", { enumerable: !0, get: function() { return Ee.BSON_DATA_UNDEFINED } }), Object.defineProperty(t, "BSON_INT32_MAX", { enumerable: !0, get: function() { return Ee.BSON_INT32_MAX } }), Object.defineProperty(t, "BSON_INT32_MIN", { enumerable: !0, get: function() { return Ee.BSON_INT32_MIN } }), Object.defineProperty(t, "BSON_INT64_MAX", { enumerable: !0, get: function() { return Ee.BSON_INT64_MAX } }), Object.defineProperty(t, "BSON_INT64_MIN", { enumerable: !0, get: function() { return Ee.BSON_INT64_MIN } });
                            var n = Ae;
                            Object.defineProperty(t, "EJSON", { enumerable: !0, get: function() { return n.EJSON } });
                            var r = be;
                            Object.defineProperty(t, "LongWithoutOverridesClass", { enumerable: !0, get: function() { return r.LongWithoutOverridesClass } });
                            var i = 17825792,
                                o = O.Buffer.alloc(i);

                            function s(e) { o.length < e && (o = O.Buffer.alloc(e)) }

                            function u(e, t) {
                                void 0 === t && (t = {});
                                var n = "boolean" == typeof t.checkKeys && t.checkKeys,
                                    r = "boolean" == typeof t.serializeFunctions && t.serializeFunctions,
                                    s = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined,
                                    u = "number" == typeof t.minInternalBufferSize ? t.minInternalBufferSize : i;
                                o.length < u && (o = O.Buffer.alloc(u));
                                var a = Te.serializeInto(o, e, n, 0, 0, r, s, []),
                                    c = O.Buffer.alloc(a);
                                return o.copy(c, 0, 0, c.length), c
                            }

                            function a(e, t, n) {
                                void 0 === n && (n = {});
                                var r = "boolean" == typeof n.checkKeys && n.checkKeys,
                                    i = "boolean" == typeof n.serializeFunctions && n.serializeFunctions,
                                    s = "boolean" != typeof n.ignoreUndefined || n.ignoreUndefined,
                                    u = "number" == typeof n.index ? n.index : 0,
                                    a = Te.serializeInto(o, e, r, 0, 0, i, s);
                                return o.copy(t, u, 0, a), u + a - 1
                            }

                            function c(e, t) { return void 0 === t && (t = {}), De.deserialize(se.ensureBuffer(e), t) }

                            function f(e, t) {
                                void 0 === t && (t = {});
                                var n = "boolean" == typeof(t = t || {}).serializeFunctions && t.serializeFunctions,
                                    r = "boolean" != typeof t.ignoreUndefined || t.ignoreUndefined;
                                return we.calculateObjectSize(e, n, r)
                            }

                            function l(e, t, n, r, i, o) {
                                for (var s = Object.assign({ allowObjectSmallerThanBufferSize: !0, index: 0 }, o), u = se.ensureBuffer(e), a = t, c = 0; c < n; c++) {
                                    var f = u[a] | u[a + 1] << 8 | u[a + 2] << 16 | u[a + 3] << 24;
                                    s.index = a, r[i + c] = De.deserialize(u, s), a += f
                                }
                                return a
                            }
                            t.setInternalBufferSize = s, t.serialize = u, t.serializeWithBufferAndIndex = a, t.deserialize = c, t.calculateObjectSize = f, t.deserializeStream = l;
                            var p = { Binary: ae.Binary, Code: ce.Code, DBRef: fe.DBRef, Decimal128: pe.Decimal128, Double: de.Double, Int32: he.Int32, Long: le.Long, Map: Oe.Map, MaxKey: ye.MaxKey, MinKey: ge.MinKey, ObjectId: ve.ObjectId, ObjectID: ve.ObjectId, BSONRegExp: _e.BSONRegExp, BSONSymbol: me.BSONSymbol, Timestamp: be.Timestamp, EJSON: Ae.EJSON, setInternalBufferSize: s, serialize: u, serializeWithBufferAndIndex: a, deserialize: c, calculateObjectSize: f, deserializeStream: l };
                            t["default"] = p
                        })),
                        Be = s(Ie),
                        Ce = Ie.deserializeStream;
                    t.deserializeStream = Ce;
                    var xe = Ie.calculateObjectSize;
                    t.calculateObjectSize = xe;
                    var Pe = Ie.deserialize;
                    t.deserialize = Pe;
                    var ke = Ie.serializeWithBufferAndIndex;
                    t.serializeWithBufferAndIndex = ke;
                    var Le = Ie.serialize;
                    t.serialize = Le;
                    var Re = Ie.setInternalBufferSize;
                    t.setInternalBufferSize = Re;
                    var Me = Ie.ObjectID;
                    t.ObjectID = Me;
                    var Ue = Ie.Decimal128;
                    t.Decimal128 = Ue;
                    var je = Ie.BSONRegExp;
                    t.BSONRegExp = je;
                    var Fe = Ie.MaxKey;
                    t.MaxKey = Fe;
                    var $e = Ie.MinKey;
                    t.MinKey = $e;
                    var Ye = Ie.Int32;
                    t.Int32 = Ye;
                    var qe = Ie.Double;
                    t.Double = qe;
                    var Ge = Ie.Timestamp;
                    t.Timestamp = Ge;
                    var ze = Ie.Long;
                    t.Long = ze;
                    var We = Ie.ObjectId;
                    t.ObjectId = We;
                    var He = Ie.Binary;
                    t.Binary = He;
                    var Ve = Ie.DBRef;
                    t.DBRef = Ve;
                    var Ke = Ie.BSONSymbol;
                    t.BSONSymbol = Ke;
                    var Je = Ie.Map;
                    t.Map = Je;
                    var Qe = Ie.Code;
                    t.Code = Qe;
                    var Xe = Ie.LongWithoutOverridesClass;
                    t.LongWithoutOverridesClass = Xe;
                    var Ze = Ie.EJSON;
                    t.EJSON = Ze;
                    var et = Ie.BSON_INT64_MIN;
                    t.BSON_INT64_MIN = et;
                    var tt = Ie.BSON_INT64_MAX;
                    t.BSON_INT64_MAX = tt;
                    var nt = Ie.BSON_INT32_MIN;
                    t.BSON_INT32_MIN = nt;
                    var rt = Ie.BSON_INT32_MAX;
                    t.BSON_INT32_MAX = rt;
                    var it = Ie.BSON_DATA_UNDEFINED;
                    t.BSON_DATA_UNDEFINED = it;
                    var ot = Ie.BSON_DATA_TIMESTAMP;
                    t.BSON_DATA_TIMESTAMP = ot;
                    var st = Ie.BSON_DATA_SYMBOL;
                    t.BSON_DATA_SYMBOL = st;
                    var ut = Ie.BSON_DATA_STRING;
                    t.BSON_DATA_STRING = ut;
                    var at = Ie.BSON_DATA_REGEXP;
                    t.BSON_DATA_REGEXP = at;
                    var ct = Ie.BSON_DATA_OID;
                    t.BSON_DATA_OID = ct;
                    var ft = Ie.BSON_DATA_OBJECT;
                    t.BSON_DATA_OBJECT = ft;
                    var lt = Ie.BSON_DATA_NUMBER;
                    t.BSON_DATA_NUMBER = lt;
                    var pt = Ie.BSON_DATA_NULL;
                    t.BSON_DATA_NULL = pt;
                    var dt = Ie.BSON_DATA_MIN_KEY;
                    t.BSON_DATA_MIN_KEY = dt;
                    var ht = Ie.BSON_DATA_MAX_KEY;
                    t.BSON_DATA_MAX_KEY = ht;
                    var yt = Ie.BSON_DATA_LONG;
                    t.BSON_DATA_LONG = yt;
                    var gt = Ie.BSON_DATA_INT;
                    t.BSON_DATA_INT = gt;
                    var vt = Ie.BSON_DATA_DECIMAL128;
                    t.BSON_DATA_DECIMAL128 = vt;
                    var _t = Ie.BSON_DATA_DBPOINTER;
                    t.BSON_DATA_DBPOINTER = _t;
                    var mt = Ie.BSON_DATA_DATE;
                    t.BSON_DATA_DATE = mt;
                    var bt = Ie.BSON_DATA_CODE_W_SCOPE;
                    t.BSON_DATA_CODE_W_SCOPE = bt;
                    var At = Ie.BSON_DATA_CODE;
                    t.BSON_DATA_CODE = At;
                    var Ot = Ie.BSON_DATA_BOOLEAN;
                    t.BSON_DATA_BOOLEAN = Ot;
                    var Et = Ie.BSON_DATA_BINARY;
                    t.BSON_DATA_BINARY = Et;
                    var wt = Ie.BSON_DATA_ARRAY;
                    t.BSON_DATA_ARRAY = wt;
                    var St = Ie.BSON_BINARY_SUBTYPE_UUID_NEW;
                    t.BSON_BINARY_SUBTYPE_UUID_NEW = St;
                    var Dt = Ie.BSON_BINARY_SUBTYPE_UUID;
                    t.BSON_BINARY_SUBTYPE_UUID = Dt;
                    var Nt = Ie.BSON_BINARY_SUBTYPE_USER_DEFINED;
                    t.BSON_BINARY_SUBTYPE_USER_DEFINED = Nt;
                    var Tt = Ie.BSON_BINARY_SUBTYPE_MD5;
                    t.BSON_BINARY_SUBTYPE_MD5 = Tt;
                    var It = Ie.BSON_BINARY_SUBTYPE_FUNCTION;
                    t.BSON_BINARY_SUBTYPE_FUNCTION = It;
                    var Bt = Ie.BSON_BINARY_SUBTYPE_DEFAULT;
                    t.BSON_BINARY_SUBTYPE_DEFAULT = Bt;
                    var Ct = Ie.BSON_BINARY_SUBTYPE_BYTE_ARRAY;
                    t.BSON_BINARY_SUBTYPE_BYTE_ARRAY = Ct;
                    var xt = Be;
                    t["default"] = xt
                },
                4934: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = t.WxMpWebSocket = t.wxMpStorage = t.WxRequest = void 0;
                    var r, i = n(1588),
                        o = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        }, function(e, t) {
                            function n() { this.constructor = e }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        s = function() {
                            return (s = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }).apply(this, arguments)
                        },
                        u = function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function s(e) { try { a(r.next(e)) } catch (t) { o(t) } }

                                function u(e) { try { a(r["throw"](e)) } catch (t) { o(t) } }

                                function a(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(s, u)
                                }
                                a((r = r.apply(e, t || [])).next())
                            }))
                        },
                        a = function(e, t) {
                            var n, r, i, o, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
                            return o = { next: u(0), "throw": u(1), "return": u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                            function u(o) {
                                return function(u) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; s;) try {
                                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    i = o;
                                                    break;
                                                case 4:
                                                    return s.label++, { value: o[1], done: !1 };
                                                case 5:
                                                    s.label++, r = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { s = 0; continue }
                                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { s.label = o[1]; break }
                                                    if (6 === o[0] && s.label < i[1]) { s.label = i[1], i = o; break }
                                                    if (i && s.label < i[2]) { s.label = i[2], s.ops.push(o); break }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            o = t.call(e, s)
                                        } catch (u) { o = [6, u], r = 0 } finally { n = i = 0 }
                                        if (5 & o[0]) throw o[1];
                                        return { value: o[0] ? o[1] : void 0, done: !0 }
                                    }([o, u])
                                }
                            }
                        },
                        c = function(e) {
                            function t(t) {
                                void 0 === t && (t = {});
                                var n = e.call(this) || this,
                                    r = t.timeout,
                                    i = t.timeoutMsg,
                                    o = t.restrictedMethods;
                                return n._timeout = r || 0, n._timeoutMsg = i || "请求超时", n._restrictedMethods = o || ["get", "post", "upload", "download"], n
                            }
                            return o(t, e), t.prototype.post = function(e) {
                                var t = this;
                                return new Promise((function(n, r) {
                                    var o = e.url,
                                        s = e.data,
                                        u = e.headers,
                                        a = wx.request({ url: (0, i.formatUrl)("https:", o), data: s, timeout: t._timeout, method: "POST", header: u, success: function(e) { n(e) }, fail: function(e) { r(e) }, complete: function(e) { if (e && e.errMsg && t._timeout && -1 !== t._restrictedMethods.indexOf("post") && "request:fail timeout" === e.errMsg) { console.warn(t._timeoutMsg); try { a.abort() } catch (n) {} } } })
                                }))
                            }, t.prototype.upload = function(e) {
                                var t = this,
                                    n = this;
                                return new Promise((function(r) {
                                    return u(t, void 0, void 0, (function() {
                                        var t, i, o, u, c, f;
                                        return a(this, (function(a) {
                                            return t = e.url, i = e.file, o = e.data, u = e.headers, c = e.onUploadProgress, f = wx.uploadFile({
                                                url: t,
                                                filePath: i,
                                                name: "file",
                                                formData: s({}, o),
                                                header: u,
                                                timeout: this._timeout,
                                                success: function(e) {
                                                    var t = { statusCode: e.statusCode, data: e.data || {} };
                                                    200 === e.statusCode && o.success_action_status && (t.statusCode = parseInt(o.success_action_status, 10)), r(t)
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
                                return new Promise((function(r, o) {
                                    var s = e.url,
                                        u = e.headers,
                                        a = wx.downloadFile({ url: (0, i.formatUrl)("https:", s), header: u, timeout: t._timeout, success: function(e) { 200 === e.statusCode && e.tempFilePath ? r({ statusCode: 200, tempFilePath: e.tempFilePath }) : r(e) }, fail: function(e) { o(e) }, complete: function(e) { if (e && e.errMsg && n._timeout && -1 !== n._restrictedMethods.indexOf("download") && "request:fail timeout" === e.errMsg) { console.warn(n._timeoutMsg); try { a.abort() } catch (t) {} } } })
                                }))
                            }, t
                        }(i.AbstractSDKRequest);
                    t.WxRequest = c;
                    var f = { setItem: function(e, t) { wx.setStorageSync(e, t) }, getItem: function(e) { return wx.getStorageSync(e) }, removeItem: function(e) { wx.removeStorageSync(e) }, clear: function() { wx.clearStorageSync() } };
                    t.wxMpStorage = f;
                    var l = function(e, t) { void 0 === t && (t = {}); var n = wx.connectSocket(s({ url: e }, t)); return {set onopen(e) { n.onOpen(e) }, set onmessage(e) { n.onMessage(e) }, set onclose(e) { n.onClose(e) }, set onerror(e) { n.onError(e) }, send: function(e) { return n.send({ data: e }) }, close: function(e, t) { return n.close({ code: e, reason: t }) }, get readyState() { return n.readyState }, CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 } };
                    t.WxMpWebSocket = l;
                    var p = { genAdapter: function() { return { root: {}, reqClass: c, wsClass: l, localStorage: f, primaryStorage: i.StorageType.local, getAppSign: function() { var e = wx.getAccountInfoSync(); return "undefined" != typeof App || "undefined" != typeof getApp || wx.onAppHide || wx.offAppHide || wx.onAppShow || wx.offAppShow ? e && e.miniProgram ? e.miniProgram.appId : "" : e && e.plugin ? e.plugin.appId : "" } } }, isMatch: function() { if ("undefined" == typeof wx) return !1; if ("undefined" == typeof Page) return !1; if (!wx.getSystemInfoSync) return !1; if (!wx.getStorageSync) return !1; if (!wx.setStorageSync) return !1; if (!wx.connectSocket) return !1; if (!wx.request) return !1; try { if (!wx.getSystemInfoSync()) return !1; if ("qq" === wx.getSystemInfoSync().AppPlatform) return !1 } catch (e) { return !1 } return !0 }, runtime: "wx_mp" };
                    t["default"] = p
                },
                9935: function(e, t, n) {
                    "use strict";
                    var r, i, o, s, u = n(3483)(n(3988));
                    s = function() {
                        var e = e || function(e, t) {
                            var n = Object.create || function() {
                                    function e() {}
                                    return function(t) { var n; return e.prototype = t, n = new e, e.prototype = null, n }
                                }(),
                                r = {},
                                i = r.lib = {},
                                o = i.Base = {
                                    extend: function(e) { var t = n(this); return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() { t.$super.init.apply(this, arguments) }), t.init.prototype = t, t.$super = this, t },
                                    create: function() { var e = this.extend(); return e.init.apply(e, arguments), e },
                                    init: function() {},
                                    mixIn: function(e) {
                                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                                    },
                                    clone: function() { return this.init.prototype.extend(this) }
                                },
                                s = i.WordArray = o.extend({
                                    init: function(e, t) { e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length },
                                    toString: function(e) { return (e || a).stringify(this) },
                                    concat: function(e) {
                                        var t = this.words,
                                            n = e.words,
                                            r = this.sigBytes,
                                            i = e.sigBytes;
                                        if (this.clamp(), r % 4)
                                            for (var o = 0; o < i; o++) {
                                                var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                                t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8
                                            } else
                                                for (o = 0; o < i; o += 4) t[r + o >>> 2] = n[o >>> 2];
                                        return this.sigBytes += i, this
                                    },
                                    clamp: function() {
                                        var t = this.words,
                                            n = this.sigBytes;
                                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                                    },
                                    clone: function() { var e = o.clone.call(this); return e.words = this.words.slice(0), e },
                                    random: function(t) {
                                        for (var n, r = [], i = function(t) {
                                                t = t;
                                                var n = 987654321,
                                                    r = 4294967295;
                                                return function() { var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r; return i /= 4294967296, (i += .5) * (e.random() > .5 ? 1 : -1) }
                                            }, o = 0; o < t; o += 4) {
                                            var u = i(4294967296 * (n || e.random()));
                                            n = 987654071 * u(), r.push(4294967296 * u() | 0)
                                        }
                                        return new s.init(r, t)
                                    }
                                }),
                                u = r.enc = {},
                                a = u.Hex = {
                                    stringify: function(e) {
                                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                            r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16))
                                        }
                                        return r.join("")
                                    },
                                    parse: function(e) { for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4; return new s.init(n, t / 2) }
                                },
                                c = u.Latin1 = {
                                    stringify: function(e) {
                                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                            r.push(String.fromCharCode(o))
                                        }
                                        return r.join("")
                                    },
                                    parse: function(e) { for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8; return new s.init(n, t) }
                                },
                                f = u.Utf8 = { stringify: function(e) { try { return decodeURIComponent(escape(c.stringify(e))) } catch (t) { throw new Error("Malformed UTF-8 data") } }, parse: function(e) { return c.parse(unescape(encodeURIComponent(e))) } },
                                l = i.BufferedBlockAlgorithm = o.extend({
                                    reset: function() { this._data = new s.init, this._nDataBytes = 0 },
                                    _append: function(e) { "string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes },
                                    _process: function(t) {
                                        var n = this._data,
                                            r = n.words,
                                            i = n.sigBytes,
                                            o = this.blockSize,
                                            u = i / (4 * o),
                                            a = (u = t ? e.ceil(u) : e.max((0 | u) - this._minBufferSize, 0)) * o,
                                            c = e.min(4 * a, i);
                                        if (a) {
                                            for (var f = 0; f < a; f += o) this._doProcessBlock(r, f);
                                            var l = r.splice(0, a);
                                            n.sigBytes -= c
                                        }
                                        return new s.init(l, c)
                                    },
                                    clone: function() { var e = o.clone.call(this); return e._data = this._data.clone(), e },
                                    _minBufferSize: 0
                                }),
                                p = (i.Hasher = l.extend({ cfg: o.extend(), init: function(e) { this.cfg = this.cfg.extend(e), this.reset() }, reset: function() { l.reset.call(this), this._doReset() }, update: function(e) { return this._append(e), this._process(), this }, finalize: function(e) { return e && this._append(e), this._doFinalize() }, blockSize: 16, _createHelper: function(e) { return function(t, n) { return new e.init(n).finalize(t) } }, _createHmacHelper: function(e) { return function(t, n) { return new p.HMAC.init(e, n).finalize(t) } } }), r.algo = {});
                            return r
                        }(Math);
                        return e
                    }, "object" === (0, u["default"])(t) ? e.exports = t = s() : (i = [], (o = "function" == typeof(r = s) ? r.apply(t, i) : r) === undefined || (e.exports = o))
                },
                4544: function(e, t, n) {
                    "use strict";
                    var r, i, o, s, u = n(3483)(n(3988));
                    s = function(e) {
                        var t, n;
                        return n = (t = e).lib.WordArray, t.enc.Base64 = {
                            stringify: function(e) {
                                var t = e.words,
                                    n = e.sigBytes,
                                    r = this._map;
                                e.clamp();
                                for (var i = [], o = 0; o < n; o += 3)
                                    for (var s = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, u = 0; u < 4 && o + .75 * u < n; u++) i.push(r.charAt(s >>> 6 * (3 - u) & 63));
                                var a = r.charAt(64);
                                if (a)
                                    for (; i.length % 4;) i.push(a);
                                return i.join("")
                            },
                            parse: function(e) {
                                var t = e.length,
                                    r = this._map,
                                    i = this._reverseMap;
                                if (!i) { i = this._reverseMap = []; for (var o = 0; o < r.length; o++) i[r.charCodeAt(o)] = o }
                                var s = r.charAt(64);
                                if (s) { var u = e.indexOf(s); - 1 !== u && (t = u) }
                                return function(e, t, r) {
                                    for (var i = [], o = 0, s = 0; s < t; s++)
                                        if (s % 4) {
                                            var u = r[e.charCodeAt(s - 1)] << s % 4 * 2,
                                                a = r[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
                                            i[o >>> 2] |= (u | a) << 24 - o % 4 * 8, o++
                                        }
                                    return n.create(i, o)
                                }(e, t, i)
                            },
                            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                        }, e.enc.Base64
                    }, "object" === (0, u["default"])(t) ? e.exports = t = s(n(9935)) : (i = [n(9935)], (o = "function" == typeof(r = s) ? r.apply(t, i) : r) === undefined || (e.exports = o))
                },
                1801: function(e, t, n) {
                    "use strict";
                    var r, i, o, s, u = n(3483)(n(3988));
                    s = function(e) { return e.enc.Utf8 }, "object" === (0, u["default"])(t) ? e.exports = t = s(n(9935)) : (i = [n(9935)], (o = "function" == typeof(r = s) ? r.apply(t, i) : r) === undefined || (e.exports = o))
                },
                6443: function(e, t, n) {
                    "use strict";
                    var r, i, o, s, u = n(3483)(n(3988));
                    s = function(e) { return e.HmacSHA256 }, "object" === (0, u["default"])(t) ? e.exports = t = s(n(9935), n(2803), n(8836)) : (i = [n(9935), n(2803), n(8836)], (o = "function" == typeof(r = s) ? r.apply(t, i) : r) === undefined || (e.exports = o))
                },
                8836: function(e, t, n) {
                    "use strict";
                    var r, i, o, s, u = n(3483)(n(3988));
                    s = function(e) {
                        var t, n, r;
                        n = (t = e).lib.Base, r = t.enc.Utf8, t.algo.HMAC = n.extend({
                            init: function(e, t) {
                                e = this._hasher = new e.init, "string" == typeof t && (t = r.parse(t));
                                var n = e.blockSize,
                                    i = 4 * n;
                                t.sigBytes > i && (t = e.finalize(t)), t.clamp();
                                for (var o = this._oKey = t.clone(), s = this._iKey = t.clone(), u = o.words, a = s.words, c = 0; c < n; c++) u[c] ^= 1549556828, a[c] ^= 909522486;
                                o.sigBytes = s.sigBytes = i, this.reset()
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
                    }, "object" === (0, u["default"])(t) ? e.exports = t = s(n(9935)) : (i = [n(9935)], (o = "function" == typeof(r = s) ? r.apply(t, i) : r) === undefined || (e.exports = o))
                },
                2803: function(e, t, n) {
                    "use strict";
                    var r, i, o, s, u = n(3483)(n(3988));
                    s = function(e) {
                        return function(t) {
                            var n = e,
                                r = n.lib,
                                i = r.WordArray,
                                o = r.Hasher,
                                s = n.algo,
                                u = [],
                                a = [];
                            ! function() {
                                function e(e) {
                                    for (var n = t.sqrt(e), r = 2; r <= n; r++)
                                        if (!(e % r)) return !1;
                                    return !0
                                }

                                function n(e) { return 4294967296 * (e - (0 | e)) | 0 }
                                for (var r = 2, i = 0; i < 64;) e(r) && (i < 8 && (u[i] = n(t.pow(r, .5))), a[i] = n(t.pow(r, 1 / 3)), i++), r++
                            }();
                            var c = [],
                                f = s.SHA256 = o.extend({
                                    _doReset: function() { this._hash = new i.init(u.slice(0)) },
                                    _doProcessBlock: function(e, t) {
                                        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], u = n[4], f = n[5], l = n[6], p = n[7], d = 0; d < 64; d++) {
                                            if (d < 16) c[d] = 0 | e[t + d];
                                            else {
                                                var h = c[d - 15],
                                                    y = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3,
                                                    g = c[d - 2],
                                                    v = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                                                c[d] = y + c[d - 7] + v + c[d - 16]
                                            }
                                            var _ = r & i ^ r & o ^ i & o,
                                                m = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                                b = p + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + (u & f ^ ~u & l) + a[d] + c[d];
                                            p = l, l = f, f = u, u = s + b | 0, s = o, o = i, i = r, r = b + (m + _) | 0
                                        }
                                        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + u | 0, n[5] = n[5] + f | 0, n[6] = n[6] + l | 0, n[7] = n[7] + p | 0
                                    },
                                    _doFinalize: function() {
                                        var e = this._data,
                                            n = e.words,
                                            r = 8 * this._nDataBytes,
                                            i = 8 * e.sigBytes;
                                        return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = t.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * n.length, this._process(), this._hash
                                    },
                                    clone: function() { var e = o.clone.call(this); return e._hash = this._hash.clone(), e }
                                });
                            n.SHA256 = o._createHelper(f), n.HmacSHA256 = o._createHmacHelper(f)
                        }(Math), e.SHA256
                    }, "object" === (0, u["default"])(t) ? e.exports = t = s(n(9935)) : (i = [n(9935)], (o = "function" == typeof(r = s) ? r.apply(t, i) : r) === undefined || (e.exports = o))
                },
                5306: function(e) {
                    "use strict";
                    e.exports = function(e) {
                        var t = [];
                        return t.toString = function() {
                            return this.map((function(t) {
                                var n = function(e, t) {
                                    var n, r, i, o = e[1] || "",
                                        s = e[3];
                                    if (!s) return o;
                                    if (t && "function" == typeof btoa) {
                                        var u = (n = s, r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r), "/*# ".concat(i, " */")),
                                            a = s.sources.map((function(e) { return "/*# sourceURL=".concat(s.sourceRoot || "").concat(e, " */") }));
                                        return [o].concat(a).concat([u]).join("\n")
                                    }
                                    return [o].join("\n")
                                }(t, e);
                                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                            })).join("")
                        }, t.i = function(e, n, r) {
                            "string" == typeof e && (e = [
                                [null, e, ""]
                            ]);
                            var i = {};
                            if (r)
                                for (var o = 0; o < this.length; o++) {
                                    var s = this[o][0];
                                    null != s && (i[s] = !0)
                                }
                            for (var u = 0; u < e.length; u++) {
                                var a = [].concat(e[u]);
                                r && i[a[0]] || (n && (a[2] ? a[2] = "".concat(n, " and ").concat(a[2]) : a[2] = n), t.push(a))
                            }
                        }, t
                    }
                },
                8263: function(e, t, n) {
                    "use strict";
                    var r, i, o, s = n(3483)(n(3988));
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }

                        function t(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                            return r
                        }

                        function n(e, n) { var r; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (r = function(e, n) { if (e) { if ("string" == typeof e) return t(e, n); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0 } }(e)) || n && e && "number" == typeof e.length) { r && (e = r); var i = 0; return function() { return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } return (r = e[Symbol.iterator]()).next.bind(r) }
                        var r = function(e) { var t = { exports: {} }; return e(t, t.exports), t.exports }((function(e) {
                                function t() { return { baseUrl: null, breaks: !1, gfm: !0, headerIds: !0, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: !0, pedantic: !1, renderer: null, sanitize: !1, sanitizer: null, silent: !1, smartLists: !1, smartypants: !1, tokenizer: null, walkTokens: null, xhtml: !1 } }
                                e.exports = { defaults: { baseUrl: null, breaks: !1, gfm: !0, headerIds: !0, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: !0, pedantic: !1, renderer: null, sanitize: !1, sanitizer: null, silent: !1, smartLists: !1, smartypants: !1, tokenizer: null, walkTokens: null, xhtml: !1 }, getDefaults: t, changeDefaults: function(t) { e.exports.defaults = t } }
                            })),
                            i = /[&<>"']/,
                            o = /[&<>"']/g,
                            s = /[<>"']|&(?!#?\w+;)/,
                            u = /[<>"']|&(?!#?\w+;)/g,
                            a = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
                            c = function(e) { return a[e] },
                            f = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

                        function l(e) { return e.replace(f, (function(e, t) { return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "" })) }
                        var p = /(^|[^\[])\^/g,
                            d = /[^\w:]/g,
                            h = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,
                            y = {},
                            g = /^[^:]+:\/*[^/]*$/,
                            v = /^([^:]+:)[\s\S]*$/,
                            _ = /^([^:]+:\/*[^/]*)[\s\S]*$/;

                        function m(e, t) { y[" " + e] || (g.test(e) ? y[" " + e] = e + "/" : y[" " + e] = b(e, "/", !0)); var n = -1 === (e = y[" " + e]).indexOf(":"); return "//" === t.substring(0, 2) ? n ? t : e.replace(v, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(_, "$1") + t : e + t }

                        function b(e, t, n) {
                            var r = e.length;
                            if (0 === r) return "";
                            for (var i = 0; i < r;) {
                                var o = e.charAt(r - i - 1);
                                if (o !== t || n) {
                                    if (o === t || !n) break;
                                    i++
                                } else i++
                            }
                            return e.substr(0, r - i)
                        }
                        var A = function(e, t) { if (t) { if (i.test(e)) return e.replace(o, c) } else if (s.test(e)) return e.replace(u, c); return e },
                            O = l,
                            E = function(e, t) { e = e.source || e, t = t || ""; var n = { replace: function(t, r) { return r = (r = r.source || r).replace(p, "$1"), e = e.replace(t, r), n }, getRegex: function() { return new RegExp(e, t) } }; return n },
                            w = function(e, t, n) {
                                if (e) { var r; try { r = decodeURIComponent(l(n)).replace(d, "").toLowerCase() } catch (i) { return null } if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null }
                                t && !h.test(n) && (n = m(t, n));
                                try { n = encodeURI(n).replace(/%25/g, "%") } catch (i) { return null }
                                return n
                            },
                            S = { exec: function() {} },
                            D = function(e) {
                                for (var t, n, r = 1; r < arguments.length; r++)
                                    for (n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                return e
                            },
                            N = function(e, t) {
                                var n = e.replace(/\|/g, (function(e, t, n) { for (var r = !1, i = t; --i >= 0 && "\\" === n[i];) r = !r; return r ? "|" : " |" })).split(/ \|/),
                                    r = 0;
                                if (n.length > t) n.splice(t);
                                else
                                    for (; n.length < t;) n.push("");
                                for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
                                return n
                            },
                            T = b,
                            I = function(e, t) {
                                if (-1 === e.indexOf(t[1])) return -1;
                                for (var n = e.length, r = 0, i = 0; i < n; i++)
                                    if ("\\" === e[i]) i++;
                                    else if (e[i] === t[0]) r++;
                                else if (e[i] === t[1] && --r < 0) return i;
                                return -1
                            },
                            B = function(e) { e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options") },
                            C = function(e, t) { if (t < 1) return ""; for (var n = ""; t > 1;) 1 & t && (n += e), t >>= 1, e += e; return n + e },
                            x = r.defaults,
                            P = T,
                            k = N,
                            L = A,
                            R = I;

                        function M(e, t, n) {
                            var r = t.href,
                                i = t.title ? L(t.title) : null,
                                o = e[1].replace(/\\([\[\]])/g, "$1");
                            return "!" !== e[0].charAt(0) ? { type: "link", raw: n, href: r, title: i, text: o } : { type: "image", raw: n, href: r, title: i, text: L(o) }
                        }
                        var U = function() {
                                function e(e) { this.options = e || x }
                                var t = e.prototype;
                                return t.space = function(e) { var t = this.rules.block.newline.exec(e); if (t) return t[0].length > 1 ? { type: "space", raw: t[0] } : { raw: "\n" } }, t.code = function(e) { var t = this.rules.block.code.exec(e); if (t) { var n = t[0].replace(/^ {1,4}/gm, ""); return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : P(n, "\n") } } }, t.fences = function(e) {
                                    var t = this.rules.block.fences.exec(e);
                                    if (t) {
                                        var n = t[0],
                                            r = function(e, t) { var n = e.match(/^(\s+)(?:```)/); if (null === n) return t; var r = n[1]; return t.split("\n").map((function(e) { var t = e.match(/^\s+/); return null === t ? e : t[0].length >= r.length ? e.slice(r.length) : e })).join("\n") }(n, t[3] || "");
                                        return { type: "code", raw: n, lang: t[2] ? t[2].trim() : t[2], text: r }
                                    }
                                }, t.heading = function(e) {
                                    var t = this.rules.block.heading.exec(e);
                                    if (t) {
                                        var n = t[2].trim();
                                        if (/#$/.test(n)) {
                                            var r = P(n, "#");
                                            this.options.pedantic ? n = r.trim() : r && !/ $/.test(r) || (n = r.trim())
                                        }
                                        return { type: "heading", raw: t[0], depth: t[1].length, text: n }
                                    }
                                }, t.nptable = function(e) { var t = this.rules.block.nptable.exec(e); if (t) { var n = { type: "table", header: k(t[1].replace(/^ *| *\| *$/g, "")), align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [], raw: t[0] }; if (n.header.length === n.align.length) { var r, i = n.align.length; for (r = 0; r < i; r++) /^ *-+: *$/.test(n.align[r]) ? n.align[r] = "right" : /^ *:-+: *$/.test(n.align[r]) ? n.align[r] = "center" : /^ *:-+ *$/.test(n.align[r]) ? n.align[r] = "left" : n.align[r] = null; for (i = n.cells.length, r = 0; r < i; r++) n.cells[r] = k(n.cells[r], n.header.length); return n } } }, t.hr = function(e) { var t = this.rules.block.hr.exec(e); if (t) return { type: "hr", raw: t[0] } }, t.blockquote = function(e) { var t = this.rules.block.blockquote.exec(e); if (t) { var n = t[0].replace(/^ *> ?/gm, ""); return { type: "blockquote", raw: t[0], text: n } } }, t.list = function(e) {
                                    var t = this.rules.block.list.exec(e);
                                    if (t) {
                                        var n, r, i, o, s, u, a, c, f, l = t[0],
                                            p = t[2],
                                            d = p.length > 1,
                                            h = { type: "list", raw: l, ordered: d, start: d ? +p.slice(0, -1) : "", loose: !1, items: [] },
                                            y = t[0].match(this.rules.block.item),
                                            g = !1,
                                            v = y.length;
                                        i = this.rules.block.listItemStart.exec(y[0]);
                                        for (var _ = 0; _ < v; _++) {
                                            if (l = n = y[_], this.options.pedantic || (f = n.match(new RegExp("\\n\\s*\\n {0," + (i[0].length - 1) + "}\\S"))) && (s = n.length - f.index + y.slice(_ + 1).join("\n").length, h.raw = h.raw.substring(0, h.raw.length - s), l = n = n.substring(0, f.index), v = _ + 1), _ !== v - 1) { if (o = this.rules.block.listItemStart.exec(y[_ + 1]), this.options.pedantic ? o[1].length > i[1].length : o[1].length >= i[0].length || o[1].length > 3) { y.splice(_, 2, y[_] + (!this.options.pedantic && o[1].length < i[0].length && !y[_].match(/\n$/) ? "" : "\n") + y[_ + 1]), _--, v--; continue }(!this.options.pedantic || this.options.smartLists ? o[2][o[2].length - 1] !== p[p.length - 1] : d === (1 === o[2].length)) && (s = y.slice(_ + 1).join("\n").length, h.raw = h.raw.substring(0, h.raw.length - s), _ = v - 1), i = o }
                                            r = n.length, ~(n = n.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") && (r -= n.length, n = this.options.pedantic ? n.replace(/^ {1,4}/gm, "") : n.replace(new RegExp("^ {1," + r + "}", "gm"), "")), n = P(n, "\n"), _ !== v - 1 && (l += "\n"), u = g || /\n\n(?!\s*$)/.test(l), _ !== v - 1 && (g = "\n\n" === l.slice(-2), u || (u = g)), u && (h.loose = !0), this.options.gfm && (a = /^\[[ xX]\] /.test(n), c = undefined, a && (c = " " !== n[1], n = n.replace(/^\[[ xX]\] +/, ""))), h.items.push({ type: "list_item", raw: l, task: a, checked: c, loose: u, text: n })
                                        }
                                        return h
                                    }
                                }, t.html = function(e) { var t = this.rules.block.html.exec(e); if (t) return { type: this.options.sanitize ? "paragraph" : "html", raw: t[0], pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]), text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : L(t[0]) : t[0] } }, t.def = function(e) { var t = this.rules.block.def.exec(e); if (t) return t[3] && (t[3] = t[3].substring(1, t[3].length - 1)), { tag: t[1].toLowerCase().replace(/\s+/g, " "), raw: t[0], href: t[2], title: t[3] } }, t.table = function(e) { var t = this.rules.block.table.exec(e); if (t) { var n = { type: "table", header: k(t[1].replace(/^ *| *\| *$/g, "")), align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [] }; if (n.header.length === n.align.length) { n.raw = t[0]; var r, i = n.align.length; for (r = 0; r < i; r++) /^ *-+: *$/.test(n.align[r]) ? n.align[r] = "right" : /^ *:-+: *$/.test(n.align[r]) ? n.align[r] = "center" : /^ *:-+ *$/.test(n.align[r]) ? n.align[r] = "left" : n.align[r] = null; for (i = n.cells.length, r = 0; r < i; r++) n.cells[r] = k(n.cells[r].replace(/^ *\| *| *\| *$/g, ""), n.header.length); return n } } }, t.lheading = function(e) { var t = this.rules.block.lheading.exec(e); if (t) return { type: "heading", raw: t[0], depth: "=" === t[2].charAt(0) ? 1 : 2, text: t[1] } }, t.paragraph = function(e) { var t = this.rules.block.paragraph.exec(e); if (t) return { type: "paragraph", raw: t[0], text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1] } }, t.text = function(e) { var t = this.rules.block.text.exec(e); if (t) return { type: "text", raw: t[0], text: t[0] } }, t.escape = function(e) { var t = this.rules.inline.escape.exec(e); if (t) return { type: "escape", raw: t[0], text: L(t[1]) } }, t.tag = function(e, t, n) { var r = this.rules.inline.tag.exec(e); if (r) return !t && /^<a /i.test(r[0]) ? t = !0 : t && /^<\/a>/i.test(r[0]) && (t = !1), !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0]) ? n = !0 : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (n = !1), { type: this.options.sanitize ? "text" : "html", raw: r[0], inLink: t, inRawBlock: n, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : L(r[0]) : r[0] } }, t.link = function(e) {
                                    var t = this.rules.inline.link.exec(e);
                                    if (t) {
                                        var n = t[2].trim();
                                        if (!this.options.pedantic && /^</.test(n)) { if (!/>$/.test(n)) return; var r = P(n.slice(0, -1), "\\"); if ((n.length - r.length) % 2 == 0) return } else {
                                            var i = R(t[2], "()");
                                            if (i > -1) {
                                                var o = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + i;
                                                t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, o).trim(), t[3] = ""
                                            }
                                        }
                                        var s = t[2],
                                            u = "";
                                        if (this.options.pedantic) {
                                            var a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
                                            a && (s = a[1], u = a[3])
                                        } else u = t[3] ? t[3].slice(1, -1) : "";
                                        return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), M(t, { href: s ? s.replace(this.rules.inline._escapes, "$1") : s, title: u ? u.replace(this.rules.inline._escapes, "$1") : u }, t[0])
                                    }
                                }, t.reflink = function(e, t) { var n; if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) { var r = (n[2] || n[1]).replace(/\s+/g, " "); if (!(r = t[r.toLowerCase()]) || !r.href) { var i = n[0].charAt(0); return { type: "text", raw: i, text: i } } return M(n, r, n[0]) } }, t.emStrong = function(e, t, n) {
                                    void 0 === n && (n = "");
                                    var r = this.rules.inline.emStrong.lDelim.exec(e);
                                    if (r && (!r[3] || !n.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
                                        var i = r[1] || r[2] || "";
                                        if (!i || i && ("" === n || this.rules.inline.punctuation.exec(n))) {
                                            var o, s, u = r[0].length - 1,
                                                a = u,
                                                c = 0,
                                                f = "*" === r[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                                            for (f.lastIndex = 0, t = t.slice(-1 * e.length + u); null != (r = f.exec(t));)
                                                if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])
                                                    if (s = o.length, r[3] || r[4]) a += s;
                                                    else if (!((r[5] || r[6]) && u % 3) || (u + s) % 3) { if (!((a -= s) > 0)) { if (a + c - s <= 0 && !t.slice(f.lastIndex).match(f) && (s = Math.min(s, s + a + c)), Math.min(u, s) % 2) return { type: "em", raw: e.slice(0, u + r.index + s + 1), text: e.slice(1, u + r.index + s) }; if (Math.min(u, s) % 2 == 0) return { type: "strong", raw: e.slice(0, u + r.index + s + 1), text: e.slice(2, u + r.index + s - 1) } } } else c += s
                                        }
                                    }
                                }, t.codespan = function(e) {
                                    var t = this.rules.inline.code.exec(e);
                                    if (t) {
                                        var n = t[2].replace(/\n/g, " "),
                                            r = /[^ ]/.test(n),
                                            i = /^ /.test(n) && / $/.test(n);
                                        return r && i && (n = n.substring(1, n.length - 1)), n = L(n, !0), { type: "codespan", raw: t[0], text: n }
                                    }
                                }, t.br = function(e) { var t = this.rules.inline.br.exec(e); if (t) return { type: "br", raw: t[0] } }, t.del = function(e) { var t = this.rules.inline.del.exec(e); if (t) return { type: "del", raw: t[0], text: t[2] } }, t.autolink = function(e, t) { var n, r, i = this.rules.inline.autolink.exec(e); if (i) return r = "@" === i[2] ? "mailto:" + (n = L(this.options.mangle ? t(i[1]) : i[1])) : n = L(i[1]), { type: "link", raw: i[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] } }, t.url = function(e, t) {
                                    var n;
                                    if (n = this.rules.inline.url.exec(e)) {
                                        var r, i;
                                        if ("@" === n[2]) i = "mailto:" + (r = L(this.options.mangle ? t(n[0]) : n[0]));
                                        else {
                                            var o;
                                            do { o = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0] } while (o !== n[0]);
                                            r = L(n[0]), i = "www." === n[1] ? "http://" + r : r
                                        }
                                        return { type: "link", raw: n[0], text: r, href: i, tokens: [{ type: "text", raw: r, text: r }] }
                                    }
                                }, t.inlineText = function(e, t, n) { var r, i = this.rules.inline.text.exec(e); if (i) return r = t ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : L(i[0]) : i[0] : L(this.options.smartypants ? n(i[0]) : i[0]), { type: "text", raw: i[0], text: r } }, e
                            }(),
                            j = S,
                            F = E,
                            $ = D,
                            Y = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/, html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))", def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/, nptable: j, table: j, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
                        Y.def = F(Y.def).replace("label", Y._label).replace("title", Y._title).getRegex(), Y.bullet = /(?:[*+-]|\d{1,9}[.)])/, Y.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, Y.item = F(Y.item, "gm").replace(/bull/g, Y.bullet).getRegex(), Y.listItemStart = F(/^( *)(bull) */).replace("bull", Y.bullet).getRegex(), Y.list = F(Y.list).replace(/bull/g, Y.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + Y.def.source + ")").getRegex(), Y._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Y._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, Y.html = F(Y.html, "i").replace("comment", Y._comment).replace("tag", Y._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Y.paragraph = F(Y._paragraph).replace("hr", Y.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", Y._tag).getRegex(), Y.blockquote = F(Y.blockquote).replace("paragraph", Y.paragraph).getRegex(), Y.normal = $({}, Y), Y.gfm = $({}, Y.normal, { nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)", table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), Y.gfm.nptable = F(Y.gfm.nptable).replace("hr", Y.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", Y._tag).getRegex(), Y.gfm.table = F(Y.gfm.table).replace("hr", Y.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", Y._tag).getRegex(), Y.pedantic = $({}, Y.normal, { html: F("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Y._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: j, paragraph: F(Y.normal._paragraph).replace("hr", Y.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Y.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
                        var q = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: j, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/, nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: j, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/, _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~" };
                        q.punctuation = F(q.punctuation).replace(/punctuation/g, q._punctuation).getRegex(), q.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, q.escapedEmSt = /\\\*|\\_/g, q._comment = F(Y._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), q.emStrong.lDelim = F(q.emStrong.lDelim).replace(/punct/g, q._punctuation).getRegex(), q.emStrong.rDelimAst = F(q.emStrong.rDelimAst, "g").replace(/punct/g, q._punctuation).getRegex(), q.emStrong.rDelimUnd = F(q.emStrong.rDelimUnd, "g").replace(/punct/g, q._punctuation).getRegex(), q._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, q._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, q._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, q.autolink = F(q.autolink).replace("scheme", q._scheme).replace("email", q._email).getRegex(), q._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, q.tag = F(q.tag).replace("comment", q._comment).replace("attribute", q._attribute).getRegex(), q._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, q._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, q._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, q.link = F(q.link).replace("label", q._label).replace("href", q._href).replace("title", q._title).getRegex(), q.reflink = F(q.reflink).replace("label", q._label).getRegex(), q.reflinkSearch = F(q.reflinkSearch, "g").replace("reflink", q.reflink).replace("nolink", q.nolink).getRegex(), q.normal = $({}, q), q.pedantic = $({}, q.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: F(/^!?\[(label)\]\((.*?)\)/).replace("label", q._label).getRegex(), reflink: F(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q._label).getRegex() }), q.gfm = $({}, q.normal, { escape: F(q.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/ }), q.gfm.url = F(q.gfm.url, "i").replace("email", q.gfm._extended_email).getRegex(), q.breaks = $({}, q.gfm, { br: F(q.br).replace("{2,}", "*").getRegex(), text: F(q.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
                        var G = { block: Y, inline: q },
                            z = r.defaults,
                            W = G.block,
                            H = G.inline,
                            V = C;

                        function K(e) { return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") }

                        function J(e) {
                            var t, n, r = "",
                                i = e.length;
                            for (t = 0; t < i; t++) n = e.charCodeAt(t), Math.random() > .5 && (n = "x" + n.toString(16)), r += "&#" + n + ";";
                            return r
                        }
                        var Q = function() {
                                function t(e) {
                                    this.tokens = [], this.tokens.links = Object.create(null), this.options = e || z, this.options.tokenizer = this.options.tokenizer || new U, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
                                    var t = { block: W.normal, inline: H.normal };
                                    this.options.pedantic ? (t.block = W.pedantic, t.inline = H.pedantic) : this.options.gfm && (t.block = W.gfm, this.options.breaks ? t.inline = H.breaks : t.inline = H.gfm), this.tokenizer.rules = t
                                }
                                t.lex = function(e, n) { return new t(n).lex(e) }, t.lexInline = function(e, n) { return new t(n).inlineTokens(e) };
                                var n, r, i, o = t.prototype;
                                return o.lex = function(e) { return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens, !0), this.inline(this.tokens), this.tokens }, o.blockTokens = function(e, t, n) {
                                    var r, i, o, s;
                                    for (void 0 === t && (t = []), void 0 === n && (n = !0), this.options.pedantic && (e = e.replace(/^ +$/gm, "")); e;)
                                        if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), r.type && t.push(r);
                                        else if (r = this.tokenizer.code(e)) e = e.substring(r.raw.length), (s = t[t.length - 1]) && "paragraph" === s.type ? (s.raw += "\n" + r.raw, s.text += "\n" + r.text) : t.push(r);
                                    else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), t.push(r);
                                    else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), t.push(r);
                                    else if (r = this.tokenizer.nptable(e)) e = e.substring(r.raw.length), t.push(r);
                                    else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), t.push(r);
                                    else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), r.tokens = this.blockTokens(r.text, [], n), t.push(r);
                                    else if (r = this.tokenizer.list(e)) {
                                        for (e = e.substring(r.raw.length), o = r.items.length, i = 0; i < o; i++) r.items[i].tokens = this.blockTokens(r.items[i].text, [], !1);
                                        t.push(r)
                                    } else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), t.push(r);
                                    else if (n && (r = this.tokenizer.def(e))) e = e.substring(r.raw.length), this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title });
                                    else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), t.push(r);
                                    else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), t.push(r);
                                    else if (n && (r = this.tokenizer.paragraph(e))) e = e.substring(r.raw.length), t.push(r);
                                    else if (r = this.tokenizer.text(e)) e = e.substring(r.raw.length), (s = t[t.length - 1]) && "text" === s.type ? (s.raw += "\n" + r.raw, s.text += "\n" + r.text) : t.push(r);
                                    else if (e) { var u = "Infinite loop on byte: " + e.charCodeAt(0); if (this.options.silent) { console.error(u); break } throw new Error(u) }
                                    return t
                                }, o.inline = function(e) {
                                    var t, n, r, i, o, s, u = e.length;
                                    for (t = 0; t < u; t++) switch ((s = e[t]).type) {
                                        case "paragraph":
                                        case "text":
                                        case "heading":
                                            s.tokens = [], this.inlineTokens(s.text, s.tokens);
                                            break;
                                        case "table":
                                            for (s.tokens = { header: [], cells: [] }, i = s.header.length, n = 0; n < i; n++) s.tokens.header[n] = [], this.inlineTokens(s.header[n], s.tokens.header[n]);
                                            for (i = s.cells.length, n = 0; n < i; n++)
                                                for (o = s.cells[n], s.tokens.cells[n] = [], r = 0; r < o.length; r++) s.tokens.cells[n][r] = [], this.inlineTokens(o[r], s.tokens.cells[n][r]);
                                            break;
                                        case "blockquote":
                                            this.inline(s.tokens);
                                            break;
                                        case "list":
                                            for (i = s.items.length, n = 0; n < i; n++) this.inline(s.items[n].tokens)
                                    }
                                    return e
                                }, o.inlineTokens = function(e, t, n, r) {
                                    var i, o;
                                    void 0 === t && (t = []), void 0 === n && (n = !1), void 0 === r && (r = !1);
                                    var s, u, a, c = e;
                                    if (this.tokens.links) {
                                        var f = Object.keys(this.tokens.links);
                                        if (f.length > 0)
                                            for (; null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(c));) f.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (c = c.slice(0, s.index) + "[" + V("a", s[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                                    }
                                    for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(c));) c = c.slice(0, s.index) + "[" + V("a", s[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                                    for (; null != (s = this.tokenizer.rules.inline.escapedEmSt.exec(c));) c = c.slice(0, s.index) + "++" + c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
                                    for (; e;)
                                        if (u || (a = ""), u = !1, i = this.tokenizer.escape(e)) e = e.substring(i.raw.length), t.push(i);
                                        else if (i = this.tokenizer.tag(e, n, r)) {
                                        e = e.substring(i.raw.length), n = i.inLink, r = i.inRawBlock;
                                        var l = t[t.length - 1];
                                        l && "text" === i.type && "text" === l.type ? (l.raw += i.raw, l.text += i.text) : t.push(i)
                                    } else if (i = this.tokenizer.link(e)) e = e.substring(i.raw.length), "link" === i.type && (i.tokens = this.inlineTokens(i.text, [], !0, r)), t.push(i);
                                    else if (i = this.tokenizer.reflink(e, this.tokens.links)) { e = e.substring(i.raw.length); var p = t[t.length - 1]; "link" === i.type ? (i.tokens = this.inlineTokens(i.text, [], !0, r), t.push(i)) : p && "text" === i.type && "text" === p.type ? (p.raw += i.raw, p.text += i.text) : t.push(i) } else if (i = this.tokenizer.emStrong(e, c, a)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i);
                                    else if (i = this.tokenizer.codespan(e)) e = e.substring(i.raw.length), t.push(i);
                                    else if (i = this.tokenizer.br(e)) e = e.substring(i.raw.length), t.push(i);
                                    else if (i = this.tokenizer.del(e)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i);
                                    else if (i = this.tokenizer.autolink(e, J)) e = e.substring(i.raw.length), t.push(i);
                                    else if (n || !(i = this.tokenizer.url(e, J))) {
                                        if (i = this.tokenizer.inlineText(e, r, K)) e = e.substring(i.raw.length), "_" !== i.raw.slice(-1) && (a = i.raw.slice(-1)), u = !0, (o = t[t.length - 1]) && "text" === o.type ? (o.raw += i.raw, o.text += i.text) : t.push(i);
                                        else if (e) { var d = "Infinite loop on byte: " + e.charCodeAt(0); if (this.options.silent) { console.error(d); break } throw new Error(d) }
                                    } else e = e.substring(i.raw.length), t.push(i);
                                    return t
                                }, n = t, i = [{ key: "rules", get: function() { return { block: W, inline: H } } }], (r = null) && e(n.prototype, r), i && e(n, i), t
                            }(),
                            X = r.defaults,
                            Z = w,
                            ee = A,
                            te = function() {
                                function e(e) { this.options = e || X }
                                var t = e.prototype;
                                return t.code = function(e, t, n) {
                                    var r = (t || "").match(/\S*/)[0];
                                    if (this.options.highlight) {
                                        var i = this.options.highlight(e, r);
                                        null != i && i !== e && (n = !0, e = i)
                                    }
                                    return e = e.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + ee(r, !0) + '">' + (n ? e : ee(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : ee(e, !0)) + "</code></pre>\n"
                                }, t.blockquote = function(e) { return "<blockquote>\n" + e + "</blockquote>\n" }, t.html = function(e) { return e }, t.heading = function(e, t, n, r) { return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n" }, t.hr = function() { return this.options.xhtml ? "<hr/>\n" : "<hr>\n" }, t.list = function(e, t, n) { var r = t ? "ol" : "ul"; return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n" }, t.listitem = function(e) { return "<li>" + e + "</li>\n" }, t.checkbox = function(e) { return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> " }, t.paragraph = function(e) { return "<p>" + e + "</p>\n" }, t.table = function(e, t) { return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n" }, t.tablerow = function(e) { return "<tr>\n" + e + "</tr>\n" }, t.tablecell = function(e, t) { var n = t.header ? "th" : "td"; return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n" }, t.strong = function(e) { return "<strong>" + e + "</strong>" }, t.em = function(e) { return "<em>" + e + "</em>" }, t.codespan = function(e) { return "<code>" + e + "</code>" }, t.br = function() { return this.options.xhtml ? "<br/>" : "<br>" }, t.del = function(e) { return "<del>" + e + "</del>" }, t.link = function(e, t, n) { if (null === (e = Z(this.options.sanitize, this.options.baseUrl, e))) return n; var r = '<a href="' + ee(e) + '"'; return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>" }, t.image = function(e, t, n) { if (null === (e = Z(this.options.sanitize, this.options.baseUrl, e))) return n; var r = '<img src="' + e + '" alt="' + n + '"'; return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">" }, t.text = function(e) { return e }, e
                            }(),
                            ne = function() {
                                function e() {}
                                var t = e.prototype;
                                return t.strong = function(e) { return e }, t.em = function(e) { return e }, t.codespan = function(e) { return e }, t.del = function(e) { return e }, t.html = function(e) { return e }, t.text = function(e) { return e }, t.link = function(e, t, n) { return "" + n }, t.image = function(e, t, n) { return "" + n }, t.br = function() { return "" }, e
                            }(),
                            re = function() {
                                function e() { this.seen = {} }
                                var t = e.prototype;
                                return t.serialize = function(e) { return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-") }, t.getNextSafeSlug = function(e, t) {
                                    var n = e,
                                        r = 0;
                                    if (this.seen.hasOwnProperty(n)) {
                                        r = this.seen[e];
                                        do { n = e + "-" + ++r } while (this.seen.hasOwnProperty(n))
                                    }
                                    return t || (this.seen[e] = r, this.seen[n] = 0), n
                                }, t.slug = function(e, t) { void 0 === t && (t = {}); var n = this.serialize(e); return this.getNextSafeSlug(n, t.dryrun) }, e
                            }(),
                            ie = r.defaults,
                            oe = O,
                            se = function() {
                                function e(e) { this.options = e || ie, this.options.renderer = this.options.renderer || new te, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ne, this.slugger = new re }
                                e.parse = function(t, n) { return new e(n).parse(t) }, e.parseInline = function(t, n) { return new e(n).parseInline(t) };
                                var t = e.prototype;
                                return t.parse = function(e, t) {
                                    void 0 === t && (t = !0);
                                    var n, r, i, o, s, u, a, c, f, l, p, d, h, y, g, v, _, m, b = "",
                                        A = e.length;
                                    for (n = 0; n < A; n++) switch ((l = e[n]).type) {
                                        case "space":
                                            continue;
                                        case "hr":
                                            b += this.renderer.hr();
                                            continue;
                                        case "heading":
                                            b += this.renderer.heading(this.parseInline(l.tokens), l.depth, oe(this.parseInline(l.tokens, this.textRenderer)), this.slugger);
                                            continue;
                                        case "code":
                                            b += this.renderer.code(l.text, l.lang, l.escaped);
                                            continue;
                                        case "table":
                                            for (c = "", a = "", o = l.header.length, r = 0; r < o; r++) a += this.renderer.tablecell(this.parseInline(l.tokens.header[r]), { header: !0, align: l.align[r] });
                                            for (c += this.renderer.tablerow(a), f = "", o = l.cells.length, r = 0; r < o; r++) {
                                                for (a = "", s = (u = l.tokens.cells[r]).length, i = 0; i < s; i++) a += this.renderer.tablecell(this.parseInline(u[i]), { header: !1, align: l.align[i] });
                                                f += this.renderer.tablerow(a)
                                            }
                                            b += this.renderer.table(c, f);
                                            continue;
                                        case "blockquote":
                                            f = this.parse(l.tokens), b += this.renderer.blockquote(f);
                                            continue;
                                        case "list":
                                            for (p = l.ordered, d = l.start, h = l.loose, o = l.items.length, f = "", r = 0; r < o; r++) v = (g = l.items[r]).checked, _ = g.task, y = "", g.task && (m = this.renderer.checkbox(v), h ? g.tokens.length > 0 && "text" === g.tokens[0].type ? (g.tokens[0].text = m + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && "text" === g.tokens[0].tokens[0].type && (g.tokens[0].tokens[0].text = m + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({ type: "text", text: m }) : y += m), y += this.parse(g.tokens, h), f += this.renderer.listitem(y, _, v);
                                            b += this.renderer.list(f, p, d);
                                            continue;
                                        case "html":
                                            b += this.renderer.html(l.text);
                                            continue;
                                        case "paragraph":
                                            b += this.renderer.paragraph(this.parseInline(l.tokens));
                                            continue;
                                        case "text":
                                            for (f = l.tokens ? this.parseInline(l.tokens) : l.text; n + 1 < A && "text" === e[n + 1].type;) f += "\n" + ((l = e[++n]).tokens ? this.parseInline(l.tokens) : l.text);
                                            b += t ? this.renderer.paragraph(f) : f;
                                            continue;
                                        default:
                                            var O = 'Token with "' + l.type + '" type was not found.';
                                            if (this.options.silent) return void console.error(O);
                                            throw new Error(O)
                                    }
                                    return b
                                }, t.parseInline = function(e, t) {
                                    t = t || this.renderer;
                                    var n, r, i = "",
                                        o = e.length;
                                    for (n = 0; n < o; n++) switch ((r = e[n]).type) {
                                        case "escape":
                                            i += t.text(r.text);
                                            break;
                                        case "html":
                                            i += t.html(r.text);
                                            break;
                                        case "link":
                                            i += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                                            break;
                                        case "image":
                                            i += t.image(r.href, r.title, r.text);
                                            break;
                                        case "strong":
                                            i += t.strong(this.parseInline(r.tokens, t));
                                            break;
                                        case "em":
                                            i += t.em(this.parseInline(r.tokens, t));
                                            break;
                                        case "codespan":
                                            i += t.codespan(r.text);
                                            break;
                                        case "br":
                                            i += t.br();
                                            break;
                                        case "del":
                                            i += t.del(this.parseInline(r.tokens, t));
                                            break;
                                        case "text":
                                            i += t.text(r.text);
                                            break;
                                        default:
                                            var s = 'Token with "' + r.type + '" type was not found.';
                                            if (this.options.silent) return void console.error(s);
                                            throw new Error(s)
                                    }
                                    return i
                                }, e
                            }(),
                            ue = D,
                            ae = B,
                            ce = A,
                            fe = r.getDefaults,
                            le = r.changeDefaults,
                            pe = r.defaults;

                        function de(e, t, n) {
                            if (null == e) throw new Error("marked(): input parameter is undefined or null");
                            if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                            if ("function" == typeof t && (n = t, t = null), t = ue({}, de.defaults, t || {}), ae(t), n) {
                                var r, i = t.highlight;
                                try { r = Q.lex(e, t) } catch (a) { return n(a) }
                                var o = function(e) {
                                    var o;
                                    if (!e) try { o = se.parse(r, t) } catch (a) { e = a }
                                    return t.highlight = i, e ? n(e) : n(null, o)
                                };
                                if (!i || i.length < 3) return o();
                                if (delete t.highlight, !r.length) return o();
                                var s = 0;
                                return de.walkTokens(r, (function(e) {
                                    "code" === e.type && (s++, setTimeout((function() {
                                        i(e.text, e.lang, (function(t, n) {
                                            if (t) return o(t);
                                            null != n && n !== e.text && (e.text = n, e.escaped = !0), 0 == --s && o()
                                        }))
                                    }), 0))
                                })), void(0 === s && o())
                            }
                            try { var u = Q.lex(e, t); return t.walkTokens && de.walkTokens(u, t.walkTokens), se.parse(u, t) } catch (a) { if (a.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + ce(a.message + "", !0) + "</pre>"; throw a }
                        }
                        return de.options = de.setOptions = function(e) { return ue(de.defaults, e), le(de.defaults), de }, de.getDefaults = fe, de.defaults = pe, de.use = function(e) {
                            var t = ue({}, e);
                            if (e.renderer && function() {
                                    var n = de.defaults.renderer || new te,
                                        r = function(t) {
                                            var r = n[t];
                                            n[t] = function() { for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]; var u = e.renderer[t].apply(n, o); return !1 === u && (u = r.apply(n, o)), u }
                                        };
                                    for (var i in e.renderer) r(i);
                                    t.renderer = n
                                }(), e.tokenizer && function() {
                                    var n = de.defaults.tokenizer || new U,
                                        r = function(t) {
                                            var r = n[t];
                                            n[t] = function() { for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]; var u = e.tokenizer[t].apply(n, o); return !1 === u && (u = r.apply(n, o)), u }
                                        };
                                    for (var i in e.tokenizer) r(i);
                                    t.tokenizer = n
                                }(), e.walkTokens) {
                                var n = de.defaults.walkTokens;
                                t.walkTokens = function(t) { e.walkTokens(t), n && n(t) }
                            }
                            de.setOptions(t)
                        }, de.walkTokens = function(e, t) {
                            for (var r, i = n(e); !(r = i()).done;) {
                                var o = r.value;
                                switch (t(o), o.type) {
                                    case "table":
                                        for (var s, u = n(o.tokens.header); !(s = u()).done;) {
                                            var a = s.value;
                                            de.walkTokens(a, t)
                                        }
                                        for (var c, f = n(o.tokens.cells); !(c = f()).done;)
                                            for (var l, p = n(c.value); !(l = p()).done;) {
                                                var d = l.value;
                                                de.walkTokens(d, t)
                                            }
                                        break;
                                    case "list":
                                        de.walkTokens(o.items, t);
                                        break;
                                    default:
                                        o.tokens && de.walkTokens(o.tokens, t)
                                }
                            }
                        }, de.parseInline = function(e, t) {
                            if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
                            if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                            t = ue({}, de.defaults, t || {}), ae(t);
                            try { var n = Q.lexInline(e, t); return t.walkTokens && de.walkTokens(n, t.walkTokens), se.parseInline(n, t) } catch (r) { if (r.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + ce(r.message + "", !0) + "</pre>"; throw r }
                        }, de.Parser = se, de.parser = se.parse, de.Renderer = te, de.TextRenderer = ne, de.Lexer = Q, de.lexer = Q.lex, de.Tokenizer = U, de.Slugger = re, de.parse = de, de
                    }, "object" === (0, s["default"])(t) ? e.exports = o() : (i = "function" == typeof(r = o) ? r.call(t, n, t, e) : r) === undefined || (e.exports = i)
                },
                3355: function(e, t, n) {
                    "use strict";
                    e = n.nmd(e);
                    var r = n(3483)(n(3988)),
                        i = function(e) {
                            var t, n = Object.prototype,
                                i = n.hasOwnProperty,
                                o = "function" == typeof Symbol ? Symbol : {},
                                s = o.iterator || "@@iterator",
                                u = o.asyncIterator || "@@asyncIterator",
                                a = o.toStringTag || "@@toStringTag";

                            function c(e, t, n) { return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t] }
                            try { c({}, "") } catch (x) { c = function(e, t, n) { return e[t] = n } }

                            function f(e, t, n, r) {
                                var i = t && t.prototype instanceof v ? t : v,
                                    o = Object.create(i.prototype),
                                    s = new I(r || []);
                                return o._invoke = function(e, t, n) {
                                    var r = p;
                                    return function(i, o) {
                                        if (r === h) throw new Error("Generator is already running");
                                        if (r === y) { if ("throw" === i) throw o; return C() }
                                        for (n.method = i, n.arg = o;;) {
                                            var s = n.delegate;
                                            if (s) { var u = D(s, n); if (u) { if (u === g) continue; return u } }
                                            if ("next" === n.method) n.sent = n._sent = n.arg;
                                            else if ("throw" === n.method) {
                                                if (r === p) throw r = y, n.arg;
                                                n.dispatchException(n.arg)
                                            } else "return" === n.method && n.abrupt("return", n.arg);
                                            r = h;
                                            var a = l(e, t, n);
                                            if ("normal" === a.type) { if (r = n.done ? y : d, a.arg === g) continue; return { value: a.arg, done: n.done } }
                                            "throw" === a.type && (r = y, n.method = "throw", n.arg = a.arg)
                                        }
                                    }
                                }(e, n, s), o
                            }

                            function l(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (x) { return { type: "throw", arg: x } } }
                            e.wrap = f;
                            var p = "suspendedStart",
                                d = "suspendedYield",
                                h = "executing",
                                y = "completed",
                                g = {};

                            function v() {}

                            function _() {}

                            function m() {}
                            var b = {};
                            b[s] = function() { return this };
                            var A = Object.getPrototypeOf,
                                O = A && A(A(B([])));
                            O && O !== n && i.call(O, s) && (b = O);
                            var E = m.prototype = v.prototype = Object.create(b);

                            function w(e) {
                                ["next", "throw", "return"].forEach((function(t) { c(e, t, (function(e) { return this._invoke(t, e) })) }))
                            }

                            function S(e, t) {
                                function n(o, s, u, a) {
                                    var c = l(e[o], e, s);
                                    if ("throw" !== c.type) {
                                        var f = c.arg,
                                            p = f.value;
                                        return p && "object" === (0, r["default"])(p) && i.call(p, "__await") ? t.resolve(p.__await).then((function(e) { n("next", e, u, a) }), (function(e) { n("throw", e, u, a) })) : t.resolve(p).then((function(e) { f.value = e, u(f) }), (function(e) { return n("throw", e, u, a) }))
                                    }
                                    a(c.arg)
                                }
                                var o;
                                this._invoke = function(e, r) {
                                    function i() { return new t((function(t, i) { n(e, r, t, i) })) }
                                    return o = o ? o.then(i, i) : i()
                                }
                            }

                            function D(e, n) {
                                var r = e.iterator[n.method];
                                if (r === t) {
                                    if (n.delegate = null, "throw" === n.method) {
                                        if (e.iterator["return"] && (n.method = "return", n.arg = t, D(e, n), "throw" === n.method)) return g;
                                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return g
                                }
                                var i = l(r, e.iterator, n.arg);
                                if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, g;
                                var o = i.arg;
                                return o ? o.done ? (n[e.resultName] = o.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                            }

                            function N(e) {
                                var t = { tryLoc: e[0] };
                                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                            }

                            function T(e) {
                                var t = e.completion || {};
                                t.type = "normal", delete t.arg, e.completion = t
                            }

                            function I(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(N, this), this.reset(!0) }

                            function B(e) {
                                if (e) {
                                    var n = e[s];
                                    if (n) return n.call(e);
                                    if ("function" == typeof e.next) return e;
                                    if (!isNaN(e.length)) {
                                        var r = -1,
                                            o = function n() {
                                                for (; ++r < e.length;)
                                                    if (i.call(e, r)) return n.value = e[r], n.done = !1, n;
                                                return n.value = t, n.done = !0, n
                                            };
                                        return o.next = o
                                    }
                                }
                                return { next: C }
                            }

                            function C() { return { value: t, done: !0 } }
                            return _.prototype = E.constructor = m, m.constructor = _, _.displayName = c(m, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name)) }, e.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, a, "GeneratorFunction")), e.prototype = Object.create(E), e }, e.awrap = function(e) { return { __await: e } }, w(S.prototype), S.prototype[u] = function() { return this }, e.AsyncIterator = S, e.async = function(t, n, r, i, o) { void 0 === o && (o = Promise); var s = new S(f(t, n, r, i), o); return e.isGeneratorFunction(n) ? s : s.next().then((function(e) { return e.done ? e.value : s.next() })) }, w(E), c(E, a, "Generator"), E[s] = function() { return this }, E.toString = function() { return "[object Generator]" }, e.keys = function(e) {
                                var t = [];
                                for (var n in e) t.push(n);
                                return t.reverse(),
                                    function r() { for (; t.length;) { var n = t.pop(); if (n in e) return r.value = n, r.done = !1, r } return r.done = !0, r }
                            }, e.values = B, I.prototype = {
                                constructor: I,
                                reset: function(e) {
                                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e)
                                        for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                                },
                                stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval },
                                dispatchException: function(e) {
                                    if (this.done) throw e;
                                    var n = this;

                                    function r(r, i) { return u.type = "throw", u.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i }
                                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                        var s = this.tryEntries[o],
                                            u = s.completion;
                                        if ("root" === s.tryLoc) return r("end");
                                        if (s.tryLoc <= this.prev) {
                                            var a = i.call(s, "catchLoc"),
                                                c = i.call(s, "finallyLoc");
                                            if (a && c) { if (this.prev < s.catchLoc) return r(s.catchLoc, !0); if (this.prev < s.finallyLoc) return r(s.finallyLoc) } else if (a) { if (this.prev < s.catchLoc) return r(s.catchLoc, !0) } else { if (!c) throw new Error("try statement without catch or finally"); if (this.prev < s.finallyLoc) return r(s.finallyLoc) }
                                        }
                                    }
                                },
                                abrupt: function(e, t) {
                                    for (var n = this.tryEntries.length - 1; n >= 0; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var o = r; break } }
                                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                                    var s = o ? o.completion : {};
                                    return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(s)
                                },
                                complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g },
                                finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), g } },
                                "catch": function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.tryLoc === e) {
                                            var r = n.completion;
                                            if ("throw" === r.type) {
                                                var i = r.arg;
                                                T(n)
                                            }
                                            return i
                                        }
                                    }
                                    throw new Error("illegal catch attempt")
                                },
                                delegateYield: function(e, n, r) { return this.delegate = { iterator: B(e), resultName: n, nextLoc: r }, "next" === this.method && (this.arg = t), g }
                            }, e
                        }("object" === (0, r["default"])(e) ? e.exports : {});
                    try { regeneratorRuntime = i } catch (o) { Function("r", "regeneratorRuntime = r")(i) }
                },
                9785: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0;
                    var i = r(n(6978)),
                        o = r(n(4920)),
                        s = r(n(7054)),
                        u = { components: { XkFooter: i["default"], XkIssue: o["default"], XkInfo: s["default"] } };
                    t.Z = u
                },
                5272: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0;
                    var i = r(n(8252)),
                        o = {
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
                                    if (i["default"].prototype.$marked) {
                                        var t = i["default"].prototype.$marked,
                                            n = { image: function(e, t, n) { return console.log(e), '<a href="'.concat(e, '" target="_blank" data-fancybox="group" class="fancybox">\n           <img src="').concat(e, "\" alt='").concat(n, "'>\n          </a>") } };
                                        return t.use({ renderer: n }), t(e, { breaks: !0, gfm: !0 })
                                    }
                                    var r;
                                    return r = (r = (r = (r = (r = e).replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gm, (function(e, t, n, r) { return t }))).replace(/!\[(.*?)\]\((.*?)\)/gm, (function(e, t, n) { return n }))).replace(/\bhttps?:[^:<>"]*\/([^:<>"]*)(\.(jpeg)|(png)|(jpg)|(webp))/g, (function(e) { return '<a href="'.concat(e, '" target="_blank" data-fancybox="group" class="fancybox">\n            <img src="').concat(e, '" ></a>') }))).replace(/\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|gif|mp4))\S+/g, (function(e) { return "<a href='".concat(e, "' rel='noopener' target='_blank'>↘链接↙</a>") })), window.qqWechatEmotionParser && (r = qqWechatEmotionParser(r)), r
                                }
                            }
                        };
                    t.Z = o
                },
                739: function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0;
                    var r = n(306),
                        i = { data: function() { return { version: r.version, name: r.name } }, methods: {}, mounted: function() {} };
                    t.Z = i
                },
                317: function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0, t.Z = { props: ["count"] }
                },
                4667: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "X", { value: !0 }), t.Z = void 0;
                    var i = r(n(6304)),
                        o = r(n(7402)),
                        s = r(n(6247)),
                        u = r(n(8252)),
                        a = r(n(3505)),
                        c = r(n(7054)),
                        f = r(n(7362));
                    n(1598), n(8722);
                    var l = {
                        components: (0, s["default"])({ XkCard: a["default"], XkInfo: c["default"] }, "XkInfo", c["default"]),
                        data: function() { return { envId: "", region: "", name: "", avatar: "", bbList: [], total: 0, message: "正在加载...", loading: !0, page: 1, limit: 5, app: null, showMessage: !1, fromColor: "", loadingImg: "https://7.dusays.com/2021/03/04/d2d5e983e2961.gif", dbName: "talks" } },
                        methods: {
                            login: function(e) {
                                return (0, o["default"])(i["default"].mark((function t() {
                                    var n;
                                    return i["default"].wrap((function(t) {
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
                                return (0, o["default"])(i["default"].mark((function t() {
                                    var n, r, o;
                                    return i["default"].wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e.app.database();
                                            case 2:
                                                return n = t.sent, t.next = 5, n.collection(e.dbName).count();
                                            case 5:
                                                r = t.sent, o = r.total, e.total = o;
                                            case 8:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            getData: function() {
                                var e = this;
                                return (0, o["default"])(i["default"].mark((function t() {
                                    var n, r, o, s;
                                    return i["default"].wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.loading = !0, e.showMessage = !0, n = e.app, r = n.database(), t.prev = 4, t.next = 7, r.collection("talks").limit(e.limit).skip((e.page - 1) * e.limit).orderBy("date", "desc").get();
                                            case 7:
                                                o = t.sent, s = o.data, e.bbList = e.bbList.concat(s), e.loading = !1, e.showMessage = !1, e.page++, t.next = 20;
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
                            return (0, o["default"])(i["default"].mark((function t() {
                                var n, r, o, s, a, c, l, p, d, h, y, g, v, _, m;
                                return i["default"].wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = u["default"].prototype.$speakData, r = n.name, o = n.avatar, s = n.envId, a = n.limit, c = void 0 === a ? 5 : a, l = n.dbName, p = void 0 === l ? "talks" : l, d = n.region, h = void 0 === d ? "ap-shanghai" : d, y = n.fromColor, g = void 0 === y ? "rgb(245, 150, 170)" : y, v = n.loadingImg, _ = void 0 === v ? "https://7.dusays.com/2021/03/04/d2d5e983e2961.gif" : v, e.name = r, e.envId = s, e.avatar = o, e.fromColor = g, e.region = h, e.dbName = p, e.limit = Number(c), e.loadingImg = _, m = f["default"].init({ env: e.envId, region: e.region }), e.app = m, t.next = 13, e.login(e.app);
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
                        for (var n = [], r = {}, i = 0; i < t.length; i++) {
                            var o = t[i],
                                s = o[0],
                                u = o[1],
                                a = o[2],
                                c = o[3],
                                f = { id: e + ":" + i, css: u, media: a, sourceMap: c };
                            r[s] ? r[s].parts.push(f) : n.push(r[s] = { id: s, parts: [f] })
                        }
                        return n
                    }
                },
                8252: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
                    var i = r(n(3988)),
                        o = Object.freeze({});

                    function s(e) { return e === undefined || null === e }

                    function u(e) { return e !== undefined && null !== e }

                    function a(e) { return !0 === e }

                    function c(e) { return "string" == typeof e || "number" == typeof e || "symbol" === (0, i["default"])(e) || "boolean" == typeof e }

                    function f(e) { return null !== e && "object" === (0, i["default"])(e) }
                    var l = Object.prototype.toString;

                    function p(e) { return "[object Object]" === l.call(e) }

                    function d(e) { return "[object RegExp]" === l.call(e) }

                    function h(e) { var t = parseFloat(String(e)); return t >= 0 && Math.floor(t) === t && isFinite(e) }

                    function y(e) { return u(e) && "function" == typeof e.then && "function" == typeof e["catch"] }

                    function g(e) { return null == e ? "" : Array.isArray(e) || p(e) && e.toString === l ? JSON.stringify(e, null, 2) : String(e) }

                    function v(e) { var t = parseFloat(e); return isNaN(t) ? e : t }

                    function _(e, t) { for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0; return t ? function(e) { return n[e.toLowerCase()] } : function(e) { return n[e] } }
                    _("slot,component", !0);
                    var m = _("key,ref,slot,slot-scope,is");

                    function b(e, t) { if (e.length) { var n = e.indexOf(t); if (n > -1) return e.splice(n, 1) } }
                    var A = Object.prototype.hasOwnProperty;

                    function O(e, t) { return A.call(e, t) }

                    function E(e) { var t = Object.create(null); return function(n) { return t[n] || (t[n] = e(n)) } }
                    var w = /-(\w)/g,
                        S = E((function(e) { return e.replace(w, (function(e, t) { return t ? t.toUpperCase() : "" })) })),
                        D = E((function(e) { return e.charAt(0).toUpperCase() + e.slice(1) })),
                        N = /\B([A-Z])/g,
                        T = E((function(e) { return e.replace(N, "-$1").toLowerCase() })),
                        I = Function.prototype.bind ? function(e, t) { return e.bind(t) } : function(e, t) {
                            function n(n) { var r = arguments.length; return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t) }
                            return n._length = e.length, n
                        };

                    function B(e, t) { t = t || 0; for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t]; return r }

                    function C(e, t) { for (var n in t) e[n] = t[n]; return e }

                    function x(e) { for (var t = {}, n = 0; n < e.length; n++) e[n] && C(t, e[n]); return t }

                    function P(e, t, n) {}
                    var k = function(e, t, n) { return !1 },
                        L = function(e) { return e };

                    function R(e, t) {
                        if (e === t) return !0;
                        var n = f(e),
                            r = f(t);
                        if (!n || !r) return !n && !r && String(e) === String(t);
                        try {
                            var i = Array.isArray(e),
                                o = Array.isArray(t);
                            if (i && o) return e.length === t.length && e.every((function(e, n) { return R(e, t[n]) }));
                            if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                            if (i || o) return !1;
                            var s = Object.keys(e),
                                u = Object.keys(t);
                            return s.length === u.length && s.every((function(n) { return R(e[n], t[n]) }))
                        } catch (a) { return !1 }
                    }

                    function M(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (R(e[n], t)) return n;
                        return -1
                    }

                    function U(e) { var t = !1; return function() { t || (t = !0, e.apply(this, arguments)) } }
                    var j = "data-server-rendered",
                        F = ["component", "directive", "filter"],
                        $ = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
                        Y = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: k, isReservedAttr: k, isUnknownElement: k, getTagNamespace: P, parsePlatformTagName: L, mustUseProp: k, async: !0, _lifecycleHooks: $ },
                        q = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

                    function G(e) { var t = (e + "").charCodeAt(0); return 36 === t || 95 === t }

                    function z(e, t, n, r) { Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 }) }
                    var W, H = new RegExp("[^" + q.source + ".$_\\d]"),
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
                        ie = {}.watch,
                        oe = !1;
                    if (K) try {
                        var se = {};
                        Object.defineProperty(se, "passive", { get: function() { oe = !0 } }), window.addEventListener("test-passive", null, se)
                    } catch (Yi) {}
                    var ue = function() { return W === undefined && (W = !K && !J && "undefined" != typeof n.g && n.g.process && "server" === n.g.process.env.VUE_ENV), W },
                        ae = K && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

                    function ce(e) { return "function" == typeof e && /native code/.test(e.toString()) }
                    var fe, le = "undefined" != typeof Symbol && ce(Symbol) && "undefined" != typeof Reflect && ce(Reflect.ownKeys);
                    fe = "undefined" != typeof Set && ce(Set) ? Set : function() {
                        function e() { this.set = Object.create(null) }
                        return e.prototype.has = function(e) { return !0 === this.set[e] }, e.prototype.add = function(e) { this.set[e] = !0 }, e.prototype.clear = function() { this.set = Object.create(null) }, e
                    }();
                    var pe = P,
                        de = 0,
                        he = function() { this.id = de++, this.subs = [] };
                    he.prototype.addSub = function(e) { this.subs.push(e) }, he.prototype.removeSub = function(e) { b(this.subs, e) }, he.prototype.depend = function() { he.target && he.target.addDep(this) }, he.prototype.notify = function() { for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update() }, he.target = null;
                    var ye = [];

                    function ge(e) { ye.push(e), he.target = e }

                    function ve() { ye.pop(), he.target = ye[ye.length - 1] }
                    var _e = function(e, t, n, r, i, o, s, u) { this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = undefined, this.context = o, this.fnContext = undefined, this.fnOptions = undefined, this.fnScopeId = undefined, this.key = t && t.key, this.componentOptions = s, this.componentInstance = undefined, this.parent = undefined, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = u, this.asyncMeta = undefined, this.isAsyncPlaceholder = !1 },
                        me = { child: { configurable: !0 } };
                    me.child.get = function() { return this.componentInstance }, Object.defineProperties(_e.prototype, me);
                    var be = function(e) { void 0 === e && (e = ""); var t = new _e; return t.text = e, t.isComment = !0, t };

                    function Ae(e) { return new _e(undefined, undefined, undefined, String(e)) }

                    function Oe(e) { var t = new _e(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory); return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t }
                    var Ee = Array.prototype,
                        we = Object.create(Ee);
                    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(e) {
                        var t = Ee[e];
                        z(we, e, (function() {
                            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                            var i, o = t.apply(this, n),
                                s = this.__ob__;
                            switch (e) {
                                case "push":
                                case "unshift":
                                    i = n;
                                    break;
                                case "splice":
                                    i = n.slice(2)
                            }
                            return i && s.observeArray(i), s.dep.notify(), o
                        }))
                    }));
                    var Se = Object.getOwnPropertyNames(we),
                        De = !0;

                    function Ne(e) { De = e }
                    var Te = function(e) {
                        this.value = e, this.dep = new he, this.vmCount = 0, z(e, "__ob__", this), Array.isArray(e) ? (V ? function(e, t) { e.__proto__ = t }(e, we) : function(e, t, n) {
                            for (var r = 0, i = n.length; r < i; r++) {
                                var o = n[r];
                                z(e, o, t[o])
                            }
                        }(e, we, Se), this.observeArray(e)) : this.walk(e)
                    };

                    function Ie(e, t) { var n; if (f(e) && !(e instanceof _e)) return O(e, "__ob__") && e.__ob__ instanceof Te ? n = e.__ob__ : De && !ue() && (Array.isArray(e) || p(e)) && Object.isExtensible(e) && !e._isVue && (n = new Te(e)), t && n && n.vmCount++, n }

                    function Be(e, t, n, r, i) {
                        var o = new he,
                            s = Object.getOwnPropertyDescriptor(e, t);
                        if (!s || !1 !== s.configurable) {
                            var u = s && s.get,
                                a = s && s.set;
                            u && !a || 2 !== arguments.length || (n = e[t]);
                            var c = !i && Ie(n);
                            Object.defineProperty(e, t, {
                                enumerable: !0,
                                configurable: !0,
                                get: function() { var t = u ? u.call(e) : n; return he.target && (o.depend(), c && (c.dep.depend(), Array.isArray(t) && Pe(t))), t },
                                set: function(t) {
                                    var r = u ? u.call(e) : n;
                                    t === r || t != t && r != r || u && !a || (a ? a.call(e, t) : n = t, c = !i && Ie(t), o.notify())
                                }
                            })
                        }
                    }

                    function Ce(e, t, n) { if (Array.isArray(e) && h(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n; if (t in e && !(t in Object.prototype)) return e[t] = n, n; var r = e.__ob__; return e._isVue || r && r.vmCount ? n : r ? (Be(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n) }

                    function xe(e, t) {
                        if (Array.isArray(e) && h(t)) e.splice(t, 1);
                        else {
                            var n = e.__ob__;
                            e._isVue || n && n.vmCount || O(e, t) && (delete e[t], n && n.dep.notify())
                        }
                    }

                    function Pe(e) { for (var t = void 0, n = 0, r = e.length; n < r; n++)(t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Pe(t) }
                    Te.prototype.walk = function(e) { for (var t = Object.keys(e), n = 0; n < t.length; n++) Be(e, t[n]) }, Te.prototype.observeArray = function(e) { for (var t = 0, n = e.length; t < n; t++) Ie(e[t]) };
                    var ke = Y.optionMergeStrategies;

                    function Le(e, t) { if (!t) return e; for (var n, r, i, o = le ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < o.length; s++) "__ob__" !== (n = o[s]) && (r = e[n], i = t[n], O(e, n) ? r !== i && p(r) && p(i) && Le(r, i) : Ce(e, n, i)); return e }

                    function Re(e, t, n) {
                        return n ? function() {
                            var r = "function" == typeof t ? t.call(n, n) : t,
                                i = "function" == typeof e ? e.call(n, n) : e;
                            return r ? Le(r, i) : i
                        } : t ? e ? function() { return Le("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e) } : t : e
                    }

                    function Me(e, t) { var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e; return n ? function(e) { for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]); return t }(n) : n }

                    function Ue(e, t, n, r) { var i = Object.create(e || null); return t ? C(i, t) : i }
                    ke.data = function(e, t, n) { return n ? Re(e, t, n) : t && "function" != typeof t ? e : Re(e, t) }, $.forEach((function(e) { ke[e] = Me })), F.forEach((function(e) { ke[e + "s"] = Ue })), ke.watch = function(e, t, n, r) {
                        if (e === ie && (e = undefined), t === ie && (t = undefined), !t) return Object.create(e || null);
                        if (!e) return t;
                        var i = {};
                        for (var o in C(i, e), t) {
                            var s = i[o],
                                u = t[o];
                            s && !Array.isArray(s) && (s = [s]), i[o] = s ? s.concat(u) : Array.isArray(u) ? u : [u]
                        }
                        return i
                    }, ke.props = ke.methods = ke.inject = ke.computed = function(e, t, n, r) { if (!e) return t; var i = Object.create(null); return C(i, e), t && C(i, t), i }, ke.provide = Re;
                    var je = function(e, t) { return t === undefined ? e : t };

                    function Fe(e, t, n) {
                        if ("function" == typeof t && (t = t.options), function(e, t) {
                                var n = e.props;
                                if (n) {
                                    var r, i, o = {};
                                    if (Array.isArray(n))
                                        for (r = n.length; r--;) "string" == typeof(i = n[r]) && (o[S(i)] = { type: null });
                                    else if (p(n))
                                        for (var s in n) i = n[s], o[S(s)] = p(i) ? i : { type: i };
                                    e.props = o
                                }
                            }(t), function(e, t) {
                                var n = e.inject;
                                if (n) {
                                    var r = e.inject = {};
                                    if (Array.isArray(n))
                                        for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
                                    else if (p(n))
                                        for (var o in n) {
                                            var s = n[o];
                                            r[o] = p(s) ? C({ from: o }, s) : { from: s }
                                        }
                                }
                            }(t), function(e) {
                                var t = e.directives;
                                if (t)
                                    for (var n in t) { var r = t[n]; "function" == typeof r && (t[n] = { bind: r, update: r }) }
                            }(t), !t._base && (t["extends"] && (e = Fe(e, t["extends"], n)), t.mixins))
                            for (var r = 0, i = t.mixins.length; r < i; r++) e = Fe(e, t.mixins[r], n);
                        var o, s = {};
                        for (o in e) u(o);
                        for (o in t) O(e, o) || u(o);

                        function u(r) {
                            var i = ke[r] || je;
                            s[r] = i(e[r], t[r], n, r)
                        }
                        return s
                    }

                    function $e(e, t, n, r) { if ("string" == typeof n) { var i = e[t]; if (O(i, n)) return i[n]; var o = S(n); if (O(i, o)) return i[o]; var s = D(o); return O(i, s) ? i[s] : i[n] || i[o] || i[s] } }

                    function Ye(e, t, n, r) {
                        var i = t[e],
                            o = !O(n, e),
                            s = n[e],
                            u = ze(Boolean, i.type);
                        if (u > -1)
                            if (o && !O(i, "default")) s = !1;
                            else if ("" === s || s === T(e)) {
                            var a = ze(String, i.type);
                            (a < 0 || u < a) && (s = !0)
                        }
                        if (s === undefined) {
                            s = function(e, t, n) { if (!O(t, "default")) return undefined; var r = t["default"]; return e && e.$options.propsData && e.$options.propsData[n] === undefined && e._props[n] !== undefined ? e._props[n] : "function" == typeof r && "Function" !== qe(t.type) ? r.call(e) : r }(r, i, e);
                            var c = De;
                            Ne(!0), Ie(s), Ne(c)
                        }
                        return s
                    }

                    function qe(e) { var t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : "" }

                    function Ge(e, t) { return qe(e) === qe(t) }

                    function ze(e, t) {
                        if (!Array.isArray(t)) return Ge(t, e) ? 0 : -1;
                        for (var n = 0, r = t.length; n < r; n++)
                            if (Ge(t[n], e)) return n;
                        return -1
                    }

                    function We(e, t, n) {
                        ge();
                        try {
                            if (t)
                                for (var r = t; r = r.$parent;) {
                                    var i = r.$options.errorCaptured;
                                    if (i)
                                        for (var o = 0; o < i.length; o++) try { if (!1 === i[o].call(r, e, t, n)) return } catch (Yi) { Ve(Yi, r, "errorCaptured hook") }
                                }
                            Ve(e, t, n)
                        } finally { ve() }
                    }

                    function He(e, t, n, r, i) {
                        var o;
                        try {
                            (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && y(o) && !o._handled && (o["catch"]((function(e) { return We(e, r, i + " (Promise/async)") })), o._handled = !0)
                        } catch (Yi) { We(Yi, r, i) }
                        return o
                    }

                    function Ve(e, t, n) {
                        if (Y.errorHandler) try { return Y.errorHandler.call(null, e, t, n) } catch (Yi) { Yi !== e && Ke(Yi) }
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
                        Je = function() { tt.then(et), ne && setTimeout(P) }, Qe = !0
                    } else if (Z || "undefined" == typeof MutationObserver || !ce(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Je = "undefined" != typeof setImmediate && ce(setImmediate) ? function() { setImmediate(et) } : function() { setTimeout(et, 0) };
                    else {
                        var nt = 1,
                            rt = new MutationObserver(et),
                            it = document.createTextNode(String(nt));
                        rt.observe(it, { characterData: !0 }), Je = function() { nt = (nt + 1) % 2, it.data = String(nt) }, Qe = !0
                    }

                    function ot(e, t) { var n; if (Xe.push((function() { if (e) try { e.call(t) } catch (Yi) { We(Yi, t, "nextTick") } else n && n(t) })), Ze || (Ze = !0, Je()), !e && "undefined" != typeof Promise) return new Promise((function(e) { n = e })) }
                    var st = new fe;

                    function ut(e) { at(e, st), st.clear() }

                    function at(e, t) {
                        var n, r, i = Array.isArray(e);
                        if (!(!i && !f(e) || Object.isFrozen(e) || e instanceof _e)) {
                            if (e.__ob__) {
                                var o = e.__ob__.dep.id;
                                if (t.has(o)) return;
                                t.add(o)
                            }
                            if (i)
                                for (n = e.length; n--;) at(e[n], t);
                            else
                                for (n = (r = Object.keys(e)).length; n--;) at(e[r[n]], t)
                        }
                    }
                    var ct = E((function(e) {
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
                            for (var i = r.slice(), o = 0; o < i.length; o++) He(i[o], null, e, t, "v-on handler")
                        }
                        return n.fns = e, n
                    }

                    function lt(e, t, n, r, i, o) { var u, c, f, l; for (u in e) c = e[u], f = t[u], l = ct(u), s(c) || (s(f) ? (s(c.fns) && (c = e[u] = ft(c, o)), a(l.once) && (c = e[u] = i(l.name, c, l.capture)), n(l.name, c, l.capture, l.passive, l.params)) : c !== f && (f.fns = c, e[u] = f)); for (u in t) s(e[u]) && r((l = ct(u)).name, t[u], l.capture) }

                    function pt(e, t, n) {
                        var r;
                        e instanceof _e && (e = e.data.hook || (e.data.hook = {}));
                        var i = e[t];

                        function o() { n.apply(this, arguments), b(r.fns, o) }
                        s(i) ? r = ft([o]) : u(i.fns) && a(i.merged) ? (r = i).fns.push(o) : r = ft([i, o]), r.merged = !0, e[t] = r
                    }

                    function dt(e, t, n, r, i) { if (u(t)) { if (O(t, n)) return e[n] = t[n], i || delete t[n], !0; if (O(t, r)) return e[n] = t[r], i || delete t[r], !0 } return !1 }

                    function ht(e) { return c(e) ? [Ae(e)] : Array.isArray(e) ? gt(e) : undefined }

                    function yt(e) { return u(e) && u(e.text) && !1 === e.isComment }

                    function gt(e, t) { var n, r, i, o, f = []; for (n = 0; n < e.length; n++) s(r = e[n]) || "boolean" == typeof r || (o = f[i = f.length - 1], Array.isArray(r) ? r.length > 0 && (yt((r = gt(r, (t || "") + "_" + n))[0]) && yt(o) && (f[i] = Ae(o.text + r[0].text), r.shift()), f.push.apply(f, r)) : c(r) ? yt(o) ? f[i] = Ae(o.text + r) : "" !== r && f.push(Ae(r)) : yt(r) && yt(o) ? f[i] = Ae(o.text + r.text) : (a(e._isVList) && u(r.tag) && s(r.key) && u(t) && (r.key = "__vlist" + t + "_" + n + "__"), f.push(r))); return f }

                    function vt(e, t) {
                        if (e) {
                            for (var n = Object.create(null), r = le ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
                                var o = r[i];
                                if ("__ob__" !== o) {
                                    for (var s = e[o].from, u = t; u;) {
                                        if (u._provided && O(u._provided, s)) { n[o] = u._provided[s]; break }
                                        u = u.$parent
                                    }
                                    if (!u && "default" in e[o]) {
                                        var a = e[o]["default"];
                                        n[o] = "function" == typeof a ? a.call(t) : a
                                    }
                                }
                            }
                            return n
                        }
                    }

                    function _t(e, t) {
                        if (!e || !e.length) return {};
                        for (var n = {}, r = 0, i = e.length; r < i; r++) {
                            var o = e[r],
                                s = o.data;
                            if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, o.context !== t && o.fnContext !== t || !s || null == s.slot)(n["default"] || (n["default"] = [])).push(o);
                            else {
                                var u = s.slot,
                                    a = n[u] || (n[u] = []);
                                "template" === o.tag ? a.push.apply(a, o.children || []) : a.push(o)
                            }
                        }
                        for (var c in n) n[c].every(mt) && delete n[c];
                        return n
                    }

                    function mt(e) { return e.isComment && !e.asyncFactory || " " === e.text }

                    function bt(e, t, n) {
                        var r, i = Object.keys(t).length > 0,
                            s = e ? !!e.$stable : !i,
                            u = e && e.$key;
                        if (e) { if (e._normalized) return e._normalized; if (s && n && n !== o && u === n.$key && !i && !n.$hasNormal) return n; for (var a in r = {}, e) e[a] && "$" !== a[0] && (r[a] = At(t, a, e[a])) } else r = {};
                        for (var c in t) c in r || (r[c] = Ot(t, c));
                        return e && Object.isExtensible(e) && (e._normalized = r), z(r, "$stable", s), z(r, "$key", u), z(r, "$hasNormal", i), r
                    }

                    function At(e, t, n) { var r = function() { var e = arguments.length ? n.apply(null, arguments) : n({}); return (e = e && "object" === (0, i["default"])(e) && !Array.isArray(e) ? [e] : ht(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? undefined : e }; return n.proxy && Object.defineProperty(e, t, { get: r, enumerable: !0, configurable: !0 }), r }

                    function Ot(e, t) { return function() { return e[t] } }

                    function Et(e, t) {
                        var n, r, i, o, s;
                        if (Array.isArray(e) || "string" == typeof e)
                            for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = t(e[r], r);
                        else if ("number" == typeof e)
                            for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
                        else if (f(e))
                            if (le && e[Symbol.iterator]) { n = []; for (var a = e[Symbol.iterator](), c = a.next(); !c.done;) n.push(t(c.value, n.length)), c = a.next() } else
                                for (o = Object.keys(e), n = new Array(o.length), r = 0, i = o.length; r < i; r++) s = o[r], n[r] = t(e[s], s, r);
                        return u(n) || (n = []), n._isVList = !0, n
                    }

                    function wt(e, t, n, r) {
                        var i, o = this.$scopedSlots[e];
                        o ? (n = n || {}, r && (n = C(C({}, r), n)), i = o(n) || t) : i = this.$slots[e] || t;
                        var s = n && n.slot;
                        return s ? this.$createElement("template", { slot: s }, i) : i
                    }

                    function St(e) { return $e(this.$options, "filters", e) || L }

                    function Dt(e, t) { return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t }

                    function Nt(e, t, n, r, i) { var o = Y.keyCodes[t] || n; return i && r && !Y.keyCodes[t] ? Dt(i, r) : o ? Dt(o, e) : r ? T(r) !== t : void 0 }

                    function Tt(e, t, n, r, i) {
                        if (n && f(n)) {
                            var o;
                            Array.isArray(n) && (n = x(n));
                            var s = function(s) {
                                if ("class" === s || "style" === s || m(s)) o = e;
                                else {
                                    var u = e.attrs && e.attrs.type;
                                    o = r || Y.mustUseProp(t, u, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                                }
                                var a = S(s),
                                    c = T(s);
                                a in o || c in o || (o[s] = n[s], i && ((e.on || (e.on = {}))["update:" + s] = function(e) { n[s] = e }))
                            };
                            for (var u in n) s(u)
                        }
                        return e
                    }

                    function It(e, t) {
                        var n = this._staticTrees || (this._staticTrees = []),
                            r = n[e];
                        return r && !t || Ct(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r
                    }

                    function Bt(e, t, n) { return Ct(e, "__once__" + t + (n ? "_" + n : ""), !0), e }

                    function Ct(e, t, n) {
                        if (Array.isArray(e))
                            for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && xt(e[r], t + "_" + r, n);
                        else xt(e, t, n)
                    }

                    function xt(e, t, n) { e.isStatic = !0, e.key = t, e.isOnce = n }

                    function Pt(e, t) {
                        if (t && p(t)) {
                            var n = e.on = e.on ? C({}, e.on) : {};
                            for (var r in t) {
                                var i = n[r],
                                    o = t[r];
                                n[r] = i ? [].concat(i, o) : o
                            }
                        }
                        return e
                    }

                    function kt(e, t, n, r) {
                        t = t || { $stable: !n };
                        for (var i = 0; i < e.length; i++) {
                            var o = e[i];
                            Array.isArray(o) ? kt(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn)
                        }
                        return r && (t.$key = r), t
                    }

                    function Lt(e, t) { for (var n = 0; n < t.length; n += 2) { var r = t[n]; "string" == typeof r && r && (e[t[n]] = t[n + 1]) } return e }

                    function Rt(e, t) { return "string" == typeof e ? t + e : e }

                    function Mt(e) { e._o = Bt, e._n = v, e._s = g, e._l = Et, e._t = wt, e._q = R, e._i = M, e._m = It, e._f = St, e._k = Nt, e._b = Tt, e._v = Ae, e._e = be, e._u = kt, e._g = Pt, e._d = Lt, e._p = Rt }

                    function Ut(e, t, n, r, i) {
                        var s, u = this,
                            c = i.options;
                        O(r, "_uid") ? (s = Object.create(r))._original = r : (s = r, r = r._original);
                        var f = a(c._compiled),
                            l = !f;
                        this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || o, this.injections = vt(c.inject, r), this.slots = function() { return u.$slots || bt(e.scopedSlots, u.$slots = _t(n, r)), u.$slots }, Object.defineProperty(this, "scopedSlots", { enumerable: !0, get: function() { return bt(e.scopedSlots, this.slots()) } }), f && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = bt(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function(e, t, n, i) { var o = zt(s, e, t, n, i, l); return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId, o.fnContext = r), o } : this._c = function(e, t, n, r) { return zt(s, e, t, n, r, l) }
                    }

                    function jt(e, t, n, r, i) { var o = Oe(e); return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o }

                    function Ft(e, t) { for (var n in t) e[S(n)] = t[n] }
                    Mt(Ut.prototype);
                    var $t = {
                            init: function(e, t) {
                                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                                    var n = e;
                                    $t.prepatch(n, n)
                                } else(e.componentInstance = function(e, t) {
                                    var n = { _isComponent: !0, _parentVnode: e, parent: t },
                                        r = e.data.inlineTemplate;
                                    return u(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n)
                                }(e, nn)).$mount(t ? e.elm : undefined, t)
                            },
                            prepatch: function(e, t) {
                                var n = t.componentOptions;
                                ! function(e, t, n, r, i) {
                                    var s = r.data.scopedSlots,
                                        u = e.$scopedSlots,
                                        a = !!(s && !s.$stable || u !== o && !u.$stable || s && e.$scopedSlots.$key !== s.$key),
                                        c = !!(i || e.$options._renderChildren || a);
                                    if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, e.$attrs = r.data.attrs || o, e.$listeners = n || o, t && e.$options.props) {
                                        Ne(!1);
                                        for (var f = e._props, l = e.$options._propKeys || [], p = 0; p < l.length; p++) {
                                            var d = l[p],
                                                h = e.$options.props;
                                            f[d] = Ye(d, h, t, e)
                                        }
                                        Ne(!0), e.$options.propsData = t
                                    }
                                    n = n || o;
                                    var y = e.$options._parentListeners;
                                    e.$options._parentListeners = n, tn(e, n, y), c && (e.$slots = _t(i, r.context), e.$forceUpdate())
                                }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
                            },
                            insert: function(e) {
                                var t, n = e.context,
                                    r = e.componentInstance;
                                r._isMounted || (r._isMounted = !0, an(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, fn.push(t)) : sn(r, !0))
                            },
                            destroy: function(e) {
                                var t = e.componentInstance;
                                t._isDestroyed || (e.data.keepAlive ? un(t, !0) : t.$destroy())
                            }
                        },
                        Yt = Object.keys($t);

                    function qt(e, t, n, r, i) {
                        if (!s(e)) {
                            var c = n.$options._base;
                            if (f(e) && (e = c.extend(e)), "function" == typeof e) {
                                var l;
                                if (s(e.cid) && (e = function(e, t) {
                                        if (a(e.error) && u(e.errorComp)) return e.errorComp;
                                        if (u(e.resolved)) return e.resolved;
                                        var n = Vt;
                                        if (n && u(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), a(e.loading) && u(e.loadingComp)) return e.loadingComp;
                                        if (n && !u(e.owners)) {
                                            var r = e.owners = [n],
                                                i = !0,
                                                o = null,
                                                c = null;
                                            n.$on("hook:destroyed", (function() { return b(r, n) }));
                                            var l = function(e) {
                                                    for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
                                                    e && (r.length = 0, null !== o && (clearTimeout(o), o = null), null !== c && (clearTimeout(c), c = null))
                                                },
                                                p = U((function(n) { e.resolved = Kt(n, t), i ? r.length = 0 : l(!0) })),
                                                d = U((function(t) { u(e.errorComp) && (e.error = !0, l(!0)) })),
                                                h = e(p, d);
                                            return f(h) && (y(h) ? s(e.resolved) && h.then(p, d) : y(h.component) && (h.component.then(p, d), u(h.error) && (e.errorComp = Kt(h.error, t)), u(h.loading) && (e.loadingComp = Kt(h.loading, t), 0 === h.delay ? e.loading = !0 : o = setTimeout((function() { o = null, s(e.resolved) && s(e.error) && (e.loading = !0, l(!1)) }), h.delay || 200)), u(h.timeout) && (c = setTimeout((function() { c = null, s(e.resolved) && d(null) }), h.timeout)))), i = !1, e.loading ? e.loadingComp : e.resolved
                                        }
                                    }(l = e, c)) === undefined) return function(e, t, n, r, i) { var o = be(); return o.asyncFactory = e, o.asyncMeta = { data: t, context: n, children: r, tag: i }, o }(l, t, n, r, i);
                                t = t || {}, Bn(e), u(t.model) && function(e, t) {
                                    var n = e.model && e.model.prop || "value",
                                        r = e.model && e.model.event || "input";
                                    (t.attrs || (t.attrs = {}))[n] = t.model.value;
                                    var i = t.on || (t.on = {}),
                                        o = i[r],
                                        s = t.model.callback;
                                    u(o) ? (Array.isArray(o) ? -1 === o.indexOf(s) : o !== s) && (i[r] = [s].concat(o)) : i[r] = s
                                }(e.options, t);
                                var p = function(e, t, n) {
                                    var r = t.options.props;
                                    if (!s(r)) {
                                        var i = {},
                                            o = e.attrs,
                                            a = e.props;
                                        if (u(o) || u(a))
                                            for (var c in r) {
                                                var f = T(c);
                                                dt(i, a, c, f, !0) || dt(i, o, c, f, !1)
                                            }
                                        return i
                                    }
                                }(t, e);
                                if (a(e.options.functional)) return function(e, t, n, r, i) {
                                    var s = e.options,
                                        a = {},
                                        c = s.props;
                                    if (u(c))
                                        for (var f in c) a[f] = Ye(f, c, t || o);
                                    else u(n.attrs) && Ft(a, n.attrs), u(n.props) && Ft(a, n.props);
                                    var l = new Ut(n, a, i, r, e),
                                        p = s.render.call(null, l._c, l);
                                    if (p instanceof _e) return jt(p, n, l.parent, s);
                                    if (Array.isArray(p)) { for (var d = ht(p) || [], h = new Array(d.length), y = 0; y < d.length; y++) h[y] = jt(d[y], n, l.parent, s); return h }
                                }(e, p, t, n, r);
                                var d = t.on;
                                if (t.on = t.nativeOn, a(e.options.abstract)) {
                                    var h = t.slot;
                                    t = {}, h && (t.slot = h)
                                }! function(e) {
                                    for (var t = e.hook || (e.hook = {}), n = 0; n < Yt.length; n++) {
                                        var r = Yt[n],
                                            i = t[r],
                                            o = $t[r];
                                        i === o || i && i._merged || (t[r] = i ? Gt(o, i) : o)
                                    }
                                }(t);
                                var g = e.options.name || i;
                                return new _e("vue-component-" + e.cid + (g ? "-" + g : ""), t, undefined, undefined, undefined, n, { Ctor: e, propsData: p, listeners: d, tag: i, children: r }, l)
                            }
                        }
                    }

                    function Gt(e, t) { var n = function(n, r) { e(n, r), t(n, r) }; return n._merged = !0, n }

                    function zt(e, t, n, r, i, o) {
                        return (Array.isArray(n) || c(n)) && (i = r, r = n, n = undefined), a(o) && (i = 2),
                            function(e, t, n, r, i) {
                                if (u(n) && u(n.__ob__)) return be();
                                if (u(n) && u(n.is) && (t = n.is), !t) return be();
                                var o, s, a;
                                (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = { "default": r[0] }, r.length = 0), 2 === i ? r = ht(r) : 1 === i && (r = function(e) {
                                    for (var t = 0; t < e.length; t++)
                                        if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                                    return e
                                }(r)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || Y.getTagNamespace(t), o = Y.isReservedTag(t) ? new _e(Y.parsePlatformTagName(t), n, r, undefined, undefined, e) : n && n.pre || !u(a = $e(e.$options, "components", t)) ? new _e(t, n, r, undefined, undefined, e) : qt(a, n, e, r, t)) : o = qt(t, n, e, r);
                                return Array.isArray(o) ? o : u(o) ? (u(s) && Wt(o, s), u(n) && function(e) { f(e.style) && ut(e.style), f(e["class"]) && ut(e["class"]) }(n), o) : be()
                            }(e, t, n, r, i)
                    }

                    function Wt(e, t, n) {
                        if (e.ns = t, "foreignObject" === e.tag && (t = undefined, n = !0), u(e.children))
                            for (var r = 0, i = e.children.length; r < i; r++) {
                                var o = e.children[r];
                                u(o.tag) && (s(o.ns) || a(n) && "svg" !== o.tag) && Wt(o, t, n)
                            }
                    }
                    var Ht, Vt = null;

                    function Kt(e, t) { return (e.__esModule || le && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), f(e) ? t.extend(e) : e }

                    function Jt(e) { return e.isComment && e.asyncFactory }

                    function Qt(e) {
                        if (Array.isArray(e))
                            for (var t = 0; t < e.length; t++) { var n = e[t]; if (u(n) && (u(n.componentOptions) || Jt(n))) return n }
                    }

                    function Xt(e, t) { Ht.$on(e, t) }

                    function Zt(e, t) { Ht.$off(e, t) }

                    function en(e, t) {
                        var n = Ht;
                        return function r() {
                            var i = t.apply(null, arguments);
                            null !== i && n.$off(e, r)
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
                            an(e, "activated")
                        }
                    }

                    function un(e, t) {
                        if (!(t && (e._directInactive = !0, on(e)) || e._inactive)) {
                            e._inactive = !0;
                            for (var n = 0; n < e.$children.length; n++) un(e.$children[n]);
                            an(e, "deactivated")
                        }
                    }

                    function an(e, t) {
                        ge();
                        var n = e.$options[t],
                            r = t + " hook";
                        if (n)
                            for (var i = 0, o = n.length; i < o; i++) He(n[i], e, null, e, r);
                        e._hasHookEvent && e.$emit("hook:" + t), ve()
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
                        var vn = window.performance;
                        vn && "function" == typeof vn.now && gn() > document.createEvent("Event").timeStamp && (gn = function() { return vn.now() })
                    }

                    function _n() {
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
                                    r._watcher === n && r._isMounted && !r._isDestroyed && an(r, "updated")
                                }
                            }(r), ae && Y.devtools && ae.emit("flush")
                    }
                    var mn = 0,
                        bn = function(e, t, n, r, i) {
                            this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++mn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new fe, this.newDepIds = new fe, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function(e) {
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
                            }(t), this.getter || (this.getter = P)), this.value = this.lazy ? undefined : this.get()
                        };
                    bn.prototype.get = function() {
                        var e;
                        ge(this);
                        var t = this.vm;
                        try { e = this.getter.call(t, t) } catch (Yi) {
                            if (!this.user) throw Yi;
                            We(Yi, t, 'getter for watcher "' + this.expression + '"')
                        } finally { this.deep && ut(e), ve(), this.cleanupDeps() }
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
                                pn || (pn = !0, ot(_n))
                            }
                        }(this)
                    }, bn.prototype.run = function() { if (this.active) { var e = this.get(); if (e !== this.value || f(e) || this.deep) { var t = this.value; if (this.value = e, this.user) try { this.cb.call(this.vm, e, t) } catch (Yi) { We(Yi, this.vm, 'callback for watcher "' + this.expression + '"') } else this.cb.call(this.vm, e, t) } } }, bn.prototype.evaluate = function() { this.value = this.get(), this.dirty = !1 }, bn.prototype.depend = function() { for (var e = this.deps.length; e--;) this.deps[e].depend() }, bn.prototype.teardown = function() {
                        if (this.active) {
                            this.vm._isBeingDestroyed || b(this.vm._watchers, this);
                            for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                            this.active = !1
                        }
                    };
                    var An = { enumerable: !0, configurable: !0, get: P, set: P };

                    function On(e, t, n) { An.get = function() { return this[t][n] }, An.set = function(e) { this[t][n] = e }, Object.defineProperty(e, n, An) }

                    function En(e) {
                        e._watchers = [];
                        var t = e.$options;
                        t.props && function(e, t) {
                            var n = e.$options.propsData || {},
                                r = e._props = {},
                                i = e.$options._propKeys = [];
                            e.$parent && Ne(!1);
                            var o = function(o) {
                                i.push(o);
                                var s = Ye(o, t, n, e);
                                Be(r, o, s), o in e || On(e, "_props", o)
                            };
                            for (var s in t) o(s);
                            Ne(!0)
                        }(e, t.props), t.methods && function(e, t) { for (var n in e.$options.props, t) e[n] = "function" != typeof t[n] ? P : I(t[n], e) }(e, t.methods), t.data ? function(e) {
                            var t = e.$options.data;
                            p(t = e._data = "function" == typeof t ? function(e, t) { ge(); try { return e.call(t, t) } catch (Yi) { return We(Yi, t, "data()"), {} } finally { ve() } }(t, e) : t || {}) || (t = {});
                            for (var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length); i--;) {
                                var o = n[i];
                                r && O(r, o) || G(o) || On(e, "_data", o)
                            }
                            Ie(t, !0)
                        }(e) : Ie(e._data = {}, !0), t.computed && function(e, t) {
                            var n = e._computedWatchers = Object.create(null),
                                r = ue();
                            for (var i in t) {
                                var o = t[i],
                                    s = "function" == typeof o ? o : o.get;
                                r || (n[i] = new bn(e, s || P, P, wn)), i in e || Sn(e, i, o)
                            }
                        }(e, t.computed), t.watch && t.watch !== ie && function(e, t) {
                            for (var n in t) {
                                var r = t[n];
                                if (Array.isArray(r))
                                    for (var i = 0; i < r.length; i++) Tn(e, n, r[i]);
                                else Tn(e, n, r)
                            }
                        }(e, t.watch)
                    }
                    var wn = { lazy: !0 };

                    function Sn(e, t, n) { var r = !ue(); "function" == typeof n ? (An.get = r ? Dn(t) : Nn(n), An.set = P) : (An.get = n.get ? r && !1 !== n.cache ? Dn(t) : Nn(n.get) : P, An.set = n.set || P), Object.defineProperty(e, t, An) }

                    function Dn(e) { return function() { var t = this._computedWatchers && this._computedWatchers[e]; if (t) return t.dirty && t.evaluate(), he.target && t.depend(), t.value } }

                    function Nn(e) { return function() { return e.call(this, this) } }

                    function Tn(e, t, n, r) { return p(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r) }
                    var In = 0;

                    function Bn(e) {
                        var t = e.options;
                        if (e["super"]) {
                            var n = Bn(e["super"]);
                            if (n !== e.superOptions) {
                                e.superOptions = n;
                                var r = function(e) {
                                    var t, n = e.options,
                                        r = e.sealedOptions;
                                    for (var i in n) n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
                                    return t
                                }(e);
                                r && C(e.extendOptions, r), (t = e.options = Fe(n, e.extendOptions)).name && (t.components[t.name] = e)
                            }
                        }
                        return t
                    }

                    function Cn(e) { this._init(e) }

                    function xn(e) {
                        e.cid = 0;
                        var t = 1;
                        e.extend = function(e) {
                            e = e || {};
                            var n = this,
                                r = n.cid,
                                i = e._Ctor || (e._Ctor = {});
                            if (i[r]) return i[r];
                            var o = e.name || n.options.name,
                                s = function(e) { this._init(e) };
                            return (s.prototype = Object.create(n.prototype)).constructor = s, s.cid = t++, s.options = Fe(n.options, e), s["super"] = n, s.options.props && function(e) { var t = e.options.props; for (var n in t) On(e.prototype, "_props", n) }(s), s.options.computed && function(e) { var t = e.options.computed; for (var n in t) Sn(e.prototype, n, t[n]) }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, F.forEach((function(e) { s[e] = n[e] })), o && (s.options.components[o] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = C({}, s.options), i[r] = s, s
                        }
                    }

                    function Pn(e) { return e && (e.Ctor.options.name || e.tag) }

                    function kn(e, t) { return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!d(e) && e.test(t) }

                    function Ln(e, t) {
                        var n = e.cache,
                            r = e.keys,
                            i = e._vnode;
                        for (var o in n) {
                            var s = n[o];
                            if (s) {
                                var u = Pn(s.componentOptions);
                                u && !t(u) && Rn(n, o, r, i)
                            }
                        }
                    }

                    function Rn(e, t, n, r) { var i = e[t];!i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, b(n, t) }! function(e) {
                        e.prototype._init = function(e) {
                            var t = this;
                            t._uid = In++, t._isVue = !0, e && e._isComponent ? function(e, t) {
                                    var n = e.$options = Object.create(e.constructor.options),
                                        r = t._parentVnode;
                                    n.parent = t.parent, n._parentVnode = r;
                                    var i = r.componentOptions;
                                    n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
                                }(t, e) : t.$options = Fe(Bn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t,
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
                                    e.$slots = _t(t._renderChildren, r), e.$scopedSlots = o, e._c = function(t, n, r, i) { return zt(e, t, n, r, i, !1) }, e.$createElement = function(t, n, r, i) { return zt(e, t, n, r, i, !0) };
                                    var i = n && n.data;
                                    Be(e, "$attrs", i && i.attrs || o, null, !0), Be(e, "$listeners", t._parentListeners || o, null, !0)
                                }(t), an(t, "beforeCreate"),
                                function(e) {
                                    var t = vt(e.$options.inject, e);
                                    t && (Ne(!1), Object.keys(t).forEach((function(n) { Be(e, n, t[n]) })), Ne(!0))
                                }(t), En(t),
                                function(e) {
                                    var t = e.$options.provide;
                                    t && (e._provided = "function" == typeof t ? t.call(e) : t)
                                }(t), an(t, "created"), t.$options.el && t.$mount(t.$options.el)
                        }
                    }(Cn),
                    function(e) {
                        var t = { get: function() { return this._data } },
                            n = { get: function() { return this._props } };
                        Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Ce, e.prototype.$delete = xe, e.prototype.$watch = function(e, t, n) {
                            var r = this;
                            if (p(t)) return Tn(r, e, t, n);
                            (n = n || {}).user = !0;
                            var i = new bn(r, e, t, n);
                            if (n.immediate) try { t.call(r, i.value) } catch (o) { We(o, r, 'callback for immediate watcher "' + i.expression + '"') }
                            return function() { i.teardown() }
                        }
                    }(Cn),
                    function(e) {
                        var t = /^hook:/;
                        e.prototype.$on = function(e, n) {
                            var r = this;
                            if (Array.isArray(e))
                                for (var i = 0, o = e.length; i < o; i++) r.$on(e[i], n);
                            else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
                            return r
                        }, e.prototype.$once = function(e, t) {
                            var n = this;

                            function r() { n.$off(e, r), t.apply(n, arguments) }
                            return r.fn = t, n.$on(e, r), n
                        }, e.prototype.$off = function(e, t) {
                            var n = this;
                            if (!arguments.length) return n._events = Object.create(null), n;
                            if (Array.isArray(e)) { for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t); return n }
                            var o, s = n._events[e];
                            if (!s) return n;
                            if (!t) return n._events[e] = null, n;
                            for (var u = s.length; u--;)
                                if ((o = s[u]) === t || o.fn === t) { s.splice(u, 1); break }
                            return n
                        }, e.prototype.$emit = function(e) {
                            var t = this,
                                n = t._events[e];
                            if (n) { n = n.length > 1 ? B(n) : n; for (var r = B(arguments, 1), i = 'event handler for "' + e + '"', o = 0, s = n.length; o < s; o++) He(n[o], t, r, t, i) }
                            return t
                        }
                    }(Cn),
                    function(e) {
                        e.prototype._update = function(e, t) {
                            var n = this,
                                r = n.$el,
                                i = n._vnode,
                                o = rn(n);
                            n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                        }, e.prototype.$forceUpdate = function() { this._watcher && this._watcher.update() }, e.prototype.$destroy = function() {
                            var e = this;
                            if (!e._isBeingDestroyed) {
                                an(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                                var t = e.$parent;
                                !t || t._isBeingDestroyed || e.$options.abstract || b(t.$children, e), e._watcher && e._watcher.teardown();
                                for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), an(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                            }
                        }
                    }(Cn),
                    function(e) {
                        Mt(e.prototype), e.prototype.$nextTick = function(e) { return ot(e, this) }, e.prototype._render = function() {
                            var e, t = this,
                                n = t.$options,
                                r = n.render,
                                i = n._parentVnode;
                            i && (t.$scopedSlots = bt(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;
                            try { Vt = t, e = r.call(t._renderProxy, t.$createElement) } catch (Yi) { We(Yi, t, "render"), e = t._vnode } finally { Vt = null }
                            return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof _e || (e = be()), e.parent = i, e
                        }
                    }(Cn);
                    var Mn = [String, RegExp, Array],
                        Un = {
                            KeepAlive: {
                                name: "keep-alive",
                                abstract: !0,
                                props: { include: Mn, exclude: Mn, max: [String, Number] },
                                created: function() { this.cache = Object.create(null), this.keys = [] },
                                destroyed: function() { for (var e in this.cache) Rn(this.cache, e, this.keys) },
                                mounted: function() {
                                    var e = this;
                                    this.$watch("include", (function(t) { Ln(e, (function(e) { return kn(t, e) })) })), this.$watch("exclude", (function(t) { Ln(e, (function(e) { return !kn(t, e) })) }))
                                },
                                render: function() {
                                    var e = this.$slots["default"],
                                        t = Qt(e),
                                        n = t && t.componentOptions;
                                    if (n) {
                                        var r = Pn(n),
                                            i = this.include,
                                            o = this.exclude;
                                        if (i && (!r || !kn(i, r)) || o && r && kn(o, r)) return t;
                                        var s = this.cache,
                                            u = this.keys,
                                            a = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                                        s[a] ? (t.componentInstance = s[a].componentInstance, b(u, a), u.push(a)) : (s[a] = t, u.push(a), this.max && u.length > parseInt(this.max) && Rn(s, u[0], u, this._vnode)), t.data.keepAlive = !0
                                    }
                                    return t || e && e[0]
                                }
                            }
                        };
                    ! function(e) {
                        var t = { get: function() { return Y } };
                        Object.defineProperty(e, "config", t), e.util = { warn: pe, extend: C, mergeOptions: Fe, defineReactive: Be }, e.set = Ce, e["delete"] = xe, e.nextTick = ot, e.observable = function(e) { return Ie(e), e }, e.options = Object.create(null), F.forEach((function(t) { e.options[t + "s"] = Object.create(null) })), e.options._base = e, C(e.options.components, Un),
                            function(e) { e.use = function(e) { var t = this._installedPlugins || (this._installedPlugins = []); if (t.indexOf(e) > -1) return this; var n = B(arguments, 1); return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this } }(e),
                            function(e) { e.mixin = function(e) { return this.options = Fe(this.options, e), this } }(e), xn(e),
                            function(e) { F.forEach((function(t) { e[t] = function(e, n) { return n ? ("component" === t && p(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e] } })) }(e)
                    }(Cn), Object.defineProperty(Cn.prototype, "$isServer", { get: ue }), Object.defineProperty(Cn.prototype, "$ssrContext", { get: function() { return this.$vnode && this.$vnode.ssrContext } }), Object.defineProperty(Cn, "FunctionalRenderContext", { value: Ut }), Cn.version = "2.6.12";
                    var jn = _("style,class"),
                        Fn = _("input,textarea,option,select,progress"),
                        $n = _("contenteditable,draggable,spellcheck"),
                        Yn = _("events,caret,typing,plaintext-only"),
                        qn = _("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                        Gn = "http://www.w3.org/1999/xlink",
                        zn = function(e) { return ":" === e.charAt(5) && "xlink" === e.slice(0, 5) },
                        Wn = function(e) { return zn(e) ? e.slice(6, e.length) : "" },
                        Hn = function(e) { return null == e || !1 === e };

                    function Vn(e) { for (var t = e.data, n = e, r = e; u(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (t = Kn(r.data, t)); for (; u(n = n.parent);) n && n.data && (t = Kn(t, n.data)); return i = t.staticClass, o = t["class"], u(i) || u(o) ? Jn(i, Qn(o)) : ""; var i, o }

                    function Kn(e, t) { return { staticClass: Jn(e.staticClass, t.staticClass), "class": u(e["class"]) ? [e["class"], t["class"]] : t["class"] } }

                    function Jn(e, t) { return e ? t ? e + " " + t : e : t || "" }

                    function Qn(e) { return Array.isArray(e) ? function(e) { for (var t, n = "", r = 0, i = e.length; r < i; r++) u(t = Qn(e[r])) && "" !== t && (n && (n += " "), n += t); return n }(e) : f(e) ? function(e) { var t = ""; for (var n in e) e[n] && (t && (t += " "), t += n); return t }(e) : "string" == typeof e ? e : "" }
                    var Xn = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
                        Zn = _("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                        er = _("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                        tr = function(e) { return Zn(e) || er(e) },
                        nr = Object.create(null),
                        rr = _("text,number,password,search,email,tel,url"),
                        ir = Object.freeze({ createElement: function(e, t) { var n = document.createElement(e); return "select" !== e || t.data && t.data.attrs && t.data.attrs.multiple !== undefined && n.setAttribute("multiple", "multiple"), n }, createElementNS: function(e, t) { return document.createElementNS(Xn[e], t) }, createTextNode: function(e) { return document.createTextNode(e) }, createComment: function(e) { return document.createComment(e) }, insertBefore: function(e, t, n) { e.insertBefore(t, n) }, removeChild: function(e, t) { e.removeChild(t) }, appendChild: function(e, t) { e.appendChild(t) }, parentNode: function(e) { return e.parentNode }, nextSibling: function(e) { return e.nextSibling }, tagName: function(e) { return e.tagName }, setTextContent: function(e, t) { e.textContent = t }, setStyleScope: function(e, t) { e.setAttribute(t, "") } }),
                        or = { create: function(e, t) { sr(t) }, update: function(e, t) { e.data.ref !== t.data.ref && (sr(e, !0), sr(t)) }, destroy: function(e) { sr(e, !0) } };

                    function sr(e, t) {
                        var n = e.data.ref;
                        if (u(n)) {
                            var r = e.context,
                                i = e.componentInstance || e.elm,
                                o = r.$refs;
                            t ? Array.isArray(o[n]) ? b(o[n], i) : o[n] === i && (o[n] = undefined) : e.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [i] : o[n] = i
                        }
                    }
                    var ur = new _e("", {}, []),
                        ar = ["create", "activate", "update", "remove", "destroy"];

                    function cr(e, t) {
                        return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && u(e.data) === u(t.data) && function(e, t) {
                            if ("input" !== e.tag) return !0;
                            var n, r = u(n = e.data) && u(n = n.attrs) && n.type,
                                i = u(n = t.data) && u(n = n.attrs) && n.type;
                            return r === i || rr(r) && rr(i)
                        }(e, t) || a(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && s(t.asyncFactory.error))
                    }

                    function fr(e, t, n) { var r, i, o = {}; for (r = t; r <= n; ++r) u(i = e[r].key) && (o[i] = r); return o }
                    var lr = { create: pr, update: pr, destroy: function(e) { pr(e, ur) } };

                    function pr(e, t) {
                        (e.data.directives || t.data.directives) && function(e, t) {
                            var n, r, i, o = e === ur,
                                s = t === ur,
                                u = hr(e.data.directives, e.context),
                                a = hr(t.data.directives, t.context),
                                c = [],
                                f = [];
                            for (n in a) r = u[n], i = a[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, gr(i, "update", t, e), i.def && i.def.componentUpdated && f.push(i)) : (gr(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
                            if (c.length) {
                                var l = function() { for (var n = 0; n < c.length; n++) gr(c[n], "inserted", t, e) };
                                o ? pt(t, "insert", l) : l()
                            }
                            if (f.length && pt(t, "postpatch", (function() { for (var n = 0; n < f.length; n++) gr(f[n], "componentUpdated", t, e) })), !o)
                                for (n in u) a[n] || gr(u[n], "unbind", e, e, s)
                        }(e, t)
                    }
                    var dr = Object.create(null);

                    function hr(e, t) { var n, r, i = Object.create(null); if (!e) return i; for (n = 0; n < e.length; n++)(r = e[n]).modifiers || (r.modifiers = dr), i[yr(r)] = r, r.def = $e(t.$options, "directives", r.name); return i }

                    function yr(e) { return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".") }

                    function gr(e, t, n, r, i) { var o = e.def && e.def[t]; if (o) try { o(n.elm, e, n, r, i) } catch (Yi) { We(Yi, n.context, "directive " + e.name + " " + t + " hook") } }
                    var vr = [or, lr];

                    function _r(e, t) {
                        var n = t.componentOptions;
                        if (!(u(n) && !1 === n.Ctor.options.inheritAttrs || s(e.data.attrs) && s(t.data.attrs))) {
                            var r, i, o = t.elm,
                                a = e.data.attrs || {},
                                c = t.data.attrs || {};
                            for (r in u(c.__ob__) && (c = t.data.attrs = C({}, c)), c) i = c[r], a[r] !== i && mr(o, r, i);
                            for (r in (Z || te) && c.value !== a.value && mr(o, "value", c.value), a) s(c[r]) && (zn(r) ? o.removeAttributeNS(Gn, Wn(r)) : $n(r) || o.removeAttribute(r))
                        }
                    }

                    function mr(e, t, n) { e.tagName.indexOf("-") > -1 ? br(e, t, n) : qn(t) ? Hn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : $n(t) ? e.setAttribute(t, function(e, t) { return Hn(t) || "false" === t ? "false" : "contenteditable" === e && Yn(t) ? t : "true" }(t, n)) : zn(t) ? Hn(n) ? e.removeAttributeNS(Gn, Wn(t)) : e.setAttributeNS(Gn, t, n) : br(e, t, n) }

                    function br(e, t, n) { Hn(n) ? e.removeAttribute(t) : (!Z || ee || "TEXTAREA" !== e.tagName || "placeholder" !== t || "" === n || e.__ieph || (e.addEventListener("input", (function r(t) { t.stopImmediatePropagation(), e.removeEventListener("input", r) })), e.__ieph = !0), e.setAttribute(t, n)) }
                    var Ar = { create: _r, update: _r };

                    function Or(e, t) {
                        var n = t.elm,
                            r = t.data,
                            i = e.data;
                        if (!(s(r.staticClass) && s(r["class"]) && (s(i) || s(i.staticClass) && s(i["class"])))) {
                            var o = Vn(t),
                                a = n._transitionClasses;
                            u(a) && (o = Jn(o, Qn(a))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o)
                        }
                    }
                    var Er, wr = { create: Or, update: Or };

                    function Sr(e, t, n) {
                        var r = Er;
                        return function i() {
                            var o = t.apply(null, arguments);
                            null !== o && Tr(e, i, n, r)
                        }
                    }
                    var Dr = Qe && !(re && Number(re[1]) <= 53);

                    function Nr(e, t, n, r) {
                        if (Dr) {
                            var i = yn,
                                o = t;
                            t = o._wrapper = function(e) { if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments) }
                        }
                        Er.addEventListener(e, t, oe ? { capture: n, passive: r } : n)
                    }

                    function Tr(e, t, n, r) {
                        (r || Er).removeEventListener(e, t._wrapper || t, n)
                    }

                    function Ir(e, t) {
                        if (!s(e.data.on) || !s(t.data.on)) {
                            var n = t.data.on || {},
                                r = e.data.on || {};
                            Er = t.elm,
                                function(e) {
                                    if (u(e.__r)) {
                                        var t = Z ? "change" : "input";
                                        e[t] = [].concat(e.__r, e[t] || []), delete e.__r
                                    }
                                    u(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c)
                                }(n), lt(n, r, Nr, Tr, Sr, t.context), Er = undefined
                        }
                    }
                    var Br, Cr = { create: Ir, update: Ir };

                    function xr(e, t) {
                        if (!s(e.data.domProps) || !s(t.data.domProps)) {
                            var n, r, i = t.elm,
                                o = e.data.domProps || {},
                                a = t.data.domProps || {};
                            for (n in u(a.__ob__) && (a = t.data.domProps = C({}, a)), o) n in a || (i[n] = "");
                            for (n in a) {
                                if (r = a[n], "textContent" === n || "innerHTML" === n) {
                                    if (t.children && (t.children.length = 0), r === o[n]) continue;
                                    1 === i.childNodes.length && i.removeChild(i.childNodes[0])
                                }
                                if ("value" === n && "PROGRESS" !== i.tagName) {
                                    i._value = r;
                                    var c = s(r) ? "" : String(r);
                                    Pr(i, c) && (i.value = c)
                                } else if ("innerHTML" === n && er(i.tagName) && s(i.innerHTML)) {
                                    (Br = Br || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
                                    for (var f = Br.firstChild; i.firstChild;) i.removeChild(i.firstChild);
                                    for (; f.firstChild;) i.appendChild(f.firstChild)
                                } else if (r !== o[n]) try { i[n] = r } catch (Yi) {}
                            }
                        }
                    }

                    function Pr(e, t) {
                        return !e.composing && ("OPTION" === e.tagName || function(e, t) { var n = !0; try { n = document.activeElement !== e } catch (Yi) {} return n && e.value !== t }(e, t) || function(e, t) {
                            var n = e.value,
                                r = e._vModifiers;
                            if (u(r)) { if (r.number) return v(n) !== v(t); if (r.trim) return n.trim() !== t.trim() }
                            return n !== t
                        }(e, t))
                    }
                    var kr = { create: xr, update: xr },
                        Lr = E((function(e) {
                            var t = {},
                                n = /:(.+)/;
                            return e.split(/;(?![^(]*\))/g).forEach((function(e) {
                                if (e) {
                                    var r = e.split(n);
                                    r.length > 1 && (t[r[0].trim()] = r[1].trim())
                                }
                            })), t
                        }));

                    function Rr(e) { var t = Mr(e.style); return e.staticStyle ? C(e.staticStyle, t) : t }

                    function Mr(e) { return Array.isArray(e) ? x(e) : "string" == typeof e ? Lr(e) : e }
                    var Ur, jr = /^--/,
                        Fr = /\s*!important$/,
                        $r = function(e, t, n) {
                            if (jr.test(t)) e.style.setProperty(t, n);
                            else if (Fr.test(n)) e.style.setProperty(T(t), n.replace(Fr, ""), "important");
                            else {
                                var r = qr(t);
                                if (Array.isArray(n))
                                    for (var i = 0, o = n.length; i < o; i++) e.style[r] = n[i];
                                else e.style[r] = n
                            }
                        },
                        Yr = ["Webkit", "Moz", "ms"],
                        qr = E((function(e) { if (Ur = Ur || document.createElement("div").style, "filter" !== (e = S(e)) && e in Ur) return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Yr.length; n++) { var r = Yr[n] + t; if (r in Ur) return r } }));

                    function Gr(e, t) {
                        var n = t.data,
                            r = e.data;
                        if (!(s(n.staticStyle) && s(n.style) && s(r.staticStyle) && s(r.style))) {
                            var i, o, a = t.elm,
                                c = r.staticStyle,
                                f = r.normalizedStyle || r.style || {},
                                l = c || f,
                                p = Mr(t.data.style) || {};
                            t.data.normalizedStyle = u(p.__ob__) ? C({}, p) : p;
                            var d = function(e, t) {
                                var n, r = {};
                                if (t)
                                    for (var i = e; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = Rr(i.data)) && C(r, n);
                                (n = Rr(e.data)) && C(r, n);
                                for (var o = e; o = o.parent;) o.data && (n = Rr(o.data)) && C(r, n);
                                return r
                            }(t, !0);
                            for (o in l) s(d[o]) && $r(a, o, "");
                            for (o in d)(i = d[o]) !== l[o] && $r(a, o, null == i ? "" : i)
                        }
                    }
                    var zr = { create: Gr, update: Gr },
                        Wr = /\s+/;

                    function Hr(e, t) {
                        if (t && (t = t.trim()))
                            if (e.classList) t.indexOf(" ") > -1 ? t.split(Wr).forEach((function(t) { return e.classList.add(t) })) : e.classList.add(t);
                            else {
                                var n = " " + (e.getAttribute("class") || "") + " ";
                                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                            }
                    }

                    function Vr(e, t) {
                        if (t && (t = t.trim()))
                            if (e.classList) t.indexOf(" ") > -1 ? t.split(Wr).forEach((function(t) { return e.classList.remove(t) })) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
                            else {
                                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                                (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
                            }
                    }

                    function Kr(e) { if (e) { if ("object" === (0, i["default"])(e)) { var t = {}; return !1 !== e.css && C(t, Jr(e.name || "v")), C(t, e), t } return "string" == typeof e ? Jr(e) : void 0 } }
                    var Jr = E((function(e) { return { enterClass: e + "-enter", enterToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveClass: e + "-leave", leaveToClass: e + "-leave-to", leaveActiveClass: e + "-leave-active" } })),
                        Qr = K && !ee,
                        Xr = "transition",
                        Zr = "animation",
                        ei = "transition",
                        ti = "transitionend",
                        ni = "animation",
                        ri = "animationend";
                    Qr && (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined && (ei = "WebkitTransition", ti = "webkitTransitionEnd"), window.onanimationend === undefined && window.onwebkitanimationend !== undefined && (ni = "WebkitAnimation", ri = "webkitAnimationEnd"));
                    var ii = K ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) { return e() };

                    function oi(e) { ii((function() { ii(e) })) }

                    function si(e, t) {
                        var n = e._transitionClasses || (e._transitionClasses = []);
                        n.indexOf(t) < 0 && (n.push(t), Hr(e, t))
                    }

                    function ui(e, t) { e._transitionClasses && b(e._transitionClasses, t), Vr(e, t) }

                    function ai(e, t, n) {
                        var r = fi(e, t),
                            i = r.type,
                            o = r.timeout,
                            s = r.propCount;
                        if (!i) return n();
                        var u = i === Xr ? ti : ri,
                            a = 0,
                            c = function() { e.removeEventListener(u, f), n() },
                            f = function(t) { t.target === e && ++a >= s && c() };
                        setTimeout((function() { a < s && c() }), o + 1), e.addEventListener(u, f)
                    }
                    var ci = /\b(transform|all)(,|$)/;

                    function fi(e, t) {
                        var n, r = window.getComputedStyle(e),
                            i = (r[ei + "Delay"] || "").split(", "),
                            o = (r[ei + "Duration"] || "").split(", "),
                            s = li(i, o),
                            u = (r[ni + "Delay"] || "").split(", "),
                            a = (r[ni + "Duration"] || "").split(", "),
                            c = li(u, a),
                            f = 0,
                            l = 0;
                        return t === Xr ? s > 0 && (n = Xr, f = s, l = o.length) : t === Zr ? c > 0 && (n = Zr, f = c, l = a.length) : l = (n = (f = Math.max(s, c)) > 0 ? s > c ? Xr : Zr : null) ? n === Xr ? o.length : a.length : 0, { type: n, timeout: f, propCount: l, hasTransform: n === Xr && ci.test(r[ei + "Property"]) }
                    }

                    function li(e, t) { for (; e.length < t.length;) e = e.concat(e); return Math.max.apply(null, t.map((function(t, n) { return pi(t) + pi(e[n]) }))) }

                    function pi(e) { return 1e3 * Number(e.slice(0, -1).replace(",", ".")) }

                    function di(e, t) {
                        var n = e.elm;
                        u(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
                        var r = Kr(e.data.transition);
                        if (!s(r) && !u(n._enterCb) && 1 === n.nodeType) {
                            for (var i = r.css, o = r.type, a = r.enterClass, c = r.enterToClass, l = r.enterActiveClass, p = r.appearClass, d = r.appearToClass, h = r.appearActiveClass, y = r.beforeEnter, g = r.enter, _ = r.afterEnter, m = r.enterCancelled, b = r.beforeAppear, A = r.appear, O = r.afterAppear, E = r.appearCancelled, w = r.duration, S = nn, D = nn.$vnode; D && D.parent;) S = D.context, D = D.parent;
                            var N = !S._isMounted || !e.isRootInsert;
                            if (!N || A || "" === A) {
                                var T = N && p ? p : a,
                                    I = N && h ? h : l,
                                    B = N && d ? d : c,
                                    C = N && b || y,
                                    x = N && "function" == typeof A ? A : g,
                                    P = N && O || _,
                                    k = N && E || m,
                                    L = v(f(w) ? w.enter : w),
                                    R = !1 !== i && !ee,
                                    M = gi(x),
                                    j = n._enterCb = U((function() { R && (ui(n, B), ui(n, I)), j.cancelled ? (R && ui(n, T), k && k(n)) : P && P(n), n._enterCb = null }));
                                e.data.show || pt(e, "insert", (function() {
                                    var t = n.parentNode,
                                        r = t && t._pending && t._pending[e.key];
                                    r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), x && x(n, j)
                                })), C && C(n), R && (si(n, T), si(n, I), oi((function() { ui(n, T), j.cancelled || (si(n, B), M || (yi(L) ? setTimeout(j, L) : ai(n, o, j))) }))), e.data.show && (t && t(), x && x(n, j)), R || M || j()
                            }
                        }
                    }

                    function hi(e, t) {
                        var n = e.elm;
                        u(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
                        var r = Kr(e.data.transition);
                        if (s(r) || 1 !== n.nodeType) return t();
                        if (!u(n._leaveCb)) {
                            var i = r.css,
                                o = r.type,
                                a = r.leaveClass,
                                c = r.leaveToClass,
                                l = r.leaveActiveClass,
                                p = r.beforeLeave,
                                d = r.leave,
                                h = r.afterLeave,
                                y = r.leaveCancelled,
                                g = r.delayLeave,
                                _ = r.duration,
                                m = !1 !== i && !ee,
                                b = gi(d),
                                A = v(f(_) ? _.leave : _),
                                O = n._leaveCb = U((function() { n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), m && (ui(n, c), ui(n, l)), O.cancelled ? (m && ui(n, a), y && y(n)) : (t(), h && h(n)), n._leaveCb = null }));
                            g ? g(E) : E()
                        }

                        function E() { O.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), p && p(n), m && (si(n, a), si(n, l), oi((function() { ui(n, a), O.cancelled || (si(n, c), b || (yi(A) ? setTimeout(O, A) : ai(n, o, O))) }))), d && d(n, O), m || b || O()) }
                    }

                    function yi(e) { return "number" == typeof e && !isNaN(e) }

                    function gi(e) { if (s(e)) return !1; var t = e.fns; return u(t) ? gi(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1 }

                    function vi(e, t) {!0 !== t.data.show && di(t) }
                    var _i = function(e) {
                        var t, n, r = {},
                            i = e.modules,
                            o = e.nodeOps;
                        for (t = 0; t < ar.length; ++t)
                            for (r[ar[t]] = [], n = 0; n < i.length; ++n) u(i[n][ar[t]]) && r[ar[t]].push(i[n][ar[t]]);

                        function f(e) {
                            var t = o.parentNode(e);
                            u(t) && o.removeChild(t, e)
                        }

                        function l(e, t, n, i, s, c, f) {
                            if (u(e.elm) && u(c) && (e = c[f] = Oe(e)), e.isRootInsert = !s, ! function(e, t, n, i) {
                                    var o = e.data;
                                    if (u(o)) {
                                        var s = u(e.componentInstance) && o.keepAlive;
                                        if (u(o = o.hook) && u(o = o.init) && o(e, !1), u(e.componentInstance)) return p(e, t), d(n, e.elm, i), a(s) && function(e, t, n, i) {
                                            for (var o, s = e; s.componentInstance;)
                                                if (u(o = (s = s.componentInstance._vnode).data) && u(o = o.transition)) {
                                                    for (o = 0; o < r.activate.length; ++o) r.activate[o](ur, s);
                                                    t.push(s);
                                                    break
                                                }
                                            d(n, e.elm, i)
                                        }(e, t, n, i), !0
                                    }
                                }(e, t, n, i)) {
                                var l = e.data,
                                    y = e.children,
                                    _ = e.tag;
                                u(_) ? (e.elm = e.ns ? o.createElementNS(e.ns, _) : o.createElement(_, e), v(e), h(e, y, t), u(l) && g(e, t), d(n, e.elm, i)) : a(e.isComment) ? (e.elm = o.createComment(e.text), d(n, e.elm, i)) : (e.elm = o.createTextNode(e.text), d(n, e.elm, i))
                            }
                        }

                        function p(e, t) { u(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, y(e) ? (g(e, t), v(e)) : (sr(e), t.push(e)) }

                        function d(e, t, n) { u(e) && (u(n) ? o.parentNode(n) === e && o.insertBefore(e, t, n) : o.appendChild(e, t)) }

                        function h(e, t, n) {
                            if (Array.isArray(t))
                                for (var r = 0; r < t.length; ++r) l(t[r], n, e.elm, null, !0, t, r);
                            else c(e.text) && o.appendChild(e.elm, o.createTextNode(String(e.text)))
                        }

                        function y(e) { for (; e.componentInstance;) e = e.componentInstance._vnode; return u(e.tag) }

                        function g(e, n) {
                            for (var i = 0; i < r.create.length; ++i) r.create[i](ur, e);
                            u(t = e.data.hook) && (u(t.create) && t.create(ur, e), u(t.insert) && n.push(e))
                        }

                        function v(e) {
                            var t;
                            if (u(t = e.fnScopeId)) o.setStyleScope(e.elm, t);
                            else
                                for (var n = e; n;) u(t = n.context) && u(t = t.$options._scopeId) && o.setStyleScope(e.elm, t), n = n.parent;
                            u(t = nn) && t !== e.context && t !== e.fnContext && u(t = t.$options._scopeId) && o.setStyleScope(e.elm, t)
                        }

                        function m(e, t, n, r, i, o) { for (; r <= i; ++r) l(n[r], o, e, t, !1, n, r) }

                        function b(e) {
                            var t, n, i = e.data;
                            if (u(i))
                                for (u(t = i.hook) && u(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) r.destroy[t](e);
                            if (u(t = e.children))
                                for (n = 0; n < e.children.length; ++n) b(e.children[n])
                        }

                        function A(e, t, n) {
                            for (; t <= n; ++t) {
                                var r = e[t];
                                u(r) && (u(r.tag) ? (O(r), b(r)) : f(r.elm))
                            }
                        }

                        function O(e, t) {
                            if (u(t) || u(e.data)) {
                                var n, i = r.remove.length + 1;
                                for (u(t) ? t.listeners += i : t = function(e, t) {
                                        function n() { 0 == --n.listeners && f(e) }
                                        return n.listeners = t, n
                                    }(e.elm, i), u(n = e.componentInstance) && u(n = n._vnode) && u(n.data) && O(n, t), n = 0; n < r.remove.length; ++n) r.remove[n](e, t);
                                u(n = e.data.hook) && u(n = n.remove) ? n(e, t) : t()
                            } else f(e.elm)
                        }

                        function E(e, t, n, r) { for (var i = n; i < r; i++) { var o = t[i]; if (u(o) && cr(e, o)) return i } }

                        function w(e, t, n, i, c, f) {
                            if (e !== t) {
                                u(t.elm) && u(i) && (t = i[c] = Oe(t));
                                var p = t.elm = e.elm;
                                if (a(e.isAsyncPlaceholder)) u(t.asyncFactory.resolved) ? N(e.elm, t, n) : t.isAsyncPlaceholder = !0;
                                else if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce))) t.componentInstance = e.componentInstance;
                                else {
                                    var d, h = t.data;
                                    u(h) && u(d = h.hook) && u(d = d.prepatch) && d(e, t);
                                    var g = e.children,
                                        v = t.children;
                                    if (u(h) && y(t)) {
                                        for (d = 0; d < r.update.length; ++d) r.update[d](e, t);
                                        u(d = h.hook) && u(d = d.update) && d(e, t)
                                    }
                                    s(t.text) ? u(g) && u(v) ? g !== v && function(e, t, n, r, i) {
                                        for (var a, c, f, p = 0, d = 0, h = t.length - 1, y = t[0], g = t[h], v = n.length - 1, _ = n[0], b = n[v], O = !i; p <= h && d <= v;) s(y) ? y = t[++p] : s(g) ? g = t[--h] : cr(y, _) ? (w(y, _, r, n, d), y = t[++p], _ = n[++d]) : cr(g, b) ? (w(g, b, r, n, v), g = t[--h], b = n[--v]) : cr(y, b) ? (w(y, b, r, n, v), O && o.insertBefore(e, y.elm, o.nextSibling(g.elm)), y = t[++p], b = n[--v]) : cr(g, _) ? (w(g, _, r, n, d), O && o.insertBefore(e, g.elm, y.elm), g = t[--h], _ = n[++d]) : (s(a) && (a = fr(t, p, h)), s(c = u(_.key) ? a[_.key] : E(_, t, p, h)) ? l(_, r, e, y.elm, !1, n, d) : cr(f = t[c], _) ? (w(f, _, r, n, d), t[c] = undefined, O && o.insertBefore(e, f.elm, y.elm)) : l(_, r, e, y.elm, !1, n, d), _ = n[++d]);
                                        p > h ? m(e, s(n[v + 1]) ? null : n[v + 1].elm, n, d, v, r) : d > v && A(t, p, h)
                                    }(p, g, v, n, f) : u(v) ? (u(e.text) && o.setTextContent(p, ""), m(p, null, v, 0, v.length - 1, n)) : u(g) ? A(g, 0, g.length - 1) : u(e.text) && o.setTextContent(p, "") : e.text !== t.text && o.setTextContent(p, t.text), u(h) && u(d = h.hook) && u(d = d.postpatch) && d(e, t)
                                }
                            }
                        }

                        function S(e, t, n) {
                            if (a(n) && u(e.parent)) e.parent.data.pendingInsert = t;
                            else
                                for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
                        }
                        var D = _("attrs,class,staticClass,staticStyle,key");

                        function N(e, t, n, r) {
                            var i, o = t.tag,
                                s = t.data,
                                c = t.children;
                            if (r = r || s && s.pre, t.elm = e, a(t.isComment) && u(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                            if (u(s) && (u(i = s.hook) && u(i = i.init) && i(t, !0), u(i = t.componentInstance))) return p(t, n), !0;
                            if (u(o)) {
                                if (u(c))
                                    if (e.hasChildNodes())
                                        if (u(i = s) && u(i = i.domProps) && u(i = i.innerHTML)) { if (i !== e.innerHTML) return !1 } else {
                                            for (var f = !0, l = e.firstChild, d = 0; d < c.length; d++) {
                                                if (!l || !N(l, c[d], n, r)) { f = !1; break }
                                                l = l.nextSibling
                                            }
                                            if (!f || l) return !1
                                        }
                                else h(t, c, n);
                                if (u(s)) {
                                    var y = !1;
                                    for (var v in s)
                                        if (!D(v)) { y = !0, g(t, n); break }!y && s["class"] && ut(s["class"])
                                }
                            } else e.data !== t.text && (e.data = t.text);
                            return !0
                        }
                        return function(e, t, n, i) {
                            if (!s(t)) {
                                var c, f = !1,
                                    p = [];
                                if (s(e)) f = !0, l(t, p);
                                else {
                                    var d = u(e.nodeType);
                                    if (!d && cr(e, t)) w(e, t, p, null, null, i);
                                    else {
                                        if (d) {
                                            if (1 === e.nodeType && e.hasAttribute(j) && (e.removeAttribute(j), n = !0), a(n) && N(e, t, p)) return S(t, p, !0), e;
                                            c = e, e = new _e(o.tagName(c).toLowerCase(), {}, [], undefined, c)
                                        }
                                        var h = e.elm,
                                            g = o.parentNode(h);
                                        if (l(t, p, h._leaveCb ? null : g, o.nextSibling(h)), u(t.parent))
                                            for (var v = t.parent, _ = y(t); v;) {
                                                for (var m = 0; m < r.destroy.length; ++m) r.destroy[m](v);
                                                if (v.elm = t.elm, _) {
                                                    for (var O = 0; O < r.create.length; ++O) r.create[O](ur, v);
                                                    var E = v.data.hook.insert;
                                                    if (E.merged)
                                                        for (var D = 1; D < E.fns.length; D++) E.fns[D]()
                                                } else sr(v);
                                                v = v.parent
                                            }
                                        u(g) ? A([e], 0, 0) : u(e.tag) && b(e)
                                    }
                                }
                                return S(t, p, f), t.elm
                            }
                            u(e) && b(e)
                        }
                    }({ nodeOps: ir, modules: [Ar, wr, Cr, kr, zr, K ? { create: vi, activate: vi, remove: function(e, t) {!0 !== e.data.show ? hi(e, t) : t() } } : {}].concat(vr) });
                    ee && document.addEventListener("selectionchange", (function() {
                        var e = document.activeElement;
                        e && e.vmodel && Di(e, "input")
                    }));
                    var mi = {
                        inserted: function(e, t, n, r) { "select" === n.tag ? (r.elm && !r.elm._vOptions ? pt(n, "postpatch", (function() { mi.componentUpdated(e, t, n) })) : bi(e, t, n.context), e._vOptions = [].map.call(e.options, Ei)) : ("textarea" === n.tag || rr(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", wi), e.addEventListener("compositionend", Si), e.addEventListener("change", Si), ee && (e.vmodel = !0))) },
                        componentUpdated: function(e, t, n) {
                            if ("select" === n.tag) {
                                bi(e, t, n.context);
                                var r = e._vOptions,
                                    i = e._vOptions = [].map.call(e.options, Ei);
                                i.some((function(e, t) { return !R(e, r[t]) })) && (e.multiple ? t.value.some((function(e) { return Oi(e, i) })) : t.value !== t.oldValue && Oi(t.value, i)) && Di(e, "change")
                            }
                        }
                    };

                    function bi(e, t, n) { Ai(e, t), (Z || te) && setTimeout((function() { Ai(e, t) }), 0) }

                    function Ai(e, t, n) {
                        var r = t.value,
                            i = e.multiple;
                        if (!i || Array.isArray(r)) {
                            for (var o, s, u = 0, a = e.options.length; u < a; u++)
                                if (s = e.options[u], i) o = M(r, Ei(s)) > -1, s.selected !== o && (s.selected = o);
                                else if (R(Ei(s), r)) return void(e.selectedIndex !== u && (e.selectedIndex = u));
                            i || (e.selectedIndex = -1)
                        }
                    }

                    function Oi(e, t) { return t.every((function(t) { return !R(t, e) })) }

                    function Ei(e) { return "_value" in e ? e._value : e.value }

                    function wi(e) { e.target.composing = !0 }

                    function Si(e) { e.target.composing && (e.target.composing = !1, Di(e.target, "input")) }

                    function Di(e, t) {
                        var n = document.createEvent("HTMLEvents");
                        n.initEvent(t, !0, !0), e.dispatchEvent(n)
                    }

                    function Ni(e) { return !e.componentInstance || e.data && e.data.transition ? e : Ni(e.componentInstance._vnode) }
                    var Ti = {
                            model: mi,
                            show: {
                                bind: function(e, t, n) {
                                    var r = t.value,
                                        i = (n = Ni(n)).data && n.data.transition,
                                        o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                                    r && i ? (n.data.show = !0, di(n, (function() { e.style.display = o }))) : e.style.display = r ? o : "none"
                                },
                                update: function(e, t, n) { var r = t.value;!r != !t.oldValue && ((n = Ni(n)).data && n.data.transition ? (n.data.show = !0, r ? di(n, (function() { e.style.display = e.__vOriginalDisplay })) : hi(n, (function() { e.style.display = "none" }))) : e.style.display = r ? e.__vOriginalDisplay : "none") },
                                unbind: function(e, t, n, r, i) { i || (e.style.display = e.__vOriginalDisplay) }
                            }
                        },
                        Ii = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] };

                    function Bi(e) { var t = e && e.componentOptions; return t && t.Ctor.options.abstract ? Bi(Qt(t.children)) : e }

                    function Ci(e) {
                        var t = {},
                            n = e.$options;
                        for (var r in n.propsData) t[r] = e[r];
                        var i = n._parentListeners;
                        for (var o in i) t[S(o)] = i[o];
                        return t
                    }

                    function xi(e, t) { if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData }) }
                    var Pi = function(e) { return e.tag || Jt(e) },
                        ki = function(e) { return "show" === e.name },
                        Li = {
                            name: "transition",
                            props: Ii,
                            abstract: !0,
                            render: function(e) {
                                var t = this,
                                    n = this.$slots["default"];
                                if (n && (n = n.filter(Pi)).length) {
                                    var r = this.mode,
                                        i = n[0];
                                    if (function(e) {
                                            for (; e = e.parent;)
                                                if (e.data.transition) return !0
                                        }(this.$vnode)) return i;
                                    var o = Bi(i);
                                    if (!o) return i;
                                    if (this._leaving) return xi(e, i);
                                    var s = "__transition-" + this._uid + "-";
                                    o.key = null == o.key ? o.isComment ? s + "comment" : s + o.tag : c(o.key) ? 0 === String(o.key).indexOf(s) ? o.key : s + o.key : o.key;
                                    var u = (o.data || (o.data = {})).transition = Ci(this),
                                        a = this._vnode,
                                        f = Bi(a);
                                    if (o.data.directives && o.data.directives.some(ki) && (o.data.show = !0), f && f.data && ! function(e, t) { return t.key === e.key && t.tag === e.tag }(o, f) && !Jt(f) && (!f.componentInstance || !f.componentInstance._vnode.isComment)) {
                                        var l = f.data.transition = C({}, u);
                                        if ("out-in" === r) return this._leaving = !0, pt(l, "afterLeave", (function() { t._leaving = !1, t.$forceUpdate() })), xi(e, i);
                                        if ("in-out" === r) {
                                            if (Jt(o)) return a;
                                            var p, d = function() { p() };
                                            pt(u, "afterEnter", d), pt(u, "enterCancelled", d), pt(l, "delayLeave", (function(e) { p = e }))
                                        }
                                    }
                                    return i
                                }
                            }
                        },
                        Ri = C({ tag: String, moveClass: String }, Ii);

                    function Mi(e) { e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb() }

                    function Ui(e) { e.data.newPos = e.elm.getBoundingClientRect() }

                    function ji(e) {
                        var t = e.data.pos,
                            n = e.data.newPos,
                            r = t.left - n.left,
                            i = t.top - n.top;
                        if (r || i) {
                            e.data.moved = !0;
                            var o = e.elm.style;
                            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
                        }
                    }
                    delete Ri.mode;
                    var Fi = {
                        Transition: Li,
                        TransitionGroup: {
                            props: Ri,
                            beforeMount: function() {
                                var e = this,
                                    t = this._update;
                                this._update = function(n, r) {
                                    var i = rn(e);
                                    e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r)
                                }
                            },
                            render: function(e) {
                                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots["default"] || [], o = this.children = [], s = Ci(this), u = 0; u < i.length; u++) {
                                    var a = i[u];
                                    a.tag && null != a.key && 0 !== String(a.key).indexOf("__vlist") && (o.push(a), n[a.key] = a, (a.data || (a.data = {})).transition = s)
                                }
                                if (r) {
                                    for (var c = [], f = [], l = 0; l < r.length; l++) {
                                        var p = r[l];
                                        p.data.transition = s, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? c.push(p) : f.push(p)
                                    }
                                    this.kept = e(t, null, c), this.removed = f
                                }
                                return e(t, null, o)
                            },
                            updated: function() {
                                var e = this.prevChildren,
                                    t = this.moveClass || (this.name || "v") + "-move";
                                e.length && this.hasMove(e[0].elm, t) && (e.forEach(Mi), e.forEach(Ui), e.forEach(ji), this._reflow = document.body.offsetHeight, e.forEach((function(e) {
                                    if (e.data.moved) {
                                        var n = e.elm,
                                            r = n.style;
                                        si(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(ti, n._moveCb = function i(e) { e && e.target !== n || e && !/transform$/.test(e.propertyName) || (n.removeEventListener(ti, i), n._moveCb = null, ui(n, t)) })
                                    }
                                })))
                            },
                            methods: {
                                hasMove: function(e, t) {
                                    if (!Qr) return !1;
                                    if (this._hasMove) return this._hasMove;
                                    var n = e.cloneNode();
                                    e._transitionClasses && e._transitionClasses.forEach((function(e) { Vr(n, e) })), Hr(n, t), n.style.display = "none", this.$el.appendChild(n);
                                    var r = fi(n);
                                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                                }
                            }
                        }
                    };
                    Cn.config.mustUseProp = function(e, t, n) { return "value" === n && Fn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e }, Cn.config.isReservedTag = tr, Cn.config.isReservedAttr = jn, Cn.config.getTagNamespace = function(e) { return er(e) ? "svg" : "math" === e ? "math" : void 0 }, Cn.config.isUnknownElement = function(e) { if (!K) return !0; if (tr(e)) return !1; if (e = e.toLowerCase(), null != nr[e]) return nr[e]; var t = document.createElement(e); return e.indexOf("-") > -1 ? nr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : nr[e] = /HTMLUnknownElement/.test(t.toString()) }, C(Cn.options.directives, Ti), C(Cn.options.components, Fi), Cn.prototype.__patch__ = K ? _i : P, Cn.prototype.$mount = function(e, t) { return function(e, t, n) { var r; return e.$el = t, e.$options.render || (e.$options.render = be), an(e, "beforeMount"), r = function() { e._update(e._render(), n) }, new bn(e, r, P, { before: function() { e._isMounted && !e._isDestroyed && an(e, "beforeUpdate") } }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, an(e, "mounted")), e }(this, e = e && K ? function(e) { return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e }(e) : undefined, t) }, K && setTimeout((function() { Y.devtools && ae && ae.emit("init", Cn) }), 0);
                    var $i = Cn;
                    t["default"] = $i
                },
                653: function(e, t, n) {
                    "use strict";
                    var r = n(3483);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.render = void 0;
                    var i = r(n(8252)),
                        o = r(n(2925)),
                        s = new i["default"];
                    t.render = function() {
                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : undefined;
                        return i["default"].prototype.$marked = t, i["default"].prototype.$speakData = e, i["default"].prototype.$eventHub = s, new i["default"]({ render: function(e) { return e(o["default"]) } }).$mount(e.el || "#ispeak")
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
                    n.r(t), n.d(t, { __esModule: function() { return i.X }, "default": function() { return u } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "ispeak", attrs: { id: "ispeak" } }, [n("xk-issue"), e._v(" "), n("xk-footer")], 1)
                    };
                    r._withStripped = !0;
                    var i = n(9785),
                        o = i.Z,
                        s = (0, n(1900).Z)(o, r, [], !1, null, "1a1fd4f0", null);
                    s.options.__file = "src/view/App.vue";
                    var u = s.exports
                },
                3505: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, { __esModule: function() { return i.X }, "default": function() { return u } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "xk-card wow animate__zoomIn" }, [n("div", { staticClass: "xk-card-header" }, [n("div", { staticClass: "xk-card-name" }, [n("div", { staticClass: "avatar" }, [n("img", { staticClass: "avatar-img", attrs: { src: e.avatar } })]), e._v(" "), n("div", { staticClass: "name" }, [e._v(e._s(e.name))]), e._v(" "), n("svg", { staticClass: "is-badge", attrs: { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#1da1f2" } })]), e._v(" "), n("span", { staticClass: "xk-card-time", attrs: { title: e.time_title } }, [e._v(e._s(e.date))])])]), e._v(" "), n("div", { staticClass: "xk-card-content", domProps: { innerHTML: e._s(e.content) } }), e._v(" "), n("div", { staticClass: "xk-card-footer" }, [n("div", { staticClass: "xk-card-label", style: "background: " + e.fromColor + ";color:white" }, [e._v("\n      " + e._s(e.from) + "\n    ")])])])
                    };
                    r._withStripped = !0;
                    var i = n(5272),
                        o = i.Z,
                        s = (n(6032), (0, n(1900).Z)(o, r, [], !1, null, "185689ea", null));
                    s.options.__file = "src/view/components/XkCard.vue";
                    var u = s.exports
                },
                6978: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, { __esModule: function() { return i.X }, "default": function() { return u } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "xk-footer" }, [e._v("\n  Powered by\n  "), n("a", { attrs: { href: "https://github.com/xue-hy/bber-ispeak", target: "_blank" } }, [e._v(e._s(e.name))]), e._v(" v" + e._s(e.version) + "\n")])
                    };
                    r._withStripped = !0;
                    var i = n(739),
                        o = i.Z,
                        s = (n(9083), (0, n(1900).Z)(o, r, [], !1, null, "83222954", null));
                    s.options.__file = "src/view/components/XkFooter.vue";
                    var u = s.exports
                },
                7054: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, { __esModule: function() { return i.X }, "default": function() { return u } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "xk-info" }, [n("div", { staticClass: "count" }, [n("i", { staticClass: "iconfont icon-gangbi" }), e._v("\n    小记 (" + e._s(e.count) + ")\n  ")])])
                    };
                    r._withStripped = !0;
                    var i = n(317),
                        o = i.Z,
                        s = (n(5135), (0, n(1900).Z)(o, r, [], !1, null, "0224b4ae", null));
                    s.options.__file = "src/view/components/XkInfo.vue";
                    var u = s.exports
                },
                4920: function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, { __esModule: function() { return i.X }, "default": function() { return u } });
                    var r = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("xk-info", { attrs: { count: e.total } }), e._v(" "), n("transition-group", { attrs: { name: "list", tag: "div" } }, [e._l(e.bbList, (function(t) { return [n("xk-card", { key: t._id, attrs: { bbData: t, name: e.name, avatar: e.avatar, fromColor: e.fromColor } })] }))], 2), e._v(" "), e.loading ? n("div", { staticClass: "loading" }, [n("img", { attrs: { src: e.loadingImg, alt: "loading" } })]) : e._e(), e._v(" "), e.bbList.length < e.total ? n("button", { staticClass: "next", on: { click: e.getData } }, [e._v("再翻翻")]) : e._e(), e._v(" "), e.showMessage ? n("div", { staticStyle: { "text-align": "center", "margin-top": "20px" } }, [e._v("\n    " + e._s(e.message) + "\n  ")]) : e._e()], 1)
                    };
                    r._withStripped = !0;
                    var i = n(4667),
                        o = i.Z,
                        s = (n(2e3), (0, n(1900).Z)(o, r, [], !1, null, "b9fd4424", null));
                    s.options.__file = "src/view/components/XkIssue.vue";
                    var u = s.exports
                },
                1900: function(e, t, n) {
                    "use strict";

                    function r(e, t, n, r, i, o, s, u) {
                        var a, c = "function" == typeof e ? e.options : e;
                        if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = "data-v-" + o), s ? (a = function(e) {
                                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                            }, c._ssrRegister = a) : i && (a = u ? function() { i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot) } : i), a)
                            if (c.functional) {
                                c._injectStyles = a;
                                var f = c.render;
                                c.render = function(e, t) { return a.call(t), f(e, t) }
                            } else {
                                var l = c.beforeCreate;
                                c.beforeCreate = l ? [].concat(l, a) : [a]
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
                        i = "undefined" != typeof document;
                    if ("undefined" != typeof DEBUG && DEBUG && !i) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                    var o = {},
                        s = i && (document.head || document.getElementsByTagName("head")[0]),
                        u = null,
                        a = 0,
                        c = !1,
                        f = function() {},
                        l = null,
                        p = "data-vue-ssr-id",
                        d = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                    function h(e, t, n, i) {
                        c = n, l = i || {};
                        var s = (0, r.Z)(e, t);
                        return y(s),
                            function(t) {
                                for (var n = [], i = 0; i < s.length; i++) {
                                    var u = s[i];
                                    (a = o[u.id]).refs--, n.push(a)
                                }
                                for (t ? y(s = (0, r.Z)(e, t)) : s = [], i = 0; i < n.length; i++) {
                                    var a;
                                    if (0 === (a = n[i]).refs) {
                                        for (var c = 0; c < a.parts.length; c++) a.parts[c]();
                                        delete o[a.id]
                                    }
                                }
                            }
                    }

                    function y(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t],
                                r = o[n.id];
                            if (r) {
                                r.refs++;
                                for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                                for (; i < n.parts.length; i++) r.parts.push(v(n.parts[i]));
                                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                            } else {
                                var s = [];
                                for (i = 0; i < n.parts.length; i++) s.push(v(n.parts[i]));
                                o[n.id] = { id: n.id, refs: 1, parts: s }
                            }
                        }
                    }

                    function g() { var e = document.createElement("style"); return e.type = "text/css", s.appendChild(e), e }

                    function v(e) {
                        var t, n, r = document.querySelector("style[" + p + '~="' + e.id + '"]');
                        if (r) {
                            if (c) return f;
                            r.parentNode.removeChild(r)
                        }
                        if (d) {
                            var i = a++;
                            r = u || (u = g()), t = b.bind(null, r, i, !1), n = b.bind(null, r, i, !0)
                        } else r = g(), t = A.bind(null, r), n = function() { r.parentNode.removeChild(r) };
                        return t(e),
                            function(r) {
                                if (r) {
                                    if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                                    t(e = r)
                                } else n()
                            }
                    }
                    var _, m = (_ = [], function(e, t) { return _[e] = t, _.filter(Boolean).join("\n") });

                    function b(e, t, n, r) {
                        var i = n ? "" : r.css;
                        if (e.styleSheet) e.styleSheet.cssText = m(t, i);
                        else {
                            var o = document.createTextNode(i),
                                s = e.childNodes;
                            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
                        }
                    }

                    function A(e, t) {
                        var n = t.css,
                            r = t.media,
                            i = t.sourceMap;
                        if (r && e.setAttribute("media", r), l.ssrId && e.setAttribute(p, t.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
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

        function n(r) { if (t[r]) return t[r].exports; var i = t[r] = { id: r, loaded: !1, exports: {} }; return e[r](i, i.exports, n), i.loaded = !0, i.exports }
        n.d = function(e, t) { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.nmd = function(e) { return e.paths = [], e.children || (e.children = []), e };
        var r = {};
        return function() {
            "use strict";
            var e = r,
                t = n(3483);
            Object.defineProperty(e, "__esModule", { value: !0 }), e.init = a, e["default"] = void 0;
            var i = t(n(6304)),
                o = t(n(7402)),
                s = n(653),
                u = t(n(8263));

            function a(e) { return c.apply(this, arguments) }

            function c() {
                return (c = (0, o["default"])(i["default"].mark((function e(t) {
                    return i["default"].wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                (0, s.render)(t, u["default"]);
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var f = a;
            e["default"] = f
        }(), r
    }()
}, "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ispeakBber = t() : e.ispeakBber = t();