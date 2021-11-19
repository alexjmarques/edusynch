import { useEffect, useState } from 'react'
import qs from 'query-string'
import { useRouter } from 'next/router'

function usePagination() {
  const router = useRouter()
  console.log(router.query.page)

  const [actualPage, setActualPage] = useState(
    getActualPage() || 1
  )

  function getActualPage() {
    const page = router.query.page
    return page ? Number(page) : undefined
  }

  useEffect(() => {
    const queryParams = null
    router.push({
      search: qs.stringify({
        page: actualPage
      })
    })
  }, [actualPage])

  return {
    setActualPage,
    actualPage
  }
}

export { usePagination }