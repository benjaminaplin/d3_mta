console.log("d3 playground.js LINKED");
// window.setTimeout(function(){
var candidatesArray = []

var palette = {
    "lightergray": "#D0D0D0",
    "lightgray": "#819090",
    "gray": "#708284",
    "mediumgray": "#536870",
    "darkgray": "#475B62",
    "darkblue": "#0A2933",
    "darkerblue": "#042029",
    "paleryellow": "#FCF4DC",
    "paleyellow": "#EAE3CB",
    "yellow": "#A57706",
    "orange": "#BD3613",
    "red": "#D11C24",
    "pink": "#C61C6F",
    "purple": "#595AB7",
    "blue": "#2176C7",
    "green": "#259286",
    "yellowgreen": "#738A05"
  }

d3.json('./data/service_status.json', function(error, data){
  if (error){
    console.log(error)
  } else {
  var data = data.service.subway.line
  d3.select('.container')
    .append("ul")
    // here we select elements that aren't on the DOM yet
    // but its an 'empty selection' that can accept data
    .selectAll("li")
    //data method allows us to create 1 element for 
    // each data point
    .data(data)
    //'enter' returns a selection whose array contains the data 
    // for all the new elements we're going to create
    // data INITIALIZES , while SELECTS THOSE DATA POINTS THAT 
    //DON'T ALREADY EXIST ON THE SCREEN
    .enter()
    //here we actually append the data to the DOM
    // with a call back
    .append("li")
      .text(function(d){
        return d.name + ": " + d.status;
      });

d3.selectAll("li")
    .style("font-weight", function (d) {
        if (d.status == "GOOD SERVICE"){
            return "normal";
        } else {
            return "bold";
}
})

  }
});
