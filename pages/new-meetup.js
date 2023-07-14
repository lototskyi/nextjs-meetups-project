import NewMeetupForm from "../components/meetups/NewMeetupForm";

const MewMeetupPage = () => {
    function addMeetupHandler(enteresMeetupData) {
        console.log(enteresMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default MewMeetupPage;
