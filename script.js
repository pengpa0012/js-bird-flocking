const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const SPEED = 5
const pos = {
  x: 0,
  y: 100
}

function draw() {
  const rectWidth = 10
  const rectHeight = 2
  pos.x += SPEED
  ctx.fillRect(pos.x, pos.y, rectWidth, rectHeight)
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  draw()
}

animate()