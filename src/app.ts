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
// volatility, and empty array of
// trading days
// we should loop over the values in the StockTicker enum

const generateDefaultStocks = (): Stock[] => {
    const stocks: Stock[] = [];

    const teslaStock: Stock = {
        ticker: StockTicker.TSLA,
        volatility: stockVolatility[StockTicker.TSLA],
        currentPrice: stockStartingPrices[StockTicker.TSLA],
        tradingDays: [],
    }

    stocks.push(teslaStock);

    const palantirStock: Stock = {
        ticker: StockTicker.PLTR,
        volatility: stockVolatility[StockTicker.PLTR],
        currentPrice: stockStartingPrices[StockTicker.PLTR],
        tradingDays: [],
    }

    stocks.push(palantirStock);

    const appleStock: Stock = {
        ticker: StockTicker.APPL,
        volatility: stockVolatility[StockTicker.APPL],
        currentPrice: stockStartingPrices[StockTicker.APPL],
        tradingDays: [],
    }

    stocks.push(appleStock);

    return stocks;
}

const runTheMarket_SingleStock = (singleStock: Stock, numDays: number): Stock => {

    let currentPrice = singleStock.currentPrice;
    for (let j = 0; j < numDays; j++) {

        const currentDay: TradingDay = {
            ticker: singleStock.ticker,
            startValue: currentPrice,
            endValue: 0,
        }

        const direction = Math.random() > 0.5 ? 1 : -1;
        const change = Math.random() * singleStock.volatility * direction * currentPrice;
        currentPrice += change;

        currentDay.endValue = currentPrice;
        singleStock.tradingDays.push(currentDay);
    }
    singleStock.currentPrice = currentPrice;
    
    return singleStock;
}

// create a function that takes
// - array of stocks
// - number of days
// returns 
// - updated array of stocks that ran for the input # of days

const runTheMarket = (stocks: Stock[], numDays: number): Stock[] => {

    for (let i = 0; i < stocks.length; i++) {
        runTheMarket_SingleStock(stocks[i], numDays);
    }
    return stocks;
}

// create separate functions for the following cases
// - return overall biggest gain stock
// - return overall biggest loss stock
// - return overall largest single day gain for any stock
// - return overall largest single day loss for any stock

const getLargestTotalStockPriceIncrease = (stocks: Stock[]): Stock => {
    // this is just here to prevent TS syntax errors
    return stocks[0];
}

const getLargestTotalStockPriceDecrease = (stocks: Stock[]): Stock => {
    // this is just here to prevent TS syntax errors
    return stocks[0];
}

const getTradingDayWithLargestIncrease = (stocks: Stock[]): TradingDay => {
    // this is just here to prevent TS syntax errors
    return stocks[0].tradingDays[0];
}

const getTradingDayWithLargestDecrease = (stocks: Stock[]): TradingDay => {
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