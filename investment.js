
import { useState } from 'react'
import Link from 'next/link'
import Logo3D from '../components/Logo3D'

export default function Investment(){
  const [amount, setAmount] = useState(100000)
  const rate = 0.03 // monthly example
  const months = 12
  const total = (amount * Math.pow(1+rate, months/12)).toFixed(0)
  const monthly = ((total - amount)/months).toFixed(0)
  return (
    <div>
      <header className="container header">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:56,height:56,borderRadius:999,background:'white',display:'flex',alignItems:'center',justifyContent:'center'}}><Logo3D size={48} /></div>
          <div>
            <div style={{fontWeight:700}}>Agroco-Stocks</div>
            <div className="small">Investment</div>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <h2>Investment products</h2>
        <p className="small">Transparent investment options. Example returns shown for illustration only.</p>

        <div style={{marginTop:16}} className="grid">
          <div className="card">
            <h4>Short Term</h4>
            <div className="small">2.0% / month • 12–16 weeks</div>
            <p className="small">Working capital for seasonal crops.</p>
            <div style={{marginTop:10}}>Min: ₦50,000</div>
          </div>
          <div className="card">
            <h4>Balanced</h4>
            <div className="small">2.8% / month • 6–12 months</div>
            <p className="small">Input financing with insurance options.</p>
            <div style={{marginTop:10}}>Min: ₦100,000</div>
          </div>
          <div className="card">
            <h4>Growth</h4>
            <div className="small">3.5% / month • 12+ months</div>
            <p className="small">Processing & storage projects.</p>
            <div style={{marginTop:10}}>Min: ₦500,000</div>
          </div>
        </div>

        <div style={{marginTop:18}} className="card">
          <h4>Calculator</h4>
          <div style={{display:'flex',gap:10,alignItems:'center'}}>
            <input type="range" min="10000" max="5000000" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} style={{flex:1}} />
            <div style={{width:120,textAlign:'right',fontWeight:700}}>₦{amount.toLocaleString()}</div>
          </div>
          <div style={{marginTop:12,display:'flex',justifyContent:'space-between'}}>
            <div className="small">Projected monthly earnings</div>
            <div className="small">₦{monthly}</div>
          </div>
          <div style={{marginTop:6,display:'flex',justifyContent:'space-between'}}>
            <div className="small">Projected total (12m)</div>
            <div className="small">₦{total}</div>
          </div>
          <div style={{marginTop:12}}><Link href="/contact"><a className="btn">Start Investing</a></Link></div>
        </div>
      </main>
    </div>
  )
}
