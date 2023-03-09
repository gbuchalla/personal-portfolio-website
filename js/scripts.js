
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Reset form after submission
document.getElementById("form-btn").addEventListener("click", async () => {
    const form = document.getElementById("form");
    await form.submit();
    await form.reset();
    
    // Show submission success message after submiting the form
    const submitAlert = document.getElementById("submit-alert");
    submitAlert.className = "d-block";
});

// Hide submission message when clicking its close button
document.getElementById("close-alert-btn").addEventListener("click", () => {
    const submitAlert = document.getElementById("submit-alert");
    submitAlert.className = "d-none";
});


// Activate Bootstrap tooltips 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


