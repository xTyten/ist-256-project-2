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
    this.accessories = "0"; //0-9. 0 is nothing
    this.base = "0";        //0 or 1 (For the seed: Male 0-4, Female 5-9)
    this.leg = "0";         //set to 0 and hide input
    this.face = "0";        //0-5. 0 is nothing
    this.faceItem = "0";    //0-9. 0 is nothing
    this.hair = "0";        //0-9
    this.pants = "0";       //0-9
    this.shirt = "0";       //0-9
    this.skin = "0";        //0-9
    this.hatColor = "0";    //0-9
    this.hat = "none";      //15 hats including "none"
    this.fire = false;      // true or false
    this.walking = false;   // true or false
    this.circle = false;    // true or false

    this.seedText = "";  // The seed used if 10 digits Ex: "1505537481"
    this.seed = "";         // The seed used if a user types in a regular seed Ex: "blah"
    this.literalseed = false;

    this.characterWidth = "450";  //Width of the character (adjusts to viewport)
    this.characterHeight = "450"; //Height of the charcter (adjusts to viewport)
    this.viewportWidth = window.innerWidth; // Initialize with current width
    window.addEventListener('resize', () => this.handleResize());
  }

  // Lit reactive properties
  static get properties() {
    return {
      accessories: { type: String, reflect: true }, //syncs property and attribute
      base: { type: String, reflect: true },
      leg: { type: String, reflect: true },
      face: { type: String, reflect: true },
      faceItem: { type: String, reflect: true },
      hair: { type: String, reflect: true },
      pants: { type: String, reflect: true },
      shirt: { type: String, reflect: true },
      skin: { type: String, reflect: true },
      hatColor: { type: String, reflect: true },
      hat: { type: String, reflect: true },
      fire: { type: Boolean, reflect: true },
      walking: { type: Boolean, reflect: true },
      circle: { type: Boolean, reflect: true },

      seedText: { type: String, reflect: true },
      seed: { type: String, reflect: true },
      literalseed: { type: Boolean, reflect: true},
      
      characterWidth: { type: String, reflect: true },
      characterHeight: { type: String, reflect: true},
      viewportWidth: { type: Number },
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
        <!-- 
        Seed is 10 digits. 
        The third digit (leg) is always 0.
        Hat is not part of the seed 
        exampleseed: 1501111111 
        each number in the seed represents an option in alphabetical order
        -->
        <rpg-character 
          id="character"
          

          width="${this.characterWidth}"
          height="${this.characterHeight}"
          accessories="${this.accessories}"
          base="${this.base}"
          face="${this.face}"
          faceitem="${this.faceItem}"
          hair="${this.hair}"
          pants="${this.pants}"
          shirt="${this.shirt}"
          skin="${this.skin}"
          hatcolor="${this.hatColor}"
          hat="${this.hat}"
          
          ?literalseed=${this.literalseed}
          ?fire=${this.fire}
          ?walking=${this.walking}
          ?circle=${this.circle}
          >
          <!-- toggles attributes depending if true or false -->
        </rpg-character>
        <h3>Seed: ${this.seedText}</h3>
        <p>regular seed won't be accurate<br>until all dropdowns are filled</p>
      </div>
      <table>
        <form>
          <tr>
            <td class="td-title">Accessories:</td>
            <td>
              <wired-combo id="accessoryDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="0" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="1" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="2" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="3" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="4" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="5" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="6" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="7" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="8" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="9" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <!-- Bases 0-4 are male. Bases 5-9 are female -->
            <td class="td-title">Base:</td> 
            <td>
              <wired-combo id="baseDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="0" role="option" class="wired-rendered">Male</wired-item>
                <wired-item value="1" role="option" class="wired-rendered">Female</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Face:</td>
            <td>
              <wired-combo id="faceDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="0" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="1" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="2" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="3" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="4" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="5" role="option" class="wired-rendered">5</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Face Item:</td>
            <td>
              <wired-combo id="faceItemDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="0" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="1" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="2" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="3" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="4" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="5" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="6" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="7" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="8" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="9" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Hair:</td>
            <td>
              <wired-combo id="hairDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="0" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="1" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="2" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="3" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="4" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="5" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="6" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="7" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="8" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="9" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Pants:</td>
            <td>
              <wired-combo id="pantsDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="0" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="1" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="2" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="3" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="4" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="5" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="6" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="7" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="8" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="9" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Shirt:</td>
            <td>
              <wired-combo id="shirtDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="0" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="1" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="2" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="3" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="4" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="5" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="6" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="7" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="8" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="9" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Skin:</td>
            <td>
              <wired-combo id="skinDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="0" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="1" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="2" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="3" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="4" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="5" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="6" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="7" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="8" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="9" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Hat Color:</td>
            <td>
              <wired-combo id="hatColorDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
                <wired-item value="0" role="option" class="wired-rendered">0</wired-item>
                <wired-item value="1" role="option" class="wired-rendered">1</wired-item>
                <wired-item value="2" role="option" class="wired-rendered">2</wired-item>
                <wired-item value="3" role="option" class="wired-rendered">3</wired-item>
                <wired-item value="4" role="option" class="wired-rendered">4</wired-item>
                <wired-item value="5" role="option" class="wired-rendered">5</wired-item>
                <wired-item value="6" role="option" class="wired-rendered">6</wired-item>
                <wired-item value="7" role="option" class="wired-rendered">7</wired-item>
                <wired-item value="8" role="option" class="wired-rendered">8</wired-item>
                <wired-item value="9" role="option" class="wired-rendered">9</wired-item>
              </wired-combo>
            </td>
          </tr>
          <tr>
            <td class="td-title">Hat:</td>
            <td>
              <wired-combo id="hatDrop" selected="" role="combobox" aria-haspopup="listbox" tabindex="0" class="wired-rendered" aria-expanded="false">
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
            <td class="td-title">On fire:</td>
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

  async firstUpdated() { //Sets up literalseed and MutationObservers 
    // READ/WRITE QUERY STRINGS HERE !!!
    // Gets entire URL including slugs / Gets Domain: window.location.hostname;
    const domain = window.location.href;

    console.log(domain);
    const params = new URLSearchParams({
      seed: "1501111111",
      hat: "random",
      fire: "false",
      walking: "false",
      circle: "false",
    })
    const fullURL = `${domain}?${params.toString()}`
    console.log(fullURL);
    
    await this.updateComplete; // waits for component to render
    const character = this.shadowRoot.getElementById('character');
    // Chooses whether seed is set or not
    if (this.seed) {
      // Seed is set
      // regular seeds don't have their options selected.
      // for example: character.base will return null
      character.setAttribute('seed', this.seed);
      this.seedText = this.seed;
      console.log("SEED TEXT BEFORE:"+this.seedText);

      // CHANGE PROPERTIES ACCORDING TO LITERALSEED
      this.accessories = character.accessories;
      this.base = character.base;
      this.leg = 0;
      this.face = character.face;
      this.faceItem = character.faceItem;
      this.hair = character.hair;
      this.pants = character.pants;
      this.shirt = character.shirt;
      this.skin = character.skin;
      this.hatColor = character.hatColor;
      this.hat = character.hat;
      this.fire = character.fire;
      this.walking = character.walking;
      this.circle = character.circle;
      console.log(character.accessories);
      console.log(character.base);
      console.log(character.leg);
      console.log(character.face);

      console.log("SEED TEXT AFTER:"+this.seedText);
    } else {
      // Sets properties according to the randomized settings
      character.setAttribute('literalseed', '');
      this.accessories = character.accessories;
      this.base = character.base;
      this.leg = 0;
      this.face = character.face;
      this.faceItem = character.faceItem;
      this.hair = character.hair;
      this.pants = character.pants;
      this.shirt = character.shirt;
      this.skin = character.skin;
      this.hatColor = character.hatColor;
      this.hat = character.hat;
      this.fire = character.fire;
      this.walking = character.walking;
      this.circle = character.circle;
    }

    // Listen to the 'selected' attribute change of the wired-combo element
    const combo0 = this.shadowRoot.getElementById('accessoryDrop');
    const observer0 = new MutationObserver(() => {
      this.accessories = combo0.selected;
    });
    observer0.observe(combo0, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });

    const combo1 = this.shadowRoot.getElementById('baseDrop');
    const observer1 = new MutationObserver(() => {
      // THE BASE SVGS ARE SET TO 0 FOR MALE AND 1 FOR FEMALE
      // BUT THE SEED ACCEPTS 1 AS MALE AND 5 AS FEMALE
      this.base = combo1.selected;
    });
    observer1.observe(combo1, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });

    const combo2 = this.shadowRoot.getElementById('faceDrop');
    const observer2 = new MutationObserver(() => {
      this.face = combo2.selected;
    });
    observer2.observe(combo2, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });

    const combo3 = this.shadowRoot.getElementById('faceItemDrop');
    const observer3 = new MutationObserver(() => {
      this.faceItem = combo3.selected;
    });
    observer3.observe(combo3, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });

    const combo4 = this.shadowRoot.getElementById('hairDrop');
    const observer4 = new MutationObserver(() => {
      this.hair = combo4.selected;
    });
    observer4.observe(combo4, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });

    const combo5 = this.shadowRoot.getElementById('pantsDrop');
    const observer5 = new MutationObserver(() => {
      this.pants = combo5.selected;
    });
    observer5.observe(combo5, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });

    const combo6 = this.shadowRoot.getElementById('shirtDrop');
    const observer6 = new MutationObserver(() => {
      this.shirt = combo6.selected;
    });
    observer6.observe(combo6, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });

    const combo7 = this.shadowRoot.getElementById('skinDrop');
    const observer7 = new MutationObserver(() => {
      this.skin = combo7.selected;
    });
    observer7.observe(combo7, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });

    const combo8 = this.shadowRoot.getElementById('hatColorDrop');
    const observer8 = new MutationObserver(() => {
      this.hatColor = combo8.selected;
    });
    observer8.observe(combo8, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });

    const combo9 = this.shadowRoot.getElementById('hatDrop');
    const observer9 = new MutationObserver(() => {
      this.hat = combo9.selected;
    });
    observer9.observe(combo9, {
      attributes: true,  // Watch for attribute changes
      attributeFilter: ['selected'],  // Only watch the 'selected' attribute
    });
  }
  // Runs when a property changes
  // Adjusts the character's size depending on viewport width
  updated(changedProperties) {
    if (changedProperties.has('viewportWidth')) {
      if (this.viewportWidth < 568) {
        this.characterHeight="300";
        this.characterWidth="300";
      } else if (this.viewportWidth < 768) {
        this.characterHeight="375";
        this.characterWidth="375";
      } else {
        this.characterHeight="450";
        this.characterWidth="450";
      }
    }

    // Updates the literalseed when one of the properties change
    // Leg is not included because the user doesn't change it
      // THE BASE SVGS ARE SET TO 0 FOR MALE AND 1 FOR FEMALE
      // BUT THE SEED ACCEPTS 1 AS MALE AND 5 AS FEMALE
    if (changedProperties.has('accessories') || changedProperties.has('base') || changedProperties.has('face') || changedProperties.has('faceItem') || changedProperties.has('hair') || changedProperties.has('pants') || changedProperties.has('shirt') || changedProperties.has('skin') || changedProperties.has('hatColor')) {
      if (this.base == 0) { // the "1" is for the male base. the "0" is for the leg
        this.seedText = this.accessories + "1" + "0" + this.face + this.faceItem + this.hair + this.pants + this.shirt + this.skin + this.hatColor;
      } else if (this.base == 1) { // the "5" is for the female base. the "0" is for the leg
        this.seedText = this.accessories + "5" + "0" + this.face + this.faceItem + this.hair + this.pants + this.shirt + this.skin + this.hatColor;
      }
    }
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

  handleResize() {
    this.viewportWidth = window.innerWidth; // Update the viewportWidth
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