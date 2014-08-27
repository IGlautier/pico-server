function getContent(url, div) {
	$.get(url, function(data) {
		console.log(data);
		var newDoc = (new DOMParser).parseFromString(data, "text/html");
		console.log(newDoc);
		insertLinks(newDoc, function(doc) {
			var newDiv = document.createElement('div');
			newDiv.innerHTML = doc.body.innerHTML;
			$('#'+div).after(newDiv);
		});
	}, "html");
}

var x = 0;
function insertLinks(page, callback) {

	var links = page.getElementsByTagName('a');
	console.log(links);
	for (var i = 0; i < links.length; i++) {
		if (links[i].hostname == 'localhost') {
			var expander = page.createElement('div');
			expander.innerHTML = 'Expand';
			expander.setAttribute('class', 'expander');
			expander.setAttribute('id', 'e' + x);
			expander.setAttribute('onclick', 'getContent("'+links[i].href+'", "e'+x+'")');
			x++;
			$(links[i]).after(expander);
		}
	}
	callback(page);
}