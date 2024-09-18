import React from 'react';

const IframeComponent = () => {
  const widgetId = 343067; 
  const iframeSrc = `
    <div>
      <script src="https://sites.yext.com/${widgetId}-menu.js"></script>
      <script>
        function applyCustomStyles() {
          hideMenuItemOptions();
          hideMenuItemDesc();
          resizeMenuItemName();
        }

        function hideMenuItemOptions() {
          const menuItemOptions = document.querySelectorAll('.yext-menu-item-option');
          menuItemOptions.forEach((option) => {
            option.style.display = 'none';
          });
        }

        function hideMenuItemDesc() {
          const menuItemDesc = document.querySelectorAll('.yext-menu-item-desc');
          menuItemDesc.forEach((option) => {
            option.style.display = 'none';
          });
        }

        function resizeMenuItemName() {
          const menuItemNames = document.querySelectorAll('.yext-menu-item-name');
          menuItemNames.forEach((name) => {
            name.style.fontWeight = 'bold';
            name.style.whiteSpace = 'normal'; // Allow text to wrap
            name.style.overflow = 'hidden';   // Hide overflow
            name.style.maxWidth = '300px'; 
          });
        }

        // Apply the custom styles initially
        applyCustomStyles();

        // Set up a MutationObserver to apply styles on DOM changes
        const observer = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
              applyCustomStyles();
            }
          }
        });

        // Observe the entire document for changes
        observer.observe(document, { childList: true, subtree: true });
      </script>
    </div>
  `;

  return (
    <iframe
      title="menu-widget"
      srcDoc={iframeSrc}
      style={{ width: "100%", minHeight: "1000px", border: 'none' }}
    ></iframe>
  );
};

export default IframeComponent;
