var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13",
  },
  {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG",
  },
  {
    quote:
      "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R",
  },
  {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R",
  },
  {
    quote:
      "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G",
  },
];

var colors = {
  G: "#3cff00",
  PG: "#f9ff00",
  "PG-13": "#ff9000",
  R: "#ff0000",
};

function styleQuote(selection) {
  selection
    .style("margin", "20px")
    .style("padding", "20px")
    .style("background-color", (d) => colors[d.rating])
    .style("border-radius", "8px");
}

function getQuote(data) {
  return `"${data.quote}" - ${data.movie} "(${data.year})`;
}

styleQuote(
  d3
    .select("#quotes")
    .style("list-style", "none")
    .selectAll("li")
    .data(quotes)
    .enter()
    .append("li")
    .text(getQuote)
);

var newQuotes = [
  { movie: "movie #1", quote: "quote #1", year: 2020, rating: "G" },
  { movie: "movie #2", quote: "quote #2", year: 2019, rating: "PG-13" },
];

var add = d3.select("#add");

add.on("click", function () {
  quotes = quotes.concat(newQuotes);
  styleQuote(
    d3
      .select("#quotes")
      .selectAll("li")
      .data(quotes)
      .enter()
      .append("li")
      .text(getQuote)
  );
  add.remove();
});

var remove = d3.select("#remove");

remove.on("click", function () {
  quotes = quotes.filter((q) => q.rating !== "R");

  d3.selectAll("li")
    .data(quotes, (q) => q.quote)
    .exit()
    .remove();
});
