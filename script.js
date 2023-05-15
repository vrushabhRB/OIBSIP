<script>
  
  window.addEventListener('scroll', function() {
      var header = document.getElementById('msge');
      if (window.pageYOffset > 0) {
          header.style.display = 'block';
          header.style.opacity = 1 - (window.pageYOffset / 100);
      } else {
          header.style.display = 'none';
      }
  });
</script>