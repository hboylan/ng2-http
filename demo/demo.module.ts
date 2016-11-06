import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RESTModule} from '../src';
import {Demo} from './demo.component';
import {DemoService} from './demo.service';

@NgModule({
  declarations: [Demo],
  imports: [FormsModule, BrowserModule, RESTModule],
  bootstrap: [Demo],
  providers: [DemoService]
})
export class DemoModule {}
