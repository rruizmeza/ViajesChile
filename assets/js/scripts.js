$('#myTooltip').on('hidden.bs.tooltip', function () {
    // do something…
  })

// Modal Bootstrap //

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})