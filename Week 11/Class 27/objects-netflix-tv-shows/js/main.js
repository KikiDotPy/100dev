//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTvShows {
    constructor(tvShowTime, tvShowEpisodes, tvShowTitle, tvShowGenre) {
        this.time = tvShowTime
        this.numberOfEpisodes = tvShowEpisodes
        this.title = tvShowTitle
        this.genre = tvShowGenre
    }

    getTitle() {
        console.log(`Have a lovely time watching ${this.title}`)
    }

    play() {
        console.log('Show is about to start!')
    }

    stop() {
        console.log('Show stopped')
    }
}

const bridgerton = new MakeNetflixTvShows(60, 12, 'Bridgerton', 'Period Romantic Drama')