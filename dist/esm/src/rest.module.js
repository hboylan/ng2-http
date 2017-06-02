import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RESTClient } from './rest.service';
/**
 * Main Angular2 NgModule. Exports HttpModule for you.
 *
 * @class RESTModule
 */
export var RESTModule = (function () {
    function RESTModule() {
    }
    RESTModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [HttpModule],
                    exports: [HttpModule],
                    providers: [RESTClient]
                },] },
    ];
    /** @nocollapse */
    RESTModule.ctorParameters = function () { return []; };
    return RESTModule;
}());
//# sourceMappingURL=rest.module.js.map