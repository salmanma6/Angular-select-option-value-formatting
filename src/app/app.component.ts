import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  regex=/.*_/g;
  version={
       versionName:"1232.22_D1.123"
    }
  selectedVersion={
      versionDate:"12-JUN-2020"
  }
  formatVersion(versionname,date){
    return versionname.replace(this.regex,date.slice(-4)+"_")
  }
}
