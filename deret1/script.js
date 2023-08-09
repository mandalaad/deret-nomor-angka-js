function tampilkanDeret() {
    const counterInput = document.getElementById('counter');
    const deretGenapInput = document.getElementById('deretGenap');
    const deretPrimaInput = document.getElementById('deretPrima');
    const deretFibonacciInput = document.getElementById('deretFibonacci');

    const counter = parseInt(counterInput.value);
    const deretGenap = generateEvenSeries(counter);
    const deretPrima = generatePrimeSeries(counter);
    const deretFibonacci = generateFibonacciSeries(counter);

    deretGenapInput.value = deretGenap.join(' ');
    deretPrimaInput.value = deretPrima.join(' ');
    deretFibonacciInput.value = deretFibonacci.join(' ');
}

function generateEvenSeries(count) {
    const series = [];
    for (let i = 0; i < count; i++) {
        series.push(i * 2);
    }
    return series;
}

function generatePrimeSeries(count) {
    const series = [];
    let num = 2;
    while (series.length < count) {
        if (isPrime(num)) {
            series.push(num);
        }
        num++;
    }
    return series;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function generateFibonacciSeries(count) {
    const series = [];
    let prev = 1;
    let curr = 1;
    for (let i = 1; i < count; i++) {
        series.push(prev);
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return series;
}