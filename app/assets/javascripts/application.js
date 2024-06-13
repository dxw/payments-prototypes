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

  var phoneInput = document.getElementById('phone');
  var myForm = document.forms.myForm;
  var result = document.getElementById('result');  // only for debugging purposes

  phoneInput.addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });

  myForm.addEventListener('submit', function(e) {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
    result.innerText = phoneInput.value;  // only for debugging purposes
    
    e.preventDefault(); // You wouldn't prevent it
  });
  
})

