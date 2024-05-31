const ctx = document.getElementById('myChart');

// Fetch data from the JSON file
fetch('Total_Revenue_building_Category.json')
.then(function(response) {
    
    if(response.ok == true) {
        return response.json();
    }
})
.then(function(data) {
    console.log(data);
    var arrTotalRevenue = [];
    var arrBuildingClassCategory = [];
    // var arrRevenuePercentage = [];
    data.forEach(element => {
        arrTotalRevenue.push(element.Total_Revenue);
        arrBuildingClassCategory.push(element.BUILDING_CLASS_CATEGORY);
        // arrRevenuePercentage.push(element.Revenue_Percentage);       
    });
    console.log(arrBuildingClassCategory);
    console.log(arrTotalRevenue);
    // console.log(arrRevenuePercentage);
    var objChart = {
        building_class_category : arrBuildingClassCategory,
        total_revenue : arrTotalRevenue,
        // Revenue_Percentage : arrRevenuePercentage
    };
    console.log(objChart);
    createChart(objChart, 'bar');
    //sortChart('asc');
})

function createChart(arrPassed, type){
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrPassed.building_class_category,
            datasets: [{
                label: 'Total Revenue',
                data: arrPassed.total_revenue,
                borderWidth: 1
                // yAxisID: "Total_Revenue"
            },
            //{
                // label: 'Revenue Percentage',
                // data: arrPassed.Revenue_Percentage,
                // borderWidth: 1,
                // yAxisID: "Revenue_Percentage"  
            //}
        ]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    type: 'logarithmic',
                },
                // Revenue: {
                //     axis: 'y',
                //     min: 0,
                //     max: 5000000000
                // },    
                // Revenue_Percentage: {
                //     axis: 'y',
                //     min: 0,
                //     max: 1,
                //     display: false 
                // }
            }
        }
    })
}

//list.sort('Total_Revenue', {
//      order: 'asc',
//      sortFunction: function (a, b) {
//        console.log('sorting price');
       // sort mechanics here
//      }
//  });



// Fungsi untuk sort dan update chart
        //function sortChart(order) {
            // Membuat array gabungan dari labels dan data
        //    const combined = arrPassed.building_class_category.map((label, index) => ({ label, value: arrPassed.total_revenue[index] }));

            // Melakukan sort
//            combined.sort((a, b) => order === 'asc' ? a.value - b.value : b.value - a.value);

            // Memisahkan kembali labels dan data
//            const sortedLabels = combined.map(item => item.label);
//            const sortedData = combined.map(item => item.value);

            // Update chart dengan data yang telah di-sort
//            myChart.data.labels = sortedLabels;
//            myChart.data.datasets[0].data = sortedData;
//            myChart.update();
//        }






document.getElementById("sortAscRevenue").addEventListener("click", function() {
  sortChartData("asc", "revenue");
});
document.getElementById("sortDescRevenue").addEventListener("click", function() {
  sortChartData("desc", "revenue");
});
function sortChartData(strSort, sortBy) {
  let arrBuildingClassCategory = window.megaChart.data;
 //  let arrTotalRevenue = window.megaChart.data.datasets[0].data;
  let arrSort = [];
  //arrBuildingClassCategory.forEach((element) => {
     arrSort.push({ 
         buildingClassCategory: arrBuildingClassCategory, 
         totalRevenue: element,
     });
  //});
  if (sortBy === "revenue") {
     if (strSort === "asc") {
         arrSort.sort((a, b) => a.totalRevenue - b.totalRevenue);
     } else {
         arrSort.sort((a, b) => b.totalRevenue - a.totalRevenue);
     }
  }
  arrBuildingClassCategory = [];
  arrTotalRevenue = [];
  arrSort.forEach((element, index) => {
     arrBuildingClassCategory.push(element.buildingClassCategory);
     arrTotalRevenue.push(element.totalRevenue);
  });
  window.megaChart.data = arrBuildingClassCategory;
  //window.megaChart.data.datasets[0].data = arrTotalRevenue;
  window.megaChart.update();
}

