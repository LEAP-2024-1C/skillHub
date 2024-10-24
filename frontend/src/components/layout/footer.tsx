import { Mail } from "lucide-react";
import { Copyright } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Phone } from "lucide-react";
import { Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#181818] text-[#fff] h-1/6">
            <div className="flex justify-evenly py-10">
                <ul>
                    <p className="pb-2">For Clients</p>
                    <li>How to hire</li>
                    <li>Talent Marketplace</li>
                    <li>Project Catalog</li>
                    <li>Hire an agency</li>
                    <li>Enterprise</li>
                </ul>
                <ul>
                    <p className="pb-2">For Talent</p>
                    <li>How to hire</li>
                    <li>Talent Marketplace</li>
                    <li>Project Catalog</li>
                    <li>Hire an agency</li>
                    <li>Enterprise</li>
                </ul>
                <ul>
                    <p className="pb-2">Resources</p>
                    <li>Help & Supports</li>
                    <li>Success stories</li>
                    <li>SkillHub reviews</li>
                    <li>Blog </li>
                    <li>Community</li>
                </ul>
            </div>
            <div className="flex justify-between mx-40 pb-10">
        <div className="text-[14px] text-[#fff] flex items-center">
          <Copyright className="cart" size={15} />
          <p className="text-[15px]">2024 SkillHub MN</p>
        </div>
        <div className="flex gap-5">
          <Facebook className="iconn" />
          <Instagram className="iconn" />
          <Linkedin className="iconn" />
          <Twitter className="iconn" />
        </div>
      </div>
        </footer>
    )
}