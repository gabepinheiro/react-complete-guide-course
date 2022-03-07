import MeetupDetails from "../components/meetups/MeetupDetails"

function DetailMeetupPage () {
  return (
    <MeetupDetails
      image='https://upload.wikimedia.org/wikipedia/commons/9/90/Stabil.JPG'
      title='A First Meetup'
      address='Some Street 5, Some City'
      description='The meetup description'
    />
  )
}

export async function getStaticPaths () {
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
      }
    ]
  }
}

export async function getStaticProps (context) {
  //fetch data from an API
  const meetupId = context.params.meetupId
  console.log(meetupId)

  return {
    props: {
      meetups: {}
    }
  }
}

export default DetailMeetupPage
