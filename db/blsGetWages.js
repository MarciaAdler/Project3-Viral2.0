const fs = require("fs");
const data = fs.readFileSync('blsIndustryCodes.json','utf8');
const db = require("./models");
// console.log(data);
var cleanData = JSON.parse(data);
var codes = [];
for (let i = 0; i < cleanData.length; i++) {
  codes.push(cleanData[i].industry_code)

}

let getData = async function(series, masterSeries) {

  const BLS_API_KEY = process.env.BLS_APIKEY;
  const seriesCodes = series;
  const start_year = '2020';
  const end_year = '2020';

  var Bls2 = require('bls2');
  let bls = new Bls2(BLS_API_KEY);
  
  let options = {
      'seriesid': seriesCodes,
      'startyear': start_year,  
      'endyear': end_year,
  };
  
  await bls.fetch(options).then(function (response) {

      let seriesData = response.Results.series

      var cleanSeriesData = seriesData.filter(function (series) {
        return series.data[0] !== undefined;
      });
      
      for (let j = 0; j < cleanSeriesData.length; j++) {
        db.Wages.create({
          seriesID: cleanSeriesData[j].seriesID,
          industry: cleanData[masterSeries.indexOf(cleanSeriesData[j].seriesID)].industry_name,
          averageWage: cleanSeriesData[j].data[0].value
        });
      }
      fs.writeFile ("wages.json", JSON.stringify(response), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
  });

};

let getAllData = async function() {
  let series = [];
  let masterSeries = [];

  for (let j = 0; j < (codes.length / 50); j++) {
    series = [];
    for (let k = (j * 50); k < ((j * 50) + 50); k++) {
      let tempCode = [];
      if (codes[k] !== undefined) {
        tempCode = codes[k].toString();
      }
      if (tempCode.length === 1) {
        tempCode = "0000000" + codes[j]
      }
      if (tempCode.length === 7) {
        tempCode = "0" + tempCode
      }
      let tempSeries = "CEU" + tempCode + "03"
      console.log(codes[j])

      masterSeries.push(tempSeries)
      series.push(tempSeries)
    }
    console.log(series)
    await getData(series, masterSeries)
    // series = [];
  }
}

getAllData();
// console.log(series)

// Series ID    CE + U + 08000000 + 03
// Positions       Value           Field Name
// 1-2             CE              Prefix
// 3               U               Seasonal Adjustment Code
  // seasonal_code	seasonal_text
  // S	Seasonally Adjusted
  // U	Not Seasonally Adjusted

// 4-11		08000000	Supersector and Industry Codes
  // https://download.bls.gov/pub/time.series/ce/ce.industry
  // supersector_code	supersector_name
  // 00	Total nonfarm
  // 05	Total private
  // 06	Goods-producing
  // 07	Service-providing
  // 08	Private service-providing
  // 10	Mining and logging
  // 20	Construction
  // 30	Manufacturing
  // 31	Durable Goods
  // 32	Nondurable Goods
  // 40	Trade, transportation, and utilities
  // 41	Wholesale trade
  // 42	Retail trade
  // 43	Transportation and warehousing
  // 44	Utilities
  // 50	Information
  // 55	Financial activities
  // 60	Professional and business services
  // 65	Education and health services
  // 70	Leisure and hospitality
  // 80	Other services
  // 90	Government
// 12-13           03              Data Type Code
  // data_type_code	data_type_text
  // 01	ALL EMPLOYEES, THOUSANDS
  // 02	AVERAGE WEEKLY HOURS OF ALL EMPLOYEES
  // 03	AVERAGE HOURLY EARNINGS OF ALL EMPLOYEES
  // 04	AVERAGE WEEKLY OVERTIME HOURS OF ALL EMPLOYEES
  // 06	PRODUCTION AND NONSUPERVISORY EMPLOYEES, THOUSANDS
  // 07	AVERAGE WEEKLY HOURS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES
  // 08	AVERAGE HOURLY EARNINGS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES
  // 09	AVERAGE WEEKLY OVERTIME HOURS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES
  // 10	WOMEN EMPLOYEES, THOUSANDS
  // 11	AVERAGE WEEKLY EARNINGS OF ALL EMPLOYEES
  // 12	AVERAGE WEEKLY EARNINGS OF ALL EMPLOYEES, 1982-1984 DOLLARS
  // 13	AVERAGE HOURLY EARNINGS OF ALL EMPLOYEES, 1982-1984 DOLLARS
  // 15	AVERAGE HOURLY EARNINGS OF ALL EMPLOYEES, EXCLUDING OVERTIME
  // 16	INDEXES OF AGGREGATE WEEKLY HOURS OF ALL EMPLOYEES, 2007=100
  // 17	INDEXES OF AGGREGATE WEEKLY PAYROLLS OF ALL EMPLOYEES, 2007=100
  // 19	AVERAGE WEEKLY HOURS OF ALL EMPLOYEES, QUARTERLY AVERAGES, SEASONALLY ADJUSTED
  // 20	AVERAGE WEEKLY OVERTIME HOURS OF ALL EMPLOYEES, QUARTERLY AVERAGES, SEASONALLY ADJUSTED
  // 21	DIFFUSION INDEXES, 1-MONTH SPAN, SEASONALLY ADJUSTED
  // 22	DIFFUSION INDEXES, 3-MONTH SPAN, SEASONALLY ADJUSTED
  // 23	DIFFUSION INDEXES, 6-MONTH SPAN, SEASONALLY ADJUSTED
  // 24	DIFFUSION INDEXES, 12-MONTH SPAN, NOT SEASONALLY ADJUSTED
  // 25	ALL EMPLOYEES, QUARTERLY AVERAGES, SEASONALLY ADJUSTED, THOUSANDS
  // 26	ALL EMPLOYEES, 3-MONTH AVERAGE CHANGE, SEASONALLY ADJUSTED, THOUSANDS
  // 30	AVERAGE WEEKLY EARNINGS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES
  // 31	AVERAGE WEEKLY EARNINGS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES, 1982-84 DOLLARS
  // 32	AVERAGE HOURLY EARNINGS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES, 1982-84 DOLLARS
  // 33	AVERAGE HOURLY EARNINGS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES, EXCLUDING OVERTIME
  // 34	INDEXES OF AGGREGATE WEEKLY HOURS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES, 2002=100
  // 35	INDEXES OF AGGREGATE WEEKLY PAYROLLS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES, 2002=100
  // 36	AVERAGE WEEKLY HOURS, PRODUCTION/NONSUPERVISORY EMPLOYEES, QUARTERLY AVERAGES, SEASONALLY ADJUSTED
  // 37	AVERAGE WEEKLY OVERTIME HOURS,PRODUCTION/NONSUPERVISORY EMPLOYEES,QUARTERLY AVG,SEASONALLY ADJUSTED
  // 38	PRODUCTION AND NONSUPERVISORY EMPLOYEES-TO-ALL EMPLOYEES RATIO
  // 39	WOMEN EMPLOYEES-TO-ALL EMPLOYEES RATIO
  // 56	AGGREGATE WEEKLY HOURS OF ALL EMPLOYEES, THOUSANDS
  // 57	AGGREGATE WEEKLY PAYROLLS OF ALL EMPLOYEES, THOUSANDS
  // 58	AGGREGATE WEEKLY OVERTIME HOURS OF ALL EMPLOYEES, THOUSANDS
  // 81	AGGREGATE WEEKLY HOURS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES, THOUSANDS
  // 82	AGGREGATE WEEKLY PAYROLLS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES, THOUSANDS
  // 83	AGGREGATE WEEKLY OVERTIME HOURS OF PRODUCTION AND NONSUPERVISORY EMPLOYEES, THOUSANDS
  // 86	1-MONTH CONFIDENCE INTERVAL, ALL EMPLOYEES
  // 87	3-MONTH CONFIDENCE INTERVAL, ALL EMPLOYEES
  // 88	6-MONTH CONFIDENCE INTERVAL, ALL EMPLOYEES
  // 89	12-MONTH CONFIDENCE INTERVAL, ALL EMPLOYEES
  // 98	CPI-U 1982-84
  // 99	CPI-W 1982-84
