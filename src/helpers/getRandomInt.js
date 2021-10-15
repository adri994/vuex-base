
const getRandomInt = () => {
  return new Promise((resolve) => {
    const rnInt = Math.floor(Math.random() * 20)

    setTimeout(() => {
      resolve(rnInt)
    }, 1000)
  })
}

export default getRandomInt
