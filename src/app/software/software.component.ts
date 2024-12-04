import { Component } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent {
  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;}
}
