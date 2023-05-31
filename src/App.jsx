import { useState, useEffect } from "react"
import { Home } from "./Home"

function App() {
  let count = 0
  const [countS, setCountS] = useState(0)
  const [colorBG, setColorGB] = useState("")
  const [date, setDate] = useState(new Date())
  const [email, setEmail] = useState("")

  useEffect(() => {
    console.log(email)
  }, [email])

  const Increment = () => {
    count++
    setCountS(countS + 1)
  }

  const randomColor = () => {
    const colorChar = "0123456789ABCDEF"
    let charA = []
    for (let i = 0; i < 6; i++) {
      charA[i] = colorChar[Math.floor(Math.random() * 16)]
    }
    return charA.join("")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const color = randomColor()
    setColorGB(color)
    console.log(color)
  }, [countS])

  return (
    <>
      <p>Test1</p>
      <Home userName="arm" userLast="dumdee">
        <form action="">
          <input
            type="text"
            placeholder="email"
            value={email}
            className="border m-5"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </form>
      </Home>
      <p>Test2</p>

      <hr />

      <p>{date.toLocaleString()}</p>

      <hr />

      {count}
      <br />
      {countS}

      <button onClick={Increment}>Increment</button>
      <button onClick={() => Increment()}>Increment</button>

      <hr />

      <div
        className="p-5"
        style={{
          backgroundColor: "#" + colorBG,
        }}
      >
        Tech Here
      </div>
    </>
  )
}

export default App
