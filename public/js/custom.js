// $(document).ready(function () {
//     $('.product').each(function() { 
//          var link = $(this).find('a').first().attr('href');
//          console.log(link);
//          $.get(link, function(data, status){
//             alert("Data: " + data + "\nStatus: " + status);
//         });
//     });
// });

// $("body").bind("ajaxSend", function(elm, xhr, s){
//     if (s.type == "POST") {
//        xhr.setRequestHeader('X-CSRF-Token', getCSRFTokenValue());
//     }
//  });