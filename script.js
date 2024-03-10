const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function drawCenteredRectangle() {
  const rectWidth = 150
  const rectHeight = 75
  const x = (canvas.width - rectWidth) / 2
  const y = (canvas.height - rectHeight) / 2

  ctx.fillRect(x, y, rectWidth, rectHeight)
}

drawCenteredRectangle()

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  drawCenteredRectangle()
})
