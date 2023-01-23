import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import {
    CalendarApi,
    DateInput,
    DateSelectArg,
    EventApi,
    EventClickArg,
    EventInput,
    formatDate
} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

    const handleDateClick = (selected: DateSelectArg) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi: CalendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.startStr}-${title}`,
                title: title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    const handleEventClick = (selected: EventClickArg) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`))
            selected.event.remove();
    };

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page"/>
            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box
                    sx={{
                        flex: "1 1 20%",
                        backgroundColor: colors.primary[400],
                        padding: "15px",
                        borderRadius: "4px"
                    }}
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event: EventApi) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px"
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start as DateInput, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric"
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Box flex="1 1 100%" m="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "12315",
                                title: "All-day event",
                                date: new Date(Date.now()),
                            },
                            {
                                id: "5123",
                                title: "Timed event",
                                date: new Date(Date.now()).getTime() + 5 * 24 * 60 * 60 * 1000,
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;