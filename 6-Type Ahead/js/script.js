const endpoint = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes/2/municipios'

const counties = []
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

fetch(endpoint)
    .then(response => response.json())
    .then(data => counties.push(...data)) //adiciona ao array counties o conteúdo de data, percorrendo cada elemento de data através do spread

function findMatches(word, counties) {
    return counties.filter(place => {
        const regex = new RegExp(word, 'gi')
        return place.nome.match(regex) || place.microrregiao.mesorregiao.nome.match(regex)
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, counties)
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi')
        const countyName = place.nome.replace(regex, `<span class='hl'>${this.value}</span>`)
        const mesoName = place.microrregiao.mesorregiao.nome.replace(regex, `<span class='hl'>${this.value}</span>`)
        return `
            <li>
                <span class='name'>${countyName}, ${mesoName}</span>
            </li>
        `
    }).join('')
    suggestions.innerHTML = html
}

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
