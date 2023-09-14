// Initialize Firebase with your own configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOSp3JrI_A0ZIicFncd2f68koN7yx2ZrA",
    authDomain: "tourism-6fbcb.firebaseapp.com",
    databaseURL: "https://tourism-6fbcb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tourism-6fbcb",
    storageBucket: "tourism-6fbcb.appspot.com",
    messagingSenderId: "952187889641",
    appId: "1:952187889641:web:65243c946c0b7012128d78"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = firebase.database();

// Handle form submission
const tripForm = document.getElementById('trip-form');

// Initialize the DateRangePicker
const dateRangePicker = $('#date-range-picker');

dateRangePicker.daterangepicker({
    opens: 'left',
    autoApply: true,
    minDate: new Date(),
    locale: {
        format: 'MM/DD/YYYY',
    },
});

tripForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user input
    const place = document.getElementById('place').value;
    const dateRange = dateRangePicker.val();

    // Extract start and end dates from the date range
    const [startDate, endDate] = dateRange.split(' - ');

    // Save trip data to Firebase
    const tripData = {
        place,
        startDate,
        endDate,
    };

    // Generate a unique key for each trip
    const tripKey = database.ref().child('trips').push().key;

    // Define the updates to be made to the database
    const updates = {};
    updates[`/trips/${tripKey}`] = tripData;

    // Commit the updates to the database
    database.ref().update(updates)
        .then(() => {
            alert('Trip data saved successfully!');
            // You can redirect the user to another page or perform other actions here
        })
        .catch((error) => {
            console.error('Error saving trip data:', error);
        });
});
