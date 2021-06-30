import React, { Component } from 'react';
import Particles from "react-tsparticles";
import "./introduction.css";

export default class Introduction extends Component {
    render() {
        return (
            <div className="introduction">

<Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#121212",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 5,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 4.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

                <div className="infoDiv">
                 <h2>Hi,
                     I'm <span style={{color:"#a161d4"}}>Paul</span>!
                 </h2>
                 <h3>A software engineer currently in Tucson, Arizona</h3>
                 </div>

            </div>
        )
    }
}