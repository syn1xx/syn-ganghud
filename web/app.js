function updateUI(data) {

  document.getElementById('gang-name').textContent = data.gangName;

  document.getElementById('rank-name').textContent = data.rankName;
}



window.addEventListener('message', function(event) {
  if (event.data.type === 'updateUI') {
    updateUI(event.data);
  } else if (event.data.type === 'showUI') {
    document.getElementById('gang-hud').style.display = 'block';
  } else if (event.data.type === 'hideUI') {
    document.getElementById('gang-hud').style.display = 'none';
  }
});

function updateGangUI() {
  $.post('https://syn-ganghud/updateUI', JSON.stringify({}));

  setTimeout(updateGangUI, 10000);
}

function receiveData(data) {
  updateUI(data);
}

window.addEventListener('message', function(event) {
  if (event.data.type === 'updateUI') {
    receiveData(event.data);
  }
});

window.addEventListener('load', function() {
  updateGangUI();
});
