// Add event listener for Manajemen Resiko modal
$("#mr_box").click(function () {
    // Add year selection buttons above submenu_container
    $("#submenu_container").html(`
        <div class="d-flex justify-content-center mb-3">
            <button class="btn btn-primary m-2" onclick="loadMRSubmenu(2024)">2024</button>
            <button class="btn btn-success m-2" onclick="loadMRSubmenu(2025)">2025</button>
        </div>
    `);

    // Load default year (2024) data when the modal opens
    loadMRSubmenu(2024);
});

// Function to dynamically filter and display submenu items based on the year
function loadMRSubmenu(year) {
    // Clear the submenu container
    $("#submenu_container").html(`
        <div class="d-flex justify-content-center mb-3">
            <button class="btn btn-primary m-2" onclick="loadMRSubmenu(2024)">2024</button>
            <button class="btn btn-success m-2" onclick="loadMRSubmenu(2025)">2025</button>
        </div>
    `);

    // Filter the JSON data for the selected year
    let filteredData = mr_json.filter(item => item.year === year);

    // Append filtered items to the submenu
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

// Example JSON data for testing
const mr_json = [
    {
        nama: "Kepala BPS Kabupaten Pacitan",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1ocYrH_BkKabTLtkxJrhGvhC2RS5QOQQ1?usp=drive_link",
        ikon: "https://i.imgur.com/PLYhp4h.png",
        desc: "Manajemen Resiko Kepala BPS Kabupaten Pacitan."
    },
        {
        nama: "Kepala BPS Kabupaten Pacitan",
        year: 2025,
        url: "https://drive.google.com/drive/folders/1be7PkgHSuQtOO-sLvOhuhV5dv28r8wX7?usp=drive_link",
        ikon: "https://i.imgur.com/PLYhp4h.png",
        desc: "Manajemen Resiko Kepala BPS Kabupaten Pacitan."
    },
    {
	nama: "Sub Bagian Umum dan SAKIP",
    year: 2024,
	ikon: "https://i.imgur.com/3JYLvSh.png",
	url: "https://drive.google.com/drive/folders/171cbmiRS1Vp77icn5pFgred7o7kOJU4B?usp=sharing",
    desc: "Manajamen Resiko Kepala Sub Bagian Umum dan SAKIP."
	},
    {
	nama: "Tim Bagian Umum",
    year: 2025,
	ikon: "https://i.imgur.com/3JYLvSh.png",
	url: "https://drive.google.com/drive/folders/1txRGWYKPVOmYE7UpYmffhkOLVioRjav7?usp=sharing",
    desc: "Manajamen Resiko Kepala Tim Bagian Umum."
	},
    {
        nama: "Tim Statistik Sosial dan Desa Cantik",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1tJZAWGtKKyaCg6RuGItOgdDTpDmcFxvm?usp=sharing",
        ikon: "https://i.imgur.com/pQcPTVZ.png",
        desc: "Manajemen Resiko Tim Statistik Sosial dan Desa Cantik."
    },
    {
        nama: "Tim Statistik Sosial",
        year: 2025,
        url: "https://drive.google.com/drive/folders/1yvJJ3wdNXMgWMKsWG42JKYjRSpeeG7pm?usp=sharing",
        ikon: "https://i.imgur.com/pQcPTVZ.png",
        desc: "Manajemen Resiko Tim Statistik Sosial (Susenas, Sakerduk, Hansos dan Descan."
    },
    {
        nama: "Tim Statistik Pertanian",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1eKUeLwfqp4WJ7AsPe9SYWO0VkoLRXQa5?usp=sharing",
        ikon: "https://i.imgur.com/JNzawxA.png",
        desc: "Manajemen Resiko Tim Statistik Pertanian."
    },
    {
        nama: "Tim Statistik Produksi",
        year: 2025,
        url: "https://drive.google.com/drive/folders/1uXsiY7p6GIOhkiqu-aqHVmigdA4S-gG6?usp=sharing",
        ikon: "https://i.imgur.com/JNzawxA.png",
        desc: "Manajemen Resiko Tim Statistik Produksi (Pertanian, Industri & PEK) ."
    },
    {
        nama: "Tim Statistik Distribusi",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1XjVvLQGFAwbHeVp5vF_abKqjb4BPRwKq?usp=sharing",
        ikon: "https://i.imgur.com/1YDC6H2.png",
        desc: "Manajemen Resiko Tim Statistik Distribusi."
    },
    {
        nama: "Tim Statistik Distribusi",
        year: 2025,
        url: "https://drive.google.com/drive/folders/1JDRTEHWKeJkCpyEPa2oFboYwtXBaPcQl?usp=sharing",
        ikon: "https://i.imgur.com/1YDC6H2.png",
        desc: "Manajemen Resiko Tim Statistik Distribusi (Distribusi Jasa dan Harga)."
    },
    {
        nama: "Tim Neraca Regional dan Analisis & SDI - IPS",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1SjsGDlcx73GF643Ucl2TexwXAoR4whC4?usp=sharing",
        ikon: "https://i.imgur.com/X8Axr7e.png",
        desc: "Manajemen Resiko Tim Neraca Regional dan Analisis & SDI - IPS."
    },
    {
        nama: "Tim Nerwilis",
        year: 2025,
        url: "https://drive.google.com/drive/folders/1QrC-arzx0y-oNV2fxt2ix779N3eMiw8u?usp=sharing",
        ikon: "https://i.imgur.com/X8Axr7e.png",
        desc: "Manajemen Resiko Tim Nerwilis (Neraca Produksi, Konsumsi & Analisis)."
    },
    {
        nama: "Tim IPDS",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1Zs2-KyuMiVAptPLiYdGtgiTIHjONwssZ?usp=sharing",
        ikon: "https://i.imgur.com/O6PMOys.png",
        desc: "Manajamen Resiko Tim IPDS."
    },
    {
        nama: "Tim IPDS",
        year: 2025,
        url: "https://drive.google.com/drive/folders/1v7_DHNWYFYOWSJkRszw3zqE513hyH_bm?usp=sharing",
        ikon: "https://i.imgur.com/O6PMOys.png",
        desc: "Manajamen Resiko Tim IPDS ( Diseminasi, Pengolahan Data dan Jaringan)."
    },
    {
        nama: "Tim Industri dan PEK",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1axfERrjc6wEYyr5yDOs_MnnnT6OKK9d8?usp=sharing",
        ikon: "https://i.imgur.com/TKDVbp2.png",
        desc: "Manajamen Resiko Tim Industri dan PEK."
    },   
    {
        nama: "Tim Pojok Statistik dan PEKPPP",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1Un7GsxfueYCA5_28QCREEijC7DAAhv0t?usp=sharing",
        ikon: "https://i.imgur.com/PnqPjUo.png",
        desc: "Manajamen Resiko Tim Pojok Statistik dan PEKPPP."
    }, 
    {
        nama: "Tim Sakip, ZI dan EPSS",
        year: 2025,
        url: "https://drive.google.com/drive/folders/17_SPswQ930CJGWEJRYAEyIQkUDNIhJ1e?usp=sharing",
        ikon: "https://i.imgur.com/PnqPjUo.png",
        desc: "Manajamen Resiko Tim SAKIP, ZI dan EPSS."
    },
    {
        nama: "Tim HUMAS",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1FZQyQXIft7vkMwC7HrQaUixNZkgxoCh3?usp=sharing",
        ikon: "https://i.imgur.com/yoELOpw.jpeg",
        desc: "Manajamen Resiko Tim Hubungan Masyarakat."
    },
    {
        nama: "Tim HUMAS, Pojok Statistik dan PSS",
        year: 2025,
        url: "https://drive.google.com/drive/folders/1OSFnr0ROtz5QeHmdSqsjVGJ04JeiOQZy?usp=sharing",
        ikon: "https://drive.google.com/file/d/1XCI8D8Gm457EHRRVd1b37w2cjjbCpjG0/view?usp=sharing",
        desc: "Manajamen Resiko Tim Hubungan Masyarakat, Pojok Statistik dan PSS."
    }
];
