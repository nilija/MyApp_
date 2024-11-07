/**
 * Meteor: the smart way to build applications!
 *
 * @copyright     Copyright 2014, 
 * @license       http://opensource.org/licenses/bsd-license.php The BSD License
 *
 * filename:      collections/djuro.js
 * generated:     2024/11/06 13:49
 */

djuro = new Meteor.Collection('djuro');
djuro.allow({
    'insert': function() {
        return true;
    },
    'remove': function() {
        return true;
    },
    'update': function() {
        return true;
    }
});
// End of generated file