
// document.addEventListener("DOMContentLoaded", function() {
//     // Add event listeners or other functionality here
//     // For example, you could add a click event listener to each hotel card to handle click events
//     var hotelCards = document.querySelectorAll(".hotel__card");
//     hotelCards.forEach(function(card) {
//         card.addEventListener("click", function() {
//             // You can define what happens when a hotel card is clicked, like opening a modal or navigating to a new page
//             var hotelName = card.querySelector("p:nth-of-type(1)").textContent;
//             var price = card.querySelector("p:nth-of-type(2)").textContent;
//             alert("You clicked on " + hotelName + ". Price: " + price);
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for hotel cards
    var hotelCards = document.querySelectorAll(".hotel__card");
    hotelCards.forEach(function(card) {
        // Add click event listener to each hotel card
        card.addEventListener("click", function() {
            // Retrieve hotel name and price from the card
            var hotelName = card.querySelector("p:nth-of-type(1)").textContent;
            var price = card.querySelector("p:nth-of-type(2)").textContent;
            
            // Display an alert with the hotel name and price when clicked
            alert("You clicked on " + hotelName + ". Price: " + price);
            
            // Example: You could also redirect the user to a specific page based on the hotel clicked
            // window.location.href = "hotel_details.html?hotel=" + encodeURIComponent(hotelName);
        });
    });
})