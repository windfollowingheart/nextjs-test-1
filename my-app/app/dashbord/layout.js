
export default function DashbordLayout({ children }) {
    return (
        <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
            <div style={{color:"green", background:"red"}}>我是dashbord layout</div>
            {children}
        </div>
    )
  }
