import { useState } from 'react'
import { SortType, Test } from '../../../types'
import '../styles.scss'

interface TableHeaderProps {
  sort: (val: keyof Test, direction: SortType) => void
}

export const TableHeader = ({sort}: TableHeaderProps) => {
    const [sortState, setSortSate] = useState<{[key: string]: SortType}>({
      name: SortType.ASK,
      type:  SortType.ASK,
      site: SortType.ASK,
      status:  SortType.ASK,
    })
  
  const hanldeSort = (name: keyof Test) => {
    sort(name, sortState[name])
    setSortSate(prev => ({ ...prev, [name]: sortState[name] === SortType.ASK ? SortType.DESC : SortType.ASK }))
  }

  return <div className="row header">
        <span onClick={() => hanldeSort('name')}>NAME</span>
        <span onClick={() => hanldeSort('type')}>TYPE</span>
        <span onClick={() => hanldeSort('status')}>STATUS</span>
        <span onClick={() => hanldeSort('site')}>SITE</span>
      </div>
}