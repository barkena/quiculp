const chartOptions = {
    title: {
        text: 'Sample Chart Title',
        display: true,
        padding: 10, // Setting the padding for the title
    },
    // Other chart configuration options
};

// Initializing a chart with the specified options
const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: chartOptions,
});
