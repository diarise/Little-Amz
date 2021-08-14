 $("#search").click(function (event) {
     event.preventDefault();
     var inputQuery = $("<input>").val();
     console.log(inputQuery);
    var settings = {
         "async": true,
         "crossDomain": true,
        // "url": "https://amazon24.p.rapidapi.com/api/product?filter=aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y&keyword=iphone&categoryID=aps&country=US&page=1",
         "url": "https://amazon24.p.rapidapi.com/api/product?filter=aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y&keyword=" + inputQuery + "&categoryID=aps&country=US&page=1",
         "method": "GET",
         "headers": {
             "x-rapidapi-key": "2f95a127d2msh8c6f89e9207a19ep14c9b0jsnfacb4cc92019",
             "x-rapidapi-host": "amazon24.p.rapidapi.com"
         }
     };
     $.ajax(settings).done(function (response) {
    
         var imageUrl = response.docs[1].product_main_image_url;
        //var imageUrl2 = response.docs[2].product_main_image_url;
        //var imageUrl3 = response.docs[3].product_main_image_url;
         $("#img").append(response.docs[1].product_main_image_url);
        // $("#img2").append(response.docs[2].product_main_image_url);
        // $("#img3").append(response.docs[3].product_main_image_url);

         var itemTitle = response.docs[1].product_title;
         //var itemTitle2 = response.docs[2].product_title;
         //var itemTitle3 = response.docs[3].product_title;      
    
         $("#title").text(itemTitle);
        // $("#title2").text(itemTitle2);
        // $("#title3").text(itemTitle3);

         $("#img").attr("src", imageUrl);
        //$("#img").attr("alt", itemTitle);

        //$("#img2").attr("src", imageUrl2);
        //$("#img2").attr("alt", itemTitle2);

        //$("#img3").attr("src", imageUrl3)
        //$("#img3").attr("alt", itemTitle3);
         

       
     });
 });