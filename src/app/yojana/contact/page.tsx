import { SITES } from "@/lib/sites";
import { ContactPage } from "@/components/LegalPages";
export const metadata = { title: "Contact" };
export default function Page() {
  return <ContactPage site={SITES.yojana} />;
}
