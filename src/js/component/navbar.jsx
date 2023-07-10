import React from "react";

const Navbar = () => {
    return(
      <div className = "container" style = {{position: "sticky", top: "0", width: "100%", justifyContent:"center", zIndex:"1"}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Welcome</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{justifyContent:"flex-end"}}>
                <div className="navbar-nav" style ={{float:"left"}}>
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Services</a>
                    <a className="nav-link" href="#">Contact</a>
                </div>
                
                </div>
            </div>
        </nav>
        </div> 
    )
}

export default Navbar;