function fetchJSON(content){
    fetch("data.json")
    .then(Response=>Response.json())
    .then(data=>content(data))
    .catch(error=>console.log("Error fetching JSON",error))
}

function content(data){
    let parentNode=document.getElementById("summaries");

    data.forEach(element=>{
        const parentNode=document.getElementById("parentNode");

        const summaryContainer=document.createElement("div");
        summaryContainer.classList.add("summary-container");

        if(element.category=="Reaction"){
            summaryContainer.classList.add("reaction")
        }
        else if(element.category=="Verbal"){
            summaryContainer.classList.add("verbal")
        }
        else if(element.category=="Visual"){
            summaryContainer.classList.add("visual");
        }
        else{
            summaryContainer.classList.add("memory");
        }

        const div=document.createElement("div");
        div.classList.add("left-section");
        div.innerHTML=`<img src='${element.icon}'> <p>${element.category}</p>`;

        summaryContainer.innerHTML=`
        <div class='left-section'>
            <img src='${element.icon}'/>
            <p>${element.category}</p>
        </div>
        
        <p class='summary-num2'>
            <span id='summary-num'>${element.score}</span>
            / 100`;

            parentNode.appendChild(summaryContainer);
    })
}

fetchJSON(content);