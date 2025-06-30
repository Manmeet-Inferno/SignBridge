# SignBridge

SignBridge empowers deaf and hard-of-hearing students with accessible education through AI-powered sign language translation, real-time captioning, and note sharing.

## 🚀 Features
- Real-time sign language translation of PDF notes
- Real-time audio-to-speech translation in Google Meet (via extension)
- Downloadable Google Meet sign language extension
- Role-based login (Student/Teacher)
- Upload, manage, and translate notes
- Modern, responsive UI with accessibility focus

## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/manmeetsingh149/SignBridge.git
cd SignBridge
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🧩 Download Google Meet Sign Language Extension
Click the **Download Extension** button in the navbar or [download here](public/google_meet_sign_language.zip) to get the extension zip file.

## 🧩 Google Meet Real-Time Audio-to-Speech Translation

SignBridge provides a custom Google Meet extension that enables real-time audio-to-speech translation during meetings. This helps deaf and hard-of-hearing users follow conversations live.

**How to use:**
1. Download the extension zip from the navbar or [here](public/google_meet_sign_language.zip).
2. Unzip the file.
3. Go to `chrome://extensions` in your browser.
4. Enable "Developer mode" (top right).
5. Click "Load unpacked" and select the unzipped extension folder.
6. Join a Google Meet and activate the extension to see real-time audio-to-speech translation.

This feature makes online meetings more accessible and inclusive for everyone!

## 📁 Project Structure
```
src/
  components/      # UI and layout components
  pages/           # Main app pages (Dashboard, Login, etc.)
  data/            # Dummy data
  utils/           # Utility functions
public/
  words/           # Sign language video files
  google_meet_sign_language.zip  # Extension
```

## 👤 Roles
- **Student:** View and translate notes
- **Teacher:** Upload and manage notes

## 📝 Customization
- Add your own sign language videos to `public/words/`
- Update the hero image in `public/hero.jpg`

## 📦 Tech Stack
- React 18, Tailwind CSS, Framer Motion, React Router DOM

---
Made with ❤️ for accessibility and inclusive education. 