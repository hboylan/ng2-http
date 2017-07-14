import { URLSearchParams, Headers as AngularHeaders, RequestOptions, Request } from '@angular/http';
import 'rxjs/add/operator/mergeMap';
// Store request parameters
export function param(paramName) {
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
}
// perform HTTP request
export function method(method) {
    return function (url) {
        return function (target, propertyKey, descriptor) {
            var pPath = target[propertyKey + "_Path_parameters"];
            var pQuery = target[propertyKey + "_Query_parameters"];
            var pBody = target[propertyKey + "_Body_parameters"];
            var pHeader = target[propertyKey + "_Header_parameters"];
            descriptor.value = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
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
                var search = new URLSearchParams();
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
                var headers = new AngularHeaders(this.getDefaultHeaders());
                // set method specific headers
                for (var j in descriptor.headers) {
                    if (descriptor.headers.hasOwnProperty(j)) {
                        headers.append(j, descriptor.headers[j]);
                    }
                }
                // set parameter specific headers
                if (pHeader) {
                    for (var k_1 in pHeader) {
                        if (pHeader.hasOwnProperty(k_1)) {
                            headers.append(pHeader[k_1].key, args[pHeader[k_1].parameterIndex]);
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
                var options = new RequestOptions({
                    method: method,
                    url: this.getBaseUrl() + resUrl,
                    headers: headers,
                    body: body,
                    search: search,
                    withCredentials: this.withCredentials
                });
                // intercept the request
                return this.requestInterceptor(new Request(options))
                    .mergeMap(function (req) {
                    // make the request and store the observable for later transformation
                    var observable = _this.http.request(req);
                    // global response interceptor
                    observable = _this.responseInterceptor(observable);
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
//# sourceMappingURL=util.js.map