import Head from 'next/head'
import { useRouter } from 'next/router'

import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage () {
  const router = useRouter()

  async function addMeetupHandler (enteredMeetup) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetup),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const result = await response.json()

    console.log(result)

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Add new meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </>
  )
}

export default NewMeetupPage
