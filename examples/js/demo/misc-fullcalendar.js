
// Misc-FullCalendar.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -



$(document).ready(function() {


	// Calendar
	// =================================================================
	// Require Full Calendar
	// -----------------------------------------------------------------
	// http://fullcalendar.io/
	// =================================================================


	// initialize the external events
	// -----------------------------------------------------------------
	$('#demo-external-events .fc-event').each(function() {
		// store data so the calendar knows to render an event upon drop
		$(this).data('event', {
			title: $.trim($(this).text()), // use the element's text as the event title
			stick: true, // maintain when user navigates (see docs on the renderEvent method)
			className : $(this).data('class')
		});


		// make the event draggable using jQuery UI
		$(this).draggable({
			zIndex: 99999,
			revert: true,      // will cause the event to go back to its
			revertDuration: 0  //  original position after the drag
		});
	});


	// Initialize the calendar
	// -----------------------------------------------------------------
	$('#demo-calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		editable: true,
		droppable: true, // this allows things to be dropped onto the calendar
		drop: function() {
			// is the "remove after drop" checkbox checked?
			if ($('#drop-remove').is(':checked')) {
				// if so, remove the element from the "Draggable Events" list
				$(this).remove();
			}
		},
		defaultDate: '2015-01-12',
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: 'Arduino',
				start: '2015-01-05',
				end: '2015-01-07',
				className: 'purple'
			},
			{
				title: 'Labview',
				start: '2015-01-15',
				end: '2015-01-17',
				className: 'mint'
			},
			{
				title: 'Mecánica',
				start: '2015-01-20T10:30:00',
				end: '2015-01-20T12:30:00',
				className: 'danger'
			},
			{
				title: 'Labview',
				start: '2015-02-01',
				className: 'mint'
			}
			
		]
	});

});
