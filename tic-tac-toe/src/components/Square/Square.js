import '../../App.css'
const Square = ({value, onClick}) => { 
    
    return(
        <button className="w-24 h-24 bg-gray-200 m-1.5 rounded-none cursor-pointer text-7xl" onClick={onClick}>
            {value}
        </button>
    )
}
export default Square