import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Home() {
  return (
    <div>

      {/* Button */}
      <div className="flex gap-2 justify-center py-10">
        <Button className='px-10 py-5 text-2xl cursor-progress' variant="destructive">Button</Button>
        <Button className='px-10 py-5 text-2xl cursor-progress' variant="outline">Button</Button>
        <Button className='px-10 py-5 text-2xl cursor-progress' variant="secondary">Button</Button>
        <Button className='px-10 py-5 text-2xl cursor-progress' variant="ghost">Button</Button>
      </div>

      {/* DropDownMenu */}
      <div className="flex justify-center pb-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='text-2xl p-8 cursor-progress' variant="">Open DropdownMenu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


      {/* DraK Mode */}
      <div className="flex items-center gap-2 scale-125 justify-center pb-10">
        <h1>DraK & Light</h1>
        <ModeToggle /> 
        <h1>Toggle Mode</h1>
      </div>


      

  </div>


    // <div className="bg-black text-white">

    //   {/* HERO SECTION */}
    //   <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('/ff-bg.jpg')] bg-cover bg-center">
    //     <h1 className="text-5xl md:text-7xl font-bold text-orange-500">
    //       FREE FIRE HUB
    //     </h1>
    //     <p className="mt-4 text-gray-300 max-w-xl">
    //       Latest news, tips, tricks, tournaments and pro gameplay updates for Free Fire players.
    //     </p>

    //     <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold">
    //       Start Playing
    //     </button>
    //   </section>

    //   {/* ABOUT SECTION */}
    //   <section className="py-20 px-6 md:px-20 bg-zinc-900">
    //     <h2 className="text-3xl font-bold text-orange-400 mb-6">
    //       About Free Fire
    //     </h2>
    //     <p className="text-gray-300 leading-relaxed">
    //       Free Fire is one of the most popular battle royale games where 50 players
    //       fight to be the last one standing. Fast matches, exciting gameplay, and
    //       intense survival action make it unique.
    //     </p>
    //   </section>

    //   {/* CHARACTERS SECTION */}
    //   <section className="py-20 px-6 md:px-20">
    //     <h2 className="text-3xl font-bold text-orange-400 mb-10 text-center">
    //       Popular Characters
    //     </h2>

    //     <div className="grid md:grid-cols-3 gap-6">

    //       <div className="bg-zinc-800 p-6 rounded-xl text-center">
    //         <h3 className="text-xl font-bold">Alok</h3>
    //         <p className="text-gray-400 mt-2">Healing & Speed Boost</p>
    //       </div>

    //       <div className="bg-zinc-800 p-6 rounded-xl text-center">
    //         <h3 className="text-xl font-bold">Chrono</h3>
    //         <p className="text-gray-400 mt-2">Shield Ability</p>
    //       </div>

    //       <div className="bg-zinc-800 p-6 rounded-xl text-center">
    //         <h3 className="text-xl font-bold">Kelly</h3>
    //         <p className="text-gray-400 mt-2">Fast Movement Speed</p>
    //       </div>

    //     </div>
    //   </section>

    //   {/* MODES SECTION */}
    //   <section className="py-20 px-6 md:px-20 bg-zinc-900">
    //     <h2 className="text-3xl font-bold text-orange-400 mb-10 text-center">
    //       Game Modes
    //     </h2>

    //     <div className="grid md:grid-cols-3 gap-6 text-center">

    //       <div className="bg-black p-6 rounded-xl border border-orange-500">
    //         Battle Royale
    //       </div>

    //       <div className="bg-black p-6 rounded-xl border border-orange-500">
    //         Clash Squad
    //       </div>

    //       <div className="bg-black p-6 rounded-xl border border-orange-500">
    //         Ranked Mode
    //       </div>

    //     </div>
    //   </section>

    //   {/* TOURNAMENT SECTION */}
    //   <section className="py-20 px-6 md:px-20">
    //     <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
    //       Tournaments
    //     </h2>

    //     <p className="text-gray-300 text-center max-w-2xl mx-auto">
    //       Join weekly Free Fire tournaments and win amazing rewards, diamonds, and recognition as a pro player.
    //     </p>
    //   </section>

    //   {/* FOOTER */}
    //   <footer className="py-10 text-center border-t border-zinc-800 text-gray-500">
    //     © 2026 Free Fire Hub. All rights reserved.
    //   </footer>

    // </div>
  );
}