import { ButtonHTMLAttributes } from 'react';
import { Status } from '../../types'
import './styles.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: Status;
  title: string;
}

export const Button = ({ status, title, ...props }: ButtonProps) => {
  const color = status === Status.DRAFT ? 'bg-grey' : 'bg-green'

  return <button {...props} className={`${props.className} button-overrides ${color}`}>{title}</button>
}