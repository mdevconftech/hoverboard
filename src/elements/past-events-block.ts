import { customElement, property } from '@polymer/decorators';
import '@polymer/iron-icon';
import '@polymer/paper-button';
import { html, PolymerElement } from '@polymer/polymer';
import 'plastic-image';
import { ReduxMixin } from '../mixins/redux-mixin';
import { RootState, store } from '../store';
import { fetchPastEvents } from '../store/past-events/actions';
import './hoverboard-icons';
import './shared-styles';

@customElement('past-events-block')
export class PastEventsBlock extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles flex flex-alignment">
        :host {
          display: block;
        }

        .block-title {
          margin: 24px 0 8px;
        }

        .events-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          grid-gap: 8px;
        }

        .event-img {
          height: 210px;
          width: 100%;
          border-radius: 10px;
        }

        .cta-button {
          margin-top: 24px;
          color: var(--default-primary-color);
        }

        @media (min-width: 640px) {
          .events-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 812px) {
          .events-wrapper {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      </style>

      <div class="container">
        <h1 class="container-title">{$ pastEventsBlock.title $}</h1>
        <p>{$ pastEventsBlock.description $}</p>
        <template is="dom-repeat" items="[[pastEvents]]" as="block">
          <div class="events-wrapper">
            <template is="dom-repeat" items="[[block.items]]" as="event">
              <a
                class="event-item"
                href$="[[event.url]]"
                title$="[[event.name]]"
                target="_blank"
                rel="noopener noreferrer"
                layout
                horizontal
                center-center
              >
              <plastic-image
                class="event-img"
                srcset="[[event.logoUrl]]"
                sizing="cover"
                lazy-load
                preload
                fade
              ></plastic-image>
              </a>
            </template>
          </div>
        </template>
      </div>
    `;
  }

  @property({ type: Object })
  private viewport = {};
  @property({ type: Array })
  private pastEvents = [];
  @property({ type: Boolean })
  private pastEventsFetching = false;
  @property({ type: Object })
  private pastEventsFetchingError = {};

  stateChanged(state: RootState) {
    this.viewport = state.ui.viewport;
    this.pastEvents = state.pastEvents.list;
    this.pastEventsFetching = state.pastEvents.fetching;
    this.pastEventsFetchingError = state.pastEvents.fetchingError;
  }

  connectedCallback() {
    console.log(this.pastEvents);
    super.connectedCallback();
    if (!this.pastEventsFetching && (!this.pastEvents || !this.pastEvents.length)) {
      store.dispatch(fetchPastEvents());
    }
  }
}
