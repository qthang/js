//replace the variables in this block with real values as needed
var address = 'yourhostname';
var user = 'fsharedm';
var userPwd = 'd5SD7GUI2ACgHgq';
var db = 'fsharedm_fshare2drive';
var dbUrl = 'jdbc:mysql://' + address + '/' + db + '?useSSL=false';

//Add shortcut Write data
function onOpen() {
	var spreadsheet = SpreadsheetApp.getActive();
	var menuItems = [{
		name: 'Write table data to a sheet',
		functionName: 'connectToMySQLData'
	}];
	spreadsheet.addMenu('MySQL Data', menuItems);
}

// This logs the value in the very last cell of this sheet
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var lastRow = sheet.getLastRow();
var lastColumn = sheet.getLastColumn();
var lastCell = sheet.getRange(lastRow, lastColumn);
Logger.log(lastRow);

/*
 * Finds the first empty row in a spreadsheet by scanning an array of columns
 * @return The row number of the first empty row.
 */
function getFirstEmptyRowByColumnArray(spreadSheet, column) {
	var column = spreadSheet.getRange(column + ":" + column);
	var values = column.getValues(); // get all data in one call
	var ct = 0;
	while (values[ct] && values[ct][0] != "") {
		ct++;
	}
	return (ct + 1);
}

/*
 * Reads data from a specified 'table' and writes it to the specified sheet.
 *    (If the specified sheet does not exist, it is created.)
 */
function connectToMySQLData() {
	var thisWorkbook = SpreadsheetApp.getActive();
	var resultSheet = thisWorkbook.getActiveSheet();
	var rowNum = 3;
	var conn = Jdbc.getConnection(dbUrl, {
		user: user,
		password: userPwd
	});

	var stmt = conn.createStatement();
	var results = stmt.executeQuery('Select * from table_test where id<1000');
	stmt.setQueryTimeout(30);
	var rsmd = results.getMetaData();
	var numCols = rsmd.getColumnCount();

	// clear old data
	resultSheet.getRange(rowNum, 1, lastRow, numCols).clearContent();

	//write rows of MySQL data to the sheet
	var values = new Array(new Array(numCols));
	while (results.next()) {
		for (var col = 0; col < numCols; col++) {
			values[0][col] = results.getString(col + 1);
		}
		resultSheet.getRange(rowNum, 1, 1, numCols).setValues(values);
		rowNum++;
	}

	results.close();
	stmt.close();
}
