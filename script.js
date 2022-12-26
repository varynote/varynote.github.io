var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["0.5 X Notes", "0.7 X Notes", "Original", "1.5 X Notes", "1.9 X Notes"],
    datasets: [{
      label: 'Preference Score',
      data: [2.15, 2.73, 3.09, 3.62, 3.41],
      backgroundColor: "rgba(50,200,0,1)"
    }, {
            label: 'Percieved Complexity Score',
            data: [1.62, 2.52,3.25, 3.92, 3.85],
            backgroundColor: "rgba(50,0,0,1)"
          }]
  }
});
// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ["0.5 X Notes", "0.7 X Notes", "Original", "1.5 X Notes", "1.9 X Notes"],
//     datasets: [{
//       label: 'apples',
//       data: [12, 19, 3, 17, 28],
//       backgroundColor: "rgba(153,255,51,1)"
//     }, {
//       label: 'oranges',
//       data: [30, 29, 5, 5, 20],
//       backgroundColor: "rgba(255,153,0,1)"
//     }, {
//       label: 'cows',
//       data: [30, 29, 5, 5, 20],
//       backgroundColor: "rgba(0,170,170,1)"
//     }, {
//       label: 'bar',
//       data: [30, 29, 5, 5, 20],
//       backgroundColor: "rgba(122,200,0,1)"
//     }, {
//       label: 'cof',
//       data: [30, 29, 5, 5, 20],
//       backgroundColor: "rgba(0,153,0,1)"
//     }]
//   }
// });