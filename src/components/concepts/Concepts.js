import React from "react";
import componentsImage from "../../assets/images/components.png";
import stateImage from "../../assets/images/state.png";
import eventsImage from "../../assets/images/events.png";

const Concepts = () => {
  const concepts = [
    {
      title: "Components",
      image: componentsImage,
      description:
        "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
    },
    {
      title: "State",
      image: stateImage,
      description:
        "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
    },
    {
      title: "Events",
      image: eventsImage,
      description:
        "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
    },
  ];
  return (
    <ul id="concepts">
      <li className="concept">
        <img src="TODO: IMAGE" alt="TODO: TITLE" />
        <h2>TODO: TITLE</h2>
        <p>TODO: DESCRIPTION</p>
      </li>
    </ul>
  );
};

export default Concepts;