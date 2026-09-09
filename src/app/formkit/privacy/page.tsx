import { SITES } from "@/lib/sites";
import { PrivacyPage } from "@/components/LegalPages";
export const metadata = { title: "Privacy" };
export default function Page() {
  return <PrivacyPage site={SITES.formkit} />;
}
