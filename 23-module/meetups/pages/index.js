import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'

function HomePage (props) {
  return (
    <MeetupList meetups={props.meetups} />
  )
}

export async function getStaticProps () {
  //fetch data from an API
  const client = await MongoClient.connect(
    process.env.CONNECT_MONGODB_URL
  )

  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          description: meetup.description,
          address: meetup.address
        }
      })
    }
  }
}

export default HomePage
