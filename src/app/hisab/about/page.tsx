import { LegalPage } from "@/components/LegalPages";
import { getSite } from "@/lib/sites";

export default function Page() {
  return <LegalPage site={getSite("hisab")} kind="about" />;
}
