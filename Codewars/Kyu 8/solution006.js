function updateLight(current) {
  
    //your code here!
    const lights = ['green', 'yellow', 'red']
    let currentLight = lights.indexOf(current)
    const length = lights.length - 1
    return currentLight == 2 ? lights[length % 2] : lights[++currentLight]
  }


const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current]

function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}