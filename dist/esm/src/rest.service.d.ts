import { Http, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
/**
* Angular 2 RESTClient class.
*
* @class RESTClient
* @constructor
*/
export declare class RESTClient {
    protected http: Http;
    withCredentials: boolean;
    constructor(http: Http);
    protected getBaseUrl(): string;
    protected getDefaultHeaders(): Object;
    /**
    * Request Interceptor
    *
    * @method requestInterceptor
    * @param {Request} req - request object
    */
    protected requestInterceptor(req: Request): Observable<Request>;
    /**
    * Response Interceptor
    *
    * @method responseInterceptor
    * @param {Response} res - response object
    * @returns {Response} res - transformed response object
    */
    protected responseInterceptor(res: Observable<Response>): Observable<Response>;
}
/**
 * Set the base URL of REST resource
 * @param {String} url - base URL
 */
export declare function BaseUrl(url: string): <TFunction extends Function>(Target: TFunction) => TFunction;
/**
 * Set default headers for every method of the RESTClient
 * @param {Object} headers - deafult headers in a key-value pair
 */
export declare function DefaultHeaders(headers: any): <TFunction extends Function>(Target: TFunction) => TFunction;
/**
 * Set custom headers for a REST method
 * @param {Object} headersDef - custom headers in a key-value pair
 */
export declare function Headers(headersDef: any): (target: RESTClient, propertyKey: string, descriptor: any) => any;
/**
 * Defines the type(s) that the responses can produce
 */
export declare function Produces<T>(interceptor?: (res: Response) => any): (target: RESTClient, propertyKey: string, descriptor: any) => any;
/**
 * Path variable of a method's url, type: string
 * @param {string} key - path key to bind value
 */
export declare let Path: (key: string) => (target: RESTClient, propertyKey: string | symbol, parameterIndex: number) => void;
/**
 * Query value of a method's url, type: string
 * @param {string} key - query key to bind value
 */
export declare let Query: (key: string) => (target: RESTClient, propertyKey: string | symbol, parameterIndex: number) => void;
/**
 * Body of a REST method, type: key-value pair object
 * Only one body per method!
 */
export declare let Body: (target: RESTClient, propertyKey: string | symbol, parameterIndex: number) => void;
/**
 * Custom header of a REST method, type: string
 * @param {string} key - header key to bind value
 */
export declare let Header: (key: string) => (target: RESTClient, propertyKey: string | symbol, parameterIndex: number) => void;
/**
 * GET method
 * @param {string} url - resource url of the method
 */
export declare let GET: (url: string) => (target: RESTClient, propertyKey: string, descriptor: any) => any;
/**
 * POST method
 * @param {string} url - resource url of the method
 */
export declare let POST: (url: string) => (target: RESTClient, propertyKey: string, descriptor: any) => any;
/**
 * PUT method
 * @param {string} url - resource url of the method
 */
export declare let PUT: (url: string) => (target: RESTClient, propertyKey: string, descriptor: any) => any;
/**
 * DELETE method
 * @param {string} url - resource url of the method
 */
export declare let DELETE: (url: string) => (target: RESTClient, propertyKey: string, descriptor: any) => any;
/**
 * HEAD method
 * @param {string} url - resource url of the method
 */
export declare let HEAD: (url: string) => (target: RESTClient, propertyKey: string, descriptor: any) => any;
/**
 * PATCH method
 * @param {string} url - resource url of the method
 */
export declare let PATCH: (url: string) => (target: RESTClient, propertyKey: string, descriptor: any) => any;
