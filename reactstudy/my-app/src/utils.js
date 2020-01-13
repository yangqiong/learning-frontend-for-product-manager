// 计算a+b的和并返回
export const sum = (a, b) => {
	return a+b;
}

// 根据城市名称请求数据
export const fetchWeather = (city) => {
  // appid=38d2cdc0eeab5b84cc125f5b758d502e
  let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=ba1dede505658661d6af76c16428a79b"
  return fetch(url)
  .then((resp) => resp.json());
}