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
        url: "https://drive.google.com/drive/folders/1rU1jpLN9h0C0l5RHhDRJI5ftoCPzc8hg?usp=sharing",
        ikon: "https://i.imgur.com/PLYhp4h.png",
        desc: "Manajemen Resiko Kepala BPS Kabupaten Pacitan."
    },
    {
        nama: "Tim Statistik Sosial dan Desa Cantik",
        year: 2024,
        url: "https://example.com/2024/2",
        ikon: "https://i.imgur.com/pQcPTVZ.png",
        desc: "Manajemen Resiko Tim Statistik Sosial dan Desa Cantik."
    },
    {
        nama: "Tim Statistik Pertanian",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1eKUeLwfqp4WJ7AsPe9SYWO0VkoLRXQa5?usp=sharing",
        ikon: "https://i.imgur.com/JNzawxA.png",
        desc: "Manajemen Resiko Tim Statistik Pertanian."
    },
    {
        nama: "Tim Statistik Distribusi",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1XjVvLQGFAwbHeVp5vF_abKqjb4BPRwKq?usp=sharing",
        ikon: "https://i.imgur.com/1YDC6H2.png",
        desc: "Manajemen Resiko Tim Statistik Distribusi."
    },
    {
        nama: "Tim Neraca Regional dan Analisis & SDI - IPS",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1SjsGDlcx73GF643Ucl2TexwXAoR4whC4?usp=sharing",
        ikon: "https://i.imgur.com/X8Axr7e.png",
        desc: "Manajemen Resiko Tim Neraca Regional dan Analisis & SDI - IPS."
    },
    {
        nama: "Tim IPDS",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1Zs2-KyuMiVAptPLiYdGtgiTIHjONwssZ?usp=sharing",
        ikon: "https://i.imgur.com/O6PMOys.png",
        desc: "Manajamen Resiko Tim IPDS."
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
        nama: "Tim HUMAS",
        year: 2024,
        url: "https://drive.google.com/drive/folders/1FZQyQXIft7vkMwC7HrQaUixNZkgxoCh3?usp=sharing",
        ikon: "https://i.imgur.com/yoELOpw.jpeg",
        desc: "Manajamen Resiko Tim Hubungan Masyarakat."
    }
];
