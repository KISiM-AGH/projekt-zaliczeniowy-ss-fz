const YTPlayer = require('yt-player')
const player = new YTPlayer('#player', opts.width(500), opts.height(500), opts.autoplay(true), opts.annotations(false) )

player.load('GKSRyLdjsPA')
player.setVolume(100)

player.on('playing', () => {
    console.log(player.getDuration()) // => 351.521
})