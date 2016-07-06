var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'cat';
	locals.data = {
		recepten: [],
	};


	view.on('init', function(next) {
		console.log(req.params.categoryid);
		var q = keystone.list('Recepten').model.find({
			categories: req.params.categoryid
		})
		q.exec(function(err, result) {
			locals.data.recepten = result;
			console.log(result)
			next(err);
		});

	});

	// Render the view
	view.render('category');
};