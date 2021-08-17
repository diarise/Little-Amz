$(function () {
    $("#progress").addClass("loader");
    // $("#listingDetailInfo").find('.btn-success').click(function (event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $("#sectionThree").offset().top
    //     }, 2000);
    // });
    $("#getItem").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#sectionOne").offset().top
        }, 2000);
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
                "x-rapidapi-key": "421a783636msh079ea725ac8fc37p139e85jsndd87f280c62b",
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
                var getItemPriceFromAzn = response.docs[i].app_sale_price;
                var itemPrice = parseFloat(getItemPriceFromAzn);
                var discountPrice = itemPrice - 5;
                var itemId = [i];
                var len = itemTitle.length;
                console.log(itemPrice);
                //console.log(itemId);
                if (len > 45) {
                    var trimTitle = itemTitle.substr(0, 44) + "...";
                } else {
                    var trimTitle = itemTitle;
                }
                itemWrapper += (

                    "<div id='" + itemId + "' class='col-12 col-md-6 col-lg-4 itemListedCard'>" +
                    "<div class='card border-light mb-4'>" +
                    "<div class='cardWrapper'>" +
                    "<img class='img-fluid card-img-top p-2 rounded-xl' src='" + imageUrl + "' alt=''>" +
                    "<h4 class='itemTittle'>" + trimTitle + "</h4>" +
                    "<div class='d-flex my-1'>" +
                    "<span class='badge badge-pill badge-primary'>" + itemRated + "</span>" +
                    "</div>" +
                    "</div>" +

                    "<div class='col pl-0 LitAmz d-none'>" + discountPrice + "</div>" +
                    "<div class='col pl-0 azmPrice d-none'>" + itemPrice + "</div>" +


                    "<div class='card-footer bg-soft border-top'>" +

                    "<button type='button' class='btn btn-success'>View detail</button>" +

                    "</div>" +
                    "</div>" +
                    "<div class='itemHidenTitle d-none'>" + itemTitle + "</div>" +
                    "<div class='itemHidenLink d-none'>" + itemUrl + "</div>" +
                    "</div>"

                );
            }
            $(itemWrapper).appendTo("#listedItem");
            $("#listedItem").addClass("showListing");



        });
        $(document).ajaxStop(function () {
            //console.log("finish loading");
            //$("#progress").hide();
            $("#progress").addClass("loader");

            $('.itemListedCard').each(function () {
                //$(".itemListedCard").click(function () {
                // display product detail here

                var getItemId = $(this).attr('id');
                var getItemHidenTitle = $(this).find('.itemHidenTitle').text();
                var getItemdiscountedPrice = $(this).find('.LitAmz').text();
                var getItemAznPrice = $(this).find('.azmPrice').text();
                var getItemImg = $(this).find('img').attr('src');
                var getItemLink = $(this).find('.itemHidenLink').text();
                var priceConvertorMx = (getItemdiscountedPrice * 19.88).toFixed(2);
                var priceConvertorCd = (getItemdiscountedPrice * 1.25).toFixed(2);
                $(this).find('.btn-success').click(function () {
                    $('html, body').animate({
                        scrollTop: $("#sectionTwo").offset().top
                    }, 2000);
                    var itemDetailWrapper = "";
                    var itemDetailInfoWrapper = "";
                    itemDetailWrapper += (
                        "<img class='img-fluid card-img-top p-2 rounded-xl' src='" + getItemImg + "' alt=''>"
                    );
                    itemDetailInfoWrapper += (
                        //"<img class='img-fluid card-img-top p-2 rounded-xl' src='" + getItemImg + "' alt=''>"
                        "<div class='h5 mt-3 mb-4'>" + getItemHidenTitle + "</div>" +
                        "<div class='card mb-0'>" +
                        "<div class='card-body text-center px-0 px-md-3'>" +
                        "<div class='icon icon-secondary'>" +
                        // "<i class='fa fa-amazon' aria-hidden='true'></i>" +
                        "<span class='h5 mt-3 mb-0'> our Price</span>" +
                        "</div>" +
                        "<span class='text-muted h6 font-weight-normal mb-0'><button type='button' class='btn btn-success'>" + getItemdiscountedPrice + "</button></span>" +
                        "</div>" +
                        "</div>" +


                        "<div class='card mb-0 border-left'>" +
                        "<div class='card-body text-center px-0 px-md-3'>" +
                        "<div class='icon icon-secondary'>" +
                        "<i class='fa fa-amazon' aria-hidden='true'></i>" +
                        "<span class='h5 mt-3 mb-0'> Price</span>" +
                        "</div>" +
                        "<span class='text-muted h6 font-weight-normal mb-0'>" + getItemAznPrice + "</span>" +
                        "</div>" +
                        "</div>" +
                        "<hr>" +

                        "<div class='h5 mt-3 mb-4 mt-3' style='width: 100%;'>Price convertor</div>" +
                        "<div style='width: 100%;'>" +
                        "<button id='showMx' type='button' class='btn btn-light'>Mexican Peso: " +
                        "<span class='h5 mt-3 mb-0 d-none'> $ " + priceConvertorMx + " MXN</span>" +
                        "</button>" +
                        "</div>" +

                        "<div class='mt-3' style='width: 100%;'>" +
                        "<button id='showCd' type='button' class='btn btn-light'>Canadian dollar: " +
                        "<span class='h5 mt-3 mb-0 d-none'> $ " + priceConvertorCd + " CA$</span>" +
                        "</button>" +
                        "<div class='mt-3' style='width: 100%;'><a href='" + getItemLink + "' target='_blank'><i class='fa fa-amazon' aria-hidden='true'></i> View item on Amazon</a></div>" +
                        "<button id='getMap' type='button' class='btn btn-light mt-3'>See the shipping route and milage</button>" +
                        "</div>"
                        // "<button type='button' class='btn btn-light'>" + getItemdiscountedPrice + "</button>"
                    );



                    $(itemDetailWrapper).appendTo("#itemDteailImg");
                    $(itemDetailInfoWrapper).appendTo("#listingDetailInfo");

                    $("#showMx").click(function () {
                        // console.log("test");
                        $(this).find("span").removeClass("d-none");

                    });
                    $("#showCd").click(function () {
                        // console.log("test");
                        $(this).find("span").removeClass("d-none");

                    });

                });
                // $("#itemDteailImg").empty(); 

            });

        });




        $("#listedItem").empty();



    });



});