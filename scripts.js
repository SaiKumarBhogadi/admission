function showFinder(type) {
    document.getElementById('courses-list').classList.add('hidden');
    document.getElementById('universities-list').classList.add('hidden');
  
    if (type === 'courses') {
      document.getElementById('courses-list').classList.remove('hidden');
    } else {
      document.getElementById('universities-list').classList.remove('hidden');
    }
  
    document.querySelectorAll('.finder-btn').forEach(btn => btn.classList.remove('finder-active'));
    event.target.classList.add('finder-active');
  }
  