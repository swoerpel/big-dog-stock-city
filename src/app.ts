

console.log('Lets party big dog');


enum StockTicker{
    TSLA = 'TSLA',
    PLTR = 'PLTR',
    APPL = 'APPL',
}



interface Stock{
    ticker: StockTicker;
    volatility: number;
    currentPrice: number;
    bestTradingDayPercentage: number;
    worstTradingDayPercentage: number;
    tradingDays: TradingDay[];
}

interface TradingDay{
    ticker: StockTicker;
    startValue: number;
    endValue: number;
    changePercentage: number;
}

const stock: Stock = {
    ticker: StockTicker.APPL,
    volatility: 0.045,
    currentPrice: 200,
    bestTradingDayPercentage: 0,
    worstTradingDayPercentage: 0,
    tradingDays: [],
}


// create a function that returns a list of stocks
// with empty training days







// const numDays = 5;

// // current price of the stock
// let teslaPrice = 200;

// // the most the price can change on a given day (+ or -)
// const variability = 0.1;


// // calculates the price after a given number of days
// function runTheMarket(numDays: number, price: number, variability: number): number{
//     let currentPrice = price;
//     for(let i = 0; i < numDays; i++){
//         const positive = Math.random() > 0.5 ? 1 : -1;
//         const change = Math.random() * variability * positive * currentPrice;
//         currentPrice += change
//     }
//     return currentPrice;
// }

// const result = runTheMarket(numDays, teslaPrice, variability)


// console.log('result',result)
