class Destination {
  // Constructor function to initialize Destination instances
  constructor(
    id,
    countryId,
    name,
    costVisit,
    foundedYear,
    rating,
    description,
    imageUrl
  ) {
    // Unique identifier for the destination
    this.id = id;
    // Identifier of the country to which the destination belongs
    this.countryId = countryId;
    // Name of the destination
    this.name = name;
    // Cost of visiting the destination
    this.costVisit = costVisit;
    // Year the destination was founded
    this.foundedYear = foundedYear;
    // Rating of the destination
    this.rating = rating;
    // Description of the destination
    this.description = description;
    // URL for the image of the destination
    this.imageUrl = imageUrl;
  }
  // Method to create a string representation of the destination
  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average Day Cost to Visit: $ ${this.costVisit}, Average Rating: ${this.rating} Description:  ${this.description}`;
  }
}

// Exporting the Destination class as the default export
export default Destination;
