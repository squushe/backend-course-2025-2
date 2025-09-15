const date = "20231001";
const time_period = "q";
const link = "https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank";
const url = new URL(link);
url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "");
console.log(url.toString());
