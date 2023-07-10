import React from "react";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div
        className="card-container"
        style={{ margin: "auto", maxWidth: "70%", marginTop: ".5rem", zIndex: "-2" }}
      >
        <div
          className="row d-flex justify-content-center align-items-stretch"
          style={{ margin: ".5rem", padding: "0" }}
        >
          <Card
            title="Title"
            image="https://images.unsplash.com/photo-1688716290016-43c62a58b9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            text="This is a unique sentence showcasing that every card has different string values! Feel the mattress tense beneath me like the muscle of non-sleepy. Feathers flexing will defeat me and it vexes me completely."
          />
          <Card
            title="Another Title"
            image="https://images.unsplash.com/photo-1685306314056-233b3ecf0bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            text="This is ANOTHER unique sentence showcasing that every card has different string values!! And the hexes heat covertly like a slow low-flying turkey, like a Texan drying jerky, but his meaty mitts can't hurt me!"
          />
          <Card
            title="Another..Nother Title"
            image="https://images.unsplash.com/photo-1688459554930-178292e48193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            text="This is another..nother unique sentence showcasing that every card has different string values!!! With my steely will compounded in a mighty mound that's hounded by the snap your steel string sounded just before your snores unwound it."
          />
          <Card
            title="Yet Another Title"
            image="https://images.unsplash.com/photo-1688590408489-587bd81a742a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D%3D&auto=format&fit=crop&w=500&q=60"
            text="This is yet another unique sentence showcasing that every card has a different string value!!!! And in store are dreams so daring that the night can't stop from staring and I'll swim sweetly as a herring through the ether, not despairing."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;



