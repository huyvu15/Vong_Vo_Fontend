import { useRouter } from "next/router";

const PriceItem = ({ id, min, max }) => {
  const router = useRouter();

  // handlePrice
  const handlePrice = (min, max) => {
    const { pathname, query } = router;
    if (min && max) {
      const { ...rest } = query;
      router.push({
        pathname,
        query: { ...rest, priceMin: min, priceMax: max },
      });
    } else if (min) {
      const { priceMax, ...rest } = query;
      router.push({
        pathname,
        query: { ...rest, priceMin: min },
      });
    } else {
      const { priceMin, ...rest } = query;
      router.push({
        pathname,
        query: { ...rest, priceMax: max },
      });
    }
  };
  return (
    <div className="shop__widget-list-item">
      <input
        onChange={() => handlePrice(min, max)}
        type="checkbox"
        id={`higher-${id}`}
        checked={
          router.query.priceMin === `${min}` ||
            router.query.priceMax === `${max}`
            ? "checked"
            : false
        }
      />
      {max < 1000 ? (
        <label htmlFor={`higher-${id}`}>
          ${min} - ${max}
        </label>
      ) : (
        <label htmlFor={`higher-${id}`}>
          ${max}+
        </label>
      )}
    </div>
  );
};

export default PriceItem;
