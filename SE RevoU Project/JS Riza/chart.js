const ctx = document.getElementById('myChart');

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
            {
                // label: 'Revenue Percentage',
                // data: arrPassed.Revenue_Percentage,
                // borderWidth: 1,
                // yAxisID: "Revenue_Percentage"  
            }
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


var chartContainer = document.getElementById('myChart').parentNode;
var button = document.createElement('button');
button.innerHTML = 'Click Me';
button.addEventListener('click', function() {
    // Handle button click event (e.g., go to top level)
    console.log('Button clicked!');
});
chartContainer.appendChild(button);
