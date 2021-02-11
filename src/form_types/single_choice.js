
export default function createSingleChoiceSchema(json, key) {
	var result = {}
	if (json.hasOwnProperty('type') && json['type'] == '3') {
	    var type_id = json['type']
	    result['model'] = key
	    result['label'] = json['title']
	    result['contents'] = json['contents']
	  
	    if (json.hasOwnProperty('attribute') && json['attribute'].hasOwnProperty('random')) {
	    	if (json['attribute']['random'] == '1') {
	    		var list = result['contents']
	    		list = list.sort(() => Math.random() - 0.5)
	    		result['contents'] = list
	    	}
	    }
	    result['type'] = 'vuetifySingleChoice'
 		console.log(result['contents'])
 	}

	console.log(result)
	return result
};
