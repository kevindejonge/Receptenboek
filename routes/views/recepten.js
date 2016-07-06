var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'recepten';
	locals.data = {
		recepten: [],
	};




	view.on('init', function (next) {

		var q = keystone.list('Recepten').model.find()
		// console.log(db.teams.find());
			q.exec(function (err, result) {
				locals.data.recepten = result;
				next(err);
			});

		});


	// Render the view
	view.render('recepten');
};
