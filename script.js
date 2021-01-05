// dom variables
let inputIMG = document.getElementById("input-image");
let outputIMG = document.getElementById("output-image");

// style transfer instances
const style1 = ml5.styleTransfer("./data/scream", modelLoaded);
const style2 = ml5.styleTransfer("./data/wave", modelLoaded);

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

// upload image

const uploadedIMG = document.querySelector(".input__upload").files;
inputIMG.src = uploadedIMG[0];

// select & transfer style

// download result
