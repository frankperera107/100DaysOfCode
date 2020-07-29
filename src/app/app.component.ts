import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  test(){
    console.log('testing');
  }

  onSearch(searchEventEmit){
    //alert(`From the app component: ${searchEventEmit}`);
    alert("Event emitted : "+searchEventEmit);
  }
}
