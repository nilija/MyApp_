/**
 * Meteor: the smart way to build applications!
 *
 * @copyright     Copyright 2014, 
 * @license       http://opensource.org/licenses/bsd-license.php The BSD License
 *
 * filename:      client/views/djuro.js
 * generated:     2024/11/06 13:49
 */

Template.djuro.helpers({
    djuro: function() {
        return djuro.find().fetch();
    },
    modalTitle: function() {
        switch(Session.get("activity")){
            case 'add':
                return i18n('djuro.modalTitleAdd');
            case 'view':
                return i18n('djuro.modalTitleView');
            case 'edit':
                return i18n('djuro.modalTitleEdit');
            case 'delete':
                return i18n('djuro.modalTitleDelete');
        }
    },
    modalBody: function() {
        var tHeader = '<table style="width: 100%;"><tbody>';
        var tdLeft1 = '<tr><td style="width: 20%; text-align: right; padding-top: 5px;"><label>';
        var tdLeft2 = '</label></td><td style="width: 2%;"></td>';
        var tdRight1 = '<td style="width: 78%;"><input type=",,,,," style="height: 23px; width: 100%;" class="form-control" id="';
        var tdRight2Add = '" /></td></tr>';
        var tdRight2View = '" value="';
        var tdRight2ViewEnd = '" disabled=""/></td></tr>';
        var tFooter ='</tbody></table>';
        switch(Session.get("activity")){
            case 'add':
                return Spacebars.SafeString(tHeader
                +tdLeft1+i18n('djuro.fieldprviModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_prvi'+tdRight2Add
                +tdLeft1+i18n('djuro.fielddrugiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_drugi'+tdRight2Add
                +tdLeft1+i18n('djuro.fieldtreciModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_treci'+tdRight2Add
                +tdLeft1+i18n('djuro.fieldcetvrtiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_cetvrti'+tdRight2Add
                +tdLeft1+i18n('djuro.fielddjuro1ModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_djuro1'+tdRight2Add
                +tdLeft1+i18n('djuro.fielddjuro2ModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_djuro2'+tdRight2Add
                +tFooter);
            case 'view':
                return Spacebars.SafeString(tHeader
                +tdLeft1+i18n('djuro.fieldIdModalLabel')+tdLeft2+tdRight1+'m_id'+tdRight2View+Session.get('_id')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fieldprviModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_prvi'+tdRight2View+Session.get('prvi')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fielddrugiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_drugi'+tdRight2View+Session.get('drugi')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fieldtreciModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_treci'+tdRight2View+Session.get('treci')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fieldcetvrtiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_cetvrti'+tdRight2View+Session.get('cetvrti')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fielddjuro1ModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_djuro1'+tdRight2View+Session.get('djuro1')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fielddjuro2ModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_djuro2'+tdRight2View+Session.get('djuro2')+tdRight2ViewEnd
                +tFooter);
            case 'edit':
                return Spacebars.SafeString(tHeader
                +tdLeft1+i18n('djuro.fieldIdModalLabel')+tdLeft2+tdRight1+'m_id'+tdRight2View+Session.get('_id')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fieldprviModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_prvi'+tdRight2View+Session.get('prvi')+tdRight2Add
                +tdLeft1+i18n('djuro.fielddrugiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_drugi'+tdRight2View+Session.get('drugi')+tdRight2Add
                +tdLeft1+i18n('djuro.fieldtreciModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_treci'+tdRight2View+Session.get('treci')+tdRight2Add
                +tdLeft1+i18n('djuro.fieldcetvrtiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_cetvrti'+tdRight2View+Session.get('cetvrti')+tdRight2Add
                +tdLeft1+i18n('djuro.fielddjuro1ModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_djuro1'+tdRight2View+Session.get('djuro1')+tdRight2Add
                +tdLeft1+i18n('djuro.fielddjuro2ModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_djuro2'+tdRight2View+Session.get('djuro2')+tdRight2Add
                +tFooter);
            case 'delete':
                return Spacebars.SafeString(tHeader
                +tdLeft1+i18n('djuro.fieldIdModalLabel')+tdLeft2+tdRight1+'m_id'+tdRight2View+Session.get('_id')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fieldprviModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_prvi'+tdRight2View+Session.get('prvi')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fielddrugiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_drugi'+tdRight2View+Session.get('drugi')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fieldtreciModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_treci'+tdRight2View+Session.get('treci')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fieldcetvrtiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_cetvrti'+tdRight2View+Session.get('cetvrti')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fielddjuro1ModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_djuro1'+tdRight2View+Session.get('djuro1')+tdRight2ViewEnd
                +tdLeft1+i18n('djuro.fielddjuro2ModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_djuro2'+tdRight2View+Session.get('djuro2')+tdRight2ViewEnd
                +tFooter);
        }
    },
    modalFooter: function() {
        switch(Session.get("activity")){
            case 'add':
                return new Spacebars.SafeString('<button type="button" class="btn btn-default btn-xs" data-dismiss="modal">'+i18n('djuro.modalFooterCancel')+'</button>'
                + '<button id="bAdd" type="button" class="btn btn-success btn-xs">'+i18n('djuro.modalFooterAdd')+'</button>');
            case 'view':
                return new Spacebars.SafeString('<button type="button" class="btn btn-default btn-xs" data-dismiss="modal">'+i18n('djuro.modalFooterClose')+'</button>');
            case 'edit':
                return new Spacebars.SafeString('<button type="button" class="btn btn-default btn-xs" data-dismiss="modal">'+i18n('djuro.modalFooterCancel')+'</button>'
                       + '<button id="bEdit" type="button" class="btn btn-primary btn-xs">'+i18n('djuro.modalFooterChange')+'</button>');
            case 'delete':
                return new Spacebars.SafeString('<button type="button" class="btn btn-default btn-xs" data-dismiss="modal">'+i18n('djuro.modalFooterNo')+'</button>'
                       + '<button id="bDelete" type="button" class="btn btn-danger btn-xs">'+i18n('djuro.modalFooterYes')+'</button>');
        }
    },
    settings: function() {
        return {
            fields: [
                { key: 'bittons', label: '',
                    fn: function (value, object) {
                        return new Spacebars.SafeString('<a data-toggle="modal" data-tooltip="'+i18n('djuro.tooltipView')+'" data-target="#modalDjuro" onclick="Session.set('+"'activity','view'"+');" class="label label-default tooltip-right"><i class="glyphicon glyphicon-search"></i></a>'
                                +'<a data-toggle="modal" data-tooltip="'+i18n('djuro.tooltipEdit')+'" data-target="#modalDjuro" onclick="Session.set('+"'activity','edit'"+');" class="label label-primary tooltip-right"><i class="glyphicon glyphicon-edit"></i></a>'
                                +'<a data-toggle="modal" data-tooltip="'+i18n('djuro.tooltipDelete')+'" data-target="#modalDjuro" onclick="Session.set('+"'activity','delete'"+');" class="label label-danger tooltip-right"><i class="glyphicon glyphicon-remove"></i></a>'
                        );
                    }
                },
                { key: 'prvi', label: i18n('djuro.fieldprviGridLabel'), sort: 'asc' },
                { key: 'drugi', label: i18n('djuro.fielddrugiGridLabel'), sort: 'asc' },
                { key: 'treci', label: i18n('djuro.fieldtreciGridLabel'), sort: 'asc' },
                { key: 'cetvrti', label: i18n('djuro.fieldcetvrtiGridLabel'), sort: 'asc' },
                { key: 'djuro1', label: i18n('djuro.fielddjuro1GridLabel'), sort: 'asc' },
                { key: 'djuro2', label: i18n('djuro.fielddjuro2GridLabel'), sort: 'asc' }
            ],
            rowClass: function(item) {},
            showFilter: true,
            rowsPerPage:10,
            showNavigation:'auto', //  always never auto
            useFontAwesome: true,
            showNavigationRowsPerPage: true,
            showColumnToggles:false,
            class: "table table-striped table-hover" // table table-striped table-bordered table-hover table-condensed
        }
    }
});

Template.djuro.events({
    'click .reactive-table tr': function (event) {
        if(this._id!=undefined) {
            Session.set('_id', this._id);
            Session.set('prvi', this.prvi);
            Session.set('drugi', this.drugi);
            Session.set('treci', this.treci);
            Session.set('cetvrti', this.cetvrti);
            Session.set('djuro1', this.djuro1);
            Session.set('djuro2', this.djuro2);
        }
    },
    'click #bAdd': function(event) {
        var err = validateInput_Djuro();
        if(err == 0){
            try {
                djuro.insert({
                       'prvi': $('#m_prvi').val(),
                       'drugi': $('#m_drugi').val(),
                       'treci': $('#m_treci').val(),
                       'cetvrti': $('#m_cetvrti').val(),
                       'djuro1': $('#m_djuro1').val(),
                       'djuro2': $('#m_djuro2').val()
            });
                $.growl('<strong>'+i18n('djuro.growlSuccessAdd')+'</strong>', {
                    type: 'success', z_index: 99999, allow_dismiss: false
                });
            }
            catch(err) {
                $.growl('<strong>'+i18n('djuro.growlError')+'</strong><br />'+err.message, {
                    type: 'danger', z_index: 99999, allow_dismiss: false
                });
            }
            $('#modalDjuro').modal('hide');
        }
    },
    'click #bEdit': function(event) {
        var err = validateInput_Djuro();
        if(err == 0){
            try {
                djuro.update({'_id': Session.get('_id')}, {$set: {
                       'prvi': $('#m_prvi').val(),
                       'drugi': $('#m_drugi').val(),
                       'treci': $('#m_treci').val(),
                       'cetvrti': $('#m_cetvrti').val(),
                       'djuro1': $('#m_djuro1').val(),
                       'djuro2': $('#m_djuro2').val()
			}});
                $.growl('<strong>'+i18n('djuro.growlSuccessEdit')+'</strong>', {
                    type: 'success', z_index: 99999, allow_dismiss: false
                });
            }
            catch(err) {
                $.growl('<strong>'+i18n('djuro.growlError')+'</strong><br />'+err.message, {
                    type: 'danger', z_index: 99999, allow_dismiss: false
                });
            }
            $('#modalDjuro').modal('hide');
        }
    },
    'click #bDelete': function(event) {
        try {
            djuro.remove({ '_id': Session.get('_id')});
            $.growl('<strong>'+i18n('djuro.growlSuccessDelete')+'</strong>', {
                type: 'success', z_index: 99999, allow_dismiss: false
            });
        }
        catch(err) {
            $.growl('<strong>'+i18n('djuro.growlError')+'</strong><br />'+err.message, {
                type: 'danger', z_index: 99999, allow_dismiss: false
            });
        }
        $('#modalDjuro').modal('hide');
    }
});

Template.djuro.rendered = function() {
    $('.reactive-table-filter').html('<div class="row">'
            +'<h3 class="pull-left" style="color: rgb(49, 112, 143);"><em><strong>'+i18n('djuro.title')+'</strong></em></h3>'
            +'<h3 class="pull-right"><a data-tooltip="'+i18n('djuro.tooltipPrint')+'" class="btn btn-info btn-sm tooltip-left">'+i18n('djuro.titlePrint')+'</a>&nbsp;&nbsp;'
            +'<a data-toggle="modal" data-tooltip="'+i18n('djuro.tooltipAdd')+'" data-target="#modalDjuro" onclick="Session.set(' + "'activity','add'" + ');"class="btn btn-success btn-sm tooltip-left">+</a></h3>'
            +'</div>'
            +$('.reactive-table-filter').html()
    );
    $('#modalDjuro').on('shown.bs.modal', function (e) {
        if(Session.get('activity')=='add') {
            $('#m_prvi').val('');
            $('#m_drugi').val('');
            $('#m_treci').val('');
            $('#m_cetvrti').val('');
            $('#m_djuro1').val('');
            $('#m_djuro2').val('');
        } else {
            $('#m_prvi').val(Session.get('prvi'));
            $('#m_drugi').val(Session.get('drugi'));
            $('#m_treci').val(Session.get('treci'));
            $('#m_cetvrti').val(Session.get('cetvrti'));
            $('#m_djuro1').val(Session.get('djuro1'));
            $('#m_djuro2').val(Session.get('djuro2'));
        }
        $('#m_prvi').focus();
    });
}

function validateInput_Djuro() {
    var err = 0;
    if($('#m_prvi').val().length < 2) {
        $.growl('<strong>'+i18n('djuro.growlError')+'</strong><br />'+i18n('djuro.fieldprviGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_drugi').val().length < 2) {
        $.growl('<strong>'+i18n('djuro.growlError')+'</strong><br />'+i18n('djuro.fielddrugiGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_treci').val().length < 2) {
        $.growl('<strong>'+i18n('djuro.growlError')+'</strong><br />'+i18n('djuro.fieldtreciGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_cetvrti').val().length < 2) {
        $.growl('<strong>'+i18n('djuro.growlError')+'</strong><br />'+i18n('djuro.fieldcetvrtiGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_djuro1').val().length < 2) {
        $.growl('<strong>'+i18n('djuro.growlError')+'</strong><br />'+i18n('djuro.fielddjuro1GrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_djuro2').val().length < 2) {
        $.growl('<strong>'+i18n('djuro.growlError')+'</strong><br />'+i18n('djuro.fielddjuro2GrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    return err;
}
// End of generated file