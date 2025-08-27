# Ganesh Chaturthi Celebration 🐘✨

A beautiful React application celebrating Ganesh Chaturthi with interactive components and festive animations.

## Features

- **Glowing Sphere Button**: An animated sphere that enlarges on hover and opens the invitation card when clicked
- **Animated Invitation Card**: A festive card with:
  - Glowing Om (ॐ) symbol at the top
  - "Happy Ganesh Chaturthi" with gradient styling on "Ganesh"
  - "from TAP ACADEMY" in bold style
  - "✨ Ganpati Bappa Morya ✨" with emojis
  - Blessing message with unique styling
  - Glowing border and festive background
- **Smooth Transitions**: Beautiful animations when switching between components
- **Responsive Design**: Works perfectly on all device sizes
- **Reusable Components**: Props-based design for easy customization

## Components

### SphereButton
- Glowing sphere with orange/yellow gradient
- Smooth hover animations
- Click handler for opening invitation card

### InvitationCard
- Fully customizable with props:
  - `title`: Main title text
  - `subtitle`: Subtitle text
  - `quote`: Quote with emojis
  - `blessing`: Blessing message
  - `iconUrl`: Optional custom icon
  - `onClose`: Close handler function

## Technologies Used

- React 18
- Vite
- CSS3 with animations
- Modern JavaScript (ES6+)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL

## Customization

You can easily customize the invitation card by passing different props:

```jsx
<InvitationCard
  title="Custom Title"
  subtitle="Custom Subtitle"
  quote="Custom Quote ✨"
  blessing="Custom blessing message"
  iconUrl="/path/to/custom/icon.png"
  onClose={handleClose}
/>
```

## Color Scheme

The application uses a festive color palette:
- Primary: Orange (#ff6b35), Yellow (#ffd700)
- Background: Deep purple gradient
- Text: Various colors for uniqueness
- Glowing effects: Orange/yellow gradients

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is created for educational purposes and Ganesh Chaturthi celebration.

---

**Ganpati Bappa Morya! 🐘✨**
