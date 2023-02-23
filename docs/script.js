
  // Get the menu button and the menu items
  const menuButton = document.querySelector('.block button');
  const menuItems = document.querySelector('.text-sm');

  // Add an event listener to the menu button
  menuButton.addEventListener('click', () => {
    // Toggle the "hidden" class on the menu items
    menuItems.classList.toggle('hidden');
  });

