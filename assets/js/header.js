/* Copyright Rajat Sapkota */
class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header class="header" id="header">
          <nav class="nav container">
            <a href="/" class="nav__logo" id="logo"><img src="./assets/img/CreatorsLogoblack.png" alt="Creators Community's Logo"></img></a>
  
            <div class="nav__menu" id="nav-menu">
              <ul class="nav__list grid">
                <li class="nav__item">
                  <a href="./about.html" class="nav__link">
                    <i class="uil uil-user nav__icon"></i> About
                  </a>
                </li>
  
                <li class="nav__item">
                  <a href="./community.html" class="nav__link">
                    <i class="uil uil-users-alt nav__icon"></i> Community
                  </a>
                </li>
  
                <li class="nav__item">
                  <a href="./work.html" class="nav__link">
                    <i class="uil uil-diary-alt nav__icon"></i> Our Work
                  </a>
                </li>
                
                <li class="nav__item">
                  <a href="./virtual-herald.html" class="nav__link">
                    <i class="uil uil-diary-alt nav__icon"></i> Virtual Herald
                  </a>
                </li>

                <li class="nav__item">
                  <a href="./contact.html" class="nav__link">
                    <i class="uil uil-message nav__icon"></i> Contact Us
                  </a>
                </li>
              </ul>
  
              <i class="uil uil-times nav__close" id="nav-close"></i>
            </div>
  
            <div class="nav__btns">
              <i class="uil uil-moon change-theme" id="theme-button"></i>
  
              <div class="nav__toggle" id="nav-toggle">
                <i class="uil uil-apps"></i>
              </div>
            </div>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-element', Header);
  