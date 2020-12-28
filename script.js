// dom variables
const inputIMG = document.getElementById("input-image");
const outputIMG = document.getElementById("output-image");

// style transfer instances
const style1 = ml5.styleTransfer("./data/scream", modelLoaded);
const style2 = ml5.styleTransfer("./data/wave", modelLoaded);

// success message
function modelLoaded() {
  console.log("Model Loaded!");
}

// transfer style function

function transferStyle(style) {
  style.transfer(inputIMG, function (error, result) {
    outputIMG.src = result.src;
  });
}
