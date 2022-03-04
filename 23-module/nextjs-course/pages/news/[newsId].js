import { useRouter } from "next/router"

function DetailPage () {
  const router = useRouter()
  const { newsId } = router.query

  return (
    <>
      <h1>The Detail Page</h1>
      <p>{newsId}</p>
    </>
  )
}

export default DetailPage
