import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Stabil.JPG',
    address: 'Some address 5, 12345 Some City',
    description: 'This a first meetup!'
  },
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Stabil.JPG',
    address: 'Some address 17, 12345 Some City',
    description: 'This a second meetup!'
  },
]

function HomePage () {
  return (
    <MeetupList meetups={DUMMY_DATA}/>
  )
}

export default HomePage
