class News {
  constructor(id, type, headline, date, author, agency, description, imageUrl) {
    this.id = id;
    this.type = type;
    this.headline = headline;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.type} at ${this.headline} -Date: ${this.date} -Author: ${this.author} -Agency: ${this.agency}  - Description: ${this.description} - Image URL: ${this.imageUrl} `;
  }
}

export default News;
