import "./index.css";

export function App() {
  return (
    <div className="app">
      <h1 className="h600">At Vercel, we've developed Geist, a <span className="pixel">typeface</span> specifically designed for developers and designers. We began by creating a monospace version that prioritized readability and seamlessly integrated into coding environments.
After perfecting the monospace variant, we expanded Geist into a Sans and Pixel version, adding versatility to its capabilities.</h1>
      <h2 className="h500">We connect people to the outdoors</h2>
      <h3 className="h200">We connect people to the outdoors</h3>
      <p>
        Edit <code>This is geist pixel thank you</code> and save to test HMR
      </p>
      <h2>denali color ramps</h2>
      <div className="Hstack">
        <button className="btn accent">Button</button>
        <button className="btn primary">Button</button>
        <button className="btn secondary">Button</button>
        <button className="btn tertiary">Button</button>
      </div>
      <hr/>
      <div className="Hstack blue">
        <div className="chip l50">50</div>
        <div className="chip l100">100</div>
        <div className="chip l200">200</div>
        <div className="chip l300">300</div>
        <div className="chip l400">400</div>
        <div className="chip l500">500</div>
        <div className="chip l600">600</div>
        <div className="chip l700">700</div>
        <div className="chip l800">800</div>
        <div className="chip l900">900</div>
      </div>
    </div>
  );
}

export default App;
