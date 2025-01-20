import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularProject-app';

  value= 'input';

  valueTwo='two_Way_binding';

  test_click(){
    alert("button clicked")
  };

  Two_way(){
    alert(this.valueTwo)
  }

  Parent_To_Child="Parent to Child Component"


//parent to child and showin it on and event listener
  PushData(data : any){
    alert(data)

  }


}
