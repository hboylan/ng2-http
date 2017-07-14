import { RESTClient } from './rest.service';
import 'rxjs/add/operator/mergeMap';
export declare function param(paramName: string): (key: string) => (target: RESTClient, propertyKey: string | symbol, parameterIndex: number) => void;
export declare function method(method: number): (url: string) => (target: RESTClient, propertyKey: string, descriptor: any) => any;
