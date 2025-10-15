# Smart Recipe Generator

A web application that suggests recipes based on available ingredients, with support for image recognition, dietary preferences, and personalized recommendations.

## Features

### Core Functionality
- **Ingredient Input**: Text input and image upload for ingredient recognition
- **Recipe Generation**: AI-powered recipe matching based on available ingredients
- **Dietary Preferences**: Support for vegetarian, vegan, gluten-free, dairy-free, and low-carb diets
- **Advanced Filters**: Filter by difficulty, cooking time, and serving size
- **Recipe Database**: 20+ diverse recipes with detailed nutritional information

### User Experience
- **Favorites System**: Save and manage favorite recipes
- **Rating System**: Rate recipes with 5-star system
- **Ingredient Substitutions**: Smart suggestions for ingredient alternatives
- **Responsive Design**: Mobile-friendly interface
- **Loading States**: Smooth user experience with loading indicators

### Technical Features
- **Image Recognition**: Simulated AI ingredient detection from photos
- **Local Storage**: Persistent favorites and ratings
- **Error Handling**: Robust error management
- **Clean Code**: Production-quality, maintainable codebase

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design
- **Storage**: LocalStorage for data persistence
- **Image Processing**: FileReader API for image handling

## Recipe Matching Algorithm

The application uses a sophisticated matching algorithm that:

1. **Ingredient Matching**: Finds recipes containing user's available ingredients
2. **Scoring System**: Ranks recipes by ingredient match percentage
3. **Dietary Filtering**: Respects user's dietary restrictions
4. **Time & Difficulty**: Filters based on cooking preferences
5. **Serving Adjustment**: Automatically scales recipes for desired servings

## Installation & Setup

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No additional dependencies required - runs entirely in the browser

## Usage

1. **Add Ingredients**: 
   - Upload a photo of ingredients (simulated recognition)
   - Manually type ingredient names
   
2. **Set Preferences**:
   - Select dietary restrictions
   - Choose difficulty level and cooking time
   - Adjust serving size

3. **Generate Recipes**:
   - Click "Generate Recipes" to find matches
   - Browse suggested recipes with nutritional info
   - View detailed instructions and ingredient lists

4. **Manage Favorites**:
   - Save recipes to favorites
   - Rate recipes with star system
   - Access saved recipes anytime

## Recipe Database

The application includes 20+ recipes covering:
- **Cuisines**: American, Italian, Asian, Mexican, Mediterranean, Indian, Thai, Greek
- **Dietary Options**: Vegetarian, vegan, gluten-free options available
- **Difficulty Levels**: Easy, medium, and hard recipes
- **Cooking Times**: 5 minutes to 1 hour
- **Nutritional Info**: Calories, protein, carbs, and fat per serving

## Error Handling

- Input validation for all user inputs
- Graceful handling of missing ingredients
- Fallback messages for empty results
- Image upload error management
- Local storage error handling

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Future Enhancements

- Real AI image recognition integration
- User accounts and cloud sync
- Recipe sharing functionality
- Shopping list generation
- Meal planning features

## Performance

- Lightweight: No external dependencies
- Fast loading: Optimized assets
- Efficient algorithms: Quick recipe matching
- Responsive: Smooth interactions

## Deployment

Ready for deployment on:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Simply upload the files to your hosting provider - no build process required.

## Development Approach

This application was built with:
- **Mobile-first design**: Responsive from the ground up
- **Progressive enhancement**: Works without JavaScript for basic functionality
- **Clean architecture**: Modular, maintainable code structure
- **User-centered design**: Intuitive interface and smooth workflows
- **Performance optimization**: Minimal resource usage

## License

Open source - feel free to use and modify for your projects.