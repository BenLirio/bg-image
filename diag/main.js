const aspect = 0.5
const width = 3840*aspect
const height = 2160*aspect

setup = () => {
  createCanvas(width, height)
  background(0)
}

const N_LOCS = 1000

const newLoc = n => {
  return {
    x: width*(n/N_LOCS) + width/(N_LOCS*2),
    y: height*(n/N_LOCS) + height/(N_LOCS*2),
    r: 100,
    g: 100,
    b: 100,
    a: 10,
    s: 1,
  }
}

const range = n => Array.apply(null, Array(n))
const locs = range(N_LOCS).map((x,i) => i).map(newLoc)

const rand = () => Math.random() < 0.5 ? -3 : 3

draw = () => {
  locs.forEach(loc => {
    const {x,y,r,g,b,a,s} = loc
    push()
    strokeWeight(0)
    fill(color(r,g,b,a))
    circle(x,y,s)

    loc.x += rand()
    loc.y += rand()
    loc.r = (r+1)%255
    loc.g = (g+1)%255
    loc.b = (b+1)%255
    loc.s = min(10,max(s+rand(),1))
    pop()
  })
}
