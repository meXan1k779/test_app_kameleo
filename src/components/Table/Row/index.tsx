import { useNavigate } from "react-router-dom"
import { Status, Test } from "../../../types"
import { getBorderColor, getRandom1To3 } from "../../../utils/getRandomBorerColor"
import { getStatusByColor } from "../../../utils/getStatusByColor"
import { removeUrlPrefix } from "../../../utils/removePrefixUrl"
import { Button } from "../../Button"

export const TableRow = ({ name, type, status, site, id }: Test) => {

  const buttonTitle = status === Status.DRAFT ? 'Finalize' : 'Results'

  const nav = useNavigate()

  const handleClick = () => {
    const link = status === Status.DRAFT ? `/finalize/${id}` : `/results/${id}`
    nav(link)
  }
  
  return (
    <div className={`row table-item ${getBorderColor(getRandom1To3())}`}>
      <div className="name">{name}</div>
      <div className="grey">{ type}</div>
      <div className={`status ${getStatusByColor(status)}`}>{ status}</div>
      <div className="type">{removeUrlPrefix(site)}</div>
      {
        <Button
        title={buttonTitle}
        status={status}
        onClick={handleClick}
      />
      }
    </div>
  )
}