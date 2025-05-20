export default function QnASection() {
    return (
      <div className="card">
        <QnAHeader />
        <QnAList />
        <QnAForm />
        <QnAFooter />
      </div>
    );
  }
  
  function QnAHeader() {
    return <h2>Pertanyaan dan Jawaban</h2>;
  }
  
  function QnAList() {
    return (
      <ul>
        <li>Pertanyaan 1: Apa itu React?</li>
        <li>Pertanyaan 2: Bagaimana cara menggunakan props?</li>
      </ul>
    );
  }
  
  function QnAForm() {
    return (
      <form>
        <input type="text" placeholder="Ajukan pertanyaan Anda" />
        <button type="submit">Kirim</button>
      </form>
    );
  }
  
  function QnAFooter() {
    return <small>© 2023 QnA Section</small>;
  }