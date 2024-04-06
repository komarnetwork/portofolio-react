import { Link } from 'react-router-dom'

function ButtonOutline(props) {
  const {
    primary = 'relative inline-flex items-center transform transition duration-150 hover:scale-110 justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200',
    span = 'px-5 py-2 transition-all ease-in duration-75 bg-slate-50 rounded-md group-hover:bg-opacity-0',
    children,
    text,
    type = 'submit',
    to,
  } = props

  return (
    <Link {...props}>
      <button type={type} className={`${primary} `} to={to}>
        <span className={`${span}`}>{text || children}</span>
        {/* {text || children} */}
      </button>
    </Link>
  )
}

export default ButtonOutline
