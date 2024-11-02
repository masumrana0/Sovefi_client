import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function RateCalculator() {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          It is easy to <span className="text-primary">find your rate</span>
        </h2>
        <div className="grid md:grid-cols-[1fr_1fr_auto] gap-4">
          <Select>
            <SelectTrigger className="border border-primary">
              <SelectValue placeholder="Auto Loan Refinance" />
            </SelectTrigger>
            <SelectContent className="border border-primary">
              <SelectItem value="auto-refinance">
                Auto Loan Refinance
              </SelectItem>
              <SelectItem value="new-auto" disabled={true}>
                New Auto Loan
              </SelectItem>
              <SelectItem value="used-auto" disabled={true}>
                Used Auto Loan
              </SelectItem>
            </SelectContent>
          </Select>
          <Input type="number" placeholder="Enter desired loan amount" />
          <Button className="bg-primary hover:bg-primary text-white">
            SEE MY RATE
          </Button>
        </div>
      </div>
    </section>
  );
}
