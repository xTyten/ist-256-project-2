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
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ist-256-project-2.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      .entire-wrapper {
        display: flex;
        flex-direction: row;
      }
      .character-seed-wrapper {
        display: flex;
        flex-direction: column;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="entire-wrapper">
      <div class="character-seed-wrapper">
        <rpg-character width="500" height="500">
        
        </rpg-character>
        <h3>Seed: </h3>
      </div>
      <table>
        <form>
          <tr>
            <td>Accessories:</td>
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
            <td>Base:</td> 
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
            <!-- ignored, set to 0 and disable / hide input -->
            <td>Leg:</td>
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
            <td>Face:</td>
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
            <td>Face Item:</td>
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
            <td>Hair:</td>
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
            <td>Pants:</td>
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
            <td>Shirt:</td>
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
            <td>Skin:</td>
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
            <td>Hat Color:</td>
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
            <td>Hat:</td>
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
            <td>On fire:</td>
            <td><wired-checkbox class="wired-rendered"></wired-checkbox></td>
          </tr>
          <tr>
            <td>Walking:</td>
            <td><wired-checkbox class="wired-rendered"></wired-checkbox></td>
          </tr>
          <tr>
            <td>Circle:</td>
            <td><wired-checkbox class="wired-rendered"></wired-checkbox></td>
          </tr>
          <tr>
            <td><wired-button>Share Link</wired-button></td>
          </tr>
        </form>
      </table>
    </div>
    `;
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