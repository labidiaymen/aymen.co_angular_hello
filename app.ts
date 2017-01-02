import { NgModule, Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

 @Component({
 selector: 'hello-angular',
 template: `
 <div> Hello Angular developers</div>
 `
 })
 class HelloAngular {
 }

 @NgModule({
 declarations: [ HelloAngular ],
 imports: [ BrowserModule ],
 bootstrap: [ HelloAngular ],
 })
 class HelloAngularAppModule {}

 platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);