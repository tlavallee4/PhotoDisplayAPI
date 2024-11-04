// Get the base URL for the NASA Mars Rover Photos and API key
const baseUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
const apiKey = "I9AVaKH6PssQl8Suba6fGAa1In6kp2p3bSJQRf1w";

// Async Function to fetch Mars Rover photos based on an Earth date
async function fetchPhotos(earthDate) {
    const earthDateURL = `${baseUrl}?earth_date=${earthDate}&api_key=${apiKey}`;
    // send GET request to constructed URL
    try {
        const response = await fetch(earthDateURL);

        if (!response.ok) {
            throw new Error(`Http error: ${response.status}`);
        }

        // Extract relevant date from the API's JSON response to display photos
        const data = await response.json();

        // Create a promise where the API response contains an array of photo objects.
        // Select 3 photos to display on webpage
        const photos = data.photos.slice(0, 3).map(photo => {
            // Use destructuring to extract the data from each photo object
            const { img_src, 
                earth_date, 
                sol, 
                camera: { full_name } 
            } = photo;
            return { img_src, earth_date, sol, full_name };
        });
        
        return photos;
        
    } catch (error) {
        console.error("Error fetching photos:", error.message);
    }
}

// function to retrieve photos from a significant Mars Rover mission date chosen
async function loadInitialPhotos() {
    // specific date chosen
    const significantMission = "2020-12-01";
    const description = "Photos from Mars 35th Spring/Autumn Martian season";

    // fetch the photos from the specific date
    const photos = await fetchPhotos(significantMission);

    // display photos 
    if (photos.length > 0) {
        displayPhotos(photos, description);
    } else {
        console.log('No photos for date.');
    }
}

// Load initial photos on page loading
document.addEventListener('DOMContentLoaded', loadInitialPhotos);

// Add load photos to web page function
function displayPhotos(photos, description) {
    const photosContainer = document.getElementById("photos-container");

    // Add description
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    photosContainer.appendChild(descriptionElement);

    // Display each photo with details. Get from array of photo objects
    photos.forEach(({ img_src, earth_date, sol, full_name }) => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('photo-item');
        photoElement.innerHTML = `
            <img src="${img_src}" alt="Mars Rover Photo" width="200">
            <p>Date: ${earth_date}</p>
            <p>Sol: ${sol}</p>
            <p>Camera: ${full_name}</p>`;
        photosContainer.appendChild(photoElement);
    });
}

// Event listener for the "Load Photos" button that triggers a function
document.getElementById('show-photos-button').addEventListener('click', loadPhotosButtonClick);

// function to load photos for selected date
async function loadPhotosButtonClick() {
    // get date input value
    const dateInput = document.getElementById('date-input').value;

    // Make a description based on date chosen
    const description = `Photos from the Mars Rover mission on ${dateInput}.`;
    const photos = await fetchPhotos(dateInput);

    // If there are photos, display them
    if (photos.length > 0) {
        displayPhotos(photos, description);
    } else {
        // If there are no photos, display no photos description
        console.log('No photos available.');
        const photosContainer = document.getElementById("photos-container");
        photosContainer.innerHTML = '<p>No photos available. Choose new date.</p>';
    }
}