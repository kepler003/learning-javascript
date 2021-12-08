
const list = document.getElementsByTagName('ul')[0];

const menu = {
  selectedItems: new Set(),

  handleEvent(e) {
    switch (e.type) {
      case 'mousedown':
        this.onMouseDown(e);
        break;
      case 'click':
        this.onClick(e);
        break;
    }
  },

  onMouseDown(e) {
    e.preventDefault();
  },

  onClick(e) {
    const target = e.target;
    if (target.tagName !== 'LI') return;
    this.selectItem(e);
  },

  selectItem(e) {
    const item = e.target;
    item.classList.add('selected');
    this.selectedItems.add(item);
    if (!e.ctrlKey && !e.metaKey) {
      this.deselectAllItems(item);
    }
  },

  deselectAllItems(excludedItem) {
    for (const item of this.selectedItems) {
      if (item === excludedItem) continue;
      item.classList.remove('selected');
      this.selectedItems.delete(item);
    }
  }
}

list.addEventListener('mousedown', menu)
list.addEventListener('click', menu);