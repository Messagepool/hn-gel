class HnModal extends HTMLElement {
  constructor(){
    super();
    const triggerElement = document.querySelector(`[data-modal="#${this.id}"`);
    this.classList.add('hidden');

    this.querySelectorAll('[aria-label="Close"]').forEach( (closeButton) => {
      closeButton.addEventListener('click', () => this.close() );
    });

    this.addEventListener('click', event => {
      if(event.target.tagName === 'HN-MODAL'){
        this.close();
      }
    });

    triggerElement?.addEventListener('click', () => this.open() )
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