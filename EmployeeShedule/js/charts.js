$(function(){
  var d1 =[ [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [9, 0],
            [10, 0],
            [11, 0],
            [12, 0]
  ];
  var d2 =[ [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [9, 0],
            [10, 0],
            [11, 0],
            [12, 0]
  ];
  var months = ["January", "February", "March", "April", "May", "Juny", "July", "August", "September", "October", "November", "December"];

  // flot chart generate
  var plot = $.plotAnimator($("#statistics-chart"), 
    [
      {
        label: 'Users', 
        data: d1,    
        lines: {lineWidth:3}, 
        shadowSize:0,
        color: '#ffffff'
      },
      { label: "Visits",
        data: d2, 
        animator: {steps: 99, duration: 1500, start:200, direction: "left"},   
        lines: {        
          fill: .3,
          lineWidth: 0
        },
        color:['#ffffff']
      },{
        label: 'Users',
        data: d1, 
        points: { show: true, fill: true, radius:6,fillColor:"#078e74",lineWidth:3 }, 
        color: '#fff',        
        shadowSize:0
      },
      { label: "Visits",
        data: d2, 
        points: { show: true, fill: true, radius:6,fillColor:"rgba(255,255,255,.5)",lineWidth:3 }, 
        color: '#fff',        
        shadowSize:0
      }
    ],{ 
    
    xaxis: {

      tickLength: 0,
      tickDecimals: 0,
      min:1,
      ticks: [[1,"JAN"], [2, "FEB"], [3, "MAR"], [4, "APR"], [5, "MAY"], [6, "JUN"], [7, "JUL"], [8, "AUG"], [9, "SEP"], [10, "OCT"], [11, "NOV"], [12, "DEC"]],

      font :{
        lineHeight: 24,
        weight: "300",
        color: "#ffffff",
        size: 14
      }
    },
    
    yaxis: {
      ticks: 4,
      tickDecimals: 0,
      tickColor: "rgba(255,255,255,.3)",

      font :{
        lineHeight: 13,
        weight: "300",
        color: "#ffffff"
      }
    },
    
    grid: {
      borderWidth: {
        top: 0,
        right: 0,
        bottom: 1,
        left: 1
      },
      borderColor: 'rgba(255,255,255,.3)',
      margin:0,
      minBorderMargin:0,              
      labelMargin:20,
      hoverable: true,
      clickable: true,
      mouseActiveRadius:6
    },
    
    legend: { show: false}
  });

  $(window).resize(function() {
    // redraw the graph in the correctly sized div
    plot.resize();
    plot.setupGrid();
    plot.draw();
  });

  // tooltips showing
  $("#statistics-chart").bind("plothover", function (event, pos, item) {
    if (item) {
      var x = item.datapoint[0],
          y = item.datapoint[1];

      $("#tooltip").html('<h1 style="color: #16a085">' + months[x - 1] + '</h1>' + '<strong>' + y + '</strong>' + ' ' + item.series.label)
        .css({top: item.pageY+5, left: item.pageX+5})
        .fadeIn(200);
    } else {
      $("#tooltip").hide();
    }
  });

  
  //tooltips options
  $("<div id='tooltip'></div>").css({
    position: "absolute",
    //display: "none",
    padding: "10px",
    "background-color": "#ffffff",
    "z-index":"99999"
  }).appendTo("body");

})