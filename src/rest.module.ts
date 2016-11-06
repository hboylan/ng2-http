import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RESTClient} from './rest.service';

/**
 * Main Angular2 NgModule. Exports HttpModule for you.
 *
 * @class RESTModule
 */
@NgModule({
  declarations: [],
  imports: [HttpModule],
  exports: [HttpModule],
  providers: [RESTClient]
})
export class RESTModule {}
