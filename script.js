const img = document.querySelector("img"),
    imgInput = document.querySelector("#imgInput"),
    range = document.querySelector("#range")
  
  var brightness = "100",
    gray = "0",
    blur = "0",
    contrast = "100",
    saturation = "100",
    hue = "0",
    sepia = "0",
    invert = "0",
    currentFilter = undefined
  
  function activeBlur(){
    currentFilter = "addBlur()"
    range.setAttribute('oninput', currentFilter)
    range.max = 15
    range.min = 0
    range.value = 0
    range.style.display = "inline"
  }
  
  function activeBrightness(){
    currentFilter = "addBrightness()"
    range.setAttribute('oninput', currentFilter)
    range.max = 300
    range.min = 0
    range.value = 100
    range.style.display = "inline"
  }
  
  function activeContrast(){
    currentFilter = "addContrast()"
    range.setAttribute('oninput', currentFilter)
    range.max = 450
    range.min = 0
    range.value = 100
    range.style.display = "inline"
  }
  
  function activeSaturation(){
    currentFilter = "addSaturation()"
    range.setAttribute('oninput', currentFilter)
    range.max = 500
    range.min = 0
    range.value = 100
    range.style.display = "inline"
  }
  
  function activeHue(){
    currentFilter = "addHue()"
    range.setAttribute('oninput', currentFilter)
    range.max = 360
    range.min = 0
    range.value = 0
    range.style.display = "inline"
  }
  
  function activeGray(){
    currentFilter = "addGray()"
    range.setAttribute('oninput', currentFilter)
    range.max = 100
    range.min = 0
    range.value = 0
    range.style.display = "inline"
  }
  
  function activeSepia(){
    currentFilter = "addSepia()"
    range.setAttribute('oninput', currentFilter)
    range.max = 100
    range.min = 0
    range.value = 0
    range.style.display = "inline"
  }
  
  function activeInvert(){
    currentFilter = "addInvert()"
    range.setAttribute('oninput', currentFilter)
    range.max = 100
    range.min = 0
    range.value = 0
    range.style.display = "inline"
  }
  
  function addBlur(){
    blur = `${range.value}`
    addFilters()
  }
  function addBrightness(){
    brightness = `${range.value}`
    addFilters()
  }
  function addContrast(){
    contrast = `${range.value}`
    addFilters()
  }
  function addSaturation(){
    saturation = `${range.value}`
    addFilters()
  }
  function addHue(){
    hue = `${range.value}`
    addFilters()
  }
  function addGray(){
    gray = `${range.value}`
    addFilters()
  }
  function addSepia(){
    sepia = `${range.value}`
    addFilters()
  }
  function addInvert(){
    invert = `${range.value}`
    addFilters()
  }
  
  function addFilters(){
    let filter = `grayscale(${gray}) brightness(${brightness}%) blur(${blur}px) contrast(${contrast}%) saturate(${saturation}%) hue-rotate(${hue}deg) sepia(${sepia}%) invert(${invert}%)`
    img.style.filter = filter
  }