import { useGetTest } from '../../hooks/useGetTest'
import './styles.scss'


export const FinalizePage = () => {

  const {data} = useGetTest()
  return (
    <div className="wrapper">
      <h3 className="title">Finalize</h3>
      <div className='subtitle'>{data?.name}</div>
    </div>
  )
}