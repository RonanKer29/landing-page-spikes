import Image from "next/image";
import logo from "../public/logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <div className="flex mx-auto mt-10 h-20 w-2/3 rounded-2xl bg-white p-6 shadow-[0px_4px_22px_0px_rgba(0,0,0,0.10)]">
      <div className="flex items-center gap-3 text-base">
        <Image src={logo} alt="logo" width={32} height={32} />
        <p className="font-semibold">Squaree</p>
      </div>
      <div className="flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col gap-3 w-full">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
