import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `

    <h1 class="title is-1 has-text-centered title-padding" id="projects">Projects</h1>

    <section class="section">

      <div class="container">
        <div class="columns">

          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <div class="card-image has-text-centered">
                    <figure class="image is-inline-block">
                        <img class="" src="/assets/img/P1.png"/>
                    </figure>
                </div>
                <div class="title is-6 project-title-spacing">
                Sentiment Analysis
                  <div class="is-inline-block inner-div">
                    <a href="https://github.com/deep-madhvani/sentiment-analysis/" target="_blank">
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </div>    
                        
                  <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="" class="badges">
                  <img src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=Keras&logoColor=white" alt="" alt="" class="badges">
                  <img src="https://img.shields.io/badge/Tableau-1C284E?style=for-the-badge&logo=Tableau&logoColor=white" alt="" class="badges">
                  <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="" class="badges">
                  <hr class="hr-padding">
                <div class="content">
                Sentiment Analysis of Rate My Professors: Understanding Student Feedback In this project, our team collaborates to conduct sentiment analysis on student comments from Rate My Professors
                </div>
              </div>
            </div>
          </div>

          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <div class="card-image has-text-centered">
                    <figure class="image is-inline-block">
                        <img class="" src="/assets/img/P2.png"/>
                    </figure>
                </div>
                <div class="title is-6 project-title-spacing">
                HandWritten DigitRecognition
                  <div class="is-inline-block inner-div">
                    <a href="https://github.com/deep-madhvani/HandWrittenDigitRecognition" target="_blank">
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </div>              
                <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="" class="badges">
                <img src="https://img.shields.io/badge/MNIST-174D7C?style=for-the-badge" alt="" class="badges">
                <img src="https://img.shields.io/badge/scikit--learn-003B46?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="" class="badges">
                <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="" class="badges">

                  <hr class="hr-padding">
                <div class="content">
                Hand written digit recognition of the scikit-learn digit dataset using Pytorch and Tensorflow.
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div class="columns">

          <div class="column is-half">
              <div class="card">
                <div class="card-content">
                  <div class="card-image has-text-centered">
                      <figure class="image is-inline-block">
                          <img class="" src="/assets/img/P3.png"/>
                      </figure>
                  </div>
                  <div class="title is-6 project-title-spacing">
                    Portfolio Website
                    <div class="is-inline-block inner-div">
                      <a href="" target="_blank">
                        <i class="bi bi-github"></i>
                      </a>
                    </div>
                  </div>              
                    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="" class="badges">
                    <img src="https://img.shields.io/badge/Bulma-38B2AC?style=for-the-badge&logo=Bulma&logoColor=white" alt="" class="badges">
                    <hr class="hr-padding">
                  <div class="content">
                    Personal portfolio website made using Angular and the CSS framework Bulma.
                  </div>
                </div>
              </div>
            </div>

  
            <div class="column is-half">
              <div class="card">
                <div class="card-content">
                  <div class="card-image has-text-centered">
                      <figure class="image is-inline-block">
                          <img class="" src="/assets/img/P4.jpg"/>
                      </figure>
                  </div>
                  <div class="title is-6 project-title-spacing">
                    Data Mining Research Work 
                    <div class="is-inline-block inner-div">
                      <a href="/assets/img/IRJET.pdf" target="_blank">
                        <i class="bi bi-file-earmark-pdf"></i>
                      </a>
                    </div>
                  </div>  
                    <img src="https://img.shields.io/badge/Reaserch_Paper-174D7C?style=for-the-badge" alt="" class="badges">            
                    <img src="https://img.shields.io/badge/K_Nearest_Neighbor-174D7C?style=for-the-badge" alt="" class="badges">   
                    <hr class="hr-padding">
                  <div class="content">
                   Reaserch Paper on : Data Mining System for Selection of Best Basket Ball Team.
                  </div>
                </div>
              </div>
            </div>

        </div>

      

      </div>

      

    </section>

  `,
  styles: [`
    .card{
      margin: 4px;
    }
    .badges{
      border-radius: 30px;
      margin-right: 4px;
    }
    .inner-div{
      float: right;
      display: inline-block;
    }
    .project-title-spacing{
      margin-bottom: 10px;
      margin-top: 5px;
    }
    .hr-padding{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .title-padding{
      margin-top:20px;
      margin-bottom: 0px;
    }
  `]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
