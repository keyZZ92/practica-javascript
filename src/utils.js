export function showContent(num, content) {
  document.getElementById("practice").innerHTML += `
    <div class="exercise">
      <h3 class="heading">Exercise ${num}</h3>
      <pre>${JSON.stringify(content, undefined, 2)}</pre>
    </div>
  `;
}
