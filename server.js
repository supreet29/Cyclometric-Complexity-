var express = require('express'),
  app = express(),
  port = process.env.PORT || 3002;
  var multer = require('multer');  //handles form-data used for uploading files
  var bodyParser = require('body-parser');
  var ejs = require('ejs');
  var path = require('path')

  var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploads')
	},
	filename: function(req, file, callback) {
		console.log(file)
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})
  app.set('view engine', 'ejs')

app.get('/api/file', function(req, res) {
	res.render('index')
})

app.post('/api/file', function(req, res) {
	var upload = multer({
		storage: storage,
		fileFilter: function(req, file, callback) {
			var ext = path.extname(file.originalname)
			if (ext !== '.java' && ext !== '.js' && ext !== '.c' && ext !== '.html'&& ext !== '.csv'&& ext !== '.pdf') {
				return callback(res.end('Only images are allowed'), null)
			}
			callback(null, true)
		}
	}).single('userFile')
	upload(req, res, function(err) {
		res.end('File is uploaded')
	})
})


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
