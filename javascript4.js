function khoanh() {
      var anh = [
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTjmY-QBaVHf95vwQmnbOvL-5Na-KcKI6naINrOudorJkvxuB4-Ux1VAMOcu4ufIIpOZBdVrv2Qu7_ID5ugFaTND89qyXe5AgWx8FC8qr4",
        "https://media.istockphoto.com/id/1216347894/vi/anh/dau-go-island-halong-bay-sunset-cruise-vietnam.jpg?s=612x612&w=0&k=20&c=hMG1ATJkSMetnoFADF-1FwRgkmnhtEjQlJhgxU-e4Jg=",
        "https://media.istockphoto.com/id/827359312/vi/anh/to%C3%A0n-c%E1%BA%A3nh-th%C3%A0nh-ph%E1%BB%91-nha-trang-%E1%BB%9F-vi%E1%BB%87t-nam-t%E1%BB%AB-quan-%C4%91i%E1%BB%83m-m%C3%A1y-bay-kh%C3%B4ng-ng%C6%B0%E1%BB%9Di-l%C3%A1i.jpg?s=612x612&w=0&k=20&c=coljvNU4PTpoKVPfTfuNsHh6u9Xs36BI-o6Pmnhq55I=",
        "https://media.istockphoto.com/id/1510930956/vi/anh/ph%E1%BB%91-c%E1%BB%95-h%E1%BB%99i-an-v%C3%A0-s%C3%B4ng-thu-b%E1%BB%93n-l%C3%BAc-ho%C3%A0ng-h%C3%B4n-t%E1%BB%89nh-qu%E1%BA%A3ng-nam.jpg?s=612x612&w=0&k=20&c=hL8RwVjbm7GD43phjDW24HESgdt0t7Buk5y7Y8X11Z8=",
        "https://media.istockphoto.com/id/1438384588/vi/anh/nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-kh%C3%B4ng-th%C3%A1c-b%E1%BA%A3n-gi%C3%B4i-cao-b%E1%BA%B1ng-vi%E1%BB%87t-nam-th%C3%A1c-b%E1%BA%A3n-gi%E1%BB%91c-l%C3%A0-m%E1%BB%99t-trong-10-th%C3%A1c-n%C6%B0%E1%BB%9Bc-h%C3%A0ng.jpg?s=612x612&w=0&k=20&c=kT38dc8KgKk0181hojy5Lxj3Py8zCXL1YQxVYK-4MTI=",
        "https://media.istockphoto.com/id/1432518598/vi/anh/to%C3%A0n-c%E1%BA%A3nh-ho%C3%A0ng-th%C3%A0nh-hu%E1%BA%BF.jpg?s=612x612&w=0&k=20&c=-R0N3g5QZ9DBhdRrUuAHxbIIsobQ4oSsEAdYdHgZKfE="
      ];

      var randomImg =anh[Math.floor(Math.random() * anh.length)];
      var img = document.querySelector("#header_img");
      img.setAttribute("src", randomImg);
      img.setAttribute("alt", "Ảnh du lịch Việt Nam");
    }

    

function anhmonan() {
    var anh = [
        "Món ăn 1.jpg",
        "Món ăn 2.jpg",
        "Món ăn 3.jpg",
        "Món ăn 4.jpg",
        "Món ăn 5.jpg",
        "Món ăn 6.jpg",
        "Món ăn 7.jpg",
        "Món ăn 8.jpg",
        "Món ăn 9.jpg",
        "Món ăn 10.jpg",
        "Món ăn 11.jpg",
        "Món ăn 12.jpg"
    ];
    var currentImages = document.querySelectorAll(".anh123 img");
    for (var i = 0; i < currentImages.length; i++) {
        var randomImg = "Img/" + anh[Math.floor(Math.random() * anh.length)];
        currentImages[i].src = randomImg;
        currentImages [i].setAttribute("tabindex","0")
    }
}

