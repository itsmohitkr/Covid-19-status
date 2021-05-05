
window.onload = () => {
    let t_body = document.getElementById('t_body')

    fetch('https://api.covid19api.com/summary').then((apidata) => {
        console.log(apidata);
        return apidata.json();
    }).then((actualData) => {
        // console.log(actualData.Countries[76]);
        for (let i = 0; i <= 190; i++) {
        
            const mydata = actualData.Countries[i];
            let tr = document.createElement('tr');

            let th_scope = document.createElement('th');
            th_scope.setAttribute('scope', 'row');
            th_scope.innerText = i+1;

            let td_1 = document.createElement('td');
            td_1.setAttribute('id', 'Country');
            td_1.innerText = mydata.Country;

            let td_2 = document.createElement('td');
            td_2.setAttribute('id', 'CountryCode');
            td_2.innerText = mydata.CountryCode;

            let td_3 = document.createElement('td');
            td_3.setAttribute('id', 'Date');
            td_3.setAttribute('style', 'font-size: small');
            td_3.innerText = mydata.Date;

            let td_4 = document.createElement('td');
            td_4.setAttribute('id', 'NewConfirmed');
            td_4.setAttribute('style', 'background-color: rgb(228, 193, 130)');
            td_4.innerText = mydata.NewConfirmed;

            let td_5 = document.createElement('td');
            td_5.setAttribute('id', 'NewDeaths');
            td_5.setAttribute('style', 'background-color: rgb(228, 125, 125)');
            td_5.innerText = mydata.NewDeaths;

            let td_6 = document.createElement('td');
            td_6.setAttribute('id', 'NewRecovered');
            td_6.setAttribute('style', 'background-color: rgb(170, 235, 170)');
            td_6.innerText = mydata.NewRecovered;

            let td_7 = document.createElement('td');
            td_7.setAttribute('id', 'TotalConfirmed');
            td_7.innerText = mydata.TotalConfirmed;

            let td_8 = document.createElement('td');
            td_8.setAttribute('id', 'TotalDeaths');
            td_8.innerText = mydata.TotalDeaths;

            let td_9 = document.createElement('td');
            td_9.setAttribute('id', 'TotalRecovered');
            td_9.innerText = mydata.TotalRecovered;

            tr.appendChild(th_scope);
            tr.appendChild(td_1);
            tr.appendChild(td_2);
            tr.appendChild(td_3);
            tr.appendChild(td_4);
            tr.appendChild(td_5);
            tr.appendChild(td_6);
            tr.appendChild(td_7);
            tr.appendChild(td_8);
            tr.appendChild(td_9);

            t_body.appendChild(tr);

            // document.getElementById("Country").innerHTML = mydata.Country;
            // document.getElementById("CountryCode").innerHTML = mydata.CountryCode;
            // document.getElementById("Date").innerHTML = mydata.Date;
            // document.getElementById("NewConfirmed").innerHTML = mydata.NewConfirmed;
            // document.getElementById("NewDeaths").innerHTML = mydata.NewDeaths;
            // document.getElementById("NewRecovered").innerHTML = mydata.NewRecovered;
            // document.getElementById("TotalConfirmed").innerHTML = mydata.TotalConfirmed;
            // document.getElementById("TotalDeaths").innerHTML = mydata.TotalDeaths;
            // document.getElementById("TotalRecovered").innerHTML = mydata.TotalRecovered;
        }
        // console.log(`The name of the country is ${mydata.Country} and the total confirmed 
        // cases is ${mydata.TotalConfirmed} and the total deaths is ${mydata.TotalDeaths}`);
    }).catch((error) => {
        console.log(`the error : ${error}`);
    })
}