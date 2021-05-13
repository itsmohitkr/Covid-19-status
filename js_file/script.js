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
        return apidata_2.json();
    }).then((actual_data) => {
        
        // console.log(actual_data);
        const new_data = actual_data.statewise;

        State_name.innerText = `${new_data[5].state} (India)`;

        cnfrm.innerText = `${new_data[5].confirmed}`;
        delta_confirmed.innerText = `(+${new_data[5].deltaconfirmed})`;

        total_death.innerText = `${new_data[5].deaths}`;
        delta_death.innerText = `(+${new_data[5].deltadeaths})`;

        total_rec.innerText = `${new_data[5].recovered}`;
        delta_recovered.innerText = `(+${new_data[5].deltarecovered})`;

        last_update.innerText = `Last update: ${new_data[5].lastupdatedtime}`;

        Search_btn.onclick = function () {
            var x = input_data.value;
            var y = x.charAt(0).toUpperCase() + x.slice(1);
            for (let i = 1; i < 38; i++) {
                if (y == new_data[i].state) {
                    State_name.innerText = `${new_data[i].state} (india)`;

                    cnfrm.innerText = `${new_data[i].confirmed}`;
                    delta_confirmed.innerText = `(+${new_data[i].deltaconfirmed})`;

                    total_death.innerText = `${new_data[i].deaths}`;
                    delta_death.innerText = `(+${new_data[i].deltadeaths})`;

                    total_rec.innerText = `${new_data[i].recovered}`;
                    delta_recovered.innerText = `(+${new_data[i].deltarecovered})`;

                    last_update.innerText = `Last update: ${new_data[i].lastupdatedtime}`;
                }
            }

        }
    }).catch((error) => {
        console.log(`the error : ${error}`);
    })

}