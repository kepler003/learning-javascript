
function message() {
  console.log('Some message');
}

message();
message();


function textMessage(from, text = 'This is a default text') {
  console.log(from + ': ' + text)
}

textMessage('Bartek', 'Hello there');
textMessage('Bartek');