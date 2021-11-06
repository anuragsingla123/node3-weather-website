const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=68d1d11beb14802f7ff95a0ffc682312&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const forecastMsg = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like a ' + body.current.feelslike + ' degrees out.'
            callback(undefined, forecastMsg)
        }
    })
}

module.exports = forecast