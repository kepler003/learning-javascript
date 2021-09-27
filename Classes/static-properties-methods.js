
class User {
  static sayHello() {
    console.log('Hello');
  }
}

User.sayHello();

class Article {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  static createTodays() {
    return new this('Today\'s digest', new Date());
  }
}

const article = Article.createTodays();

console.log(article);