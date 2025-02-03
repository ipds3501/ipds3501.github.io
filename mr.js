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
        tahun: 2024
    },
    {
        nama: "Tim Statistik Sosial dan Desa Cantik",
        desc: "Manajamen Resiko Tim Statistik Sosial dan Desa Cinta Statistik.",
        ikon: "https://i.imgur.com/pQcPTVZ.png",
        url: "https://drive.google.com/drive/folders/1tJZAWGtKKyaCg6RuGItOgdDTpDmcFxvm?usp=sharing",
        tahun: 2025
    },
    {
        nama: "Tim Statistik Pertanian",
        desc: "Manajamen Resiko Tim Statistik Pertanian.",
        ikon: "https://i.imgur.com/JNzawxA.png",
        url: "https://drive.google.com/drive/folders/1eKUeLwfqp4WJ7AsPe9SYWO0VkoLRXQa5?usp=sharing",
        tahun: 2025
    },
    {
        nama: "Tim Statistik Distribusi",
        desc: "Manajamen Resiko Tim Statistik Distribusi.",
        ikon: "https://i.imgur.com/1YDC6H2.png",
        url: "https://drive.google.com/drive/folders/1XjVvLQGFAwbHeVp5vF_abKqjb4BPRwKq?usp=sharing",
        tahun: 2024
    },
    {
        nama: "Tim Neraca Regional dan Analisis & SDI - IPS",
        desc: "Manajamen Resiko Tim Neraca Regional dan Analisis serta Satu Data Indonesia dan Indeks Penilaian Statistik.",
        ikon: "https://i.imgur.com/X8Axr7e.png",
        url: "https://drive.google.com/drive/folders/1SjsGDlcx73GF643Ucl2TexwXAoR4whC4?usp=sharing",
        tahun: 2025
    },
    {
        nama: "Tim IPDS",
        desc: "Manajamen Resiko Tim IPDS.",
        ikon: "https://i.imgur.com/O6PMOys.png",
        url: "https://drive.google.com/drive/folders/1Zs2-KyuMiVAptPLiYdGtgiTIHjONwssZ?usp=sharing",
        tahun: 2025
    },
    {
        nama: "Tim Industri dan PEK",
        desc: "Manajamen Resiko Tim Industri dan Pertambangan, Energi dan Konstruksi.",
        ikon: "https://i.imgur.com/TKDVbp2.png",
        url: "https://drive.google.com/drive/folders/1axfERrjc6wEYyr5yDOs_MnnnT6OKK9d8?usp=sharing",
        tahun: 2024
    },
    {
        nama: "Tim Pojok Statistik dan PEKPPP",
        desc: "Manajamen Resiko Tim Pojok Statistik dan PEKPPP.",
        ikon: "https://i.imgur.com/PnqPjUo.png",
        url: "https://drive.google.com/drive/folders/1Un7GsxfueYCA5_28QCREEijC7DAAhv0t?usp=sharing",
        tahun: 2025
    },
    {
        nama: "Tim HUMAS",
        desc: "Manajamen Resiko Tim Hubungan Masyarakat.",
        ikon: "https://i.imgur.com/yoELOpw.jpeg",
        url: "https://drive.google.com/drive/folders/1FZQyQXIft7vkMwC7HrQaUixNZkgxoCh3?usp=sharing",
        tahun: 2024
    }
];

// Separate the list into two arrays based on the year
const mr_json_2024 = mr_json.filter(item => item.tahun === 2024);
const mr_json_2025 = mr_json.filter(item => item.tahun === 2025);

console.log("Data for 2024:", mr_json_2024);
console.log("Data for 2025:", mr_json_2025);
	
  			              //salin di bawah baris spasi ini 

// Untuk menambahkan tautan, salin kode berikut, hapus 2 garis miring dan tempelkan dibaris paling bawah dari kode diatas
			// ,{
			// 	nama: "nama aplikasi",
			// 	desc: "deskripsi aplikasi",
			// 	ikon: "ikon aplikasi",
			//  url: "tautan aplikasi"
			// }
