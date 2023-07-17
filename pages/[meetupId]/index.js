import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail
            image="https://techboomers.com/wp-content/uploads/2017/11/sites-like-meetup-h.jpg"
            title="A First Meetup"
            address="Some address 5, 12345 Some City"
            descrition="This is a first meetup!"
        />
    );
};

export async function getStaticPaths() {

    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: "https://techboomers.com/wp-content/uploads/2017/11/sites-like-meetup-h.jpg",
                title: "A First Meetup",
                address: "Some address 5, 12345 Some City",
                descrition: "This is a first meetup!",
            },
        },
    };
}

export default MeetupDetails;
