function generateRandomColorHex() {
  return "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
}

export default function Statistics({id, label, percentage}) {
    return (
        <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
  </ul>
</section>
    )
}

