# 🎵 Blue Music Player – HCI Project

## 📌 Project Overview
Blue Music Player is a web-based music player developed using HTML, CSS, and JavaScript for the Human-Computer Interaction (HCI) course project. The application focuses on usability, accessibility, visual consistency, and user-centered interaction design.

The system allows users to play music, manage favorite songs, browse playlists, and access recently played tracks through a modern Spotify-inspired interface.

---

# 🎯 Project Objectives

The main objective of this project is to create a functional and user-friendly music player interface that applies Human-Computer Interaction (HCI) principles such as:

- Visibility of system status
- User feedback
- Consistency and standards
- Minimalist design
- Efficiency of use
- Learnability and usability

---

# 🎵 Features Implemented

## Core Music Features
- Play and pause controls
- Next and previous track navigation
- Audio progress slider
- Volume control slider
- Song duration and current time display
- Automatic next song playback
- Repeat mode
- Shuffle mode

---

## Playlist Features
- Playlist sidebar
- Clickable song selection
- Active song highlighting
- Album artwork display
- Song title, artist, and genre information

---

## Favorites System
- Add/remove favorite songs
- Persistent favorites using Local Storage
- Favorite songs sidebar
- Heart icon toggle feedback

---

## Recently Played System
- Dynamic recently played list
- Automatic update when songs are played
- Quick replay access

---

## User Interaction Features
- Hover animations and glow effects
- Active state feedback
- Keyboard shortcuts:
  - Spacebar → Play/Pause
  - Left Arrow → Previous Song
  - Right Arrow → Next Song
- Focus states for accessibility
- Responsive layout for smaller screens

---

# 🧠 HCI Principles Applied

## 1. Visibility of System Status
The currently playing song is clearly displayed using:
- Album artwork
- Song title
- Artist name
- Genre
- Active song highlighting

Users always know which song is currently playing.

---

## 2. Feedback and Interaction
The interface provides immediate visual feedback through:
- Hover effects
- Button animations
- Favorite state changes
- Active playlist indicators

This improves user confidence and interaction clarity.

---

## 3. Consistency and Standards
Consistent typography, spacing, color palette, and button behavior are applied throughout the application to improve learnability and usability.

---

## 4. Minimalist Design
The application uses a clean dark-themed layout with minimal distractions to help users focus on music playback.

---

## 5. Efficiency of Use
Users can quickly access controls, playlists, favorites, and recently played songs with minimal clicks.

Keyboard shortcuts also improve efficiency for advanced users.

---

# 🖼️ Wireframes

The project wireframes were created to visualize the layout, navigation flow, and user interaction before development.

## Included Screens
- Main Music Player Interface
- Playlist View
- Favorites and Recently Played Sections

📄 [Open Wireframes Documentation](documentation/wireframes.pdf)

---

# 👤 User Personas

User personas were created during the planning phase to identify the needs, preferences, and pain points of the target users. These personas guided the interface layout, playback controls, navigation structure, and overall user experience design of the application.

## Personas Included
1. Liam Bautista – Heavy music listener and student content creator
2. Alyssa Cruz – Casual student listener focused on simplicity and ease of use

[Open User Personas](documentation/user-personas.pdf)

---

# 🎨 Design System

## Color Palette

| Color | Hex Code | Usage |
|-------|----------|------|
| Green Accent | #1DB954 | Active controls and highlights |
| Dark Background | #0A0F1F | Main background |
| Panel Background | #0D1B2A | Containers and sidebars |
| Primary Text | #FFFFFF | Main content |
| Secondary Text | #7FB3FF | Metadata and labels |

---

## Typography

### Fonts Used
- Poppins
- Roboto

### Font Usage
| Element | Font | Weight |
|---------|------|--------|
| Song Titles | Poppins | Bold |
| Metadata | Roboto | Regular |
| Buttons | Poppins | Medium |

[Open Design System](documentation/design-system.pdf)

---

# 👤 User Personas

- [User Personas](documentation/user-personas.pdf)

---

# 📂 Project Structure

```text
Blue-Music-Player/
│
├── index.html
├── styles.css
├── script.js
├── README.md
│
├── music/
│   ├── song1.mp3
│   ├── song2.mp3
│   └── ...
│
├── images/
│   ├── album1.jpg
│   ├── album2.png
│   └── ...
│
└── documentation/
    ├── wireframes.pdf
    ├── user-personas.pdf
    └── design-system.pdf