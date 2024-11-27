console.log('Lets party big dog');

enum StockTicker {
    TSLA = 'TSLA',
    PLTR = 'PLTR',
    APPL = 'APPL',
}

const stockVolatility: Record<StockTicker,number> = {
    [StockTicker.TSLA]: 0.12,
    [StockTicker.PLTR]: 0.25,
    [StockTicker.APPL]: 0.04,
}

const stockStartingPrices: Record<StockTicker,number> = {
    [StockTicker.TSLA]: 200,
    [StockTicker.PLTR]: 50,
    [StockTicker.APPL]: 200,
}


interface Stock {
    ticker: StockTicker;
    volatility: number;
    currentPrice: number;
    tradingDays: TradingDay[];
}

interface TradingDay {
    ticker: StockTicker;
    startValue: number;
    endValue: number;
}


// example of a default stock
const stock: Stock = {
    ticker: StockTicker.APPL,
    volatility: 0.045,
    currentPrice: 200,
    tradingDays: [],
}


// create a function that returns a list of stocks
// in a default state, where they have a random currentPrice
// volatility, zero trading day percentages, and empty array of
// trading days
// we should loop over the values in the StockTicker enum

function generateDefaultStocks(): Stock[] {
    // this is just here to prevent TS syntax errors
    return [];
}

// create a function that takes
// - array of stocks
// - number of days
// returns 
// - updated array of stocks that ran for the input # of days

function runTheMarket(stocks: Stock[], numDays: number): Stock[] {
    // this is just here to prevent TS syntax errors
    return stocks;
}

// create separate functions for the following cases
// - return overall biggest gain stock
// - return overall biggest loss stock
// - return overall largest single day gain for any stock
// - return overall largest single day loss for any stock

function getLargestTotalStockPriceIncrease(stocks: Stock[]): Stock {
    // this is just here to prevent TS syntax errors
    return stocks[0];
}

function getLargestTotalStockPriceDecrease(stocks: Stock[]): Stock {
    // this is just here to prevent TS syntax errors
    return stocks[0];
}

function getTradingDayWithLargestIncrease(stocks: Stock[]): TradingDay {
    // this is just here to prevent TS syntax errors
    return stocks[0].tradingDays[0];
}

function getTradingDayWithLargestDecrease(stocks: Stock[]): TradingDay {
    // this is just here to prevent TS syntax errors
    return stocks[0].tradingDays[0];
}



// running the program
// - create default stocks
// - run the market on all stocks for N days
// - get best/worst stocks and trading days
const numDays = 5;
const defaultStocks: Stock[] = generateDefaultStocks();

const updatedStocks: Stock[] = runTheMarket(defaultStocks, numDays);
console.dir(updatedStocks, {depth: null, colors: true})

// const bestPerformingStock: Stock = getLargestTotalStockPriceIncrease(updatedStocks)
// const worstPerformingStock: Stock = getLargestTotalStockPriceIncrease(updatedStocks)
// const bestTradingDay: TradingDay = getTradingDayWithLargestIncrease(updatedStocks)
// const worstTradingDay: TradingDay = getTradingDayWithLargestDecrease(updatedStocks)

// console.log('best stock', bestPerformingStock)
// console.log('worst stock', worstPerformingStock)
// console.log('best day', bestTradingDay)
// console.log('worst day', worstTradingDay)