
var mySites= [
			new RegExp(/.*buzzfeed.*$/),
			new RegExp(/.*viralnova.*$/),
			new RegExp(/.*upworthy.*$/)
			];


function removeLinks() {
	$( "a" ).each(function( index, Element) {
		var href = $( this ).attr("href");
		if (href) {
			for (var i = 0; i < mySites.length; i++) {
				if (href.match(mySites[i])) {
					console.log("Removed link: " + $( this ).text() + " :: " + href);
					var parent = $(this).parent();
					parent.html("<strong>This link has been censored.</strong>");
				}
			}
		}
	});
}

var last_one = null;


window.setInterval(function(){
    var this_one = $( "a" ).last();
    if(last_one!=this_one){
        last_one= this_one.clone();
        removeLinks();
    }
},1000);


