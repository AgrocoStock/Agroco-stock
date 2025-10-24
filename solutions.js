
import Link from 'next/link'
import Logo3D from '../components/Logo3D'

export default function Solutions(){
  return (
    <div>
      <header className="container header">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:56,height:56,borderRadius:999,background:'white',display:'flex',alignItems:'center',justifyContent:'center'}}><Logo3D size={48} /></div>
          <div>
            <div style={{fontWeight:700}}>Agroco-Stocks</div>
            <div className="small">Our Solutions</div>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/investment">Investment</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <h2>Solutions</h2>
        <p className="small">A modular approach across the value chain — designed to reduce risk, unlock farmer incomes and create investible agricultural assets.</p>

        <div style={{marginTop:16}} className="grid">
          <div className="card">
            <h4>Data & Agronomy</h4>
            <p className="small">Field-level advice, satellite-backed monitoring and predictive models to maximize yield and lower input waste.</p>
          </div>
          <div className="card">
            <h4>Aggregation & Logistics</h4>
            <p className="small">Local aggregation hubs, cold-chain partnerships and efficient routes to ensure quality and lower post-harvest loss.</p>
          </div>
          <div className="card">
            <h4>Farmer Partnerships</h4>
            <p className="small">Transparent contracts, training programs and access to inputs and credit for smallholder farmers.</p>
          </div>
          <div className="card">
            <h4>Market & Finance</h4>
            <p className="small">Structured offtake agreements, price risk management and investment products that fund the value chain.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
