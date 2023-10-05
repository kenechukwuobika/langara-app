import Event from "../Event";

const EventList = (props) => {

    const { events, activeTabItem } = props;

    const displayEvents = () => {
        if(events && events.length !== 0) {
            return events.map((event, index) => {
                return (
                    <Event key={index} event={event} />
                )
            })
        }

        return (
            <div>
                <h4>There are no {activeTabItem} events</h4>
            </div>
        )
    }

    return (
        <ul>
           { displayEvents() }
        </ul>
    )
}

export default EventList; 