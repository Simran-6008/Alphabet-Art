const registerOne = document.querySelector("#resisterOne");
const registerTwo = document.querySelector("#resisterTwo");
import themeJson from './theme.json' assert {type: 'json'}
console.log(themeJson)
function allData(url, params) {
  let query = "";
  for (let d in params) {
    query += encodeURIComponent(d) + "=" + encodeURIComponent(params[d]) + "&";
  }
  return url + "?" + query.slice(0, -1);
}
registerOne.addEventListener("click", () => {
  const url = allData("./register.html", themeJson[0]);
  //console.log(url)
  window.location.replace(url);
});

function allDataTwo(url, param) {
  let queryTwo = "";
  for (let k in param) {
    queryTwo +=
      encodeURIComponent(k) + "=" + encodeURIComponent(param[k]) + "&";
  }
  return url + "?" + queryTwo.slice(0, -1);
}
registerTwo.addEventListener("click", () => {
  const newUrl = allDataTwo("./register.html", themeJson[1]);
  console.log(newUrl);
  window.location.replace(newUrl);
});
