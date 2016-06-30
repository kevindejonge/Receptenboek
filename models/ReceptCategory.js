var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var ReceptCategory = new keystone.List('ReceptCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ReceptCategory.add({
	name: { type: String, required: true },
});

ReceptCategory.relationship({ ref: 'Recepten', path: 'categories' });

ReceptCategory.register();
