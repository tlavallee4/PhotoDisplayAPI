// get the base URL
const baseUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

// create fetch photos function that takes a date string as an argument
async function fetchPhotos(earthDate) {

    // Construct url with the earth date and API where retrieving photos
    const earthDateURL = `${baseUrl}?earth_date=${earthDate}&api_key=${I9AVaKH6PssQl8Suba6fGAa1In6kp2p3bSJQRf1w}`;

    // fetch API await to make a GET request to the constructed URL
    try {
        // Get the data from the constructed earth date url
        const response = await fetch(earthDateURL);

        if (!response.ok) {
            throw new Error(`Http error: ${response.status}`);
        }

        // Extract relevant date from the API's JSON response to display photos
        const data = await response.json();

        // Create a promise where the API response contains an array of photo objects.
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
        return [];  // Return an empty array in case of error
    }
}