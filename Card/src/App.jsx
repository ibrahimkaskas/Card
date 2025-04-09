import React, { useState } from 'react'
import './App.css';

const App = () => {
  return (
    <Card/>
      
    
  )
}



const Card = () => {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("")

  const years = []

  for (let year = 2025; year <= 2040; year++) {
    years.push(year);
  }


  const bas = () => {
    if(name.trim() !== ""){
      alert(`Adınız: ${name}\nNumara: ${number}\nAy: ${month}\nYıl: ${year}\nGüvenlik Kodu: ${cvv}`)
    }
  }
  

  return <main>
    <div className='container'>
      <div className='baslik'>
        <h1>Ödeme Bilgileri</h1>
        <h4 className='baslik4'>Kredi kartı bilgilerinizi giriniz</h4>
      </div>
      
      <div className='govde'>
        <h4>Kart Üzerindeki İsim</h4>
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)}
          placeholder='İsim Giriniz'
        />

        <h4>Kart Numarası</h4>
        <input 
          type="text"
          onChange={(e) => setNumber(e.target.value)}
          placeholder='0000 0000 0000 0000'  
        />
      </div>

      <div className='alt'>
        <div>
          <h4>Ay</h4>
          <select className='altselect'  onChange={(e) => setMonth(e.target.value)} >
            <option value="Ocak">Ocak</option>
            <option value="Şubat">Şubat</option>
            <option value="Mart">Mart</option>
            <option value="Nisan">Nisan</option>
            <option value="Mayıs">Mayıs</option>
            <option value="Haziran">Haziran</option>
            <option value="Temmuz">Temmuz</option>
            <option value="Ağustos">Ağustos</option>
            <option value="Eylül">Eylül</option>
            <option value="Ekim">Ekim</option>
            <option value="Kasım">Kasım</option>
            <option value="Aralık">Aralık</option>
          </select>
        </div>

        <div>
          <h4>Yıl</h4>
            <select className='altselect' name="year" id="year-select" onChange={(e) => setYear(e.target.value)}>
              <option value="">Seçiniz</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
        </div>

        <div>
          <h4>Güvenlik Kodu</h4>
          <input 
            type="text" 
            onChange={(e) => setCvv(e.target.value)}
            placeholder='123'
            className='altselect'
          />
        </div>

      </div>

      <button onClick={bas}>Şimdi Öde</button>
    </div>
  </main>
}

export default App
