import { useGetTest } from '../../hooks/useGetTest'
import './styles.scss'


export const ResultsPage = () => {

  const {data} = useGetTest()
  return (
    <div className="wrapper">
      <h3 className="title">Results</h3>
      <div className='subtitle'>{data?.name}</div>
    </div>
  )
}