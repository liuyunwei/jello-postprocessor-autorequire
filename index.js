'use strict'
module.exports = function(content, file){
	

	if(file.extras && file.extras.isPage){
		return content.replace(/#end\s*$/, '    #require("'+file.id+'") \n #end' );
	}
	return content;

};
