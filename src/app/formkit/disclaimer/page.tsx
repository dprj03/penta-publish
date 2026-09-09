import { SITES } from "@/lib/sites";
import { DisclaimerPage } from "@/components/LegalPages";
export const metadata = { title: "Disclaimer" };
export default function Page() {
  return <DisclaimerPage site={SITES.formkit} />;
}
