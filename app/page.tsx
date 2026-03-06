"use client"

import { useState } from "react"
import WorksheetCard from "../components/WorksheetCard"
import worksheets from "../data/worksheets.json"

export default function Home() {

const [audience, setAudience] = useState<string | null>(null)
const [age, setAge] = useState<string | null>(null)

const filteredWorksheets = worksheets.filter(w => {
  if (audience && w.audience !== audience) return false
  if (age && w.age !== age) return false
  return true
})

  return (
    <main>

      {/* HERO SECTION */}

<section style={{
  maxWidth: "1100px",
  margin: "20px auto 40px auto",
  padding: "0 20px"
}}>

<img
  src="/banner/little-explorer-banner.png"
  alt="Little Explorer Worksheets"
  style={{
    width: "100%",
    height: "auto",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  }}
/>

</section>
      {/* CATEGORIES */}


<section style={{
  maxWidth: "1100px",
  margin: "70px auto",
  padding: "0 20px"
}}>

<h2 style={{
  fontSize: "30px",
  marginBottom: "20px"
}}>
Little Weekend Explorers
</h2>

<div style={{
  background: "#f0fdf4",
  borderRadius: "16px",
  padding: "35px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
}}>

<div>

<h3 style={{ fontSize: "22px", marginBottom: "8px" }}>
Free Weekend Activities
</h3>

<p style={{ color:"#555", maxWidth:"400px" }}>
New printable science and nature activities every Friday for curious kids.
</p>

</div>

<a
href="/little-weekend-explorers"
style={{
background:"#22c55e",
color:"white",
padding:"12px 22px",
borderRadius:"10px",
textDecoration:"none",
fontWeight:"600"
}}
>
Explore Free Activities
</a>

</div>

</section>



<section style={{
  maxWidth: "1100px",
  margin: "70px auto",
  padding: "0 20px"
}}>

<h2 style={{ marginBottom:"20px" }}>For Parents</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",
gap:"20px",
marginBottom:"50px"
}}>

<CategoryCard age="4–5 years" onClick={() => {setAudience("parents"); setAge("4-5")}} />
<CategoryCard age="6–7 years" onClick={() => {setAudience("parents"); setAge("6-7")}} />
<CategoryCard age="8–9 years" onClick={() => {setAudience("parents"); setAge("8-9")}} />

</div>
<h2 style={{ marginBottom:"20px" }}>For Teachers</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",
gap:"20px"
}}>

<CategoryCard age="4–5 years" onClick={() => {setAudience("teachers"); setAge("4-5")}} />
<CategoryCard age="6–7 years" onClick={() => {setAudience("teachers"); setAge("6-7")}} />
<CategoryCard age="8–9 years" onClick={() => {setAudience("teachers"); setAge("8-9")}} />

</div>
</section>

      {/* FEATURED WORKSHEETS */}

      <section style={{
        maxWidth: "1100px",
        margin: "60px auto",
        padding: "0 20px"
      }}>

        <h2 style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "30px"
        }}>
          Featured Worksheets
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: "30px"
        }}>

          {filteredWorksheets.slice(0,2).map(w => (
            <WorksheetCard
              key={w.slug}
              slug={w.slug}
              age={w.age}
              audience={w.audience}
            />
          ))}

        </div>

      </section>


      {/* ALL WORKSHEETS */}

      <section style={{
        maxWidth: "1100px",
        margin: "60px auto",
        padding: "0 20px"
      }}>

        <h2 style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "30px"
        }}>
          All Worksheets
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: "30px"
        }}>

          {worksheets.map(w => (
            <WorksheetCard
              key={w.slug}
              slug={w.slug}
              age={w.age}
              audience={w.audience}
            />
          ))}

        </div>

      </section>

    </main>
  )
}
function CategoryCard({ age, onClick }:{age:string,onClick:()=>void}) {

return (

<div
onClick={onClick}
style={{
background:"#ffffff",
borderRadius:"14px",
padding:"25px",
textAlign:"center",
fontWeight:"600",
fontSize:"18px",
boxShadow:"0 8px 20px rgba(0,0,0,0.06)",
cursor:"pointer",
transition:"all 0.15s ease"
}}
>

{age}

</div>

)

}
