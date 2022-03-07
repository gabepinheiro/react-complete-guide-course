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
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetupPage
