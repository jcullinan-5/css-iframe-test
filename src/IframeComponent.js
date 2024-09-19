import React from "react";
import Montserrat from "./fonts/Montserrat-VariableFont_wght.ttf";

const IframeComponent = () => {
  const widgetId = 343067; // Replace with the appropriate widget ID if needed

  const iframeSrc = `
    <style>
      @font-face {
        font-family: 'Montserrat';
        src: url('${Montserrat}') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      body, .yext-menu-title, .yext-menu-item-name, .yext-menu-item-option, .yext-menu-item-desc, .yext-menu-section-title {
        font-family: 'Montserrat', sans-serif !important;
      }

    </style>

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
      style={{ width: "100%", minHeight: "1000px", border: "none" }}
    ></iframe>
  );
};

export default IframeComponent;
