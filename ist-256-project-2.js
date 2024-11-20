/**
 * Copyright 2024 xTyten
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/rpg-character/rpg-character.js";
import { WiredButton, WiredInput } from "wired-elements"

/**
 * `ist-256-project-2`
 * 
 * @demo index.html
 * @element ist-256-project-2
 */
export class Ist256Project2 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ist-256-project-2";
  }

  constructor() {
    super();
    this.accessories = "";  //0-9. 0 is nothing
    this.base = "";         //0 or 5 (Male 0-4, Female 5-9)
    this.leg = "";          //set to 0 and hide input
    this.face = "";         //0-5. 0 is nothing
    this.faceitem = "";     //0-9. 0 is nothing
    this.hair = "";         //0-9
    this.pants = "";        //0-9
    this.shirt = "";        //0-9
    this.skin = "";         //0-9
    this.hatcolor = "";     //0-9
    this.hat = "";          //15 hats including "none"
    this.fire = false;      // true or false
    this.walking = false;   // true or false
    this.circle = false;    // true or false
  }

  // Lit reactive properties
  static get properties() {
    return {
      accessories: { type: String, reflect: true }, //syncs property and attribute
      base: { type: String, reflect: true },
      leg: { type: String, reflect: true },
      face: { type: String, reflect: true },
      faceitem: { type: String, reflect: true },
      hair: { type: String, reflect: true },
      pants: { type: String, reflect: true },
      shirt: { type: String, reflect: true },
      skin: { type: String, reflect: true },
      hatcolor: { type: String, reflect: true },
      hat: { type: String, reflect: true },
      fire: { type: Boolean, reflect: true },
      walking: { type: Boolean, reflect: true },
      circle: { type: Boolean, reflect: true },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
    css`
      .entire-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      td {
        height: 40px;;
        padding: var(--ddd-spacing-1); //4px
        font-size: var(--ddd-font-size-xxs); //20px
      }
      .td-title {
        font-weight: var(--ddd-font-weight-bold, 700); //bold font
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="entire-wrapper">
      <div class="character-seed-wrapper">
        <rpg-character 
          width="500" 
          height="500"
          ?fire=${this.fire}
          ?walking=${this.walking}
          ?circle=${this.circle}
          >
        </rpg-character>
        <h3>Seed: </h3>
      </div>
      <table>
        <form>
          <tr>
            <td class="td-title">Accessories:</td>
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="six" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="seven" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="eight" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="nine" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <!-- Bases 0-4 are male. Bases 5-9 are female -->
            <td class="td-title">Base:</td> 
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="six" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="seven" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="eight" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="nine" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <!--
          <tr>
            <td class="td-title">Leg:</td>
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="six" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="seven" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="eight" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="nine" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          -->
          <tr>
            <td class="td-title">Face:</td>
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Face Item:</td>
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="six" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="seven" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="eight" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="nine" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Hair:</td>
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="six" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="seven" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="eight" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="nine" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Pants:</td>
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="six" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="seven" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="eight" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="nine" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Shirt:</td>
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="six" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="seven" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="eight" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="nine" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Skin:</td>
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="six" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="seven" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="eight" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="nine" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Hat Color:</td>
            <td>
              <wired-combo selected="zero" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="zero" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="one" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="two" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="three" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="four" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="five" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="six" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="seven" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="eight" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="nine" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Hat:</td>
            <td>
              <wired-combo selected="none" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="none" role="option" class="wired-rendered">none</wired-item>
                <wired-item value="bunny" role="option" class="wired-rendered">bunny</wired-item>
                <wired-item value="coffee" role="option" class="wired-rendered">coffee</wired-item>
                <wired-item value="construction" role="option" class="wired-rendered">construction</wired-item>
                <wired-item value="cowboy" role="option" class="wired-rendered">cowboy</wired-item>
                <wired-item value="education" role="option" class="wired-rendered">education</wired-item>
                <wired-item value="knight" role="option" class="wired-rendered">knight</wired-item>
                <wired-item value="ninja" role="option" class="wired-rendered">ninja</wired-item>
                <wired-item value="party" role="option" class="wired-rendered">party</wired-item>
                <wired-item value="pirate" role="option" class="wired-rendered">pirate</wired-item>
                <wired-item value="watermelon" role="option" class="wired-rendered">watermelon</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title"}>On fire:</td>
            <td><wired-checkbox class="wired-rendered" @change=${this.toggleFire}></wired-checkbox></td>
          </tr>
          <tr>
            <td class="td-title">Walking:</td>
            <td><wired-checkbox class="wired-rendered" @change=${this.toggleWalking}></wired-checkbox></td>
          </tr>
          <tr>
            <td class="td-title">Circle:</td>
            <td><wired-checkbox class="wired-rendered" @change=${this.toggleCircle}></wired-checkbox></td>
          </tr>
          <tr>
            <td><wired-button @click=${this.testButton}>Share Link</wired-button></td>
          </tr>
        </form>
      </table>
    </div>
    `;
  }

  toggleFire() {
    this.fire = !this.fire;
  }
  toggleWalking() {
    this.walking = !this.walking;
  }
  toggleCircle() {
    this.circle = !this.circle;
  }
  testButton() {
    window.alert(`Button pressed`);
  }
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(Ist256Project2.tag, Ist256Project2);