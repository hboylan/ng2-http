(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["RESTClient"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["RESTClient"] = factory(root["ng"]["core"], root["ng"]["common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(20));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(3);
	var rest_service_1 = __webpack_require__(20);
	/**
	 * Main Angular2 NgModule. Exports HttpModule for you.
	 *
	 * @class RESTModule
	 */
	var RESTModule = (function () {
	    function RESTModule() {
	    }
	    RESTModule = __decorate([
	        core_1.NgModule({
	            declarations: [],
	            imports: [http_1.HttpModule],
	            exports: [http_1.HttpModule],
	            providers: [rest_service_1.RESTClient]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RESTModule);
	    return RESTModule;
	}());
	exports.RESTModule = RESTModule;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.1.2
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(2), __webpack_require__(4), __webpack_require__(18)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Observable', '@angular/platform-browser'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.http = global.ng.http || {}),global.ng.core,global.Rx,global.ng.platformBrowser));
	}(this, function (exports,_angular_core,rxjs_Observable,_angular_platformBrowser) { 'use strict';
	
	    /**
	     * A backend for http that uses the `XMLHttpRequest` browser API.
	     *
	     * Take care not to evaluate this in non-browser contexts.
	     *
	     * @experimental
	     */
	    var BrowserXhr = (function () {
	        function BrowserXhr() {
	        }
	        BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
	        BrowserXhr.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BrowserXhr.ctorParameters = [];
	        return BrowserXhr;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = self;
	        }
	        else {
	            globalScope = global;
	        }
	    }
	    else {
	        globalScope = window;
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj != null;
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Supported http methods.
	     * @experimental
	     */
	    exports.RequestMethod;
	    (function (RequestMethod) {
	        RequestMethod[RequestMethod["Get"] = 0] = "Get";
	        RequestMethod[RequestMethod["Post"] = 1] = "Post";
	        RequestMethod[RequestMethod["Put"] = 2] = "Put";
	        RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
	        RequestMethod[RequestMethod["Options"] = 4] = "Options";
	        RequestMethod[RequestMethod["Head"] = 5] = "Head";
	        RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
	    })(exports.RequestMethod || (exports.RequestMethod = {}));
	    /**
	     * All possible states in which a connection can be, based on
	     * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
	     * additional "CANCELLED" state.
	     * @experimental
	     */
	    exports.ReadyState;
	    (function (ReadyState) {
	        ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
	        ReadyState[ReadyState["Open"] = 1] = "Open";
	        ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
	        ReadyState[ReadyState["Loading"] = 3] = "Loading";
	        ReadyState[ReadyState["Done"] = 4] = "Done";
	        ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
	    })(exports.ReadyState || (exports.ReadyState = {}));
	    /**
	     * Acceptable response types to be associated with a {@link Response}, based on
	     * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
	     * @experimental
	     */
	    exports.ResponseType;
	    (function (ResponseType) {
	        ResponseType[ResponseType["Basic"] = 0] = "Basic";
	        ResponseType[ResponseType["Cors"] = 1] = "Cors";
	        ResponseType[ResponseType["Default"] = 2] = "Default";
	        ResponseType[ResponseType["Error"] = 3] = "Error";
	        ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
	    })(exports.ResponseType || (exports.ResponseType = {}));
	    /**
	     * Supported content type to be automatically associated with a {@link Request}.
	     * @experimental
	     */
	    var ContentType;
	    (function (ContentType) {
	        ContentType[ContentType["NONE"] = 0] = "NONE";
	        ContentType[ContentType["JSON"] = 1] = "JSON";
	        ContentType[ContentType["FORM"] = 2] = "FORM";
	        ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
	        ContentType[ContentType["TEXT"] = 4] = "TEXT";
	        ContentType[ContentType["BLOB"] = 5] = "BLOB";
	        ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
	    })(ContentType || (ContentType = {}));
	    /**
	     * Define which buffer to use to store the response
	     * @experimental
	     */
	    exports.ResponseContentType;
	    (function (ResponseContentType) {
	        ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
	        ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
	        ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
	        ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
	    })(exports.ResponseContentType || (exports.ResponseContentType = {}));
	
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = new Array(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    var MapWrapper = (function () {
	        function MapWrapper() {
	        }
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map();
	            for (var prop in stringMap) {
	                result.set(prop, stringMap[prop]);
	            }
	            return result;
	        };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
	    }());
	
	    /**
	     * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
	     * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
	     *
	     * The only known difference between this `Headers` implementation and the spec is the
	     * lack of an `entries` method.
	     *
	     * ### Example
	     *
	     * ```
	     * import {Headers} from '@angular/http';
	     *
	     * var firstHeaders = new Headers();
	     * firstHeaders.append('Content-Type', 'image/jpeg');
	     * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
	     *
	     * // Create headers from Plain Old JavaScript Object
	     * var secondHeaders = new Headers({
	     *   'X-My-Custom-Header': 'Angular'
	     * });
	     * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
	     *
	     * var thirdHeaders = new Headers(secondHeaders);
	     * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
	     * ```
	     *
	     * @experimental
	     */
	    var Headers = (function () {
	        // TODO(vicb): any -> string|string[]
	        function Headers(headers) {
	            var _this = this;
	            /** @internal header names are lower case */
	            this._headers = new Map();
	            /** @internal map lower case names to actual names */
	            this._normalizedNames = new Map();
	            if (!headers) {
	                return;
	            }
	            if (headers instanceof Headers) {
	                headers._headers.forEach(function (values, name) {
	                    values.forEach(function (value) { return _this.append(name, value); });
	                });
	                return;
	            }
	            Object.keys(headers).forEach(function (name) {
	                var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
	                _this.delete(name);
	                values.forEach(function (value) { return _this.append(name, value); });
	            });
	        }
	        /**
	         * Returns a new Headers instance from the given DOMString of Response Headers
	         */
	        Headers.fromResponseHeaderString = function (headersString) {
	            var headers = new Headers();
	            headersString.split('\n').forEach(function (line) {
	                var index = line.indexOf(':');
	                if (index > 0) {
	                    var name_1 = line.slice(0, index);
	                    var value = line.slice(index + 1).trim();
	                    headers.set(name_1, value);
	                }
	            });
	            return headers;
	        };
	        /**
	         * Appends a header to existing list of header values for a given header name.
	         */
	        Headers.prototype.append = function (name, value) {
	            var values = this.getAll(name);
	            if (values === null) {
	                this.set(name, value);
	            }
	            else {
	                values.push(value);
	            }
	        };
	        /**
	         * Deletes all header values for the given name.
	         */
	        Headers.prototype.delete = function (name) {
	            var lcName = name.toLowerCase();
	            this._normalizedNames.delete(lcName);
	            this._headers.delete(lcName);
	        };
	        Headers.prototype.forEach = function (fn) {
	            var _this = this;
	            this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
	        };
	        /**
	         * Returns first header that matches given name.
	         */
	        Headers.prototype.get = function (name) {
	            var values = this.getAll(name);
	            if (values === null) {
	                return null;
	            }
	            return values.length > 0 ? values[0] : null;
	        };
	        /**
	         * Checks for existence of header by given name.
	         */
	        Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
	        /**
	         * Returns the names of the headers
	         */
	        Headers.prototype.keys = function () { return MapWrapper.values(this._normalizedNames); };
	        /**
	         * Sets or overrides header value for given name.
	         */
	        Headers.prototype.set = function (name, value) {
	            if (Array.isArray(value)) {
	                if (value.length) {
	                    this._headers.set(name.toLowerCase(), [value.join(',')]);
	                }
	            }
	            else {
	                this._headers.set(name.toLowerCase(), [value]);
	            }
	            this.mayBeSetNormalizedName(name);
	        };
	        /**
	         * Returns values of all headers.
	         */
	        Headers.prototype.values = function () { return MapWrapper.values(this._headers); };
	        /**
	         * Returns string of all headers.
	         */
	        // TODO(vicb): returns {[name: string]: string[]}
	        Headers.prototype.toJSON = function () {
	            var _this = this;
	            var serialized = {};
	            this._headers.forEach(function (values, name) {
	                var split = [];
	                values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
	                serialized[_this._normalizedNames.get(name)] = split;
	            });
	            return serialized;
	        };
	        /**
	         * Returns list of header values for a given name.
	         */
	        Headers.prototype.getAll = function (name) {
	            return this.has(name) ? this._headers.get(name.toLowerCase()) : null;
	        };
	        /**
	         * This method is not implemented.
	         */
	        Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
	        Headers.prototype.mayBeSetNormalizedName = function (name) {
	            var lcName = name.toLowerCase();
	            if (!this._normalizedNames.has(lcName)) {
	                this._normalizedNames.set(lcName, name);
	            }
	        };
	        return Headers;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Creates a response options object to be optionally provided when instantiating a
	     * {@link Response}.
	     *
	     * This class is based on the `ResponseInit` description in the [Fetch
	     * Spec](https://fetch.spec.whatwg.org/#responseinit).
	     *
	     * All values are null by default. Typical defaults can be found in the
	     * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
	     *
	     * This class may be used in tests to build {@link Response Responses} for
	     * mock responses (see {@link MockBackend}).
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
	     *
	     * ```typescript
	     * import {ResponseOptions, Response} from '@angular/http';
	     *
	     * var options = new ResponseOptions({
	     *   body: '{"name":"Jeff"}'
	     * });
	     * var res = new Response(options);
	     *
	     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	     * ```
	     *
	     * @experimental
	     */
	    var ResponseOptions = (function () {
	        function ResponseOptions(_a) {
	            var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
	            this.body = isPresent(body) ? body : null;
	            this.status = isPresent(status) ? status : null;
	            this.headers = isPresent(headers) ? headers : null;
	            this.statusText = isPresent(statusText) ? statusText : null;
	            this.type = isPresent(type) ? type : null;
	            this.url = isPresent(url) ? url : null;
	        }
	        /**
	         * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
	         * override
	         * existing values. This method will not change the values of the instance on which it is being
	         * called.
	         *
	         * This may be useful when sharing a base `ResponseOptions` object inside tests,
	         * where certain properties may change from test to test.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
	         *
	         * ```typescript
	         * import {ResponseOptions, Response} from '@angular/http';
	         *
	         * var options = new ResponseOptions({
	         *   body: {name: 'Jeff'}
	         * });
	         * var res = new Response(options.merge({
	         *   url: 'https://google.com'
	         * }));
	         * console.log('options.url:', options.url); // null
	         * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	         * console.log('res.url:', res.url); // https://google.com
	         * ```
	         */
	        ResponseOptions.prototype.merge = function (options) {
	            return new ResponseOptions({
	                body: isPresent(options) && isPresent(options.body) ? options.body : this.body,
	                status: isPresent(options) && isPresent(options.status) ? options.status : this.status,
	                headers: isPresent(options) && isPresent(options.headers) ? options.headers : this.headers,
	                statusText: isPresent(options) && isPresent(options.statusText) ? options.statusText :
	                    this.statusText,
	                type: isPresent(options) && isPresent(options.type) ? options.type : this.type,
	                url: isPresent(options) && isPresent(options.url) ? options.url : this.url,
	            });
	        };
	        return ResponseOptions;
	    }());
	    /**
	     * Subclass of {@link ResponseOptions}, with default values.
	     *
	     * Default values:
	     *  * status: 200
	     *  * headers: empty {@link Headers} object
	     *
	     * This class could be extended and bound to the {@link ResponseOptions} class
	     * when configuring an {@link Injector}, in order to override the default options
	     * used by {@link Http} to create {@link Response Responses}.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
	     *
	     * ```typescript
	     * import {provide} from '@angular/core';
	     * import {bootstrap} from '@angular/platform-browser/browser';
	     * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
	     * '@angular/http';
	     * import {App} from './myapp';
	     *
	     * class MyOptions extends BaseResponseOptions {
	     *   headers:Headers = new Headers({network: 'github'});
	     * }
	     *
	     * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
	     * ```
	     *
	     * The options could also be extended when manually creating a {@link Response}
	     * object.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
	     *
	     * ```
	     * import {BaseResponseOptions, Response} from '@angular/http';
	     *
	     * var options = new BaseResponseOptions();
	     * var res = new Response(options.merge({
	     *   body: 'Angular',
	     *   headers: new Headers({framework: 'angular'})
	     * }));
	     * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
	     * console.log('res.text():', res.text()); // Angular;
	     * ```
	     *
	     * @experimental
	     */
	    var BaseResponseOptions = (function (_super) {
	        __extends$1(BaseResponseOptions, _super);
	        function BaseResponseOptions() {
	            _super.call(this, { status: 200, statusText: 'Ok', type: exports.ResponseType.Default, headers: new Headers() });
	        }
	        BaseResponseOptions.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BaseResponseOptions.ctorParameters = [];
	        return BaseResponseOptions;
	    }(ResponseOptions));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Abstract class from which real backends are derived.
	     *
	     * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
	     * {@link Request}.
	     *
	     * @experimental
	     */
	    var ConnectionBackend = (function () {
	        function ConnectionBackend() {
	        }
	        return ConnectionBackend;
	    }());
	    /**
	     * Abstract class from which real connections are derived.
	     *
	     * @experimental
	     */
	    var Connection = (function () {
	        function Connection() {
	        }
	        return Connection;
	    }());
	    /**
	     * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
	     *
	     * @experimental
	     */
	    var XSRFStrategy = (function () {
	        function XSRFStrategy() {
	        }
	        return XSRFStrategy;
	    }());
	
	    function normalizeMethodName(method) {
	        if (typeof method !== 'string')
	            return method;
	        switch (method.toUpperCase()) {
	            case 'GET':
	                return exports.RequestMethod.Get;
	            case 'POST':
	                return exports.RequestMethod.Post;
	            case 'PUT':
	                return exports.RequestMethod.Put;
	            case 'DELETE':
	                return exports.RequestMethod.Delete;
	            case 'OPTIONS':
	                return exports.RequestMethod.Options;
	            case 'HEAD':
	                return exports.RequestMethod.Head;
	            case 'PATCH':
	                return exports.RequestMethod.Patch;
	        }
	        throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
	    }
	    var isSuccess = function (status) { return (status >= 200 && status < 300); };
	    function getResponseURL(xhr) {
	        if ('responseURL' in xhr) {
	            return xhr.responseURL;
	        }
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	            return xhr.getResponseHeader('X-Request-URL');
	        }
	        return;
	    }
	    function stringToArrayBuffer(input) {
	        var view = new Uint16Array(input.length);
	        for (var i = 0, strLen = input.length; i < strLen; i++) {
	            view[i] = input.charCodeAt(i);
	        }
	        return view.buffer;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function paramParser(rawParams) {
	        if (rawParams === void 0) { rawParams = ''; }
	        var map = new Map();
	        if (rawParams.length > 0) {
	            var params = rawParams.split('&');
	            params.forEach(function (param) {
	                var eqIdx = param.indexOf('=');
	                var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
	                var list = map.get(key) || [];
	                list.push(val);
	                map.set(key, list);
	            });
	        }
	        return map;
	    }
	    /**
	     * @experimental
	     **/
	    var QueryEncoder = (function () {
	        function QueryEncoder() {
	        }
	        QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
	        QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
	        return QueryEncoder;
	    }());
	    function standardEncoding(v) {
	        return encodeURIComponent(v)
	            .replace(/%40/gi, '@')
	            .replace(/%3A/gi, ':')
	            .replace(/%24/gi, '$')
	            .replace(/%2C/gi, ',')
	            .replace(/%3B/gi, ';')
	            .replace(/%2B/gi, '+')
	            .replace(/%3D/gi, '=')
	            .replace(/%3F/gi, '?')
	            .replace(/%2F/gi, '/');
	    }
	    /**
	     * Map-like representation of url search parameters, based on
	     * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
	     * with several extensions for merging URLSearchParams objects:
	     *   - setAll()
	     *   - appendAll()
	     *   - replaceAll()
	     *
	     * This class accepts an optional second parameter of ${@link QueryEncoder},
	     * which is used to serialize parameters before making a request. By default,
	     * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
	     * and then un-encodes certain characters that are allowed to be part of the query
	     * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
	     *
	     * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
	     *
	     * If the set of allowed query characters is not acceptable for a particular backend,
	     * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
	     *
	     * ```
	     * import {URLSearchParams, QueryEncoder} from '@angular/http';
	     * class MyQueryEncoder extends QueryEncoder {
	     *   encodeKey(k: string): string {
	     *     return myEncodingFunction(k);
	     *   }
	     *
	     *   encodeValue(v: string): string {
	     *     return myEncodingFunction(v);
	     *   }
	     * }
	     *
	     * let params = new URLSearchParams('', new MyQueryEncoder());
	     * ```
	     * @experimental
	     */
	    var URLSearchParams = (function () {
	        function URLSearchParams(rawParams, queryEncoder) {
	            if (rawParams === void 0) { rawParams = ''; }
	            if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
	            this.rawParams = rawParams;
	            this.queryEncoder = queryEncoder;
	            this.paramsMap = paramParser(rawParams);
	        }
	        URLSearchParams.prototype.clone = function () {
	            var clone = new URLSearchParams('', this.queryEncoder);
	            clone.appendAll(this);
	            return clone;
	        };
	        URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
	        URLSearchParams.prototype.get = function (param) {
	            var storedParam = this.paramsMap.get(param);
	            return Array.isArray(storedParam) ? storedParam[0] : null;
	        };
	        URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
	        URLSearchParams.prototype.set = function (param, val) {
	            if (val === void 0 || val === null) {
	                this.delete(param);
	                return;
	            }
	            var list = this.paramsMap.get(param) || [];
	            list.length = 0;
	            list.push(val);
	            this.paramsMap.set(param, list);
	        };
	        // A merge operation
	        // For each name-values pair in `searchParams`, perform `set(name, values[0])`
	        //
	        // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
	        //
	        // TODO(@caitp): document this better
	        URLSearchParams.prototype.setAll = function (searchParams) {
	            var _this = this;
	            searchParams.paramsMap.forEach(function (value, param) {
	                var list = _this.paramsMap.get(param) || [];
	                list.length = 0;
	                list.push(value[0]);
	                _this.paramsMap.set(param, list);
	            });
	        };
	        URLSearchParams.prototype.append = function (param, val) {
	            if (val === void 0 || val === null)
	                return;
	            var list = this.paramsMap.get(param) || [];
	            list.push(val);
	            this.paramsMap.set(param, list);
	        };
	        // A merge operation
	        // For each name-values pair in `searchParams`, perform `append(name, value)`
	        // for each value in `values`.
	        //
	        // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
	        //
	        // TODO(@caitp): document this better
	        URLSearchParams.prototype.appendAll = function (searchParams) {
	            var _this = this;
	            searchParams.paramsMap.forEach(function (value, param) {
	                var list = _this.paramsMap.get(param) || [];
	                for (var i = 0; i < value.length; ++i) {
	                    list.push(value[i]);
	                }
	                _this.paramsMap.set(param, list);
	            });
	        };
	        // A merge operation
	        // For each name-values pair in `searchParams`, perform `delete(name)`,
	        // followed by `set(name, values)`
	        //
	        // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
	        //
	        // TODO(@caitp): document this better
	        URLSearchParams.prototype.replaceAll = function (searchParams) {
	            var _this = this;
	            searchParams.paramsMap.forEach(function (value, param) {
	                var list = _this.paramsMap.get(param) || [];
	                list.length = 0;
	                for (var i = 0; i < value.length; ++i) {
	                    list.push(value[i]);
	                }
	                _this.paramsMap.set(param, list);
	            });
	        };
	        URLSearchParams.prototype.toString = function () {
	            var _this = this;
	            var paramsList = [];
	            this.paramsMap.forEach(function (values, k) {
	                values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
	            });
	            return paramsList.join('&');
	        };
	        URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
	        return URLSearchParams;
	    }());
	
	    /**
	     * HTTP request body used by both {@link Request} and {@link Response}
	     * https://fetch.spec.whatwg.org/#body
	     */
	    var Body = (function () {
	        function Body() {
	        }
	        /**
	         * Attempts to return body as parsed `JSON` object, or raises an exception.
	         */
	        Body.prototype.json = function () {
	            if (typeof this._body === 'string') {
	                return JSON.parse(this._body);
	            }
	            if (this._body instanceof ArrayBuffer) {
	                return JSON.parse(this.text());
	            }
	            return this._body;
	        };
	        /**
	         * Returns the body as a string, presuming `toString()` can be called on the response body.
	         */
	        Body.prototype.text = function () {
	            if (this._body instanceof URLSearchParams) {
	                return this._body.toString();
	            }
	            if (this._body instanceof ArrayBuffer) {
	                return String.fromCharCode.apply(null, new Uint16Array(this._body));
	            }
	            if (this._body === null) {
	                return '';
	            }
	            if (isJsObject(this._body)) {
	                return JSON.stringify(this._body, null, 2);
	            }
	            return this._body.toString();
	        };
	        /**
	         * Return the body as an ArrayBuffer
	         */
	        Body.prototype.arrayBuffer = function () {
	            if (this._body instanceof ArrayBuffer) {
	                return this._body;
	            }
	            return stringToArrayBuffer(this.text());
	        };
	        /**
	          * Returns the request's body as a Blob, assuming that body exists.
	          */
	        Body.prototype.blob = function () {
	            if (this._body instanceof Blob) {
	                return this._body;
	            }
	            if (this._body instanceof ArrayBuffer) {
	                return new Blob([this._body]);
	            }
	            throw new Error('The request body isn\'t either a blob or an array buffer');
	        };
	        return Body;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Creates `Response` instances from provided values.
	     *
	     * Though this object isn't
	     * usually instantiated by end-users, it is the primary object interacted with when it comes time to
	     * add data to a view.
	     *
	     * ### Example
	     *
	     * ```
	     * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
	     * ```
	     *
	     * The Response's interface is inspired by the Response constructor defined in the [Fetch
	     * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
	     * can be accessed many times. There are other differences in the implementation, but this is the
	     * most significant.
	     *
	     * @experimental
	     */
	    var Response = (function (_super) {
	        __extends$2(Response, _super);
	        function Response(responseOptions) {
	            _super.call(this);
	            this._body = responseOptions.body;
	            this.status = responseOptions.status;
	            this.ok = (this.status >= 200 && this.status <= 299);
	            this.statusText = responseOptions.statusText;
	            this.headers = responseOptions.headers;
	            this.type = responseOptions.type;
	            this.url = responseOptions.url;
	        }
	        Response.prototype.toString = function () {
	            return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
	        };
	        return Response;
	    }(Body));
	
	    var _nextRequestId = 0;
	    var JSONP_HOME = '__ng_jsonp__';
	    var _jsonpConnections = null;
	    function _getJsonpConnections() {
	        if (_jsonpConnections === null) {
	            _jsonpConnections = global$1[JSONP_HOME] = {};
	        }
	        return _jsonpConnections;
	    }
	    // Make sure not to evaluate this in a non-browser environment!
	    var BrowserJsonp = (function () {
	        function BrowserJsonp() {
	        }
	        // Construct a <script> element with the specified URL
	        BrowserJsonp.prototype.build = function (url) {
	            var node = document.createElement('script');
	            node.src = url;
	            return node;
	        };
	        BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
	        BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
	        BrowserJsonp.prototype.exposeConnection = function (id, connection) {
	            var connections = _getJsonpConnections();
	            connections[id] = connection;
	        };
	        BrowserJsonp.prototype.removeConnection = function (id) {
	            var connections = _getJsonpConnections();
	            connections[id] = null;
	        };
	        // Attach the <script> element to the DOM
	        BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
	        // Remove <script> element from the DOM
	        BrowserJsonp.prototype.cleanup = function (node) {
	            if (node.parentNode) {
	                node.parentNode.removeChild((node));
	            }
	        };
	        BrowserJsonp.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BrowserJsonp.ctorParameters = [];
	        return BrowserJsonp;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
	    var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
	    /**
	     * Abstract base class for an in-flight JSONP request.
	     *
	     * @experimental
	     */
	    var JSONPConnection = (function () {
	        function JSONPConnection() {
	        }
	        return JSONPConnection;
	    }());
	    var JSONPConnection_ = (function (_super) {
	        __extends(JSONPConnection_, _super);
	        function JSONPConnection_(req, _dom, baseResponseOptions) {
	            var _this = this;
	            _super.call(this);
	            this._dom = _dom;
	            this.baseResponseOptions = baseResponseOptions;
	            this._finished = false;
	            if (req.method !== exports.RequestMethod.Get) {
	                throw new TypeError(JSONP_ERR_WRONG_METHOD);
	            }
	            this.request = req;
	            this.response = new rxjs_Observable.Observable(function (responseObserver) {
	                _this.readyState = exports.ReadyState.Loading;
	                var id = _this._id = _dom.nextRequestID();
	                _dom.exposeConnection(id, _this);
	                // Workaround Dart
	                // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
	                var callback = _dom.requestCallback(_this._id);
	                var url = req.url;
	                if (url.indexOf('=JSONP_CALLBACK&') > -1) {
	                    url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
	                }
	                else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
	                    url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
	                }
	                var script = _this._script = _dom.build(url);
	                var onLoad = function (event) {
	                    if (_this.readyState === exports.ReadyState.Cancelled)
	                        return;
	                    _this.readyState = exports.ReadyState.Done;
	                    _dom.cleanup(script);
	                    if (!_this._finished) {
	                        var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: exports.ResponseType.Error, url: url });
	                        if (isPresent(baseResponseOptions)) {
	                            responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
	                        }
	                        responseObserver.error(new Response(responseOptions_1));
	                        return;
	                    }
	                    var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
	                    if (isPresent(_this.baseResponseOptions)) {
	                        responseOptions = _this.baseResponseOptions.merge(responseOptions);
	                    }
	                    responseObserver.next(new Response(responseOptions));
	                    responseObserver.complete();
	                };
	                var onError = function (error) {
	                    if (_this.readyState === exports.ReadyState.Cancelled)
	                        return;
	                    _this.readyState = exports.ReadyState.Done;
	                    _dom.cleanup(script);
	                    var responseOptions = new ResponseOptions({ body: error.message, type: exports.ResponseType.Error });
	                    if (isPresent(baseResponseOptions)) {
	                        responseOptions = baseResponseOptions.merge(responseOptions);
	                    }
	                    responseObserver.error(new Response(responseOptions));
	                };
	                script.addEventListener('load', onLoad);
	                script.addEventListener('error', onError);
	                _dom.send(script);
	                return function () {
	                    _this.readyState = exports.ReadyState.Cancelled;
	                    script.removeEventListener('load', onLoad);
	                    script.removeEventListener('error', onError);
	                    if (isPresent(script)) {
	                        _this._dom.cleanup(script);
	                    }
	                };
	            });
	        }
	        JSONPConnection_.prototype.finished = function (data) {
	            // Don't leak connections
	            this._finished = true;
	            this._dom.removeConnection(this._id);
	            if (this.readyState === exports.ReadyState.Cancelled)
	                return;
	            this._responseData = data;
	        };
	        return JSONPConnection_;
	    }(JSONPConnection));
	    /**
	     * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
	     *
	     * @experimental
	     */
	    var JSONPBackend = (function (_super) {
	        __extends(JSONPBackend, _super);
	        function JSONPBackend() {
	            _super.apply(this, arguments);
	        }
	        return JSONPBackend;
	    }(ConnectionBackend));
	    var JSONPBackend_ = (function (_super) {
	        __extends(JSONPBackend_, _super);
	        function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
	            _super.call(this);
	            this._browserJSONP = _browserJSONP;
	            this._baseResponseOptions = _baseResponseOptions;
	        }
	        JSONPBackend_.prototype.createConnection = function (request) {
	            return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
	        };
	        JSONPBackend_.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        JSONPBackend_.ctorParameters = [
	            { type: BrowserJsonp, },
	            { type: ResponseOptions, },
	        ];
	        return JSONPBackend_;
	    }(JSONPBackend));
	
	    var XSSI_PREFIX = /^\)\]\}',?\n/;
	    /**
	     * Creates connections using `XMLHttpRequest`. Given a fully-qualified
	     * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
	     * request.
	     *
	     * This class would typically not be created or interacted with directly inside applications, though
	     * the {@link MockConnection} may be interacted with in tests.
	     *
	     * @experimental
	     */
	    var XHRConnection = (function () {
	        function XHRConnection(req, browserXHR, baseResponseOptions) {
	            var _this = this;
	            this.request = req;
	            this.response = new rxjs_Observable.Observable(function (responseObserver) {
	                var _xhr = browserXHR.build();
	                _xhr.open(exports.RequestMethod[req.method].toUpperCase(), req.url);
	                if (isPresent(req.withCredentials)) {
	                    _xhr.withCredentials = req.withCredentials;
	                }
	                // load event handler
	                var onLoad = function () {
	                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	                    // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
	                    // by IE10)
	                    var body = _xhr.response === undefined ? _xhr.responseText : _xhr.response;
	                    // Implicitly strip a potential XSSI prefix.
	                    if (typeof body === 'string')
	                        body = body.replace(XSSI_PREFIX, '');
	                    var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
	                    var url = getResponseURL(_xhr);
	                    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	                    var status = _xhr.status === 1223 ? 204 : _xhr.status;
	                    // fix status code when it is 0 (0 status is undocumented).
	                    // Occurs when accessing file resources or on Android 4.1 stock browser
	                    // while retrieving files from application cache.
	                    if (status === 0) {
	                        status = body ? 200 : 0;
	                    }
	                    var statusText = _xhr.statusText || 'OK';
	                    var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
	                    if (isPresent(baseResponseOptions)) {
	                        responseOptions = baseResponseOptions.merge(responseOptions);
	                    }
	                    var response = new Response(responseOptions);
	                    response.ok = isSuccess(status);
	                    if (response.ok) {
	                        responseObserver.next(response);
	                        // TODO(gdi2290): defer complete if array buffer until done
	                        responseObserver.complete();
	                        return;
	                    }
	                    responseObserver.error(response);
	                };
	                // error event handler
	                var onError = function (err) {
	                    var responseOptions = new ResponseOptions({
	                        body: err,
	                        type: exports.ResponseType.Error,
	                        status: _xhr.status,
	                        statusText: _xhr.statusText,
	                    });
	                    if (isPresent(baseResponseOptions)) {
	                        responseOptions = baseResponseOptions.merge(responseOptions);
	                    }
	                    responseObserver.error(new Response(responseOptions));
	                };
	                _this.setDetectedContentType(req, _xhr);
	                if (isPresent(req.headers)) {
	                    req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
	                }
	                // Select the correct buffer type to store the response
	                if (isPresent(req.responseType) && isPresent(_xhr.responseType)) {
	                    switch (req.responseType) {
	                        case exports.ResponseContentType.ArrayBuffer:
	                            _xhr.responseType = 'arraybuffer';
	                            break;
	                        case exports.ResponseContentType.Json:
	                            _xhr.responseType = 'json';
	                            break;
	                        case exports.ResponseContentType.Text:
	                            _xhr.responseType = 'text';
	                            break;
	                        case exports.ResponseContentType.Blob:
	                            _xhr.responseType = 'blob';
	                            break;
	                        default:
	                            throw new Error('The selected responseType is not supported');
	                    }
	                }
	                _xhr.addEventListener('load', onLoad);
	                _xhr.addEventListener('error', onError);
	                _xhr.send(_this.request.getBody());
	                return function () {
	                    _xhr.removeEventListener('load', onLoad);
	                    _xhr.removeEventListener('error', onError);
	                    _xhr.abort();
	                };
	            });
	        }
	        XHRConnection.prototype.setDetectedContentType = function (req /** TODO #9100 */, _xhr /** TODO #9100 */) {
	            // Skip if a custom Content-Type header is provided
	            if (isPresent(req.headers) && isPresent(req.headers.get('Content-Type'))) {
	                return;
	            }
	            // Set the detected content type
	            switch (req.contentType) {
	                case ContentType.NONE:
	                    break;
	                case ContentType.JSON:
	                    _xhr.setRequestHeader('content-type', 'application/json');
	                    break;
	                case ContentType.FORM:
	                    _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	                    break;
	                case ContentType.TEXT:
	                    _xhr.setRequestHeader('content-type', 'text/plain');
	                    break;
	                case ContentType.BLOB:
	                    var blob = req.blob();
	                    if (blob.type) {
	                        _xhr.setRequestHeader('content-type', blob.type);
	                    }
	                    break;
	            }
	        };
	        return XHRConnection;
	    }());
	    /**
	     * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
	     * using a cookie. See {@link https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)}
	     * for more information on XSRF.
	     *
	     * Applications can configure custom cookie and header names by binding an instance of this class
	     * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
	     * details.
	     *
	     * @experimental
	     */
	    var CookieXSRFStrategy = (function () {
	        function CookieXSRFStrategy(_cookieName, _headerName) {
	            if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
	            if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
	            this._cookieName = _cookieName;
	            this._headerName = _headerName;
	        }
	        CookieXSRFStrategy.prototype.configureRequest = function (req) {
	            var xsrfToken = _angular_platformBrowser.__platform_browser_private__.getDOM().getCookie(this._cookieName);
	            if (xsrfToken) {
	                req.headers.set(this._headerName, xsrfToken);
	            }
	        };
	        return CookieXSRFStrategy;
	    }());
	    /**
	     * Creates {@link XHRConnection} instances.
	     *
	     * This class would typically not be used by end users, but could be
	     * overridden if a different backend implementation should be used,
	     * such as in a node backend.
	     *
	     * ### Example
	     *
	     * ```
	     * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
	     * @Component({
	     *   viewProviders: [
	     *     HTTP_PROVIDERS,
	     *     {provide: Http, useFactory: (backend, options) => {
	     *       return new Http(backend, options);
	     *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
	     * })
	     * class MyComponent {
	     *   constructor(http:Http) {
	     *     http.request('people.json').subscribe(res => this.people = res.json());
	     *   }
	     * }
	     * ```
	     * @experimental
	     */
	    var XHRBackend = (function () {
	        function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
	            this._browserXHR = _browserXHR;
	            this._baseResponseOptions = _baseResponseOptions;
	            this._xsrfStrategy = _xsrfStrategy;
	        }
	        XHRBackend.prototype.createConnection = function (request) {
	            this._xsrfStrategy.configureRequest(request);
	            return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
	        };
	        XHRBackend.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        XHRBackend.ctorParameters = [
	            { type: BrowserXhr, },
	            { type: ResponseOptions, },
	            { type: XSRFStrategy, },
	        ];
	        return XHRBackend;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Creates a request options object to be optionally provided when instantiating a
	     * {@link Request}.
	     *
	     * This class is based on the `RequestInit` description in the [Fetch
	     * Spec](https://fetch.spec.whatwg.org/#requestinit).
	     *
	     * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
	     * class, which sub-classes `RequestOptions`.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
	     *
	     * ```typescript
	     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
	     *
	     * var options = new RequestOptions({
	     *   method: RequestMethod.Post,
	     *   url: 'https://google.com'
	     * });
	     * var req = new Request(options);
	     * console.log('req.method:', RequestMethod[req.method]); // Post
	     * console.log('options.url:', options.url); // https://google.com
	     * ```
	     *
	     * @experimental
	     */
	    var RequestOptions = (function () {
	        function RequestOptions(_a) {
	            var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search, withCredentials = _b.withCredentials, responseType = _b.responseType;
	            this.method = isPresent(method) ? normalizeMethodName(method) : null;
	            this.headers = isPresent(headers) ? headers : null;
	            this.body = isPresent(body) ? body : null;
	            this.url = isPresent(url) ? url : null;
	            this.search = isPresent(search) ?
	                (typeof search === 'string' ? new URLSearchParams((search)) :
	                    (search)) :
	                null;
	            this.withCredentials = isPresent(withCredentials) ? withCredentials : null;
	            this.responseType = isPresent(responseType) ? responseType : null;
	        }
	        /**
	         * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
	         * existing values. This method will not change the values of the instance on which it is being
	         * called.
	         *
	         * Note that `headers` and `search` will override existing values completely if present in
	         * the `options` object. If these values should be merged, it should be done prior to calling
	         * `merge` on the `RequestOptions` instance.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
	         *
	         * ```typescript
	         * import {RequestOptions, Request, RequestMethod} from '@angular/http';
	         *
	         * var options = new RequestOptions({
	         *   method: RequestMethod.Post
	         * });
	         * var req = new Request(options.merge({
	         *   url: 'https://google.com'
	         * }));
	         * console.log('req.method:', RequestMethod[req.method]); // Post
	         * console.log('options.url:', options.url); // null
	         * console.log('req.url:', req.url); // https://google.com
	         * ```
	         */
	        RequestOptions.prototype.merge = function (options) {
	            return new RequestOptions({
	                method: options && isPresent(options.method) ? options.method : this.method,
	                headers: options && isPresent(options.headers) ? options.headers : this.headers,
	                body: options && isPresent(options.body) ? options.body : this.body,
	                url: options && isPresent(options.url) ? options.url : this.url,
	                search: options && isPresent(options.search) ?
	                    (typeof options.search === 'string' ? new URLSearchParams(options.search) :
	                        (options.search).clone()) :
	                    this.search,
	                withCredentials: options && isPresent(options.withCredentials) ? options.withCredentials :
	                    this.withCredentials,
	                responseType: options && isPresent(options.responseType) ? options.responseType :
	                    this.responseType
	            });
	        };
	        return RequestOptions;
	    }());
	    /**
	     * Subclass of {@link RequestOptions}, with default values.
	     *
	     * Default values:
	     *  * method: {@link RequestMethod RequestMethod.Get}
	     *  * headers: empty {@link Headers} object
	     *
	     * This class could be extended and bound to the {@link RequestOptions} class
	     * when configuring an {@link Injector}, in order to override the default options
	     * used by {@link Http} to create and send {@link Request Requests}.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
	     *
	     * ```typescript
	     * import {provide} from '@angular/core';
	     * import {bootstrap} from '@angular/platform-browser/browser';
	     * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from '@angular/http';
	     * import {App} from './myapp';
	     *
	     * class MyOptions extends BaseRequestOptions {
	     *   search: string = 'coreTeam=true';
	     * }
	     *
	     * bootstrap(App, [HTTP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}]);
	     * ```
	     *
	     * The options could also be extended when manually creating a {@link Request}
	     * object.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
	     *
	     * ```
	     * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
	     *
	     * var options = new BaseRequestOptions();
	     * var req = new Request(options.merge({
	     *   method: RequestMethod.Post,
	     *   url: 'https://google.com'
	     * }));
	     * console.log('req.method:', RequestMethod[req.method]); // Post
	     * console.log('options.url:', options.url); // null
	     * console.log('req.url:', req.url); // https://google.com
	     * ```
	     *
	     * @experimental
	     */
	    var BaseRequestOptions = (function (_super) {
	        __extends$3(BaseRequestOptions, _super);
	        function BaseRequestOptions() {
	            _super.call(this, { method: exports.RequestMethod.Get, headers: new Headers() });
	        }
	        BaseRequestOptions.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BaseRequestOptions.ctorParameters = [];
	        return BaseRequestOptions;
	    }(RequestOptions));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    // TODO(jeffbcross): properly implement body accessors
	    /**
	     * Creates `Request` instances from provided values.
	     *
	     * The Request's interface is inspired by the Request constructor defined in the [Fetch
	     * Spec](https://fetch.spec.whatwg.org/#request-class),
	     * but is considered a static value whose body can be accessed many times. There are other
	     * differences in the implementation, but this is the most significant.
	     *
	     * `Request` instances are typically created by higher-level classes, like {@link Http} and
	     * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
	     * One such example is when creating services that wrap higher-level services, like {@link Http},
	     * where it may be useful to generate a `Request` with arbitrary headers and search params.
	     *
	     * ```typescript
	     * import {Injectable, Injector} from '@angular/core';
	     * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
	     *
	     * @Injectable()
	     * class AutoAuthenticator {
	     *   constructor(public http:Http) {}
	     *   request(url:string) {
	     *     return this.http.request(new Request({
	     *       method: RequestMethod.Get,
	     *       url: url,
	     *       search: 'password=123'
	     *     }));
	     *   }
	     * }
	     *
	     * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
	     * var authenticator = injector.get(AutoAuthenticator);
	     * authenticator.request('people.json').subscribe(res => {
	     *   //URL should have included '?password=123'
	     *   console.log('people', res.json());
	     * });
	     * ```
	     *
	     * @experimental
	     */
	    var Request = (function (_super) {
	        __extends$5(Request, _super);
	        function Request(requestOptions) {
	            _super.call(this);
	            // TODO: assert that url is present
	            var url = requestOptions.url;
	            this.url = requestOptions.url;
	            if (isPresent(requestOptions.search)) {
	                var search = requestOptions.search.toString();
	                if (search.length > 0) {
	                    var prefix = '?';
	                    if (this.url.indexOf('?') != -1) {
	                        prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
	                    }
	                    // TODO: just delete search-query-looking string in url?
	                    this.url = url + prefix + search;
	                }
	            }
	            this._body = requestOptions.body;
	            this.method = normalizeMethodName(requestOptions.method);
	            // TODO(jeffbcross): implement behavior
	            // Defaults to 'omit', consistent with browser
	            // TODO(jeffbcross): implement behavior
	            this.headers = new Headers(requestOptions.headers);
	            this.contentType = this.detectContentType();
	            this.withCredentials = requestOptions.withCredentials;
	            this.responseType = requestOptions.responseType;
	        }
	        /**
	         * Returns the content type enum based on header options.
	         */
	        Request.prototype.detectContentType = function () {
	            switch (this.headers.get('content-type')) {
	                case 'application/json':
	                    return ContentType.JSON;
	                case 'application/x-www-form-urlencoded':
	                    return ContentType.FORM;
	                case 'multipart/form-data':
	                    return ContentType.FORM_DATA;
	                case 'text/plain':
	                case 'text/html':
	                    return ContentType.TEXT;
	                case 'application/octet-stream':
	                    return ContentType.BLOB;
	                default:
	                    return this.detectContentTypeFromBody();
	            }
	        };
	        /**
	         * Returns the content type of request's body based on its type.
	         */
	        Request.prototype.detectContentTypeFromBody = function () {
	            if (this._body == null) {
	                return ContentType.NONE;
	            }
	            else if (this._body instanceof URLSearchParams) {
	                return ContentType.FORM;
	            }
	            else if (this._body instanceof FormData) {
	                return ContentType.FORM_DATA;
	            }
	            else if (this._body instanceof Blob$1) {
	                return ContentType.BLOB;
	            }
	            else if (this._body instanceof ArrayBuffer$1) {
	                return ContentType.ARRAY_BUFFER;
	            }
	            else if (this._body && typeof this._body == 'object') {
	                return ContentType.JSON;
	            }
	            else {
	                return ContentType.TEXT;
	            }
	        };
	        /**
	         * Returns the request's body according to its type. If body is undefined, return
	         * null.
	         */
	        Request.prototype.getBody = function () {
	            switch (this.contentType) {
	                case ContentType.JSON:
	                    return this.text();
	                case ContentType.FORM:
	                    return this.text();
	                case ContentType.FORM_DATA:
	                    return this._body;
	                case ContentType.TEXT:
	                    return this.text();
	                case ContentType.BLOB:
	                    return this.blob();
	                case ContentType.ARRAY_BUFFER:
	                    return this.arrayBuffer();
	                default:
	                    return null;
	            }
	        };
	        return Request;
	    }(Body));
	    var noop = function () { };
	    var w = typeof window == 'object' ? window : noop;
	    var FormData = w['FormData'] || noop;
	    var Blob$1 = w['Blob'] || noop;
	    var ArrayBuffer$1 = w['ArrayBuffer'] || noop;
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function httpRequest(backend, request) {
	        return backend.createConnection(request).response;
	    }
	    function mergeOptions(defaultOpts, providedOpts, method, url) {
	        var newOptions = defaultOpts;
	        if (isPresent(providedOpts)) {
	            // Hack so Dart can used named parameters
	            return newOptions.merge(new RequestOptions({
	                method: providedOpts.method || method,
	                url: providedOpts.url || url,
	                search: providedOpts.search,
	                headers: providedOpts.headers,
	                body: providedOpts.body,
	                withCredentials: providedOpts.withCredentials,
	                responseType: providedOpts.responseType
	            }));
	        }
	        if (isPresent(method)) {
	            return newOptions.merge(new RequestOptions({ method: method, url: url }));
	        }
	        else {
	            return newOptions.merge(new RequestOptions({ url: url }));
	        }
	    }
	    /**
	     * Performs http requests using `XMLHttpRequest` as the default backend.
	     *
	     * `Http` is available as an injectable class, with methods to perform http requests. Calling
	     * `request` returns an `Observable` which will emit a single {@link Response} when a
	     * response is received.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * import {Http, HTTP_PROVIDERS} from '@angular/http';
	     * import 'rxjs/add/operator/map'
	     * @Component({
	     *   selector: 'http-app',
	     *   viewProviders: [HTTP_PROVIDERS],
	     *   templateUrl: 'people.html'
	     * })
	     * class PeopleComponent {
	     *   constructor(http: Http) {
	     *     http.get('people.json')
	     *       // Call map on the response observable to get the parsed people object
	     *       .map(res => res.json())
	     *       // Subscribe to the observable to get the parsed people object and attach it to the
	     *       // component
	     *       .subscribe(people => this.people = people);
	     *   }
	     * }
	     * ```
	     *
	     *
	     * ### Example
	     *
	     * ```
	     * http.get('people.json').subscribe((res:Response) => this.people = res.json());
	     * ```
	     *
	     * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
	     * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
	     * the {@link XHRBackend} provider, as in the following example:
	     *
	     * ### Example
	     *
	     * ```typescript
	     * import {BaseRequestOptions, Http} from '@angular/http';
	     * import {MockBackend} from '@angular/http/testing';
	     * var injector = Injector.resolveAndCreate([
	     *   BaseRequestOptions,
	     *   MockBackend,
	     *   {provide: Http, useFactory:
	     *       function(backend, defaultOptions) {
	     *         return new Http(backend, defaultOptions);
	     *       },
	     *       deps: [MockBackend, BaseRequestOptions]}
	     * ]);
	     * var http = injector.get(Http);
	     * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
	     * ```
	     *
	     * @experimental
	     */
	    var Http = (function () {
	        function Http(_backend, _defaultOptions) {
	            this._backend = _backend;
	            this._defaultOptions = _defaultOptions;
	        }
	        /**
	         * Performs any type of http request. First argument is required, and can either be a url or
	         * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	         * object can be provided as the 2nd argument. The options object will be merged with the values
	         * of {@link BaseRequestOptions} before performing the request.
	         */
	        Http.prototype.request = function (url, options) {
	            var responseObservable;
	            if (typeof url === 'string') {
	                responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Get, url)));
	            }
	            else if (url instanceof Request) {
	                responseObservable = httpRequest(this._backend, url);
	            }
	            else {
	                throw new Error('First argument must be a url string or Request instance.');
	            }
	            return responseObservable;
	        };
	        /**
	         * Performs a request with `get` http method.
	         */
	        Http.prototype.get = function (url, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Get, url)));
	        };
	        /**
	         * Performs a request with `post` http method.
	         */
	        Http.prototype.post = function (url, body, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, exports.RequestMethod.Post, url)));
	        };
	        /**
	         * Performs a request with `put` http method.
	         */
	        Http.prototype.put = function (url, body, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, exports.RequestMethod.Put, url)));
	        };
	        /**
	         * Performs a request with `delete` http method.
	         */
	        Http.prototype.delete = function (url, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Delete, url)));
	        };
	        /**
	         * Performs a request with `patch` http method.
	         */
	        Http.prototype.patch = function (url, body, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, exports.RequestMethod.Patch, url)));
	        };
	        /**
	         * Performs a request with `head` http method.
	         */
	        Http.prototype.head = function (url, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Head, url)));
	        };
	        /**
	         * Performs a request with `options` http method.
	         */
	        Http.prototype.options = function (url, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Options, url)));
	        };
	        Http.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        Http.ctorParameters = [
	            { type: ConnectionBackend, },
	            { type: RequestOptions, },
	        ];
	        return Http;
	    }());
	    /**
	     * @experimental
	     */
	    var Jsonp = (function (_super) {
	        __extends$4(Jsonp, _super);
	        function Jsonp(backend, defaultOptions) {
	            _super.call(this, backend, defaultOptions);
	        }
	        /**
	         * Performs any type of http request. First argument is required, and can either be a url or
	         * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	         * object can be provided as the 2nd argument. The options object will be merged with the values
	         * of {@link BaseRequestOptions} before performing the request.
	         *
	         * @security Regular XHR is the safest alternative to JSONP for most applications, and is
	         * supported by all current browsers. Because JSONP creates a `<script>` element with
	         * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
	         * source could expose your application to XSS risks. Data exposed by JSONP may also be
	         * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
	         * future security issues (e.g. content sniffing).  For more detail, see the
	         * [Security Guide](http://g.co/ng/security).
	         */
	        Jsonp.prototype.request = function (url, options) {
	            var responseObservable;
	            if (typeof url === 'string') {
	                url =
	                    new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Get, url));
	            }
	            if (url instanceof Request) {
	                if (url.method !== exports.RequestMethod.Get) {
	                    throw new Error('JSONP requests must use GET request method.');
	                }
	                responseObservable = httpRequest(this._backend, url);
	            }
	            else {
	                throw new Error('First argument must be a url string or Request instance.');
	            }
	            return responseObservable;
	        };
	        Jsonp.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        Jsonp.ctorParameters = [
	            { type: ConnectionBackend, },
	            { type: RequestOptions, },
	        ];
	        return Jsonp;
	    }(Http));
	
	    function _createDefaultCookieXSRFStrategy() {
	        return new CookieXSRFStrategy();
	    }
	    function httpFactory(xhrBackend, requestOptions) {
	        return new Http(xhrBackend, requestOptions);
	    }
	    function jsonpFactory(jsonpBackend, requestOptions) {
	        return new Jsonp(jsonpBackend, requestOptions);
	    }
	    /**
	     * The module that includes http's providers
	     *
	     * @experimental
	     */
	    var HttpModule = (function () {
	        function HttpModule() {
	        }
	        HttpModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        providers: [
	                            // TODO(pascal): use factory type annotations once supported in DI
	                            // issue: https://github.com/angular/angular/issues/3183
	                            { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
	                            BrowserXhr,
	                            { provide: RequestOptions, useClass: BaseRequestOptions },
	                            { provide: ResponseOptions, useClass: BaseResponseOptions },
	                            XHRBackend,
	                            { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
	                        ],
	                    },] },
	        ];
	        /** @nocollapse */
	        HttpModule.ctorParameters = [];
	        return HttpModule;
	    }());
	    /**
	     * The module that includes jsonp's providers
	     *
	     * @experimental
	     */
	    var JsonpModule = (function () {
	        function JsonpModule() {
	        }
	        JsonpModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        providers: [
	                            // TODO(pascal): use factory type annotations once supported in DI
	                            // issue: https://github.com/angular/angular/issues/3183
	                            { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
	                            BrowserJsonp,
	                            { provide: RequestOptions, useClass: BaseRequestOptions },
	                            { provide: ResponseOptions, useClass: BaseResponseOptions },
	                            { provide: JSONPBackend, useClass: JSONPBackend_ },
	                        ],
	                    },] },
	        ];
	        /** @nocollapse */
	        JsonpModule.ctorParameters = [];
	        return JsonpModule;
	    }());
	
	    exports.BrowserXhr = BrowserXhr;
	    exports.JSONPBackend = JSONPBackend;
	    exports.JSONPConnection = JSONPConnection;
	    exports.CookieXSRFStrategy = CookieXSRFStrategy;
	    exports.XHRBackend = XHRBackend;
	    exports.XHRConnection = XHRConnection;
	    exports.BaseRequestOptions = BaseRequestOptions;
	    exports.RequestOptions = RequestOptions;
	    exports.BaseResponseOptions = BaseResponseOptions;
	    exports.ResponseOptions = ResponseOptions;
	    exports.Headers = Headers;
	    exports.Http = Http;
	    exports.Jsonp = Jsonp;
	    exports.HttpModule = HttpModule;
	    exports.JsonpModule = JsonpModule;
	    exports.Connection = Connection;
	    exports.ConnectionBackend = ConnectionBackend;
	    exports.XSRFStrategy = XSRFStrategy;
	    exports.Request = Request;
	    exports.Response = Response;
	    exports.QueryEncoder = QueryEncoder;
	    exports.URLSearchParams = URLSearchParams;
	
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(5);
	var toSubscriber_1 = __webpack_require__(6);
	var observable_1 = __webpack_require__(17);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     * @method subscribe
	     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @return {ISubscription} a subscription reference to the registered handlers
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            operator.call(sink, this);
	        }
	        else {
	            sink.add(this._subscribe(sink));
	        }
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.$$observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(7);
	var rxSubscriber_1 = __webpack_require__(16);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber_1.Subscriber();
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(8);
	var Subscription_1 = __webpack_require__(9);
	var Observer_1 = __webpack_require__(15);
	var rxSubscriber_1 = __webpack_require__(16);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(10);
	var isObject_1 = __webpack_require__(11);
	var isFunction_1 = __webpack_require__(8);
	var tryCatch_1 = __webpack_require__(12);
	var errorObject_1 = __webpack_require__(13);
	var UnsubscriptionError_1 = __webpack_require__(14);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.closed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.closed) {
	            return;
	        }
	        this.closed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `closed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === Subscription.EMPTY)) {
	            return Subscription.EMPTY;
	        }
	        if (teardown === this) {
	            return this;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.closed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.closed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.closed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(13);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        var err = Error.call(this, errors ?
	            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
	        this.name = err.name = 'UnsubscriptionError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    closed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(5);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(5);
	function getSymbolObservable(context) {
	    var $$observable;
	    var Symbol = context.Symbol;
	    if (typeof Symbol === 'function') {
	        if (Symbol.observable) {
	            $$observable = Symbol.observable;
	        }
	        else {
	            $$observable = Symbol('observable');
	            Symbol.observable = $$observable;
	        }
	    }
	    else {
	        $$observable = '@@observable';
	    }
	    return $$observable;
	}
	exports.getSymbolObservable = getSymbolObservable;
	exports.$$observable = getSymbolObservable(root_1.root);
	//# sourceMappingURL=observable.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.1.2
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(19), __webpack_require__(2)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.platformBrowser = global.ng.platformBrowser || {}),global.ng.common,global.ng.core));
	}(this, function (exports,_angular_common,_angular_core) { 'use strict';
	
	    var DebugDomRootRenderer = _angular_core.__core_private__.DebugDomRootRenderer;
	    var NoOpAnimationPlayer = _angular_core.__core_private__.NoOpAnimationPlayer;
	
	    var _NoOpAnimationDriver = (function () {
	        function _NoOpAnimationDriver() {
	        }
	        _NoOpAnimationDriver.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
	            return new NoOpAnimationPlayer();
	        };
	        return _NoOpAnimationDriver;
	    }());
	    /**
	     * @experimental
	     */
	    var AnimationDriver = (function () {
	        function AnimationDriver() {
	        }
	        AnimationDriver.NOOP = new _NoOpAnimationDriver();
	        return AnimationDriver;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = self;
	        }
	        else {
	            globalScope = global;
	        }
	    }
	    else {
	        globalScope = window;
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj != null;
	    }
	    function isBlank(obj) {
	        return obj == null;
	    }
	    function stringify(token) {
	        if (typeof token === 'string') {
	            return token;
	        }
	        if (token === undefined || token === null) {
	            return '' + token;
	        }
	        if (token.overriddenName) {
	            return token.overriddenName;
	        }
	        if (token.name) {
	            return token.name;
	        }
	        var res = token.toString();
	        var newLineIndex = res.indexOf('\n');
	        return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
	    }
	    function setValueOnPath(global, path, value) {
	        var parts = path.split('.');
	        var obj = global;
	        while (parts.length > 1) {
	            var name = parts.shift();
	            if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	                obj = obj[name];
	            }
	            else {
	                obj = obj[name] = {};
	            }
	        }
	        if (obj === undefined || obj === null) {
	            obj = {};
	        }
	        obj[parts.shift()] = value;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var CAMEL_CASE_REGEXP = /([A-Z])/g;
	    var DASH_CASE_REGEXP = /-([a-z])/g;
	    function camelCaseToDashCase(input) {
	        return input.replace(CAMEL_CASE_REGEXP, function () {
	            var m = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                m[_i - 0] = arguments[_i];
	            }
	            return '-' + m[1].toLowerCase();
	        });
	    }
	    function dashCaseToCamelCase(input) {
	        return input.replace(DASH_CASE_REGEXP, function () {
	            var m = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                m[_i - 0] = arguments[_i];
	            }
	            return m[1].toUpperCase();
	        });
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var _DOM = null;
	    function getDOM() {
	        return _DOM;
	    }
	    function setRootDomAdapter(adapter) {
	        if (!_DOM) {
	            _DOM = adapter;
	        }
	    }
	    /* tslint:disable:requireParameterType */
	    /**
	     * Provides DOM operations in an environment-agnostic way.
	     *
	     * @security Tread carefully! Interacting with the DOM directly is dangerous and
	     * can introduce XSS risks.
	     */
	    var DomAdapter = (function () {
	        function DomAdapter() {
	            this.resourceLoaderType = null;
	        }
	        Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
	            /**
	             * Maps attribute names to their corresponding property names for cases
	             * where attribute name doesn't match property name.
	             */
	            get: function () { return this._attrToPropMap; },
	            set: function (value) { this._attrToPropMap = value; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        ;
	        return DomAdapter;
	    }());
	
	    var WebAnimationsPlayer = (function () {
	        function WebAnimationsPlayer(element, keyframes, options) {
	            this.element = element;
	            this.keyframes = keyframes;
	            this.options = options;
	            this._onDoneFns = [];
	            this._onStartFns = [];
	            this._finished = false;
	            this._initialized = false;
	            this._started = false;
	            this.parentPlayer = null;
	            this._duration = options['duration'];
	        }
	        WebAnimationsPlayer.prototype._onFinish = function () {
	            if (!this._finished) {
	                this._finished = true;
	                if (!isPresent(this.parentPlayer)) {
	                    this.destroy();
	                }
	                this._onDoneFns.forEach(function (fn) { return fn(); });
	                this._onDoneFns = [];
	            }
	        };
	        WebAnimationsPlayer.prototype.init = function () {
	            var _this = this;
	            if (this._initialized)
	                return;
	            this._initialized = true;
	            var keyframes = this.keyframes.map(function (styles) {
	                var formattedKeyframe = {};
	                Object.keys(styles).forEach(function (prop) {
	                    var value = styles[prop];
	                    formattedKeyframe[prop] = value == _angular_core.AUTO_STYLE ? _computeStyle(_this.element, prop) : value;
	                });
	                return formattedKeyframe;
	            });
	            this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
	            // this is required so that the player doesn't start to animate right away
	            this.reset();
	            this._player.onfinish = function () { return _this._onFinish(); };
	        };
	        /** @internal */
	        WebAnimationsPlayer.prototype._triggerWebAnimation = function (element, keyframes, options) {
	            return element.animate(keyframes, options);
	        };
	        WebAnimationsPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	        WebAnimationsPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	        WebAnimationsPlayer.prototype.play = function () {
	            this.init();
	            if (!this.hasStarted()) {
	                this._onStartFns.forEach(function (fn) { return fn(); });
	                this._onStartFns = [];
	                this._started = true;
	            }
	            this._player.play();
	        };
	        WebAnimationsPlayer.prototype.pause = function () {
	            this.init();
	            this._player.pause();
	        };
	        WebAnimationsPlayer.prototype.finish = function () {
	            this.init();
	            this._onFinish();
	            this._player.finish();
	        };
	        WebAnimationsPlayer.prototype.reset = function () { this._player.cancel(); };
	        WebAnimationsPlayer.prototype.restart = function () {
	            this.reset();
	            this.play();
	        };
	        WebAnimationsPlayer.prototype.hasStarted = function () { return this._started; };
	        WebAnimationsPlayer.prototype.destroy = function () {
	            this.reset();
	            this._onFinish();
	        };
	        Object.defineProperty(WebAnimationsPlayer.prototype, "totalTime", {
	            get: function () { return this._duration; },
	            enumerable: true,
	            configurable: true
	        });
	        WebAnimationsPlayer.prototype.setPosition = function (p) { this._player.currentTime = p * this.totalTime; };
	        WebAnimationsPlayer.prototype.getPosition = function () { return this._player.currentTime / this.totalTime; };
	        return WebAnimationsPlayer;
	    }());
	    function _computeStyle(element, prop) {
	        return getDOM().getComputedStyle(element)[prop];
	    }
	
	    var WebAnimationsDriver = (function () {
	        function WebAnimationsDriver() {
	        }
	        WebAnimationsDriver.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
	            var formattedSteps = [];
	            var startingStyleLookup = {};
	            if (isPresent(startingStyles) && startingStyles.styles.length > 0) {
	                startingStyleLookup = _populateStyles(element, startingStyles, {});
	                startingStyleLookup['offset'] = 0;
	                formattedSteps.push(startingStyleLookup);
	            }
	            keyframes.forEach(function (keyframe) {
	                var data = _populateStyles(element, keyframe.styles, startingStyleLookup);
	                data['offset'] = keyframe.offset;
	                formattedSteps.push(data);
	            });
	            // this is a special case when only styles are applied as an
	            // animation. When this occurs we want to animate from start to
	            // end with the same values. Removing the offset and having only
	            // start/end values is suitable enough for the web-animations API
	            if (formattedSteps.length == 1) {
	                var start = formattedSteps[0];
	                start['offset'] = null;
	                formattedSteps = [start, start];
	            }
	            var playerOptions = {
	                'duration': duration,
	                'delay': delay,
	                'fill': 'both' // we use `both` because it allows for styling at 0% to work with `delay`
	            };
	            // we check for this to avoid having a null|undefined value be present
	            // for the easing (which results in an error for certain browsers #9752)
	            if (easing) {
	                playerOptions['easing'] = easing;
	            }
	            return new WebAnimationsPlayer(element, formattedSteps, playerOptions);
	        };
	        return WebAnimationsDriver;
	    }());
	    function _populateStyles(element, styles, defaultStyles) {
	        var data = {};
	        styles.styles.forEach(function (entry) {
	            Object.keys(entry).forEach(function (prop) {
	                var val = entry[prop];
	                var formattedProp = dashCaseToCamelCase(prop);
	                data[formattedProp] =
	                    val == _angular_core.AUTO_STYLE ? val : val.toString() + _resolveStyleUnit(val, prop, formattedProp);
	            });
	        });
	        Object.keys(defaultStyles).forEach(function (prop) {
	            if (!isPresent(data[prop])) {
	                data[prop] = defaultStyles[prop];
	            }
	        });
	        return data;
	    }
	    function _resolveStyleUnit(val, userProvidedProp, formattedProp) {
	        var unit = '';
	        if (_isPixelDimensionStyle(formattedProp) && val != 0 && val != '0') {
	            if (typeof val === 'number') {
	                unit = 'px';
	            }
	            else if (_findDimensionalSuffix(val.toString()).length == 0) {
	                throw new Error('Please provide a CSS unit value for ' + userProvidedProp + ':' + val);
	            }
	        }
	        return unit;
	    }
	    var _$0 = 48;
	    var _$9 = 57;
	    var _$PERIOD = 46;
	    function _findDimensionalSuffix(value) {
	        for (var i = 0; i < value.length; i++) {
	            var c = value.charCodeAt(i);
	            if ((c >= _$0 && c <= _$9) || c == _$PERIOD)
	                continue;
	            return value.substring(i, value.length);
	        }
	        return '';
	    }
	    function _isPixelDimensionStyle(prop) {
	        switch (prop) {
	            case 'width':
	            case 'height':
	            case 'minWidth':
	            case 'minHeight':
	            case 'maxWidth':
	            case 'maxHeight':
	            case 'left':
	            case 'top':
	            case 'bottom':
	            case 'right':
	            case 'fontSize':
	            case 'outlineWidth':
	            case 'outlineOffset':
	            case 'paddingTop':
	            case 'paddingLeft':
	            case 'paddingBottom':
	            case 'paddingRight':
	            case 'marginTop':
	            case 'marginLeft':
	            case 'marginBottom':
	            case 'marginRight':
	            case 'borderRadius':
	            case 'borderWidth':
	            case 'borderTopWidth':
	            case 'borderLeftWidth':
	            case 'borderRightWidth':
	            case 'borderBottomWidth':
	            case 'textIndent':
	                return true;
	            default:
	                return false;
	        }
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Provides DOM operations in any browser environment.
	     *
	     * @security Tread carefully! Interacting with the DOM directly is dangerous and
	     * can introduce XSS risks.
	     */
	    var GenericBrowserDomAdapter = (function (_super) {
	        __extends$1(GenericBrowserDomAdapter, _super);
	        function GenericBrowserDomAdapter() {
	            var _this = this;
	            _super.call(this);
	            this._animationPrefix = null;
	            this._transitionEnd = null;
	            try {
	                var element_1 = this.createElement('div', this.defaultDoc());
	                if (isPresent(this.getStyle(element_1, 'animationName'))) {
	                    this._animationPrefix = '';
	                }
	                else {
	                    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
	                    for (var i = 0; i < domPrefixes.length; i++) {
	                        if (isPresent(this.getStyle(element_1, domPrefixes[i] + 'AnimationName'))) {
	                            this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
	                            break;
	                        }
	                    }
	                }
	                var transEndEventNames_1 = {
	                    WebkitTransition: 'webkitTransitionEnd',
	                    MozTransition: 'transitionend',
	                    OTransition: 'oTransitionEnd otransitionend',
	                    transition: 'transitionend'
	                };
	                Object.keys(transEndEventNames_1).forEach(function (key) {
	                    if (isPresent(_this.getStyle(element_1, key))) {
	                        _this._transitionEnd = transEndEventNames_1[key];
	                    }
	                });
	            }
	            catch (e) {
	                this._animationPrefix = null;
	                this._transitionEnd = null;
	            }
	        }
	        GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return el.getDistributedNodes(); };
	        GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
	            el.href = href == null ? baseUrl : baseUrl + '/../' + href;
	        };
	        GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
	        GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
	            return typeof this.defaultDoc().body.createShadowRoot === 'function';
	        };
	        GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () { return this._animationPrefix ? this._animationPrefix : ''; };
	        GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return this._transitionEnd ? this._transitionEnd : ''; };
	        GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
	            return isPresent(this._animationPrefix) && isPresent(this._transitionEnd);
	        };
	        return GenericBrowserDomAdapter;
	    }(DomAdapter));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var _attrToPropMap = {
	        'class': 'className',
	        'innerHtml': 'innerHTML',
	        'readonly': 'readOnly',
	        'tabindex': 'tabIndex',
	    };
	    var DOM_KEY_LOCATION_NUMPAD = 3;
	    // Map to convert some key or keyIdentifier values to what will be returned by getEventKey
	    var _keyMap = {
	        // The following values are here for cross-browser compatibility and to match the W3C standard
	        // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
	        '\b': 'Backspace',
	        '\t': 'Tab',
	        '\x7F': 'Delete',
	        '\x1B': 'Escape',
	        'Del': 'Delete',
	        'Esc': 'Escape',
	        'Left': 'ArrowLeft',
	        'Right': 'ArrowRight',
	        'Up': 'ArrowUp',
	        'Down': 'ArrowDown',
	        'Menu': 'ContextMenu',
	        'Scroll': 'ScrollLock',
	        'Win': 'OS'
	    };
	    // There is a bug in Chrome for numeric keypad keys:
	    // https://code.google.com/p/chromium/issues/detail?id=155654
	    // 1, 2, 3 ... are reported as A, B, C ...
	    var _chromeNumKeyPadMap = {
	        'A': '1',
	        'B': '2',
	        'C': '3',
	        'D': '4',
	        'E': '5',
	        'F': '6',
	        'G': '7',
	        'H': '8',
	        'I': '9',
	        'J': '*',
	        'K': '+',
	        'M': '-',
	        'N': '.',
	        'O': '/',
	        '\x60': '0',
	        '\x90': 'NumLock'
	    };
	    /**
	     * A `DomAdapter` powered by full browser DOM APIs.
	     *
	     * @security Tread carefully! Interacting with the DOM directly is dangerous and
	     * can introduce XSS risks.
	     */
	    /* tslint:disable:requireParameterType */
	    var BrowserDomAdapter = (function (_super) {
	        __extends(BrowserDomAdapter, _super);
	        function BrowserDomAdapter() {
	            _super.apply(this, arguments);
	        }
	        BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error('parse not implemented'); };
	        BrowserDomAdapter.makeCurrent = function () { setRootDomAdapter(new BrowserDomAdapter()); };
	        BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
	        BrowserDomAdapter.prototype.setProperty = function (el, name, value) { el[name] = value; };
	        BrowserDomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
	        BrowserDomAdapter.prototype.invoke = function (el, methodName, args) { (_a = el)[methodName].apply(_a, args); var _a; };
	        // TODO(tbosch): move this into a separate environment class once we have it
	        BrowserDomAdapter.prototype.logError = function (error) { (window.console.error || window.console.log)(error); };
	        BrowserDomAdapter.prototype.log = function (error) { window.console.log(error); };
	        BrowserDomAdapter.prototype.logGroup = function (error) {
	            window.console.group && window.console.group(error);
	            this.logError(error);
	        };
	        BrowserDomAdapter.prototype.logGroupEnd = function () { window.console.groupEnd && window.console.groupEnd(); };
	        Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
	            get: function () { return _attrToPropMap; },
	            enumerable: true,
	            configurable: true
	        });
	        BrowserDomAdapter.prototype.query = function (selector) { return document.querySelector(selector); };
	        BrowserDomAdapter.prototype.querySelector = function (el, selector) {
	            return el.querySelector(selector);
	        };
	        BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
	        BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
	        BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
	            el.addEventListener(evt, listener, false);
	            // Needed to follow Dart's subscription semantic, until fix of
	            // https://code.google.com/p/dart/issues/detail?id=17406
	            return function () { el.removeEventListener(evt, listener, false); };
	        };
	        BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
	        BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
	            var evt = document.createEvent('MouseEvent');
	            evt.initEvent(eventType, true, true);
	            return evt;
	        };
	        BrowserDomAdapter.prototype.createEvent = function (eventType) {
	            var evt = document.createEvent('Event');
	            evt.initEvent(eventType, true, true);
	            return evt;
	        };
	        BrowserDomAdapter.prototype.preventDefault = function (evt) {
	            evt.preventDefault();
	            evt.returnValue = false;
	        };
	        BrowserDomAdapter.prototype.isPrevented = function (evt) {
	            return evt.defaultPrevented || isPresent(evt.returnValue) && !evt.returnValue;
	        };
	        BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
	        BrowserDomAdapter.prototype.getTemplateContent = function (el) {
	            return 'content' in el && el instanceof HTMLTemplateElement ? el.content : null;
	        };
	        BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
	        BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
	        BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
	        BrowserDomAdapter.prototype.type = function (node) { return node.type; };
	        BrowserDomAdapter.prototype.content = function (node) {
	            if (this.hasProperty(node, 'content')) {
	                return node.content;
	            }
	            else {
	                return node;
	            }
	        };
	        BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
	        BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
	        BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
	        BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
	        BrowserDomAdapter.prototype.childNodesAsList = function (el) {
	            var childNodes = el.childNodes;
	            var res = new Array(childNodes.length);
	            for (var i = 0; i < childNodes.length; i++) {
	                res[i] = childNodes[i];
	            }
	            return res;
	        };
	        BrowserDomAdapter.prototype.clearNodes = function (el) {
	            while (el.firstChild) {
	                el.removeChild(el.firstChild);
	            }
	        };
	        BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
	        BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
	        BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
	        BrowserDomAdapter.prototype.remove = function (node) {
	            if (node.parentNode) {
	                node.parentNode.removeChild(node);
	            }
	            return node;
	        };
	        BrowserDomAdapter.prototype.insertBefore = function (el, node) { el.parentNode.insertBefore(node, el); };
	        BrowserDomAdapter.prototype.insertAllBefore = function (el, nodes) {
	            nodes.forEach(function (n) { return el.parentNode.insertBefore(n, el); });
	        };
	        BrowserDomAdapter.prototype.insertAfter = function (el, node) { el.parentNode.insertBefore(node, el.nextSibling); };
	        BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
	        BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
	        BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
	        BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
	        BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
	        BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
	        BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
	        BrowserDomAdapter.prototype.createComment = function (text) { return document.createComment(text); };
	        BrowserDomAdapter.prototype.createTemplate = function (html) {
	            var t = document.createElement('template');
	            t.innerHTML = html;
	            return t;
	        };
	        BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
	            if (doc === void 0) { doc = document; }
	            return doc.createElement(tagName);
	        };
	        BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
	            if (doc === void 0) { doc = document; }
	            return doc.createElementNS(ns, tagName);
	        };
	        BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
	            if (doc === void 0) { doc = document; }
	            return doc.createTextNode(text);
	        };
	        BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
	            if (doc === void 0) { doc = document; }
	            var el = doc.createElement('SCRIPT');
	            el.setAttribute(attrName, attrValue);
	            return el;
	        };
	        BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
	            if (doc === void 0) { doc = document; }
	            var style = doc.createElement('style');
	            this.appendChild(style, this.createTextNode(css));
	            return style;
	        };
	        BrowserDomAdapter.prototype.createShadowRoot = function (el) { return el.createShadowRoot(); };
	        BrowserDomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
	        BrowserDomAdapter.prototype.getHost = function (el) { return el.host; };
	        BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
	        BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
	            return element.getElementsByClassName(name);
	        };
	        BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
	            return element.getElementsByTagName(name);
	        };
	        BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
	        BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
	        BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
	        BrowserDomAdapter.prototype.hasClass = function (element, className) {
	            return element.classList.contains(className);
	        };
	        BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
	            element.style[styleName] = styleValue;
	        };
	        BrowserDomAdapter.prototype.removeStyle = function (element, stylename) {
	            // IE requires '' instead of null
	            // see https://github.com/angular/angular/issues/7916
	            element.style[stylename] = '';
	        };
	        BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
	        BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
	            if (styleValue === void 0) { styleValue = null; }
	            var value = this.getStyle(element, styleName) || '';
	            return styleValue ? value == styleValue : value.length > 0;
	        };
	        BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
	        BrowserDomAdapter.prototype.attributeMap = function (element) {
	            var res = new Map();
	            var elAttrs = element.attributes;
	            for (var i = 0; i < elAttrs.length; i++) {
	                var attrib = elAttrs[i];
	                res.set(attrib.name, attrib.value);
	            }
	            return res;
	        };
	        BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) {
	            return element.hasAttribute(attribute);
	        };
	        BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
	            return element.hasAttributeNS(ns, attribute);
	        };
	        BrowserDomAdapter.prototype.getAttribute = function (element, attribute) {
	            return element.getAttribute(attribute);
	        };
	        BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
	            return element.getAttributeNS(ns, name);
	        };
	        BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
	        BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
	            element.setAttributeNS(ns, name, value);
	        };
	        BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
	        BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) {
	            element.removeAttributeNS(ns, name);
	        };
	        BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
	        BrowserDomAdapter.prototype.createHtmlDocument = function () {
	            return document.implementation.createHTMLDocument('fakeTitle');
	        };
	        BrowserDomAdapter.prototype.defaultDoc = function () { return document; };
	        BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
	            try {
	                return el.getBoundingClientRect();
	            }
	            catch (e) {
	                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
	            }
	        };
	        BrowserDomAdapter.prototype.getTitle = function () { return document.title; };
	        BrowserDomAdapter.prototype.setTitle = function (newTitle) { document.title = newTitle || ''; };
	        BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
	            if (n instanceof HTMLElement) {
	                return n.matches && n.matches(selector) ||
	                    n.msMatchesSelector && n.msMatchesSelector(selector) ||
	                    n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
	            }
	            return false;
	        };
	        BrowserDomAdapter.prototype.isTemplateElement = function (el) {
	            return el instanceof HTMLElement && el.nodeName == 'TEMPLATE';
	        };
	        BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
	        BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
	        BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
	        BrowserDomAdapter.prototype.hasShadowRoot = function (node) {
	            return isPresent(node.shadowRoot) && node instanceof HTMLElement;
	        };
	        BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
	        BrowserDomAdapter.prototype.importIntoDoc = function (node) { return document.importNode(this.templateAwareRoot(node), true); };
	        BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
	        BrowserDomAdapter.prototype.getHref = function (el) { return el.href; };
	        BrowserDomAdapter.prototype.getEventKey = function (event) {
	            var key = event.key;
	            if (isBlank(key)) {
	                key = event.keyIdentifier;
	                // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
	                // Safari cf
	                // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
	                if (isBlank(key)) {
	                    return 'Unidentified';
	                }
	                if (key.startsWith('U+')) {
	                    key = String.fromCharCode(parseInt(key.substring(2), 16));
	                    if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
	                        // There is a bug in Chrome for numeric keypad keys:
	                        // https://code.google.com/p/chromium/issues/detail?id=155654
	                        // 1, 2, 3 ... are reported as A, B, C ...
	                        key = _chromeNumKeyPadMap[key];
	                    }
	                }
	            }
	            return _keyMap[key] || key;
	        };
	        BrowserDomAdapter.prototype.getGlobalEventTarget = function (target) {
	            if (target === 'window') {
	                return window;
	            }
	            if (target === 'document') {
	                return document;
	            }
	            if (target === 'body') {
	                return document.body;
	            }
	        };
	        BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
	        BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
	        BrowserDomAdapter.prototype.getBaseHref = function () {
	            var href = getBaseElementHref();
	            return isBlank(href) ? null : relativePath(href);
	        };
	        BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
	        BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
	        BrowserDomAdapter.prototype.setData = function (element, name, value) {
	            this.setAttribute(element, 'data-' + name, value);
	        };
	        BrowserDomAdapter.prototype.getData = function (element, name) {
	            return this.getAttribute(element, 'data-' + name);
	        };
	        BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
	        // TODO(tbosch): move this into a separate environment class once we have it
	        BrowserDomAdapter.prototype.setGlobalVar = function (path, value) { setValueOnPath(global$1, path, value); };
	        BrowserDomAdapter.prototype.supportsWebAnimation = function () {
	            return typeof Element.prototype['animate'] === 'function';
	        };
	        BrowserDomAdapter.prototype.performanceNow = function () {
	            // performance.now() is not available in all browsers, see
	            // http://caniuse.com/#search=performance.now
	            return window.performance && window.performance.now ? window.performance.now() :
	                new Date().getTime();
	        };
	        BrowserDomAdapter.prototype.supportsCookies = function () { return true; };
	        BrowserDomAdapter.prototype.getCookie = function (name) { return parseCookieValue(document.cookie, name); };
	        BrowserDomAdapter.prototype.setCookie = function (name, value) {
	            // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
	            // not clear other cookies.
	            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	        };
	        return BrowserDomAdapter;
	    }(GenericBrowserDomAdapter));
	    var baseElement = null;
	    function getBaseElementHref() {
	        if (!baseElement) {
	            baseElement = document.querySelector('base');
	            if (!baseElement) {
	                return null;
	            }
	        }
	        return baseElement.getAttribute('href');
	    }
	    // based on urlUtils.js in AngularJS 1
	    var urlParsingNode;
	    function relativePath(url) {
	        if (!urlParsingNode) {
	            urlParsingNode = document.createElement('a');
	        }
	        urlParsingNode.setAttribute('href', url);
	        return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname;
	    }
	    function parseCookieValue(cookieStr, name) {
	        name = encodeURIComponent(name);
	        for (var _i = 0, _a = cookieStr.split(';'); _i < _a.length; _i++) {
	            var cookie = _a[_i];
	            var eqIndex = cookie.indexOf('=');
	            var _b = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)], cookieName = _b[0], cookieValue = _b[1];
	            if (cookieName.trim() === name) {
	                return decodeURIComponent(cookieValue);
	            }
	        }
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function supportsState() {
	        return !!window.history.pushState;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
	     * This class should not be used directly by an application developer. Instead, use
	     * {@link Location}.
	     */
	    var BrowserPlatformLocation = (function (_super) {
	        __extends$2(BrowserPlatformLocation, _super);
	        function BrowserPlatformLocation() {
	            _super.call(this);
	            this._init();
	        }
	        // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
	        /** @internal */
	        BrowserPlatformLocation.prototype._init = function () {
	            this._location = getDOM().getLocation();
	            this._history = getDOM().getHistory();
	        };
	        Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
	            get: function () { return this._location; },
	            enumerable: true,
	            configurable: true
	        });
	        BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return getDOM().getBaseHref(); };
	        BrowserPlatformLocation.prototype.onPopState = function (fn) {
	            getDOM().getGlobalEventTarget('window').addEventListener('popstate', fn, false);
	        };
	        BrowserPlatformLocation.prototype.onHashChange = function (fn) {
	            getDOM().getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
	        };
	        Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
	            get: function () { return this._location.pathname; },
	            set: function (newPath) { this._location.pathname = newPath; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
	            get: function () { return this._location.search; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
	            get: function () { return this._location.hash; },
	            enumerable: true,
	            configurable: true
	        });
	        BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
	            if (supportsState()) {
	                this._history.pushState(state, title, url);
	            }
	            else {
	                this._location.hash = url;
	            }
	        };
	        BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
	            if (supportsState()) {
	                this._history.replaceState(state, title, url);
	            }
	            else {
	                this._location.hash = url;
	            }
	        };
	        BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
	        BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
	        BrowserPlatformLocation.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BrowserPlatformLocation.ctorParameters = [];
	        return BrowserPlatformLocation;
	    }(_angular_common.PlatformLocation));
	
	    var BrowserGetTestability = (function () {
	        function BrowserGetTestability() {
	        }
	        BrowserGetTestability.init = function () { _angular_core.setTestabilityGetter(new BrowserGetTestability()); };
	        BrowserGetTestability.prototype.addToWindow = function (registry) {
	            global$1.getAngularTestability = function (elem, findInAncestors) {
	                if (findInAncestors === void 0) { findInAncestors = true; }
	                var testability = registry.findTestabilityInTree(elem, findInAncestors);
	                if (testability == null) {
	                    throw new Error('Could not find testability for element.');
	                }
	                return testability;
	            };
	            global$1.getAllAngularTestabilities = function () { return registry.getAllTestabilities(); };
	            global$1.getAllAngularRootElements = function () { return registry.getAllRootElements(); };
	            var whenAllStable = function (callback /** TODO #9100 */) {
	                var testabilities = global$1.getAllAngularTestabilities();
	                var count = testabilities.length;
	                var didWork = false;
	                var decrement = function (didWork_ /** TODO #9100 */) {
	                    didWork = didWork || didWork_;
	                    count--;
	                    if (count == 0) {
	                        callback(didWork);
	                    }
	                };
	                testabilities.forEach(function (testability /** TODO #9100 */) {
	                    testability.whenStable(decrement);
	                });
	            };
	            if (!global$1['frameworkStabilizers']) {
	                global$1['frameworkStabilizers'] = [];
	            }
	            global$1['frameworkStabilizers'].push(whenAllStable);
	        };
	        BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	            if (elem == null) {
	                return null;
	            }
	            var t = registry.getTestability(elem);
	            if (isPresent(t)) {
	                return t;
	            }
	            else if (!findInAncestors) {
	                return null;
	            }
	            if (getDOM().isShadowRoot(elem)) {
	                return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
	            }
	            return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
	        };
	        return BrowserGetTestability;
	    }());
	
	    /**
	     * A service that can be used to get and set the title of a current HTML document.
	     *
	     * Since an Angular 2 application can't be bootstrapped on the entire HTML document (`<html>` tag)
	     * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
	     * (representing the `<title>` tag). Instead, this service can be used to set and get the current
	     * title value.
	     *
	     * @experimental
	     */
	    var Title = (function () {
	        function Title() {
	        }
	        /**
	         * Get the title of the current HTML document.
	         * @returns {string}
	         */
	        Title.prototype.getTitle = function () { return getDOM().getTitle(); };
	        /**
	         * Set the title of the current HTML document.
	         * @param newTitle
	         */
	        Title.prototype.setTitle = function (newTitle) { getDOM().setTitle(newTitle); };
	        return Title;
	    }());
	
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = new Array(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                list.splice(index, 1);
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.maximum = function (list, predicate) {
	            if (list.length == 0) {
	                return null;
	            }
	            var solution = null;
	            var maxValue = -Infinity;
	            for (var index = 0; index < list.length; index++) {
	                var candidate = list[index];
	                if (candidate == null) {
	                    continue;
	                }
	                var candidateValue = predicate(candidate);
	                if (candidateValue > maxValue) {
	                    solution = candidate;
	                    maxValue = candidateValue;
	                }
	            }
	            return solution;
	        };
	        ListWrapper.flatten = function (list) {
	            var target = [];
	            _flattenArray(list, target);
	            return target;
	        };
	        return ListWrapper;
	    }());
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (Array.isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }
	
	    /**
	     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
	     *
	     * Note: Document might not be available in the Application Context when Application and Rendering
	     * Contexts are not the same (e.g. when running the application into a Web Worker).
	     *
	     * @stable
	     */
	    var DOCUMENT = new _angular_core.OpaqueToken('DocumentToken');
	
	    /**
	     * @stable
	     */
	    var EVENT_MANAGER_PLUGINS = new _angular_core.OpaqueToken('EventManagerPlugins');
	    /**
	     * @stable
	     */
	    var EventManager = (function () {
	        function EventManager(plugins, _zone) {
	            var _this = this;
	            this._zone = _zone;
	            plugins.forEach(function (p) { return p.manager = _this; });
	            this._plugins = plugins.slice().reverse();
	        }
	        EventManager.prototype.addEventListener = function (element, eventName, handler) {
	            var plugin = this._findPluginFor(eventName);
	            return plugin.addEventListener(element, eventName, handler);
	        };
	        EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
	            var plugin = this._findPluginFor(eventName);
	            return plugin.addGlobalEventListener(target, eventName, handler);
	        };
	        EventManager.prototype.getZone = function () { return this._zone; };
	        /** @internal */
	        EventManager.prototype._findPluginFor = function (eventName) {
	            var plugins = this._plugins;
	            for (var i = 0; i < plugins.length; i++) {
	                var plugin = plugins[i];
	                if (plugin.supports(eventName)) {
	                    return plugin;
	                }
	            }
	            throw new Error("No event manager plugin found for event " + eventName);
	        };
	        EventManager.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        EventManager.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Inject, args: [EVENT_MANAGER_PLUGINS,] },] },
	            { type: _angular_core.NgZone, },
	        ];
	        return EventManager;
	    }());
	    var EventManagerPlugin = (function () {
	        function EventManagerPlugin() {
	        }
	        // That is equivalent to having supporting $event.target
	        EventManagerPlugin.prototype.supports = function (eventName) { return false; };
	        EventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            throw 'not implemented';
	        };
	        EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
	            throw 'not implemented';
	        };
	        return EventManagerPlugin;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var SharedStylesHost = (function () {
	        function SharedStylesHost() {
	            /** @internal */
	            this._styles = [];
	            /** @internal */
	            this._stylesSet = new Set();
	        }
	        SharedStylesHost.prototype.addStyles = function (styles) {
	            var _this = this;
	            var additions = [];
	            styles.forEach(function (style) {
	                if (!_this._stylesSet.has(style)) {
	                    _this._stylesSet.add(style);
	                    _this._styles.push(style);
	                    additions.push(style);
	                }
	            });
	            this.onStylesAdded(additions);
	        };
	        SharedStylesHost.prototype.onStylesAdded = function (additions) { };
	        SharedStylesHost.prototype.getAllStyles = function () { return this._styles; };
	        SharedStylesHost.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        SharedStylesHost.ctorParameters = [];
	        return SharedStylesHost;
	    }());
	    var DomSharedStylesHost = (function (_super) {
	        __extends$4(DomSharedStylesHost, _super);
	        function DomSharedStylesHost(doc) {
	            _super.call(this);
	            this._hostNodes = new Set();
	            this._hostNodes.add(doc.head);
	        }
	        /** @internal */
	        DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
	            for (var i = 0; i < styles.length; i++) {
	                var style = styles[i];
	                getDOM().appendChild(host, getDOM().createStyleElement(style));
	            }
	        };
	        DomSharedStylesHost.prototype.addHost = function (hostNode) {
	            this._addStylesToHost(this._styles, hostNode);
	            this._hostNodes.add(hostNode);
	        };
	        DomSharedStylesHost.prototype.removeHost = function (hostNode) { this._hostNodes.delete(hostNode); };
	        DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
	            var _this = this;
	            this._hostNodes.forEach(function (hostNode) { _this._addStylesToHost(additions, hostNode); });
	        };
	        DomSharedStylesHost.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        DomSharedStylesHost.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [DOCUMENT,] },] },
	        ];
	        return DomSharedStylesHost;
	    }(SharedStylesHost));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var NAMESPACE_URIS = {
	        'xlink': 'http://www.w3.org/1999/xlink',
	        'svg': 'http://www.w3.org/2000/svg',
	        'xhtml': 'http://www.w3.org/1999/xhtml'
	    };
	    var TEMPLATE_COMMENT_TEXT = 'template bindings={}';
	    var TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/;
	    var DomRootRenderer = (function () {
	        function DomRootRenderer(document, eventManager, sharedStylesHost, animationDriver) {
	            this.document = document;
	            this.eventManager = eventManager;
	            this.sharedStylesHost = sharedStylesHost;
	            this.animationDriver = animationDriver;
	            this.registeredComponents = new Map();
	        }
	        DomRootRenderer.prototype.renderComponent = function (componentProto) {
	            var renderer = this.registeredComponents.get(componentProto.id);
	            if (!renderer) {
	                renderer = new DomRenderer(this, componentProto, this.animationDriver);
	                this.registeredComponents.set(componentProto.id, renderer);
	            }
	            return renderer;
	        };
	        return DomRootRenderer;
	    }());
	    var DomRootRenderer_ = (function (_super) {
	        __extends$3(DomRootRenderer_, _super);
	        function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animationDriver) {
	            _super.call(this, _document, _eventManager, sharedStylesHost, animationDriver);
	        }
	        DomRootRenderer_.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        DomRootRenderer_.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Inject, args: [DOCUMENT,] },] },
	            { type: EventManager, },
	            { type: DomSharedStylesHost, },
	            { type: AnimationDriver, },
	        ];
	        return DomRootRenderer_;
	    }(DomRootRenderer));
	    var DomRenderer = (function () {
	        function DomRenderer(_rootRenderer, componentProto, _animationDriver) {
	            this._rootRenderer = _rootRenderer;
	            this.componentProto = componentProto;
	            this._animationDriver = _animationDriver;
	            this._styles = _flattenStyles(componentProto.id, componentProto.styles, []);
	            if (componentProto.encapsulation !== _angular_core.ViewEncapsulation.Native) {
	                this._rootRenderer.sharedStylesHost.addStyles(this._styles);
	            }
	            if (this.componentProto.encapsulation === _angular_core.ViewEncapsulation.Emulated) {
	                this._contentAttr = _shimContentAttribute(componentProto.id);
	                this._hostAttr = _shimHostAttribute(componentProto.id);
	            }
	            else {
	                this._contentAttr = null;
	                this._hostAttr = null;
	            }
	        }
	        DomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
	            var el;
	            if (typeof selectorOrNode === 'string') {
	                el = getDOM().querySelector(this._rootRenderer.document, selectorOrNode);
	                if (isBlank(el)) {
	                    throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
	                }
	            }
	            else {
	                el = selectorOrNode;
	            }
	            getDOM().clearNodes(el);
	            return el;
	        };
	        DomRenderer.prototype.createElement = function (parent, name, debugInfo) {
	            var nsAndName = splitNamespace(name);
	            var el = isPresent(nsAndName[0]) ?
	                getDOM().createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) :
	                getDOM().createElement(nsAndName[1]);
	            if (isPresent(this._contentAttr)) {
	                getDOM().setAttribute(el, this._contentAttr, '');
	            }
	            if (isPresent(parent)) {
	                getDOM().appendChild(parent, el);
	            }
	            return el;
	        };
	        DomRenderer.prototype.createViewRoot = function (hostElement) {
	            var nodesParent;
	            if (this.componentProto.encapsulation === _angular_core.ViewEncapsulation.Native) {
	                nodesParent = getDOM().createShadowRoot(hostElement);
	                this._rootRenderer.sharedStylesHost.addHost(nodesParent);
	                for (var i = 0; i < this._styles.length; i++) {
	                    getDOM().appendChild(nodesParent, getDOM().createStyleElement(this._styles[i]));
	                }
	            }
	            else {
	                if (isPresent(this._hostAttr)) {
	                    getDOM().setAttribute(hostElement, this._hostAttr, '');
	                }
	                nodesParent = hostElement;
	            }
	            return nodesParent;
	        };
	        DomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
	            var comment = getDOM().createComment(TEMPLATE_COMMENT_TEXT);
	            if (isPresent(parentElement)) {
	                getDOM().appendChild(parentElement, comment);
	            }
	            return comment;
	        };
	        DomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
	            var node = getDOM().createTextNode(value);
	            if (isPresent(parentElement)) {
	                getDOM().appendChild(parentElement, node);
	            }
	            return node;
	        };
	        DomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	            if (isBlank(parentElement))
	                return;
	            appendNodes(parentElement, nodes);
	        };
	        DomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) { moveNodesAfterSibling(node, viewRootNodes); };
	        DomRenderer.prototype.detachView = function (viewRootNodes) {
	            for (var i = 0; i < viewRootNodes.length; i++) {
	                getDOM().remove(viewRootNodes[i]);
	            }
	        };
	        DomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	            if (this.componentProto.encapsulation === _angular_core.ViewEncapsulation.Native && isPresent(hostElement)) {
	                this._rootRenderer.sharedStylesHost.removeHost(getDOM().getShadowRoot(hostElement));
	            }
	        };
	        DomRenderer.prototype.listen = function (renderElement, name, callback) {
	            return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
	        };
	        DomRenderer.prototype.listenGlobal = function (target, name, callback) {
	            return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
	        };
	        DomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	            getDOM().setProperty(renderElement, propertyName, propertyValue);
	        };
	        DomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	            var attrNs;
	            var nsAndName = splitNamespace(attributeName);
	            if (isPresent(nsAndName[0])) {
	                attributeName = nsAndName[0] + ':' + nsAndName[1];
	                attrNs = NAMESPACE_URIS[nsAndName[0]];
	            }
	            if (isPresent(attributeValue)) {
	                if (isPresent(attrNs)) {
	                    getDOM().setAttributeNS(renderElement, attrNs, attributeName, attributeValue);
	                }
	                else {
	                    getDOM().setAttribute(renderElement, attributeName, attributeValue);
	                }
	            }
	            else {
	                if (isPresent(attrNs)) {
	                    getDOM().removeAttributeNS(renderElement, attrNs, nsAndName[1]);
	                }
	                else {
	                    getDOM().removeAttribute(renderElement, attributeName);
	                }
	            }
	        };
	        DomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	            var dashCasedPropertyName = camelCaseToDashCase(propertyName);
	            if (getDOM().isCommentNode(renderElement)) {
	                var existingBindings = getDOM().getText(renderElement).replace(/\n/g, '').match(TEMPLATE_BINDINGS_EXP);
	                var parsedBindings = JSON.parse(existingBindings[1]);
	                parsedBindings[dashCasedPropertyName] = propertyValue;
	                getDOM().setText(renderElement, TEMPLATE_COMMENT_TEXT.replace('{}', JSON.stringify(parsedBindings, null, 2)));
	            }
	            else {
	                this.setElementAttribute(renderElement, propertyName, propertyValue);
	            }
	        };
	        DomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	            if (isAdd) {
	                getDOM().addClass(renderElement, className);
	            }
	            else {
	                getDOM().removeClass(renderElement, className);
	            }
	        };
	        DomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	            if (isPresent(styleValue)) {
	                getDOM().setStyle(renderElement, styleName, stringify(styleValue));
	            }
	            else {
	                getDOM().removeStyle(renderElement, styleName);
	            }
	        };
	        DomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	            getDOM().invoke(renderElement, methodName, args);
	        };
	        DomRenderer.prototype.setText = function (renderNode, text) { getDOM().setText(renderNode, text); };
	        DomRenderer.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing) {
	            return this._animationDriver.animate(element, startingStyles, keyframes, duration, delay, easing);
	        };
	        return DomRenderer;
	    }());
	    function moveNodesAfterSibling(sibling /** TODO #9100 */, nodes /** TODO #9100 */) {
	        var parent = getDOM().parentElement(sibling);
	        if (nodes.length > 0 && isPresent(parent)) {
	            var nextSibling = getDOM().nextSibling(sibling);
	            if (isPresent(nextSibling)) {
	                for (var i = 0; i < nodes.length; i++) {
	                    getDOM().insertBefore(nextSibling, nodes[i]);
	                }
	            }
	            else {
	                for (var i = 0; i < nodes.length; i++) {
	                    getDOM().appendChild(parent, nodes[i]);
	                }
	            }
	        }
	    }
	    function appendNodes(parent /** TODO #9100 */, nodes /** TODO #9100 */) {
	        for (var i = 0; i < nodes.length; i++) {
	            getDOM().appendChild(parent, nodes[i]);
	        }
	    }
	    function decoratePreventDefault(eventHandler) {
	        return function (event /** TODO #9100 */) {
	            var allowDefaultBehavior = eventHandler(event);
	            if (allowDefaultBehavior === false) {
	                // TODO(tbosch): move preventDefault into event plugins...
	                getDOM().preventDefault(event);
	            }
	        };
	    }
	    var COMPONENT_REGEX = /%COMP%/g;
	    var COMPONENT_VARIABLE = '%COMP%';
	    var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
	    var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
	    function _shimContentAttribute(componentShortId) {
	        return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
	    }
	    function _shimHostAttribute(componentShortId) {
	        return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
	    }
	    function _flattenStyles(compId, styles, target) {
	        for (var i = 0; i < styles.length; i++) {
	            var style = styles[i];
	            if (Array.isArray(style)) {
	                _flattenStyles(compId, style, target);
	            }
	            else {
	                style = style.replace(COMPONENT_REGEX, compId);
	                target.push(style);
	            }
	        }
	        return target;
	    }
	    var NS_PREFIX_RE = /^:([^:]+):(.+)$/;
	    function splitNamespace(name) {
	        if (name[0] != ':') {
	            return [null, name];
	        }
	        var match = name.match(NS_PREFIX_RE);
	        return [match[1], match[2]];
	    }
	
	    var CORE_TOKENS = {
	        'ApplicationRef': _angular_core.ApplicationRef,
	        'NgZone': _angular_core.NgZone
	    };
	    var INSPECT_GLOBAL_NAME = 'ng.probe';
	    var CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
	    /**
	     * Returns a {@link DebugElement} for the given native DOM element, or
	     * null if the given native element does not have an Angular view associated
	     * with it.
	     */
	    function inspectNativeElement(element /** TODO #9100 */) {
	        return _angular_core.getDebugNode(element);
	    }
	    /**
	     * @experimental
	     */
	    var NgProbeToken = (function () {
	        function NgProbeToken(name, token) {
	            this.name = name;
	            this.token = token;
	        }
	        return NgProbeToken;
	    }());
	    function _createConditionalRootRenderer(rootRenderer /** TODO #9100 */, extraTokens) {
	        if (_angular_core.isDevMode()) {
	            return _createRootRenderer(rootRenderer, extraTokens);
	        }
	        return rootRenderer;
	    }
	    function _createRootRenderer(rootRenderer /** TODO #9100 */, extraTokens) {
	        getDOM().setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
	        getDOM().setGlobalVar(CORE_TOKENS_GLOBAL_NAME, StringMapWrapper.merge(CORE_TOKENS, _ngProbeTokensToMap(extraTokens || [])));
	        return new DebugDomRootRenderer(rootRenderer);
	    }
	    function _ngProbeTokensToMap(tokens) {
	        return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
	    }
	    /**
	     * Providers which support debugging Angular applications (e.g. via `ng.probe`).
	     */
	    var ELEMENT_PROBE_PROVIDERS = [{
	            provide: _angular_core.RootRenderer,
	            useFactory: _createConditionalRootRenderer,
	            deps: [DomRootRenderer, [NgProbeToken, new _angular_core.Optional()]]
	        }];
	    var ELEMENT_PROBE_PROVIDERS_PROD_MODE = [{
	            provide: _angular_core.RootRenderer,
	            useFactory: _createRootRenderer,
	            deps: [DomRootRenderer, [NgProbeToken, new _angular_core.Optional()]]
	        }];
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var DomEventsPlugin = (function (_super) {
	        __extends$5(DomEventsPlugin, _super);
	        function DomEventsPlugin() {
	            _super.apply(this, arguments);
	        }
	        // This plugin should come last in the list of plugins, because it accepts all
	        // events.
	        DomEventsPlugin.prototype.supports = function (eventName) { return true; };
	        DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            var zone = this.manager.getZone();
	            var outsideHandler = function (event /** TODO #9100 */) { return zone.runGuarded(function () { return handler(event); }); };
	            return this.manager.getZone().runOutsideAngular(function () { return getDOM().onAndCancel(element, eventName, outsideHandler); });
	        };
	        DomEventsPlugin.prototype.addGlobalEventListener = function (target, eventName, handler) {
	            var element = getDOM().getGlobalEventTarget(target);
	            var zone = this.manager.getZone();
	            var outsideHandler = function (event /** TODO #9100 */) { return zone.runGuarded(function () { return handler(event); }); };
	            return this.manager.getZone().runOutsideAngular(function () { return getDOM().onAndCancel(element, eventName, outsideHandler); });
	        };
	        DomEventsPlugin.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        DomEventsPlugin.ctorParameters = [];
	        return DomEventsPlugin;
	    }(EventManagerPlugin));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var _eventNames = {
	        // pan
	        'pan': true,
	        'panstart': true,
	        'panmove': true,
	        'panend': true,
	        'pancancel': true,
	        'panleft': true,
	        'panright': true,
	        'panup': true,
	        'pandown': true,
	        // pinch
	        'pinch': true,
	        'pinchstart': true,
	        'pinchmove': true,
	        'pinchend': true,
	        'pinchcancel': true,
	        'pinchin': true,
	        'pinchout': true,
	        // press
	        'press': true,
	        'pressup': true,
	        // rotate
	        'rotate': true,
	        'rotatestart': true,
	        'rotatemove': true,
	        'rotateend': true,
	        'rotatecancel': true,
	        // swipe
	        'swipe': true,
	        'swipeleft': true,
	        'swiperight': true,
	        'swipeup': true,
	        'swipedown': true,
	        // tap
	        'tap': true,
	    };
	    var HammerGesturesPluginCommon = (function (_super) {
	        __extends$7(HammerGesturesPluginCommon, _super);
	        function HammerGesturesPluginCommon() {
	            _super.call(this);
	        }
	        HammerGesturesPluginCommon.prototype.supports = function (eventName) {
	            return _eventNames.hasOwnProperty(eventName.toLowerCase());
	        };
	        return HammerGesturesPluginCommon;
	    }(EventManagerPlugin));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A DI token that you can use to provide{@link HammerGestureConfig} to Angular. Use it to configure
	     * Hammer gestures.
	     *
	     * @experimental
	     */
	    var HAMMER_GESTURE_CONFIG = new _angular_core.OpaqueToken('HammerGestureConfig');
	    /**
	     * @experimental
	     */
	    var HammerGestureConfig = (function () {
	        function HammerGestureConfig() {
	            this.events = [];
	            this.overrides = {};
	        }
	        HammerGestureConfig.prototype.buildHammer = function (element) {
	            var mc = new Hammer(element);
	            mc.get('pinch').set({ enable: true });
	            mc.get('rotate').set({ enable: true });
	            for (var eventName in this.overrides) {
	                mc.get(eventName).set(this.overrides[eventName]);
	            }
	            return mc;
	        };
	        HammerGestureConfig.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        HammerGestureConfig.ctorParameters = [];
	        return HammerGestureConfig;
	    }());
	    var HammerGesturesPlugin = (function (_super) {
	        __extends$6(HammerGesturesPlugin, _super);
	        function HammerGesturesPlugin(_config) {
	            _super.call(this);
	            this._config = _config;
	        }
	        HammerGesturesPlugin.prototype.supports = function (eventName) {
	            if (!_super.prototype.supports.call(this, eventName) && !this.isCustomEvent(eventName))
	                return false;
	            if (!isPresent(window['Hammer'])) {
	                throw new Error("Hammer.js is not loaded, can not bind " + eventName + " event");
	            }
	            return true;
	        };
	        HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            var _this = this;
	            var zone = this.manager.getZone();
	            eventName = eventName.toLowerCase();
	            return zone.runOutsideAngular(function () {
	                // Creating the manager bind events, must be done outside of angular
	                var mc = _this._config.buildHammer(element);
	                var callback = function (eventObj /** TODO #???? */) {
	                    zone.runGuarded(function () { handler(eventObj); });
	                };
	                mc.on(eventName, callback);
	                return function () { mc.off(eventName, callback); };
	            });
	        };
	        HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
	        HammerGesturesPlugin.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        HammerGesturesPlugin.ctorParameters = [
	            { type: HammerGestureConfig, decorators: [{ type: _angular_core.Inject, args: [HAMMER_GESTURE_CONFIG,] },] },
	        ];
	        return HammerGesturesPlugin;
	    }(HammerGesturesPluginCommon));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var modifierKeys = ['alt', 'control', 'meta', 'shift'];
	    var modifierKeyGetters = {
	        'alt': function (event) { return event.altKey; },
	        'control': function (event) { return event.ctrlKey; },
	        'meta': function (event) { return event.metaKey; },
	        'shift': function (event) { return event.shiftKey; }
	    };
	    /**
	     * @experimental
	     */
	    var KeyEventsPlugin = (function (_super) {
	        __extends$8(KeyEventsPlugin, _super);
	        function KeyEventsPlugin() {
	            _super.call(this);
	        }
	        KeyEventsPlugin.prototype.supports = function (eventName) {
	            return isPresent(KeyEventsPlugin.parseEventName(eventName));
	        };
	        KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            var parsedEvent = KeyEventsPlugin.parseEventName(eventName);
	            var outsideHandler = KeyEventsPlugin.eventCallback(element, parsedEvent['fullKey'], handler, this.manager.getZone());
	            return this.manager.getZone().runOutsideAngular(function () {
	                return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
	            });
	        };
	        KeyEventsPlugin.parseEventName = function (eventName) {
	            var parts = eventName.toLowerCase().split('.');
	            var domEventName = parts.shift();
	            if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
	                return null;
	            }
	            var key = KeyEventsPlugin._normalizeKey(parts.pop());
	            var fullKey = '';
	            modifierKeys.forEach(function (modifierName) {
	                if (parts.indexOf(modifierName) > -1) {
	                    ListWrapper.remove(parts, modifierName);
	                    fullKey += modifierName + '.';
	                }
	            });
	            fullKey += key;
	            if (parts.length != 0 || key.length === 0) {
	                // returning null instead of throwing to let another plugin process the event
	                return null;
	            }
	            var result = {};
	            result['domEventName'] = domEventName;
	            result['fullKey'] = fullKey;
	            return result;
	        };
	        KeyEventsPlugin.getEventFullKey = function (event) {
	            var fullKey = '';
	            var key = getDOM().getEventKey(event);
	            key = key.toLowerCase();
	            if (key === ' ') {
	                key = 'space'; // for readability
	            }
	            else if (key === '.') {
	                key = 'dot'; // because '.' is used as a separator in event names
	            }
	            modifierKeys.forEach(function (modifierName) {
	                if (modifierName != key) {
	                    var modifierGetter = modifierKeyGetters[modifierName];
	                    if (modifierGetter(event)) {
	                        fullKey += modifierName + '.';
	                    }
	                }
	            });
	            fullKey += key;
	            return fullKey;
	        };
	        KeyEventsPlugin.eventCallback = function (element, fullKey, handler, zone) {
	            return function (event /** TODO #9100 */) {
	                if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
	                    zone.runGuarded(function () { return handler(event); });
	                }
	            };
	        };
	        /** @internal */
	        KeyEventsPlugin._normalizeKey = function (keyName) {
	            // TODO: switch to a StringMap if the mapping grows too much
	            switch (keyName) {
	                case 'esc':
	                    return 'escape';
	                default:
	                    return keyName;
	            }
	        };
	        KeyEventsPlugin.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        KeyEventsPlugin.ctorParameters = [];
	        return KeyEventsPlugin;
	    }(EventManagerPlugin));
	
	    /**
	     * A pattern that recognizes a commonly useful subset of URLs that are safe.
	     *
	     * This regular expression matches a subset of URLs that will not cause script
	     * execution if used in URL context within a HTML document. Specifically, this
	     * regular expression matches if (comment from here on and regex copied from
	     * Soy's EscapingConventions):
	     * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
	     * (2) or no protocol.  A protocol must be followed by a colon. The below
	     *     allows that by allowing colons only after one of the characters [/?#].
	     *     A colon after a hash (#) must be in the fragment.
	     *     Otherwise, a colon after a (?) must be in a query.
	     *     Otherwise, a colon after a single solidus (/) must be in a path.
	     *     Otherwise, a colon after a double solidus (//) must be in the authority
	     *     (before port).
	     *
	     * The pattern disallows &, used in HTML entity declarations before
	     * one of the characters in [/?#]. This disallows HTML entities used in the
	     * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
	     * It also disallows HTML entities in the first path part of a relative path,
	     * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
	     * that. More importantly, it disallows masking of a colon,
	     * e.g. "javascript&#58;...".
	     *
	     * This regular expression was taken from the Closure sanitization library.
	     */
	    var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
	    /** A pattern that matches safe data URLs. Only matches image, video and audio types. */
	    var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
	    function sanitizeUrl(url) {
	        url = String(url);
	        if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN))
	            return url;
	        if (_angular_core.isDevMode()) {
	            getDOM().log("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)");
	        }
	        return 'unsafe:' + url;
	    }
	    function sanitizeSrcset(srcset) {
	        srcset = String(srcset);
	        return srcset.split(',').map(function (srcset) { return sanitizeUrl(srcset.trim()); }).join(', ');
	    }
	
	    /** A <body> element that can be safely used to parse untrusted HTML. Lazily initialized below. */
	    var inertElement = null;
	    /** Lazily initialized to make sure the DOM adapter gets set before use. */
	    var DOM = null;
	    /** Returns an HTML element that is guaranteed to not execute code when creating elements in it. */
	    function getInertElement() {
	        if (inertElement)
	            return inertElement;
	        DOM = getDOM();
	        // Prefer using <template> element if supported.
	        var templateEl = DOM.createElement('template');
	        if ('content' in templateEl)
	            return templateEl;
	        var doc = DOM.createHtmlDocument();
	        inertElement = DOM.querySelector(doc, 'body');
	        if (inertElement == null) {
	            // usually there should be only one body element in the document, but IE doesn't have any, so we
	            // need to create one.
	            var html = DOM.createElement('html', doc);
	            inertElement = DOM.createElement('body', doc);
	            DOM.appendChild(html, inertElement);
	            DOM.appendChild(doc, html);
	        }
	        return inertElement;
	    }
	    function tagSet(tags) {
	        var res = {};
	        for (var _i = 0, _a = tags.split(','); _i < _a.length; _i++) {
	            var t = _a[_i];
	            res[t] = true;
	        }
	        return res;
	    }
	    function merge() {
	        var sets = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sets[_i - 0] = arguments[_i];
	        }
	        var res = {};
	        for (var _a = 0, sets_1 = sets; _a < sets_1.length; _a++) {
	            var s = sets_1[_a];
	            for (var v in s) {
	                if (s.hasOwnProperty(v))
	                    res[v] = true;
	            }
	        }
	        return res;
	    }
	    // Good source of info about elements and attributes
	    // http://dev.w3.org/html5/spec/Overview.html#semantics
	    // http://simon.html5.org/html-elements
	    // Safe Void Elements - HTML5
	    // http://dev.w3.org/html5/spec/Overview.html#void-elements
	    var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
	    // Elements that you can, intentionally, leave open (and which close themselves)
	    // http://dev.w3.org/html5/spec/Overview.html#optional-tags
	    var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
	    var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
	    var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
	    // Safe Block Elements - HTML5
	    var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
	        'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
	        'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
	    // Inline Elements - HTML5
	    var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
	        'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
	        'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
	    var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
	    // Attributes that have href and hence need to be sanitized
	    var URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
	    // Attributes that have special href set hence need to be sanitized
	    var SRCSET_ATTRS = tagSet('srcset');
	    var HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
	        'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
	        'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
	        'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
	        'valign,value,vspace,width');
	    // NB: This currently conciously doesn't support SVG. SVG sanitization has had several security
	    // issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
	    // innerHTML is required, SVG attributes should be added here.
	    // NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
	    // can be sanitized, but they increase security surface area without a legitimate use case, so they
	    // are left out here.
	    var VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
	    /**
	     * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
	     * attributes.
	     */
	    var SanitizingHtmlSerializer = (function () {
	        function SanitizingHtmlSerializer() {
	            // Explicitly track if something was stripped, to avoid accidentally warning of sanitization just
	            // because characters were re-encoded.
	            this.sanitizedSomething = false;
	            this.buf = [];
	        }
	        SanitizingHtmlSerializer.prototype.sanitizeChildren = function (el) {
	            // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
	            // However this code never accesses properties off of `document` before deleting its contents
	            // again, so it shouldn't be vulnerable to DOM clobbering.
	            var current = el.firstChild;
	            while (current) {
	                if (DOM.isElementNode(current)) {
	                    this.startElement(current);
	                }
	                else if (DOM.isTextNode(current)) {
	                    this.chars(DOM.nodeValue(current));
	                }
	                else {
	                    // Strip non-element, non-text nodes.
	                    this.sanitizedSomething = true;
	                }
	                if (DOM.firstChild(current)) {
	                    current = DOM.firstChild(current);
	                    continue;
	                }
	                while (current) {
	                    // Leaving the element. Walk up and to the right, closing tags as we go.
	                    if (DOM.isElementNode(current)) {
	                        this.endElement(current);
	                    }
	                    if (DOM.nextSibling(current)) {
	                        current = DOM.nextSibling(current);
	                        break;
	                    }
	                    current = DOM.parentElement(current);
	                }
	            }
	            return this.buf.join('');
	        };
	        SanitizingHtmlSerializer.prototype.startElement = function (element) {
	            var _this = this;
	            var tagName = DOM.nodeName(element).toLowerCase();
	            if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
	                this.sanitizedSomething = true;
	                return;
	            }
	            this.buf.push('<');
	            this.buf.push(tagName);
	            DOM.attributeMap(element).forEach(function (value, attrName) {
	                var lower = attrName.toLowerCase();
	                if (!VALID_ATTRS.hasOwnProperty(lower)) {
	                    _this.sanitizedSomething = true;
	                    return;
	                }
	                // TODO(martinprobst): Special case image URIs for data:image/...
	                if (URI_ATTRS[lower])
	                    value = sanitizeUrl(value);
	                if (SRCSET_ATTRS[lower])
	                    value = sanitizeSrcset(value);
	                _this.buf.push(' ');
	                _this.buf.push(attrName);
	                _this.buf.push('="');
	                _this.buf.push(encodeEntities(value));
	                _this.buf.push('"');
	            });
	            this.buf.push('>');
	        };
	        SanitizingHtmlSerializer.prototype.endElement = function (current) {
	            var tagName = DOM.nodeName(current).toLowerCase();
	            if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
	                this.buf.push('</');
	                this.buf.push(tagName);
	                this.buf.push('>');
	            }
	        };
	        SanitizingHtmlSerializer.prototype.chars = function (chars /** TODO #9100 */) { this.buf.push(encodeEntities(chars)); };
	        return SanitizingHtmlSerializer;
	    }());
	    // Regular Expressions for parsing tags and attributes
	    var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	    // ! to ~ is the ASCII range.
	    var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
	    /**
	     * Escapes all potentially dangerous characters, so that the
	     * resulting string can be safely inserted into attribute or
	     * element text.
	     * @param value
	     * @returns {string} escaped text
	     */
	    function encodeEntities(value) {
	        return value.replace(/&/g, '&amp;')
	            .replace(SURROGATE_PAIR_REGEXP, function (match) {
	            var hi = match.charCodeAt(0);
	            var low = match.charCodeAt(1);
	            return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
	        })
	            .replace(NON_ALPHANUMERIC_REGEXP, function (match) { return '&#' + match.charCodeAt(0) + ';'; })
	            .replace(/</g, '&lt;')
	            .replace(/>/g, '&gt;');
	    }
	    /**
	     * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
	     * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo').
	     *
	     * This is undesirable since we don't want to allow any of these custom attributes. This method
	     * strips them all.
	     */
	    function stripCustomNsAttrs(el) {
	        DOM.attributeMap(el).forEach(function (_, attrName) {
	            if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
	                DOM.removeAttribute(el, attrName);
	            }
	        });
	        for (var _i = 0, _a = DOM.childNodesAsList(el); _i < _a.length; _i++) {
	            var n = _a[_i];
	            if (DOM.isElementNode(n))
	                stripCustomNsAttrs(n);
	        }
	    }
	    /**
	     * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
	     * the DOM in a browser environment.
	     */
	    function sanitizeHtml(unsafeHtmlInput) {
	        try {
	            var containerEl = getInertElement();
	            // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
	            var unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
	            // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
	            // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
	            var mXSSAttempts = 5;
	            var parsedHtml = unsafeHtml;
	            do {
	                if (mXSSAttempts === 0) {
	                    throw new Error('Failed to sanitize html because the input is unstable');
	                }
	                mXSSAttempts--;
	                unsafeHtml = parsedHtml;
	                DOM.setInnerHTML(containerEl, unsafeHtml);
	                if (DOM.defaultDoc().documentMode) {
	                    // strip custom-namespaced attributes on IE<=11
	                    stripCustomNsAttrs(containerEl);
	                }
	                parsedHtml = DOM.getInnerHTML(containerEl);
	            } while (unsafeHtml !== parsedHtml);
	            var sanitizer = new SanitizingHtmlSerializer();
	            var safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl) || containerEl);
	            // Clear out the body element.
	            var parent_1 = DOM.getTemplateContent(containerEl) || containerEl;
	            for (var _i = 0, _a = DOM.childNodesAsList(parent_1); _i < _a.length; _i++) {
	                var child = _a[_i];
	                DOM.removeChild(parent_1, child);
	            }
	            if (_angular_core.isDevMode() && sanitizer.sanitizedSomething) {
	                DOM.log('WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).');
	            }
	            return safeHtml;
	        }
	        catch (e) {
	            // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
	            inertElement = null;
	            throw e;
	        }
	    }
	
	    /**
	     * Regular expression for safe style values.
	     *
	     * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
	     *
	     * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
	     * font-family) and hence could allow multiple values to get injected, but that should pose no risk
	     * of XSS.
	     *
	     * The function expression checks only for XSS safety, not for CSS validity.
	     *
	     * This regular expression was taken from the Closure sanitization library, and augmented for
	     * transformation values.
	     */
	    var VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
	    var TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
	    var COLOR_FNS = '(?:rgb|hsl)a?';
	    var FN_ARGS = '\\([-0-9.%, a-zA-Z]+\\)';
	    var SAFE_STYLE_VALUE = new RegExp("^(" + VALUES + "|(?:" + TRANSFORMATION_FNS + "|" + COLOR_FNS + ")" + FN_ARGS + ")$", 'g');
	    /**
	     * Matches a `url(...)` value with an arbitrary argument as long as it does
	     * not contain parentheses.
	     *
	     * The URL value still needs to be sanitized separately.
	     *
	     * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
	     * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
	     * by observing whether scroll bars are displayed, or character ranges used by a font face
	     * definition.
	     *
	     * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
	     * binding a URL value without further cooperation from the page will cause an information leak, and
	     * if so, it is just a leak, not a full blown XSS vulnerability.
	     *
	     * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
	     * code is permissive and allows URLs that sanitize otherwise.
	     */
	    var URL_RE = /^url\(([^)]+)\)$/;
	    /**
	     * Checks that quotes (" and ') are properly balanced inside a string. Assumes
	     * that neither escape (\) nor any other character that could result in
	     * breaking out of a string parsing context are allowed;
	     * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
	     *
	     * This code was taken from the Closure sanitization library.
	     */
	    function hasBalancedQuotes(value) {
	        var outsideSingle = true;
	        var outsideDouble = true;
	        for (var i = 0; i < value.length; i++) {
	            var c = value.charAt(i);
	            if (c === '\'' && outsideDouble) {
	                outsideSingle = !outsideSingle;
	            }
	            else if (c === '"' && outsideSingle) {
	                outsideDouble = !outsideDouble;
	            }
	        }
	        return outsideSingle && outsideDouble;
	    }
	    /**
	     * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
	     * value) and returns a value that is safe to use in a browser environment.
	     */
	    function sanitizeStyle(value) {
	        value = String(value).trim(); // Make sure it's actually a string.
	        if (!value)
	            return '';
	        // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
	        // reasoning behind this.
	        var urlMatch = value.match(URL_RE);
	        if ((urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1]) ||
	            value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
	            return value; // Safe style values.
	        }
	        if (_angular_core.isDevMode()) {
	            getDOM().log("WARNING: sanitizing unsafe style value " + value + " (see http://g.co/ng/security#xss).");
	        }
	        return 'unsafe';
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
	     * values to be safe to use in the different DOM contexts.
	     *
	     * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
	     * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
	     * the website.
	     *
	     * In specific situations, it might be necessary to disable sanitization, for example if the
	     * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
	     * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
	     * methods, and then binding to that value from the template.
	     *
	     * These situations should be very rare, and extraordinary care must be taken to avoid creating a
	     * Cross Site Scripting (XSS) security bug!
	     *
	     * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
	     * close as possible to the source of the value, to make it easy to verify no security bug is
	     * created by its use.
	     *
	     * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
	     * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
	     * code. The sanitizer leaves safe values intact.
	     *
	     * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
	     * sanitization for the value passed in. Carefully check and audit all values and code paths going
	     * into this call. Make sure any user data is appropriately escaped for this security context.
	     * For more detail, see the [Security Guide](http://g.co/ng/security).
	     *
	     * @stable
	     */
	    var DomSanitizer = (function () {
	        function DomSanitizer() {
	        }
	        return DomSanitizer;
	    }());
	    var DomSanitizerImpl = (function (_super) {
	        __extends$9(DomSanitizerImpl, _super);
	        function DomSanitizerImpl() {
	            _super.apply(this, arguments);
	        }
	        DomSanitizerImpl.prototype.sanitize = function (ctx, value) {
	            if (value == null)
	                return null;
	            switch (ctx) {
	                case _angular_core.SecurityContext.NONE:
	                    return value;
	                case _angular_core.SecurityContext.HTML:
	                    if (value instanceof SafeHtmlImpl)
	                        return value.changingThisBreaksApplicationSecurity;
	                    this.checkNotSafeValue(value, 'HTML');
	                    return sanitizeHtml(String(value));
	                case _angular_core.SecurityContext.STYLE:
	                    if (value instanceof SafeStyleImpl)
	                        return value.changingThisBreaksApplicationSecurity;
	                    this.checkNotSafeValue(value, 'Style');
	                    return sanitizeStyle(value);
	                case _angular_core.SecurityContext.SCRIPT:
	                    if (value instanceof SafeScriptImpl)
	                        return value.changingThisBreaksApplicationSecurity;
	                    this.checkNotSafeValue(value, 'Script');
	                    throw new Error('unsafe value used in a script context');
	                case _angular_core.SecurityContext.URL:
	                    if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
	                        // Allow resource URLs in URL contexts, they are strictly more trusted.
	                        return value.changingThisBreaksApplicationSecurity;
	                    }
	                    this.checkNotSafeValue(value, 'URL');
	                    return sanitizeUrl(String(value));
	                case _angular_core.SecurityContext.RESOURCE_URL:
	                    if (value instanceof SafeResourceUrlImpl) {
	                        return value.changingThisBreaksApplicationSecurity;
	                    }
	                    this.checkNotSafeValue(value, 'ResourceURL');
	                    throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
	                default:
	                    throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
	            }
	        };
	        DomSanitizerImpl.prototype.checkNotSafeValue = function (value, expectedType) {
	            if (value instanceof SafeValueImpl) {
	                throw new Error(("Required a safe " + expectedType + ", got a " + value.getTypeName() + " ") +
	                    "(see http://g.co/ng/security#xss)");
	            }
	        };
	        DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function (value) { return new SafeHtmlImpl(value); };
	        DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function (value) { return new SafeStyleImpl(value); };
	        DomSanitizerImpl.prototype.bypassSecurityTrustScript = function (value) { return new SafeScriptImpl(value); };
	        DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function (value) { return new SafeUrlImpl(value); };
	        DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
	            return new SafeResourceUrlImpl(value);
	        };
	        DomSanitizerImpl.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        DomSanitizerImpl.ctorParameters = [];
	        return DomSanitizerImpl;
	    }(DomSanitizer));
	    var SafeValueImpl = (function () {
	        function SafeValueImpl(changingThisBreaksApplicationSecurity) {
	            this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
	            // empty
	        }
	        SafeValueImpl.prototype.toString = function () {
	            return ("SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity) +
	                " (see http://g.co/ng/security#xss)";
	        };
	        return SafeValueImpl;
	    }());
	    var SafeHtmlImpl = (function (_super) {
	        __extends$9(SafeHtmlImpl, _super);
	        function SafeHtmlImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeHtmlImpl.prototype.getTypeName = function () { return 'HTML'; };
	        return SafeHtmlImpl;
	    }(SafeValueImpl));
	    var SafeStyleImpl = (function (_super) {
	        __extends$9(SafeStyleImpl, _super);
	        function SafeStyleImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeStyleImpl.prototype.getTypeName = function () { return 'Style'; };
	        return SafeStyleImpl;
	    }(SafeValueImpl));
	    var SafeScriptImpl = (function (_super) {
	        __extends$9(SafeScriptImpl, _super);
	        function SafeScriptImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeScriptImpl.prototype.getTypeName = function () { return 'Script'; };
	        return SafeScriptImpl;
	    }(SafeValueImpl));
	    var SafeUrlImpl = (function (_super) {
	        __extends$9(SafeUrlImpl, _super);
	        function SafeUrlImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeUrlImpl.prototype.getTypeName = function () { return 'URL'; };
	        return SafeUrlImpl;
	    }(SafeValueImpl));
	    var SafeResourceUrlImpl = (function (_super) {
	        __extends$9(SafeResourceUrlImpl, _super);
	        function SafeResourceUrlImpl() {
	            _super.apply(this, arguments);
	        }
	        SafeResourceUrlImpl.prototype.getTypeName = function () { return 'ResourceURL'; };
	        return SafeResourceUrlImpl;
	    }(SafeValueImpl));
	
	    var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
	        { provide: _angular_core.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
	        { provide: _angular_common.PlatformLocation, useClass: BrowserPlatformLocation }
	    ];
	    /**
	     * @security Replacing built-in sanitization providers exposes the application to XSS risks.
	     * Attacker-controlled data introduced by an unsanitized provider could expose your
	     * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
	     * @experimental
	     */
	    var BROWSER_SANITIZATION_PROVIDERS = [
	        { provide: _angular_core.Sanitizer, useExisting: DomSanitizer },
	        { provide: DomSanitizer, useClass: DomSanitizerImpl },
	    ];
	    /**
	     * @stable
	     */
	    var platformBrowser = _angular_core.createPlatformFactory(_angular_core.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
	    function initDomAdapter() {
	        BrowserDomAdapter.makeCurrent();
	        BrowserGetTestability.init();
	    }
	    function errorHandler() {
	        return new _angular_core.ErrorHandler();
	    }
	    function _document() {
	        return getDOM().defaultDoc();
	    }
	    function _resolveDefaultAnimationDriver() {
	        if (getDOM().supportsWebAnimation()) {
	            return new WebAnimationsDriver();
	        }
	        return AnimationDriver.NOOP;
	    }
	    /**
	     * The ng module for the browser.
	     *
	     * @stable
	     */
	    var BrowserModule = (function () {
	        function BrowserModule(parentModule) {
	            if (parentModule) {
	                throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
	            }
	        }
	        BrowserModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        providers: [
	                            BROWSER_SANITIZATION_PROVIDERS, { provide: _angular_core.ErrorHandler, useFactory: errorHandler, deps: [] },
	                            { provide: DOCUMENT, useFactory: _document, deps: [] },
	                            { provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true },
	                            { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true },
	                            { provide: EVENT_MANAGER_PLUGINS, useClass: HammerGesturesPlugin, multi: true },
	                            { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
	                            { provide: DomRootRenderer, useClass: DomRootRenderer_ },
	                            { provide: _angular_core.RootRenderer, useExisting: DomRootRenderer },
	                            { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
	                            { provide: AnimationDriver, useFactory: _resolveDefaultAnimationDriver }, DomSharedStylesHost,
	                            _angular_core.Testability, EventManager, ELEMENT_PROBE_PROVIDERS, Title
	                        ],
	                        exports: [_angular_common.CommonModule, _angular_core.ApplicationModule]
	                    },] },
	        ];
	        /** @nocollapse */
	        BrowserModule.ctorParameters = [
	            { type: BrowserModule, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.SkipSelf },] },
	        ];
	        return BrowserModule;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * JS version of browser APIs. This library can only run in the browser.
	     */
	    var win = typeof window !== 'undefined' && window || {};
	
	    var ChangeDetectionPerfRecord = (function () {
	        function ChangeDetectionPerfRecord(msPerTick, numTicks) {
	            this.msPerTick = msPerTick;
	            this.numTicks = numTicks;
	        }
	        return ChangeDetectionPerfRecord;
	    }());
	    /**
	     * Entry point for all Angular debug tools. This object corresponds to the `ng`
	     * global variable accessible in the dev console.
	     */
	    var AngularTools = (function () {
	        function AngularTools(ref) {
	            this.profiler = new AngularProfiler(ref);
	        }
	        return AngularTools;
	    }());
	    /**
	     * Entry point for all Angular profiling-related debug tools. This object
	     * corresponds to the `ng.profiler` in the dev console.
	     */
	    var AngularProfiler = (function () {
	        function AngularProfiler(ref) {
	            this.appRef = ref.injector.get(_angular_core.ApplicationRef);
	        }
	        /**
	         * Exercises change detection in a loop and then prints the average amount of
	         * time in milliseconds how long a single round of change detection takes for
	         * the current state of the UI. It runs a minimum of 5 rounds for a minimum
	         * of 500 milliseconds.
	         *
	         * Optionally, a user may pass a `config` parameter containing a map of
	         * options. Supported options are:
	         *
	         * `record` (boolean) - causes the profiler to record a CPU profile while
	         * it exercises the change detector. Example:
	         *
	         * ```
	         * ng.profiler.timeChangeDetection({record: true})
	         * ```
	         */
	        AngularProfiler.prototype.timeChangeDetection = function (config) {
	            var record = config && config['record'];
	            var profileName = 'Change Detection';
	            // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
	            var isProfilerAvailable = isPresent(win.console.profile);
	            if (record && isProfilerAvailable) {
	                win.console.profile(profileName);
	            }
	            var start = getDOM().performanceNow();
	            var numTicks = 0;
	            while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
	                this.appRef.tick();
	                numTicks++;
	            }
	            var end = getDOM().performanceNow();
	            if (record && isProfilerAvailable) {
	                // need to cast to <any> because type checker thinks there's no argument
	                // while in fact there is:
	                //
	                // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
	                win.console.profileEnd(profileName);
	            }
	            var msPerTick = (end - start) / numTicks;
	            win.console.log("ran " + numTicks + " change detection cycles");
	            win.console.log(msPerTick.toFixed(2) + " ms per check");
	            return new ChangeDetectionPerfRecord(msPerTick, numTicks);
	        };
	        return AngularProfiler;
	    }());
	
	    var context = global$1;
	    /**
	     * Enabled Angular 2 debug tools that are accessible via your browser's
	     * developer console.
	     *
	     * Usage:
	     *
	     * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
	     * 1. Type `ng.` (usually the console will show auto-complete suggestion)
	     * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
	     *    then hit Enter.
	     *
	     * @experimental All debugging apis are currently experimental.
	     */
	    function enableDebugTools(ref) {
	        context.ng = new AngularTools(ref);
	        return ref;
	    }
	    /**
	     * Disables Angular 2 tools.
	     *
	     * @experimental All debugging apis are currently experimental.
	     */
	    function disableDebugTools() {
	        delete context.ng;
	    }
	
	    /**
	     * Predicates for use with {@link DebugElement}'s query functions.
	     *
	     * @experimental All debugging apis are currently experimental.
	     */
	    var By = (function () {
	        function By() {
	        }
	        /**
	         * Match all elements.
	         *
	         * ## Example
	         *
	         * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
	         */
	        By.all = function () { return function (debugElement) { return true; }; };
	        /**
	         * Match elements by the given CSS selector.
	         *
	         * ## Example
	         *
	         * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
	         */
	        By.css = function (selector) {
	            return function (debugElement) {
	                return isPresent(debugElement.nativeElement) ?
	                    getDOM().elementMatches(debugElement.nativeElement, selector) :
	                    false;
	            };
	        };
	        /**
	         * Match elements that have the given directive present.
	         *
	         * ## Example
	         *
	         * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
	         */
	        By.directive = function (type) {
	            return function (debugElement) { return debugElement.providerTokens.indexOf(type) !== -1; };
	        };
	        return By;
	    }());
	
	    var __platform_browser_private__ = {
	        BrowserPlatformLocation: BrowserPlatformLocation,
	        DomAdapter: DomAdapter,
	        BrowserDomAdapter: BrowserDomAdapter,
	        BrowserGetTestability: BrowserGetTestability,
	        getDOM: getDOM,
	        setRootDomAdapter: setRootDomAdapter,
	        DomRootRenderer_: DomRootRenderer_,
	        DomRootRenderer: DomRootRenderer,
	        DomSharedStylesHost: DomSharedStylesHost,
	        SharedStylesHost: SharedStylesHost,
	        ELEMENT_PROBE_PROVIDERS: ELEMENT_PROBE_PROVIDERS,
	        DomEventsPlugin: DomEventsPlugin,
	        KeyEventsPlugin: KeyEventsPlugin,
	        HammerGesturesPlugin: HammerGesturesPlugin,
	        initDomAdapter: initDomAdapter,
	        INTERNAL_BROWSER_PLATFORM_PROVIDERS: INTERNAL_BROWSER_PLATFORM_PROVIDERS,
	        BROWSER_SANITIZATION_PROVIDERS: BROWSER_SANITIZATION_PROVIDERS
	    };
	
	    exports.BrowserModule = BrowserModule;
	    exports.platformBrowser = platformBrowser;
	    exports.Title = Title;
	    exports.disableDebugTools = disableDebugTools;
	    exports.enableDebugTools = enableDebugTools;
	    exports.AnimationDriver = AnimationDriver;
	    exports.By = By;
	    exports.NgProbeToken = NgProbeToken;
	    exports.DOCUMENT = DOCUMENT;
	    exports.EVENT_MANAGER_PLUGINS = EVENT_MANAGER_PLUGINS;
	    exports.EventManager = EventManager;
	    exports.HAMMER_GESTURE_CONFIG = HAMMER_GESTURE_CONFIG;
	    exports.HammerGestureConfig = HammerGestureConfig;
	    exports.DomSanitizer = DomSanitizer;
	    exports.__platform_browser_private__ = __platform_browser_private__;
	
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var http_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(2);
	__webpack_require__(21);
	var util_1 = __webpack_require__(23);
	/**
	* Angular 2 RESTClient class.
	*
	* @class RESTClient
	* @constructor
	*/
	var RESTClient = (function () {
	    function RESTClient(http) {
	        this.http = http;
	    }
	    RESTClient.prototype.getBaseUrl = function () {
	        return null;
	    };
	    ;
	    RESTClient.prototype.getDefaultHeaders = function () {
	        return null;
	    };
	    ;
	    /**
	    * Request Interceptor
	    *
	    * @method requestInterceptor
	    * @param {Request} req - request object
	    */
	    RESTClient.prototype.requestInterceptor = function (req) {
	        return req;
	    };
	    /**
	    * Response Interceptor
	    *
	    * @method responseInterceptor
	    * @param {Response} res - response object
	    * @returns {Response} res - transformed response object
	    */
	    RESTClient.prototype.responseInterceptor = function (res) {
	        return res;
	    };
	    RESTClient = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(http_1.Http)), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], RESTClient);
	    return RESTClient;
	}());
	exports.RESTClient = RESTClient;
	/**
	 * Set the base URL of REST resource
	 * @param {String} url - base URL
	 */
	function BaseUrl(url) {
	    return function (Target) {
	        Target.prototype.getBaseUrl = function () {
	            return url;
	        };
	        return Target;
	    };
	}
	exports.BaseUrl = BaseUrl;
	/**
	 * Set default headers for every method of the RESTClient
	 * @param {Object} headers - deafult headers in a key-value pair
	 */
	function DefaultHeaders(headers) {
	    return function (Target) {
	        Target.prototype.getDefaultHeaders = function () {
	            return headers;
	        };
	        return Target;
	    };
	}
	exports.DefaultHeaders = DefaultHeaders;
	/**
	 * Set custom headers for a REST method
	 * @param {Object} headersDef - custom headers in a key-value pair
	 */
	function Headers(headersDef) {
	    return function (target, propertyKey, descriptor) {
	        descriptor.headers = headersDef;
	        return descriptor;
	    };
	}
	exports.Headers = Headers;
	/**
	 * Defines the type(s) that the responses can produce
	 */
	function Produces(interceptor) {
	    return function (target, propertyKey, descriptor) {
	        descriptor.producer = function (res) {
	            if (interceptor) {
	                interceptor(res);
	            }
	            return res.json();
	        };
	        return descriptor;
	    };
	}
	exports.Produces = Produces;
	/**
	 * Path variable of a method's url, type: string
	 * @param {string} key - path key to bind value
	 */
	exports.Path = util_1.Builder.param('Path');
	/**
	 * Query value of a method's url, type: string
	 * @param {string} key - query key to bind value
	 */
	exports.Query = util_1.Builder.param('Query');
	/**
	 * Body of a REST method, type: key-value pair object
	 * Only one body per method!
	 */
	exports.Body = util_1.Builder.param('Body')('Body');
	/**
	 * Custom header of a REST method, type: string
	 * @param {string} key - header key to bind value
	 */
	exports.Header = util_1.Builder.param('Header');
	/**
	 * GET method
	 * @param {string} url - resource url of the method
	 */
	exports.GET = util_1.Builder.method(http_1.RequestMethod.Get);
	/**
	 * POST method
	 * @param {string} url - resource url of the method
	 */
	exports.POST = util_1.Builder.method(http_1.RequestMethod.Post);
	/**
	 * PUT method
	 * @param {string} url - resource url of the method
	 */
	exports.PUT = util_1.Builder.method(http_1.RequestMethod.Put);
	/**
	 * DELETE method
	 * @param {string} url - resource url of the method
	 */
	exports.DELETE = util_1.Builder.method(http_1.RequestMethod.Delete);
	/**
	 * HEAD method
	 * @param {string} url - resource url of the method
	 */
	exports.HEAD = util_1.Builder.method(http_1.RequestMethod.Head);


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(4);
	var map_1 = __webpack_require__(22);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(7);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	exports.MapOperator = MapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var http_1 = __webpack_require__(3);
	/**
	* Builds custom descriptors
	*
	* @class Builder
	*/
	var Builder = (function () {
	    function Builder() {
	    }
	    // Store request parameters
	    Builder.param = function (paramName) {
	        return function (key) {
	            return function (target, propertyKey, parameterIndex) {
	                var metadataKey = propertyKey + "_" + paramName + "_parameters";
	                var paramObj = {
	                    key: key,
	                    parameterIndex: parameterIndex
	                };
	                if (Array.isArray(target[metadataKey])) {
	                    target[metadataKey].push(paramObj);
	                }
	                else {
	                    target[metadataKey] = [paramObj];
	                }
	            };
	        };
	    };
	    // perform HTTP request
	    Builder.method = function (method) {
	        return function (url) {
	            return function (target, propertyKey, descriptor) {
	                var pPath = target[(propertyKey + "_Path_parameters")];
	                var pQuery = target[(propertyKey + "_Query_parameters")];
	                var pBody = target[(propertyKey + "_Body_parameters")];
	                var pHeader = target[(propertyKey + "_Header_parameters")];
	                descriptor.value = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    // Body
	                    var body = null;
	                    if (pBody) {
	                        body = JSON.stringify(args[pBody[0].parameterIndex]);
	                    }
	                    // Path
	                    var resUrl = url;
	                    if (pPath) {
	                        for (var k in pPath) {
	                            if (pPath.hasOwnProperty(k)) {
	                                resUrl = resUrl.replace('{' + pPath[k].key + '}', args[pPath[k].parameterIndex]);
	                            }
	                        }
	                    }
	                    // Query
	                    var search = new http_1.URLSearchParams();
	                    if (pQuery) {
	                        pQuery
	                            .filter(function (p) { return args[p.parameterIndex]; }) // filter out optional parameters
	                            .forEach(function (p) {
	                            var key = p.key;
	                            var value = args[p.parameterIndex];
	                            // if the value is a instance of Object, we stringify it
	                            if (value instanceof Object) {
	                                value = JSON.stringify(value);
	                            }
	                            search.set(key, value);
	                        });
	                    }
	                    // Headers
	                    // set class default headers
	                    var headers = new http_1.Headers(this.getDefaultHeaders());
	                    // set method specific headers
	                    for (var k in descriptor.headers) {
	                        if (descriptor.headers.hasOwnProperty(k)) {
	                            headers.append(k, descriptor.headers[k]);
	                        }
	                    }
	                    // set parameter specific headers
	                    if (pHeader) {
	                        for (var k in pHeader) {
	                            if (pHeader.hasOwnProperty(k)) {
	                                headers.append(pHeader[k].key, args[pHeader[k].parameterIndex]);
	                            }
	                        }
	                    }
	                    // Request options
	                    var options = new http_1.RequestOptions({
	                        method: method,
	                        url: this.getBaseUrl() + resUrl,
	                        headers: headers,
	                        body: body,
	                        search: search
	                    });
	                    var req = new http_1.Request(options);
	                    // intercept the request
	                    this.requestInterceptor(req);
	                    // make the request and store the observable for later transformation
	                    var observable = this.http.request(req);
	                    // global response interceptor
	                    observable = this.responseInterceptor(observable);
	                    // transform the obserable in accordance to the @Produces decorator
	                    if (descriptor.producer) {
	                        observable = observable.map(descriptor.producer);
	                    }
	                    return observable;
	                };
	                return descriptor;
	            };
	        };
	    };
	    return Builder;
	}());
	exports.Builder = Builder;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-http.js.map