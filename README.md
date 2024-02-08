# Create-Google-Form-With-Data-From-Google-Sheets--AppScript-
 This Google Apps Script function createQuizFromSheet() takes data from a Google Sheets spreadsheet and creates a new Google Form quiz based on that data. 
It opens a Google Sheets spreadsheet by its URL.
It selects a specific sheet within the spreadsheet (named 'Sheet1' in this case).
It retrieves all data from the selected sheet.
It creates a new Google Form with a specified title ('New Quiz' in this case).
It iterates through each row of the spreadsheet data, creating a multiple-choice question for each row.
For each row, it sets the question text to the content of the first column of that row.
It adds options to the multiple-choice question based on the content of the remaining columns of that row.
It skips any empty cells while adding options to the question.
Finally, it logs the URL of the created Google Form quiz.
