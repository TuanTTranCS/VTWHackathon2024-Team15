import { Bird, HomeIcon, LogOut } from "lucide-react";
import Link from "next/link";
import { Home, Clipboard, Inbox, Settings, Link2 } from "react-feather";

function Navbar() {
  return (
    <div className="flex w-64 flex-col">
      <nav className="flex flex-col gap-1 px-4 py-6">

        <Link
          href="/dashboard"
          className="flex items-center gap-4 rounded-md px-3 py-4 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
          prefetch={false}
        >
          <HomeIcon size="1.25rem" />
          Dashboard
        </Link>

        <Link
          href="/dashboard/inbox"
          className="flex items-center gap-4 rounded-md px-3 py-4 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
          prefetch={false}
        >
          <Inbox size="1.25rem" />
          Inbox
        </Link>

        <Link
          href="/dashboard/discover-profiles"
          className="flex items-center gap-4 rounded-md px-3 py-4 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
          prefetch={false}
        >
          <Bird size="1.25rem" />
          Matches
        </Link>

        <Link
          href="/auth/login"
          className="mt-[260px] flex items-center gap-4 rounded-md px-3 py-4 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
          prefetch={false}
        >
          <LogOut size="1.25rem" />
          Log Out
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

