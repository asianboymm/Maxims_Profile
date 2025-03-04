// Get all tab buttons
const tabButtons = document.querySelectorAll('.tab-button');
// Get all tab panels
const tabPanels = document.querySelectorAll('.tab-panel');

// Add event listeners to each tab button
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all tab buttons
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    // Add 'active' class to the clicked tab button
    button.classList.add('active');

    // Hide all tab panels
    tabPanels.forEach((panel) => {
      panel.classList.remove('active');
    });

    // Show the corresponding tab panel
    const targetTab = button.getAttribute('data-tab');
    const targetPanel = document.getElementById(targetTab);
    targetPanel.classList.add('active');
  });
});
