document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.querySelector('.copy-email');
const emailAddress = 'nayla.nz.mecca@gmail.com';

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      const originalText = copyButton.textContent;
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = originalText;
      }, 1200);
    } catch (error) {
      copyButton.textContent = 'Copy failed';
      setTimeout(() => {
        copyButton.textContent = 'Copy Email';
      }, 1200);
    }
  });
}

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Message Sent';
    submitButton.disabled = true;

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      form.reset();
    }, 1800);
  });
}
