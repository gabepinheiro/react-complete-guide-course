import Head from 'next/head'
import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'

function HomePage (props) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active Meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
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
    revalidate: 1,
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
