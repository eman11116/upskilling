import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {
  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;}
}
