$("#mr_2024_box").click(function(){
    $("#exampleModalLabel").text("Manajemen Resiko 2024");
    $("#submenu_container").html('');
    $("#add_btn").attr("href", "https://github.com/ipds3501/ipds3501.github.io/blob/master/mr.js");

    for (var i = 0; i <= mr_dict.length - 1; i++) {
        if (mr_dict[i].tahun === 2024) {
            $("#submenu_container").append(`
                <a class="col p-0 m-0 text-dark" target="_blank" href="${mr_dict[i].url}">
                    <div class="box p-1">
                        <div class="our-services border border-secondary">
                            <div class="iconm bg-light w-75 d-flex align-items-center justify-content-center">
                                <img id="icon_apl" src="${mr_dict[i].ikon}" class="oversize p-1">
                            </div>
                            <p class="fw-light mt-2" id="desc_apl">
                                <strong class="h6">${mr_dict[i].nama}</strong><br>${mr_dict[i].desc}
                            </p>
                        </div>
                    </div>
                </a>
            `);
        }
    }
});

$("#mr_2025_box").click(function(){
    $("#exampleModalLabel").text("Manajemen Resiko 2025");
    $("#submenu_container").html('');
    $("#add_btn").attr("href", "https://github.com/ipds3501/ipds3501.github.io/blob/master/mr.js");

    for (var i = 0; i <= mr_dict.length - 1; i++) {
        if (mr_dict[i].tahun === 2025) {
            $("#submenu_container").append(`
                <a class="col p-0 m-0 text-dark" target="_blank" href="${mr_dict[i].url}">
                    <div class="box p-1">
                        <div class="our-services border border-secondary">
                            <div class="iconm bg-light w-75 d-flex align-items-center justify-content-center">
                                <img id="icon_apl" src="${mr_dict[i].ikon}" class="oversize p-1">
                            </div>
                            <p class="fw-light mt-2" id="desc_apl">
                                <strong class="h6">${mr_dict[i].nama}</strong><br>${mr_dict[i].desc}
                            </p>
                        </div>
                    </div>
                </a>
            `);
        }
    }
});
