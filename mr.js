mr_json = <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistik Submenu</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .submenu {
            margin: 20px 0;
        }
        .submenu h2 {
            cursor: pointer;
            color: blue;
        }
        .items {
            display: none;
            margin-left: 20px;
        }
        .item {
            margin: 10px 0;
        }
    </style>
</head>
<body>

    <div class="submenu">
        <h2 onclick="toggleItems('2024')">2024</h2>
        <div id="2024" class="items"></div>
    </div>

    <div class="submenu">
        <h2 onclick="toggleItems('2025')">2025</h2>
        <div id="2025" class="items"></div>
    </div>

    <script>
        const mr_json = {
            "2024": [
                {
                    nama: "Kepala BPS Kabupaten Pacitan",
                    desc: "Manajemen Resiko Kepala BPS Kabupaten Pacitan.",
                    ikon: "https://i.imgur.com/PLYhp4h.png",
                    url: "https://drive.google.com/drive/folders/1X96nchDLA9qJkNbnmK0oqelM7Ko4Oy6I?usp=sharing"
                },
                {
                    nama: "Sub Bagian Umum dan SAKIP",
                    desc: "Manajamen Resiko Kepala Sub Bagian Umum dan SAKIP.",
                    ikon: "https://i.imgur.com/3JYLvSh.png",
                    url: "https://drive.google.com/drive/folders/171cbmiRS1Vp77icn5pFgred7o7kOJU4B?usp=sharing"
                }
                // Add more items for 2024 as needed
            ],
            "2025": [
                {
                    nama: "Tim Statistik Sosial dan Desa Cantik",
                    desc: "Manajamen Resiko Tim Statistik Sosial dan Desa Cinta Statistik.",
                    ikon: "https://i.imgur.com/pQcPTVZ.png",
                    url: "https://drive.google.com/drive/folders/1tJZAWGtKKyaCg6RuGItOgdDTpDmcFxvm?usp=sharing"
                },
                {
                    nama: "Tim Statistik Pertanian",
                    desc: "Manajamen Resiko Tim Statistik Pertanian.",
                    ikon: "https://i.imgur.com/JNzawxA.png",
                    url: "https://drive.google.com/drive/folders/1eKUeLwfqp4WJ7AsPe9SYWO0VkoLRXQa5?usp=sharing"
                }
                // Add more items for 2025 as needed
            ]
        };

        function toggleItems(year) {
            const itemsDiv = document.getElementById(year);
            if (itemsDiv.style.display === "none" || itemsDiv.style.display === "") {
                itemsDiv.style.display = "block";
                itemsDiv.innerHTML = mr_json[year].map(item => `
                    <div class="item">
                        <img src="${item.ikon}" alt="${item.nama}" width="50" height="50">
                        <strong>${item.nama}</strong><br>
                        <p>${item.desc}</p>
                        <a href="${item.url}" target="_blank">Link</a>
                    </div>
                `).join('');
            } else {
                itemsDiv.style.display = "none";
            }
        }
    </script>

</body>
</html>
	
  			              //salin di bawah baris spasi ini 

// Untuk menambahkan tautan, salin kode berikut, hapus 2 garis miring dan tempelkan dibaris paling bawah dari kode diatas
			// ,{
			// 	nama: "nama aplikasi",
			// 	desc: "deskripsi aplikasi",
			// 	ikon: "ikon aplikasi",
			//  url: "tautan aplikasi"
			// }
