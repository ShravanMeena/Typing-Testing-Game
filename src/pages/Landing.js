import React from "react";
import { Button, Landing } from "./home/Home.style";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <Landing>
      <Link to='/typing-master'>
        <Button>Typing Speed Game</Button>
      </Link>

      <Link to='/draggable-list-app'>
        <Button>Draggable list app</Button>
      </Link>
    </Landing>
  );
}
