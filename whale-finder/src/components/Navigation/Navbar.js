import Link from "next/link";
import { Home, Clipboard, Inbox, Settings, Link2 } from "react-feather";

function Navbar() {
  return (
    <div className="flex w-64 flex-col">
      <nav className="flex flex-col gap-1 px-4 py-6">
        <Link
          href="/"
          className="flex items-center gap-4 rounded-md px-3 py-4 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
          prefetch={false}
        >
          <Home size="1.25rem" />
          Home
        </Link>

        <Link
          href="/dashboard"
          className="flex items-center gap-4 rounded-md px-3 py-4 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
          prefetch={false}
        >
          <Clipboard size="1.25rem" />
          Dashboard
        </Link>

        <Link
          href="/inbox"
          className="flex items-center gap-4 rounded-md px-3 py-4 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
          prefetch={false}
        >
          <Inbox size="1.25rem" />
          Inbox
        </Link>

        <Link
          href="/matches"
          className="flex items-center gap-4 rounded-md px-3 py-4 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
          prefetch={false}
        >
          <Link2 size="1.25rem" />
          Matches
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-4 rounded-md px-3 py-4 text-lg font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
          prefetch={false}
        >
          <Settings size="1.25rem" />
          Settings
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

