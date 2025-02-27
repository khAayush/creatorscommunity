/* Copyright Rajat Sapkota */
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <footer class="footer">
      <div class="footer__bg">
          
          <div class="footer_half">
              <div class="footer_left">
                  <div class="footer__container">

                      <div class="contact_list">


                          <div class="contact-footer">
                              <span class="icon">
                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z">
                                      </path>
                                  </svg>
                              </span>
                              <div class="details">
                                  <span class="name">Dhiraj Kumar Shah Kanu</span>
                                  <a href="tel:+9779840600251"><span class="number">9840600251</span></a>
                              </div>
                          </div>
                          <div class="contact-footer">
                              <span class="icon">
                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z">
                                      </path>
                                  </svg>
                              </span>
                              <div class="details">
                                  <span class="name">Rajat Sapkota</span>
                                  <a href="tel:+9779861813697"><span class="number">9861813697</span></a>
                              </div>
                          </div>
                          <div class="contact-footer">
                              <span class="icon">
                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z">
                                      </path>
                                  </svg>
                              </span>
                              <div class="details">
                                  <span class="name">Abhinav Niraula</span>
                                  <a href="tel:+977986160760"><span class="number">9861607604</span></a>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
              <div class="footer_middle">
                  <div class="footer_logos"><a href="/"><img src="./assets/img/CreatorsLogo.png" alt="logo"></a></div>
                  <div class="footer_logos"><img src="./assets/img/herald-white-logo.svg" alt="logo"></div>
                  <div class="footer_top">
              <h1 class="footer__title ">Creators Community</h1>
              <span class="footer__subtitle">Dumb Ideas Actually Matter</span>
          </div>
              </div>
              <div class="footer_right">
                  <div class="footer__socials">
                      <a href="https://www.facebook.com/groups/devcorps.creators" target="_blank"
                          class="footer__social">
                          <i class="uil uil-facebook-f"></i>
                      </a>

                      <a href="https://www.instagram.com/devcorps.creators/" target="_blank" class="footer__social">
                          <i class="uil uil-instagram"></i>
                      </a>

                      <a href="https://www.linkedin.com/company/herald-devcorps-creators-community/" target="_blank"
                          class="footer__social">
                          <i class="uil uil-linkedin-alt"></i>
                      </a>

                      <a href="https://www.youtube.com/channel/UCQEq6XLTYwxPHvAGd2R9w8g" target="_blank"
                          class="footer__social">
                          <i class="uil uil-youtube"></i>
                      </a>

                  </div>
              </div>

          </div>

          <p class="footer__copy">&#169; CreatorsCommunity2023.</p>
      </div>
  </footer>
      `;
    }
}

customElements.define('footer-element', Footer);
