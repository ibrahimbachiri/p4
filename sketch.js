let img;
let resizedImg;
let summary = ""; // Variable to store the summary text
let summaryInput;
let confirmButton;

function preload() {
    // Load the image before the sketch starts
    img = loadImage('ibr.jpg');
}

function setup() {
    createCanvas(800, 400); // Adjust canvas size to   accommodate both image and text
    initializeSummaryInput();
   // Resize the image
    img.resize(100, 0); // Resize image width to 200px and maintain aspect ratio
    resizedImg = img;

    // Display image
    image(resizedImg, 50, 50); // Adjust image position

    // Vertical line
    stroke(0);
    line(200, 0, 200, height); // Adjust x-coordinate to position the line
}

function initializeSummaryInput() {
    // Title
    fill(0);
    textSize(24);
    textAlign(CENTER);
    text("Ibrahim Bachiri", width / 2, 50);

    // Input field for the summary
    summaryInput = createInput().position(250, 180).size(300);
    confirmButton = createButton('Done').position(570, 180).mousePressed(confirmSummary);

    // Display the saved summary
    textSize(16);
    textAlign(LEFT);
    fill(122, 24, 65);
    text("Summary:", 250, 100); // Adjust x-coordinate to leave space for the image
}

function confirmSummary() {
    // Get the summary from the input field
    summary = summaryInput.value();

    // Hide the input field and confirm button
    summaryInput.hide();
    confirmButton.hide();

    // Display the summary
    textSize(14);
    fill(0);
    text(summary, 250, 120, width - 300); // Display the saved summary
   
}
