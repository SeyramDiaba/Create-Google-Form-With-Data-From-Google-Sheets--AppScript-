function createQuizFromSheet() {
  // Open the Google Sheets spreadsheet by its URL
  var spreadsheet = SpreadsheetApp.openByUrl('File URL Here');
  var sheet = spreadsheet.getSheetByName('Sheet1'); // Adjust sheet name as needed
  
  // Get all data from the spreadsheet
  var data = sheet.getDataRange().getValues();
  
  // Create a new Google Form
  var form = FormApp.create('New Quiz'); // Adjust quiz title
  
  // Iterate through each row in the spreadsheet, starting from the second row (index 1)
  for (var i = 1; i < data.length; i++) {
    var question = data[i][0]; // Question is in the first column
    
    // Create a multiple-choice question
    var item = form.addMultipleChoiceItem();
    item.setTitle(question);
    
    // Add options for the multiple-choice question
    var options = [];
    for (var j = 1; j < data[i].length; j++) {
      if (data[i][j] != '') { // Skip empty cells
        if (!options.includes(data[i][j])) { // Check for duplicates
          options.push(data[i][j]);
        }
      }
    }
    // Add options to the multiple-choice question
    item.setChoiceValues(options);
  }

    
  
  // Display the URL of the created Google Form
  Logger.log('Quiz created: ' + form.getPublishedUrl());
}
