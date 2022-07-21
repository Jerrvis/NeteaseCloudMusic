import './index.css'

export default function Player() {
  
  return (
    <div className="bottom">
      <div className="song-info">
        <img src="" alt="" />
        <div className="message">
          <h3>必杀技</h3>
          <p>古巨基</p>
        </div>
      </div>
      <div className="player">
          <ul>
            <li><span className="iconfont icon-24gl-repeatOnce2"></span></li>
            <li className="bg-gray"><span className="iconfont icon-shangyishoushangyige"></span></li>
            <li className="bg-gray"><span className="iconfont icon-bofang"></span></li>
            <li className="bg-gray"><span className="iconfont icon-xiayigexiayishou"></span></li>
            <li><span>词</span></li>
          </ul>
        <div className="loading"></div>
      </div>
      <div className="songs-list"></div>
    </div>
  )
};
