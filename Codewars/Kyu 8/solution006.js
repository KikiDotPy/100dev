function updateLight(current) {
  
    //your code here!
    const lights = ['green', 'yellow', 'red']
    let currentLight = lights.indexOf(current)
    const length = lights.length - 1
    return currentLight == 2 ? lights[length % 2] : lights[++currentLight]
  }