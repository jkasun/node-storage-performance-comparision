const Chart = require('cli-chart');
const Table = require('cli-table');

module.exports = function () {
    let displayChart = (taskMap) => {
        console.log('\n\n');

        let chart = new Chart({
            xlabel: 'neDB, node-dirty, node-persist, data-storage',
            ylabel: 'Execution Time',
            direction: 'y',
            width: 80,
            height: 40,
            lmargin: 15,
            step: 4
        });

        chart.addBar(taskMap[0].executionTime);
        chart.addBar(taskMap[2].executionTime);
        chart.addBar(taskMap[4].executionTime);
        chart.addBar(taskMap[9].executionTime);

        chart.addBar(taskMap[1].executionTime, 'red');
        chart.addBar(taskMap[3].executionTime, 'red');
        chart.addBar(taskMap[5].executionTime, 'red');
        chart.addBar(taskMap[10].executionTime, 'red');

        chart.addBar(taskMap[6].executionTime, 'yellow');
        chart.addBar(taskMap[7].executionTime, 'yellow');
        chart.addBar(taskMap[8].executionTime, 'yellow');
        chart.addBar(taskMap[11].executionTime, 'yellow');

        chart.draw();
    }

    let displayTable = (taskMap) => {
        console.log('\n\n');

        var table = new Table({ head: ["Library", "Data Write", "Initialization", "Data Read"] });

        table.push(
            { 'neDB': [taskMap[0].executionTime + 'ms', taskMap[1].executionTime + 'ms', taskMap[6].executionTime + 'ms'], },
            { 'node-dirty': [taskMap[2].executionTime + 'ms', taskMap[3].executionTime + 'ms', taskMap[7].executionTime + 'ms'] },
            { 'node-persist': [taskMap[4].executionTime + 'ms', taskMap[5].executionTime + 'ms', taskMap[8].executionTime + 'ms'] },
            { 'data-store': [taskMap[9].executionTime + 'ms', taskMap[10].executionTime + 'ms', taskMap[11].executionTime + 'ms'] }
        );

        console.log(table.toString());
    }

    return {
        displayChart,
        displayTable
    }
}();