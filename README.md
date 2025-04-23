# Itch.io Bootstrap Theme

This project is a Bootstrap-based web application that replicates a theme for the Itch.io platform. It includes multiple pages, dynamic content, and theme-switching functionality.
### [Link]([https://ashwinc8.github.io/Games-Library/home.html])

## Features

- **Dynamic Pages**: Includes pages for Home, About, Contact, My Games, Login, and Registration.
- **Theme Switching**: Users can toggle between two themes using a dropdown menu.
- **Game Listings**:
  - **Trending Games**: Displays trending games in a carousel.
  - **Upcoming Games**: Lists upcoming games with details.
  - **Featured Games**: Highlights featured games.
  - **My Games**: Displays a user's saved games.
- **Responsive Design**: Fully responsive layout using Bootstrap 5.
- **Form Validation**: Includes client-side validation for login and registration forms.

## File Structure

### HTML Pages
- `home.html`: Main landing page with trending, upcoming, and featured games.
- `about.html`: Information about the Itch.io platform.
- `contact.html`: Support and contact details.
- `my-games.html`: Displays the user's saved games.
- `login.html`: Login form.
- `registration.html`: Registration form.

### Styles
- `styles/theme.css`: Defines CSS variables for themes.
- `styles/*.css`: Page-specific styles.

### Scripts
- `scripts/themeSwitching.js`: Handles theme switching and local storage.
- `scripts/home.js`: Fetches and displays trending, upcoming, and featured games.
- `scripts/my-games.js`: Fetches and displays the user's saved games.

### Data
- `data/trending.json`: Data for trending games.
- `data/upcoming.json`: Data for upcoming games.
- `data/featured.json`: Data for featured games.
- `data/my-games.json`: Data for the user's saved games.

### Assets
- `assets/logos/`: Game logos.
- `assets/game-images/`: Game images.

## How to Use

1. Clone the repository.
2. Open any HTML file in a browser to view the corresponding page.
3. Use the theme selector to switch between themes.
4. Navigate through the pages using the navbar.

## Technologies Used

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript (ES6)**
- **JSON**

## Future Enhancements

- Add functionality for the "Add Game" modal in `my-games.html`.
- Improve form validation and error handling.
- Enhance the design with additional themes.

## License

This project is for educational purposes and does not include any official Itch.io assets or branding.
