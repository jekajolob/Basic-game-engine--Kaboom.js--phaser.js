console.log('Starting Kaboom...')

// Initialize Kaboom
kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [0, 0, 0, 1],
})

console.log('Kaboom initialized.')

// Load assets
loadSprite('player', 'https://kaboomjs.com/sprites/bean.png')
loadSprite('coin', 'https://kaboomjs.com/sprites/coin.png')

console.log('Assets loaded.')

// Define the main game scene
scene('main', () => {
  console.log('Entering main scene.')

  // Add a player character
  const player = add([
    sprite('player'),
    pos(100, 100),
    area(), // Add area component for collision detection
    body(), // Add body component for physics
  ])

  // Add a coin
  const coin = add([
    sprite('coin'),
    pos(200, 100),
    area(), // Add area component for collision detection
    'coin', // Add a tag for collision detection
  ])

  // Player movement
  onKeyDown('left', () => {
    player.move(-120, 0)
  })

  onKeyDown('right', () => {
    player.move(120, 0)
  })

  onKeyDown('up', () => {
    player.move(0, -120)
  })
  onKeyDown('down', () => {
    player.move(0, 120)
  })

  // Collision detection
  player.onCollide('coin', () => {
    destroy(coin)
    addKaboom(player.pos)
  })

  console.log('Main scene setup complete.')
})

// Start the main scene
go('main')

console.log('Game started.')
