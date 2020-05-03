d3.select("#new-note").on("submit", function () {
  d3.event.preventDefault();
  var input = d3.select("input");
  d3.select("#notes")
    .append("p")
    .classed("note", true)
    .text(input.property("value"));
  input.property("value", "");
  d3.select(".preview").classed("hide", true);
});

d3.select("#remove").on("click", function () {
  d3.select("#notes").selectAll("p").remove();
});

d3.select("input").on("input", function () {
  var val = d3.select(this).property("value");

  d3.select(".preview").classed("hide", !val).text(val);
});

d3.select("#lucky").on("click", function () {
  d3.select("#notes")
    .selectAll("p")
    .style("font-size", function () {
      return Math.random() * 32 + "px";
    })
    .style("background-color", function () {
      var grey = Math.floor(Math.random() * 255);
      return "rgb(" + grey + "," + grey + "," + grey + ")";
    });
});
