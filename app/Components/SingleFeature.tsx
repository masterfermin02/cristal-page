export default function SingleFeature({ label }: { label: string }) {
  return (
    <div className="feature-row">
      <span className="feature-dot" />
      <p className="text-inherit">{label}</p>
    </div>
  );
}
