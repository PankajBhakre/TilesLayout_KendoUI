import { Component } from '@angular/core';
import { TileLayoutDraggingService, TileLayoutReorderEvent, TileLayoutResizeEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   iconVisible: boolean = false;
   iconVisible2: boolean = false;
   iconVisible3: boolean = false;

public onReorder(e:TileLayoutReorderEvent){
  console.log(e);
}

  mouseEnter(){
    this.iconVisible = !this.iconVisible;
 }
 mouseEnter2(){
  this.iconVisible2 = !this.iconVisible2;
 }

  mouseEnter3(){
  this.iconVisible3 = !this.iconVisible3;
 }
}
