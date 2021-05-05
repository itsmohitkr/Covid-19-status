window.onload = () => {
    let totalconfirmed = document.getElementById('totalconfirmed')
    let deaths = document.getElementById('deaths')
    let recovered = document.getElementById('recovered')
    let lastupdate = document.getElementById('lastupdate')
    let search_state = document.getElementById('search_state')

    fetch('https://api.covid19api.com/summary').then((apidata) => {
        console.log(apidata);
        return apidata.json();
    }).then((actualData) => {
        console.log(actualData.Countries[76]);
        const mydata = actualData.Countries[76];
        totalconfirmed.innerText = mydata.TotalConfirmed;
        deaths.innerText = mydata.TotalDeaths;
        recovered.innerText = mydata.TotalRecovered;
        lastupdate.innerText = mydata.Date;
    }).catch((error) => {
        console.log(`the error : ${error}`);
    })

}
