# 3D Solar System

A 3D interactive model of the Solar System built with [Three.js](https://threejs.org/) and [dat.GUI](https://github.com/dataarts/dat.gui).  
You can view, pause, and control the speed of each planet's orbit, as well as see planet names and a starry background.

## Features

- **3D visualization** of the Sun and all major planets (including Pluto)
- **Individual speed sliders** for each planet's orbit
- **Pause/Resume** animation button (bottom center)
- **Always-visible planet names** next to each planet
- **Starfield background** for a realistic space effect
- **Toggle options** for "Real view" and "Show path" using dat.GUI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for running a local server, or use any static server)
- Modern web browser (Chrome, Firefox, Edge, etc.)

### Installation

1. **Clone or download** this repository.
2. Make sure the folder structure is:
    ```
    solar-system3D-main/
      ├── index.html
      ├── js/
      │    └── solarSystem.js
      ├── min.js/
      │    └── dat.gui.min.js
      └── (other assets)
    ```

### Running Locally

You need to run a local server to load modules and assets correctly.

#### Using Node.js (http-server)

```sh
npm install -g http-server
http-server
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

#### Or use VS Code Live Server extension.

## Usage

- **Pause/Resume:** Click the button at the bottom center to pause or resume the animation.
- **Adjust Orbit Speeds:** Use the dat.GUI panel (top right) to change each planet's orbit speed.
- **Show/Hide Paths:** Toggle planet orbit paths with the GUI.
- **Real View:** Toggle lighting for a more realistic or stylized look.
- **Planet Names:** Always visible next to each planet.
- **Star Background:** Enjoy the immersive starfield!

## Customization

- Edit `js/solarSystem.js` to change planet properties, star count, or add new features.
- Style the UI by editing the `<style>` section in `index.html`.

## Credits

- [Three.js](https://threejs.org/) for 3D rendering
- [dat.GUI](https://github.com/dataarts/dat.gui) for UI controls

## License

This project is for educational and demonstration purposes.