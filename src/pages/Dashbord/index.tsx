import { Input } from '../../components/Input'
import { Table } from '../../components/Table'
import { useGetTests } from '../../hooks/useGetTests'

import './styles.scss'


export const DashboardPage = () => {
  const { data, isLoading, handleSort, handleSearch, resetSearch, serachValue } = useGetTests()

  return (
    <div className="dashboard_wrapper">
      <h1 className="dashboard_title">Dashboard</h1>
      <Input
        placeholder='What test are you looking for?'
        count={data?.length}
        value={serachValue}
        handleSearch={handleSearch}
      />
      {isLoading ? <div>loading</div> :
        <Table
          reset={resetSearch}
          data={data}
          sort={handleSort}
          loading={isLoading}
        />
      }
    </div>
  )
}