window.onload = () => {
    let State_name = document.getElementById('State_name')
    let cnfrm = document.getElementById('cnfrm')
    let total_death = document.getElementById('total_death')
    let total_rec = document.getElementById('total_rec')
    let input_data = document.getElementById('input_data')
    let Search_btn = document.getElementById('Search_btn')

    fetch('https://api.covid19india.org/data.json').then((apidata) => {
        // console.log(apidata);
        return apidata.json();
    }).then((actual_data) => {

        const new_data = actual_data.statewise;
        State_name.innerText = `${new_data[15].state}`;
        cnfrm.innerText = `Confirmed cases: ${new_data[15].confirmed}`;
        total_death.innerText = `Total deaths: ${new_data[15].deaths}`;
        total_rec.innerText = `Total recovered: ${new_data[15].recovered}`;
        
        Search_btn.onclick = function () {
            var x = input_data.value;
            for (let i = 1; i < 38; i++) {
                if (x == new_data[i].state) {

                    State_name.innerText = `${new_data[i].state}`;
                    cnfrm.innerText = `Confirmed cases: ${new_data[i].confirmed}`;
                    total_death.innerText = `Total deaths: ${new_data[i].deaths}`;
                    total_rec.innerText = `Total recovered: ${new_data[i].recovered}`;
                }
            }

        }
    }).catch((error) => {
        console.log(`the error : ${error}`);
    })

}
