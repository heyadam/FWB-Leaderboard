$(function() {
    console.log( "ready!" );

    $.getJSON( "kom.json", function( json ) {
/*  		console.log( json.kom.rides[1] );
*/
  		/*$.each(json.kom, function (key, data) {
    		console.log(key)
    		$.each(data, function (index, data) {
        		console.log('index', data)
    		})
		});*/

		console.log (json.kom.rides[1].info.results[0].position);

 	});
});