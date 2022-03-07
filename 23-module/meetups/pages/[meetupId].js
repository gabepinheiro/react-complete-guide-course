import Head from 'next/head'
import { MongoClient, ObjectId } from 'mongodb'

import MeetupDetails from "../components/meetups/MeetupDetails"

function DetailMeetupPage ({ meetup }) {
  return (
    <>
     <Head>
        <title>{meetup.title}</title>
        <meta
          name="description"
          content={meetup.description}
        />
      </Head>
      <MeetupDetails {...meetup} />
    </>
  )
}

export async function getStaticPaths () {
  const client = await MongoClient.connect(
    process.env.CONNECT_MONGODB_URL
  )

  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    })),
  }
}

export async function getStaticProps (context) {
  //fetch data from an API
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(
    process.env.CONNECT_MONGODB_URL
  )

  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const data = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

  return {
    props: {
      meetup: {
        title: data.title,
        image: data.image,
        description: data.description,
        address: data.address
      }
    }
  }
}

export default DetailMeetupPage
