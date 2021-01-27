// dom variables
let inputIMG = document.getElementById("input-image");
let outputIMG = document.getElementById("output-image");

// style transfer instances
const styleScream = ml5.styleTransfer("./data/scream", modelLoaded);
const styleWave = ml5.styleTransfer("./data/wave", modelLoaded);

// success message
function modelLoaded() {
  console.log("Model Loaded!");
}

// transfer style functionality
function transferStyle(style) {
  style.transfer(inputIMG, function (error, result) {
    outputIMG.src = result.src;
  });
}

// download result
