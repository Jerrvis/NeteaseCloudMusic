import { useState } from 'react'
import Header from './components/Header'
import Player from './components/Player'
import Nav from './components/Nav'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      {/* 顶部 */}
      <Header></Header>
      <div>
        {/* 左边导航栏 */}
        <Nav></Nav>
        {/* 右边路由页面 */}
        <div>

        </div>
      </div>
      {/* 底部播放器 */}
      <Player></Player>
    </div>
  )
}

export default App
