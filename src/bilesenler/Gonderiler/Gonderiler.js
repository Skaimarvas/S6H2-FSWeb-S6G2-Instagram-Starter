import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  // Değişkenler <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
  const { gonderiyiBegen, gonderiler } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((gonderi) => (
        <Gonderi
          key={gonderi.id}
          gonderiyiBegen={gonderiyiBegen}
          gonderi={gonderi}
        />
      ))}
    </div>
  );
};

export default Gonderiler;
