export default function ListProduct() {
    return (
      <div className="card"> 
        <ProductFilter />
        <ProductGrid />
        <ProductPagination />
        <ProductSort />
      </div>
    );
  }
  
  function ProductFilter() {
    return (
      <div>
        <h3>List Produk</h3>
        <select>
          <option value="all">Semua</option>
          <option value="electronic">Elektronik</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>
    );
  }
  
  function ProductGrid() {
    return (
      <div>
        <h3>Daftar Produk</h3>
        <ul>
          <li>Handphone
            <br /><img src="img/images.jpg" alt="" />
          </li>
          <li>Laptop
          <br /><img src="img/laptop.jpg" alt="" style={{ width: "150px", height: "100px", objectFit: "cover" }}/>
          </li>
          <li>Fashion
          <br /><img src="img/fashion.png" alt="" style={{ width: "150px", height: "100px", objectFit: "cover" }}/>
          </li>
        </ul>
      </div>
    );
  }
  
  function ProductPagination() {
    return (
      <div>
        <button>Sebelumnya</button>
        <span>Halaman 1</span>
        <button>Selanjutnya</button>
      </div>
    );
  }
  
  function ProductSort() {
    return (
      <div>
        <h3>Urutkan Berdasarkan</h3>
        <select>
          <option value="latest">Terbaru</option>
          <option value="price-low">Harga Terendah</option>
          <option value="price-high">Harga Tertinggi</option>
        </select>
      </div>
    );
  }