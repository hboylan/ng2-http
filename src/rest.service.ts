import {
  Http,
  Headers as AngularHeaders,
  Request,
  RequestOptions,
  RequestMethod as RequestMethods,
  Response,
  URLSearchParams
} from '@angular/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Builder} from './util';

/**
* Angular 2 RESTClient class.
*
* @class RESTClient
* @constructor
*/
@Injectable()
export class RESTClient {

  public constructor(@Inject(Http) protected http: Http) {}

  protected getBaseUrl(): string {
    return null;
  };

  protected getDefaultHeaders(): Object {
    return null;
  };

  /**
  * Request Interceptor
  *
  * @method requestInterceptor
  * @param {Request} req - request object
  */
  protected requestInterceptor(req: Request): Request {
    return req;
  }

  /**
  * Response Interceptor
  *
  * @method responseInterceptor
  * @param {Response} res - response object
  * @returns {Response} res - transformed response object
  */
  protected responseInterceptor(res: Observable<Response>): Observable<Response> {
    return res;
  }
}

/**
 * Set the base URL of REST resource
 * @param {String} url - base URL
 */
export function BaseUrl(url: string) {
  return function <TFunction extends Function>(Target: TFunction): TFunction {
    Target.prototype.getBaseUrl = function() {
      return url;
    };
    return Target;
  };
}

/**
 * Set default headers for every method of the RESTClient
 * @param {Object} headers - deafult headers in a key-value pair
 */
export function DefaultHeaders(headers: any) {
  return function <TFunction extends Function>(Target: TFunction): TFunction {
    Target.prototype.getDefaultHeaders = function() {
      return headers;
    };
    return Target;
  };
}


/**
 * Set custom headers for a REST method
 * @param {Object} headersDef - custom headers in a key-value pair
 */
export function Headers(headersDef: any) {
  return function(target: RESTClient, propertyKey: string, descriptor: any) {
    descriptor.headers = headersDef;
    return descriptor;
  };
}


/**
 * Defines the type(s) that the responses can produce
 */
export function Produces<T>(interceptor?: (res: Response) => void) {
  return function(target: RESTClient, propertyKey: string, descriptor: any) {
    descriptor.producer = (res: Response) => {
      if (interceptor) {
        interceptor(res)
      }
      return <T>res.json()
    }
    return descriptor;
  };
}


/**
 * Path variable of a method's url, type: string
 * @param {string} key - path key to bind value
 */
export let Path = Builder.param('Path');
/**
 * Query value of a method's url, type: string
 * @param {string} key - query key to bind value
 */
export let Query = Builder.param('Query');
/**
 * Body of a REST method, type: key-value pair object
 * Only one body per method!
 */
export let Body = Builder.param('Body')('Body');
/**
 * Custom header of a REST method, type: string
 * @param {string} key - header key to bind value
 */
export let Header = Builder.param('Header');

/**
 * GET method
 * @param {string} url - resource url of the method
 */
export let GET = Builder.method(RequestMethods.Get);
/**
 * POST method
 * @param {string} url - resource url of the method
 */
export let POST = Builder.method(RequestMethods.Post);
/**
 * PUT method
 * @param {string} url - resource url of the method
 */
export let PUT = Builder.method(RequestMethods.Put);
/**
 * DELETE method
 * @param {string} url - resource url of the method
 */
export let DELETE = Builder.method(RequestMethods.Delete);
/**
 * HEAD method
 * @param {string} url - resource url of the method
 */
export let HEAD = Builder.method(RequestMethods.Head);
