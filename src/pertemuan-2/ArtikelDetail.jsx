export default function ArtikelDetail() {
    return (
        <div className="card">
        <ArtikelHeader />
        <ArtikelContent />
        <ArtikelFooter />
        <Spesifikasi />
      </div>
    );
  }
  
  function ArtikelHeader() {
    return (
        <div>
            <h2>Laptop Gaming Predator Helios AI, Ditenagai Prosesor Intel Core Ultra Terbaru dan GPU NVIDIA GeForce RTX 50</h2>
        </div>
    
    );
  }
  
  function ArtikelContent() {
    return(
        <div>
             <p>Acer resmi mengumumkan hadirnya jajaran laptop gaming Predator terbaru dengan peningkatan performa dan fitur yang signifikan, yakni Predator Helios 16 AI dan Predator Helios 18 AI. Acer juga telah memperluas portofolio laptop gaming Helios Neo dengan meluncurkan Predator Helios Neo 16S AI yang dilengkapi dengan desain sasis lebih ramping tanpa mengurangi performanya.
        Perangkat gaming Helios terbaru ini didukung oleh teknologi kipas pendingin 3D AeroBlade™ Generasi ke-6 yang sangat tipis dan memiliki sakelar mekanis MagKey 4.0. Kedua model laptop gaming tersebut juga menerima penyegaran desain berupa penambahan layar OLED dan Mini LED. Laptop gaming terbaru Predator yang dilengkapi sistem operasi Windows 11 ini juga dilengkapi dengan PC Game Pass selama tiga bulan. PC Game Pass dirancang untuk pemain PC bisa menikmati berbagai game-game terkini seperti Call of Duty: Black Ops 6, Indiana Jones and the Great Circle, Ara: History Untold, dan judul-judul game lain dari EA Play. 
    </p>
    <img src="yahya-app/public/img/images.jpg" alt="logo" />
        </div>
    );
    
    
  }

  function Spesifikasi() {
    return (
    <div> <h2>Spesifikasi Legkap</h2>
        <ul>
            <li>Type	Acer Predator Helio Neo 16 PHN16-72-50XB</li>
            <li>Grafis	Nvidia GeForce RTX4060 8 GB</li> 
            <li>RAM	8 GB DDR5</li> 
            <li>Penyimpanan	512 GB SSD NVMe Gen 4 PCIe</li> 
            <li>Ukuran Layar	16.0 Inch WQXGA(2560×1600), 400 Nits, 100% sRGB, 165 Hz</li> 
            <li>Sistem Operasi	Windows 11 + OHS</li> 
            <li>Warna	Black</li> 
        </ul> 
    </div>
    );
  }
  
  function ArtikelFooter() {
    return <small>Harga: Rp.18.000.000</small>;
  }
  
  