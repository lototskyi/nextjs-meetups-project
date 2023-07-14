import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://techboomers.com/wp-content/uploads/2017/11/sites-like-meetup-h.jpg",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://techboomers.com/wp-content/uploads/2017/11/sites-like-meetup-h.jpg",
        address: "Some address 10, 654321 Some City",
        description: "This is a second meetup!",
    },
];

const HomePage = (props) => {
    return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    };
}

export default HomePage;
