import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://techboomers.com/wp-content/uploads/2017/11/sites-like-meetup-h.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://techboomers.com/wp-content/uploads/2017/11/sites-like-meetup-h.jpg',
        address: 'Some address 10, 654321 Some City',
        description: 'This is a second meetup!'
    }
];

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS} />
};

export default HomePage;