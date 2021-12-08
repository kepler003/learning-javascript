
const house = document.querySelector('.house');
let tooltipElem;
let currentTooltip;

house.addEventListener('mouseover', function(e) {
  let target = e.target;
  let tooltipText = target.dataset.tooltip;
  
  while (tooltipText === undefined) {
    target = target.parentNode;
    if (!house.contains(target)) return;
    tooltipText = target.dataset.tooltip;
  }

  if (tooltipElem === target) return;

  tooltipElem = target;
  let tooltip = createTooltip(tooltipText);
  document.body.append(tooltip);
  positionTooltip(tooltip, target);
});

house.addEventListener('mouseout', function(e) {
  const target = e.target;
  const relatedTarget = e.relatedTarget;
  const tooltipText = relatedTarget.dataset.tooltip;

  if (tooltipText === undefined) return;
  if (relatedTarget === tooltipElem) return;

  console.log(target)
});

function createTooltip(text) {
  const tooltip = document.createElement('div');
  tooltip.innerHTML = text;
  tooltip.classList.add('tooltip');
  tooltip.style.position = 'fixed';
  tooltip.style.left = 0;
  tooltip.style.top = 0;
  return tooltip;
}

function positionTooltip(tooltip, target) {
  const {
    width: targetWidth,
    height: targetHeight,
    x: targetX,
    y: targetY
  } = target.getBoundingClientRect();

  const {
    width: tooltipWidth,
    height: tooltipHeight,
  } = tooltip.getBoundingClientRect();

  const distance = 5;
  let posX = targetX;
  let posY = targetY - tooltipHeight - distance;

  if (tooltipWidth < targetWidth) {
    posX = targetX + ((targetWidth - tooltipWidth) / 2);
  }

  if (posY < 0) {
    posY = targetY + targetHeight + distance;
  }

  tooltip.style.position = 'fixed';
  tooltip.style.left = `${posX}px`;
  tooltip.style.top = `${posY}px`;
}