// import Link from "next/link";
// import React from "react";

// const CopyrightText = () => {
//   return (
//     <p>
//       Bản quyền © {new Date().getFullYear()} by <Link href="/">Tiemcaivongne</Link> {' '}
//       Đã đăng ký Bản quyền.
//     </p>
//   );
// };

// export default CopyrightText;




import Link from "next/link";
import React from "react";

const CopyrightText = () => {
  return (
    <div style={{ textAlign: "center", padding: "10px 20px" }}>
      <p style={{ textAlign: "left", margin: 0 }}>
        Bản quyền © {new Date().getFullYear()} by <Link href="/">Tiemcaivongne</Link> {' '}
        Đã đăng ký Bản quyền.
      </p>
      <div style={{ textAlign: "center", marginTop: "10px",  }}>
        <Link href="https://tiemcaivongne.store">
          <img 
            src="https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-thong-bao-bo-cong-thuong.png" 
            alt="Footer Image" 
            style={{ width: "150px", height: "auto", cursor: "pointer", marginRight: "220px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default CopyrightText;

