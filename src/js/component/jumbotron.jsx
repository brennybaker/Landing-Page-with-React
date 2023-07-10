import React from "react";

const Jumbotron = () => {
    return(
        <div className = "container"
            style={{justifyContent:"center"}}>
            <div className="jumbotron" style = {{margin: "auto", border: "3px", background: "gainsboro", padding: "0.5em", marginTop: "0.5em", borderRadius: "0.5em", width:"100%"}}>
                <h1 className="display-4">A Warm Welcome</h1>
                <p className="lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>  
        </div>    
  );
  }

export default Jumbotron;