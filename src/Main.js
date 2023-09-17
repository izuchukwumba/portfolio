import "./styles/Main.css"

export default function Main(){

    return( 
        <div className="main">
            <div className="text-container">
                <div className="text hi">Hi, I'm</div>
                {/* <div className="text regular-text"></div> */}
                <div className = "text izu">Izuchukwu</div>
            </div>


            <div>I build highly functional web application using:</div>
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-node"></i>
            
        </div>
    )
}