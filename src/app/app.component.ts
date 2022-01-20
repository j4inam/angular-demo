import { Component } from '@angular/core';

interface NavItem {
  path: string;
  label: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems: NavItem[] = [
    {
      path: '/',
      label: 'Page 1',
    },
    {
      path: '/page2',
      label: 'Page 2',
    },
    {
      path: '/page3',
      label: 'Page 3',
    },
  ];

  elements = [
    { type: 'H1', label: 'Text' },
    { type: 'H2', label: 'Text' },
    { type: 'p', label: 'Text' },
  ];

  num1: number = 10;
  num2: number = 10;

  name: string = 'Aishwarya';

  showName = this.num1 == this.num2;

  init() {
    switch (this.num1) {
      case 1:
        console.log();
        break;
    }
  }
}
