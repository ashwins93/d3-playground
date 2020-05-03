var letters = [];
var input = d3.select("input");

d3.select("form").on("submit", function () {
  d3.event.preventDefault();
  var value = input.property("value");
  if (!value) {
    return;
  }

  analyzePhrase(value);
  d3.select("#phrase").text(value);
  input.property("value", "");

  var listItems = d3
    .select("#letters")
    .selectAll("div")
    .data(letters, (d) => d.letter);

  // update items
  listItems.style("height", (d) => d.count * 20 + "px").classed("new", false);

  // remove exit items
  listItems.exit().remove();

  d3.select("#count").text(`New characters: ${listItems.enter().size()}`);

  // new styles
  listItems
    .enter()
    .append("div")
    .classed("letter", true)
    .classed("new", true)
    .text((d) => d.letter)
    .style("height", (d) => d.count * 20 + "px");
});

function analyzePhrase(phrase) {
  var letterCount = phrase.split("").reduce(
    (result, letter) => ({
      ...result,
      [letter]: result[letter] ? result[letter] + 1 : 1,
    }),
    {}
  );
  letters = Object.keys(letterCount).map((k) => ({
    letter: k,
    count: letterCount[k],
  }));
}

d3.select("#reset").on("click", function () {
  letters = [];

  d3.selectAll(".letter").remove();
  d3.select("#phrase").text("");
  d3.select("#count").text("");
});
