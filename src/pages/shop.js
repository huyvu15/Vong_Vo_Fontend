import { useState } from "react";
// internal
import Wrapper from "@layout/wrapper";
import SEO from "@components/seo";
import Header from "@layout/header";
import ShopCta from "@components/cta";
import Footer from "@layout/footer";
import ShopBreadcrumb from "@components/common/breadcrumb/shop-breadcrumb";
import ShopArea from "@components/shop/shop-area";
import ErrorMessage from "@components/error-message/error";
import { useGetShowingProductsQuery } from "src/redux/features/productApi";
import ShopLoader from "@components/loader/shop-loader";
import { useRouter } from "next/router";

export default function Shop() {
  const router = useRouter();
  const { query } = router;
  const searchText = query;
  const { data: products, isError, isLoading } = useGetShowingProductsQuery();
  const [shortValue, setShortValue] = useState("");

  // selectShortHandler
  const selectShortHandler = (e) => {
    setShortValue(e.value);
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <ShopLoader loading={isLoading} />;
  }

  if (!isLoading && isError) {
    content = <ErrorMessage message="Có lỗi xảy ra" />;
  }

  if (!isLoading && !isError && products?.products?.length === 0) {
    content = <ErrorMessage message="Không tìm thấy sản phẩm!" />;
  }

  if (!isLoading && !isError && products?.products?.length > 0) {
    let all_products = products.products;
    let product_items = all_products;
    // parent
    const Category = query.Category;
    // children
    const category = query.category;
    // brands
    const brand = query.brand;
    // price
    const { priceMin, max, priceMax } = query;
    // color
    const { color } = query;

    if (Category) {
      product_items = product_items.filter(
        (product) =>
          product.parent.toLowerCase().replace("&", "").split(" ").join("-") ===
          Category.toLowerCase()
      );
    }
    if (category) {
      console.log("product_items", product_items)
      product_items = product_items.filter(
        (product) =>
          product.children
            .toLowerCase()
            .replace("&", "")
            .split(" ")
            .join("-") === category.toLowerCase()
      );
    }
    if (brand) {
      product_items = product_items.filter(
        (product) =>
          product.brand.name.toLowerCase().replace("&", "").split(" ").join("-") ===
          brand.toLowerCase()
      );
    }
    if (color) {
      product_items = product_items.filter((product) =>
        product.colors.map((c) => c.toLowerCase()).includes(color.toLowerCase())
      );
    }
    if (priceMin || priceMax) {
      product_items = product_items.filter((product) => {
        const price = Number(product.originalPrice);
        const minPrice = Number(priceMin);
        const maxPrice = Number(priceMax);
        if (priceMax && priceMin) {
          return price >= minPrice && price <= maxPrice;
        }
        if (priceMax) {
          return price >= priceMax;
        }
      });
    }
    // selectShortHandler
    if (shortValue === "Short Filtering") {
      product_items = all_products
      if (searchText.brand) {
        product_items = product_items.filter((prd) => prd.brand.name.toLowerCase().replace("&", "").split(" ").join("-") == (searchText.brand.toLowerCase()));
      }
      if (searchText.category) {
        product_items = product_items.filter((prd) => prd.parent.toLowerCase().replace("&", "").split(" ").join("-") == (searchText.category.toLowerCase()));
      }
      if (searchText.color) {
        product_items = product_items.filter((prd) => prd.colors.map((c) => c.toLowerCase()).includes(color.toLowerCase()));
      }
    }
    // Latest Product
    if (shortValue === "Latest Product") {
      product_items = all_products
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      if (searchText.brand) {
        product_items = product_items.filter((prd) => prd.brand.name.toLowerCase().replace("&", "").split(" ").join("-") == (searchText.brand.toLowerCase()));
      }
      if (searchText.category) {
        product_items = product_items.filter((prd) => prd.parent.toLowerCase().replace("&", "").split(" ").join("-") == (searchText.category.toLowerCase()));
      }
      if (searchText.color) {
        product_items = product_items.filter((prd) => prd.colors.map((c) => c.toLowerCase()).includes(color.toLowerCase()));
      }
    }
    // Price low to high
    if (shortValue === "Price low to high") {
      product_items = all_products
        .slice()
        .sort((a, b) => Number(a.originalPrice) - Number(b.originalPrice))
      if (searchText.brand) {
        product_items = product_items.filter((prd) => prd.brand.name.toLowerCase().replace("&", "").split(" ").join("-") == (searchText.brand.toLowerCase()));
      }
      if (searchText.category) {
        product_items = product_items.filter((prd) => prd.parent.toLowerCase().replace("&", "").split(" ").join("-") == (searchText.category.toLowerCase()));
      }
      if (searchText.color) {
        product_items = product_items.filter((prd) => prd.colors.map((c) => c.toLowerCase()).includes(color.toLowerCase()));
      }
    }
    // Price high to low
    if (shortValue === "Price high to low") {
      product_items = all_products
        .slice()
        .sort((a, b) => Number(b.originalPrice) - Number(a.originalPrice))
      if (searchText.brand) {
        product_items = product_items.filter((prd) => prd.brand.name.toLowerCase().replace("&", "").split(" ").join("-") == (searchText.brand.toLowerCase()));
      }
      if (searchText.category) {
        product_items = product_items.filter((prd) => prd.parent.toLowerCase().replace("&", "").split(" ").join("-") == (searchText.category.toLowerCase()));
      }
      if (searchText.color) {
        product_items = product_items.filter((prd) => prd.colors.map((c) => c.toLowerCase()).includes(color.toLowerCase()));
      }
    }


    content = (
      <ShopArea
        products={product_items}
        all_products={all_products}
        shortHandler={selectShortHandler}
      />
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle={"Cửa hàng"} />
      <Header style_2={true} />
      <ShopBreadcrumb />
      {content}
      <ShopCta />
      <Footer />
    </Wrapper>
  );
}

// export const getServerSideProps = async (context) => {
//   const { query } = context;

//   return {
//     props: {
//       query,
//     },
//   };
// };
