
function showNotification({top = 10, right = 10, html = 'No message', className = ''}) {
  const notification = document.createElement('div');
  
  notification.classList.add('notification', className);

  notification.style.position = 'absolute';
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;
  
  notification.append(html);
  document.body.prepend(notification);

  setTimeout(() => notification.remove(), 5000);
}

setTimeout(() => {
  showNotification({
    top: 10, // 10px from the top of the window (by default 0px)
    right: 10, // 10px from the right edge of the window (by default 0px)
    html: "Hello!", // the HTML of notification
    className: "welcome" // an additional class for the div (optional)
  });
}, 2000);
