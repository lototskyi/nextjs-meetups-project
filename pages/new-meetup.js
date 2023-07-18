import Head from 'next/head';
import { useRouter } from "next/router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const MewMeetupPage = () => {
    const router = useRouter();

    async function addMeetupHandler(enteresMeetupData) {
        const response = await fetch("https://meetup.homeapp.pp.ua/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteresMeetupData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        router.replace("/");
    }

    return (
        <>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name="description"
                    content="Add your own meetups and create amazing networking oportunities."
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
};

export default MewMeetupPage;
