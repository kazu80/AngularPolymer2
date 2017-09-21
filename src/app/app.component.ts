import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
    <app-logo [src]="logoSrc" (logoClicked)="onLogoClicked()"></app-logo>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    logoSrc: String = 'path/to/logo';

    onLogoClicked() {
        window.alert('THE LOGO WAS CLICKED!');
    }
}
