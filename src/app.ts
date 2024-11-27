console.log('Lets party big dog');

enum StockTicker {
    TSLA = 'TSLA',
    PLTR = 'PLTR',
    APPL = 'APPL',
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
    changePercentage: number;
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
    return [];
}


// once you have ran the market, then figure out best/worse stocks
// and best/worse days across all stocks


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

