
function getScrollBottom(elem){
  const {clientHeight, scrollHeight, scrollTop} = elem;
  
  console.log(scrollHeight - scrollTop - clientHeight);
}

const elem = document.querySelector('.example');
getScrollBottom(elem);
document.querySelector('.example').addEventListener('scroll', function(){
  getScrollBottom(elem);
});