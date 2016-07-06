var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	// Set locals
	locals.section = 'recepten';
	locals.data = {
		recepten: [],
	};


	view.on('init', function(next) {
		console.log("BRAP")
		console.log(req.params.receptname);
		var q = keystone.list('Recepten').model.findOne({
				name: req.params.receptname
			})
			// console.log(db.teams.find());
		q.exec(function(err, result) {

			locals.data.recept = result;
			console.log(result)
			next(err);
		});

	});

	view.render('recepten/recept');

};