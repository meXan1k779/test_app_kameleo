import { SortType, Test } from '../../types'
import { EmptyBlock } from './EmptyBlock'
import { TableHeader } from './Header'
import { TableRow } from './Row'

import './styles.scss'

interface TableProps {
  data: Test[] | null
  sort: (val: keyof Test, direction: SortType) => void
  loading: boolean;
  reset: () => void;
}

export const Table = ({data, loading, sort, reset}: TableProps) => {
  return (
    <div className="container">
      {data?.length === 0 && !loading ? <EmptyBlock reset={reset} /> :
      <>
      <TableHeader sort={sort} />
        {data?.map((item) => <TableRow key={item.id} {...item} />)}
        </>}
    </div>
  )
}