const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorTextLink: getStyle(html, "--color-text-link"),
    colorTextFooter: getStyle(html, "--color-text-footer"),
}

const darkMode = {
    bg: "#000000",
    bgPanel: "#000000",
    colorHeadings: "#3664FF",
    colorText: "#ffffff",
    colorTextLink: "#ffffff",
    colorTextFooter: "#ffffff"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}
checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})


