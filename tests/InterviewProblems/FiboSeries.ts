//Generate the first n Fibonacci numbers.


function Fibonacci (n:number):number[]{

const series=[0,1]

for (let i = 2; i < n; i++) {
    
    series.push(series[i-1]+series[i-2])

}

    return series.slice(0,n);

}

const res = Fibonacci(8)
console.log(res)