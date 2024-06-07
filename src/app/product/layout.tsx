import { MenuPhone } from "@/components/MenuPhone";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        {children}
        <MenuPhone />
      </>
    );
  }