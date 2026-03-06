export default function Worksheets() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
        Worksheets
      </h1>

      <ul style={{ marginTop: "20px" }}>
        <li>
          <a href="/worksheets/bees-worksheet.pdf">
            Bees Worksheet
          </a>
        </li>

        <li>
          <a href="/worksheets/young-explorer-sheets.pdf">
            Young Explorer Sheets
          </a>
        </li>
      </ul>
    </div>
  );
}
