window.onload = () => {
    let totalconfirmed = document.getElementById('totalconfirmed')
    let deaths = document.getElementById('deaths')
    let recovered = document.getElementById('recovered')
    let lastupdate = document.getElementById('lastupdate')
   
    
    fetch('https://api.covid19api.com/summary').then((apidata) => {
        // console.log(apidata);
        return apidata.json();
    }).then((actualData) => {
        // console.log(actualData.Countries[76]);
        const mydata = actualData.Countries[76];
        totalconfirmed.innerText = mydata.TotalConfirmed;
        deaths.innerText = mydata.TotalDeaths;
        recovered.innerText = mydata.TotalRecovered;
        lastupdate.innerText = mydata.Date;
        
        return fetch('https://api.covid19india.org/data.json');
    }).then((apidata_2) => {
        // console.log(apidata);
        return apidata_2.json();
    }).then((actual_data) => {

        const new_data = actual_data.statewise;
        State_name.innerText = `${new_data[15].state} (India)`;
        cnfrm.innerText = `Confirmed cases: ${new_data[15].confirmed}`;
        total_death.innerText = `Total deaths: ${new_data[15].deaths}`;
        total_rec.innerText = `Total recovered: ${new_data[15].recovered}`;
        last_update.innerText = `Last update: ${new_data[15].lastupdatedtime}`;

        Search_btn.onclick = function () {
            var x = input_data.value;
            var y= x.charAt(0).toUpperCase() + x.slice(1);
            for (let i = 1; i < 38; i++) {
                if (y == new_data[i].state) {

                    State_name.innerText = `${new_data[i].state} (india)`;
                    cnfrm.innerText = `Confirmed cases: ${new_data[i].confirmed}`;
                    total_death.innerText = `Total deaths: ${new_data[i].deaths}`;
                    total_rec.innerText = `Total recovered: ${new_data[i].recovered}`;
                    last_update.innerText = `Last update: ${new_data[i].lastupdatedtime}`;
                }
            }

        }
    }).catch((error) => {
        console.log(`the error : ${error}`);
    })

    }