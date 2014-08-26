var express = require("express"), fs = require("fs"), basicAuth = require('basic-auth-connect'), settings = require("./settings.json"), path = require("path"), marked = require("marked"), parser = require("./parser.js");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
});

var app = express();

app.use(basicAuth(settings.username, settings.password));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	console.log("Routing a request for the index");
	parser.parse("index.md", function(content) {
		res.render("index", content);
	});
});

app.get("*.md", function(req, res) {
	console.log("Routing a request for an md file");
	parser.parse(req.params[0], function(content) {
		res.render("index", content);
	});
});

app.get("*", function(req,res) {
	console.log("Routing a request for " + req.params[0]);
	fs.stat(path.join(__dirname, 'public', req.params[0] + ".md"), function(err, stats) {
		if (err) {
			console.log(err);
			res.render("index", {"name":"503", marked:marked, "content":"", "error":"Internal Server Error"});
		}
		else {
			if(stats.isFile()) parser.parse(req.params[0] + ".md", function(content) {
				res.render("index", content);
			});
		}
	});
});


app.listen(settings.port);