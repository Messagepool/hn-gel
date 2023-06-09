class HnModal extends HTMLElement {
  constructor(){
    super();
    this.classList.add('hidden');

    this.querySelector('[aria-label="Close"]')
      .addEventListener('click', () => this.close());

    this.addEventListener('click', event => {
      if(event.target.tagName === 'HN-MODAL'){
        this.close();
      }
    });
  }

  open(){
    this.classList.remove('hidden');
  }

  close(){
    this.classList.add('hidden');
  }

  toggle(){
    this.classList.toggle('hidden');
  }
}

if(!customElements.get('hn-modal')){
  customElements.define('hn-modal', HnModal);
}