import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import type { Event } from "react-big-calendar";
import {
	format,
	parse,
	startOfWeek,
	getDay,
	startOfHour,
	addHours,
} from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";

const locales = {
	"en-US": enUS,
};

const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
const now = new Date();
const start = endOfHour(now);
const end = addHours(start, 2);
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

export function BigCalendar() {
	const [events, setEvents] = React.useState<Event[]>([
		{
			title: "Learn cool stuff",
			start,
			end,
		},
	]);

	const onEventResize = (data: { start: Date; end: Date }) => {
		const { start, end } = data;

		setEvents((currentEvents) => {
			const firstEvent = {
				start: new Date(start),
				end: new Date(end),
			};
			return [...currentEvents, firstEvent];
		});
	};

	return (
		<div>
			<Calendar
				defaultView="week"
				localizer={localizer}
				events={events}
				// startAccessor="start"
				// endAccessor="end"
				// onEventResize={onEventResize}
				// resizable
				style={{ height: "100vh" }}
			/>
			<button
				type="button"
				onClick={() => onEventResize({ start: new Date(), end: new Date() })}
			>
				Add Event
			</button>
		</div>
	);
}
