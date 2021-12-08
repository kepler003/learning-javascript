

const tooltipObj = {
  activeTarget: null,
  activeTooltip: null,

  handleEvent(e) {
    switch (e.type) {
      case 'mouseover':
        this.onMouseOver(e);
        break;
      case 'mouseout':
        this.onMouseOut(e);
        break;
    }
  },

  onMouseOver(e) {
    let target = e.target;
    let text = target.dataset.tooltip;

    while (text === undefined) {
      target = target.parentNode;
      if (!e.currentTarget.contains(target)) return;
      text = target.dataset.tooltip;
    }
    
    const tooltip = this.createTooltip(text);
    document.body.append(tooltip);

    this.activeTooltip?.remove();
    this.activeTooltip = tooltip;
    this.activeTarget = target;

    this.positionTooltip(tooltip, target);
  },

  onMouseOut(e) {
    const relatedTarget = e.relatedTarget;
    
    if (!this.activeTarget) return;
    if (this.activeTarget.contains(relatedTarget)) return;

    this.activeTooltip.remove();

    this.activeTarget = null;
    this.activeTooltip = null;
  },

  createTooltip(text) {
    const tooltip = document.createElement('div');
    tooltip.innerHTML = text;
    tooltip.classList.add('tooltip');
    tooltip.style.position = 'fixed';
    tooltip.style.left = 0;
    tooltip.style.top = 0;
    return tooltip;
  },

  positionTooltip(tooltip, target) {
    const {
      width: targetWidth,
      height: targetHeight,
      x: targetX,
      y: targetY
    } = target.getBoundingClientRect();

    const {
      width: tooltipWidth,
      height: tooltipHeight
    } = tooltip.getBoundingClientRect();

    const distance = 5;
    let posX = targetX;
    let posY = targetY - tooltipHeight - distance;

    if (tooltipWidth < targetWidth) {
      posX = targetX + ((targetWidth - tooltipWidth) / 2);
    }

    if (posY <= 0) {
      posY = targetY + targetHeight + distance;
    }

    tooltip.style.left = `${posX}px`;
    tooltip.style.top = `${posY}px`;
  }
}

const house = document.querySelector('.house');
house.addEventListener('mouseover', tooltipObj);
house.addEventListener('mouseout', tooltipObj);