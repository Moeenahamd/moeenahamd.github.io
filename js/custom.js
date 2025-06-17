

document.addEventListener('DOMContentLoaded', () => {
  
  function handleLanguageChange(selectElement) {
    const container = selectElement.closest('.code-container');
    const selectedLang = selectElement.value;
    const codeBlocks = container.querySelectorAll('.code-block');

    codeBlocks.forEach(block => {
      block.classList.remove('active');
      if (block.classList.contains(selectedLang)) {
        block.classList.add('active');
      }
    });
  }

  function copyActiveCode(btn) {
  const container = btn.closest('.code-container');
  const codeBlock = container?.querySelector('.code-block.active');

  if (!codeBlock) {
    console.error("No active code block found.");
    return;
  }

  const text = codeBlock.textContent.trim(); // textContent preserves formatting better than innerText

  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied:", text); // Debug log
    btn.title = "Copied!";
    setTimeout(() => {
      btn.title = "Copy to clipboard";
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy!", err);
    btn.title = "Failed to copy";
  });
}


  // Expose globally for inline use
  window.handleLanguageChange = handleLanguageChange;
  window.copyActiveCode = copyActiveCode;
});
