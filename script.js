const img = document.querySelector("img"),
  imgInput = document.querySelector("#imgInput"),
  range = document.querySelector("#range"),
  buttons = document.querySelectorAll("button"),
  // Canvas Set up
  canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d"),
  downloadBtn = document.querySelector("#downloadIcon")
  
var brightness = "100",
  gray = "0",
  blur = "0",
  contrast = "100",
  saturation = "100",
  hue = "0",
  sepia = "0",
  invert = "0",
  currentFilter = undefined
function loadImg(){
  let inputImg = imgInput.files[0]
  img.src = URL.createObjectURL(inputImg)
  if(img.src != ""){
    downloadBtn.disabled = false
  }
}
function activateBtn(btn){
  buttons.forEach(btn => {
    btn.classList.remove("btn-active")
  })
  btn.classList.add("btn-active")
}

function activeBlur(btn){
  currentFilter = "addBlur()"
  range.setAttribute('oninput', currentFilter)
  range.max = 15
  range.min = 0
  range.value = blur
  range.style.display = "inline"
  activateBtn(btn)
}
  
function activeBrightness(btn){
  currentFilter = "addBrightness()"
  range.setAttribute('oninput', currentFilter)
  range.max = 300
  range.min = 0
  range.value = brightness
  range.style.display = "inline"
  activateBtn(btn)
}
  
function activeContrast(btn){
  currentFilter = "addContrast()"
  range.setAttribute('oninput', currentFilter)
  range.max = 450
  range.min = 0
  range.value = contrast
  range.style.display = "inline"
  activateBtn(btn)
}
  
function activeSaturation(btn){
  currentFilter = "addSaturation()"
  range.setAttribute('oninput', currentFilter)
  range.max = 500
  range.min = 0
  range.value = saturation
  range.style.display = "inline"
  activateBtn(btn)
}
  
function activeHue(btn){
  currentFilter = "addHue()"
  range.setAttribute('oninput', currentFilter)
  range.max = 360
  range.min = 0
  range.value = hue
  range.style.display = "inline"
  activateBtn(btn)
}
  
function activeGray(btn){
  currentFilter = "addGray()"
  range.setAttribute('oninput', currentFilter)
  range.max = 100
  range.min = 0
  range.value = gray
  range.style.display = "inline"
  activateBtn(btn)
}
  
function activeSepia(btn){
  currentFilter = "addSepia()"
  range.setAttribute('oninput', currentFilter)
  range.max = 100
  range.min = 0
  range.value = sepia
  range.style.display = "inline"
  activateBtn(btn)
}
  
function activeInvert(btn){
  currentFilter = "addInvert()"
  range.setAttribute('oninput', currentFilter)
  range.max = 100
  range.min = 0
  range.value = invert
  range.style.display = "inline"
  activateBtn(btn)
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
  let filter = `grayscale(${gray}%) brightness(${brightness}%) blur(${blur}px) contrast(${contrast}%) saturate(${saturation}%) hue-rotate(${hue}deg) sepia(${sepia}%) invert(${invert}%)`
  img.style.filter = filter
  return filter
}

function saveImage(){
  //draw image onto canvas
  filters = addFilters()
  canvas.width = img.width 
  canvas.height = img.height

  //apply filters in canvas
  ctx.filter = filters
  ctx.drawImage(img, 0, 0, img.width, img.height)
  
  //download image
  let data = canvas.toDataURL("iamge/jpg").replace("image/jpg", "image/octet-stream")
  let a = document.createElement("a")
  a.href = data
  try{
  let name = imgInput.files[0].name.split(".")
  name.pop()
  name = name.join(".")
  a.download = `${name}_Sun_Photo_Editor`
  a.click()
  }catch(err){alert(err)}
}