var fs = require('fs')

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
		return objArr
	}



// csvToJson(csv)


module.exports = {
	csvToJson : csvToJson
}