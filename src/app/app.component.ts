import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
    Hello World
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    logoSrc: String = 'path/to/logo';

    onLogoClicked() {
        window.alert('THE LOGO WAS CLICKED!');
    }
}
