
import Link from 'next/link'
import Logo3D from '../components/Logo3D'

export default function Home(){
  return (
    <div>
      <header className="container header">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:56,height:56,borderRadius:999,background:'white',display:'flex',alignItems:'center',justifyContent:'center'}}><Logo3D size={48} /></div>
          <div>
            <div style={{fontWeight:700}}>Agroco-Stocks</div>
            <div className="small">Enabling food-resilient communities</div>
          </div>
        </div>
        <nav className="nav">
          <Link href="/solutions">Solutions</Link>
          <Link href="/investment">Investment</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div style={{flex:1}}>
            <h1 style={{fontSize:28,margin:0}}>Building sustainable wealth through agriculture</h1>
            <p className="small" style={{marginTop:8}}>Agroco-Stocks connects investors with productive agricultural programs, using data-driven agronomy, aggregation and transparent investment products.</p>
            <div style={{marginTop:16}}>
              <Link href="/investment"><a className="btn">Start Investing</a></Link>
              <Link href="/solutions"><a style={{marginLeft:12}}>Explore Solutions</a></Link>
            </div>

            <div style={{marginTop:18}} className="grid">
              <div className="card small">
                <div style={{fontWeight:700}}>1,254</div>
                <div>Farmers onboarded</div>
              </div>
              <div className="card small">
                <div style={{fontWeight:700}}>2,310t</div>
                <div>Produce aggregated</div>
              </div>
              <div className="card small">
                <div style={{fontWeight:700}}>24%</div>
                <div>Avg yield uplift</div>
              </div>
            </div>
          </div>

          <div style={{width:360}}>
            <div className="card">
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                <div style={{width:64,height:64}}><Logo3D size={64} /></div>
                <div>
                  <div style={{fontWeight:700}}>Agroco Investors</div>
                  <div className="small">Secure, transparent returns</div>
                </div>
              </div>

              <div style={{marginTop:12}}>
                <div className="small">Quick calculator</div>
                <div style={{marginTop:8}}>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div className="small">Amount</div><div className="small">₦100,000</div>
                  </div>
                  <div style={{height:10,background:'#eee',borderRadius:8,marginTop:6}}><div style={{width:'40%',height:10,background:'#16a34a',borderRadius:8}}></div></div>
                </div>
                <div style={{marginTop:12}}><Link href="/investment"><a className="btn">Open Investment</a></Link></div>
              </div>
            </div>
          </div>
        </section>

        <section style={{marginTop:28}}>
          <h3>Why Agroco</h3>
          <p className="small">We combine farmer support, aggregation logistics and structured finance to reduce risk and deliver measurable returns.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="container card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <div style={{fontWeight:700}}>Agroco-Stocks</div>
            <div className="small">© {new Date().getFullYear()} Agroco-Stocks</div>
          </div>
          <div className="small">Privacy • Terms</div>
        </div>
      </footer>
    </div>
  )
}
