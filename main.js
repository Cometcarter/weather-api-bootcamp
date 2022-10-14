document.querySelector('button').addEventListener('click', findTemperature)

function findTemperature() {
    let city = document.querySelector('input').value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d7ac0a3f6c57425cd4f58fff9a5b1eb&units=imperial`
    )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h1').innerText = data.name
            document.querySelector('h2').innerText = data.main.temp
            document.querySelector('h3').innerText = data.weather[0].description
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}