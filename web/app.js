// Define the UI update function
function updateUI(data) {
  // Update the gang name
  document.getElementById('gang-name').textContent = data.gangName;

  // Update the rank name
  document.getElementById('rank-name').textContent = data.rankName;
}


// Define the NUI message handler
window.addEventListener('message', function(event) {
  // Check the message type
  if (event.data.type === 'updateUI') {
    // Call the UI update function
    updateUI(event.data);
  } else if (event.data.type === 'showUI') {
    // Show the UI
    document.getElementById('gang-hud').style.display = 'block';
  } else if (event.data.type === 'hideUI') {
    // Hide the UI
    document.getElementById('gang-hud').style.display = 'none';
  }
});

// Send a message to the server to update the UI
function updateGangUI() {
  // Send the message
  $.post('https://syn-ganghud/updateUI', JSON.stringify({}));

  // Call the function again after 10 seconds to keep the UI updated
  setTimeout(updateGangUI, 10000);
}

// Define the callback function to receive data from the server
function receiveData(data) {
  // Call the UI update function
  updateUI(data);
}

// Register the callback function to receive data from the server
window.addEventListener('message', function(event) {
  if (event.data.type === 'updateUI') {
    receiveData(event.data);
  }
});

// Call the updateGangUI function when the page is loaded
window.addEventListener('load', function() {
  updateGangUI();
});
