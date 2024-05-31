const ctx = document.getElementById('myChart');
// const cxt = document.getElementById('myChart2');

fetch('Total_Revenue_Tax_Class.json')
.then(function(response) {

    if(response.ok == true){
        return response.json();
    }
})
.then(function(data){
    console.log(data);
    var arrTotalRevenue = [];
    var arrTaxClass = [];
    var arrTotalTransaction = [];
    data.forEach(element => {
      arrTotalRevenue.push(element.TOTAL_REVENUE);
      arrTaxClass.push(element.TAX_CLASS);
      arrTotalTransaction.push(element.TOTAL_TRANSACTIONS);
    });
    console.log(arrTaxClass);
    console.log(arrTotalRevenue);
    var objChart = {
      tax_class : arrTaxClass,
      total_revenue : arrTotalRevenue,
      total_transaction : arrTotalTransaction
    };
    console.log(objChart);
    createChart(objChart, 'bar');
})

function createChart(arrPassed, type){

  new Chart(ctx, {
    type: type,
    data: {
      labels: arrPassed.tax_class,
      datasets: [{
        label: 'Total Revenue',
        data: arrPassed.total_revenue,
        borderWidth: 1,
        yAxisID: "revenue"
      },
      {
        label: 'Transactions',
        data: arrPassed.total_transaction,
        borderWidth: 1,
        yAxisID: "transaction"
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
        revenue:{
          axis: 'y',
          min: 0,
          max: 5000000000
        },
        transaction  : {
          axis: 'y',
          min:  0,
          max: 10000,
          display: false
        }
      }
    }
  });
}

// function createChart2(){

  // new Chart(cxt, {
  //   type: 'bar',
  //   data: {
  //     labels: [2,4,1],
  //     datasets: [{
  //       label: 'Total Revenue by Tax Class',
  //       data: [415347493, 128970929, 64914174],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });
// }