var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

class Dropdown {
  constructor(id) {
    this.id = $(`#${id}`);
    this.button = $(`#${id} button`);
    this.list = $(`#${id} ul`);
    this.listener();
  }

  toggle() {
    this.list.classList.toggle('active');
  }

  listener() {
    this.button.addEventListener('click', () => {
      this.toggle();
    });
  }
}

var dropdown = new Dropdown('dropdown');
