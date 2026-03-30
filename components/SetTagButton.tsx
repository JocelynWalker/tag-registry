export function SetTagButton({
  disabled,
  loading,
  onClick,
}: {
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}) {
  return (
    <button className="button-primary" type="button" disabled={disabled || loading} onClick={onClick}>
      {loading ? "Setting tag..." : "Set tag"}
    </button>
  );
}
