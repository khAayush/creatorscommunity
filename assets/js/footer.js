/* Copyright Rajat Sapkota and Aayush Khatiwada*/
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
                                  <i class="uil uil-map-marker"></i>
                              </span>
                              <div class="details">
                                  <span class="name">Naxal, Kathmandu</span>
                                  <a href="tel:+977 9801031828"><span class="number">9801031828</span></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="footer_middle">   
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

          <p class="footer__copy">&#169; CreatorsCommunity2025.</p>
      </div>
  </footer>
      `;
    }
}

customElements.define('footer-element', Footer);
