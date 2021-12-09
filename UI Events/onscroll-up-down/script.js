
window.onscroll = () => {
  const scroll = window.scrollY;

  if (scroll > 50) {

    let btn = document.querySelector('.up');
    if (btn) return;
    
    btn = document.createElement('div');
    btn.className = 'up';
    document.body.append(btn);

  } else {
    
    const btn = document.querySelector('.up');
    btn.remove();
  }
}