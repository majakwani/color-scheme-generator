const form = document.getElementById('color-form')
const selectedColor = document.getElementById('selected-color')
const colorScheme = document.getElementById('color-scheme')
const colorGrid = document.getElementById('color-grid')
const footer = document.getElementById('footer')

form.addEventListener('submit', function(e){
    e.preventDefault()
    colorGrid.innerHTML = ""
    footer.innerHTML = ""
    console.log(colorScheme.value)
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.value.slice(1)}&mode=${colorScheme.value}&count=5`)
        .then(res => res.json())
        .then(data => renderColor(data.colors))
})

function renderColor(colorArr){
    console.log(colorArr);
    colorArr.map((color) => {
        colorGrid.innerHTML += `
        <div class = "color" style = "background-color: ${color.hex.value}"> </div>
        `
        footer.innerHTML += `
        <p>${color.hex.value}</p>  `
    })
}