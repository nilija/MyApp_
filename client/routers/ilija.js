/**
 * Meteor: the smart way to build applications!
 *
 * @copyright     Copyright 2014, 
 * @license       http://opensource.org/licenses/bsd-license.php The BSD License
 *
 * filename:      client/routers/ilija.js
 * generated:     2024/11/06 13:49
 */

Router.route('/ilija',
    function() {
        this.wait(Meteor.subscribe('ilija'));
        if (this.ready()) {
            this.render();
        } else {
            this.render('loading');
        }
    }
);
// End of generated file