var ctx = $("#myChart1");
    
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Guest checkout", "Create an account"],
            datasets: [{
                label: 'When checking out, would you rather create an account or have a guest checkout?',
                data: [87.5, 12.5],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.7)',
                    'rgba(255, 179, 26, 0.9)'
                ],
                borderColor: [
                    'rgba(255, 5, 5, 0)',
                    'rgba(255, 5, 5, 0)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 50,
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
         }
    });

    var ctx = $("#myChart2");
    
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["1-2 shoes", "A few pairs to change the look up", "Too many to count"],
            datasets: [{
                label: 'How many pair of shoes do you own?',
                data: [12.5, 56.3, 31.3],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.7)',
                    'rgba(255, 179, 26, 0.9)',
                    'rgba(5, 76, 255, 0.9)'
                ],
                borderColor: [
                    'rgba(255, 5, 5, 0)',
                    'rgba(255, 5, 5, 0)',
                    'rgba(255, 5, 5, 0)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 50,
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
         }
    });