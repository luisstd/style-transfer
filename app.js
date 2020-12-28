// Create a new Style Transfer Instance
const style1 = ml5.styleTransfer("./data/scream", modelLoaded);
const style2 = ml5.styleTransfer("./data/wave", modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Grab a img element and generate a new image.
style.transfer(document.getElementById("img"), function (error, result) {
  img.src = result.src;
});
