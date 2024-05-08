//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  document.getElementById("showHide").onclick = function() {
      var theDiv = document.getElementById("foo");
      if(theDiv.style.display == 'none') {
          theDiv.style.display = 'block';
          this.innerHTML = 'Hide';
      } else {
          theDiv.style.display = 'none';
          this.innerHTML = 'Show';
      }
  }
  
})

