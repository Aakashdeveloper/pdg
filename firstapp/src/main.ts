import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


  /*
  module=> contains the declaration                   ==> NgModule
  component ==> contains all logical/html/css         ==> Component
  pipe==> manipulate data on run time                 ==> Pipe
  router==> help to manage pages/routing              ==> Component
  service==> help to connect with API/external file   ==> Injectable
  */
