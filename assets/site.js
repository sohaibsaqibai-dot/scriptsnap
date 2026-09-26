/* ScriptSnap site — tiny progressive enhancements. Page works fully without JS. */
(function () {
  var rows = document.querySelectorAll('.panel .row');
  if (rows.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var i = 0;
    setInterval(function () {
      rows[i].classList.remove('on');
      i = (i + 1) % rows.length;
      rows[i].classList.add('on');
    }, 2200);
  }
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.getAttribute('data-copy');
      var done = function () { var o = b.textContent; b.textContent = 'Copied'; setTimeout(function () { b.textContent = o; }, 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, function () {});
    });
  });
})();
