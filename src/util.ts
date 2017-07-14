import {
  URLSearchParams,
  Headers as AngularHeaders,
  RequestOptions,
  Request
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {RESTClient} from './rest.service';
import 'rxjs/add/operator/mergeMap';


// Store request parameters
export function param(paramName: string) {
  return function(key: string) {
    return function(target: RESTClient, propertyKey: string | symbol, parameterIndex: number) {
      var metadataKey = `${propertyKey}_${paramName}_parameters`;
      var paramObj: any = {
        key: key,
        parameterIndex: parameterIndex
      };
      if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(paramObj);
      } else {
        target[metadataKey] = [paramObj];
      }
    };
  };
}

  // perform HTTP request
export function method(method: number) {
  return function(url: string) {
    return function(target: RESTClient, propertyKey: string, descriptor: any) {

      var pPath = target[`${propertyKey}_Path_parameters`];
      var pQuery = target[`${propertyKey}_Query_parameters`];
      var pBody = target[`${propertyKey}_Body_parameters`];
      var pHeader = target[`${propertyKey}_Header_parameters`];

      descriptor.value = function(...args: any[]) {

        // Path
        var resUrl: string = url;
        if (pPath) {
          for (var k in pPath) {
            if (pPath.hasOwnProperty(k)) {
              resUrl = resUrl.replace('{' + pPath[k].key + '}', args[pPath[k].parameterIndex]);
            }
          }
        }

        // Query
        var search = new URLSearchParams();
        if (pQuery) {
          pQuery
          .filter(p => args[p.parameterIndex]) // filter out optional parameters
          .forEach(p => {
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
        var headers = new AngularHeaders(this.getDefaultHeaders());
        // set method specific headers
        for (let j in descriptor.headers) {
            if (descriptor.headers.hasOwnProperty(j)) {
                headers.append(j, descriptor.headers[j]);
            }
        }
        // set parameter specific headers
        if (pHeader) {
          for (let k in pHeader) {
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
          } else {
            body = JSON.stringify(args[pBody[0].parameterIndex]);
          }
        }

        // Request options
        var options = new RequestOptions({
          method,
          url: this.getBaseUrl() + resUrl,
          headers,
          body,
          search,
          withCredentials: this.withCredentials
        });

        // intercept the request
        return this.requestInterceptor(new Request(options))
          .mergeMap(req => {

            // make the request and store the observable for later transformation
            var observable: Observable<any> = this.http.request(req);

            // global response interceptor
            observable = this.responseInterceptor(observable);

            // transform the obserable in accordance to the @Produces decorator
            if (descriptor.producer) {
              observable = observable.map(descriptor.producer);
            }

            return observable;
          });
      };

      return descriptor;
    };
  };
}
