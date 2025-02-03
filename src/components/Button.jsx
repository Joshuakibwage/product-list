 

const Button = ({label, iconURL}) => {
  return (
    <div 
    className="flex items-center gap-2 border w-30 font-bold bg-white text-xs rounded-full py-1 px-2 
    absolute top-44 left-10 z-2"
    >
      {iconURL && <img
        src={iconURL}
      />}
      {label}
    </div>
  )
}

export default Button