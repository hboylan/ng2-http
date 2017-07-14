import { Http, Headers as AngularHeaders, RequestOptions, RequestMethod as RequestMethods, URLSearchParams } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { param, method } from './util';
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
        if (AngularHeaders)
            if (RequestOptions)
                if (URLSearchParams)
                    return null; // this is to quash unused imports messages
        return undefined;
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
        return Observable.of(req);
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
    RESTClient.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RESTClient.ctorParameters = function () { return [
        { type: Http, decorators: [{ type: Inject, args: [Http,] },] },
    ]; };
    return RESTClient;
}());
export { RESTClient };
/**
 * Set the base URL of REST resource
 * @param {String} url - base URL
 */
export function BaseUrl(url) {
    return function (Target) {
        Target.prototype.getBaseUrl = function () {
            return url;
        };
        return Target;
    };
}
/**
 * Set default headers for every method of the RESTClient
 * @param {Object} headers - deafult headers in a key-value pair
 */
export function DefaultHeaders(headers) {
    return function (Target) {
        Target.prototype.getDefaultHeaders = function () {
            return headers;
        };
        return Target;
    };
}
/**
 * Set custom headers for a REST method
 * @param {Object} headersDef - custom headers in a key-value pair
 */
export function Headers(headersDef) {
    return function (target, propertyKey, descriptor) {
        descriptor.headers = headersDef;
        return descriptor;
    };
}
/**
 * Defines the type(s) that the responses can produce
 */
export function Produces(interceptor) {
    return function (target, propertyKey, descriptor) {
        descriptor.producer = function (res) {
            var data;
            if (interceptor) {
                data = interceptor(res);
            }
            return data || res.json();
        };
        return descriptor;
    };
}
/**
 * Path variable of a method's url, type: string
 * @param {string} key - path key to bind value
 */
export var Path = param('Path');
/**
 * Query value of a method's url, type: string
 * @param {string} key - query key to bind value
 */
export var Query = param('Query');
/**
 * Body of a REST method, type: key-value pair object
 * Only one body per method!
 */
export var Body = param('Body')('Body');
/**
 * Custom header of a REST method, type: string
 * @param {string} key - header key to bind value
 */
export var Header = param('Header');
/**
 * GET method
 * @param {string} url - resource url of the method
 */
export var GET = method(RequestMethods.Get);
/**
 * POST method
 * @param {string} url - resource url of the method
 */
export var POST = method(RequestMethods.Post);
/**
 * PUT method
 * @param {string} url - resource url of the method
 */
export var PUT = method(RequestMethods.Put);
/**
 * DELETE method
 * @param {string} url - resource url of the method
 */
export var DELETE = method(RequestMethods.Delete);
/**
 * HEAD method
 * @param {string} url - resource url of the method
 */
export var HEAD = method(RequestMethods.Head);
/**
 * PATCH method
 * @param {string} url - resource url of the method
 */
export var PATCH = method(RequestMethods.Patch);
//# sourceMappingURL=rest.service.js.map