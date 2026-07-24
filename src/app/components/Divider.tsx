export default function Divider() {
  return (
    <div className="max-w-280 m-auto px-8">
      <div className="relative h-px bg-[repeating-linear-gradient(90deg,var(--color-line-strong)_0,var(--color-line-strong)_6px,transparent_6px,transparent_12px)]
                      before:content-['']
                      before:absolute
                      before:left-0
                      before:right-0
                      before:h-px
                      before:bottom-1
                      before:bg-[repeating-linear-gradient(90deg,var(--color-line)_0,var(--color-line)_6px,transparent_6px,transparent_12px)]
                      
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:right-0
                      after:h-px
                      after:top-1
                      after:bg-[repeating-linear-gradient(90deg,var(--color-line)_0,var(--color-line)_6px,transparent_6px,transparent_12px)]"></div>
    </div>
  );
};