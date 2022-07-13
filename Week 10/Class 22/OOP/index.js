function StopWatch() {
    let startTime, endTime, running, duration = 0

    this.start = function() {
        if (running) {
            return "Already started!"
        }
        running = true

        startTime = Date.now()
    }

    this.end = function() {
        if (!running) {
            return "Watch not started"
        }

        running = false

        endTime = Date.now()
        duration += endTime - startTime
    }

    this.callDuration = function() {
        console.log(duration)
    }

    this.reset = function() {
        running = false
        duration = 0
        starTime = null
        endTime = null
    }
}

