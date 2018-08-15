module.exports = function () {
    let averageMemoryUsage = 0;
    let count = 1;

    let startMemoryTrack = () => {
        setInterval(() => {
            averageMemoryUsage += (process.memoryUsage().heapTotal - averageMemoryUsage) / count++;
        }, 50);
    }

    let getAverageMemoryUsage = () => {
        return averageMemoryUsage;
    }

    return {
        startMemoryTrack,
        getAverageMemoryUsage
    }
}();