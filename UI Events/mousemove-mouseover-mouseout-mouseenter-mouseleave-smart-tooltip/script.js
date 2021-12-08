
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
tooltip.innerHTML = 'Tooltip';

const elem = document.querySelector('.clock');

class HoverIntent {
  constructor({ elem, over, out }) {
    this.elem = elem;
    this.over = over;
    this.out = out;
    this.delay = 500;

    this.elem.addEventListener('mouseenter', this.handleEvent);
    this.elem.addEventListener('mouseleave', this.handleEvent);
    this.elem.addEventListener('mousemove', this.handleEvent);
  }

  handleEvent = (e) => {
    switch (e.type) {
      case 'mouseenter':
        this.onMouseEnter();
        break;
      case 'mouseleave':
        this.onMouseLeave();
        break;
      case 'mousemove':
        this.onMouseMove();
        break;
    }
  }

  onMouseEnter = () => {
    this.timer
    this.setTimer(this.over);
  }

  onMouseLeave = () => {
    this.out();
    clearTimeout(this.timer);
  }

  onMouseMove() {
    this.setTimer(this.over);
  }

  setTimer = (fn) => {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      fn();
    }, this.delay);
  }
}

new HoverIntent({
  elem,
  over() {
    tooltip.style.left = elem.getBoundingClientRect().left + 'px';
    tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
    document.body.append(tooltip);
  },
  out() {
    tooltip.remove();
  }
});