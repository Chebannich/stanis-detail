import Link from "next/link";
import Container from "./Container"

export default function Footer () {
  return (
    <footer className="py-11 border-t border-line">
      <Container>
        <div className="px-8">
          <div className="flex flex-row justify-between items-center">
            <div className="text-[13px] text-silver-600">
              © 2026 StanisDetail — Mobile Fahrzeugaufbereitung, Versmold
            </div>
            <div className="flex flex-row gap-1 items-center text-[13px] text-silver-600">
              <Link href={"https://www.instagram.com/stanisdetail"} target="_blank" rel="noopener noreferrer">Instagram</Link>
              <span>·</span>
              <Link href={"https://www.tiktok.com/@stanisdetail"} target="_blank" rel="noopener noreferrer">TikTok</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}