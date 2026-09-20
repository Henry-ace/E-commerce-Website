export default function ProductCardSkeleton() {
  return (
    <div className="product-card">
      <div className="skeleton skeleton-card__img" />
      <div className="product-card__info">
        <div style={{ width: "100%" }}>
          <div className="skeleton skeleton-card__line" />
        </div>
        <div className="skeleton skeleton-card__line--price" />
      </div>
    </div>
  );
}