import { useRouter } from "next/router";
import React, { useState } from "react";

const ShopColor = ({ all_products }) => {
  const router = useRouter();
  const all_colors = all_products.map((prd) => prd.colors.map((c) => c));
  var colors = [...new Set(all_colors.flat())];
  colors = colors.map((clr) => clr.toLowerCase());
  colors = [...new Set(colors)];

  // handle brand
  const handleColors = (value) => {
    const { pathname, query } = router;
    if (query && query.color == value.toLowerCase()) {
      const { color, ...rest } = query;
      router.push({
        pathname,
        query: { ...rest },
      });
    } else {
      router.push({
        pathname,
        query: { ...query, color: value.toLowerCase() },
      });
    }
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="color__widget">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#color_widget_collapse"
          aria-expanded="true"
          aria-controls="color_widget_collapse"
        >
          Màu
        </button>
      </h2>
      <div
        id="color_widget_collapse"
        className="accordion-collapse collapse show"
        aria-labelledby="color__widget"
        data-bs-parent="#shop_color"
      >
        <div className="accordion-body">
          <div
            className="shop__widget-list"
            style={{ height: "180px", overflowY: "auto" }}
          >
            {colors.map((clr, i) => {
              let color = clr.toLowerCase();
              return (
              <div key={i} className={`shop__widget-list-item-2 has-${color}`}>
                <input
                  type="checkbox"
                  id="c-orange"
                  checked={
                    router.query.color === clr.toLowerCase() ? "checked" : false
                  }
                  readOnly
                />
                <label
                  onClick={() => handleColors(clr)}
                  htmlFor="c-orange"
                  className="text-capitalize"
                >
                  {clr}
                </label>
              </div>
            )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopColor;
