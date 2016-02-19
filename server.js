var request = require('request')
var fs = require('fs')

var csv = fs.readFileSync('myCSVfile.csv','utf-8', function(err, data){
	if (err) throw err;
	// console.log(data)
	return data
})

csvToJson = function(csv){
	var rows = csv.split('\n')

	var objArr = []

	rows = rows.map(function(currentValue, index){
		return currentValue.split(',')
		console.log(index) 
	})

	var headers = rows[0]

	for(var i = 1; i < rows.length ; i++){
		var jsonObj = {}

		for (var y = 0; y < headers.length; y++){
			jsonObj[headers[y]] = rows[i][y]

		}
		objArr.push(jsonObj)
	}

	fs.writeFileSync('output.json', JSON.stringify(objArr))
}

csvToJson(csv)

