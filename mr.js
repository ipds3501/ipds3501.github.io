const mr_json = [
    {
        nama: "Kepala BPS Kabupaten Pacitan",
        desc: "Manajemen Resiko Kepala BPS Kabupaten Pacitan.",
        ikon: "https://i.imgur.com/PLYhp4h.png",
        url: "https://drive.google.com/drive/folders/1X96nchDLA9qJkNbnmK0oqelM7Ko4Oy6I?usp=sharing",
        year: 2024
    },
    {
        nama: "Sub Bagian Umum dan SAKIP",
        desc: "Manajemen Resiko Kepala Sub Bagian Umum dan SAKIP.",
        ikon: "https://i.imgur.com/3JYLvSh.png",
        url: "https://drive.google.com/drive/folders/171cbmiRS1Vp77icn5pFgred7o7kOJU4B?usp=sharing",
        year: 2025
    },
    {
        nama: "Tim Statistik Sosial dan Desa Cantik",
        desc: "Manajemen Resiko Tim Statistik Sosial dan Desa Cinta Statistik.",
        ikon: "https://i.imgur.com/pQcPTVZ.png",
        url: "https://drive.google.com/drive/folders/1tJZAWGtKKyaCg6RuGItOgdDTpDmcFxvm?usp=sharing",
        year: 2024
    },
    {
        nama: "Tim Statistik Pertanian",
        desc: "Manajemen Resiko Tim Statistik Pertanian.",
        ikon: "https://i.imgur.com/JNzawxA.png",
        url: "https://drive.google.com/drive/folders/1eKUeLwfqp4WJ7AsPe9SYWO0VkoLRXQa5?usp=sharing",
        year: 2025
    }
];

// Function to filter and display data by year
function loadMRSubmenu(year) {
    $("#submenu_container").html(''); // Clear previous submenu items

    let filteredData = mr_json.filter(item => item.year === year);

    filteredData.forEach(item => {
        $("#submenu_container").append(`
            <a class="col p-0 m-0 text-dark" target="_blank" href="${item.url}">
                <div class="box p-1">
                    <div class="our-services border border-secondary" style="min-height:150px">
                        <div class="iconm bg-light w-75 d-flex align-items-center justify-content-center" style="min-height:50px">
                            <img id="icon_apl" src="${item.ikon}" class="oversize p-1">
                        </div>
                        <p class="fw-light mt-2" id="desc_apl" style="font-size: 16px;">
                            <strong class="h6">${item.nama}, </strong>${item.desc}
                        </p>
                    </div>
                </div>
            </a>
        `);
    });
}

// Export for use in index.html
if (typeof module !== 'undefined') {
    module.exports = mr_json;
}
