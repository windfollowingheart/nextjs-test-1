export default function RootLayout({ children }) {
    return (
        <div>
            <div style={{color:"green", background:"red"}}>我是dashbord template</div>
            {children}
        </div>
    )
  }