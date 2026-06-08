$(document).ready(function() {
    
    $('#matricForm').on('submit', function(event) {

        event.preventDefault(); 
        
        var matricValue = $('#matricNo').val();
       
        var firstTwoNumbers = matricValue.substring(0, 2);
   
        var totalLength = matricValue.length;

        if (firstTwoNumbers != "18") {
            alert("Popup 3: jika tidak bermula dengan 18");
            return;
        }
        
        if (totalLength > 12) {
            alert("Popup 1: jika lebih dari 12 huruf");
            return;
        }
        
        if (totalLength < 12) {
            alert("Popup 2: jika kurang dari 12 huruf");
            return;
        }
        
        alert("Tahniah! Nombor matrik betul.");
    });
    
});