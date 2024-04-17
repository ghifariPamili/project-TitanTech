function removeShadow(element) {
    element.style.boxShadow = 'none';
}

function addShadow(element) {
    element.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.5)';
}
// Menghapus kelas 'typing-animation' untuk menghentikan animasi mengetik
function stopTypingAnimation() {
    const element = document.querySelector('.typing-animation');
    element.classList.remove('typing-animation');
  }
  
  // Menambahkan kelas 'typing-animation' untuk memulai animasi mengetik
  function startTypingAnimation() {
    const element = document.querySelector('.typing-animation');
    element.classList.add('typing-animation');
  }
  
  // Memulai animasi ketika halaman dimuat
  document.addEventListener('DOMContentLoaded', () => {
    startTypingAnimation();
    // Menambahkan delay sebelum menghapus animasi
    setTimeout(stopTypingAnimation, 3000); // 3000ms (3 detik) sesuai dengan durasi animasi
  });
  

// ====================  dropdown js ================

function toggleDropdown() {
    var dropdown = document.getElementById("userDropdownContent");
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#userDropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
