import { customElement } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
import 'plastic-image';

@customElement('footer-nav')
export class FooterNav extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles flex flex-alignment">
        :host {
          margin: 0 20px;
        }

        .copyright {
          padding: 15px 0 0;
          float: left;
        }

        .coc {
          display: block;
        }

        .nav-inline {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-logo {
          margin: 10px 30px 0 0;
          height: 24px;
          width: 120px;
          float: left;
        }

        a {
          color: var(--footer-text-color);
          padding-bottom: 2px;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        @media (min-width: 768px) {
          :host {
            margin: 15px 0;
          }
        }

        @media (min-width: 505px) {
          .copyright {
            margin: 0;
            padding: 15px 0 0 0;
            float: right;
            text-align: right;
          }

          .coc {
            display: inline-flex;
          }
        }
      </style>

      <div class="nav-inline" layout flex>


        <div class="copyright">
          Basado en
          <a href="https://github.com/gdg-x/hoverboard" target="_blank" rel="noopener noreferrer"
            >Project Hoverboard</a
          >
          · <a class="coc" href="/coc">{$ codeOfConduct $}</a>
        </div>
      </div>
    `;
  }
}
