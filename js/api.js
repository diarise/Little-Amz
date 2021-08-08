// $("#getItem").click(function (event) {
//     event.preventDefault();
//     var inputQuery = $("#itemInput").val();
//     console.log(inputQuery);
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         //"url": "https://amazon24.p.rapidapi.com/api/product?filter=aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y&keyword=iphone&categoryID=aps&country=US&page=1",
//         "url": "https://amazon24.p.rapidapi.com/api/product?filter=aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y&keyword=" + inputQuery + "&categoryID=aps&country=US&page=1",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "2f95a127d2msh8c6f89e9207a19ep14c9b0jsnfacb4cc92019",
//             "x-rapidapi-host": "amazon24.p.rapidapi.com"
//         }
//     };

//     $.ajax(settings).done(function (response) {
//         console.log(response.docs[1].product_title);
//         //console.log(response.docs[0].product_main_image_url);
//         console.log(response.docs[1].product_detail_url);
//         console.log(response.docs[1].evaluate_rate);
//         console.log(response.docs[1].original_price);
//         //console.log(response.docs[0]);

//         // Saving the image_original_url property
//         var imageUrl = response.docs[1].product_main_image_url;

//         // Creating and storing an image tag
//         var itemImage = $("<img>");

//         var itemTitle = response.docs[1].product_title;

//         var itemRated = response.docs[1].evaluate_rate;

//         var itemPrice = response.docs[1].original_price;

//         var itemUrl = response.docs[1].product_detail_url;

//         var titleSection = $("<div>").text(itemTitle);

//         var ratedSection = $("<div>").text(itemRated);

//         var priceSection = $("<div>").text(itemPrice);

//         var urlSection = $("<a>").attr('href', itemUrl).text("view an amazon");

//         // Setting the catImage src attribute to imageUrl
//         itemImage.attr("src", imageUrl);
//         itemImage.attr("alt", itemTitle);

//         // Prepending the catImage to the images div
//         $("#listedItem").prepend(titleSection);
//         $("#listedItem").prepend(priceSection);
//         $("#listedItem").prepend(itemImage);
//         $("#listedItem").prepend(ratedSection);
//         $("#listedItem").prepend(urlSection);
//     });
// });