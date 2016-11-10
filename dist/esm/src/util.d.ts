import { RESTClient } from './rest.service';
/**
* Builds custom descriptors
*
* @class Builder
*/
export declare class Builder {
    static param(paramName: string): (key: string) => (target: RESTClient, propertyKey: string | symbol, parameterIndex: number) => void;
    static method(method: number): (url: string) => (target: RESTClient, propertyKey: string, descriptor: any) => any;
}
