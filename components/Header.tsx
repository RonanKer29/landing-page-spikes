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
import Link from "next/link";
import { components } from "@/app/constants";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="mx-auto mt-10 flex  h-20 w-2/3 items-center bg-white p-6 shadow-[0px_4px_22px_0px_rgba(0,0,0,0.10)] rounded-2xl">
      {/* Left Section: Logo + Squaree */}
      <div className="flex items-center gap-3 text-base">
        <Image src={logo} alt="logo" width={32} height={32} />
        <p className="font-semibold">Squaree</p>
      </div>

      {/* Center Section: Navigation */}
      <div className="flex justify-center flex-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#242424] font-manrope text-base font-semibold leading-6">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex flex-col justify-end p-6 no-underline rounded-md outline-none select-none from-muted/50 to-muted size-full bg-gradient-to-b focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#242424] font-manrope text-base font-semibold leading-6">
                Ressources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <li key={component.title}>
                      <a
                        href={component.href}
                        className="block p-2 hover:bg-gray-100"
                      >
                        <h3 className="font-semibold">{component.title}</h3>
                        <p>{component.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#242424] font-manrope text-base font-semibold leading-6">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex flex-col justify-end p-6 no-underline rounded-md outline-none select-none from-muted/50 to-muted size-full bg-gradient-to-b focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#242424] font-manrope text-base font-semibold leading-6">
                  Contact Sales
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Section: Search Icon */}
      <div className="">
        <Link href="/">
          <Search strokeWidth={1} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
