import author_photo from "./assets/author_img.png";
import crime_cover from "./assets/crime_cover.jpg";
import detective_cover from "./assets/detective_cover.jpg";
import feminism_cover from "./assets/feminism_cover.jpg";
import love_cover from "./assets/love_cover.jpg";
import meditation_cover from "./assets/meditation_cover.jpg";
import nature_cover from "./assets/nature_cover.jpg";
import self_cover from "./assets/self_cover.jpg";
import tech_cover from "./assets/tech_cover.jpg";
import misc_cover from "./assets/misc_cover.jpg";
import crime_1 from "./assets/crime_1.png";
import crime_2 from "./assets/crime_2.png";
import crime_3 from "./assets/crime_3.png";
import crime_4 from "./assets/crime_4.jpg";
import crime_5 from "./assets/crime_5.png";
import detective_1 from "./assets/detective_1.jpg";
import detective_2 from "./assets/detective_2.png";
import detective_3 from "./assets/detective_3.png";
import detective_4 from "./assets/detective_4.jpg";
import detective_5 from "./assets/detective_5.jpg";
import feminism_1 from "./assets/feminism_1.jpg";
import feminism_2 from "./assets/feminism_2.png";
import feminism_3 from "./assets/feminism_3.jpg";
import feminism_4 from "./assets/feminism_4.jpg";
import feminism_5 from "./assets/feminism_5.jpg";
import love_1 from "./assets/love_1.png";
import love_2 from "./assets/love_2.png";
import love_3 from "./assets/misc_3.jpg";
import love_4 from "./assets/love_4.png";
import love_5 from "./assets/love_5.jpg";
import meditation_1 from "./assets/meditation_1.jpg";
import meditation_2 from "./assets/meditation_2.jpg";
import meditation_3 from "./assets/meditation_3.jpg";
import meditation_4 from "./assets/meditation_4.jpg";
import meditation_5 from "./assets/meditation_5.jpg";
import nature_1 from "./assets/nature_1.jpg";
import nature_2 from "./assets/nature_2.jpg";
import nature_3 from "./assets/nature_3.jpg";
import nature_4 from "./assets/nature_4.jpg";
import nature_5 from "./assets/nature_5.jpg";
import self_1 from "./assets/self_1.jpg";
import self_2 from "./assets/self_2.jpg";
import self_3 from "./assets/self_3.jpg";
import self_4 from "./assets/self_4.jpg";
import self_5 from "./assets/self_5.png";
import tech_1 from "./assets/tech_1.png";
import tech_2 from "./assets/tech_2.png";
import tech_3 from "./assets/tech_3.jpg";
import tech_4 from "./assets/tech_4.jpg";
import tech_5 from "./assets/tech_5.jpg";
import misc_1 from "./assets/misc_1.jpg";
import misc_2 from "./assets/misc_2.jpg";
import misc_3 from "./assets/misc_3.jpg";
import misc_4 from "./assets/misc_4.jpg";
import misc_5 from "./assets/misc_5.jpg";

export const categories = [
  {
    id: 1,
    categoryType: "Love",
    categoryImage: love_cover,
  },
  {
    id: 2,
    categoryType: "Crime",
    categoryImage: crime_cover,
  },
  {
    id: 3,
    categoryType: "Feminism",
    categoryImage: feminism_cover,
  },
  {
    id: 4,
    categoryType: "Self Improvement",
    categoryImage: self_cover,
  },
  {
    id: 5,
    categoryType: "Technology",
    categoryImage: tech_cover,
  },
  {
    id: 6,
    categoryType: "Detective",
    categoryImage: detective_cover,
  },
  {
    id: 7,
    categoryType: "Meditation",
    categoryImage: meditation_cover,
  },
  {
    id: 8,
    categoryType: "Nature",
    categoryImage: nature_cover,
  },
  {
    id: 9,
    categoryType: "Miscellaneous",
    categoryImage: misc_cover,
  },
];

export const booksDetails = [
  {
    bookId: 101,
    category: "Love",
    bookName: "Don Quixote",
    bookImage: love_1,
    authorName: "Agatha Christie",
    publisher: "Jaico Publishing House",
    originalPrice: "450",
    offerPrice: "400",
    rating: "3.5",
    quantity: "20",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "20 December 2020",
    weight: "250 Grams",
    country: "India",
    language: "Hindi",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 102,
    category: "Love",
    bookName: "Angels & Demons",
    bookImage: love_2,
    authorName: "Dan Brown",
    publisher: "Westland Publications",
    originalPrice: "500",
    offerPrice: "490",
    rating: "4",
    quantity: "10",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "05 March 2018",
    weight: "180 Grams",
    country: "UK",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 103,
    category: "Love",
    bookName: "Rebecca",
    bookImage: love_3,
    authorName: "Daphne du Maurier",
    publisher: "Roli Books",
    originalPrice: "550",
    offerPrice: "500",
    rating: "3",
    quantity: "5",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "13 April 2017",
    weight: "220 Grams",
    country: "Jamaica",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 104,
    category: "Love",
    bookName: "In Cold Blood",
    bookImage: love_4,
    authorName: "Truman Capote",
    publisher: "Penguin Random House India",
    originalPrice: "600",
    offerPrice: "500",
    rating: "4.5",
    quantity: "15",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "24 Ocober 2021",
    weight: "300 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 105,
    category: "Love",
    bookName: "The Lovely Bones",
    bookImage: love_5,
    authorName: "Alice Sebold",
    publisher: "Aleph Book Company",
    originalPrice: "580",
    offerPrice: "530",
    rating: "4",
    quantity: "25",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "06 February 2024",
    weight: "340 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 201,
    category: "Crime",
    bookName: "Don Quixote",
    bookImage: crime_1,
    authorName: "Agatha Christie",
    publisher: "Jaico Publishing House",
    originalPrice: "450",
    offerPrice: "400",
    rating: "3.5",
    quantity: "20",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "20 December 2020",
    weight: "250 Grams",
    country: "India",
    language: "Hindi",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 202,
    category: "Crime",
    bookName: "Angels & Demons",
    bookImage: crime_2,
    authorName: "Dan Brown",
    publisher: "Westland Publications",
    originalPrice: "500",
    offerPrice: "490",
    rating: "4",
    quantity: "10",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "05 March 2018",
    weight: "180 Grams",
    country: "UK",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 203,
    category: "Crime",
    bookName: "Rebecca",
    bookImage: crime_3,
    authorName: "Daphne du Maurier",
    publisher: "Roli Books",
    originalPrice: "550",
    offerPrice: "500",
    rating: "3",
    quantity: "5",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "13 April 2017",
    weight: "220 Grams",
    country: "Jamaica",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 204,
    category: "Crime",
    bookName: "In Cold Blood",
    bookImage: crime_4,
    authorName: "Truman Capote",
    publisher: "Penguin Random House India",
    originalPrice: "600",
    offerPrice: "500",
    rating: "4.5",
    quantity: "15",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "24 Ocober 2021",
    weight: "300 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 205,
    category: "Crime",
    bookName: "The Lovely Bones",
    bookImage: crime_5,
    authorName: "Alice Sebold",
    publisher: "Aleph Book Company",
    originalPrice: "580",
    offerPrice: "530",
    rating: "4",
    quantity: "25",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "06 February 2024",
    weight: "340 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 301,
    category: "Feminism",
    bookName: "Don Quixote",
    bookImage: feminism_1,
    authorName: "Agatha Christie",
    publisher: "Jaico Publishing House",
    originalPrice: "450",
    offerPrice: "400",
    rating: "3.5",
    quantity: "20",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "20 December 2020",
    weight: "250 Grams",
    country: "India",
    language: "Hindi",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 302,
    category: "Feminism",
    bookName: "Angels & Demons",
    bookImage: feminism_2,
    authorName: "Dan Brown",
    publisher: "Westland Publications",
    originalPrice: "500",
    offerPrice: "490",
    rating: "4",
    quantity: "10",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "05 March 2018",
    weight: "180 Grams",
    country: "UK",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 303,
    category: "Feminism",
    bookName: "Rebecca",
    bookImage: feminism_3,
    authorName: "Daphne du Maurier",
    publisher: "Roli Books",
    originalPrice: "550",
    offerPrice: "500",
    rating: "3",
    quantity: "5",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "13 April 2017",
    weight: "220 Grams",
    country: "Jamaica",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 304,
    category: "Feminism",
    bookName: "In Cold Blood",
    bookImage: feminism_4,
    authorName: "Truman Capote",
    publisher: "Penguin Random House India",
    originalPrice: "600",
    offerPrice: "500",
    rating: "4.5",
    quantity: "15",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "24 Ocober 2021",
    weight: "300 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 305,
    category: "Feminism",
    bookName: "The Lovely Bones",
    bookImage: feminism_5,
    authorName: "Alice Sebold",
    publisher: "Aleph Book Company",
    originalPrice: "580",
    offerPrice: "530",
    rating: "4",
    quantity: "25",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "06 February 2024",
    weight: "340 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 401,
    category: "Self Improvement",
    bookName: "Don Quixote",
    bookImage: self_1,
    authorName: "Agatha Christie",
    publisher: "Jaico Publishing House",
    originalPrice: "450",
    offerPrice: "400",
    rating: "3.5",
    quantity: "20",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "20 December 2020",
    weight: "250 Grams",
    country: "India",
    language: "Hindi",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 402,
    category: "Self Improvement",
    bookName: "Angels & Demons",
    bookImage: self_2,
    authorName: "Dan Brown",
    publisher: "Westland Publications",
    originalPrice: "500",
    offerPrice: "490",
    rating: "4",
    quantity: "10",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "05 March 2018",
    weight: "180 Grams",
    country: "UK",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 403,
    category: "Self Improvement",
    bookName: "Rebecca",
    bookImage: self_3,
    authorName: "Daphne du Maurier",
    publisher: "Roli Books",
    originalPrice: "550",
    offerPrice: "500",
    rating: "3",
    quantity: "5",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "13 April 2017",
    weight: "220 Grams",
    country: "Jamaica",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 404,
    category: "Self Improvement",
    bookName: "In Cold Blood",
    bookImage: self_4,
    authorName: "Truman Capote",
    publisher: "Penguin Random House India",
    originalPrice: "600",
    offerPrice: "500",
    rating: "4.5",
    quantity: "15",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "24 Ocober 2021",
    weight: "300 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 405,
    category: "Self Improvement",
    bookName: "The Lovely Bones",
    bookImage: self_5,
    authorName: "Alice Sebold",
    publisher: "Aleph Book Company",
    originalPrice: "580",
    offerPrice: "530",
    rating: "4",
    quantity: "25",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "06 February 2024",
    weight: "340 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 501,
    category: "Technology",
    bookName: "Don Quixote",
    bookImage: tech_1,
    authorName: "Agatha Christie",
    publisher: "Jaico Publishing House",
    originalPrice: "450",
    offerPrice: "400",
    rating: "3.5",
    quantity: "20",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "20 December 2020",
    weight: "250 Grams",
    country: "India",
    language: "Hindi",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 502,
    category: "Technology",
    bookName: "Angels & Demons",
    bookImage: tech_2,
    authorName: "Dan Brown",
    publisher: "Westland Publications",
    originalPrice: "500",
    offerPrice: "490",
    rating: "4",
    quantity: "10",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "05 March 2018",
    weight: "180 Grams",
    country: "UK",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 503,
    category: "Technology",
    bookName: "Rebecca",
    bookImage: tech_3,
    authorName: "Daphne du Maurier",
    publisher: "Roli Books",
    originalPrice: "550",
    offerPrice: "500",
    rating: "3",
    quantity: "5",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "13 April 2017",
    weight: "220 Grams",
    country: "Jamaica",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 504,
    category: "Technology",
    bookName: "In Cold Blood",
    bookImage: tech_4,
    authorName: "Truman Capote",
    publisher: "Penguin Random House India",
    originalPrice: "600",
    offerPrice: "500",
    rating: "4.5",
    quantity: "15",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "24 Ocober 2021",
    weight: "300 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 505,
    category: "Technology",
    bookName: "The Lovely Bones",
    bookImage: tech_5,
    authorName: "Alice Sebold",
    publisher: "Aleph Book Company",
    originalPrice: "580",
    offerPrice: "530",
    rating: "4",
    quantity: "25",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "06 February 2024",
    weight: "340 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 601,
    category: "Detective",
    bookName: "Don Quixote",
    bookImage: detective_1,
    authorName: "Agatha Christie",
    publisher: "Jaico Publishing House",
    originalPrice: "450",
    offerPrice: "400",
    rating: "3.5",
    quantity: "20",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "20 December 2020",
    weight: "250 Grams",
    country: "India",
    language: "Hindi",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 602,
    category: "Detective",
    bookName: "Angels & Demons",
    bookImage: detective_2,
    authorName: "Dan Brown",
    publisher: "Westland Publications",
    originalPrice: "500",
    offerPrice: "490",
    rating: "4",
    quantity: "10",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "05 March 2018",
    weight: "180 Grams",
    country: "UK",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 603,
    category: "Detective",
    bookName: "Rebecca",
    bookImage: detective_3,
    authorName: "Daphne du Maurier",
    publisher: "Roli Books",
    originalPrice: "550",
    offerPrice: "500",
    rating: "3",
    quantity: "5",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "13 April 2017",
    weight: "220 Grams",
    country: "Jamaica",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 604,
    category: "Detective",
    bookName: "In Cold Blood",
    bookImage: detective_4,
    authorName: "Truman Capote",
    publisher: "Penguin Random House India",
    originalPrice: "600",
    offerPrice: "500",
    rating: "4.5",
    quantity: "15",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "24 Ocober 2021",
    weight: "300 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 605,
    category: "Detective",
    bookName: "The Lovely Bones",
    bookImage: detective_5,
    authorName: "Alice Sebold",
    publisher: "Aleph Book Company",
    originalPrice: "580",
    offerPrice: "530",
    rating: "4",
    quantity: "25",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "06 February 2024",
    weight: "340 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 701,
    category: "Meditation",
    bookName: "Don Quixote",
    bookImage: meditation_1,
    authorName: "Agatha Christie",
    publisher: "Jaico Publishing House",
    originalPrice: "450",
    offerPrice: "400",
    rating: "3.5",
    quantity: "20",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "20 December 2020",
    weight: "250 Grams",
    country: "India",
    language: "Hindi",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 702,
    category: "Meditation",
    bookName: "Angels & Demons",
    bookImage: meditation_2,
    authorName: "Dan Brown",
    publisher: "Westland Publications",
    originalPrice: "500",
    offerPrice: "490",
    rating: "4",
    quantity: "10",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "05 March 2018",
    weight: "180 Grams",
    country: "UK",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 703,
    category: "Meditation",
    bookName: "Rebecca",
    bookImage: meditation_3,
    authorName: "Daphne du Maurier",
    publisher: "Roli Books",
    originalPrice: "550",
    offerPrice: "500",
    rating: "3",
    quantity: "5",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "13 April 2017",
    weight: "220 Grams",
    country: "Jamaica",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 704,
    category: "Meditation",
    bookName: "In Cold Blood",
    bookImage: meditation_4,
    authorName: "Truman Capote",
    publisher: "Penguin Random House India",
    originalPrice: "600",
    offerPrice: "500",
    rating: "4.5",
    quantity: "15",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "24 Ocober 2021",
    weight: "300 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 705,
    category: "Meditation",
    bookName: "The Lovely Bones",
    bookImage: meditation_5,
    authorName: "Alice Sebold",
    publisher: "Aleph Book Company",
    originalPrice: "580",
    offerPrice: "530",
    rating: "4",
    quantity: "25",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "06 February 2024",
    weight: "340 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 801,
    category: "Nature",
    bookName: "Don Quixote",
    bookImage: nature_1,
    authorName: "Agatha Christie",
    publisher: "Jaico Publishing House",
    originalPrice: "450",
    offerPrice: "400",
    rating: "3.5",
    quantity: "20",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "20 December 2020",
    weight: "250 Grams",
    country: "India",
    language: "Hindi",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 802,
    category: "Nature",
    bookName: "Angels & Demons",
    bookImage: nature_2,
    authorName: "Dan Brown",
    publisher: "Westland Publications",
    originalPrice: "500",
    offerPrice: "490",
    rating: "4",
    quantity: "10",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "05 March 2018",
    weight: "180 Grams",
    country: "UK",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 803,
    category: "Nature",
    bookName: "Rebecca",
    bookImage: nature_3,
    authorName: "Daphne du Maurier",
    publisher: "Roli Books",
    originalPrice: "550",
    offerPrice: "500",
    rating: "3",
    quantity: "5",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "13 April 2017",
    weight: "220 Grams",
    country: "Jamaica",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 804,
    category: "Nature",
    bookName: "In Cold Blood",
    bookImage: nature_4,
    authorName: "Truman Capote",
    publisher: "Penguin Random House India",
    originalPrice: "600",
    offerPrice: "500",
    rating: "4.5",
    quantity: "15",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "24 Ocober 2021",
    weight: "300 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 805,
    category: "Nature",
    bookName: "The Lovely Bones",
    bookImage: nature_5,
    authorName: "Alice Sebold",
    publisher: "Aleph Book Company",
    originalPrice: "580",
    offerPrice: "530",
    rating: "4",
    quantity: "25",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "06 February 2024",
    weight: "340 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 901,
    category: "Miscellaneous",
    bookName: "Don Quixote",
    bookImage: misc_1,
    authorName: "Agatha Christie",
    publisher: "Jaico Publishing House",
    originalPrice: "450",
    offerPrice: "400",
    rating: "3.5",
    quantity: "20",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "20 December 2020",
    weight: "250 Grams",
    country: "India",
    language: "Hindi",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 902,
    category: "Miscellaneous",
    bookName: "Angels & Demons",
    bookImage: misc_2,
    authorName: "Dan Brown",
    publisher: "Westland Publications",
    originalPrice: "500",
    offerPrice: "490",
    rating: "4",
    quantity: "10",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "05 March 2018",
    weight: "180 Grams",
    country: "UK",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 903,
    category: "Miscellaneous",
    bookName: "Rebecca",
    bookImage: misc_3,
    authorName: "Daphne du Maurier",
    publisher: "Roli Books",
    originalPrice: "550",
    offerPrice: "500",
    rating: "3",
    quantity: "5",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "13 April 2017",
    weight: "220 Grams",
    country: "Jamaica",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 904,
    category: "Miscellaneous",
    bookName: "In Cold Blood",
    bookImage: misc_4,
    authorName: "Truman Capote",
    publisher: "Penguin Random House India",
    originalPrice: "600",
    offerPrice: "500",
    rating: "4.5",
    quantity: "15",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "24 Ocober 2021",
    weight: "300 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    bookId: 905,
    category: "Miscellaneous",
    bookName: "The Lovely Bones",
    bookImage: misc_5,
    authorName: "Alice Sebold",
    publisher: "Aleph Book Company",
    originalPrice: "580",
    offerPrice: "530",
    rating: "4",
    quantity: "25",
    about:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    publishDate: "06 February 2024",
    weight: "340 Grams",
    country: "India",
    language: "English",
    liked: false,
    authorPhoto: author_photo,
    aboutAuthor:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
];
