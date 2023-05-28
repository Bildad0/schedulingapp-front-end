
function Dashboard() {
    return (
<div className="">   
{/* mobile view design */}
    <div className='flex sm:flex md:hidden lg:hidden xl:hidden'>
    <div className="flex flex-row p-3">
      small screen
      </div>
    </div>
    {/* large screen view designs  */}
            <div className="hidden sm:hidden md:flex lg:flex xl:flex">Large Screen</div>
    </div>
    )
}

export default Dashboard;