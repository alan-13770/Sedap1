export default function TeamMembers() {
    return (
      <div className="card">
        <TeamHeader />
        <TeamList />
        <TeamFooter />
      </div>
    );
  }
  
  function TeamHeader() {
    return <h2>Anggota Tim Kami</h2>;
  }
  
  function TeamList() {
    return (
      <ul>
        <li>
          <strong>Little Brother</strong> - Frontend
          <br /><img src="img/dante.jpg" alt="" style={{ width: "150px", height: "150px", objectFit: "cover" }}/> 
        </li>
        <li>
          <strong>Big Brother</strong> - Backend
          <br /><img src="img/vergil.png" alt="" style={{ width: "150px", height: "100px", objectFit: "cover" }}/>
        </li>
      </ul>
    );
  }
  
  function TeamFooter() {
    return <small>© 2023 Tim Kami</small>;
  }