import worksheets from "../../data/worksheets.json"
import WorksheetCard from "../../components/WorksheetCard"

export default function Page() {

const weekendWorksheets = worksheets.filter(
w => w.category === "weekend"
)

return (

<div style={{ maxWidth:"1100px", margin:"60px auto", padding:"0 20px" }}>

<h1 style={{ fontSize:"40px", marginBottom:"10px" }}>
Little Weekend Explorers
</h1>

<p style={{ marginBottom:"40px", color:"#555" }}>
Free science & nature activities for curious kids.
New every Friday 🌱
</p>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
gap:"30px"
}}>

{weekendWorksheets.map(w => (
<WorksheetCard
key={w.slug}
slug={w.slug}
/>
))}

</div>

</div>

)
}
