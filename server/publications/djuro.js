/**
 * Meteor: the smart way to build applications!
 *
 * @copyright     Copyright 2014, 
 * @license       http://opensource.org/licenses/bsd-license.php The BSD License
 *
 * filename:      server/publications/djuro.js
 * generated:     2024/11/06 13:49
 */

Meteor.publish('djuro', function () {
    return djuro.find();
});
// End of generated file