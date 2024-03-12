const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const SPEED = 5
const pos = {
  x: 0,
  y: Math.floor(Math.random() * canvas.height),
  direction: 1
}

function draw() {
  const rectWidth = 10
  const rectHeight = 2

  if (pos.direction === 1) {
    pos.x += SPEED
  } else {
    pos.x -= SPEED
  }

  if (pos.x + rectWidth >= canvas.width) {
    pos.direction = -1
  }

  if (pos.x <= 0) {
    pos.direction = 1 
  }

  ctx.fillRect(pos.x, pos.y, rectWidth, rectHeight)
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  draw()
}

animate()