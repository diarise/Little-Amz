$(function () {
    $("#progress").addClass("loader");
    $("#getItem").click(function (event) {
        event.preventDefault();
        var inputQuery = $("#itemInput").val();
        console.log(inputQuery);
        var settings = {
            "async": true,
            "crossDomain": true,
            //"url": "https://amazon24.p.rapidapi.com/api/product?filter=aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y&keyword=iphone&categoryID=aps&country=US&page=1",
            "url": "https://amazon24.p.rapidapi.com/api/product?filter=aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y&keyword=" + inputQuery + "&categoryID=aps&country=US&page=1",
            "method": "GET",
            // "data": {
            //     cnt: "4"
            // },
            "headers": {
                "x-rapidapi-key": "2f95a127d2msh8c6f89e9207a19ep14c9b0jsnfacb4cc92019",
                "x-rapidapi-host": "amazon24.p.rapidapi.com"
            }
        };
        $(document).ajaxStart(function () {
            //console.log("loading");
            //$("#progress").show();
            $("#progress").removeClass("loader");
        });
        $.ajax(settings).done(function (response) {
            console.log(response);
            var itemWrapper = "";
            var itemTitle = "";
            for (var i = 0; i < 6; i++) {
                var itemTitle = response.docs[i].product_title;
                var itemRated = response.docs[i].evaluate_rate;
                var imageUrl = response.docs[i].product_main_image_url;
                var itemUrl = response.docs[i].product_detail_url;
                var itemPrice = response.docs[i].app_sale_price;
                var discountPrice = itemPrice - 5;

                var len = itemTitle.length;

                if (len > 45) {
                    var trimTitle = itemTitle.substr(0, 44) + "...";
                } else {
                    var trimTitle = itemTitle;
                }
                itemWrapper += (
                    // "<div class='col'>" +
                    // "<div class='card mr-3 ml-3' style='width: 18rem;'>" +
                    // "<div class='card-body'>" +
                    // "<h5 class='card-title'>" +
                    // trimTitle +
                    // "</h5>" +
                    // "<img class='img-fluid' src='" + imageUrl + "' alt=''>" +
                    // "<h6 class='card-subtitle mb-4'>Ratings: " + itemRated + "</h6>" +
                    // "<button type='button' class='btn btn-warning'>Amz $" + itemPrice + "</button>" +
                    // "<button type='button' class='btn btn-success'>LitAmz $" + discountPrice + "</button>" +
                    // "<a href='" + itemUrl + "' target='_blank'><button type='button' class='btn btn-link'><i class='fa fa-amazon' aria-hidden='true'></i></button></a>" +
                    // "</div>" +
                    // "</div>" +
                    // "</div>"
                    "<div class='col-12 col-md-6 col-lg-4'>" +
                    "<div class='card border-light mb-4'>" +
                    "<div class='cardWrapper'>" +
                    "<img class='img-fluid card-img-top p-2 rounded-xl' src='" + imageUrl + "' alt=''>" +
                    "<h4 class='itemTittle'>" + trimTitle + "</h4>" +
                    "<div class='d-flex my-1'>" +
                    "<span class='badge badge-pill badge-primary'>" + itemRated + "</span>" +
                    "</div>" +
                    "</div>" +
                    // "<div class='card-footer bg-soft border-top'>" +
                    // "<div class='d-flex justify-content-between'>" +
                    // "<div class='col pl-0'>LitAmz $" + discountPrice + "</div>" +
                    // // "<div class='col pl-0'>" +

                    // "<div class='col pl-0'><a href='" + itemUrl + "' target='_blank'><i class='fa fa-amazon' aria-hidden='true'></i></a> " + itemPrice + "</div>" +
                    // // "</div>" +
                    // "</div>" +
                    // "</div>" +
                    "<div class='card-footer bg-soft border-top'>" +
                    // "<div class='col'>" +
                    "<button type='button' class='btn btn-success'>View detail</button>" +
                    // "</div>" +
                    // "<div class='col'>" +
                    // "<button type='button' class='btn btn-warning'>LitAmz $" + discountPrice + "</button>" +
                    // "</div>" +
                    // "<div class='col pr-0'>" +
                    // "<button type='button' class='btn btn-success'>LitAmz $" + discountPrice + "</button>" +
                    // "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
                );
            }
            $(itemWrapper).appendTo("#listedItem");
            $("#listedItem").addClass("showListing");

            // console.log(response);
            // console.log(response.docs[1].product_title);
            // //console.log(response.docs[0].product_main_image_url);
            // console.log(response.docs[1].product_detail_url);
            // console.log(response.docs[1].evaluate_rate);
            // console.log(response.docs[1].original_price);
            //console.log(response.docs[0]);

            // // Saving the image_original_url property
            // var imageUrl = response.docs[1].product_main_image_url;

            // // Creating and storing an image tag
            // var itemImage = $("<img>");

            // var itemTitle = response.docs[1].product_title;

            // var itemRated = response.docs[1].evaluate_rate;

            // var itemPrice = response.docs[1].original_price;

            // var itemUrl = response.docs[1].product_detail_url;

            // var titleSection = $("<div>").text(itemTitle);

            // var ratedSection = $("<div>").text(itemRated);

            // var priceSection = $("<div>").text(itemPrice);

            // var urlSection = $("<a>").attr('href', itemUrl).text("view an amazon");

            // // Setting the catImage src attribute to imageUrl
            // itemImage.attr("src", imageUrl);
            // itemImage.attr("alt", itemTitle);

            // // Prepending the catImage to the images div
            // $("#listedItem").prepend(titleSection);
            // $("#listedItem").prepend(priceSection);
            // $("#listedItem").prepend(itemImage);
            // $("#listedItem").prepend(ratedSection);
            // $("#listedItem").prepend(urlSection);

        });
        $(document).ajaxStop(function () {
            //console.log("finish loading");
            //$("#progress").hide();
            $("#progress").addClass("loader");
        });

        $("#listedItem").empty();
    });



    // currency convertor

    // // set endpoint and your API key
    // endpoint = 'convert';
    // access_key = '43816bf8e5f9d14477f96eb6ea52e1f9';

    // // define from currency, to currency, and amount
    // from = 'EUR';
    // to = 'GBP';
    // amount = '10';

    // symbols = 'CAD';

    // // execute the conversion using the "convert" endpoint:
    // $.ajax({
    //     //url: 'https://data.fixer.io/api/' + endpoint + '?access_key=' + access_key + '&from=' + from + '&to=' + to + '&amount=' + amount,
    //     url: 'https://data.fixer.io/api/latest?access_key=' + access_key + '&symbols=' + symbols,
    //     dataType: 'jsonp',
    //     success: function (json) {

    //         // access the conversion result in json.result
    //         console.log(json)
    //         //alert(json.result);

    //     }
    // });




    // 



});