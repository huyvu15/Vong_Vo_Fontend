import React from "react";
// internal
import { Dots, Lists } from "@svg/index";
import NiceSelect from "@ui/NiceSelect";

export function ShowingResult({ show, total }) {
  return (
    <div className="shop__result">
      <p>Hiển thị 1–{show} của {total} kết quả</p>
    </div>
  );
}

export function ShopShortTab({ handleTab }) {
  return (
    <div className="shop__sort-item">
      <div className="shop__sort-tab tp-tab">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              onClick={() => handleTab('grid')}
              className="nav-link active"
              id="nav-grid-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-grid"
              type="button"
              role="tab"
              aria-controls="nav-grid"
              aria-selected="true"
              tabIndex='-1'
            >
              <Dots />
            </button>
            <button
              onClick={() => handleTab('lists')}
              className="nav-link"
              id="nav-list-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-list"
              type="button"
              role="tab"
              aria-controls="nav-list"
              aria-selected="false"
              tabIndex='-1'
            >
              <Lists />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function ShopShortSelect({shortHandler}) {
  return (
    <div className="shop__sort-item">
      <div className="shop__sort-select">
        <NiceSelect
          options={[
            { value: "Short Filtering", text: "Sắp xếp tìm kiếm" },
            { value: "Latest Product", text: "Sản phẩm mới nhất" },
            { value: "Price low to high", text: "Giá thấp đến cao" },
            { value: "Price high to low", text: "Giá cao xuống thấp" },
          ]}
          defaultCurrent={0}
          onChange={shortHandler}
          name="Sắp xếp mới nhất"
        />
      </div>
    </div>
  );
}
