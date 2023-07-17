import { useRouter } from "next/router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const MewMeetupPage = () => {

    const router = useRouter();

    async function addMeetupHandler(enteresMeetupData) {

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteresMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        
        router.replace('/');

    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default MewMeetupPage;
