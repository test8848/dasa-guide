// ============ Mobile nav toggle ============
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // ============ Scroll reveal ============
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // ============ FAQ accordion ============
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // ============ Institute filter chips ============
  var chips = document.querySelectorAll('.chip[data-filter]');
  var instCards = document.querySelectorAll('.inst-card[data-cat]');
  if (chips.length && instCards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var filter = chip.getAttribute('data-filter');
        instCards.forEach(function (card) {
          var match = filter === 'all' || card.getAttribute('data-cat') === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // ============ Institute search box ============
  var searchBox = document.getElementById('inst-search');
  if (searchBox && instCards.length) {
    searchBox.addEventListener('input', function () {
      var term = searchBox.value.trim().toLowerCase();
      instCards.forEach(function (card) {
        var text = card.textContent.toLowerCase();
        card.style.display = text.indexOf(term) > -1 ? '' : 'none';
      });
    });
  }

  // ============ Fee calculator (fees page) ============
  var feeForm = document.getElementById('fee-calc');
  if (feeForm) {
    var output = document.getElementById('fee-output');
    feeForm.addEventListener('input', calcFee);
    function calcFee() {
      var category = feeForm.querySelector('input[name="category"]:checked').value;
      var sem = parseInt(document.getElementById('sem-count').value, 10) || 1;
      var reg = 300; // USD registration, illustrative
      var tuitionPerSem = { nonsaarc: 4000, saarc: 2000, ciwg: 850 };
      var hostelMess = 650; // USD approx per semester illustrative
      var tuition = tuitionPerSem[category] * sem;
      var hostel = hostelMess * sem;
      var total = reg + tuition + hostel;
      output.innerHTML =
        '<div class="bp-fields" style="border-top:none;padding-top:0;">' +
        '<div class="bp-field"><span>Registration (one-time)</span><strong>US$' + reg.toLocaleString() + '</strong></div>' +
        '<div class="bp-field"><span>Tuition (' + sem + ' sem)</span><strong>US$' + tuition.toLocaleString() + '</strong></div>' +
        '<div class="bp-field"><span>Hostel + mess (' + sem + ' sem)</span><strong>US$' + hostel.toLocaleString() + '</strong></div>' +
        '<div class="bp-field"><span>Estimated total</span><strong>US$' + total.toLocaleString() + '</strong></div>' +
        '</div>';
    }
    calcFee();
  }

  // ============ Set active nav link ============
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
