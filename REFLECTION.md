# Can I explain what my code does?

- HTML: Added date container to include selecting a date from the form and a button. Added a photo container where the photos will appear.
- JavaScript: the fetchPhotos function receives the photos from the API for the specific earth date, loadInitialPhotos loads photos from the specific date selected (december 1st, 2020) to display when the page is originally loaded. displayPhotos shows each photo with a description, loadPhotosButtonClick loads and displays the photos, and the event listeners load the photos on when a button is clicked and when the page is originally loaded. 

# What was my coding process?

- I slowly added each function one by one to see how it worked together, but nothing showed up until I was close to the end of my project. I tweaked the script as I tested to see how things worked together and added all the styling at the very end.  

# What challenges did I have?

- I had some troubles trying the forEach method in line 21 to incorporate the destructing. I researched to find what would work instead and found .map on the w3schools website. I also struggled with how to load the original photos. I was unsure if I was supposed to use the promise and wait or originally load it with an event listener. I found the DOMContentLoaded on the mozilla website.

# What would I do differently now?

- I still struggle with asking for help as I like to research and figure things out on my own. If I could change anything it would be to ask what I'm supposed to be doing in the steps so I know for sure instead of guessing if what I am doing is right. 

# API KEY

- I9AVaKH6PssQl8Suba6fGAa1In6kp2p3bSJQRf1w

# Websites used

- https://www.w3schools.com/jsref/jsref_map.asp (forEach not working)

- https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event (DOMContentLoaded)