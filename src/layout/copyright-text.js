import Link from "next/link";
import React from "react";

const CopyrightText = () => {
  return (
    <p>
      Bản quyền © {new Date().getFullYear()} by <Link href="/">Tiemcaivongne</Link> {' '}
      Đã đăng ký Bản quyền.
    </p>
  );
};

export default CopyrightText;
