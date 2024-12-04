import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent {
  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;}
}