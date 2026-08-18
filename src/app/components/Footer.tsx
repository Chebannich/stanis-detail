import Link from "next/link";
import Container from "./Container"

export default function Footer () {
  return (
    <footer className="py-11 border-t border-line">
      <Container>
        <div className="px-8">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3">
            <div className="text-[13px] text-silver-600">
              © 2026 StanisDetail — Mobile Fahrzeugaufbereitung, Versmold
            </div>
            <div className="flex flex-row gap-1 items-center text-[13px] text-silver-600">
              <Link href={"https://www.instagram.com/stanisdetail"} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-silver-100">Instagram</Link>
              <span>·</span>
              <Link href={"https://www.tiktok.com/@stanisdetail"} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-silver-100">TikTok</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}