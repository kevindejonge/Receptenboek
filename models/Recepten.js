var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Users Model
 * ==========
 */
var Recepten = new keystone.List('Recepten');

Recepten.add({
	author: { type: Types.Relationship, ref: 'Users', index: true },
	Receptfoto: { type: Types.CloudinaryImages},
	name: { type: String, required: true, index: true },
	ingredientenlijst: { type: Types.Textarea, initial: true, required: true},
	bereiding: { type: Types.Textarea, initial: true, required: true },
	categories: { type: Types.Relationship, ref: 'ReceptCategory', many: true },
});

// Provide access to Keystone

/**
 * Registration
 */
Recepten.register();
