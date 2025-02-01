/**
 * Gets the current stock price from Yahoo Finance
 * @param {string} ticker The stock ticker symbol
 * @return {number} the price of the stock
 */

// Usage in google sheets: =YAHOOFINANCE("GOOG")
function YAHOOFINANCE(ticker) {
  if (!ticker) return "Please provide a ticker symbol";
  
  try {
    // Use Yahoo Finance's JSON endpoint in only last day interval
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=1d`;
    
    const response = UrlFetchApp.fetch(url, {
      'muteHttpExceptions': true,
      'headers': {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const data = JSON.parse(response.getContentText());

    console.log(typeof(data.chart.result[0].meta.regularMarketPrice))
    
    // Get the regualrMarketPrice from the chart data
    if (data && data.chart && data.chart.result && data.chart.result[0]) {
      const quote = data.chart.result[0].meta;
      if (quote && quote.regularMarketPrice) {
        return quote.regularMarketPrice;
      }
    }
    
    Logger.log("Data received: " + response.getContentText().substring(0, 500));
    return "Price not found - please verify ticker";
    
  } catch (error) {
    Logger.log("Error for ticker " + ticker + ": " + error.message);
    return "Error: " + error.message;
  }
}

/**
 * Test function to debug price fetching
 */
function testYahooFinance() {
  const ticker = "GOOG";
  Logger.log("Testing ticker: " + ticker);
  const result = YAHOOFINANCE(ticker);
  Logger.log("Result: " + result);
}
