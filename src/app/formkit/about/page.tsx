import { SITES } from "@/lib/sites";
import { AboutPage } from "@/components/LegalPages";
export const metadata = { title: "About" };
export default function Page() {
  return <AboutPage site={SITES.formkit} />;
}
