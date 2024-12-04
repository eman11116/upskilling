import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarOpen = false;  // المتغير للتحكم في حالة السايد بار

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;  // تبديل حالة السايد بار
  }
}
