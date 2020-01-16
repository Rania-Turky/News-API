

var allData = [];



var httpReq = new XMLHttpRequest();
var links = document.querySelectorAll(".nav-link");
var category = "general"
getData(category);
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      
        category = e.target.text;
        getData(category);

    })

}
function getData(category) {
    httpReq.open("GET", "https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=73c29499e2f845fd8849f114143d32d2")
    httpReq.send();
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4 && httpReq.status == 200) {
            httpReq.response;
            allData = JSON.parse(httpReq.response).articles;
            displayData();

        }
    }

}




function displayData() {
    var temp = ``;
    for (var i = 0; i < allData.length; i++) {
        temp += `<div class="col-lg-3 col-md-4 col-sm-6">
        <div class="item">
        <img src=`+ allData[i].urlToImage + `  >
            <h5>`+ allData[i].title + `</h5>
            <p>`+allData[i].description+`</p> 
        </div>

    </div>
`
    }
    document.getElementById("rowData").innerHTML = temp;
}
