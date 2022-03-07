import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage () {
  function addMeetupHandler (enteredMeetup) {
    console.log(enteredMeetup)
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetupPage
