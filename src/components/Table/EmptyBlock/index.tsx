import { Status } from "../../../types"
import { Button } from "../../Button"
import '../styles.scss'

interface EmptyBlockProps {
  reset: () => void;
}

export const EmptyBlock = ({reset}: EmptyBlockProps) => {
  return (
    <div className="empty-block-wrapper">
    <h2 className="empty-block-wrapper_title"> Your search did not match any results.</h2>
      <Button
        title="Reset"
        className='empty-block-wrapper_button'
        status={Status.ONLINE}
        onClick={reset}
      />
  </div>)
}