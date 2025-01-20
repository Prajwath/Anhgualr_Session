import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

// For Two way data Binding Child To Parent 
  @Input() Child_To_Parent ="Component"
  @Output() push_data = new EventEmitter<string>();

// component to emitting the data to parent on button click
  PushDataToAppComponent(){
    this.push_data.emit(this.Child_To_Parent)
  }
}
