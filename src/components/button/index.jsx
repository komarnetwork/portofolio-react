import { Link } from 'react-router-dom'

function Button(props) {
  const {
    primary = 'text-slate-50 drop-shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2',
    children,
    text,
    type = 'submit',
  } = props

  return (
    <Link {...props}>
      <button type={type} className={`${primary} `}>
        {text || children}
      </button>
    </Link>
  )
}

export default Button
