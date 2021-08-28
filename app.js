const quotes = [
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    quote:
      "If you believe in yourself and have dedication and pride - and never quit, you'll be a winner. The price of victory is high but so are the rewards.",
    author: "Bear Bryant",
  },
  {
    quote:
      "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
    author: "Rabindranath Tagore",
  },
  {
    quote:
      "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    author: "Edith Wharton",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean",
  },
  {
    quote:
      "Keep your face always toward the sunshine - and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quote:
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    author: "Francis of Assisi",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller",
  },
];

const body = document.querySelector(".quoteBody");
const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  body.innerHTML = `<blockquote><p class="quote">${quotes[randomNumber].quote}</p></blockquote></br><p class="quoteAuthor">${quotes[randomNumber].author}</p>`;
  e.target.innerText = "Next quote";
});
