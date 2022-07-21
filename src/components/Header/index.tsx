import './index.css'

export default function Header() {

  return (
    <div>
      {/* 顶部 */}
      <header>
        <div className='logo'>
          <h2>网易云音乐</h2>
          <div className="search">
            <ul className="icon">
              <li className="disabled">
                <span className="iconfont icon-xiangzuojiantou"></span>
              </li>
              <li>
                <span className="iconfont icon-xiangyoujiantou"></span>
              </li>
              <div className="input">
                <span className="iconfont icon-fangdajing"></span>
                <input type="text" />
              </div>
              <li>
                <span className="iconfont icon-maikefeng-XDY"></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu">
          <div className="portrait">
            <span className="iconfont icon-yonghu"></span>
          </div>
          <div className="name">
            未登陆
          </div>
          <div className="icon-list">
            <ul>
              <li><span className="iconfont icon-pifu"></span></li>
              <li><span className="iconfont icon-chilun"></span></li>
              <li><span className="iconfont icon-xinfeng"></span></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
};
