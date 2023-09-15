import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight" id="home">
      <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Deep Madhvani 🥶
        </p>
        <p>Computer Science Major @  <a href="http://www.fullerton.edu/" class="tag is-warning">CSUF!</a> </p>
        <p>Tech enthusiast 💬</p>
     
        
         <a href="/assets/img/Deep_Madhvani_resume.pdf" class="tag is-info">Resume</a>
        
      </div>
      </div>
      <!-- <div id="projects"></div> -->
    </section>
  
  `,
  styles: [`
    .hero{
      background-image: url('/assets/img/b3.jpg') !important;
      background-size: cover;
      background-position: center center;
      color : #363636;
      
    }
    .hero
    .title {
      color: #363636; 
    }
    .hero
    .a{
     left-padding:4px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
