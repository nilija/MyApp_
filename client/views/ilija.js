/**
 * Meteor: the smart way to build applications!
 *
 * @copyright     Copyright 2014, 
 * @license       http://opensource.org/licenses/bsd-license.php The BSD License
 *
 * filename:      client/views/ilija.js
 * generated:     2024/11/06 13:49
 */

Template.ilija.helpers({
    ilija: function() {
        return ilija.find().fetch();
    },
    modalTitle: function() {
        switch(Session.get("activity")){
            case 'add':
                return i18n('ilija.modalTitleAdd');
            case 'view':
                return i18n('ilija.modalTitleView');
            case 'edit':
                return i18n('ilija.modalTitleEdit');
            case 'delete':
                return i18n('ilija.modalTitleDelete');
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
                +tdLeft1+i18n('ilija.fieldprviModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_prvi'+tdRight2Add
                +tdLeft1+i18n('ilija.fielddrugiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_drugi'+tdRight2Add
                +tdLeft1+i18n('ilija.fieldtreciModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_treci'+tdRight2Add
                +tdLeft1+i18n('ilija.fieldcetvrtiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_cetvrti'+tdRight2Add
                +tdLeft1+i18n('ilija.fieldpetiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_peti'+tdRight2Add
                +tdLeft1+i18n('ilija.fieldsestiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_sesti'+tdRight2Add
                +tFooter);
            case 'view':
                return Spacebars.SafeString(tHeader
                +tdLeft1+i18n('ilija.fieldIdModalLabel')+tdLeft2+tdRight1+'m_id'+tdRight2View+Session.get('_id')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldprviModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_prvi'+tdRight2View+Session.get('prvi')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fielddrugiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_drugi'+tdRight2View+Session.get('drugi')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldtreciModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_treci'+tdRight2View+Session.get('treci')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldcetvrtiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_cetvrti'+tdRight2View+Session.get('cetvrti')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldpetiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_peti'+tdRight2View+Session.get('peti')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldsestiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_sesti'+tdRight2View+Session.get('sesti')+tdRight2ViewEnd
                +tFooter);
            case 'edit':
                return Spacebars.SafeString(tHeader
                +tdLeft1+i18n('ilija.fieldIdModalLabel')+tdLeft2+tdRight1+'m_id'+tdRight2View+Session.get('_id')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldprviModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_prvi'+tdRight2View+Session.get('prvi')+tdRight2Add
                +tdLeft1+i18n('ilija.fielddrugiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_drugi'+tdRight2View+Session.get('drugi')+tdRight2Add
                +tdLeft1+i18n('ilija.fieldtreciModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_treci'+tdRight2View+Session.get('treci')+tdRight2Add
                +tdLeft1+i18n('ilija.fieldcetvrtiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_cetvrti'+tdRight2View+Session.get('cetvrti')+tdRight2Add
                +tdLeft1+i18n('ilija.fieldpetiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_peti'+tdRight2View+Session.get('peti')+tdRight2Add
                +tdLeft1+i18n('ilija.fieldsestiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_sesti'+tdRight2View+Session.get('sesti')+tdRight2Add
                +tFooter);
            case 'delete':
                return Spacebars.SafeString(tHeader
                +tdLeft1+i18n('ilija.fieldIdModalLabel')+tdLeft2+tdRight1+'m_id'+tdRight2View+Session.get('_id')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldprviModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_prvi'+tdRight2View+Session.get('prvi')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fielddrugiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_drugi'+tdRight2View+Session.get('drugi')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldtreciModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_treci'+tdRight2View+Session.get('treci')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldcetvrtiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_cetvrti'+tdRight2View+Session.get('cetvrti')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldpetiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_peti'+tdRight2View+Session.get('peti')+tdRight2ViewEnd
                +tdLeft1+i18n('ilija.fieldsestiModalLabel')+tdLeft2 +'<td style="width: 78%;">'
					+'<input type="undefined" style="height: 23px; width: 100%;" class="form-control" id="'+'m_sesti'+tdRight2View+Session.get('sesti')+tdRight2ViewEnd
                +tFooter);
        }
    },
    modalFooter: function() {
        switch(Session.get("activity")){
            case 'add':
                return new Spacebars.SafeString('<button type="button" class="btn btn-default btn-xs" data-dismiss="modal">'+i18n('ilija.modalFooterCancel')+'</button>'
                + '<button id="bAdd" type="button" class="btn btn-success btn-xs">'+i18n('ilija.modalFooterAdd')+'</button>');
            case 'view':
                return new Spacebars.SafeString('<button type="button" class="btn btn-default btn-xs" data-dismiss="modal">'+i18n('ilija.modalFooterClose')+'</button>');
            case 'edit':
                return new Spacebars.SafeString('<button type="button" class="btn btn-default btn-xs" data-dismiss="modal">'+i18n('ilija.modalFooterCancel')+'</button>'
                       + '<button id="bEdit" type="button" class="btn btn-primary btn-xs">'+i18n('ilija.modalFooterChange')+'</button>');
            case 'delete':
                return new Spacebars.SafeString('<button type="button" class="btn btn-default btn-xs" data-dismiss="modal">'+i18n('ilija.modalFooterNo')+'</button>'
                       + '<button id="bDelete" type="button" class="btn btn-danger btn-xs">'+i18n('ilija.modalFooterYes')+'</button>');
        }
    },
    settings: function() {
        return {
            fields: [
                { key: 'bittons', label: '',
                    fn: function (value, object) {
                        return new Spacebars.SafeString('<a data-toggle="modal" data-tooltip="'+i18n('ilija.tooltipView')+'" data-target="#modalIlija" onclick="Session.set('+"'activity','view'"+');" class="label label-default tooltip-right"><i class="glyphicon glyphicon-search"></i></a>'
                                +'<a data-toggle="modal" data-tooltip="'+i18n('ilija.tooltipEdit')+'" data-target="#modalIlija" onclick="Session.set('+"'activity','edit'"+');" class="label label-primary tooltip-right"><i class="glyphicon glyphicon-edit"></i></a>'
                                +'<a data-toggle="modal" data-tooltip="'+i18n('ilija.tooltipDelete')+'" data-target="#modalIlija" onclick="Session.set('+"'activity','delete'"+');" class="label label-danger tooltip-right"><i class="glyphicon glyphicon-remove"></i></a>'
                        );
                    }
                },
                { key: 'prvi', label: i18n('ilija.fieldprviGridLabel'), sort: 'asc' },
                { key: 'drugi', label: i18n('ilija.fielddrugiGridLabel'), sort: 'asc' },
                { key: 'treci', label: i18n('ilija.fieldtreciGridLabel'), sort: 'asc' },
                { key: 'cetvrti', label: i18n('ilija.fieldcetvrtiGridLabel'), sort: 'asc' },
                { key: 'peti', label: i18n('ilija.fieldpetiGridLabel'), sort: 'asc' },
                { key: 'sesti', label: i18n('ilija.fieldsestiGridLabel'), sort: 'asc' }
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

Template.ilija.events({
    'click .reactive-table tr': function (event) {
        if(this._id!=undefined) {
            Session.set('_id', this._id);
            Session.set('prvi', this.prvi);
            Session.set('drugi', this.drugi);
            Session.set('treci', this.treci);
            Session.set('cetvrti', this.cetvrti);
            Session.set('peti', this.peti);
            Session.set('sesti', this.sesti);
        }
    },
    'click #bAdd': function(event) {
        var err = validateInput_Ilija();
        if(err == 0){
            try {
                ilija.insert({
                       'prvi': $('#m_prvi').val(),
                       'drugi': $('#m_drugi').val(),
                       'treci': $('#m_treci').val(),
                       'cetvrti': $('#m_cetvrti').val(),
                       'peti': $('#m_peti').val(),
                       'sesti': $('#m_sesti').val()
            });
                $.growl('<strong>'+i18n('ilija.growlSuccessAdd')+'</strong>', {
                    type: 'success', z_index: 99999, allow_dismiss: false
                });
            }
            catch(err) {
                $.growl('<strong>'+i18n('ilija.growlError')+'</strong><br />'+err.message, {
                    type: 'danger', z_index: 99999, allow_dismiss: false
                });
            }
            $('#modalIlija').modal('hide');
        }
    },
    'click #bEdit': function(event) {
        var err = validateInput_Ilija();
        if(err == 0){
            try {
                ilija.update({'_id': Session.get('_id')}, {$set: {
                       'prvi': $('#m_prvi').val(),
                       'drugi': $('#m_drugi').val(),
                       'treci': $('#m_treci').val(),
                       'cetvrti': $('#m_cetvrti').val(),
                       'peti': $('#m_peti').val(),
                       'sesti': $('#m_sesti').val()
			}});
                $.growl('<strong>'+i18n('ilija.growlSuccessEdit')+'</strong>', {
                    type: 'success', z_index: 99999, allow_dismiss: false
                });
            }
            catch(err) {
                $.growl('<strong>'+i18n('ilija.growlError')+'</strong><br />'+err.message, {
                    type: 'danger', z_index: 99999, allow_dismiss: false
                });
            }
            $('#modalIlija').modal('hide');
        }
    },
    'click #bDelete': function(event) {
        try {
            ilija.remove({ '_id': Session.get('_id')});
            $.growl('<strong>'+i18n('ilija.growlSuccessDelete')+'</strong>', {
                type: 'success', z_index: 99999, allow_dismiss: false
            });
        }
        catch(err) {
            $.growl('<strong>'+i18n('ilija.growlError')+'</strong><br />'+err.message, {
                type: 'danger', z_index: 99999, allow_dismiss: false
            });
        }
        $('#modalIlija').modal('hide');
    }
});

Template.ilija.rendered = function() {
    $('.reactive-table-filter').html('<div class="row">'
            +'<h3 class="pull-left" style="color: rgb(49, 112, 143);"><em><strong>'+i18n('ilija.title')+'</strong></em></h3>'
            +'<h3 class="pull-right"><a data-tooltip="'+i18n('ilija.tooltipPrint')+'" class="btn btn-info btn-sm tooltip-left">'+i18n('ilija.titlePrint')+'</a>&nbsp;&nbsp;'
            +'<a data-toggle="modal" data-tooltip="'+i18n('ilija.tooltipAdd')+'" data-target="#modalIlija" onclick="Session.set(' + "'activity','add'" + ');"class="btn btn-success btn-sm tooltip-left">+</a></h3>'
            +'</div>'
            +$('.reactive-table-filter').html()
    );
    $('#modalIlija').on('shown.bs.modal', function (e) {
        if(Session.get('activity')=='add') {
            $('#m_prvi').val('');
            $('#m_drugi').val('');
            $('#m_treci').val('');
            $('#m_cetvrti').val('');
            $('#m_peti').val('');
            $('#m_sesti').val('');
        } else {
            $('#m_prvi').val(Session.get('prvi'));
            $('#m_drugi').val(Session.get('drugi'));
            $('#m_treci').val(Session.get('treci'));
            $('#m_cetvrti').val(Session.get('cetvrti'));
            $('#m_peti').val(Session.get('peti'));
            $('#m_sesti').val(Session.get('sesti'));
        }
        $('#m_prvi').focus();
    });
}

function validateInput_Ilija() {
    var err = 0;
    if($('#m_prvi').val().length < 2) {
        $.growl('<strong>'+i18n('ilija.growlError')+'</strong><br />'+i18n('ilija.fieldprviGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_drugi').val().length < 2) {
        $.growl('<strong>'+i18n('ilija.growlError')+'</strong><br />'+i18n('ilija.fielddrugiGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_treci').val().length < 2) {
        $.growl('<strong>'+i18n('ilija.growlError')+'</strong><br />'+i18n('ilija.fieldtreciGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_cetvrti').val().length < 2) {
        $.growl('<strong>'+i18n('ilija.growlError')+'</strong><br />'+i18n('ilija.fieldcetvrtiGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_peti').val().length < 2) {
        $.growl('<strong>'+i18n('ilija.growlError')+'</strong><br />'+i18n('ilija.fieldpetiGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    if($('#m_sesti').val().length < 2) {
        $.growl('<strong>'+i18n('ilija.growlError')+'</strong><br />'+i18n('ilija.fieldsestiGrowlErrorMessage'), {
            type: 'danger', z_index: 99999, allow_dismiss: false
        });
        err++;
    }
    return err;
}
// End of generated file