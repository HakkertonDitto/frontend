import React, { useState, useEffect } from 'react';
import '../styles/LogoText.css';

const LogoText = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 3000); // 3초 후 애니메이션을 중단하고 "디토"로 변환

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="logo-container">
      <div className="logo-text">
        {isAnimating ? (
          <div><span className="green-text">디</span>지털 장벽 완화의 <span className="green-text">토</span>대</div>
        ) : (
          <span className="green-text">디토</span>
        )}
      </div>
    </div>
  );
};

export default LogoText;
