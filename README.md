# SignBridge - Empowering Deaf Students to Learn Without Limits

A beautiful and responsive full-stack web application designed to make education accessible for deaf and hard-of-hearing students through AI-powered sign language translation, real-time captioning, and comprehensive note sharing.

## 🌟 Features

### 🟢 Part 1: Landing Website (Public Pages)
- **Hero Section**: Catchy introduction with animated elements and call-to-action buttons
- **How It Works**: Step-by-step explanation of the platform workflow
- **Features**: Showcase of platform capabilities with hover effects
- **Testimonials**: Impact stories from students and educators
- **About Us**: Mission statement and team information
- **Contact**: Contact form and company information
- **Footer**: Comprehensive footer with links and newsletter signup

### 🛠️ Part 2: Application (After Login)
- **Role-based Login**: Choose between Student and Teacher roles
- **Dashboard**: Subject cards with search and view mode toggle
- **Subject Pages**: 
  - Students: Download notes and materials
  - Teachers: Upload and delete PDFs
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful animations and interactions

## 🎨 Design Features

- **Color Palette**: Soft blue/purple gradient for trust and calm
- **Typography**: Modern rounded fonts (Inter & Nunito)
- **Animations**: Smooth Framer Motion animations throughout
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant design patterns

## 🖼️ Hero Image Customization

The hero section currently uses a placeholder image from Unsplash. To customize it:

### Option 1: Replace with your own image
1. Place your image in the `public/` folder
2. Update the `src` attribute in `src/components/sections/Hero.jsx`
3. Recommended size: 800x600px or larger
4. Format: JPG, PNG, or WebP

### Option 2: Use a different placeholder
- Update the `src` URL in the Hero component
- Use services like Unsplash, Pexels, or your own CDN

### Option 3: Use the fallback design
- The component includes a fallback gradient background
- Automatically shows if the image fails to load

## 🚀 Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: Custom shadcn/ui-inspired components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks & localStorage

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SignBridge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Landing Page
- Navigate through different sections using the navbar
- Smooth scrolling between sections
- Responsive design adapts to all screen sizes

### Login
- Choose your role (Student or Teacher)
- Use demo credentials: `demo@signbridge.com` / `demo123`
- Mock authentication with loading states

### Dashboard
- View all available subjects
- Search functionality
- Toggle between grid and list views
- Click on subjects to access materials

### Subject Pages
- **Students**: Download available notes and materials
- **Teachers**: Upload new PDFs and manage existing materials
- Real-time updates and feedback

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── sections/     # Landing page sections
│   ├── Navbar.jsx    # Navigation component
│   └── Footer.jsx    # Footer component
├── pages/            # Main page components
├── data/             # Dummy data and mock content
├── utils/            # Utility functions
├── App.jsx           # Main app component
└── index.js          # Entry point
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Blue shades */ },
  secondary: { /* Purple shades */ }
}
```

### Content
Update dummy data in `src/data/dummyData.js`:
- Subjects and notes
- Testimonials
- Team information
- Features list

### Hero Image
Update the image in `src/components/sections/Hero.jsx`:
```javascript
src="your-image-url-here"
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Demo Credentials

- **Email**: `demo@signbridge.com`
- **Password**: `demo123`
- **Role**: Choose between Student or Teacher

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**SignBridge** - Making education accessible for everyone! 🤟 