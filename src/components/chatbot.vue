<script>
(function() {
  var script = document.createElement('script');
  script.src = 'https://www.momentcrm.com/embed';
  script.async = true;
  document.head.appendChild(script);
  
  script.onload = function() {
    MomentCRM('init', {
      'teamVanityId': 'sit103',
      'doChat': true,
      'doTracking': true,
    });
  };
})();
</script>
