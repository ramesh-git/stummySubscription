	$(document).ready(function() {


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
                           
                           $('#fullCalModal').modal();
                        },
			editable: true,
			droppable: true, 
			drop: function() {
				$('#fullCalModal').modal();
			}
		});


	});
