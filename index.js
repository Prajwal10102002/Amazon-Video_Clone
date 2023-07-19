var favChannels = [
    { img_url: "./img/1.jpg" },
    { img_url: "./img/2.jpg" },
    { img_url: "./img/3.jpg" },
    { img_url: "./img/4.jpg" },
    { img_url: "./img/5.jpg" },
    { img_url: "./img/6.png" },
    { img_url: "./img/7.png" },
    { img_url: "./img/8.jpg" },
    { img_url: "./img/9.jpg" },
    { img_url: "./img/10.png" },
    { img_url: "./img/11.png" },
    { img_url: "./img/12.png" }
];

favChannels.map(function (elem) {
    var div = document.createElement('div')
    div.setAttribute("class", "channelDiv")

    var image = document.createElement("img");
    image.setAttribute("src", elem.img_url);

    div.append(image);
    document.querySelector(".channelBtn").append(div);
})

localStorage.setItem("favChannels",JSON.stringify(favChannels));