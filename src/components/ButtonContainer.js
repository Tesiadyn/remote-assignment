import React, { useState } from "react";
// import useState

function ButtonContainer() {
  const [isHidden, setIshidden] = React.useState(true);
  // 定義state, 預設隱藏:是

  return (
    <div className="button-container">
      <button className="cta" onClick={() => setIshidden(!isHidden)}>
        Call to Action
      </button>
      {/*用callback防止render一開始就被執行
      將isHidden作為arg傳給setIshidden，切換isHidden的狀態 */}
      {!isHidden && (
        <section className="intro-cards">
          <div className="cards">
            <div className="card">Content box1</div>
            <div className="card">Content box2</div>
            <div className="card">Content box3</div>
            <div className="card">Content box4</div>
          </div>
        </section>
      )}
    </div>
  );
}
export default ButtonContainer;
