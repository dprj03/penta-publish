import { SITES } from "@/lib/sites";
import { TermsPage } from "@/components/LegalPages";
export const metadata = { title: "Terms" };
export default function Page() {
  return <TermsPage site={SITES.pariksha} />;
}
