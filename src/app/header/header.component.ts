import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

  <div class="navbar is-dark is-fixed-top">
    <div class="navbar-menu">
      <div class="navbar-end" style="flex-grow: 1; justify-content: center;">
        <a class="navbar-item navbar-center" href="#home">Home</a>
        <a class="navbar-item navbar-center" href="#projects">Projects</a>
        <a class="navbar-item navbar-center" href="#contacts">Contacts</a>
      </div>
    </div>
  </div>

  
  `,
  styles: [`
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
