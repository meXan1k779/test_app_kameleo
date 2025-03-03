import { InputHTMLAttributes } from 'react'
import { SearchIcon } from '../../assets/icons/searchIcon'
import './styles.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  count?: number
  handleSearch: (val: string) => void;
}

export const Input = ({count, handleSearch, ...props}: InputProps) => {
  return (
    <div className='container'>
      <input
        {...props}
        className="overrides"
        type='text'
        onChange={(e) => handleSearch(e.target.value)}
      />
      <SearchIcon className='icon' />
      {!!count && <div className='info'>{count} tests</div>}
    </div>
  )
}