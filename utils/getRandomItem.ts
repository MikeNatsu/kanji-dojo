export const getRandomItem = <T>(list: Array<T>) => {
  return list[Math.floor(Math.random() * list.length)]
}