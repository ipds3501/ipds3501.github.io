const mr_json = [ 
    {
        nama: "Kepala BPS Kabupaten Pacitan",
        desc: "Manajemen Resiko Kepala BPS Kabupaten Pacitan.",
        ikon: "https://i.imgur.com/PLYhp4h.png",
        url: "https://drive.google.com/drive/folders/1X96nchDLA9qJkNbnmK0oqelM7Ko4Oy6I?usp=sharing",
        tahun: 2024
    },
    {
        nama: "Sub Bagian Umum dan SAKIP",
        desc: "Manajamen Resiko Kepala Sub Bagian Umum dan SAKIP.",
        ikon: "https://i.imgur.com/3JYLvSh.png",
        url: "https://drive.google.com/drive/folders/171cbmiRS1Vp77icn5pFgred7o7kOJU4B?usp=sharing",
        tahun: 2025
    }
];

function generateMenu(tahun) {
    return mr_json.filter(item => item.tahun === tahun).map(item => `
        <div class="col">
            <a href="${item.url}" target="_blank">
                <div class="card shadow-sm text-center">
                    <div class="card-body p-2">
                        <img src="${item.ikon}" width="50">
                        <h5>${item.nama}</h5>
                        <p>${item.desc}</p>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

document.getElementById("menu2024").innerHTML = generateMenu(2024);
document.getElementById("menu2025").innerHTML = generateMenu(2025);
