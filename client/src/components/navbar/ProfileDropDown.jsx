import React ,{useState} from 'react'

function DropDown() {
  const [isOpen , setIsOpen] = useState(false) ;
  return (
    <div className="relative inline-block">
      <button onClick={()=>setIsOpen(!isOpen)}
        className="h-10 w-10 rounded-full bg-primary text-white font-semibold cursor-pointer hover:bg-primary-hover transition-colors duration-200">
        A
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-surface border border-border rounded-lg shadow-xl overflow-hidden z-50">
          <ul className="py-2">
            <li className="px-4 py-2 text-text-primary hover:bg-background-secondary cursor-pointer transition-colors duration-150">Profile</li>
            <li className="px-4 py-2 text-text-primary hover:bg-background-secondary cursor-pointer transition-colors duration-150">My Progress</li>
            <li className="px-4 py-2 text-text-primary hover:bg-background-secondary cursor-pointer transition-colors duration-150">Bookmarks</li>
            <li className="px-4 py-2 text-text-primary hover:bg-background-secondary cursor-pointer transition-colors duration-150">Settings</li>
            <hr/>
            <li className="px-4 py-2 text-error hover:bg-background-secondary cursor-pointer transition-colors duration-150">Logout</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDown
