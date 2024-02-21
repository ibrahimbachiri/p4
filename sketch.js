let img;
let resizedImg;
let summary = ""; // Variable to store the summary text
let summaryInput;
let education = ""; // Variable to store the education text
let educationInput;

let summaryButton;
let educationButton;

let uploadButton;

function preload() {
    // Load the image before the sketch starts
    img = loadImage('ibr.jpg');
}

function setup() {
    createCanvas(800, 400); // Adjust canvas size to accommodate both image and text
    initializeInputs();
    // Load the image
    img = loadImage('ibr.jpg', function() {
        // Resize the image
        img.resize(100, 0); // Resize image width to 100px and maintain aspect ratio
        resizedImg = img;
    });
}


function initializeInputs() {
    // Title
    textFont('Arial');
    textSize(24);
    textAlign(CENTER);
    text("Ibrahim Bachiri", width / 2, 50);

    // Input field for the summary
    summaryInput = createInput().position(250, 180).size(300);

    // Summary button
    summaryButton = createButton('Done').position(570, 180).mousePressed(confirmSummary);

    // Input field for education
    educationInput = createInput().position(250, 300).size(300);

    // Education button
    educationButton = createButton('Done').position(570, 300).mousePressed(confirmEducation);
  
      uploadButton = createFileInput(handleFile).position(250, 100); // Position the button below the "Summary" text


    // Display the saved summary
    textSize(16);
    textAlign(LEFT);
    fill(122, 24, 65);
    text("Summary:", 250, 100); // Adjust x-coordinate to leave space for the image

    // Display the saved education
    text("Education:", 250, 220); // Adjust x-coordinate to leave space for the image
}

function confirmSummary() {
    // Get the summary from the input field
    summary = summaryInput.value();

    // Hide the input field and confirm button
    summaryInput.hide();
    summaryButton.hide();

    // Display the summary
    textSize(14);
    text(summary, 250, 120, width - 300); // Display the saved summary
}

function confirmEducation() {
    // Get the education from the input field
    education = educationInput.value();

    // Hide the input field and confirm button
    educationInput.hide();
    educationButton.hide();

    // Display the education
    textFont('Arial')
    textSize(14);
   // Set no fill color (transparent fill)
createP('');
text(education, 250, 240, width - 300); // Display the saved education
}

function handleFile(file) {
    if (file.type === 'image') {
        img = createImg(file.data, '').hide();
        img.size(100, 0); // Resize image width to 100px and maintain aspect ratio
        resizedImg = img;
        redraw(); // Redraw the canvas with the uploaded image
    } else {
        alert('Please upload an image file.');
    }
}

function draw() {
    background(255); // Clear the canvas
    if (resizedImg) {
        // Display image
        image(resizedImg, 50, 50); // Adjust image position
    }
}
