# SignBridge

SignBridge is an accessibility platform that empowers deaf and hard-of-hearing students with seamless note and speech translation into Indian Sign Language (ISL) using a 3D avatar, both on the web and in real-time during live classes.

## 🚀 Features

### Note-to-Sign Conversion (Web Platform)
- **Teacher Dashboard:** Teachers can upload PDF or text notes through their dedicated dashboard.
- **Student Dashboard:** Deaf students can access a built-in translator that converts the content of uploaded notes into sign language using a 3D avatar.

### Real-Time Speech-to-Sign (Chrome Extension)
- The extension captures live classroom speech using the teacher's microphone.
- It transcribes the speech, maps it to Indian Sign Language (ISL), and displays signs using a 3D avatar in real time.
- Deaf students view this directly through their browser with no setup required—just use real-time speech translation.

- **Downloadable Google Meet sign language extension**
- **Role-based login (Student/Teacher)**
- **Modern, responsive UI with accessibility focus**

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

## 🧩 Google Meet Real-Time Audio-to-Speech Translation

SignBridge provides a custom Google Meet extension that enables real-time audio-to-speech translation during meetings. This helps deaf and hard-of-hearing users follow conversations live.

**How to use:**
1. Download the extension zip from the "Download Extension" button in the navbar of the app.
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