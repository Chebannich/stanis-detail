export default function Container({ children }: { children: React.ReactNode}) {
  return (
    <div className="max-w-280 mx-auto">
      {children}
    </div>
  );
};