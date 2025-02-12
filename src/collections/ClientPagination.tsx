'use client'

import { Pagination } from '@payloadcms/ui/elements/Pagination'
import { useListQuery } from '@payloadcms/ui'

const ClientPagination = () => {
  const { data, handlePageChange } = useListQuery()

  return (
    <Pagination
      hasNextPage={data.hasNextPage}
      hasPrevPage={data.hasPrevPage}
      limit={data.limit}
      nextPage={data.nextPage!}
      numberOfNeighbors={1}
      onChange={(page) => void handlePageChange!(page)}
      page={data.page}
      prevPage={data.prevPage!}
      totalPages={data.totalPages}
    />
  )
}

export default ClientPagination
