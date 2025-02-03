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
        url: "https://example.com/2024/1",
        ikon: "https://via.placeholder.com/50",
        desc: "Manajemen Resiko Kepala BPS Kabupaten Pacitan."
    },
    {
        nama: "Tim Statistik Sosial dan Desa Cantik",
        year: 2024,
        url: "https://example.com/2024/2",
        ikon: "https://via.placeholder.com/50",
        desc: "Manajemen Resiko Tim Statistik Sosial dan Desa Cantik."
    },
    {
        nama: "Tim Statistik Pertanian",
        year: 2025,
        url: "https://example.com/2025/1",
        ikon: "https://via.placeholder.com/50",
        desc: "Manajemen Resiko Tim Statistik Pertanian."
    }
];
