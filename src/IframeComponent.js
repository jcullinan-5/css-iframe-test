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

      /* Apply the Montserrat font to all text within the iframe */
      body, .yext-menu-item-name, .yext-menu-item-option, .yext-menu-item-desc, .yext-menu-section-title {
        font-family: 'Montserrat', sans-serif !important;
      }

      .yext-menus-list {
          display: flex !important;         
          justify-content: space-around !important; 
          align-items: center !important;  
          width: 100% !important;          
          padding: 0 !important;           
          margin: 0 auto !important;       
          list-style-type: none !important;
      }
          

      .yext-menu-title {
          --tw-bg-opacity: 1;
          background-color: rgb(255 81 0 / var(--tw-bg-opacity)) !important;
          border-radius: 9999px !important; 
          padding: 0 !important; 
          color: white !important;
          margin-bottom: 1em !important;
          width: 116px !important;  
          height: 116px !important; 
          display: flex !important; 
          align-items: center !important;  
          justify-content: center !important; 
          text-align: center !important;
          font-size: 0.875rem !important; 
          font-weight: bold !important;
          overflow: hidden !important;  
      }
      .yext-active {
      background-color: #767676 !important; 
      }
    </style>

<div>
  <script src="https://sites.yext.com/${widgetId}-menu.js"></script>
  <script>
    function applyCustomStyles() {

      resizeMenuItemName();
      removeDallasTX(); 
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

    function removeDallasTX() {
      const menuItems = document.querySelectorAll('.yext-menu-title');
      
      menuItems.forEach((item) => {
        const originalText = item.textContent.trim();    
        if (originalText.includes('Dallas, TX')) {
          const updatedText = originalText.replace(' - Dallas, TX', ''); // Exact match and remove
          item.textContent = updatedText; 
        }
      });
    }



    // Apply the custom styles initially
    applyCustomStyles();

    // Set up MutationObserver to reapply styles on DOM changes
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
