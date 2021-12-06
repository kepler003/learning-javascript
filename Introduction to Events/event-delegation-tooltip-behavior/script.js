
let currentTooltip;

document.addEventListener('mouseover', toggleTooltip);

document.addEventListener('mouseout', toggleTooltip);

function toggleTooltip(e) {

  const target = e.target;
  const tooltipText = target.dataset.tooltip;

  if (!tooltipText) return;

  if (e.type === 'mouseover') {

    // Create a tooltip

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerHTML = tooltipText;
  
    if (currentTooltip) currentTooltip.remove();
    currentTooltip = tooltip;

    target.after(tooltip);

    // Place the tooltip

    const { 
      x: targetX, 
      y: targetY,
      width: targetWidth,
      height: targetHeight,
    } = target.getBoundingClientRect();

    const {
      width: tooltipWidth,
      height: tooltipHeight,
    } = tooltip.getBoundingClientRect();

    let posX = targetX;
    if (posX < 0) posX = 0;
    if (tooltipWidth < targetWidth) {
      posX = targetX + (targetWidth - tooltipWidth) / 2;
    }

    let posY = targetY - tooltipHeight - 5;
    if (posY < 0) posY = targetY + targetHeight + 5;

    tooltip.style.left = `${posX}px`;
    tooltip.style.top = `${posY}px`;

  } else if (e.type === 'mouseout') {

    if (currentTooltip) currentTooltip.remove();
    currentTooltip = null;
  }
}