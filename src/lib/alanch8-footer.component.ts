import { Component } from '@angular/core';

@Component({
  selector: 'lib-alanch8-footer',
  template: `
    <div class="bg-color pt-5">
      <div class="container">
        <footer
          class="d-flex flex-wrap justify-content-center align-items-center mb-3"
        >
          <div
            class="col-12 d-flex align-items-center justify-content-center col-xl-4 justify-content-xl-start"
          >
            <a
              href="https://www.aitorlancharro.com/"
              class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
            >
              <img
                src="https://www.aitorlancharro.com/_next/static/media/footer-brand-logo.b261e09f.svg"
                width="120"
                height="120"
                alt="Aitor Lancharro"
                class="brand-logo"
              />
            </a>
          </div>
          <div
            class="col-12 mb-2 align-items-center justify-content-center col-xl-4 mt-xl-3"
          >
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <span class="mb-3 mb-md-0 text-white"
                >Copyright © 2023
                <a class="mailto" href="mailto:aitor.lancharro@gmail.com"
                  >Aitor Lancharro</a
                ></span
              >
            </div>
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <span class="mb-3 mb-md-0 text-white"
                >Designed and Developed with 🤍 + ☕️</span
              >
            </div>
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <span class="mb-3 mb-md-0 text-white"
                >Current Version: <span class="version">1.0.0</span></span
              >
            </div>
          </div>
          <div
            class="col-12 mt-2 d-flex align-items-center justify-content-center col-xl-4 justify-content-xl-end"
          >
            <a
              class="inline-block border p-1 text-white social-media"
              href="https://www.linkedin.com/in/aitorlancharro/"
              ><img class="rrss" src="https://i.ibb.co/FWhFtRk/linkedin.png" alt="linkedin"
            /></a>
            <a
              class="inline-block border p-1 text-white social-media"
              href="https://github.com/Alanch8"
              ><img class="rrss" src="https://i.ibb.co/wpCRypt/github.png" alt="github"
            /></a>
            <a
              class="inline-block border p-1 text-white social-media"
              href="https://twitter.com/alanch_8"
              ><img class="rrss" src="https://i.ibb.co/xzqvDJb/twitter.png" alt="twitter"
            /></a>
          </div>
        </footer>
      </div>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;800&display=swap');

      .bg-color {
        background-color: #999;
        width: 100%;
        height: auto;
        display: flex;
        bottom: 0;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 800;
      }

      .social-media {
        border-radius: 100%;
        margin: 5px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .social-media:hover {
        background-color: #777777;
      }

      .rrss {
        width: 20px;
        height: 20px;
      }

      .version {
        font-weight: 300;
      }

      .mailto {
        color: #fff;
        text-decoration: none;
        text-decoration: underline;
      }

      .mailto:hover {
        color: #777777;
      }

      .brand-logo:hover {
        opacity: 60%;
      }
    `,
  ],
})
export class Alanch8FooterComponent {}
