	$(document).ready(function() {
var bso_v=20;
var bso_nv=30;
var bno_v=20;
var bno_nv=30;
var bco_v=20;
var bco_nv=30;
var lso_v=20;
var lso_nv=30;
var lno_v=20;
var lno_nv=30;
var lco_v=20;
var lco_nv=30;
var dso_v=20;
var dso_nv=30;
var dno_v=20;
var dno_nv=30;
var dco_v=20;
var dco_nv=30;
$("#save_data").on('click',function(event){
	var sivqty=$("#sivqty").val();
	var sinvqty=$("#sinvqty").val();
	var nivqty=$("#nivqty").val();
	var ninvqty=$("#ninvqty").val();
	var covqty=$("#covqty").val();
	var convqty=$("#convqty").val();
	if($('input[name=menu]:checked').val()=="breakfast"){
		var bsivcost=sivqty*bso_v;
		var bsinvcost=sinvqty*bso_nv;
		var bnivcost=nivqty*bno_v;
		var bninvcost=ninvqty*bno_nv;
		var bcovcost=covqty*bco_v;
		var bconvcost=convqty*bco_nv;
		var bfvegtot=bsivcost+bnivcost+bcovcost;
		var bfnonvegtot=bsinvcost+bninvcost+bconvcost;
		$("#bf_veg_tot").text(parseInt($("#bf_veg_tot").text())+bfvegtot);
		$("#bf_nonveg_tot").text(parseInt($("#bf_nonveg_tot").text())+bfnonvegtot);
		$('#fullCalModal').modal('hide');
	}
	if($('input[name=menu]:checked').val()=="lunch"){
		var lsivcost=sivqty*lso_v;
		var lsinvcost=sinvqty*lso_nv;
		var lnivcost=nivqty*lno_v;
		var lninvcost=ninvqty*lno_nv;
		var lcovcost=covqty*lco_v;
		var lconvcost=convqty*lco_nv;
		var luvegtot=lsivcost+lnivcost+lcovcost;
		var lunonvegtot=lsinvcost+lninvcost+lconvcost;
		$("#lu_veg_tot").text(parseInt($("#lu_veg_tot").text())+luvegtot);
		$("#lu_nonveg_tot").text(parseInt($("#lu_nonveg_tot").text())+lunonvegtot);
		$('#fullCalModal').modal('hide');
	}
	if($('input[name=menu]:checked').val()=="dinner"){
		var dsivcost=sivqty*dso_v;
		var dsinvcost=sinvqty*dso_nv;
		var dnivcost=nivqty*dno_v;
		var dninvcost=ninvqty*dno_nv;
		var dcovcost=covqty*dco_v;
		var dconvcost=convqty*dco_nv;
		var divegtot=dsivcost+dnivcost+dcovcost;
		var dinonvegtot=dsinvcost+dninvcost+dconvcost;
		$("#di_veg_tot").text(parseInt($("#di_veg_tot").text())+divegtot);
		$("#di_nonveg_tot").text(parseInt($("#di_nonveg_tot").text())+dinonvegtot);
		$('#fullCalModal').modal('hide');
	}
});

		$('#external-events .fc-event').each(function() {

			$(this).data('event', {
				title: $.trim($(this).text()), 
				stick: true 
			});

			$(this).draggable({
				zIndex: 999,
				revert: true,      
				revertDuration: 0  
			});

		});


		$('#calendar').fullCalendar({
			header: {
				left: '',
				center: 'prev title next',
				right: ''
			},
                        selectable: true,
                        selectHelper: true,
			select: function(event, jsEvent, view) {
                           //alert(jsEvent);
                           $('#fullCalModal').modal();
                        },
			editable: true,
			droppable: true, 
			drop: function() {
				$('#fullCalModal').modal();
			}
		});


	});
