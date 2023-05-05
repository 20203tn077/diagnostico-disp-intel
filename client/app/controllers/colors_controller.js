const conColors = document.getElementById('conColors')
const template = `<div class="border d-inline-block" style="height: 30px; width: 30px; background-color: $color;"></div>`

setInterval(() => api.fetch('colors').then(res => res.json()).then(colors => {
    const content = []
    for (const row of colors) {
        let rowContent = ''
        for (const color of row) rowContent += template.replace('$color', color)
        content.push(rowContent)
    }
    conColors.innerHTML = content.join('<br>')
}), 1000)