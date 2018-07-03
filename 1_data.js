// CONSTANTS

// players

const PLAYER =
      {
        img: null,
        src: 'assets/alien.png',
        size: 5, // in pixels
        scale: 0.3, // 0 to "infinite", 1 = 100%
        velocity:
        {
          x: 0,
          y: 0
        }, 
        restitution: 0.3, 
        gravity: 0.35
        // a higher number will make the sprite fall faster
      }

//  variables

var sprite = null

var width = 1000
var height = 500