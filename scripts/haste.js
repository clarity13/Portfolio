
    var ctx = $("#myChart1");
    
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Yes", "A little", "No"],
            datasets: [{
                label: 'Are you Tech Savvy?',
                data: [66.7, 22.2, 11.1],
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

    var ctx = $("#myChart2");
    
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["0-1 hour", "2 hours", "3+ hours"],
            datasets: [{
                label: 'How long do you spend shopping at the supermarket?',
                data: [81.5, 18.5, 0],
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


    