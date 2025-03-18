# 🎮 ConnectFOUR - Hands Free 👋

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Made with: p5.js](https://img.shields.io/badge/Made%20with-p5.js-ED225D)
![ML: ml5.js](https://img.shields.io/badge/ML-ml5.js-E63F5B)

Play the classic Connect Four game without touching your keyboard or mouse! This project uses computer vision and machine learning to track your hand gestures for a futuristic gaming experience. ✨

## 🎯 Overview

This hands-free Connect Four game leverages the power of `p5.js` and `ml5.js` to create an interactive experience:

- 📹 Uses your webcam to track hand movements
- 👆 Detects pinching gestures (thumb to index finger)
- 🎯 Determines column selection based on hand position
- 🎲 Drop game pieces with a simple pinch!

## ✨ Features

- 🤚 Real-time hand tracking via webcam
- 🏆 Full Connect Four gameplay without physical controls
- 📊 Visual feedback with highlighted finger tracking points
- 📱 Modern, clean interface

## 🛠️ Requirements

- 🌐 Modern web browser with webcam access
- 📡 JavaScript enabled
- 🙌 Your hands!

## 📦 Dependencies

- [p5.js](https://p5js.org/) - Creative coding library 🎨
- [ml5.js](https://ml5js.org/) - Machine learning for the web 🧠
- HandPose model - Pre-trained hand tracking model 👋

## 🌐 Live Demo

Try the game without installation! A live demo is available at:

[https://kan-a-pesh.github.io/b3-power4](https://kan-a-pesh.github.io/b3-power4)

## 🚀 Quick Start

1. Clone the repository:

   ```sh
   git clone https://github.com/Kan-A-Pesh/b3-power4.git
   ```

2. Navigate to the project directory:

   ```sh
   cd b3-power4
   ```

3. Open `index.html` in a web browser or serve it using a local server.

4. Allow webcam access when prompted by the browser 📸

## 🎮 How to Play

1. Position yourself so your hands are visible to the webcam.
2. Move your hand horizontally to select a column (1-7).
3. Make a pinching gesture (👌) by bringing your thumb and index finger together.
4. The piece will drop in the selected column!
5. Take turns and be the first to connect four pieces in a row, column, or diagonal to win!

## 📜 License

[MIT License](LICENSE)
