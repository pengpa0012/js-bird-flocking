const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const SPEED = 5
const pos = []


function draw(x, y) {
  const rectWidth = 10
  const rectHeight = 2

  ctx.fillRect(x, y, rectWidth, rectHeight)
}

function generateLines() {
  for(let i = 0; i < 10; i++) {
    const newPos = {
      x: 0,
      y: Math.floor(Math.random() * canvas.height),
      direction: 1,
      speed: Math.floor(Math.random() * 10 + 1)
    }
    pos.push(newPos)
  }
}

generateLines()

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  pos.forEach(el => {
    // for moving left or right
    if (el.direction === 1) {
      el.x += el.speed
    } else {
      el.x -= el.speed
    }
  
    // setting direction
    if (el.x + 10 >= canvas.width) {
      el.direction = -1
    }
  
    if (el.x <= 0) {
      el.direction = 1 
    }

    draw(el.x, el.y)
  })
}

animate()
