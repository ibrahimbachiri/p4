let img;
let resizedImg;
let summary = ""; // Variable to store the summary text
let summaryInput;
let education = ""; // Variable to store the education text
let educationInput;

let summaryButton;
let educationButton;

let uploadButton;

function setup() {
    createCanvas(800, 400); // Adjust canvas size to accommodate both image and text
    initializeInputs();

    // Vertical line
    stroke(0);
    line(200, 0, 200, height); // Adjust x-coordinate to position the line
}

function initializeInputs() {
    // Title
    textFont('Arial');
    textSize(24);
    textAlign(CENTER);
    fill(122, 24, 65);
    text("Ibrahim Bachiri", width / 2, 50);

    // Input field for the summary
    summaryInput = createInput().position(250, 180).size(300);

    // Summary button
    summaryButton = createButton('Done').position(570, 180).mousePressed(confirmSummary);

    // Input field for education
    educationInput = createInput().position(250, 300).size(300);

    // Education button
    educationButton = createButton('Done').position(570, 300).mousePressed(confirmEducation);

    // Display the saved summary
    textSize(16);
    textAlign(LEFT);
    fill(122, 24, 65);
    text("Summary:", 250, 100); // Adjust x-coordinate to leave space for the image

    // Display the saved education
    text("Education:", 250, 220); // Adjust x-coordinate to leave space for the image

    // Button for downloading as PDF
    uploadButton = createButton('Download as PDF').position(250, 360).mousePressed(downloadAsPDF);
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
    fill(0)
    // Set no fill color (transparent fill)
    text(education, 250, 240, width - 300); // Display the saved education
}

function downloadAsPDF() {
    var doc = new jsPDF();

    // Assuming `summary` and `education` are defined in this file
    var summaryText = 'Summary: ' + summary;
    var educationText = 'Education: ' + education;

    // Add summary and education text to the PDF
    doc.text(summaryText, 10, 20);
    doc.text(educationText, 10, 40);

    // Save the PDF
    doc.save('summary_education.pdf');
}
