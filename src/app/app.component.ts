import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <!-- Header -->
  <app-header></app-header>

  <router-outlet></router-outlet>

  <app-projects></app-projects>

  <!-- Footer -->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'personal-site-angular';
}
