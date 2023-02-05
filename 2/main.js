const aspect = 0.2
const width = 3840*aspect
const height = 2160*aspect

setup = () => {
  createCanvas(width, height, WEBGL)
  background(0)
}

floorMem = {}
const floor = n => {
  if (n > 5) { return }
  plane(.8,.8)

  [{x:1,y:0},{x:-1,y:0},{x:0,y:-1},{x:0,y:1}].forEach(({x,y}) => {
    push()
    translate(1,0,0)
    floor(n+1)
    pop()
  })
}

draw = () => {
  background(0)
  scale(50)
  rotate(PI/2 - PI/16, [1,0,0])

  push()
  strokeWeight(0)
  floor(0)
  pop()
}
