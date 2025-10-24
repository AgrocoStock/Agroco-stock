
import { useState } from 'react'
import Logo3D from '../components/Logo3D'

export default function Contact(){
  const [sent, setSent] = useState(false)
  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    await fetch('/api/contact', {method:'POST', body: form})
    setSent(true)
  }
  return (
    <div>
      <header className="container header">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:56,height:56,borderRadius:999,background:'white',display:'flex',alignItems:'center',justifyContent:'center'}}><Logo3D size={48} /></div>
          <div>
            <div style={{fontWeight:700}}>Agroco-Stocks</div>
            <div className="small">Contact</div>
          </div>
        </div>
      </header>

      <main className="container">
        <h2>Contact us</h2>
        <p className="small">Fill the form and we'll get back to you.</p>

        <div style={{marginTop:16,display:'grid',gridTemplateColumns:'1fr',gap:12}}>
          <form onSubmit={handleSubmit} className="card">
            <label className="small">Name</label>
            <input name="name" required className="small" style={{width:'100%',padding:10,marginTop:6,borderRadius:8}} />
            <label className="small" style={{marginTop:8}}>Email</label>
            <input name="email" type="email" required className="small" style={{width:'100%',padding:10,marginTop:6,borderRadius:8}} />
            <label className="small" style={{marginTop:8}}>Message</label>
            <textarea name="message" required style={{width:'100%',padding:10,marginTop:6,borderRadius:8}} rows={5}></textarea>
            <div style={{marginTop:10}}>
              <button className="btn" type="submit">Send message</button>
            </div>
            {sent && <div style={{marginTop:10,color:'green'}}>Message sent — thank you!</div>}
          </form>
        </div>
      </main>
    </div>
  )
}
