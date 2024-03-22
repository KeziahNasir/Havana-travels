
// // Get the button element
// const bookNowButton = document.querySelector('.bbtn');

// // Add event listener to the button
// bookNowButton.addEventListener('click', () => {
//   // You can add whatever functionality you want here
//   alert('Thank you for booking with Havana Travels!');
// });


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".hero__right ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove 'active' class from all links
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      // Add 'active' class to the clicked link
      e.target.classList.add("active");
    });
  });

  const bookNowButton = document.querySelector(".bbtn");

  bookNowButton.addEventListener("click", function () {
    window.location.href=`login.html`
  });
});
