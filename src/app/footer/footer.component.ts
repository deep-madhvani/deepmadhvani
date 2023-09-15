import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer" id="contacts">
    <div class="container has-text-centered">
      <p class="title is-2 is-spaced">Contacts</p>
      <a class="button is-warning footer-btn mr-1" href="mailto:deepmadhvani0543@gmail.com" target="_blank"><i class="bi bi-envelope"> Email</i></a>
      <a class="button is-dark footer-btn mr-1" href="https://github.com/deep-madhvani" target="_blank"><i class="bi-github" role="img" aria-label="GitHub"> GitHub</i></a>
      <a class="button is-info footer-btn mr-1" href="https://linkedin.com/in/deep-madhvani" target="_blank"><i class="bi bi-linkedin"> LinkedIn</i></a>
      <a class="button is-link footer-btn mr-1" href="/assets/img/Deep_Madhvani_resume.pdf" target="_blank"><i class="bi bi-file-text-fill"> Resume</i></a>
      <p class="has-text-dark subtitle is-3 pt-5 mb-1">Made by Deep Madhvani</p>
      <p class="has-text-dark subtitle is-3 mb-1">Copyright 2023</p>
      <p class="has-text-dark subtitle is-3 mb-1">Built with Angular & Bulma</p>
    </div>
  </footer>
  `,
  styles: [`
  .footer-padding{
    padding-bottom: 0px;
  }
  .button.is-warning{
    background-color: #4285F4;
    border-color: transparent;
    color: #fff;
  }
  .button.is-dark{
    background-color: #EA4335;
    border-color: transparent;
    color: #fff;
  }
  .button.is-info{
    background-color: #FBBC05;
    border-color: transparent;
    color: #fff;
  }
  .button.is-link{
    background-color: #34A853;
    border-color: transparent;
    color: #fff;
  }
  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
