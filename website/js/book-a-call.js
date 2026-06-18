function initBookACall() {
  "use strict";
  const form = document.querySelector('.bac-form');
  if (!form) return;

  const other = form.querySelector('.bac-other');
  const occupationRadios = Array.from(form.querySelectorAll('input[name="occupation"]'));

  if (other) {
    other.addEventListener('input', () => {
      if (other.value.trim() !== '') {
        occupationRadios.forEach((r) => { r.checked = false; });
      }
    });
    occupationRadios.forEach((r) => {
      r.addEventListener('change', () => {
        if (r.checked) other.value = '';
      });
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', initBookACall);
