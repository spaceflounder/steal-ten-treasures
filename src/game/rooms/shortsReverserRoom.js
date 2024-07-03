
Game.rooms.shortsReverserRoom = () => {
  header(`Shorts Reverser Room`)

  desc(`This is a very important room, though it's not entirely clear what for. A large button is set into the wall with the words 
  “Shorts Reverser” on it.`)

  setExitsHeader(["right"])

  cmd(
    ["left", "up", "down"],
    [
      `walk into wall`,
      `BONK! Thanks, that was helpful.`,
    ]
  )
  cmd(['x', 'r'], ['read button', `The button says “Shorts Reverser” on it.`])
  cmd('s', ['sniff air', `It smells vaguely of shorts, only backwards.`])
  cmd('f', ['feel button', `The button feels pretty good.`])
  cmd('l', ['lick button', `They cover it in yucky stuff to keep kids from eating it.`])
  cmd('p', ['push button', () => {

    const names = [
      ['Mr. Roger', 'he\’s'],
      ['Mrs. Edna', 'she\’s'],
      ['Mr. Frank', 'he\’s'],
      ['Mrs. Thelma', 'she\’s'],
      ['Mr. Ronald', 'he\’s'],
      ['Mrs. Ronda', 'she\’s'],
      ['Mr. Quentin', 'he\’s'],
      ['Mrs. Theresa', 'she\’s'],
      ['Mr. Alexander', 'he\’s'],
      ['Mrs. Wilma', 'she\’s'],
      ['Mr. Morris', 'he\’s'],
      ['Mr. Betsy', 'she\’s'],
      ['Mr. Mervyn', 'he\’s'],
      ['Mrs. Agatha', 'she\’s'],
    ];

    const mid = [
      'R.',
      'E.',
      'T.',
      'Z.',
      'F.',
      'V.',
      'B.',
      'N.',
      'M.',
    ];

    const last = [
      'Tortoise',
      'Bleakley',
      'Snelling',
      'Winston',
      'Dorminder',
      'Flores',
      'Wellington',
      'Underton',
      'Beavis',
      'Clay',
    ];


    const city = [
      'Cleveland, Ohio',
      'Muncie, Indiana',
      'Portland, Maine',
      'Bakersfield, California',
      'Portsmouth, Pennsylvania',
      'Gary, Illinois',
      'Fort Wayne, Texas',
      'Drain, Oregon',
      'Pewterville, Maryland',
      'Los Cerritos, New Mexico',
      'Springfield, Ohio',
      'Orem, Utah',
    ]

    const pair = pick(names);

    msg(`You press the button, and a ${pair[0]} ${pick(mid)} ${pick(last)} of ${pick(city)}, finds the shorts ${pair[1]} wearing mysteriously flipped backwards.`)
  }])


  cmd("right", [`leave the shorts reverser room`, () => go("dragonCave")])
}




