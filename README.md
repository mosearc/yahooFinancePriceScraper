# yahooFinancePriceScraper
Simlple script to get every yahoo finance prices in google sheets (it works with all exchange and also for "exchange-exclusive" etfs)

## Usage 
In google sheets: extensions -> App Scripts then in App Scripts -> add a file, paste this script and you are done!

Now in your google sheet file you have YAHOOFINANCE("TICKER") function <br> 
You can use directly =YAHOOFINANCE("GOOG") to get the price from yahoofinance

For a better experience, in App Scripts, set a time trigger to automatically re-run the function and get the realtime price
