// import * as tailwindcss from './../scss/main';
// For testing library components only
class HnButton extends HTMLElement {
  constructor(){
    super();
    console.log("hn-button initialized");
  }
}
if(!customElements.get('hn-button')) {
  customElements.define('hn-button', HnButton);
}

class HnModal extends HTMLElement {
  constructor(){
    super();
    console.log("hn-modal initialized");
  }
}
if(!customElements.get('hn-modal')){
  customElements.define('hn-modal', HnModal);
}

class HnComponent {
  constructor(){
    console.log("HnComponent initialized")
  }
}

const hnFunction = () => {
  console.log("hnFunction called");
}

export { HnComponent, hnFunction }