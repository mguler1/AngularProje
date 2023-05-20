import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProje'; //text interplation örneği
  name:string ="Muhammed";
  twoWayExample:string;
  arrays:string[]=["Muhammed","Mehti","GÜLER"]

  visible:boolean=true;
}
