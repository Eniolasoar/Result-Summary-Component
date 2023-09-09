function fetchJSON(content){
    fetch("data.json")
    .then(Response=>Response.json())
    .then(data=>totalScore(data))
    .catch(error=>console.log("error"))
}

function totalScore(data){
    let totalScore=0;
    data.forEach(element => {
        totalScore+=element.score
    });

    let averageScore=totalScore/4;

    let resultOutput=document.getElementById("result-total");
    resultOutput.innerText=Math.floor(averageScore);
}
fetchJSON(totalScore);