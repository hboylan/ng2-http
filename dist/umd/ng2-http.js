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

	/**
	 * @license Angular v2.4.10
	 * (c) 2010-2017 Google, Inc. https://angular.io/
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
	     * \@experimental
	     */
	    var BrowserXhr = (function () {
	        function BrowserXhr() {
	        }
	        /**
	         * @return {?}
	         */
	        BrowserXhr.prototype.build = function () { return ((new XMLHttpRequest())); };
	        BrowserXhr.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BrowserXhr.ctorParameters = function () { return []; };
	        return BrowserXhr;
	    }());
	
	    var RequestMethod = {};
	    RequestMethod.Get = 0;
	    RequestMethod.Post = 1;
	    RequestMethod.Put = 2;
	    RequestMethod.Delete = 3;
	    RequestMethod.Options = 4;
	    RequestMethod.Head = 5;
	    RequestMethod.Patch = 6;
	    RequestMethod[RequestMethod.Get] = "Get";
	    RequestMethod[RequestMethod.Post] = "Post";
	    RequestMethod[RequestMethod.Put] = "Put";
	    RequestMethod[RequestMethod.Delete] = "Delete";
	    RequestMethod[RequestMethod.Options] = "Options";
	    RequestMethod[RequestMethod.Head] = "Head";
	    RequestMethod[RequestMethod.Patch] = "Patch";
	    var ReadyState = {};
	    ReadyState.Unsent = 0;
	    ReadyState.Open = 1;
	    ReadyState.HeadersReceived = 2;
	    ReadyState.Loading = 3;
	    ReadyState.Done = 4;
	    ReadyState.Cancelled = 5;
	    ReadyState[ReadyState.Unsent] = "Unsent";
	    ReadyState[ReadyState.Open] = "Open";
	    ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
	    ReadyState[ReadyState.Loading] = "Loading";
	    ReadyState[ReadyState.Done] = "Done";
	    ReadyState[ReadyState.Cancelled] = "Cancelled";
	    var ResponseType = {};
	    ResponseType.Basic = 0;
	    ResponseType.Cors = 1;
	    ResponseType.Default = 2;
	    ResponseType.Error = 3;
	    ResponseType.Opaque = 4;
	    ResponseType[ResponseType.Basic] = "Basic";
	    ResponseType[ResponseType.Cors] = "Cors";
	    ResponseType[ResponseType.Default] = "Default";
	    ResponseType[ResponseType.Error] = "Error";
	    ResponseType[ResponseType.Opaque] = "Opaque";
	    var ContentType = {};
	    ContentType.NONE = 0;
	    ContentType.JSON = 1;
	    ContentType.FORM = 2;
	    ContentType.FORM_DATA = 3;
	    ContentType.TEXT = 4;
	    ContentType.BLOB = 5;
	    ContentType.ARRAY_BUFFER = 6;
	    ContentType[ContentType.NONE] = "NONE";
	    ContentType[ContentType.JSON] = "JSON";
	    ContentType[ContentType.FORM] = "FORM";
	    ContentType[ContentType.FORM_DATA] = "FORM_DATA";
	    ContentType[ContentType.TEXT] = "TEXT";
	    ContentType[ContentType.BLOB] = "BLOB";
	    ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
	    var ResponseContentType = {};
	    ResponseContentType.Text = 0;
	    ResponseContentType.Json = 1;
	    ResponseContentType.ArrayBuffer = 2;
	    ResponseContentType.Blob = 3;
	    ResponseContentType[ResponseContentType.Text] = "Text";
	    ResponseContentType[ResponseContentType.Json] = "Json";
	    ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
	    ResponseContentType[ResponseContentType.Blob] = "Blob";
	
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
	     * import {Headers} from '\@angular/http';
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
	     * \@experimental
	     */
	    var Headers = (function () {
	        /**
	         * @param {?=} headers
	         */
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
	                headers.forEach(function (values, name) {
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
	         * @param {?} headersString
	         * @return {?}
	         */
	        Headers.fromResponseHeaderString = function (headersString) {
	            var /** @type {?} */ headers = new Headers();
	            headersString.split('\n').forEach(function (line) {
	                var /** @type {?} */ index = line.indexOf(':');
	                if (index > 0) {
	                    var /** @type {?} */ name_1 = line.slice(0, index);
	                    var /** @type {?} */ value = line.slice(index + 1).trim();
	                    headers.set(name_1, value);
	                }
	            });
	            return headers;
	        };
	        /**
	         * Appends a header to existing list of header values for a given header name.
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        Headers.prototype.append = function (name, value) {
	            var /** @type {?} */ values = this.getAll(name);
	            if (values === null) {
	                this.set(name, value);
	            }
	            else {
	                values.push(value);
	            }
	        };
	        /**
	         * Deletes all header values for the given name.
	         * @param {?} name
	         * @return {?}
	         */
	        Headers.prototype.delete = function (name) {
	            var /** @type {?} */ lcName = name.toLowerCase();
	            this._normalizedNames.delete(lcName);
	            this._headers.delete(lcName);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        Headers.prototype.forEach = function (fn) {
	            var _this = this;
	            this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
	        };
	        /**
	         * Returns first header that matches given name.
	         * @param {?} name
	         * @return {?}
	         */
	        Headers.prototype.get = function (name) {
	            var /** @type {?} */ values = this.getAll(name);
	            if (values === null) {
	                return null;
	            }
	            return values.length > 0 ? values[0] : null;
	        };
	        /**
	         * Checks for existence of header by given name.
	         * @param {?} name
	         * @return {?}
	         */
	        Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
	        /**
	         * Returns the names of the headers
	         * @return {?}
	         */
	        Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
	        /**
	         * Sets or overrides header value for given name.
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
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
	         * @return {?}
	         */
	        Headers.prototype.values = function () { return Array.from(this._headers.values()); };
	        /**
	         * @return {?}
	         */
	        Headers.prototype.toJSON = function () {
	            var _this = this;
	            var /** @type {?} */ serialized = {};
	            this._headers.forEach(function (values, name) {
	                var /** @type {?} */ split = [];
	                values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
	                serialized[_this._normalizedNames.get(name)] = split;
	            });
	            return serialized;
	        };
	        /**
	         * Returns list of header values for a given name.
	         * @param {?} name
	         * @return {?}
	         */
	        Headers.prototype.getAll = function (name) {
	            return this.has(name) ? this._headers.get(name.toLowerCase()) : null;
	        };
	        /**
	         * This method is not implemented.
	         * @return {?}
	         */
	        Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
	        /**
	         * @param {?} name
	         * @return {?}
	         */
	        Headers.prototype.mayBeSetNormalizedName = function (name) {
	            var /** @type {?} */ lcName = name.toLowerCase();
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
	     * {\@link Response}.
	     *
	     * This class is based on the `ResponseInit` description in the [Fetch
	     * Spec](https://fetch.spec.whatwg.org/#responseinit).
	     *
	     * All values are null by default. Typical defaults can be found in the
	     * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
	     *
	     * This class may be used in tests to build {\@link Response Responses} for
	     * mock responses (see {\@link MockBackend}).
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
	     *
	     * ```typescript
	     * import {ResponseOptions, Response} from '\@angular/http';
	     *
	     * var options = new ResponseOptions({
	     *   body: '{"name":"Jeff"}'
	     * });
	     * var res = new Response(options);
	     *
	     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	     * ```
	     *
	     * \@experimental
	     */
	    var ResponseOptions = (function () {
	        /**
	         * @param {?=} __0
	         */
	        function ResponseOptions(_a) {
	            var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
	            this.body = body != null ? body : null;
	            this.status = status != null ? status : null;
	            this.headers = headers != null ? headers : null;
	            this.statusText = statusText != null ? statusText : null;
	            this.type = type != null ? type : null;
	            this.url = url != null ? url : null;
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
	         * import {ResponseOptions, Response} from '\@angular/http';
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
	         * @param {?=} options
	         * @return {?}
	         */
	        ResponseOptions.prototype.merge = function (options) {
	            return new ResponseOptions({
	                body: options && options.body != null ? options.body : this.body,
	                status: options && options.status != null ? options.status : this.status,
	                headers: options && options.headers != null ? options.headers : this.headers,
	                statusText: options && options.statusText != null ? options.statusText : this.statusText,
	                type: options && options.type != null ? options.type : this.type,
	                url: options && options.url != null ? options.url : this.url,
	            });
	        };
	        return ResponseOptions;
	    }());
	    /**
	     * Subclass of {\@link ResponseOptions}, with default values.
	     *
	     * Default values:
	     *  * status: 200
	     *  * headers: empty {\@link Headers} object
	     *
	     * This class could be extended and bound to the {\@link ResponseOptions} class
	     * when configuring an {\@link Injector}, in order to override the default options
	     * used by {\@link Http} to create {\@link Response Responses}.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
	     *
	     * ```typescript
	     * import {provide} from '\@angular/core';
	     * import {bootstrap} from '\@angular/platform-browser/browser';
	     * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
	     * '\@angular/http';
	     * import {App} from './myapp';
	     *
	     * class MyOptions extends BaseResponseOptions {
	     *   headers:Headers = new Headers({network: 'github'});
	     * }
	     *
	     * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
	     * ```
	     *
	     * The options could also be extended when manually creating a {\@link Response}
	     * object.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
	     *
	     * ```
	     * import {BaseResponseOptions, Response} from '\@angular/http';
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
	     * \@experimental
	     */
	    var BaseResponseOptions = (function (_super) {
	        __extends$1(BaseResponseOptions, _super);
	        function BaseResponseOptions() {
	            _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() });
	        }
	        BaseResponseOptions.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BaseResponseOptions.ctorParameters = function () { return []; };
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
	     * {\@link Request}.
	     *
	     * \@experimental
	     * @abstract
	     */
	    var ConnectionBackend = (function () {
	        function ConnectionBackend() {
	        }
	        /**
	         * @abstract
	         * @param {?} request
	         * @return {?}
	         */
	        ConnectionBackend.prototype.createConnection = function (request) { };
	        return ConnectionBackend;
	    }());
	    /**
	     * Abstract class from which real connections are derived.
	     *
	     * \@experimental
	     * @abstract
	     */
	    var Connection = (function () {
	        function Connection() {
	        }
	        return Connection;
	    }());
	    /**
	     * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
	     *
	     * \@experimental
	     * @abstract
	     */
	    var XSRFStrategy = (function () {
	        function XSRFStrategy() {
	        }
	        /**
	         * @abstract
	         * @param {?} req
	         * @return {?}
	         */
	        XSRFStrategy.prototype.configureRequest = function (req) { };
	        return XSRFStrategy;
	    }());
	
	    /**
	     * @param {?} method
	     * @return {?}
	     */
	    function normalizeMethodName(method) {
	        if (typeof method !== 'string')
	            return method;
	        switch (method.toUpperCase()) {
	            case 'GET':
	                return RequestMethod.Get;
	            case 'POST':
	                return RequestMethod.Post;
	            case 'PUT':
	                return RequestMethod.Put;
	            case 'DELETE':
	                return RequestMethod.Delete;
	            case 'OPTIONS':
	                return RequestMethod.Options;
	            case 'HEAD':
	                return RequestMethod.Head;
	            case 'PATCH':
	                return RequestMethod.Patch;
	        }
	        throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
	    }
	    var /** @type {?} */ isSuccess = function (status) { return (status >= 200 && status < 300); };
	    /**
	     * @param {?} xhr
	     * @return {?}
	     */
	    function getResponseURL(xhr) {
	        if ('responseURL' in xhr) {
	            return xhr.responseURL;
	        }
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	            return xhr.getResponseHeader('X-Request-URL');
	        }
	        return;
	    }
	    /**
	     * @param {?} input
	     * @return {?}
	     */
	    function stringToArrayBuffer(input) {
	        var /** @type {?} */ view = new Uint16Array(input.length);
	        for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
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
	     * @param {?=} rawParams
	     * @return {?}
	     */
	    function paramParser(rawParams) {
	        if (rawParams === void 0) { rawParams = ''; }
	        var /** @type {?} */ map = new Map();
	        if (rawParams.length > 0) {
	            var /** @type {?} */ params = rawParams.split('&');
	            params.forEach(function (param) {
	                var /** @type {?} */ eqIdx = param.indexOf('=');
	                var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
	                var /** @type {?} */ list = map.get(key) || [];
	                list.push(val);
	                map.set(key, list);
	            });
	        }
	        return map;
	    }
	    /**
	     * \@experimental
	     *
	     */
	    var QueryEncoder = (function () {
	        function QueryEncoder() {
	        }
	        /**
	         * @param {?} k
	         * @return {?}
	         */
	        QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
	        /**
	         * @param {?} v
	         * @return {?}
	         */
	        QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
	        return QueryEncoder;
	    }());
	    /**
	     * @param {?} v
	     * @return {?}
	     */
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
	     * This class accepts an optional second parameter of ${\@link QueryEncoder},
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
	     * import {URLSearchParams, QueryEncoder} from '\@angular/http';
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
	     * \@experimental
	     */
	    var URLSearchParams = (function () {
	        /**
	         * @param {?=} rawParams
	         * @param {?=} queryEncoder
	         */
	        function URLSearchParams(rawParams, queryEncoder) {
	            if (rawParams === void 0) { rawParams = ''; }
	            if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
	            this.rawParams = rawParams;
	            this.queryEncoder = queryEncoder;
	            this.paramsMap = paramParser(rawParams);
	        }
	        /**
	         * @return {?}
	         */
	        URLSearchParams.prototype.clone = function () {
	            var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
	            clone.appendAll(this);
	            return clone;
	        };
	        /**
	         * @param {?} param
	         * @return {?}
	         */
	        URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
	        /**
	         * @param {?} param
	         * @return {?}
	         */
	        URLSearchParams.prototype.get = function (param) {
	            var /** @type {?} */ storedParam = this.paramsMap.get(param);
	            return Array.isArray(storedParam) ? storedParam[0] : null;
	        };
	        /**
	         * @param {?} param
	         * @return {?}
	         */
	        URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
	        /**
	         * @param {?} param
	         * @param {?} val
	         * @return {?}
	         */
	        URLSearchParams.prototype.set = function (param, val) {
	            if (val === void 0 || val === null) {
	                this.delete(param);
	                return;
	            }
	            var /** @type {?} */ list = this.paramsMap.get(param) || [];
	            list.length = 0;
	            list.push(val);
	            this.paramsMap.set(param, list);
	        };
	        /**
	         * @param {?} searchParams
	         * @return {?}
	         */
	        URLSearchParams.prototype.setAll = function (searchParams) {
	            var _this = this;
	            searchParams.paramsMap.forEach(function (value, param) {
	                var /** @type {?} */ list = _this.paramsMap.get(param) || [];
	                list.length = 0;
	                list.push(value[0]);
	                _this.paramsMap.set(param, list);
	            });
	        };
	        /**
	         * @param {?} param
	         * @param {?} val
	         * @return {?}
	         */
	        URLSearchParams.prototype.append = function (param, val) {
	            if (val === void 0 || val === null)
	                return;
	            var /** @type {?} */ list = this.paramsMap.get(param) || [];
	            list.push(val);
	            this.paramsMap.set(param, list);
	        };
	        /**
	         * @param {?} searchParams
	         * @return {?}
	         */
	        URLSearchParams.prototype.appendAll = function (searchParams) {
	            var _this = this;
	            searchParams.paramsMap.forEach(function (value, param) {
	                var /** @type {?} */ list = _this.paramsMap.get(param) || [];
	                for (var /** @type {?} */ i = 0; i < value.length; ++i) {
	                    list.push(value[i]);
	                }
	                _this.paramsMap.set(param, list);
	            });
	        };
	        /**
	         * @param {?} searchParams
	         * @return {?}
	         */
	        URLSearchParams.prototype.replaceAll = function (searchParams) {
	            var _this = this;
	            searchParams.paramsMap.forEach(function (value, param) {
	                var /** @type {?} */ list = _this.paramsMap.get(param) || [];
	                list.length = 0;
	                for (var /** @type {?} */ i = 0; i < value.length; ++i) {
	                    list.push(value[i]);
	                }
	                _this.paramsMap.set(param, list);
	            });
	        };
	        /**
	         * @return {?}
	         */
	        URLSearchParams.prototype.toString = function () {
	            var _this = this;
	            var /** @type {?} */ paramsList = [];
	            this.paramsMap.forEach(function (values, k) {
	                values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
	            });
	            return paramsList.join('&');
	        };
	        /**
	         * @param {?} param
	         * @return {?}
	         */
	        URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
	        return URLSearchParams;
	    }());
	
	    /**
	     * HTTP request body used by both {\@link Request} and {\@link Response}
	     * https://fetch.spec.whatwg.org/#body
	     * @abstract
	     */
	    var Body = (function () {
	        function Body() {
	        }
	        /**
	         * Attempts to return body as parsed `JSON` object, or raises an exception.
	         * @return {?}
	         */
	        Body.prototype.json = function () {
	            if (typeof this._body === 'string') {
	                return JSON.parse(/** @type {?} */ (this._body));
	            }
	            if (this._body instanceof ArrayBuffer) {
	                return JSON.parse(this.text());
	            }
	            return this._body;
	        };
	        /**
	         * Returns the body as a string, presuming `toString()` can be called on the response body.
	         * @return {?}
	         */
	        Body.prototype.text = function () {
	            if (this._body instanceof URLSearchParams) {
	                return this._body.toString();
	            }
	            if (this._body instanceof ArrayBuffer) {
	                return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
	            }
	            if (this._body == null) {
	                return '';
	            }
	            if (typeof this._body === 'object') {
	                return JSON.stringify(this._body, null, 2);
	            }
	            return this._body.toString();
	        };
	        /**
	         * Return the body as an ArrayBuffer
	         * @return {?}
	         */
	        Body.prototype.arrayBuffer = function () {
	            if (this._body instanceof ArrayBuffer) {
	                return (this._body);
	            }
	            return stringToArrayBuffer(this.text());
	        };
	        /**
	         * Returns the request's body as a Blob, assuming that body exists.
	         * @return {?}
	         */
	        Body.prototype.blob = function () {
	            if (this._body instanceof Blob) {
	                return (this._body);
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
	     * \@experimental
	     */
	    var Response = (function (_super) {
	        __extends$2(Response, _super);
	        /**
	         * @param {?} responseOptions
	         */
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
	        /**
	         * @return {?}
	         */
	        Response.prototype.toString = function () {
	            return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
	        };
	        return Response;
	    }(Body));
	
	    var /** @type {?} */ _nextRequestId = 0;
	    var /** @type {?} */ JSONP_HOME = '__ng_jsonp__';
	    var /** @type {?} */ _jsonpConnections = null;
	    /**
	     * @return {?}
	     */
	    function _getJsonpConnections() {
	        var /** @type {?} */ w = typeof window == 'object' ? window : {};
	        if (_jsonpConnections === null) {
	            _jsonpConnections = w[JSONP_HOME] = {};
	        }
	        return _jsonpConnections;
	    }
	    var BrowserJsonp = (function () {
	        function BrowserJsonp() {
	        }
	        /**
	         * @param {?} url
	         * @return {?}
	         */
	        BrowserJsonp.prototype.build = function (url) {
	            var /** @type {?} */ node = document.createElement('script');
	            node.src = url;
	            return node;
	        };
	        /**
	         * @return {?}
	         */
	        BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
	        /**
	         * @param {?} id
	         * @return {?}
	         */
	        BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
	        /**
	         * @param {?} id
	         * @param {?} connection
	         * @return {?}
	         */
	        BrowserJsonp.prototype.exposeConnection = function (id, connection) {
	            var /** @type {?} */ connections = _getJsonpConnections();
	            connections[id] = connection;
	        };
	        /**
	         * @param {?} id
	         * @return {?}
	         */
	        BrowserJsonp.prototype.removeConnection = function (id) {
	            var /** @type {?} */ connections = _getJsonpConnections();
	            connections[id] = null;
	        };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserJsonp.prototype.send = function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserJsonp.prototype.cleanup = function (node) {
	            if (node.parentNode) {
	                node.parentNode.removeChild(/** @type {?} */ ((node)));
	            }
	        };
	        BrowserJsonp.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BrowserJsonp.ctorParameters = function () { return []; };
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
	    var /** @type {?} */ JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
	    var /** @type {?} */ JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
	    /**
	     * Abstract base class for an in-flight JSONP request.
	     *
	     * \@experimental
	     * @abstract
	     */
	    var JSONPConnection = (function () {
	        function JSONPConnection() {
	        }
	        /**
	         * Callback called when the JSONP request completes, to notify the application
	         * of the new data.
	         * @abstract
	         * @param {?=} data
	         * @return {?}
	         */
	        JSONPConnection.prototype.finished = function (data) { };
	        return JSONPConnection;
	    }());
	    var JSONPConnection_ = (function (_super) {
	        __extends(JSONPConnection_, _super);
	        /**
	         * @param {?} req
	         * @param {?} _dom
	         * @param {?=} baseResponseOptions
	         */
	        function JSONPConnection_(req, _dom, baseResponseOptions) {
	            var _this = this;
	            _super.call(this);
	            this._dom = _dom;
	            this.baseResponseOptions = baseResponseOptions;
	            this._finished = false;
	            if (req.method !== RequestMethod.Get) {
	                throw new TypeError(JSONP_ERR_WRONG_METHOD);
	            }
	            this.request = req;
	            this.response = new rxjs_Observable.Observable(function (responseObserver) {
	                _this.readyState = ReadyState.Loading;
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
	                    if (_this.readyState === ReadyState.Cancelled)
	                        return;
	                    _this.readyState = ReadyState.Done;
	                    _dom.cleanup(script);
	                    if (!_this._finished) {
	                        var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
	                        if (baseResponseOptions) {
	                            responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
	                        }
	                        responseObserver.error(new Response(responseOptions_1));
	                        return;
	                    }
	                    var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
	                    if (_this.baseResponseOptions) {
	                        responseOptions = _this.baseResponseOptions.merge(responseOptions);
	                    }
	                    responseObserver.next(new Response(responseOptions));
	                    responseObserver.complete();
	                };
	                var onError = function (error) {
	                    if (_this.readyState === ReadyState.Cancelled)
	                        return;
	                    _this.readyState = ReadyState.Done;
	                    _dom.cleanup(script);
	                    var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
	                    if (baseResponseOptions) {
	                        responseOptions = baseResponseOptions.merge(responseOptions);
	                    }
	                    responseObserver.error(new Response(responseOptions));
	                };
	                script.addEventListener('load', onLoad);
	                script.addEventListener('error', onError);
	                _dom.send(script);
	                return function () {
	                    _this.readyState = ReadyState.Cancelled;
	                    script.removeEventListener('load', onLoad);
	                    script.removeEventListener('error', onError);
	                    _this._dom.cleanup(script);
	                };
	            });
	        }
	        /**
	         * @param {?=} data
	         * @return {?}
	         */
	        JSONPConnection_.prototype.finished = function (data) {
	            // Don't leak connections
	            this._finished = true;
	            this._dom.removeConnection(this._id);
	            if (this.readyState === ReadyState.Cancelled)
	                return;
	            this._responseData = data;
	        };
	        return JSONPConnection_;
	    }(JSONPConnection));
	    /**
	     * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
	     *
	     * \@experimental
	     * @abstract
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
	        /**
	         * @param {?} _browserJSONP
	         * @param {?} _baseResponseOptions
	         */
	        function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
	            _super.call(this);
	            this._browserJSONP = _browserJSONP;
	            this._baseResponseOptions = _baseResponseOptions;
	        }
	        /**
	         * @param {?} request
	         * @return {?}
	         */
	        JSONPBackend_.prototype.createConnection = function (request) {
	            return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
	        };
	        JSONPBackend_.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        JSONPBackend_.ctorParameters = function () { return [
	            { type: BrowserJsonp, },
	            { type: ResponseOptions, },
	        ]; };
	        return JSONPBackend_;
	    }(JSONPBackend));
	
	    var /** @type {?} */ XSSI_PREFIX = /^\)\]\}',?\n/;
	    /**
	     * Creates connections using `XMLHttpRequest`. Given a fully-qualified
	     * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
	     * request.
	     *
	     * This class would typically not be created or interacted with directly inside applications, though
	     * the {\@link MockConnection} may be interacted with in tests.
	     *
	     * \@experimental
	     */
	    var XHRConnection = (function () {
	        /**
	         * @param {?} req
	         * @param {?} browserXHR
	         * @param {?=} baseResponseOptions
	         */
	        function XHRConnection(req, browserXHR, baseResponseOptions) {
	            var _this = this;
	            this.request = req;
	            this.response = new rxjs_Observable.Observable(function (responseObserver) {
	                var _xhr = browserXHR.build();
	                _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
	                if (req.withCredentials != null) {
	                    _xhr.withCredentials = req.withCredentials;
	                }
	                // load event handler
	                var onLoad = function () {
	                    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	                    var status = _xhr.status === 1223 ? 204 : _xhr.status;
	                    var body = null;
	                    // HTTP 204 means no content
	                    if (status !== 204) {
	                        // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	                        // response/responseType properties were introduced in ResourceLoader Level2 spec
	                        // (supported by IE10)
	                        body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
	                        // Implicitly strip a potential XSSI prefix.
	                        if (typeof body === 'string') {
	                            body = body.replace(XSSI_PREFIX, '');
	                        }
	                    }
	                    // fix status code when it is 0 (0 status is undocumented).
	                    // Occurs when accessing file resources or on Android 4.1 stock browser
	                    // while retrieving files from application cache.
	                    if (status === 0) {
	                        status = body ? 200 : 0;
	                    }
	                    var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
	                    // IE 9 does not provide the way to get URL of response
	                    var url = getResponseURL(_xhr) || req.url;
	                    var statusText = _xhr.statusText || 'OK';
	                    var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
	                    if (baseResponseOptions != null) {
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
	                        type: ResponseType.Error,
	                        status: _xhr.status,
	                        statusText: _xhr.statusText,
	                    });
	                    if (baseResponseOptions != null) {
	                        responseOptions = baseResponseOptions.merge(responseOptions);
	                    }
	                    responseObserver.error(new Response(responseOptions));
	                };
	                _this.setDetectedContentType(req, _xhr);
	                if (req.headers == null) {
	                    req.headers = new Headers();
	                }
	                if (!req.headers.has('Accept')) {
	                    req.headers.append('Accept', 'application/json, text/plain, */*');
	                }
	                req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
	                // Select the correct buffer type to store the response
	                if (req.responseType != null && _xhr.responseType != null) {
	                    switch (req.responseType) {
	                        case ResponseContentType.ArrayBuffer:
	                            _xhr.responseType = 'arraybuffer';
	                            break;
	                        case ResponseContentType.Json:
	                            _xhr.responseType = 'json';
	                            break;
	                        case ResponseContentType.Text:
	                            _xhr.responseType = 'text';
	                            break;
	                        case ResponseContentType.Blob:
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
	        /**
	         * @param {?} req
	         * @param {?} _xhr
	         * @return {?}
	         */
	        XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
	            // Skip if a custom Content-Type header is provided
	            if (req.headers != null && req.headers.get('Content-Type') != null) {
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
	                    var /** @type {?} */ blob = req.blob();
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
	     * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
	     * for more information on XSRF.
	     *
	     * Applications can configure custom cookie and header names by binding an instance of this class
	     * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
	     * details.
	     *
	     * \@experimental
	     */
	    var CookieXSRFStrategy = (function () {
	        /**
	         * @param {?=} _cookieName
	         * @param {?=} _headerName
	         */
	        function CookieXSRFStrategy(_cookieName, _headerName) {
	            if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
	            if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
	            this._cookieName = _cookieName;
	            this._headerName = _headerName;
	        }
	        /**
	         * @param {?} req
	         * @return {?}
	         */
	        CookieXSRFStrategy.prototype.configureRequest = function (req) {
	            var /** @type {?} */ xsrfToken = _angular_platformBrowser.__platform_browser_private__.getDOM().getCookie(this._cookieName);
	            if (xsrfToken) {
	                req.headers.set(this._headerName, xsrfToken);
	            }
	        };
	        return CookieXSRFStrategy;
	    }());
	    /**
	     * Creates {\@link XHRConnection} instances.
	     *
	     * This class would typically not be used by end users, but could be
	     * overridden if a different backend implementation should be used,
	     * such as in a node backend.
	     *
	     * ### Example
	     *
	     * ```
	     * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
	     * \@Component({
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
	     * \@experimental
	     */
	    var XHRBackend = (function () {
	        /**
	         * @param {?} _browserXHR
	         * @param {?} _baseResponseOptions
	         * @param {?} _xsrfStrategy
	         */
	        function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
	            this._browserXHR = _browserXHR;
	            this._baseResponseOptions = _baseResponseOptions;
	            this._xsrfStrategy = _xsrfStrategy;
	        }
	        /**
	         * @param {?} request
	         * @return {?}
	         */
	        XHRBackend.prototype.createConnection = function (request) {
	            this._xsrfStrategy.configureRequest(request);
	            return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
	        };
	        XHRBackend.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        XHRBackend.ctorParameters = function () { return [
	            { type: BrowserXhr, },
	            { type: ResponseOptions, },
	            { type: XSRFStrategy, },
	        ]; };
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
	     * {\@link Request}.
	     *
	     * This class is based on the `RequestInit` description in the [Fetch
	     * Spec](https://fetch.spec.whatwg.org/#requestinit).
	     *
	     * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
	     * class, which sub-classes `RequestOptions`.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
	     *
	     * ```typescript
	     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
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
	     * \@experimental
	     */
	    var RequestOptions = (function () {
	        /**
	         * @param {?=} __0
	         */
	        function RequestOptions(_a) {
	            var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search, withCredentials = _b.withCredentials, responseType = _b.responseType;
	            this.method = method != null ? normalizeMethodName(method) : null;
	            this.headers = headers != null ? headers : null;
	            this.body = body != null ? body : null;
	            this.url = url != null ? url : null;
	            this.search =
	                search != null ? (typeof search === 'string' ? new URLSearchParams(search) : search) : null;
	            this.withCredentials = withCredentials != null ? withCredentials : null;
	            this.responseType = responseType != null ? responseType : null;
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
	         * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
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
	         * @param {?=} options
	         * @return {?}
	         */
	        RequestOptions.prototype.merge = function (options) {
	            return new RequestOptions({
	                method: options && options.method != null ? options.method : this.method,
	                headers: options && options.headers != null ? options.headers : new Headers(this.headers),
	                body: options && options.body != null ? options.body : this.body,
	                url: options && options.url != null ? options.url : this.url,
	                search: options && options.search != null ?
	                    (typeof options.search === 'string' ? new URLSearchParams(options.search) :
	                        options.search.clone()) :
	                    this.search,
	                withCredentials: options && options.withCredentials != null ? options.withCredentials :
	                    this.withCredentials,
	                responseType: options && options.responseType != null ? options.responseType :
	                    this.responseType
	            });
	        };
	        return RequestOptions;
	    }());
	    /**
	     * Subclass of {\@link RequestOptions}, with default values.
	     *
	     * Default values:
	     *  * method: {\@link RequestMethod RequestMethod.Get}
	     *  * headers: empty {\@link Headers} object
	     *
	     * This class could be extended and bound to the {\@link RequestOptions} class
	     * when configuring an {\@link Injector}, in order to override the default options
	     * used by {\@link Http} to create and send {\@link Request Requests}.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
	     *
	     * ```typescript
	     * import {provide} from '\@angular/core';
	     * import {bootstrap} from '\@angular/platform-browser/browser';
	     * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from '\@angular/http';
	     * import {App} from './myapp';
	     *
	     * class MyOptions extends BaseRequestOptions {
	     *   search: string = 'coreTeam=true';
	     * }
	     *
	     * bootstrap(App, [HTTP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}]);
	     * ```
	     *
	     * The options could also be extended when manually creating a {\@link Request}
	     * object.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
	     *
	     * ```
	     * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
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
	     * \@experimental
	     */
	    var BaseRequestOptions = (function (_super) {
	        __extends$3(BaseRequestOptions, _super);
	        function BaseRequestOptions() {
	            _super.call(this, { method: RequestMethod.Get, headers: new Headers() });
	        }
	        BaseRequestOptions.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BaseRequestOptions.ctorParameters = function () { return []; };
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
	    /**
	     * Creates `Request` instances from provided values.
	     *
	     * The Request's interface is inspired by the Request constructor defined in the [Fetch
	     * Spec](https://fetch.spec.whatwg.org/#request-class),
	     * but is considered a static value whose body can be accessed many times. There are other
	     * differences in the implementation, but this is the most significant.
	     *
	     * `Request` instances are typically created by higher-level classes, like {\@link Http} and
	     * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
	     * One such example is when creating services that wrap higher-level services, like {\@link Http},
	     * where it may be useful to generate a `Request` with arbitrary headers and search params.
	     *
	     * ```typescript
	     * import {Injectable, Injector} from '\@angular/core';
	     * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
	     *
	     * \@Injectable()
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
	     * \@experimental
	     */
	    var Request = (function (_super) {
	        __extends$5(Request, _super);
	        /**
	         * @param {?} requestOptions
	         */
	        function Request(requestOptions) {
	            _super.call(this);
	            // TODO: assert that url is present
	            var url = requestOptions.url;
	            this.url = requestOptions.url;
	            if (requestOptions.search) {
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
	            this.headers = new Headers(requestOptions.headers);
	            this.contentType = this.detectContentType();
	            this.withCredentials = requestOptions.withCredentials;
	            this.responseType = requestOptions.responseType;
	        }
	        /**
	         * Returns the content type enum based on header options.
	         * @return {?}
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
	                    return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
	                default:
	                    return this.detectContentTypeFromBody();
	            }
	        };
	        /**
	         * Returns the content type of request's body based on its type.
	         * @return {?}
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
	            else if (this._body && typeof this._body === 'object') {
	                return ContentType.JSON;
	            }
	            else {
	                return ContentType.TEXT;
	            }
	        };
	        /**
	         * Returns the request's body according to its type. If body is undefined, return
	         * null.
	         * @return {?}
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
	    var /** @type {?} */ noop = function () { };
	    var /** @type {?} */ w = typeof window == 'object' ? window : noop;
	    var /** @type {?} */ FormData = ((w) /** TODO #9100 */)['FormData'] || noop;
	    var /** @type {?} */ Blob$1 = ((w) /** TODO #9100 */)['Blob'] || noop;
	    var /** @type {?} */ ArrayBuffer$1 = ((w) /** TODO #9100 */)['ArrayBuffer'] || noop;
	
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
	    /**
	     * @param {?} backend
	     * @param {?} request
	     * @return {?}
	     */
	    function httpRequest(backend, request) {
	        return backend.createConnection(request).response;
	    }
	    /**
	     * @param {?} defaultOpts
	     * @param {?} providedOpts
	     * @param {?} method
	     * @param {?} url
	     * @return {?}
	     */
	    function mergeOptions(defaultOpts, providedOpts, method, url) {
	        var /** @type {?} */ newOptions = defaultOpts;
	        if (providedOpts) {
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
	        return newOptions.merge(new RequestOptions({ method: method, url: url }));
	    }
	    /**
	     * Performs http requests using `XMLHttpRequest` as the default backend.
	     *
	     * `Http` is available as an injectable class, with methods to perform http requests. Calling
	     * `request` returns an `Observable` which will emit a single {\@link Response} when a
	     * response is received.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * import {Http, HTTP_PROVIDERS} from '\@angular/http';
	     * import 'rxjs/add/operator/map'
	     * \@Component({
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
	     * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
	     * the {\@link XHRBackend} provider, as in the following example:
	     *
	     * ### Example
	     *
	     * ```typescript
	     * import {BaseRequestOptions, Http} from '\@angular/http';
	     * import {MockBackend} from '\@angular/http/testing';
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
	     * \@experimental
	     */
	    var Http = (function () {
	        /**
	         * @param {?} _backend
	         * @param {?} _defaultOptions
	         */
	        function Http(_backend, _defaultOptions) {
	            this._backend = _backend;
	            this._defaultOptions = _defaultOptions;
	        }
	        /**
	         * Performs any type of http request. First argument is required, and can either be a url or
	         * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
	         * object can be provided as the 2nd argument. The options object will be merged with the values
	         * of {\@link BaseRequestOptions} before performing the request.
	         * @param {?} url
	         * @param {?=} options
	         * @return {?}
	         */
	        Http.prototype.request = function (url, options) {
	            var /** @type {?} */ responseObservable;
	            if (typeof url === 'string') {
	                responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url))));
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
	         * @param {?} url
	         * @param {?=} options
	         * @return {?}
	         */
	        Http.prototype.get = function (url, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
	        };
	        /**
	         * Performs a request with `post` http method.
	         * @param {?} url
	         * @param {?} body
	         * @param {?=} options
	         * @return {?}
	         */
	        Http.prototype.post = function (url, body, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
	        };
	        /**
	         * Performs a request with `put` http method.
	         * @param {?} url
	         * @param {?} body
	         * @param {?=} options
	         * @return {?}
	         */
	        Http.prototype.put = function (url, body, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
	        };
	        /**
	         * Performs a request with `delete` http method.
	         * @param {?} url
	         * @param {?=} options
	         * @return {?}
	         */
	        Http.prototype.delete = function (url, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
	        };
	        /**
	         * Performs a request with `patch` http method.
	         * @param {?} url
	         * @param {?} body
	         * @param {?=} options
	         * @return {?}
	         */
	        Http.prototype.patch = function (url, body, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
	        };
	        /**
	         * Performs a request with `head` http method.
	         * @param {?} url
	         * @param {?=} options
	         * @return {?}
	         */
	        Http.prototype.head = function (url, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
	        };
	        /**
	         * Performs a request with `options` http method.
	         * @param {?} url
	         * @param {?=} options
	         * @return {?}
	         */
	        Http.prototype.options = function (url, options) {
	            return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
	        };
	        Http.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        Http.ctorParameters = function () { return [
	            { type: ConnectionBackend, },
	            { type: RequestOptions, },
	        ]; };
	        return Http;
	    }());
	    /**
	     * \@experimental
	     */
	    var Jsonp = (function (_super) {
	        __extends$4(Jsonp, _super);
	        /**
	         * @param {?} backend
	         * @param {?} defaultOptions
	         */
	        function Jsonp(backend, defaultOptions) {
	            _super.call(this, backend, defaultOptions);
	        }
	        /**
	         * Performs any type of http request. First argument is required, and can either be a url or
	         * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
	         * object can be provided as the 2nd argument. The options object will be merged with the values
	         * of {\@link BaseRequestOptions} before performing the request.
	         *
	         * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
	         * supported by all current browsers. Because JSONP creates a `<script>` element with
	         * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
	         * source could expose your application to XSS risks. Data exposed by JSONP may also be
	         * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
	         * future security issues (e.g. content sniffing).  For more detail, see the
	         * [Security Guide](http://g.co/ng/security).
	         * @param {?} url
	         * @param {?=} options
	         * @return {?}
	         */
	        Jsonp.prototype.request = function (url, options) {
	            var /** @type {?} */ responseObservable;
	            if (typeof url === 'string') {
	                url =
	                    new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url)));
	            }
	            if (url instanceof Request) {
	                if (url.method !== RequestMethod.Get) {
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
	        Jsonp.ctorParameters = function () { return [
	            { type: ConnectionBackend, },
	            { type: RequestOptions, },
	        ]; };
	        return Jsonp;
	    }(Http));
	
	    /**
	     * @return {?}
	     */
	    function _createDefaultCookieXSRFStrategy() {
	        return new CookieXSRFStrategy();
	    }
	    /**
	     * @param {?} xhrBackend
	     * @param {?} requestOptions
	     * @return {?}
	     */
	    function httpFactory(xhrBackend, requestOptions) {
	        return new Http(xhrBackend, requestOptions);
	    }
	    /**
	     * @param {?} jsonpBackend
	     * @param {?} requestOptions
	     * @return {?}
	     */
	    function jsonpFactory(jsonpBackend, requestOptions) {
	        return new Jsonp(jsonpBackend, requestOptions);
	    }
	    /**
	     * The module that includes http's providers
	     *
	     * \@experimental
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
	        HttpModule.ctorParameters = function () { return []; };
	        return HttpModule;
	    }());
	    /**
	     * The module that includes jsonp's providers
	     *
	     * \@experimental
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
	        JsonpModule.ctorParameters = function () { return []; };
	        return JsonpModule;
	    }());
	
	    /**
	     * @stable
	     */
	    var /** @type {?} */ VERSION = new _angular_core.Version('2.4.10');
	
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
	    exports.ReadyState = ReadyState;
	    exports.RequestMethod = RequestMethod;
	    exports.ResponseContentType = ResponseContentType;
	    exports.ResponseType = ResponseType;
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
	    exports.VERSION = VERSION;
	
	}));

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
	 * @license Angular v2.4.10
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(19), __webpack_require__(2)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.platformBrowser = global.ng.platformBrowser || {}),global.ng.common,global.ng.core));
	}(this, function (exports,_angular_common,core) { 'use strict';
	
	    var /** @type {?} */ DebugDomRootRenderer = core.__core_private__.DebugDomRootRenderer;
	    var /** @type {?} */ NoOpAnimationPlayer = core.__core_private__.NoOpAnimationPlayer;
	
	    /**
	     * \@experimental
	     */
	    var NoOpAnimationDriver = (function () {
	        function NoOpAnimationDriver() {
	        }
	        /**
	         * @param {?} element
	         * @param {?} startingStyles
	         * @param {?} keyframes
	         * @param {?} duration
	         * @param {?} delay
	         * @param {?} easing
	         * @param {?=} previousPlayers
	         * @return {?}
	         */
	        NoOpAnimationDriver.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {
	            if (previousPlayers === void 0) { previousPlayers = []; }
	            return new NoOpAnimationPlayer();
	        };
	        return NoOpAnimationDriver;
	    }());
	    /**
	     * \@experimental
	     * @abstract
	     */
	    var AnimationDriver = (function () {
	        function AnimationDriver() {
	        }
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} startingStyles
	         * @param {?} keyframes
	         * @param {?} duration
	         * @param {?} delay
	         * @param {?} easing
	         * @param {?=} previousPlayers
	         * @return {?}
	         */
	        AnimationDriver.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing, previousPlayers) { };
	        AnimationDriver.NOOP = new NoOpAnimationDriver();
	        return AnimationDriver;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var /** @type {?} */ globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = (self);
	        }
	        else {
	            globalScope = (global);
	        }
	    }
	    else {
	        globalScope = (window);
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var /** @type {?} */ global$1 = globalScope;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPresent(obj) {
	        return obj != null;
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isBlank(obj) {
	        return obj == null;
	    }
	    /**
	     * @param {?} token
	     * @return {?}
	     */
	    function stringify(token) {
	        if (typeof token === 'string') {
	            return token;
	        }
	        if (token == null) {
	            return '' + token;
	        }
	        if (token.overriddenName) {
	            return "" + token.overriddenName;
	        }
	        if (token.name) {
	            return "" + token.name;
	        }
	        var /** @type {?} */ res = token.toString();
	        var /** @type {?} */ newLineIndex = res.indexOf('\n');
	        return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
	    }
	    /**
	     * @param {?} global
	     * @param {?} path
	     * @param {?} value
	     * @return {?}
	     */
	    function setValueOnPath(global, path, value) {
	        var /** @type {?} */ parts = path.split('.');
	        var /** @type {?} */ obj = global;
	        while (parts.length > 1) {
	            var /** @type {?} */ name_1 = parts.shift();
	            if (obj.hasOwnProperty(name_1) && obj[name_1] != null) {
	                obj = obj[name_1];
	            }
	            else {
	                obj = obj[name_1] = {};
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
	    var /** @type {?} */ _DOM = null;
	    /**
	     * @return {?}
	     */
	    function getDOM() {
	        return _DOM;
	    }
	    /**
	     * @param {?} adapter
	     * @return {?}
	     */
	    function setRootDomAdapter(adapter) {
	        if (!_DOM) {
	            _DOM = adapter;
	        }
	    }
	    /**
	     * Provides DOM operations in an environment-agnostic way.
	     *
	     * \@security Tread carefully! Interacting with the DOM directly is dangerous and
	     * can introduce XSS risks.
	     * @abstract
	     */
	    var DomAdapter = (function () {
	        function DomAdapter() {
	            this.resourceLoaderType = null;
	        }
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} name
	         * @return {?}
	         */
	        DomAdapter.prototype.hasProperty = function (element /** TODO #9100 */, name) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setProperty = function (el, name, value) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} name
	         * @return {?}
	         */
	        DomAdapter.prototype.getProperty = function (el, name) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} methodName
	         * @param {?} args
	         * @return {?}
	         */
	        DomAdapter.prototype.invoke = function (el, methodName, args) { };
	        /**
	         * @abstract
	         * @param {?} error
	         * @return {?}
	         */
	        DomAdapter.prototype.logError = function (error) { };
	        /**
	         * @abstract
	         * @param {?} error
	         * @return {?}
	         */
	        DomAdapter.prototype.log = function (error) { };
	        /**
	         * @abstract
	         * @param {?} error
	         * @return {?}
	         */
	        DomAdapter.prototype.logGroup = function (error) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.logGroupEnd = function () { };
	        Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
	            /**
	             * Maps attribute names to their corresponding property names for cases
	             * where attribute name doesn't match property name.
	             * @return {?}
	             */
	            get: function () { return this._attrToPropMap; },
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) { this._attrToPropMap = value; },
	            enumerable: true,
	            configurable: true
	        });
	        ;
	        ;
	        /**
	         * @abstract
	         * @param {?} templateHtml
	         * @return {?}
	         */
	        DomAdapter.prototype.parse = function (templateHtml) { };
	        /**
	         * @abstract
	         * @param {?} selector
	         * @return {?}
	         */
	        DomAdapter.prototype.query = function (selector) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} selector
	         * @return {?}
	         */
	        DomAdapter.prototype.querySelector = function (el /** TODO #9100 */, selector) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} selector
	         * @return {?}
	         */
	        DomAdapter.prototype.querySelectorAll = function (el /** TODO #9100 */, selector) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} evt
	         * @param {?} listener
	         * @return {?}
	         */
	        DomAdapter.prototype.on = function (el /** TODO #9100 */, evt /** TODO #9100 */, listener) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} evt
	         * @param {?} listener
	         * @return {?}
	         */
	        DomAdapter.prototype.onAndCancel = function (el /** TODO #9100 */, evt /** TODO #9100 */, listener) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} evt
	         * @return {?}
	         */
	        DomAdapter.prototype.dispatchEvent = function (el /** TODO #9100 */, evt) { };
	        /**
	         * @abstract
	         * @param {?} eventType
	         * @return {?}
	         */
	        DomAdapter.prototype.createMouseEvent = function (eventType) { };
	        /**
	         * @abstract
	         * @param {?} eventType
	         * @return {?}
	         */
	        DomAdapter.prototype.createEvent = function (eventType) { };
	        /**
	         * @abstract
	         * @param {?} evt
	         * @return {?}
	         */
	        DomAdapter.prototype.preventDefault = function (evt) { };
	        /**
	         * @abstract
	         * @param {?} evt
	         * @return {?}
	         */
	        DomAdapter.prototype.isPrevented = function (evt) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getInnerHTML = function (el) { };
	        /**
	         * Returns content if el is a <template> element, null otherwise.
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getTemplateContent = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getOuterHTML = function (el) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.nodeName = function (node) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.nodeValue = function (node) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.type = function (node) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.content = function (node) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.firstChild = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.nextSibling = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.parentElement = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.childNodes = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.childNodesAsList = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.clearNodes = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.appendChild = function (el /** TODO #9100 */, node) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.removeChild = function (el /** TODO #9100 */, node) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} newNode
	         * @param {?} oldNode
	         * @return {?}
	         */
	        DomAdapter.prototype.replaceChild = function (el /** TODO #9100 */, newNode /** TODO #9100 */, oldNode) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.remove = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.insertBefore = function (el /** TODO #9100 */, node) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} nodes
	         * @return {?}
	         */
	        DomAdapter.prototype.insertAllBefore = function (el /** TODO #9100 */, nodes) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.insertAfter = function (el /** TODO #9100 */, node) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setInnerHTML = function (el /** TODO #9100 */, value) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getText = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setText = function (el /** TODO #9100 */, value) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getValue = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setValue = function (el /** TODO #9100 */, value) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getChecked = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setChecked = function (el /** TODO #9100 */, value) { };
	        /**
	         * @abstract
	         * @param {?} text
	         * @return {?}
	         */
	        DomAdapter.prototype.createComment = function (text) { };
	        /**
	         * @abstract
	         * @param {?} html
	         * @return {?}
	         */
	        DomAdapter.prototype.createTemplate = function (html) { };
	        /**
	         * @abstract
	         * @param {?} tagName
	         * @param {?=} doc
	         * @return {?}
	         */
	        DomAdapter.prototype.createElement = function (tagName /** TODO #9100 */, doc) { };
	        /**
	         * @abstract
	         * @param {?} ns
	         * @param {?} tagName
	         * @param {?=} doc
	         * @return {?}
	         */
	        DomAdapter.prototype.createElementNS = function (ns, tagName, doc) { };
	        /**
	         * @abstract
	         * @param {?} text
	         * @param {?=} doc
	         * @return {?}
	         */
	        DomAdapter.prototype.createTextNode = function (text, doc) { };
	        /**
	         * @abstract
	         * @param {?} attrName
	         * @param {?} attrValue
	         * @param {?=} doc
	         * @return {?}
	         */
	        DomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) { };
	        /**
	         * @abstract
	         * @param {?} css
	         * @param {?=} doc
	         * @return {?}
	         */
	        DomAdapter.prototype.createStyleElement = function (css, doc) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.createShadowRoot = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getShadowRoot = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getHost = function (el) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getDistributedNodes = function (el) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.clone /*<T extends Node>*/ = function (node) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} name
	         * @return {?}
	         */
	        DomAdapter.prototype.getElementsByClassName = function (element /** TODO #9100 */, name) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} name
	         * @return {?}
	         */
	        DomAdapter.prototype.getElementsByTagName = function (element /** TODO #9100 */, name) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @return {?}
	         */
	        DomAdapter.prototype.classList = function (element) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} className
	         * @return {?}
	         */
	        DomAdapter.prototype.addClass = function (element /** TODO #9100 */, className) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} className
	         * @return {?}
	         */
	        DomAdapter.prototype.removeClass = function (element /** TODO #9100 */, className) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} className
	         * @return {?}
	         */
	        DomAdapter.prototype.hasClass = function (element /** TODO #9100 */, className) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} styleName
	         * @param {?} styleValue
	         * @return {?}
	         */
	        DomAdapter.prototype.setStyle = function (element /** TODO #9100 */, styleName, styleValue) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} styleName
	         * @return {?}
	         */
	        DomAdapter.prototype.removeStyle = function (element /** TODO #9100 */, styleName) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} styleName
	         * @return {?}
	         */
	        DomAdapter.prototype.getStyle = function (element /** TODO #9100 */, styleName) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} styleName
	         * @param {?=} styleValue
	         * @return {?}
	         */
	        DomAdapter.prototype.hasStyle = function (element /** TODO #9100 */, styleName, styleValue) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @return {?}
	         */
	        DomAdapter.prototype.tagName = function (element) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @return {?}
	         */
	        DomAdapter.prototype.attributeMap = function (element) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} attribute
	         * @return {?}
	         */
	        DomAdapter.prototype.hasAttribute = function (element /** TODO #9100 */, attribute) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} ns
	         * @param {?} attribute
	         * @return {?}
	         */
	        DomAdapter.prototype.hasAttributeNS = function (element /** TODO #9100 */, ns, attribute) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} attribute
	         * @return {?}
	         */
	        DomAdapter.prototype.getAttribute = function (element /** TODO #9100 */, attribute) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} ns
	         * @param {?} attribute
	         * @return {?}
	         */
	        DomAdapter.prototype.getAttributeNS = function (element /** TODO #9100 */, ns, attribute) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setAttribute = function (element /** TODO #9100 */, name, value) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} ns
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setAttributeNS = function (element /** TODO #9100 */, ns, name, value) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} attribute
	         * @return {?}
	         */
	        DomAdapter.prototype.removeAttribute = function (element /** TODO #9100 */, attribute) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} ns
	         * @param {?} attribute
	         * @return {?}
	         */
	        DomAdapter.prototype.removeAttributeNS = function (element /** TODO #9100 */, ns, attribute) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.templateAwareRoot = function (el) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.createHtmlDocument = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.defaultDoc = function () { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.getBoundingClientRect = function (el) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.getTitle = function () { };
	        /**
	         * @abstract
	         * @param {?} newTitle
	         * @return {?}
	         */
	        DomAdapter.prototype.setTitle = function (newTitle) { };
	        /**
	         * @abstract
	         * @param {?} n
	         * @param {?} selector
	         * @return {?}
	         */
	        DomAdapter.prototype.elementMatches = function (n /** TODO #9100 */, selector) { };
	        /**
	         * @abstract
	         * @param {?} el
	         * @return {?}
	         */
	        DomAdapter.prototype.isTemplateElement = function (el) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.isTextNode = function (node) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.isCommentNode = function (node) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.isElementNode = function (node) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.hasShadowRoot = function (node) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.isShadowRoot = function (node) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.importIntoDoc /*<T extends Node>*/ = function (node) { };
	        /**
	         * @abstract
	         * @param {?} node
	         * @return {?}
	         */
	        DomAdapter.prototype.adoptNode /*<T extends Node>*/ = function (node) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @return {?}
	         */
	        DomAdapter.prototype.getHref = function (element) { };
	        /**
	         * @abstract
	         * @param {?} event
	         * @return {?}
	         */
	        DomAdapter.prototype.getEventKey = function (event) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} baseUrl
	         * @param {?} href
	         * @return {?}
	         */
	        DomAdapter.prototype.resolveAndSetHref = function (element /** TODO #9100 */, baseUrl, href) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.supportsDOMEvents = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.supportsNativeShadowDOM = function () { };
	        /**
	         * @abstract
	         * @param {?} target
	         * @return {?}
	         */
	        DomAdapter.prototype.getGlobalEventTarget = function (target) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.getHistory = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.getLocation = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.getBaseHref = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.resetBaseElement = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.getUserAgent = function () { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setData = function (element /** TODO #9100 */, name, value) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @return {?}
	         */
	        DomAdapter.prototype.getComputedStyle = function (element) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} name
	         * @return {?}
	         */
	        DomAdapter.prototype.getData = function (element /** TODO #9100 */, name) { };
	        /**
	         * @abstract
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setGlobalVar = function (name, value) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.supportsWebAnimation = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.performanceNow = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.getAnimationPrefix = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.getTransitionEnd = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.supportsAnimation = function () { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        DomAdapter.prototype.supportsCookies = function () { };
	        /**
	         * @abstract
	         * @param {?} name
	         * @return {?}
	         */
	        DomAdapter.prototype.getCookie = function (name) { };
	        /**
	         * @abstract
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        DomAdapter.prototype.setCookie = function (name, value) { };
	        return DomAdapter;
	    }());
	
	    var WebAnimationsPlayer = (function () {
	        /**
	         * @param {?} element
	         * @param {?} keyframes
	         * @param {?} options
	         * @param {?=} previousPlayers
	         */
	        function WebAnimationsPlayer(element, keyframes, options, previousPlayers) {
	            var _this = this;
	            if (previousPlayers === void 0) { previousPlayers = []; }
	            this.element = element;
	            this.keyframes = keyframes;
	            this.options = options;
	            this._onDoneFns = [];
	            this._onStartFns = [];
	            this._initialized = false;
	            this._finished = false;
	            this._started = false;
	            this._destroyed = false;
	            this.parentPlayer = null;
	            this._duration = options['duration'];
	            this.previousStyles = {};
	            previousPlayers.forEach(function (player) {
	                var styles = player._captureStyles();
	                Object.keys(styles).forEach(function (prop) { return _this.previousStyles[prop] = styles[prop]; });
	            });
	        }
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype._onFinish = function () {
	            if (!this._finished) {
	                this._finished = true;
	                this._onDoneFns.forEach(function (fn) { return fn(); });
	                this._onDoneFns = [];
	            }
	        };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.init = function () {
	            var _this = this;
	            if (this._initialized)
	                return;
	            this._initialized = true;
	            var /** @type {?} */ keyframes = this.keyframes.map(function (styles) {
	                var /** @type {?} */ formattedKeyframe = {};
	                Object.keys(styles).forEach(function (prop, index) {
	                    var /** @type {?} */ value = styles[prop];
	                    if (value == core.AUTO_STYLE) {
	                        value = _computeStyle(_this.element, prop);
	                    }
	                    if (value != undefined) {
	                        formattedKeyframe[prop] = value;
	                    }
	                });
	                return formattedKeyframe;
	            });
	            var /** @type {?} */ previousStyleProps = Object.keys(this.previousStyles);
	            if (previousStyleProps.length) {
	                var /** @type {?} */ startingKeyframe_1 = keyframes[0];
	                var /** @type {?} */ missingStyleProps_1 = [];
	                previousStyleProps.forEach(function (prop) {
	                    if (!isPresent(startingKeyframe_1[prop])) {
	                        missingStyleProps_1.push(prop);
	                    }
	                    startingKeyframe_1[prop] = _this.previousStyles[prop];
	                });
	                if (missingStyleProps_1.length) {
	                    var _loop_1 = function(i) {
	                        var /** @type {?} */ kf = keyframes[i];
	                        missingStyleProps_1.forEach(function (prop) { kf[prop] = _computeStyle(_this.element, prop); });
	                    };
	                    for (var /** @type {?} */ i = 1; i < keyframes.length; i++) {
	                        _loop_1(i);
	                    }
	                }
	            }
	            this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
	            this._finalKeyframe = _copyKeyframeStyles(keyframes[keyframes.length - 1]);
	            // this is required so that the player doesn't start to animate right away
	            this._resetDomPlayerState();
	            this._player.addEventListener('finish', function () { return _this._onFinish(); });
	        };
	        /**
	         * \@internal
	         * @param {?} element
	         * @param {?} keyframes
	         * @param {?} options
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype._triggerWebAnimation = function (element, keyframes, options) {
	            // jscompiler doesn't seem to know animate is a native property because it's not fully
	            // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
	            return (element['animate'](keyframes, options));
	        };
	        Object.defineProperty(WebAnimationsPlayer.prototype, "domPlayer", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._player; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.play = function () {
	            this.init();
	            if (!this.hasStarted()) {
	                this._onStartFns.forEach(function (fn) { return fn(); });
	                this._onStartFns = [];
	                this._started = true;
	            }
	            this._player.play();
	        };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.pause = function () {
	            this.init();
	            this._player.pause();
	        };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.finish = function () {
	            this.init();
	            this._onFinish();
	            this._player.finish();
	        };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.reset = function () {
	            this._resetDomPlayerState();
	            this._destroyed = false;
	            this._finished = false;
	            this._started = false;
	        };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype._resetDomPlayerState = function () {
	            if (this._player) {
	                this._player.cancel();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.restart = function () {
	            this.reset();
	            this.play();
	        };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.hasStarted = function () { return this._started; };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.destroy = function () {
	            if (!this._destroyed) {
	                this._resetDomPlayerState();
	                this._onFinish();
	                this._destroyed = true;
	            }
	        };
	        Object.defineProperty(WebAnimationsPlayer.prototype, "totalTime", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._duration; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} p
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.setPosition = function (p) { this._player.currentTime = p * this.totalTime; };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype.getPosition = function () { return this._player.currentTime / this.totalTime; };
	        /**
	         * @return {?}
	         */
	        WebAnimationsPlayer.prototype._captureStyles = function () {
	            var _this = this;
	            var /** @type {?} */ styles = {};
	            if (this.hasStarted()) {
	                Object.keys(this._finalKeyframe).forEach(function (prop) {
	                    if (prop != 'offset') {
	                        styles[prop] =
	                            _this._finished ? _this._finalKeyframe[prop] : _computeStyle(_this.element, prop);
	                    }
	                });
	            }
	            return styles;
	        };
	        return WebAnimationsPlayer;
	    }());
	    /**
	     * @param {?} element
	     * @param {?} prop
	     * @return {?}
	     */
	    function _computeStyle(element, prop) {
	        return getDOM().getComputedStyle(element)[prop];
	    }
	    /**
	     * @param {?} styles
	     * @return {?}
	     */
	    function _copyKeyframeStyles(styles) {
	        var /** @type {?} */ newStyles = {};
	        Object.keys(styles).forEach(function (prop) {
	            if (prop != 'offset') {
	                newStyles[prop] = styles[prop];
	            }
	        });
	        return newStyles;
	    }
	
	    var WebAnimationsDriver = (function () {
	        function WebAnimationsDriver() {
	        }
	        /**
	         * @param {?} element
	         * @param {?} startingStyles
	         * @param {?} keyframes
	         * @param {?} duration
	         * @param {?} delay
	         * @param {?} easing
	         * @param {?=} previousPlayers
	         * @return {?}
	         */
	        WebAnimationsDriver.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {
	            if (previousPlayers === void 0) { previousPlayers = []; }
	            var /** @type {?} */ formattedSteps = [];
	            var /** @type {?} */ startingStyleLookup = {};
	            if (isPresent(startingStyles)) {
	                startingStyleLookup = _populateStyles(startingStyles, {});
	            }
	            keyframes.forEach(function (keyframe) {
	                var /** @type {?} */ data = _populateStyles(keyframe.styles, startingStyleLookup);
	                data['offset'] = Math.max(0, Math.min(1, keyframe.offset));
	                formattedSteps.push(data);
	            });
	            // Styling passed into element.animate() must always be balanced.
	            // The special cases below can occur if only style() calls exist
	            // within an animation or when a style() calls are used prior
	            // to a group() animation being issued or if the renderer is
	            // invoked by the user directly.
	            if (formattedSteps.length == 0) {
	                formattedSteps = [startingStyleLookup, startingStyleLookup];
	            }
	            else if (formattedSteps.length == 1) {
	                var /** @type {?} */ start = startingStyleLookup;
	                var /** @type {?} */ end = formattedSteps[0];
	                end['offset'] = null;
	                formattedSteps = [start, end];
	            }
	            var /** @type {?} */ playerOptions = {
	                'duration': duration,
	                'delay': delay,
	                'fill': 'both' // we use `both` because it allows for styling at 0% to work with `delay`
	            };
	            // we check for this to avoid having a null|undefined value be present
	            // for the easing (which results in an error for certain browsers #9752)
	            if (easing) {
	                playerOptions['easing'] = easing;
	            }
	            // there may be a chance a NoOp player is returned depending
	            // on when the previous animation was cancelled
	            previousPlayers = previousPlayers.filter(filterWebAnimationPlayerFn);
	            return new WebAnimationsPlayer(element, formattedSteps, playerOptions, /** @type {?} */ (previousPlayers));
	        };
	        return WebAnimationsDriver;
	    }());
	    /**
	     * @param {?} styles
	     * @param {?} defaultStyles
	     * @return {?}
	     */
	    function _populateStyles(styles, defaultStyles) {
	        var /** @type {?} */ data = {};
	        styles.styles.forEach(function (entry) { Object.keys(entry).forEach(function (prop) { data[prop] = entry[prop]; }); });
	        Object.keys(defaultStyles).forEach(function (prop) {
	            if (!isPresent(data[prop])) {
	                data[prop] = defaultStyles[prop];
	            }
	        });
	        return data;
	    }
	    /**
	     * @param {?} player
	     * @return {?}
	     */
	    function filterWebAnimationPlayerFn(player) {
	        return player instanceof WebAnimationsPlayer;
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
	     * \@security Tread carefully! Interacting with the DOM directly is dangerous and
	     * can introduce XSS risks.
	     * @abstract
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
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return ((el)).getDistributedNodes(); };
	        /**
	         * @param {?} el
	         * @param {?} baseUrl
	         * @param {?} href
	         * @return {?}
	         */
	        GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
	            el.href = href == null ? baseUrl : baseUrl + '/../' + href;
	        };
	        /**
	         * @return {?}
	         */
	        GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
	        /**
	         * @return {?}
	         */
	        GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
	            return typeof ((this.defaultDoc().body)).createShadowRoot === 'function';
	        };
	        /**
	         * @return {?}
	         */
	        GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () { return this._animationPrefix ? this._animationPrefix : ''; };
	        /**
	         * @return {?}
	         */
	        GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return this._transitionEnd ? this._transitionEnd : ''; };
	        /**
	         * @return {?}
	         */
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
	    var /** @type {?} */ _attrToPropMap = {
	        'class': 'className',
	        'innerHtml': 'innerHTML',
	        'readonly': 'readOnly',
	        'tabindex': 'tabIndex',
	    };
	    var /** @type {?} */ DOM_KEY_LOCATION_NUMPAD = 3;
	    // Map to convert some key or keyIdentifier values to what will be returned by getEventKey
	    var /** @type {?} */ _keyMap = {
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
	    var /** @type {?} */ _chromeNumKeyPadMap = {
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
	    var BrowserDomAdapter = (function (_super) {
	        __extends(BrowserDomAdapter, _super);
	        function BrowserDomAdapter() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @param {?} templateHtml
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error('parse not implemented'); };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.makeCurrent = function () { setRootDomAdapter(new BrowserDomAdapter()); };
	        /**
	         * @param {?} element
	         * @param {?} name
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
	        /**
	         * @param {?} el
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setProperty = function (el, name, value) { ((el))[name] = value; };
	        /**
	         * @param {?} el
	         * @param {?} name
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getProperty = function (el, name) { return ((el))[name]; };
	        /**
	         * @param {?} el
	         * @param {?} methodName
	         * @param {?} args
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.invoke = function (el, methodName, args) { (_a = ((el)))[methodName].apply(_a, args); var _a; };
	        /**
	         * @param {?} error
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.logError = function (error) {
	            if (window.console) {
	                if (console.error) {
	                    console.error(error);
	                }
	                else {
	                    console.log(error);
	                }
	            }
	        };
	        /**
	         * @param {?} error
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.log = function (error) {
	            if (window.console) {
	                window.console.log && window.console.log(error);
	            }
	        };
	        /**
	         * @param {?} error
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.logGroup = function (error) {
	            if (window.console) {
	                window.console.group && window.console.group(error);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.logGroupEnd = function () {
	            if (window.console) {
	                window.console.groupEnd && window.console.groupEnd();
	            }
	        };
	        Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
	            /**
	             * @return {?}
	             */
	            get: function () { return _attrToPropMap; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} selector
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.query = function (selector) { return document.querySelector(selector); };
	        /**
	         * @param {?} el
	         * @param {?} selector
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.querySelector = function (el, selector) {
	            return (el.querySelector(selector));
	        };
	        /**
	         * @param {?} el
	         * @param {?} selector
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
	        /**
	         * @param {?} el
	         * @param {?} evt
	         * @param {?} listener
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
	        /**
	         * @param {?} el
	         * @param {?} evt
	         * @param {?} listener
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
	            el.addEventListener(evt, listener, false);
	            // Needed to follow Dart's subscription semantic, until fix of
	            // https://code.google.com/p/dart/issues/detail?id=17406
	            return function () { el.removeEventListener(evt, listener, false); };
	        };
	        /**
	         * @param {?} el
	         * @param {?} evt
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
	        /**
	         * @param {?} eventType
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
	            var /** @type {?} */ evt = document.createEvent('MouseEvent');
	            evt.initEvent(eventType, true, true);
	            return evt;
	        };
	        /**
	         * @param {?} eventType
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createEvent = function (eventType) {
	            var /** @type {?} */ evt = document.createEvent('Event');
	            evt.initEvent(eventType, true, true);
	            return evt;
	        };
	        /**
	         * @param {?} evt
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.preventDefault = function (evt) {
	            evt.preventDefault();
	            evt.returnValue = false;
	        };
	        /**
	         * @param {?} evt
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.isPrevented = function (evt) {
	            return evt.defaultPrevented || isPresent(evt.returnValue) && !evt.returnValue;
	        };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getTemplateContent = function (el) {
	            return 'content' in el && el instanceof HTMLTemplateElement ? el.content : null;
	        };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.type = function (node) { return node.type; };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.content = function (node) {
	            if (this.hasProperty(node, 'content')) {
	                return ((node)).content;
	            }
	            else {
	                return node;
	            }
	        };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.childNodesAsList = function (el) {
	            var /** @type {?} */ childNodes = el.childNodes;
	            var /** @type {?} */ res = new Array(childNodes.length);
	            for (var /** @type {?} */ i = 0; i < childNodes.length; i++) {
	                res[i] = childNodes[i];
	            }
	            return res;
	        };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.clearNodes = function (el) {
	            while (el.firstChild) {
	                el.removeChild(el.firstChild);
	            }
	        };
	        /**
	         * @param {?} el
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
	        /**
	         * @param {?} el
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
	        /**
	         * @param {?} el
	         * @param {?} newChild
	         * @param {?} oldChild
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.remove = function (node) {
	            if (node.parentNode) {
	                node.parentNode.removeChild(node);
	            }
	            return node;
	        };
	        /**
	         * @param {?} el
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.insertBefore = function (el, node) { el.parentNode.insertBefore(node, el); };
	        /**
	         * @param {?} el
	         * @param {?} nodes
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.insertAllBefore = function (el, nodes) {
	            nodes.forEach(function (n) { return el.parentNode.insertBefore(n, el); });
	        };
	        /**
	         * @param {?} el
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.insertAfter = function (el, node) { el.parentNode.insertBefore(node, el.nextSibling); };
	        /**
	         * @param {?} el
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
	        /**
	         * @param {?} el
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
	        /**
	         * @param {?} el
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
	        /**
	         * @param {?} el
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
	        /**
	         * @param {?} text
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createComment = function (text) { return document.createComment(text); };
	        /**
	         * @param {?} html
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createTemplate = function (html) {
	            var /** @type {?} */ t = document.createElement('template');
	            t.innerHTML = html;
	            return t;
	        };
	        /**
	         * @param {?} tagName
	         * @param {?=} doc
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
	            if (doc === void 0) { doc = document; }
	            return doc.createElement(tagName);
	        };
	        /**
	         * @param {?} ns
	         * @param {?} tagName
	         * @param {?=} doc
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
	            if (doc === void 0) { doc = document; }
	            return doc.createElementNS(ns, tagName);
	        };
	        /**
	         * @param {?} text
	         * @param {?=} doc
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
	            if (doc === void 0) { doc = document; }
	            return doc.createTextNode(text);
	        };
	        /**
	         * @param {?} attrName
	         * @param {?} attrValue
	         * @param {?=} doc
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
	            if (doc === void 0) { doc = document; }
	            var /** @type {?} */ el = (doc.createElement('SCRIPT'));
	            el.setAttribute(attrName, attrValue);
	            return el;
	        };
	        /**
	         * @param {?} css
	         * @param {?=} doc
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
	            if (doc === void 0) { doc = document; }
	            var /** @type {?} */ style = (doc.createElement('style'));
	            this.appendChild(style, this.createTextNode(css));
	            return style;
	        };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createShadowRoot = function (el) { return ((el)).createShadowRoot(); };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getShadowRoot = function (el) { return ((el)).shadowRoot; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getHost = function (el) { return ((el)).host; };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
	        /**
	         * @param {?} element
	         * @param {?} name
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
	            return element.getElementsByClassName(name);
	        };
	        /**
	         * @param {?} element
	         * @param {?} name
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
	            return element.getElementsByTagName(name);
	        };
	        /**
	         * @param {?} element
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
	        /**
	         * @param {?} element
	         * @param {?} className
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
	        /**
	         * @param {?} element
	         * @param {?} className
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
	        /**
	         * @param {?} element
	         * @param {?} className
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.hasClass = function (element, className) {
	            return element.classList.contains(className);
	        };
	        /**
	         * @param {?} element
	         * @param {?} styleName
	         * @param {?} styleValue
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
	            element.style[styleName] = styleValue;
	        };
	        /**
	         * @param {?} element
	         * @param {?} stylename
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.removeStyle = function (element, stylename) {
	            // IE requires '' instead of null
	            // see https://github.com/angular/angular/issues/7916
	            element.style[stylename] = '';
	        };
	        /**
	         * @param {?} element
	         * @param {?} stylename
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
	        /**
	         * @param {?} element
	         * @param {?} styleName
	         * @param {?=} styleValue
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
	            if (styleValue === void 0) { styleValue = null; }
	            var /** @type {?} */ value = this.getStyle(element, styleName) || '';
	            return styleValue ? value == styleValue : value.length > 0;
	        };
	        /**
	         * @param {?} element
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
	        /**
	         * @param {?} element
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.attributeMap = function (element) {
	            var /** @type {?} */ res = new Map();
	            var /** @type {?} */ elAttrs = element.attributes;
	            for (var /** @type {?} */ i = 0; i < elAttrs.length; i++) {
	                var /** @type {?} */ attrib = elAttrs[i];
	                res.set(attrib.name, attrib.value);
	            }
	            return res;
	        };
	        /**
	         * @param {?} element
	         * @param {?} attribute
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) {
	            return element.hasAttribute(attribute);
	        };
	        /**
	         * @param {?} element
	         * @param {?} ns
	         * @param {?} attribute
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
	            return element.hasAttributeNS(ns, attribute);
	        };
	        /**
	         * @param {?} element
	         * @param {?} attribute
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getAttribute = function (element, attribute) {
	            return element.getAttribute(attribute);
	        };
	        /**
	         * @param {?} element
	         * @param {?} ns
	         * @param {?} name
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
	            return element.getAttributeNS(ns, name);
	        };
	        /**
	         * @param {?} element
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
	        /**
	         * @param {?} element
	         * @param {?} ns
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
	            element.setAttributeNS(ns, name, value);
	        };
	        /**
	         * @param {?} element
	         * @param {?} attribute
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
	        /**
	         * @param {?} element
	         * @param {?} ns
	         * @param {?} name
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) {
	            element.removeAttributeNS(ns, name);
	        };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.createHtmlDocument = function () {
	            return document.implementation.createHTMLDocument('fakeTitle');
	        };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.defaultDoc = function () { return document; };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
	            try {
	                return el.getBoundingClientRect();
	            }
	            catch (e) {
	                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
	            }
	        };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getTitle = function () { return document.title; };
	        /**
	         * @param {?} newTitle
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setTitle = function (newTitle) { document.title = newTitle || ''; };
	        /**
	         * @param {?} n
	         * @param {?} selector
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
	            if (n instanceof HTMLElement) {
	                return n.matches && n.matches(selector) ||
	                    n.msMatchesSelector && n.msMatchesSelector(selector) ||
	                    n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
	            }
	            return false;
	        };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.isTemplateElement = function (el) {
	            return el instanceof HTMLElement && el.nodeName == 'TEMPLATE';
	        };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.hasShadowRoot = function (node) {
	            return isPresent(node.shadowRoot) && node instanceof HTMLElement;
	        };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.importIntoDoc = function (node) { return document.importNode(this.templateAwareRoot(node), true); };
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getHref = function (el) { return ((el)).href; };
	        /**
	         * @param {?} event
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getEventKey = function (event) {
	            var /** @type {?} */ key = event.key;
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
	                        key = ((_chromeNumKeyPadMap))[key];
	                    }
	                }
	            }
	            return _keyMap[key] || key;
	        };
	        /**
	         * @param {?} target
	         * @return {?}
	         */
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
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getBaseHref = function () {
	            var /** @type {?} */ href = getBaseElementHref();
	            return isBlank(href) ? null : relativePath(href);
	        };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
	        /**
	         * @param {?} element
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setData = function (element, name, value) {
	            this.setAttribute(element, 'data-' + name, value);
	        };
	        /**
	         * @param {?} element
	         * @param {?} name
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getData = function (element, name) {
	            return this.getAttribute(element, 'data-' + name);
	        };
	        /**
	         * @param {?} element
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
	        /**
	         * @param {?} path
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setGlobalVar = function (path, value) { setValueOnPath(global$1, path, value); };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.supportsWebAnimation = function () {
	            return typeof ((Element)).prototype['animate'] === 'function';
	        };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.performanceNow = function () {
	            // performance.now() is not available in all browsers, see
	            // http://caniuse.com/#search=performance.now
	            return window.performance && window.performance.now ? window.performance.now() :
	                new Date().getTime();
	        };
	        /**
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.supportsCookies = function () { return true; };
	        /**
	         * @param {?} name
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.getCookie = function (name) { return parseCookieValue(document.cookie, name); };
	        /**
	         * @param {?} name
	         * @param {?} value
	         * @return {?}
	         */
	        BrowserDomAdapter.prototype.setCookie = function (name, value) {
	            // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
	            // not clear other cookies.
	            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	        };
	        return BrowserDomAdapter;
	    }(GenericBrowserDomAdapter));
	    var /** @type {?} */ baseElement = null;
	    /**
	     * @return {?}
	     */
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
	    var /** @type {?} */ urlParsingNode;
	    /**
	     * @param {?} url
	     * @return {?}
	     */
	    function relativePath(url) {
	        if (!urlParsingNode) {
	            urlParsingNode = document.createElement('a');
	        }
	        urlParsingNode.setAttribute('href', url);
	        return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname;
	    }
	    /**
	     * @param {?} cookieStr
	     * @param {?} name
	     * @return {?}
	     */
	    function parseCookieValue(cookieStr, name) {
	        name = encodeURIComponent(name);
	        for (var _i = 0, _a = cookieStr.split(';'); _i < _a.length; _i++) {
	            var cookie = _a[_i];
	            var /** @type {?} */ eqIndex = cookie.indexOf('=');
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
	     * @return {?}
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
	     * {\@link Location}.
	     */
	    var BrowserPlatformLocation = (function (_super) {
	        __extends$2(BrowserPlatformLocation, _super);
	        function BrowserPlatformLocation() {
	            _super.call(this);
	            this._init();
	        }
	        /**
	         * \@internal
	         * @return {?}
	         */
	        BrowserPlatformLocation.prototype._init = function () {
	            this._location = getDOM().getLocation();
	            this._history = getDOM().getHistory();
	        };
	        Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._location; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return getDOM().getBaseHref(); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        BrowserPlatformLocation.prototype.onPopState = function (fn) {
	            getDOM().getGlobalEventTarget('window').addEventListener('popstate', fn, false);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        BrowserPlatformLocation.prototype.onHashChange = function (fn) {
	            getDOM().getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
	        };
	        Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._location.pathname; },
	            /**
	             * @param {?} newPath
	             * @return {?}
	             */
	            set: function (newPath) { this._location.pathname = newPath; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._location.search; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._location.hash; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} state
	         * @param {?} title
	         * @param {?} url
	         * @return {?}
	         */
	        BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
	            if (supportsState()) {
	                this._history.pushState(state, title, url);
	            }
	            else {
	                this._location.hash = url;
	            }
	        };
	        /**
	         * @param {?} state
	         * @param {?} title
	         * @param {?} url
	         * @return {?}
	         */
	        BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
	            if (supportsState()) {
	                this._history.replaceState(state, title, url);
	            }
	            else {
	                this._location.hash = url;
	            }
	        };
	        /**
	         * @return {?}
	         */
	        BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
	        /**
	         * @return {?}
	         */
	        BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
	        BrowserPlatformLocation.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        BrowserPlatformLocation.ctorParameters = function () { return []; };
	        return BrowserPlatformLocation;
	    }(_angular_common.PlatformLocation));
	
	    var BrowserGetTestability = (function () {
	        function BrowserGetTestability() {
	        }
	        /**
	         * @return {?}
	         */
	        BrowserGetTestability.init = function () { core.setTestabilityGetter(new BrowserGetTestability()); };
	        /**
	         * @param {?} registry
	         * @return {?}
	         */
	        BrowserGetTestability.prototype.addToWindow = function (registry) {
	            global$1.getAngularTestability = function (elem, findInAncestors) {
	                if (findInAncestors === void 0) { findInAncestors = true; }
	                var /** @type {?} */ testability = registry.findTestabilityInTree(elem, findInAncestors);
	                if (testability == null) {
	                    throw new Error('Could not find testability for element.');
	                }
	                return testability;
	            };
	            global$1.getAllAngularTestabilities = function () { return registry.getAllTestabilities(); };
	            global$1.getAllAngularRootElements = function () { return registry.getAllRootElements(); };
	            var /** @type {?} */ whenAllStable = function (callback /** TODO #9100 */) {
	                var /** @type {?} */ testabilities = global$1.getAllAngularTestabilities();
	                var /** @type {?} */ count = testabilities.length;
	                var /** @type {?} */ didWork = false;
	                var /** @type {?} */ decrement = function (didWork_ /** TODO #9100 */) {
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
	        /**
	         * @param {?} registry
	         * @param {?} elem
	         * @param {?} findInAncestors
	         * @return {?}
	         */
	        BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	            if (elem == null) {
	                return null;
	            }
	            var /** @type {?} */ t = registry.getTestability(elem);
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
	     * \@experimental
	     */
	    var Title = (function () {
	        function Title() {
	        }
	        /**
	         * Get the title of the current HTML document.
	         * @return {?}
	         */
	        Title.prototype.getTitle = function () { return getDOM().getTitle(); };
	        /**
	         * Set the title of the current HTML document.
	         * @param {?} newTitle
	         * @return {?}
	         */
	        Title.prototype.setTitle = function (newTitle) { getDOM().setTitle(newTitle); };
	        return Title;
	    }());
	
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.merge = function (m1, m2) {
	            var /** @type {?} */ m = {};
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
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.equals = function (m1, m2) {
	            var /** @type {?} */ k1 = Object.keys(m1);
	            var /** @type {?} */ k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var /** @type {?} */ i = 0; i < k1.length; i++) {
	                var /** @type {?} */ key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	
	    /**
	     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
	     *
	     * Note: Document might not be available in the Application Context when Application and Rendering
	     * Contexts are not the same (e.g. when running the application into a Web Worker).
	     *
	     * @stable
	     */
	    var /** @type {?} */ DOCUMENT = new core.OpaqueToken('DocumentToken');
	
	    /**
	     * @stable
	     */
	    var /** @type {?} */ EVENT_MANAGER_PLUGINS = new core.OpaqueToken('EventManagerPlugins');
	    /**
	     * \@stable
	     */
	    var EventManager = (function () {
	        /**
	         * @param {?} plugins
	         * @param {?} _zone
	         */
	        function EventManager(plugins, _zone) {
	            var _this = this;
	            this._zone = _zone;
	            this._eventNameToPlugin = new Map();
	            plugins.forEach(function (p) { return p.manager = _this; });
	            this._plugins = plugins.slice().reverse();
	        }
	        /**
	         * @param {?} element
	         * @param {?} eventName
	         * @param {?} handler
	         * @return {?}
	         */
	        EventManager.prototype.addEventListener = function (element, eventName, handler) {
	            var /** @type {?} */ plugin = this._findPluginFor(eventName);
	            return plugin.addEventListener(element, eventName, handler);
	        };
	        /**
	         * @param {?} target
	         * @param {?} eventName
	         * @param {?} handler
	         * @return {?}
	         */
	        EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
	            var /** @type {?} */ plugin = this._findPluginFor(eventName);
	            return plugin.addGlobalEventListener(target, eventName, handler);
	        };
	        /**
	         * @return {?}
	         */
	        EventManager.prototype.getZone = function () { return this._zone; };
	        /**
	         * \@internal
	         * @param {?} eventName
	         * @return {?}
	         */
	        EventManager.prototype._findPluginFor = function (eventName) {
	            var /** @type {?} */ plugin = this._eventNameToPlugin.get(eventName);
	            if (plugin) {
	                return plugin;
	            }
	            var /** @type {?} */ plugins = this._plugins;
	            for (var /** @type {?} */ i = 0; i < plugins.length; i++) {
	                var /** @type {?} */ plugin_1 = plugins[i];
	                if (plugin_1.supports(eventName)) {
	                    this._eventNameToPlugin.set(eventName, plugin_1);
	                    return plugin_1;
	                }
	            }
	            throw new Error("No event manager plugin found for event " + eventName);
	        };
	        EventManager.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        EventManager.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: core.Inject, args: [EVENT_MANAGER_PLUGINS,] },] },
	            { type: core.NgZone, },
	        ]; };
	        return EventManager;
	    }());
	    /**
	     * @abstract
	     */
	    var EventManagerPlugin = (function () {
	        function EventManagerPlugin() {
	        }
	        /**
	         * @abstract
	         * @param {?} eventName
	         * @return {?}
	         */
	        EventManagerPlugin.prototype.supports = function (eventName) { };
	        /**
	         * @abstract
	         * @param {?} element
	         * @param {?} eventName
	         * @param {?} handler
	         * @return {?}
	         */
	        EventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) { };
	        /**
	         * @param {?} element
	         * @param {?} eventName
	         * @param {?} handler
	         * @return {?}
	         */
	        EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
	            var /** @type {?} */ target = getDOM().getGlobalEventTarget(element);
	            if (!target) {
	                throw new Error("Unsupported event target " + target + " for event " + eventName);
	            }
	            return this.addEventListener(target, eventName, handler);
	        };
	        ;
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
	            this._stylesSet = new Set();
	        }
	        /**
	         * @param {?} styles
	         * @return {?}
	         */
	        SharedStylesHost.prototype.addStyles = function (styles) {
	            var _this = this;
	            var /** @type {?} */ additions = new Set();
	            styles.forEach(function (style) {
	                if (!_this._stylesSet.has(style)) {
	                    _this._stylesSet.add(style);
	                    additions.add(style);
	                }
	            });
	            this.onStylesAdded(additions);
	        };
	        /**
	         * @param {?} additions
	         * @return {?}
	         */
	        SharedStylesHost.prototype.onStylesAdded = function (additions) { };
	        /**
	         * @return {?}
	         */
	        SharedStylesHost.prototype.getAllStyles = function () { return Array.from(this._stylesSet); };
	        SharedStylesHost.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        SharedStylesHost.ctorParameters = function () { return []; };
	        return SharedStylesHost;
	    }());
	    var DomSharedStylesHost = (function (_super) {
	        __extends$4(DomSharedStylesHost, _super);
	        /**
	         * @param {?} _doc
	         */
	        function DomSharedStylesHost(_doc) {
	            _super.call(this);
	            this._doc = _doc;
	            this._hostNodes = new Set();
	            this._styleNodes = new Set();
	            this._hostNodes.add(_doc.head);
	        }
	        /**
	         * @param {?} styles
	         * @param {?} host
	         * @return {?}
	         */
	        DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
	            var _this = this;
	            styles.forEach(function (style) {
	                var /** @type {?} */ styleEl = _this._doc.createElement('style');
	                styleEl.textContent = style;
	                _this._styleNodes.add(host.appendChild(styleEl));
	            });
	        };
	        /**
	         * @param {?} hostNode
	         * @return {?}
	         */
	        DomSharedStylesHost.prototype.addHost = function (hostNode) {
	            this._addStylesToHost(this._stylesSet, hostNode);
	            this._hostNodes.add(hostNode);
	        };
	        /**
	         * @param {?} hostNode
	         * @return {?}
	         */
	        DomSharedStylesHost.prototype.removeHost = function (hostNode) { this._hostNodes.delete(hostNode); };
	        /**
	         * @param {?} additions
	         * @return {?}
	         */
	        DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
	            var _this = this;
	            this._hostNodes.forEach(function (hostNode) { return _this._addStylesToHost(additions, hostNode); });
	        };
	        /**
	         * @return {?}
	         */
	        DomSharedStylesHost.prototype.ngOnDestroy = function () { this._styleNodes.forEach(function (styleNode) { return getDOM().remove(styleNode); }); };
	        DomSharedStylesHost.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        DomSharedStylesHost.ctorParameters = function () { return [
	            { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT,] },] },
	        ]; };
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
	    var /** @type {?} */ NAMESPACE_URIS = {
	        'xlink': 'http://www.w3.org/1999/xlink',
	        'svg': 'http://www.w3.org/2000/svg',
	        'xhtml': 'http://www.w3.org/1999/xhtml'
	    };
	    var /** @type {?} */ TEMPLATE_COMMENT_TEXT = 'template bindings={}';
	    var /** @type {?} */ TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/;
	    /**
	     * @abstract
	     */
	    var DomRootRenderer = (function () {
	        /**
	         * @param {?} document
	         * @param {?} eventManager
	         * @param {?} sharedStylesHost
	         * @param {?} animationDriver
	         * @param {?} appId
	         */
	        function DomRootRenderer(document, eventManager, sharedStylesHost, animationDriver, appId) {
	            this.document = document;
	            this.eventManager = eventManager;
	            this.sharedStylesHost = sharedStylesHost;
	            this.animationDriver = animationDriver;
	            this.appId = appId;
	            this.registeredComponents = new Map();
	        }
	        /**
	         * @param {?} componentProto
	         * @return {?}
	         */
	        DomRootRenderer.prototype.renderComponent = function (componentProto) {
	            var /** @type {?} */ renderer = this.registeredComponents.get(componentProto.id);
	            if (!renderer) {
	                renderer = new DomRenderer(this, componentProto, this.animationDriver, this.appId + "-" + componentProto.id);
	                this.registeredComponents.set(componentProto.id, renderer);
	            }
	            return renderer;
	        };
	        return DomRootRenderer;
	    }());
	    var DomRootRenderer_ = (function (_super) {
	        __extends$3(DomRootRenderer_, _super);
	        /**
	         * @param {?} _document
	         * @param {?} _eventManager
	         * @param {?} sharedStylesHost
	         * @param {?} animationDriver
	         * @param {?} appId
	         */
	        function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animationDriver, appId) {
	            _super.call(this, _document, _eventManager, sharedStylesHost, animationDriver, appId);
	        }
	        DomRootRenderer_.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        DomRootRenderer_.ctorParameters = function () { return [
	            { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT,] },] },
	            { type: EventManager, },
	            { type: DomSharedStylesHost, },
	            { type: AnimationDriver, },
	            { type: undefined, decorators: [{ type: core.Inject, args: [core.APP_ID,] },] },
	        ]; };
	        return DomRootRenderer_;
	    }(DomRootRenderer));
	    var /** @type {?} */ DIRECT_DOM_RENDERER = {
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        remove: function (node) {
	            if (node.parentNode) {
	                node.parentNode.removeChild(node);
	            }
	        },
	        /**
	         * @param {?} node
	         * @param {?} parent
	         * @return {?}
	         */
	        appendChild: function (node, parent) { parent.appendChild(node); },
	        /**
	         * @param {?} node
	         * @param {?} refNode
	         * @return {?}
	         */
	        insertBefore: function (node, refNode) { refNode.parentNode.insertBefore(node, refNode); },
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        nextSibling: function (node) { return node.nextSibling; },
	        /**
	         * @param {?} node
	         * @return {?}
	         */
	        parentElement: function (node) { return (node.parentNode); }
	    };
	    var DomRenderer = (function () {
	        /**
	         * @param {?} _rootRenderer
	         * @param {?} componentProto
	         * @param {?} _animationDriver
	         * @param {?} styleShimId
	         */
	        function DomRenderer(_rootRenderer, componentProto, _animationDriver, styleShimId) {
	            this._rootRenderer = _rootRenderer;
	            this.componentProto = componentProto;
	            this._animationDriver = _animationDriver;
	            this.directRenderer = DIRECT_DOM_RENDERER;
	            this._styles = flattenStyles(styleShimId, componentProto.styles, []);
	            if (componentProto.encapsulation !== core.ViewEncapsulation.Native) {
	                this._rootRenderer.sharedStylesHost.addStyles(this._styles);
	            }
	            if (this.componentProto.encapsulation === core.ViewEncapsulation.Emulated) {
	                this._contentAttr = shimContentAttribute(styleShimId);
	                this._hostAttr = shimHostAttribute(styleShimId);
	            }
	            else {
	                this._contentAttr = null;
	                this._hostAttr = null;
	            }
	        }
	        /**
	         * @param {?} selectorOrNode
	         * @param {?} debugInfo
	         * @return {?}
	         */
	        DomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
	            var /** @type {?} */ el;
	            if (typeof selectorOrNode === 'string') {
	                el = this._rootRenderer.document.querySelector(selectorOrNode);
	                if (!el) {
	                    throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
	                }
	            }
	            else {
	                el = selectorOrNode;
	            }
	            while (el.firstChild) {
	                el.removeChild(el.firstChild);
	            }
	            return el;
	        };
	        /**
	         * @param {?} parent
	         * @param {?} name
	         * @param {?} debugInfo
	         * @return {?}
	         */
	        DomRenderer.prototype.createElement = function (parent, name, debugInfo) {
	            var /** @type {?} */ el;
	            if (isNamespaced(name)) {
	                var /** @type {?} */ nsAndName = splitNamespace(name);
	                el = document.createElementNS((NAMESPACE_URIS)[nsAndName[0]], nsAndName[1]);
	            }
	            else {
	                el = document.createElement(name);
	            }
	            if (this._contentAttr) {
	                el.setAttribute(this._contentAttr, '');
	            }
	            if (parent) {
	                parent.appendChild(el);
	            }
	            return el;
	        };
	        /**
	         * @param {?} hostElement
	         * @return {?}
	         */
	        DomRenderer.prototype.createViewRoot = function (hostElement) {
	            var /** @type {?} */ nodesParent;
	            if (this.componentProto.encapsulation === core.ViewEncapsulation.Native) {
	                nodesParent = ((hostElement)).createShadowRoot();
	                for (var /** @type {?} */ i = 0; i < this._styles.length; i++) {
	                    var /** @type {?} */ styleEl = document.createElement('style');
	                    styleEl.textContent = this._styles[i];
	                    nodesParent.appendChild(styleEl);
	                }
	            }
	            else {
	                if (this._hostAttr) {
	                    hostElement.setAttribute(this._hostAttr, '');
	                }
	                nodesParent = hostElement;
	            }
	            return nodesParent;
	        };
	        /**
	         * @param {?} parentElement
	         * @param {?} debugInfo
	         * @return {?}
	         */
	        DomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
	            var /** @type {?} */ comment = document.createComment(TEMPLATE_COMMENT_TEXT);
	            if (parentElement) {
	                parentElement.appendChild(comment);
	            }
	            return comment;
	        };
	        /**
	         * @param {?} parentElement
	         * @param {?} value
	         * @param {?} debugInfo
	         * @return {?}
	         */
	        DomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
	            var /** @type {?} */ node = document.createTextNode(value);
	            if (parentElement) {
	                parentElement.appendChild(node);
	            }
	            return node;
	        };
	        /**
	         * @param {?} parentElement
	         * @param {?} nodes
	         * @return {?}
	         */
	        DomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	            if (!parentElement)
	                return;
	            appendNodes(parentElement, nodes);
	        };
	        /**
	         * @param {?} node
	         * @param {?} viewRootNodes
	         * @return {?}
	         */
	        DomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) { moveNodesAfterSibling(node, viewRootNodes); };
	        /**
	         * @param {?} viewRootNodes
	         * @return {?}
	         */
	        DomRenderer.prototype.detachView = function (viewRootNodes) {
	            for (var /** @type {?} */ i = 0; i < viewRootNodes.length; i++) {
	                var /** @type {?} */ node = viewRootNodes[i];
	                if (node.parentNode) {
	                    node.parentNode.removeChild(node);
	                }
	            }
	        };
	        /**
	         * @param {?} hostElement
	         * @param {?} viewAllNodes
	         * @return {?}
	         */
	        DomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	            if (this.componentProto.encapsulation === core.ViewEncapsulation.Native && hostElement) {
	                this._rootRenderer.sharedStylesHost.removeHost(((hostElement)).shadowRoot);
	            }
	        };
	        /**
	         * @param {?} renderElement
	         * @param {?} name
	         * @param {?} callback
	         * @return {?}
	         */
	        DomRenderer.prototype.listen = function (renderElement, name, callback) {
	            return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
	        };
	        /**
	         * @param {?} target
	         * @param {?} name
	         * @param {?} callback
	         * @return {?}
	         */
	        DomRenderer.prototype.listenGlobal = function (target, name, callback) {
	            return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
	        };
	        /**
	         * @param {?} renderElement
	         * @param {?} propertyName
	         * @param {?} propertyValue
	         * @return {?}
	         */
	        DomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	            ((renderElement))[propertyName] = propertyValue;
	        };
	        /**
	         * @param {?} renderElement
	         * @param {?} attributeName
	         * @param {?} attributeValue
	         * @return {?}
	         */
	        DomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	            var /** @type {?} */ attrNs;
	            var /** @type {?} */ attrNameWithoutNs = attributeName;
	            if (isNamespaced(attributeName)) {
	                var /** @type {?} */ nsAndName = splitNamespace(attributeName);
	                attrNameWithoutNs = nsAndName[1];
	                attributeName = nsAndName[0] + ':' + nsAndName[1];
	                attrNs = NAMESPACE_URIS[nsAndName[0]];
	            }
	            if (isPresent(attributeValue)) {
	                if (attrNs) {
	                    renderElement.setAttributeNS(attrNs, attributeName, attributeValue);
	                }
	                else {
	                    renderElement.setAttribute(attributeName, attributeValue);
	                }
	            }
	            else {
	                if (isPresent(attrNs)) {
	                    renderElement.removeAttributeNS(attrNs, attrNameWithoutNs);
	                }
	                else {
	                    renderElement.removeAttribute(attributeName);
	                }
	            }
	        };
	        /**
	         * @param {?} renderElement
	         * @param {?} propertyName
	         * @param {?} propertyValue
	         * @return {?}
	         */
	        DomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	            if (renderElement.nodeType === Node.COMMENT_NODE) {
	                var /** @type {?} */ existingBindings = renderElement.nodeValue.replace(/\n/g, '').match(TEMPLATE_BINDINGS_EXP);
	                var /** @type {?} */ parsedBindings = JSON.parse(existingBindings[1]);
	                parsedBindings[propertyName] = propertyValue;
	                renderElement.nodeValue =
	                    TEMPLATE_COMMENT_TEXT.replace('{}', JSON.stringify(parsedBindings, null, 2));
	            }
	            else {
	                this.setElementAttribute(renderElement, propertyName, propertyValue);
	            }
	        };
	        /**
	         * @param {?} renderElement
	         * @param {?} className
	         * @param {?} isAdd
	         * @return {?}
	         */
	        DomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	            if (isAdd) {
	                renderElement.classList.add(className);
	            }
	            else {
	                renderElement.classList.remove(className);
	            }
	        };
	        /**
	         * @param {?} renderElement
	         * @param {?} styleName
	         * @param {?} styleValue
	         * @return {?}
	         */
	        DomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	            if (isPresent(styleValue)) {
	                ((renderElement.style))[styleName] = stringify(styleValue);
	            }
	            else {
	                // IE requires '' instead of null
	                // see https://github.com/angular/angular/issues/7916
	                ((renderElement.style))[styleName] = '';
	            }
	        };
	        /**
	         * @param {?} renderElement
	         * @param {?} methodName
	         * @param {?} args
	         * @return {?}
	         */
	        DomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	            ((renderElement))[methodName].apply(renderElement, args);
	        };
	        /**
	         * @param {?} renderNode
	         * @param {?} text
	         * @return {?}
	         */
	        DomRenderer.prototype.setText = function (renderNode, text) { renderNode.nodeValue = text; };
	        /**
	         * @param {?} element
	         * @param {?} startingStyles
	         * @param {?} keyframes
	         * @param {?} duration
	         * @param {?} delay
	         * @param {?} easing
	         * @param {?=} previousPlayers
	         * @return {?}
	         */
	        DomRenderer.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {
	            if (previousPlayers === void 0) { previousPlayers = []; }
	            if (this._rootRenderer.document.body.contains(element)) {
	                return this._animationDriver.animate(element, startingStyles, keyframes, duration, delay, easing, previousPlayers);
	            }
	            return new NoOpAnimationPlayer();
	        };
	        return DomRenderer;
	    }());
	    /**
	     * @param {?} sibling
	     * @param {?} nodes
	     * @return {?}
	     */
	    function moveNodesAfterSibling(sibling, nodes) {
	        var /** @type {?} */ parent = sibling.parentNode;
	        if (nodes.length > 0 && parent) {
	            var /** @type {?} */ nextSibling = sibling.nextSibling;
	            if (nextSibling) {
	                for (var /** @type {?} */ i = 0; i < nodes.length; i++) {
	                    parent.insertBefore(nodes[i], nextSibling);
	                }
	            }
	            else {
	                for (var /** @type {?} */ i = 0; i < nodes.length; i++) {
	                    parent.appendChild(nodes[i]);
	                }
	            }
	        }
	    }
	    /**
	     * @param {?} parent
	     * @param {?} nodes
	     * @return {?}
	     */
	    function appendNodes(parent, nodes) {
	        for (var /** @type {?} */ i = 0; i < nodes.length; i++) {
	            parent.appendChild(nodes[i]);
	        }
	    }
	    /**
	     * @param {?} eventHandler
	     * @return {?}
	     */
	    function decoratePreventDefault(eventHandler) {
	        return function (event) {
	            var /** @type {?} */ allowDefaultBehavior = eventHandler(event);
	            if (allowDefaultBehavior === false) {
	                // TODO(tbosch): move preventDefault into event plugins...
	                event.preventDefault();
	                event.returnValue = false;
	            }
	        };
	    }
	    var /** @type {?} */ COMPONENT_REGEX = /%COMP%/g;
	    var /** @type {?} */ COMPONENT_VARIABLE = '%COMP%';
	    var /** @type {?} */ HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
	    var /** @type {?} */ CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
	    /**
	     * @param {?} componentShortId
	     * @return {?}
	     */
	    function shimContentAttribute(componentShortId) {
	        return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
	    }
	    /**
	     * @param {?} componentShortId
	     * @return {?}
	     */
	    function shimHostAttribute(componentShortId) {
	        return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
	    }
	    /**
	     * @param {?} compId
	     * @param {?} styles
	     * @param {?} target
	     * @return {?}
	     */
	    function flattenStyles(compId, styles, target) {
	        for (var /** @type {?} */ i = 0; i < styles.length; i++) {
	            var /** @type {?} */ style = styles[i];
	            if (Array.isArray(style)) {
	                flattenStyles(compId, style, target);
	            }
	            else {
	                style = style.replace(COMPONENT_REGEX, compId);
	                target.push(style);
	            }
	        }
	        return target;
	    }
	    var /** @type {?} */ NS_PREFIX_RE = /^:([^:]+):(.+)$/;
	    /**
	     * @param {?} name
	     * @return {?}
	     */
	    function isNamespaced(name) {
	        return name[0] === ':';
	    }
	    /**
	     * @param {?} name
	     * @return {?}
	     */
	    function splitNamespace(name) {
	        var /** @type {?} */ match = name.match(NS_PREFIX_RE);
	        return [match[1], match[2]];
	    }
	
	    var /** @type {?} */ CORE_TOKENS = {
	        'ApplicationRef': core.ApplicationRef,
	        'NgZone': core.NgZone,
	    };
	    var /** @type {?} */ INSPECT_GLOBAL_NAME = 'ng.probe';
	    var /** @type {?} */ CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
	    /**
	     * Returns a {\@link DebugElement} for the given native DOM element, or
	     * null if the given native element does not have an Angular view associated
	     * with it.
	     * @param {?} element
	     * @return {?}
	     */
	    function inspectNativeElement(element) {
	        return core.getDebugNode(element);
	    }
	    /**
	     * Deprecated. Use the one from '\@angular/core'.
	     * @deprecated
	     */
	    var NgProbeToken = (function () {
	        /**
	         * @param {?} name
	         * @param {?} token
	         */
	        function NgProbeToken(name, token) {
	            this.name = name;
	            this.token = token;
	        }
	        return NgProbeToken;
	    }());
	    /**
	     * @param {?} rootRenderer
	     * @param {?} extraTokens
	     * @param {?} coreTokens
	     * @return {?}
	     */
	    function _createConditionalRootRenderer(rootRenderer, extraTokens, coreTokens) {
	        return core.isDevMode() ?
	            _createRootRenderer(rootRenderer, (extraTokens || []).concat(coreTokens || [])) :
	            rootRenderer;
	    }
	    /**
	     * @param {?} rootRenderer
	     * @param {?} extraTokens
	     * @return {?}
	     */
	    function _createRootRenderer(rootRenderer, extraTokens) {
	        getDOM().setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
	        getDOM().setGlobalVar(CORE_TOKENS_GLOBAL_NAME, StringMapWrapper.merge(CORE_TOKENS, _ngProbeTokensToMap(extraTokens || [])));
	        return new DebugDomRootRenderer(rootRenderer);
	    }
	    /**
	     * @param {?} tokens
	     * @return {?}
	     */
	    function _ngProbeTokensToMap(tokens) {
	        return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
	    }
	    /**
	     * Providers which support debugging Angular applications (e.g. via `ng.probe`).
	     */
	    var /** @type {?} */ ELEMENT_PROBE_PROVIDERS = [{
	            provide: core.RootRenderer,
	            useFactory: _createConditionalRootRenderer,
	            deps: [
	                DomRootRenderer, [NgProbeToken, new core.Optional()],
	                [core.NgProbeToken, new core.Optional()]
	            ]
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
	        /**
	         * @param {?} eventName
	         * @return {?}
	         */
	        DomEventsPlugin.prototype.supports = function (eventName) { return true; };
	        /**
	         * @param {?} element
	         * @param {?} eventName
	         * @param {?} handler
	         * @return {?}
	         */
	        DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            element.addEventListener(eventName, /** @type {?} */ (handler), false);
	            return function () { return element.removeEventListener(eventName, /** @type {?} */ (handler), false); };
	        };
	        DomEventsPlugin.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        DomEventsPlugin.ctorParameters = function () { return []; };
	        return DomEventsPlugin;
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
	    var /** @type {?} */ EVENT_NAMES = {
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
	    /**
	     * A DI token that you can use to provide{@link HammerGestureConfig} to Angular. Use it to configure
	     * Hammer gestures.
	     *
	     * @experimental
	     */
	    var /** @type {?} */ HAMMER_GESTURE_CONFIG = new core.OpaqueToken('HammerGestureConfig');
	    /**
	     * \@experimental
	     */
	    var HammerGestureConfig = (function () {
	        function HammerGestureConfig() {
	            this.events = [];
	            this.overrides = {};
	        }
	        /**
	         * @param {?} element
	         * @return {?}
	         */
	        HammerGestureConfig.prototype.buildHammer = function (element) {
	            var /** @type {?} */ mc = new Hammer(element);
	            mc.get('pinch').set({ enable: true });
	            mc.get('rotate').set({ enable: true });
	            for (var eventName in this.overrides) {
	                mc.get(eventName).set(this.overrides[eventName]);
	            }
	            return mc;
	        };
	        HammerGestureConfig.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        HammerGestureConfig.ctorParameters = function () { return []; };
	        return HammerGestureConfig;
	    }());
	    var HammerGesturesPlugin = (function (_super) {
	        __extends$6(HammerGesturesPlugin, _super);
	        /**
	         * @param {?} _config
	         */
	        function HammerGesturesPlugin(_config) {
	            _super.call(this);
	            this._config = _config;
	        }
	        /**
	         * @param {?} eventName
	         * @return {?}
	         */
	        HammerGesturesPlugin.prototype.supports = function (eventName) {
	            if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
	                return false;
	            }
	            if (!((window)).Hammer) {
	                throw new Error("Hammer.js is not loaded, can not bind " + eventName + " event");
	            }
	            return true;
	        };
	        /**
	         * @param {?} element
	         * @param {?} eventName
	         * @param {?} handler
	         * @return {?}
	         */
	        HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            var _this = this;
	            var /** @type {?} */ zone = this.manager.getZone();
	            eventName = eventName.toLowerCase();
	            return zone.runOutsideAngular(function () {
	                // Creating the manager bind events, must be done outside of angular
	                var /** @type {?} */ mc = _this._config.buildHammer(element);
	                var /** @type {?} */ callback = function (eventObj) {
	                    zone.runGuarded(function () { handler(eventObj); });
	                };
	                mc.on(eventName, callback);
	                return function () { return mc.off(eventName, callback); };
	            });
	        };
	        /**
	         * @param {?} eventName
	         * @return {?}
	         */
	        HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
	        HammerGesturesPlugin.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        HammerGesturesPlugin.ctorParameters = function () { return [
	            { type: HammerGestureConfig, decorators: [{ type: core.Inject, args: [HAMMER_GESTURE_CONFIG,] },] },
	        ]; };
	        return HammerGesturesPlugin;
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
	    var /** @type {?} */ MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
	    var /** @type {?} */ MODIFIER_KEY_GETTERS = {
	        'alt': function (event) { return event.altKey; },
	        'control': function (event) { return event.ctrlKey; },
	        'meta': function (event) { return event.metaKey; },
	        'shift': function (event) { return event.shiftKey; }
	    };
	    /**
	     * \@experimental
	     */
	    var KeyEventsPlugin = (function (_super) {
	        __extends$7(KeyEventsPlugin, _super);
	        function KeyEventsPlugin() {
	            _super.call(this);
	        }
	        /**
	         * @param {?} eventName
	         * @return {?}
	         */
	        KeyEventsPlugin.prototype.supports = function (eventName) { return KeyEventsPlugin.parseEventName(eventName) != null; };
	        /**
	         * @param {?} element
	         * @param {?} eventName
	         * @param {?} handler
	         * @return {?}
	         */
	        KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
	            var /** @type {?} */ parsedEvent = KeyEventsPlugin.parseEventName(eventName);
	            var /** @type {?} */ outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
	            return this.manager.getZone().runOutsideAngular(function () {
	                return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
	            });
	        };
	        /**
	         * @param {?} eventName
	         * @return {?}
	         */
	        KeyEventsPlugin.parseEventName = function (eventName) {
	            var /** @type {?} */ parts = eventName.toLowerCase().split('.');
	            var /** @type {?} */ domEventName = parts.shift();
	            if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
	                return null;
	            }
	            var /** @type {?} */ key = KeyEventsPlugin._normalizeKey(parts.pop());
	            var /** @type {?} */ fullKey = '';
	            MODIFIER_KEYS.forEach(function (modifierName) {
	                var /** @type {?} */ index = parts.indexOf(modifierName);
	                if (index > -1) {
	                    parts.splice(index, 1);
	                    fullKey += modifierName + '.';
	                }
	            });
	            fullKey += key;
	            if (parts.length != 0 || key.length === 0) {
	                // returning null instead of throwing to let another plugin process the event
	                return null;
	            }
	            var /** @type {?} */ result = {};
	            result['domEventName'] = domEventName;
	            result['fullKey'] = fullKey;
	            return result;
	        };
	        /**
	         * @param {?} event
	         * @return {?}
	         */
	        KeyEventsPlugin.getEventFullKey = function (event) {
	            var /** @type {?} */ fullKey = '';
	            var /** @type {?} */ key = getDOM().getEventKey(event);
	            key = key.toLowerCase();
	            if (key === ' ') {
	                key = 'space'; // for readability
	            }
	            else if (key === '.') {
	                key = 'dot'; // because '.' is used as a separator in event names
	            }
	            MODIFIER_KEYS.forEach(function (modifierName) {
	                if (modifierName != key) {
	                    var /** @type {?} */ modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
	                    if (modifierGetter(event)) {
	                        fullKey += modifierName + '.';
	                    }
	                }
	            });
	            fullKey += key;
	            return fullKey;
	        };
	        /**
	         * @param {?} fullKey
	         * @param {?} handler
	         * @param {?} zone
	         * @return {?}
	         */
	        KeyEventsPlugin.eventCallback = function (fullKey, handler, zone) {
	            return function (event /** TODO #9100 */) {
	                if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
	                    zone.runGuarded(function () { return handler(event); });
	                }
	            };
	        };
	        /**
	         * \@internal
	         * @param {?} keyName
	         * @return {?}
	         */
	        KeyEventsPlugin._normalizeKey = function (keyName) {
	            // TODO: switch to a Map if the mapping grows too much
	            switch (keyName) {
	                case 'esc':
	                    return 'escape';
	                default:
	                    return keyName;
	            }
	        };
	        KeyEventsPlugin.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        KeyEventsPlugin.ctorParameters = function () { return []; };
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
	    var /** @type {?} */ SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
	    /** A pattern that matches safe data URLs. Only matches image, video and audio types. */
	    var /** @type {?} */ DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
	    /**
	     * @param {?} url
	     * @return {?}
	     */
	    function sanitizeUrl(url) {
	        url = String(url);
	        if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN))
	            return url;
	        if (core.isDevMode()) {
	            getDOM().log("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)");
	        }
	        return 'unsafe:' + url;
	    }
	    /**
	     * @param {?} srcset
	     * @return {?}
	     */
	    function sanitizeSrcset(srcset) {
	        srcset = String(srcset);
	        return srcset.split(',').map(function (srcset) { return sanitizeUrl(srcset.trim()); }).join(', ');
	    }
	
	    /** A <body> element that can be safely used to parse untrusted HTML. Lazily initialized below. */
	    var /** @type {?} */ inertElement = null;
	    /** Lazily initialized to make sure the DOM adapter gets set before use. */
	    var /** @type {?} */ DOM = null;
	    /**
	     * Returns an HTML element that is guaranteed to not execute code when creating elements in it.
	     * @return {?}
	     */
	    function getInertElement() {
	        if (inertElement)
	            return inertElement;
	        DOM = getDOM();
	        // Prefer using <template> element if supported.
	        var /** @type {?} */ templateEl = DOM.createElement('template');
	        if ('content' in templateEl)
	            return templateEl;
	        var /** @type {?} */ doc = DOM.createHtmlDocument();
	        inertElement = DOM.querySelector(doc, 'body');
	        if (inertElement == null) {
	            // usually there should be only one body element in the document, but IE doesn't have any, so we
	            // need to create one.
	            var /** @type {?} */ html = DOM.createElement('html', doc);
	            inertElement = DOM.createElement('body', doc);
	            DOM.appendChild(html, inertElement);
	            DOM.appendChild(doc, html);
	        }
	        return inertElement;
	    }
	    /**
	     * @param {?} tags
	     * @return {?}
	     */
	    function tagSet(tags) {
	        var /** @type {?} */ res = {};
	        for (var _i = 0, _a = tags.split(','); _i < _a.length; _i++) {
	            var t = _a[_i];
	            res[t] = true;
	        }
	        return res;
	    }
	    /**
	     * @param {...?} sets
	     * @return {?}
	     */
	    function merge() {
	        var sets = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sets[_i - 0] = arguments[_i];
	        }
	        var /** @type {?} */ res = {};
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
	    var /** @type {?} */ VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
	    // Elements that you can, intentionally, leave open (and which close themselves)
	    // http://dev.w3.org/html5/spec/Overview.html#optional-tags
	    var /** @type {?} */ OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
	    var /** @type {?} */ OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
	    var /** @type {?} */ OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
	    // Safe Block Elements - HTML5
	    var /** @type {?} */ BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
	        'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
	        'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
	    // Inline Elements - HTML5
	    var /** @type {?} */ INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
	        'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
	        'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
	    var /** @type {?} */ VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
	    // Attributes that have href and hence need to be sanitized
	    var /** @type {?} */ URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
	    // Attributes that have special href set hence need to be sanitized
	    var /** @type {?} */ SRCSET_ATTRS = tagSet('srcset');
	    var /** @type {?} */ HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
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
	    var /** @type {?} */ VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
	    /**
	     * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
	     * attributes.
	     */
	    var SanitizingHtmlSerializer = (function () {
	        function SanitizingHtmlSerializer() {
	            this.sanitizedSomething = false;
	            this.buf = [];
	        }
	        /**
	         * @param {?} el
	         * @return {?}
	         */
	        SanitizingHtmlSerializer.prototype.sanitizeChildren = function (el) {
	            // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
	            // However this code never accesses properties off of `document` before deleting its contents
	            // again, so it shouldn't be vulnerable to DOM clobbering.
	            var /** @type {?} */ current = el.firstChild;
	            while (current) {
	                if (DOM.isElementNode(current)) {
	                    this.startElement(/** @type {?} */ (current));
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
	                        this.endElement(/** @type {?} */ (current));
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
	        /**
	         * @param {?} element
	         * @return {?}
	         */
	        SanitizingHtmlSerializer.prototype.startElement = function (element) {
	            var _this = this;
	            var /** @type {?} */ tagName = DOM.nodeName(element).toLowerCase();
	            if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
	                this.sanitizedSomething = true;
	                return;
	            }
	            this.buf.push('<');
	            this.buf.push(tagName);
	            DOM.attributeMap(element).forEach(function (value, attrName) {
	                var /** @type {?} */ lower = attrName.toLowerCase();
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
	        /**
	         * @param {?} current
	         * @return {?}
	         */
	        SanitizingHtmlSerializer.prototype.endElement = function (current) {
	            var /** @type {?} */ tagName = DOM.nodeName(current).toLowerCase();
	            if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
	                this.buf.push('</');
	                this.buf.push(tagName);
	                this.buf.push('>');
	            }
	        };
	        /**
	         * @param {?} chars
	         * @return {?}
	         */
	        SanitizingHtmlSerializer.prototype.chars = function (chars /** TODO #9100 */) { this.buf.push(encodeEntities(chars)); };
	        return SanitizingHtmlSerializer;
	    }());
	    // Regular Expressions for parsing tags and attributes
	    var /** @type {?} */ SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	    // ! to ~ is the ASCII range.
	    var /** @type {?} */ NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
	    /**
	     * Escapes all potentially dangerous characters, so that the
	     * resulting string can be safely inserted into attribute or
	     * element text.
	     * @param {?} value
	     * @return {?}
	     */
	    function encodeEntities(value) {
	        return value.replace(/&/g, '&amp;')
	            .replace(SURROGATE_PAIR_REGEXP, function (match) {
	            var /** @type {?} */ hi = match.charCodeAt(0);
	            var /** @type {?} */ low = match.charCodeAt(1);
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
	     * @param {?} el
	     * @return {?}
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
	                stripCustomNsAttrs(/** @type {?} */ (n));
	        }
	    }
	    /**
	     * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
	     * the DOM in a browser environment.
	     * @param {?} unsafeHtmlInput
	     * @return {?}
	     */
	    function sanitizeHtml(unsafeHtmlInput) {
	        try {
	            var /** @type {?} */ containerEl = getInertElement();
	            // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
	            var /** @type {?} */ unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
	            // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
	            // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
	            var /** @type {?} */ mXSSAttempts = 5;
	            var /** @type {?} */ parsedHtml = unsafeHtml;
	            do {
	                if (mXSSAttempts === 0) {
	                    throw new Error('Failed to sanitize html because the input is unstable');
	                }
	                mXSSAttempts--;
	                unsafeHtml = parsedHtml;
	                DOM.setInnerHTML(containerEl, unsafeHtml);
	                if (((DOM.defaultDoc())).documentMode) {
	                    // strip custom-namespaced attributes on IE<=11
	                    stripCustomNsAttrs(containerEl);
	                }
	                parsedHtml = DOM.getInnerHTML(containerEl);
	            } while (unsafeHtml !== parsedHtml);
	            var /** @type {?} */ sanitizer = new SanitizingHtmlSerializer();
	            var /** @type {?} */ safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl) || containerEl);
	            // Clear out the body element.
	            var /** @type {?} */ parent_1 = DOM.getTemplateContent(containerEl) || containerEl;
	            for (var _i = 0, _a = DOM.childNodesAsList(parent_1); _i < _a.length; _i++) {
	                var child = _a[_i];
	                DOM.removeChild(parent_1, child);
	            }
	            if (core.isDevMode() && sanitizer.sanitizedSomething) {
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
	    var /** @type {?} */ VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
	    var /** @type {?} */ TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
	    var /** @type {?} */ COLOR_FNS = '(?:rgb|hsl)a?';
	    var /** @type {?} */ GRADIENTS = '(?:repeating-)?(?:linear|radial)-gradient';
	    var /** @type {?} */ CSS3_FNS = '(?:calc|attr)';
	    var /** @type {?} */ FN_ARGS = '\\([-0-9.%, #a-zA-Z]+\\)';
	    var /** @type {?} */ SAFE_STYLE_VALUE = new RegExp(("^(" + VALUES + "|") +
	        ("(?:" + TRANSFORMATION_FNS + "|" + COLOR_FNS + "|" + GRADIENTS + "|" + CSS3_FNS + ")") +
	        (FN_ARGS + ")$"), 'g');
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
	    var /** @type {?} */ URL_RE = /^url\(([^)]+)\)$/;
	    /**
	     * Checks that quotes (" and ') are properly balanced inside a string. Assumes
	     * that neither escape (\) nor any other character that could result in
	     * breaking out of a string parsing context are allowed;
	     * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
	     *
	     * This code was taken from the Closure sanitization library.
	     * @param {?} value
	     * @return {?}
	     */
	    function hasBalancedQuotes(value) {
	        var /** @type {?} */ outsideSingle = true;
	        var /** @type {?} */ outsideDouble = true;
	        for (var /** @type {?} */ i = 0; i < value.length; i++) {
	            var /** @type {?} */ c = value.charAt(i);
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
	     * @param {?} value
	     * @return {?}
	     */
	    function sanitizeStyle(value) {
	        value = String(value).trim(); // Make sure it's actually a string.
	        if (!value)
	            return '';
	        // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
	        // reasoning behind this.
	        var /** @type {?} */ urlMatch = value.match(URL_RE);
	        if ((urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1]) ||
	            value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
	            return value; // Safe style values.
	        }
	        if (core.isDevMode()) {
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
	    var __extends$8 = (this && this.__extends) || function (d, b) {
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
	     * \@security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
	     * sanitization for the value passed in. Carefully check and audit all values and code paths going
	     * into this call. Make sure any user data is appropriately escaped for this security context.
	     * For more detail, see the [Security Guide](http://g.co/ng/security).
	     *
	     * \@stable
	     * @abstract
	     */
	    var DomSanitizer = (function () {
	        function DomSanitizer() {
	        }
	        /**
	         * Sanitizes a value for use in the given SecurityContext.
	         *
	         * If value is trusted for the context, this method will unwrap the contained safe value and use
	         * it directly. Otherwise, value will be sanitized to be safe in the given context, for example
	         * by replacing URLs that have an unsafe protocol part (such as `javascript:`). The implementation
	         * is responsible to make sure that the value can definitely be safely used in the given context.
	         * @abstract
	         * @param {?} context
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizer.prototype.sanitize = function (context, value) { };
	        /**
	         * Bypass security and trust the given value to be safe HTML. Only use this when the bound HTML
	         * is unsafe (e.g. contains `<script>` tags) and the code should be executed. The sanitizer will
	         * leave safe HTML intact, so in most situations this method should not be used.
	         *
	         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
	         * security risks!
	         * @abstract
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizer.prototype.bypassSecurityTrustHtml = function (value) { };
	        /**
	         * Bypass security and trust the given value to be safe style value (CSS).
	         *
	         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
	         * security risks!
	         * @abstract
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizer.prototype.bypassSecurityTrustStyle = function (value) { };
	        /**
	         * Bypass security and trust the given value to be safe JavaScript.
	         *
	         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
	         * security risks!
	         * @abstract
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizer.prototype.bypassSecurityTrustScript = function (value) { };
	        /**
	         * Bypass security and trust the given value to be a safe style URL, i.e. a value that can be used
	         * in hyperlinks or `<img src>`.
	         *
	         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
	         * security risks!
	         * @abstract
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizer.prototype.bypassSecurityTrustUrl = function (value) { };
	        /**
	         * Bypass security and trust the given value to be a safe resource URL, i.e. a location that may
	         * be used to load executable code from, like `<script src>`, or `<iframe src>`.
	         *
	         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
	         * security risks!
	         * @abstract
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizer.prototype.bypassSecurityTrustResourceUrl = function (value) { };
	        return DomSanitizer;
	    }());
	    var DomSanitizerImpl = (function (_super) {
	        __extends$8(DomSanitizerImpl, _super);
	        function DomSanitizerImpl() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @param {?} ctx
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizerImpl.prototype.sanitize = function (ctx, value) {
	            if (value == null)
	                return null;
	            switch (ctx) {
	                case core.SecurityContext.NONE:
	                    return value;
	                case core.SecurityContext.HTML:
	                    if (value instanceof SafeHtmlImpl)
	                        return value.changingThisBreaksApplicationSecurity;
	                    this.checkNotSafeValue(value, 'HTML');
	                    return sanitizeHtml(String(value));
	                case core.SecurityContext.STYLE:
	                    if (value instanceof SafeStyleImpl)
	                        return value.changingThisBreaksApplicationSecurity;
	                    this.checkNotSafeValue(value, 'Style');
	                    return sanitizeStyle(value);
	                case core.SecurityContext.SCRIPT:
	                    if (value instanceof SafeScriptImpl)
	                        return value.changingThisBreaksApplicationSecurity;
	                    this.checkNotSafeValue(value, 'Script');
	                    throw new Error('unsafe value used in a script context');
	                case core.SecurityContext.URL:
	                    if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
	                        // Allow resource URLs in URL contexts, they are strictly more trusted.
	                        return value.changingThisBreaksApplicationSecurity;
	                    }
	                    this.checkNotSafeValue(value, 'URL');
	                    return sanitizeUrl(String(value));
	                case core.SecurityContext.RESOURCE_URL:
	                    if (value instanceof SafeResourceUrlImpl) {
	                        return value.changingThisBreaksApplicationSecurity;
	                    }
	                    this.checkNotSafeValue(value, 'ResourceURL');
	                    throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
	                default:
	                    throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
	            }
	        };
	        /**
	         * @param {?} value
	         * @param {?} expectedType
	         * @return {?}
	         */
	        DomSanitizerImpl.prototype.checkNotSafeValue = function (value, expectedType) {
	            if (value instanceof SafeValueImpl) {
	                throw new Error(("Required a safe " + expectedType + ", got a " + value.getTypeName() + " ") +
	                    "(see http://g.co/ng/security#xss)");
	            }
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function (value) { return new SafeHtmlImpl(value); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function (value) { return new SafeStyleImpl(value); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizerImpl.prototype.bypassSecurityTrustScript = function (value) { return new SafeScriptImpl(value); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function (value) { return new SafeUrlImpl(value); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
	            return new SafeResourceUrlImpl(value);
	        };
	        DomSanitizerImpl.decorators = [
	            { type: core.Injectable },
	        ];
	        /** @nocollapse */
	        DomSanitizerImpl.ctorParameters = function () { return []; };
	        return DomSanitizerImpl;
	    }(DomSanitizer));
	    /**
	     * @abstract
	     */
	    var SafeValueImpl = (function () {
	        /**
	         * @param {?} changingThisBreaksApplicationSecurity
	         */
	        function SafeValueImpl(changingThisBreaksApplicationSecurity) {
	            this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
	            // empty
	        }
	        /**
	         * @abstract
	         * @return {?}
	         */
	        SafeValueImpl.prototype.getTypeName = function () { };
	        /**
	         * @return {?}
	         */
	        SafeValueImpl.prototype.toString = function () {
	            return ("SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity) +
	                " (see http://g.co/ng/security#xss)";
	        };
	        return SafeValueImpl;
	    }());
	    var SafeHtmlImpl = (function (_super) {
	        __extends$8(SafeHtmlImpl, _super);
	        function SafeHtmlImpl() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        SafeHtmlImpl.prototype.getTypeName = function () { return 'HTML'; };
	        return SafeHtmlImpl;
	    }(SafeValueImpl));
	    var SafeStyleImpl = (function (_super) {
	        __extends$8(SafeStyleImpl, _super);
	        function SafeStyleImpl() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        SafeStyleImpl.prototype.getTypeName = function () { return 'Style'; };
	        return SafeStyleImpl;
	    }(SafeValueImpl));
	    var SafeScriptImpl = (function (_super) {
	        __extends$8(SafeScriptImpl, _super);
	        function SafeScriptImpl() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        SafeScriptImpl.prototype.getTypeName = function () { return 'Script'; };
	        return SafeScriptImpl;
	    }(SafeValueImpl));
	    var SafeUrlImpl = (function (_super) {
	        __extends$8(SafeUrlImpl, _super);
	        function SafeUrlImpl() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        SafeUrlImpl.prototype.getTypeName = function () { return 'URL'; };
	        return SafeUrlImpl;
	    }(SafeValueImpl));
	    var SafeResourceUrlImpl = (function (_super) {
	        __extends$8(SafeResourceUrlImpl, _super);
	        function SafeResourceUrlImpl() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        SafeResourceUrlImpl.prototype.getTypeName = function () { return 'ResourceURL'; };
	        return SafeResourceUrlImpl;
	    }(SafeValueImpl));
	
	    var /** @type {?} */ INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
	        { provide: core.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
	        { provide: _angular_common.PlatformLocation, useClass: BrowserPlatformLocation }
	    ];
	    /**
	     * @security Replacing built-in sanitization providers exposes the application to XSS risks.
	     * Attacker-controlled data introduced by an unsanitized provider could expose your
	     * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
	     * @experimental
	     */
	    var /** @type {?} */ BROWSER_SANITIZATION_PROVIDERS = [
	        { provide: core.Sanitizer, useExisting: DomSanitizer },
	        { provide: DomSanitizer, useClass: DomSanitizerImpl },
	    ];
	    /**
	     * @stable
	     */
	    var /** @type {?} */ platformBrowser = core.createPlatformFactory(core.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
	    /**
	     * @return {?}
	     */
	    function initDomAdapter() {
	        BrowserDomAdapter.makeCurrent();
	        BrowserGetTestability.init();
	    }
	    /**
	     * @return {?}
	     */
	    function errorHandler() {
	        return new core.ErrorHandler();
	    }
	    /**
	     * @return {?}
	     */
	    function _document() {
	        return getDOM().defaultDoc();
	    }
	    /**
	     * @return {?}
	     */
	    function _resolveDefaultAnimationDriver() {
	        if (getDOM().supportsWebAnimation()) {
	            return new WebAnimationsDriver();
	        }
	        return AnimationDriver.NOOP;
	    }
	    /**
	     * The ng module for the browser.
	     *
	     * \@stable
	     */
	    var BrowserModule = (function () {
	        /**
	         * @param {?} parentModule
	         */
	        function BrowserModule(parentModule) {
	            if (parentModule) {
	                throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
	            }
	        }
	        BrowserModule.decorators = [
	            { type: core.NgModule, args: [{
	                        providers: [
	                            BROWSER_SANITIZATION_PROVIDERS, { provide: core.ErrorHandler, useFactory: errorHandler, deps: [] },
	                            { provide: DOCUMENT, useFactory: _document, deps: [] },
	                            { provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true },
	                            { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true },
	                            { provide: EVENT_MANAGER_PLUGINS, useClass: HammerGesturesPlugin, multi: true },
	                            { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
	                            { provide: DomRootRenderer, useClass: DomRootRenderer_ },
	                            { provide: core.RootRenderer, useExisting: DomRootRenderer },
	                            { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
	                            { provide: AnimationDriver, useFactory: _resolveDefaultAnimationDriver }, DomSharedStylesHost,
	                            core.Testability, EventManager, ELEMENT_PROBE_PROVIDERS, Title
	                        ],
	                        exports: [_angular_common.CommonModule, core.ApplicationModule]
	                    },] },
	        ];
	        /** @nocollapse */
	        BrowserModule.ctorParameters = function () { return [
	            { type: BrowserModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf },] },
	        ]; };
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
	    var /** @type {?} */ win = typeof window !== 'undefined' && window || ({});
	
	    var ChangeDetectionPerfRecord = (function () {
	        /**
	         * @param {?} msPerTick
	         * @param {?} numTicks
	         */
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
	        /**
	         * @param {?} ref
	         */
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
	        /**
	         * @param {?} ref
	         */
	        function AngularProfiler(ref) {
	            this.appRef = ref.injector.get(core.ApplicationRef);
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
	         * @param {?} config
	         * @return {?}
	         */
	        AngularProfiler.prototype.timeChangeDetection = function (config) {
	            var /** @type {?} */ record = config && config['record'];
	            var /** @type {?} */ profileName = 'Change Detection';
	            // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
	            var /** @type {?} */ isProfilerAvailable = isPresent(win.console.profile);
	            if (record && isProfilerAvailable) {
	                win.console.profile(profileName);
	            }
	            var /** @type {?} */ start = getDOM().performanceNow();
	            var /** @type {?} */ numTicks = 0;
	            while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
	                this.appRef.tick();
	                numTicks++;
	            }
	            var /** @type {?} */ end = getDOM().performanceNow();
	            if (record && isProfilerAvailable) {
	                // need to cast to <any> because type checker thinks there's no argument
	                // while in fact there is:
	                //
	                // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
	                ((win.console.profileEnd))(profileName);
	            }
	            var /** @type {?} */ msPerTick = (end - start) / numTicks;
	            win.console.log("ran " + numTicks + " change detection cycles");
	            win.console.log(msPerTick.toFixed(2) + " ms per check");
	            return new ChangeDetectionPerfRecord(msPerTick, numTicks);
	        };
	        return AngularProfiler;
	    }());
	
	    var /** @type {?} */ context = (global$1);
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
	     * \@experimental All debugging apis are currently experimental.
	     * @param {?} ref
	     * @return {?}
	     */
	    function enableDebugTools(ref) {
	        ((Object)).assign(context.ng, new AngularTools(ref));
	        return ref;
	    }
	    /**
	     * Disables Angular 2 tools.
	     *
	     * \@experimental All debugging apis are currently experimental.
	     * @return {?}
	     */
	    function disableDebugTools() {
	        if (context.ng) {
	            delete context.ng.profiler;
	        }
	    }
	
	    /**
	     * Predicates for use with {\@link DebugElement}'s query functions.
	     *
	     * \@experimental All debugging apis are currently experimental.
	     */
	    var By = (function () {
	        function By() {
	        }
	        /**
	         * Match all elements.
	         *
	         * ## Example
	         *
	         * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
	         * @return {?}
	         */
	        By.all = function () { return function (debugElement) { return true; }; };
	        /**
	         * Match elements by the given CSS selector.
	         *
	         * ## Example
	         *
	         * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
	         * @param {?} selector
	         * @return {?}
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
	         * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
	         * @param {?} type
	         * @return {?}
	         */
	        By.directive = function (type) {
	            return function (debugElement) { return debugElement.providerTokens.indexOf(type) !== -1; };
	        };
	        return By;
	    }());
	
	    var /** @type {?} */ __platform_browser_private__ = {
	        BrowserPlatformLocation: BrowserPlatformLocation,
	        DomAdapter: DomAdapter,
	        BrowserDomAdapter: BrowserDomAdapter,
	        BrowserGetTestability: BrowserGetTestability,
	        getDOM: getDOM,
	        setRootDomAdapter: setRootDomAdapter,
	        DomRootRenderer_: DomRootRenderer_,
	        DomRootRenderer: DomRootRenderer,
	        NAMESPACE_URIS: NAMESPACE_URIS,
	        shimContentAttribute: shimContentAttribute,
	        shimHostAttribute: shimHostAttribute,
	        flattenStyles: flattenStyles,
	        splitNamespace: splitNamespace,
	        isNamespaced: isNamespaced,
	        DomSharedStylesHost: DomSharedStylesHost,
	        SharedStylesHost: SharedStylesHost,
	        ELEMENT_PROBE_PROVIDERS: ELEMENT_PROBE_PROVIDERS,
	        DomEventsPlugin: DomEventsPlugin,
	        KeyEventsPlugin: KeyEventsPlugin,
	        HammerGesturesPlugin: HammerGesturesPlugin,
	        initDomAdapter: initDomAdapter,
	        INTERNAL_BROWSER_PLATFORM_PROVIDERS: INTERNAL_BROWSER_PLATFORM_PROVIDERS,
	        BROWSER_SANITIZATION_PROVIDERS: BROWSER_SANITIZATION_PROVIDERS,
	        WebAnimationsDriver: WebAnimationsDriver
	    };
	
	    /**
	     * @stable
	     */
	    var /** @type {?} */ VERSION = new core.Version('2.4.10');
	
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
	    exports.VERSION = VERSION;
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
	        this.withCredentials = false;
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
	                    // Body
	                    var urlencoded = headers.get('Content-Type');
	                    var body = null;
	                    if (pBody) {
	                        if (urlencoded && urlencoded === 'application/x-www-form-urlencoded') {
	                            body = args[pBody[0].parameterIndex];
	                        }
	                        else {
	                            body = JSON.stringify(args[pBody[0].parameterIndex]);
	                        }
	                    }
	                    // Request options
	                    var options = new http_1.RequestOptions({
	                        method: method,
	                        url: this.getBaseUrl() + resUrl,
	                        headers: headers,
	                        body: body,
	                        search: search,
	                        withCredentials: this.withCredentials
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