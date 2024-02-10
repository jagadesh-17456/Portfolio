function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('downloadBtn').addEventListener('click', function() {
  // Initialize jsPDF
  var doc = new jsPDF();
  // Add content from the entire document body to PDF
  doc.html(document.body, {
    callback: function () {
      // Save the PDF with a specific name
      doc.save('downloaded_page.pdf');
    }
  });
});

