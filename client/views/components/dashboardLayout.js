/**
 * Meteor: the smart way to build applications!
 *
 * @copyright     Copyright 2014, 
 * @license       http://opensource.org/licenses/bsd-license.php The BSD License
 *
 * filename:      client/views/components/dashboardLayout.js
 * generated:     2024/11/06 13:48
 */

Template.dashboardLayout.rendered = function() {
    $("#menu-toggle").click(function(e) {
        $("#wrapper").toggleClass("toggled");
        //$('#toolbarMenu').click();
        e.preventDefault();
    });
    $('#menu-toggle').click();
}

Template.dashboardLayout.events({
    'click #logout': function (event) {
        Meteor.logout();
    }
});
// End of generated file